import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style'; //C of Component
import colors from '../../theme/colors';
import api from '../../services/api';
import { useStateValue } from '../../contexts/StateContext';

export default () => {

    const navigation = useNavigation();

    const [context, dispatch] = useStateValue();

    useEffect(() => {
        const checkLogin = async () => {
            let token = await api.getToken();

            if (!token) {
                navigation.reset({
                    index: 1,
                    routes: [{ name: 'LoginScreen' }]
                });
                return;
            }

            let result = await api.validateToken();

            if (result.error !== '') {
                alert(result.error);
                dispatch({
                    type: 'setToken',
                    payload: {
                        token: ''
                    }
                });
                navigation.reset({
                    index: 1,
                    routes: [{ name: 'LoginScreen' }]
                });
                return;
            }

            dispatch({
                type: 'setUser',
                payload: {
                    user: result.user
                }
            });

            navigation.reset({
                index: 1,
                routes: [{ name: 'ChoosePropertyScreen' }]
            });
        }

        checkLogin();
    }, []);

    return (
        <C.Container>
            <C.LoadingIcon color={colors.violet} size="large" />
        </C.Container>
    );
}
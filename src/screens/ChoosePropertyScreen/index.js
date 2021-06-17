import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import C from './style'; //C of Component
import colors from '../../theme/colors';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await api.logout();
        navigation.reset({
            index: 1,
            routes: [{ name: 'LoginScreen' }]
        });
    }

    useEffect(() => {
        const checkPropertySel = async () => {
            let property = await AsyncStorage.getItem('property');
            if (property) {
                property = JSON.parse(property);
                await handleChooseProperty(property);
            }

            setLoading(false);
        }

        checkPropertySel();
    }, []);

    const handleChooseProperty = async (property) => {
        await AsyncStorage.setItem('property', JSON.stringify(property));
        dispatch({
            type: 'setProperty',
            payload: { property }
        });
        navigation.reset({
            index: 1,
            routes: [{ name: 'MainDrawer' }]
        });
    }

    return (
        <C.Container>
            <C.Scroller>
                {loading &&
                    <C.LoadingIcon color={colors.violet} size="large" />
                }
                {!loading && context.user.user.properties.length > 0 &&
                    <>
                        <C.HeadTitle>Olá, {context.user.user.name}</C.HeadTitle>
                        <C.HeadTitle>Escolha uma de suas propriedades</C.HeadTitle>

                        <C.PropertyList>
                            {context.user.user.properties.map((item, index) => (
                                <C.ButtonArea key={index} onPress={() => handleChooseProperty(item)}>
                                    <C.ButtonText>{item.name}</C.ButtonText>
                                </C.ButtonArea>
                            ))}
                        </C.PropertyList>
                    </>
                }
                {!loading && !context.user.user.properties.length &&
                    <C.BigArea>
                        <C.HeadTitle>{context.user.user.name}, seja bem vindo(a)!</C.HeadTitle>
                        <C.HeadTitle>Aguarde a administração liberar seu cadastro</C.HeadTitle>
                    </C.BigArea>
                }
            </C.Scroller>
            <C.ExistButtonArea onPress={handleLogout}>
                <C.ExitButtonText>Sair</C.ExitButtonText>
            </C.ExistButtonArea>
        </C.Container>
    );
}
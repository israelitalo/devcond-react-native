import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import C from './style'; //C of Component
import colors from '../../theme/colors';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!cpf && !password) return Alert.alert('Ops...', 'Preencha o CPF e a Senha');

        setLoading(true);

        let result = await api.login(cpf, password);

        setLoading(false);

        if (result.error !== '') return Alert.alert('Ops...', result.error);

        dispatch({
            type: 'setToken',
            payload: { token: result.token }
        });
        dispatch({
            type: 'setUser',
            payload: { user: result.user }
        });

        navigation.reset({
            index: 1,
            routes: [{ name: 'ChoosePropertyScreen' }]
        });
    }

    const handleRegister = () => {
        navigation.navigate('RegisterScreen');
    }

    return (
        <C.Container>
            <C.Logo
                source={require('../../assets/undraw_home.png')}
                resizeMode="contain"
            />
            <C.Field
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={(text => setCpf(text))}
            />
            <C.Field
                placeholder="Digite sua senha"
                secureTextEntry={true}
                value={password}
                onChangeText={(text => setPassword(text))}
            />
            <C.ButtonArea onPress={handleLogin}>
                {loading ?
                    <C.LoadingIcon color={colors.white} size="small" />
                    :
                    <C.ButtonText>Entrar</C.ButtonText>
                }
            </C.ButtonArea>

            <C.ButtonArea onPress={handleRegister}>
                <C.ButtonText>Cadastrar-se</C.ButtonText>
            </C.ButtonArea>
        </C.Container>
    );
}
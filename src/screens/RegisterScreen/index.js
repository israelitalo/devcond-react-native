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

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Fazer cadastro'
        })
    }, []);

    const handleRegister = async () => {
        if (!name || !cpf || !email || !password || !passwordConfirm) {
            return Alert.alert('Ops...', 'Preencha todos os campos');
        }

        if (password !== passwordConfirm) return Alert.alert('Ops...', 'Senha e Confirmação da senha devem ser iguais');

        let params = {
            name,
            cpf,
            email,
            password,
            password_confirm: passwordConfirm
        }

        setLoading(true);

        let result = await api.register(params);

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

    return (
        <C.Container>
            <C.Field
                placeholder="Digite seu Nome"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <C.Field
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={(text) => setCpf(text)}
            />
            <C.Field
                placeholder="Digite seu E-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <C.Field
                placeholder="Digite sua Senha"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <C.Field
                placeholder="Confirme sua Senha"
                secureTextEntry={true}
                value={passwordConfirm}
                onChangeText={(text) => setPasswordConfirm(text)}
            />
            <C.ButtonArea onPress={handleRegister}>
                {loading ?
                    <C.LoadingIcon color={colors.white} size="small" />
                    :
                    <C.ButtonText>Cadastrar</C.ButtonText>
                }
            </C.ButtonArea>
        </C.Container>
    );
}
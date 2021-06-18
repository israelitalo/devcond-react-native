import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import C from './style'; //C of Component
import colors from '../../theme/colors';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import { WarningItem } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [warnText, setWarnText] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Adicionar Ocorrências',
        });
    }, []);

    return (
        <C.Container>
            <C.Scroll>
                <C.Title>Descreva a ocorrência</C.Title>
                <C.Field
                    placeholder="Descrição da ocorrência"
                    value={warnText}
                    onChangeText={(text) => setWarnText(text)}
                />

                <C.Title>Fotos relacionadas</C.Title>

                <C.PhotoArea>
                    <C.PhotoScroll horizontal={true}>
                        <C.PhotoAddButton onPress={null}>
                            <Icon name="camera" size={24} color={colors.black} />
                        </C.PhotoAddButton>
                    </C.PhotoScroll>
                </C.PhotoArea>

                <C.ButtonArea onPress={null}>
                    <C.ButtonText>Salvar</C.ButtonText>
                </C.ButtonArea>
            </C.Scroll>
        </C.Container>
    );
}
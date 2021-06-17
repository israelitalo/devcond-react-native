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

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Livro de Ocorrências',
            headerRight: () => (
                <C.AddButton onPress={() => navigation.navigate('WarningAddScreen')}>
                    <Icon name="plus" size={24} color={colors.violetIcon} />
                </C.AddButton>
            )
        });
        getList();
    }, []);

    const getList = async () => {
        setList([]);

        setLoading(true);

        const result = await api.getWarnings();

        if (result.error !== '') return Alert.alert('Ops...', result.error);

        setList(result.list);

        setLoading(false);
    }

    return (
        <C.Container>
            {!loading && !list.length &&
                <C.NoListArea>
                    <C.NoListText>Não há ocorrências nesta propriedade.</C.NoListText>
                </C.NoListArea>
            }
            {!loading && list.length > 0 &&
                <C.ListDocs
                    data={list}
                    onRefresh={getList}
                    refreshing={loading}
                    renderItem={(item) => <WarningItem data={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            }
        </C.Container>
    );
}
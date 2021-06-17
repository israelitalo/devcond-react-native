import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import C from './style'; //C of Component
import colors from '../../theme/colors';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import { DocumentItem } from '../../components'

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        navigation.setOptions({ headerTitle: 'Documentos do condomínio' });
        getDocs();
    }, []);

    const getDocs = async () => {
        setDocs([]);

        setLoading(true);

        const result = await api.getDocs();

        if (result.error !== '') return Alert.alert('Ops...', result.error);

        setDocs(result.list);

        setLoading(false);
    }

    return (
        <C.Container>
            {!loading && !docs.length &&
                <C.NoListArea>
                    <C.NoListText>Não há documentos.</C.NoListText>
                </C.NoListArea>
            }
            {!loading && docs.length > 0 &&
                <C.ListDocs
                    data={docs}
                    onRefresh={getDocs}
                    refreshing={loading}
                    renderItem={(item) => <DocumentItem data={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            }
        </C.Container>
    );
}
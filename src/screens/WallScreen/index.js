import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import C from './style'; //C of Component
import colors from '../../theme/colors';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import { WallItem } from '../../components'

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [walls, setWalls] = useState([]);

    useEffect(() => {
        navigation.setOptions({ headerTitle: 'Mural de Avisos' });
        getWall();
    }, []);

    const getWall = async () => {
        setLoading(true);

        const result = await api.getWall();

        if (result.error !== '') return Alert.alert('Ops...', result.error);

        setWalls(result.list);

        setLoading(false);
    }

    return (
        <C.Container>
            {loading &&
                <C.LoadingIcon color={colors.violet} size="large" />
            }
            {!loading && !walls.length &&
                <C.NoListArea>
                    <C.NoListText>Não há avisos.</C.NoListText>
                </C.NoListArea>
            }
            {!loading && walls.length > 0 &&
                <C.ListWalls
                    data={walls}
                    renderItem={(wall) => <WallItem data={wall} />}
                    keyExtractor={(wall) => wall.id.toString()}
                />
            }
        </C.Container>
    );
}
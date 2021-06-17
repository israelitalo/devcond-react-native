import React, { useState, useEffect } from 'react';
import C from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/colors';
import api from '../../services/api';
import { Alert } from 'react-native';
import { Linking } from 'react-native';

const DocumentItem = (props) => {
    const { item } = props.data;

    const handleClick = async () => {
        const support = await Linking.canOpenURL(item.fileurl);
        if (support) {
            await Linking.openURL(item.fileurl);
        }
    }

    return (
        <C.Area onPress={handleClick}>
            <Icon name="file-text" size={30} color={colors.violetIcon} />
            <C.Title>{item.title}</C.Title>
        </C.Area>
    );
}

export default DocumentItem;
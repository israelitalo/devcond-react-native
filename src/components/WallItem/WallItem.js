import React, { useState, useEffect } from 'react';
import C from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/colors';
import api from '../../services/api';
import { Alert } from 'react-native';

const WallItem = (props) => {
    const { item } = props.data;

    const [likeCount, setLikeCount] = useState(item.likes);
    const [liked, setLiked] = useState(item.liked);

    const handleLike = async () => {
        const result = await api.likeWallPost(item.id);
        if (result.error !== '') return Alert.alert('Ops...', result.error);
        setLikeCount(result.likes);
        setLiked(result.liked);
    }

    return (
        <C.Area>
            <C.Header>
                <Icon name="newspaper-o" size={30} color={colors.violetIcon} />
                <C.InfoArea>
                    <C.Title>{item.title}</C.Title>
                    <C.Date>{item.datecreated}</C.Date>
                </C.InfoArea>
            </C.Header>
            <C.Body>{item.body}</C.Body>
            <C.Footer>
                <C.LikeButton onPress={handleLike}>
                    {liked ?
                        <Icon name="heart" size={17} color={colors.red} /> :
                        <Icon name="heart-o" size={17} color={colors.red} />}
                </C.LikeButton>
                <C.LikeText>{likeCount} pessoa{likeCount === 1 ? '' : 's'} curti{likeCount === 1 ? 'u' : 'ram'}</C.LikeText>
            </C.Footer>
        </C.Area>
    );
}

export default WallItem;
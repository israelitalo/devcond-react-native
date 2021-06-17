import React, { useState, useEffect } from 'react';
import C from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/colors';
import { Modal } from 'react-native';

const WarningItem = (props) => {
    const { item } = props.data;

    const [openModal, setOpenModal] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const setStatus = (status) => {
        return `${status === 'IN_REVIEW' ? 'Ocorrência em análise' : 'Resolvida'}`;
    }

    const handleOpenModal = (photo) => {
        setSelectedPhoto(photo);
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedPhoto(null);
    }

    return (
        <C.Area>
            <C.Date>{item.datecreated}</C.Date>
            <C.Title>{item.title}</C.Title>
            <C.StatusArea>
                <Icon name="inbox" size={24} color={colors.violetIcon} />
                <C.StatusText>{setStatus(item.status)}</C.StatusText>
            </C.StatusArea>
            {item.photos.length > 0 &&
                <C.PhotosArea>
                    {item.photos.map((photo, index) => (
                        <C.PhotoItem key={index} onPress={() => handleOpenModal(photo)}>
                            <C.PhotoImage source={{ uri: photo }} resizeMode="cover" />
                        </C.PhotoItem>
                    ))}
                </C.PhotosArea>
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
                onRequestClose={handleCloseModal}
            >
                <C.ModalArea>
                    <C.ModalImage source={{ uri: selectedPhoto }} resizeMode="contain" />
                    <C.ModalClodeButton onPress={handleCloseModal}>
                        <Icon name="close" size={24} color={colors.white} />
                    </C.ModalClodeButton>
                </C.ModalArea>
            </Modal>
        </C.Area>
    );
}

export default WarningItem;
import styled from 'styled-components/native';
import colors from '../../theme/colors';

export default {
    Area: styled.View`
        background-color: ${colors.white};
        border-width: 2px;
        border-color: ${colors.silverButtonBorder};
        border-radius: 15px;
        padding: 15px;
        margin: 5px 10px;
    `,
    Title: styled.Text`
        font-size: 15px;
        color: ${colors.black};
    `,
    Date: styled.Text`
        font-size: 14px;
        font-weight: bold;
        color: ${colors.iconEngine};
        margin-bottom: 10px;
    `,
    StatusArea: styled.View`
        flex-direction: row;
        align-items: center;
        margin: 10px 0;
    `,
    StatusText: styled.Text`
        font-size: 14px;
        color: ${colors.iconEngine};
        margin-left: 10px;
    `,
    PhotosArea: styled.View`
        flex-direction: row;
    `,
    PhotoItem: styled.TouchableOpacity`
        margin-right: 10px;
    `,
    PhotoImage: styled.Image`
        width: 50px;
        height: 50px;
        border-radius: 5px;
    `,
    ModalArea: styled.View`
        flex: 1;
        background-color: ${colors.black};
    `,
    ModalImage: styled.Image`
        flex: 1;
    `,
    ModalClodeButton: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
        position: absolute;
        top: 15px;
        right: 0;
    `
};
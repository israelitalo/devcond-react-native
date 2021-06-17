import styled from 'styled-components/native';
import colors from '../../theme/colors';

export default {
    Area: styled.View`
        background-color: ${colors.white};
        border-width: 2px;
        border-color: ${colors.silverButtonBorder};
        border-radius: 20px;
        padding: 15px;
        margin: 5px 10px;
    `,
    Header: styled.View`
        flex-direction: row;
        align-items: center;
    `,
    Body: styled.Text`
        font-size: 15px;
        font-weight: bold;
        color: ${colors.black};
        margin: 15px 0;
    `,
    Footer: styled.View`
        flex-direction: row;
        align-items: center;
    `,
    InfoArea: styled.View`
        margin-left: 15px;
        flex: 1;
    `,
    Title: styled.Text`
        font-size: 17px;
        font-weight: bold;
        color: ${colors.black}
    `,
    Date: styled.Text`
        font-size: 14px;
        font-weight: bold;
        color: ${colors.iconEngine}
    `,
    LikeButton: styled.TouchableOpacity`
        height: 20px;
        width: 20px;
        justify-content: center;
        align-items: center;
    `,
    LikeText: styled.Text`
        margin-left: 5px;
        font-size: 15px;
        color: ${colors.iconEngine};
    `,
};
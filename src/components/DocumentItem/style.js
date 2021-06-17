import styled from 'styled-components/native';
import colors from '../../theme/colors';

export default {
    Area: styled.TouchableOpacity`
        background-color: ${colors.white};
        border-width: 2px;
        border-color: ${colors.silverButtonBorder};
        border-radius: 15px;
        padding: 15px;
        margin: 5px 10px;
        flex-direction: row;
        align-items: center;
    `,
    Title: styled.Text`
        font-size: 15px;
        color: ${colors.black};
        margin-left: 10px;
    `,
};
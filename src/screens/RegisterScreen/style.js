import styled from 'styled-components/native';
import colors from '../../theme/colors';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        padding: 20px;
        background-color: ${colors.background};
    `,
    Field: styled.TextInput`
        border-width: 1px;
        border-color: ${colors.silverLight};
        background-color: ${colors.white};
        border-radius: 5px;
        color: ${colors.black};
        font-size: 15px;
        padding: 10px;
        margin-bottom: 15px;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: ${colors.violet};
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 15px;
    `,
    ButtonText: styled.Text`
        color: ${colors.white};
        font-size: 15px;
        font-weight: bold;
    `,
    LoadingIcon: styled.ActivityIndicator`

    `
};
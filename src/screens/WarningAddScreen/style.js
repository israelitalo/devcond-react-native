import styled from 'styled-components/native';
import colors from '../../theme/colors';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: ${colors.background};
    `,
    Scroll: styled.ScrollView`
        flex: 1;
        padding: 20px;
    `,
    Title: styled.Text`
        font-size: 17px;
        color: ${colors.black};
        margin: 10px 0;
    `,
    Field: styled.TextInput`
        border-width: 1px;
        border-color: ${colors.silverLight};
        background-color: ${colors.white};
        border-radius: 5px;
        color: ${colors.black};
        font-size: 15px;
        padding: 10px;
    `,
    PhotoArea: styled.View`
        margin-bottom: 30px;
    `,
    PhotoScroll: styled.ScrollView`
        flex: 1;
    `,
    PhotoAddButton: styled.TouchableOpacity`
        width: 65px;
        height: 65px;
        justify-content: center;
        align-items: center;
        border: 1px solid ${colors.silverLight}
    `,
    ButtonArea: styled.TouchableOpacity`
        padding: 10px;
        justify-content: center;
        align-items: center;
        background-color: ${colors.violet};
        border-radius: 5px;
    `,
    ButtonText: styled.Text`
        font-size: 15px;
        font-weight: bold;
        color: ${colors.white};
    `,
};
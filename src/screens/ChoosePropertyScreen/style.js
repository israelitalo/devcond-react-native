import styled from 'styled-components/native';
import colors from '../../theme/colors';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: ${colors.background};
    `,
    Scroller: styled.ScrollView`
        flex: 1;
        padding: 20px;

    `,
    LoadingIcon: styled.ActivityIndicator`
    
    `,
    HeadTitle: styled.Text`
        font-size: 16px;
        color: ${colors.black};
        text-align: center;
        margin-top: 10px;
    `,
    BigArea: styled.View`
        margin: 50px 0;
        align-items: center;
    `,
    ExistButtonArea: styled.TouchableOpacity`
        background-color: ${colors.violet};
        padding: 15px;
        justify-content: center;
        align-items: center;
        font-size: 15px;
    `,
    ExitButtonText: styled.Text`
        font-weight: bold;
        color: ${colors.white};
    `,
    PropertyList: styled.View`
        margin: 20px 0;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: ${colors.white};
        border-width: 2px;
        border-color: ${colors.silverButtonBorder};
        border-radius: 20px;
        padding: 15px;
        align-items: center;
        margin-bottom: 10px;
    `,
    ButtonText: styled.Text`
        font-weight: bold;
        color: ${colors.black};
        font-size: 15px;
    `
};
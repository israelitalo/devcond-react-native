import styled from 'styled-components/native';
import colors from '../../theme/colors';

export default {
    Area: styled.View`
        flex: 1;
        background-color: ${colors.white};
    `,
    LogoArea: styled.View`
        padding: 10px 20px;
        border-bottom-width: 1px;
        border-bottom-color: ${colors.silverButtonBorder};
    `,
    Logo: styled.Image`
        width: 190px;
        height: 40px;
    `,
    Scroll: styled.ScrollView`
        flex: 1;
        margin: 20px 0;
    `,
    ChangeUnitArea: styled.View`
        margin: 10px;
    `,
    ChangeUnitButton: styled.TouchableOpacity`
        background-color: ${colors.violet};
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    `,
    ChangeUnitButtonText: styled.Text`
        color: ${colors.white};
        font-size: 15px;
        font-weight: bold;
    `,
    FooterArea: styled.View`
        padding: 20px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `,
    FooterProfile: styled.Text`
        font-size: 15px;
        color: ${colors.black};
        font-weight: bold;
    `,
    FooterInfo: styled.View``,
    FooterUnitText: styled.Text`
        font-size: 15px;
        color: ${colors.iconEngine};
    `,
    FooterUnitButtonConfig: styled.TouchableOpacity``,
    MenuButton: styled.TouchableOpacity`
        flex-direction: row;
        margin-bottom: 5px;
        border-radius: 5px;
        align-items: center;
        height: 35px;
    `,
    MenuSquare: styled.View`
        width: 5px;
        height: 100%;
        margin-right: 20px;
        background-color: transparent;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    `,
    MenuButtonText: styled.Text`
        font-size: 15px;
        margin-left: 10px;
        color: ${colors.iconEngine};
    `
};
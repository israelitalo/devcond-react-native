import styled from 'styled-components/native';
import colors from '../../theme/colors';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: ${colors.background};
    `,
    LoadingIcon: styled.ActivityIndicator``,
    NoListArea: styled.View`
        padding: 30px;
        justify-content: center;
        align-items: center;
    `,
    NoListText: styled.Text`
        text-align: center;
    `,
    ListDocs: styled.FlatList`
        flex: 1;
    `,
    AddButton: styled.TouchableOpacity`
        margin-right: 15px;
    `
};
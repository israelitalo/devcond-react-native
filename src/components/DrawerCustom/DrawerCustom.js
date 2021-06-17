import React from 'react';
import C from './style';
import colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../../contexts/StateContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

const DrawerCustom = (props) => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const menus = [
        {
            title: 'Mural de Avisos',
            icon: 'inbox',
            screen: 'WallScreen'
        },
        {
            title: 'Documentos',
            icon: 'file-text',
            screen: 'DocumentScreen'
        },
        {
            title: 'Reservas',
            icon: 'calendar',
            screen: 'ReservationScreen'
        },
        {
            title: 'Livro de Ocorrências',
            icon: 'bug',
            screen: 'WarningScreen'
        },
        {
            title: 'Achados e Perdidos',
            icon: 'search',
            screen: 'FoundAndLostScreen'
        },
        {
            title: 'Boletos',
            icon: 'wpforms',
            screen: 'BilletScreen'
        },
        {
            title: 'Perfil',
            icon: 'user',
            screen: 'ProfileScreen'
        }
    ]

    const handleConfigProperty = () => navigation.navigate('UnitScreen');

    const handleChangeUnit = async () => {
        await AsyncStorage.removeItem('property');
        navigation.reset({
            index: 1,
            routes: [{ name: 'ChoosePropertyScreen' }]
        });
    }

    const handleLogout = async () => {
        await api.logout();
        navigation.reset({
            index: 1,
            routes: [{ name: 'LoginScreen' }]
        });
    }

    return (
        <C.Area>
            <C.LogoArea>
                <C.Logo source={require('../../assets/homelogo.png')} resizeMode="contain" />
            </C.LogoArea>
            <C.Scroll>
                {menus.map((menu, index) => (
                    <C.MenuButton key={index} onPress={() => navigation.navigate(menu.screen)}>
                        <C.MenuSquare
                            active={props.state.routes[props.state.index].name === menu.screen}
                        ></C.MenuSquare>
                        <Icon
                            name={menu.icon}
                            size={20}
                            color={props.state.routes[props.state.index].name === menu.screen ?
                                colors.violetIcon :
                                colors.iconEngine
                            }
                        />
                        <C.MenuButtonText
                            active={props.state.routes[props.state.index].name === menu.screen}
                        >
                            {menu.title}
                        </C.MenuButtonText>
                    </C.MenuButton>
                ))}
                <C.MenuButton onPress={handleLogout}>
                    <C.MenuSquare
                    ></C.MenuSquare>
                    <Icon name="toggle-left" size={20} color={colors.iconEngine} />
                    <C.MenuButtonText>Sair</C.MenuButtonText>
                </C.MenuButton>
            </C.Scroll>
            <C.ChangeUnitArea>
                <C.ChangeUnitButton onPress={handleChangeUnit}>
                    <C.ChangeUnitButtonText>Trocar Unidade</C.ChangeUnitButtonText>
                </C.ChangeUnitButton>
            </C.ChangeUnitArea>
            <C.FooterArea>
                <C.FooterInfo>
                    <C.FooterProfile>Olá, {context.user.user.name}</C.FooterProfile>
                    <C.FooterUnitText>{context.user.property.name}</C.FooterUnitText>
                </C.FooterInfo>
                <C.FooterUnitButtonConfig onPress={handleConfigProperty}>
                    <Icon name="gear" size={24} color={colors.iconEngine} />
                </C.FooterUnitButtonConfig>
            </C.FooterArea>
        </C.Area>
    );
}

export default DrawerCustom;
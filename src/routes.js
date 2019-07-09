import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Servicos from './pages/servicos';
import Relatorios from './pages/relatorios';

export default createStackNavigator({
    Main,
    Servicos,
    Relatorios
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#0e70ff"
        },
        headerTintColor: "#FFF"
    },
});
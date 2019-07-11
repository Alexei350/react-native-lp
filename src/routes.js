import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Servicos from './pages/servicos';
import Relatorios from './pages/relatorios';
import Cadastro from './pages/cadastro';

export default createStackNavigator({
    Main,
    Servicos,
    Relatorios,
    Cadastro
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#0e70ff",
            borderBottomColor: '#009',
            borderBottomWidth: 3
        },
        headerTitleStyle: {
          fontSize: 19,
        },
        headerTintColor: "#FFF"
    },
});
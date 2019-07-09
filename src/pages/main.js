import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: 'Projeto de Navegação'
    };

    pressCadastro = () => {
        this.props.navigation.navigate('Cadastro');
    }

    pressServicos = () => {
        this.props.navigation.navigate('Servicos');
    }

    pressRelatorios = () => {
        this.props.navigation.navigate('Relatorios');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={this.pressCadastro}>
                        <Image
                            style={styles.icone}
                            source={require('../../img/cadastro.png')}
                        />
                        <Text>Cadastro</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.botao}>
                    <TouchableOpacity onPress={this.pressServicos}>
                        <Image
                            style={styles.icone}
                            source={require('../../img/servicos.png')}
                        />
                        <Text>Serviços</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.botao}>
                    <TouchableOpacity onPress={this.pressRelatorios}>
                        <Image
                            style={styles.icone}
                            source={require('../../img/relatorios.png')}
                        />
                        <Text>Relatórios</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        paddingTop: 80,
        alignItems: 'center'
    },
    botao: {
        paddingTop: 50
    },
    icone: {
        width: 75,
        height: 75
    }
};
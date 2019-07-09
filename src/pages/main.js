import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity, ImageBackground } from 'react-native';

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
            <ImageBackground source={require('../../img/background.png')} style={styles.imagem}>
                <View style={styles.container}>
                    <View>
                        <TouchableOpacity onPress={this.pressCadastro}>
                            <Image
                                style={styles.icone}
                                source={require('../../img/cadastro.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text>Cadastro</Text>
                    
                    <View style={styles.botao}>
                        <TouchableOpacity onPress={this.pressServicos}>
                            <Image
                                style={styles.icone}
                                source={require('../../img/servicos.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text>Serviços</Text>

                    <View style={styles.botao}>
                        <TouchableOpacity onPress={this.pressRelatorios}>
                            <Image
                                style={styles.icone}
                                source={require('../../img/relatorios.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text>Relatórios</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        paddingTop: 80,
        alignItems: 'center'
    },
    botao: {
        paddingTop: 50
    },
    icone: {
        width: 75,
        height: 75
    },
	imagem: {
        flex: 1,
        width: null,
        height: null
	}
};
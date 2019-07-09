import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default class Cadastro extends Component {
    static navigationOptions = {
        title: 'Cadastro'
    };

    render() {
        return(
            <ImageBackground source={require('../../img/background.png')} style={styles.imagem}>
                <View>
                    <Text>Cadastro</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = {
	imagem: {
        flex: 1,
        width: null,
        height: null
	}
};
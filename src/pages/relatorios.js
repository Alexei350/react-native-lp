import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default class Relatorios extends Component {
    static navigationOptions = {
        title: 'Relatórios'
    };

    render() {
        return(
            <ImageBackground source={require('../../img/background.png')} style={styles.imagem}>
                <View>
                    <Text>Relatórios</Text>
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
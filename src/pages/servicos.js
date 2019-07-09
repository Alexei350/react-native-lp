import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default class Servicos extends Component {
    static navigationOptions = {
        title: 'Serviços'
    }; 

    render() {
        return(
            <ImageBackground source={require('../../img/background.png')} style={styles.imagem}>
                <View>
                    <Text>Serviços</Text>
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
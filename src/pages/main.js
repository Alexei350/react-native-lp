import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: 'Projeto de Navegação'
    };
    
    render() {
        return(
            <View style={styles.container}>
                <Button 
                    title='Serviços'
                    onPress={() => {
                        this.props.navigation.navigate('Servicos')
                    }}                    
                />
                <View style={styles.botao}>
                    <Button 
                        title='Relatórios'
                        onPress={() => {
                            this.props.navigation.navigate('Relatorios')
                        }}
                    />
                    </View>
            </View>
        );
    }
}

const styles = {
    container: {
        margin: 100
    },
    botao: {
        paddingTop: 25
    }
};
import React, { Component } from 'react';

import { AppRegistry, TextInput, View, StyleSheet, ImageBackground, Text } from 'react-native';

export default class Servicos extends Component {
    static navigationOptions = {
        title: 'Serviços'
    };

    constructor(props) {
		super(props);

		this.state = {
			peso: '',
			altura: ''
		};

		setInterval(() => {
			let s = this.state;

			s.r = this.random();
			s.g = this.random();
			s.b = this.random();

			this.setState(s);
		}, 100);
    }
    
    random() {
		return Math.round(Math.random() * 255).toString();
	}

    render() {
        return(
            <ImageBackground source={require('../../indice.jpg')} style={styles.imagem}>
				<View style={[styles.container, {backgroundColor: `rgba( ${this.state.r}
																	   , ${this.state.g}
																	   , ${this.state.b}
																	   , 0.1)`}]}>
					<Text style={{ 
						color: 'dodgerblue', 
						marginBottom: 50,
						fontSize: 20 }}
					>
						Cálculo de IMC
					</Text>

					<Text style={{ color: 'white' }}>Peso (kg):</Text>
					<TextInput
						value={this.state.peso}
						onChangeText={(peso) => this.setState({ peso })}
						placeholder={'Peso'}
						style={styles.input}
						keyboardType={'numeric'}
					/>

					<Text style={{ color: 'white' }}>Altura (cm):</Text>
					<TextInput
						value={this.state.altura}
						onChangeText={(altura) => this.setState({ altura })}
						placeholder={'Altura'}
						style={styles.input}
						keyboardType={'numeric'}
					/>

					<Text style={{ color: 'dodgerblue', marginTop: 25 }}>
						{ResultadoIMC(this.state.peso, this.state.altura).toString()}
					</Text>
					<Text style={{ color: 'dodgerblue', marginTop: 10 }}>
						Peso mínimo: {CalculaPesoMinimo(this.state.altura).toString()}
					</Text>
					<Text style={{ color: 'dodgerblue', marginTop: 10 }}>
						Peso máximo: {CalculaPesoMaximo(this.state.altura).toString()}
					</Text>
				</View>
			</ImageBackground>
        );
    }
}

function ResultadoIMC(peso, altura) {
	let imc;

	if (peso != 0 && altura != 0)
		imc = peso / Math.pow(altura / 100, 2);
	else
		return "Informe peso e altura";

	if (imc < 18.5) {
		return "Abaixo do peso";
	}
	else if (imc >= 18.5 && imc < 25) {
		return "Peso normal";
	}
	else if (imc >= 25 && imc < 30) {
		return "Sobrepeso";
	}
	else if (imc >= 30 && imc < 35) {
		return "Obesidade grau 1";
	}
	else if (imc >= 35 && imc < 40) {
		return "Obesidade grau 2";
	}
	else if (imc >= 40) {
		return "Obesidade grau 3";
	}
	else {
		return "Valores inválidos";
	}
}

function CalculaPesoMinimo(altura)
{
	return Math.round(18.5 * Math.pow(altura / 100, 2));
}

function CalculaPesoMaximo(altura)
{
	return Math.round(24.9 * Math.pow(altura / 100, 2));
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 75
	},
	input: {
		width: 250,
		height: 44,
		padding: 10,
		marginBottom: 10,
		backgroundColor: '#ecf0f1'
	},
	imagem: {
        flex: 1,
        width: null,
        height: null
	}
});
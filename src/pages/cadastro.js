import React, { Component } from 'react';
import DateTimePicker from "react-native-modal-datetime-picker";
import TimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	Image,
	TouchableOpacity,
	TextInput,
	ImageBackground,

} from 'react-native';

export default class App extends Component {
	static navigationOptions = {
        title: 'Cadastro'
    };

	constructor(props) {
		super(props)
		this.state = {
			isDateTimePickerVisible: false,
			isTimePickerVisible: false,
			chosenDate: 'Data e hora',
			chosenTime: 'Tempo de serviço',
			cor: 'rgba(127,127,127,0.7)',
			corT: 'rgba(127,127,127,0.7)'
		};
	}

	showDateTimePicker = () => {
		this.setState({ isDateTimePickerVisible: true });
	};
	hideDateTimePicker = () => {
		this.setState({ isDateTimePickerVisible: false });
	};
	handleDatePicked = dateTime => {
		this.setState({
			hideDateTimePicker: false,
			chosenDate: moment(dateTime).format('MMMM, Do YYYY HH:mm'),
			cor: 'black'
		})
	};

	showTimePicker = () => {
		this.setState({ isTimePickerVisible: true });
	};
	hideTimePicker = () => {
		this.setState({ isTimePickerVisible: false });
	};
	handlePicked = time => {
		this.setState({
			hideTimePicker: false,
			chosenTime: moment(time).format('HH:mm'),
			corT: 'black'
		})
	};

	pressCadastro = () => {
		alert("Registro Salvo");
	};

	pressCancelar = () => {
		alert("Cancelado");
		
	};
	
	render() {
		return (
			<ImageBackground source={require('../../img/background.png')} style={styles.imagem}>
				<ScrollView style={styles.body}>

					<View style={styles.sectionViewTitle}>
						<Text style={styles.sectionTitle}>Dados do cliente</Text>
					</View>
					<View style={styles.sectionContainer}>
						<TextInput placeholder='Primeiro nome' style={styles.sectionDescription} />
						<TextInput placeholder='Sobrenome' style={styles.sectionDescription} />
						<TextInput keyboardType={'email-address'} placeholder='E-mail' style={styles.sectionDescription} />
						<TextInput keyboardType={'numeric'} maxLength={8} placeholder='CEP' style={styles.sectionDescription} />
						<TextInput placeholder='Cidade' style={styles.sectionDescription} />
						<TextInput placeholder='Estado' style={styles.sectionDescription} />
						<TextInput placeholder='Logradouro' style={styles.sectionDescription} />
						<TextInput keyboardType={'numeric'} placeholder='Número' style={styles.sectionDescription} />
					</View>

					<View style={styles.sectionViewTitle}>
						<Text style={styles.sectionTitle}>Dados do Serviço</Text>
					</View>
					<View style={styles.sectionContainer}>
						<TextInput placeholder='Tipo de Serviço' style={styles.sectionDescription} />
						<TouchableOpacity onPress={this.showDateTimePicker} style={styles.sectionDescription}>
							<Text style={[styles.dateTime, { color: this.state.cor }]}>{this.state.chosenDate}</Text>
						</TouchableOpacity>
						<DateTimePicker
							isVisible={this.state.isDateTimePickerVisible}
							onConfirm={this.handleDatePicked}
							onCancel={this.hideDateTimePicker}
							mode={'datetime'}
						/>
						<TextInput keyboardType={'numeric'} placeholder='Valor' style={styles.sectionDescription} />
						<TouchableOpacity onPress={this.showTimePicker} style={styles.sectionDescription}>
							<Text style={[styles.dateTime, { color: this.state.corT }]}>{this.state.chosenTime}</Text>
						</TouchableOpacity>
						<TimePicker
							isVisible={this.state.isTimePickerVisible}
							onConfirm={this.handlePicked}
							onCancel={this.hideTimePicker}
							mode={'time'}
						/>
						<TextInput placeholder='Descrição detalhada' style={styles.sectionDescription} />
					</View>
					<View style={styles.sectionButton}>
						<TouchableOpacity onPress={this.pressCadastro}>
                            <Image
                                style={styles.icone}
                                source={require('../../img/accept.png')}
                            />
                        </TouchableOpacity>

						<TouchableOpacity onPress={this.pressCancelar}>
                            <Image
                                style={styles.icone}
                                source={require('../../img/cancel.png')}
                            />
                        </TouchableOpacity>
					</View>
				</ScrollView>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	icone: {
        width: 75,
        height: 75
	},
	sectionButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 50,
		marginRight: 50,
		marginTop: 20,
		marginBottom: 20,
	},

	body: {
		paddingLeft: 30,
		paddingRight: 30,
	},
	sectionViewTitle: {
		borderBottomWidth: 2,
		borderBottomColor: 'rgba(127,127,127,1)',
		marginTop: 20,
	},
	sectionTitle: {
		textAlign: 'center',
		fontSize: 25,
	},
	sectionDescription: {
		fontFamily: 'Arial',
		fontSize: 18,
		backgroundColor: '#fff',
		borderColor: 'rgba(0,0,0,1)',
		borderWidth: 1,
		borderRadius: 3,
		marginBottom: 5,
		marginTop: 5,
		textAlign: 'center',
		height: 45,
	},
	dateTime: {
		fontFamily: 'Arial',
		fontSize: 18,
		textAlign: 'center',
		marginTop: 10,
	},
	button: {
		width: 130,
		borderRadius: 5,
	},
	salvar: {
		backgroundColor: 'rgba(0,255,0,0.3)',
		marginRight: 40,
	},
	cancelar: {
		backgroundColor: 'rgba(255,0,0,0.3)',
	},
	
	imagem: {
		flex: 1,
		width: null,
		height: null,
	}
});
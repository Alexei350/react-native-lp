import React, { Component } from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';

export default class Relatorios extends Component {
    static navigationOptions = {
        title: 'Relatórios'
    };

    state = {
        data: [
            { "id": 1, mes: "Junho",     ano: "2019", tempo: "103h", valor: "R$ 8.382,00" },
            { "id": 2, mes: "Maio",      ano: "2019", tempo: "91h",  valor: "R$ 7.179,00" },
            { "id": 3, mes: "Abril",     ano: "2019", tempo: "100h", valor: "R$ 5.964,00" },
            { "id": 4, mes: "Março",     ano: "2019", tempo: "107h", valor: "R$ 7.327,00" },
            { "id": 5, mes: "Fevereiro", ano: "2019", tempo: "147h", valor: "R$ 7.444,00" },
            { "id": 6, mes: "Janeiro",   ano: "2019", tempo: "86h",  valor: "R$ 5.390,00" },
            { "id": 7, mes: "Dezembro",  ano: "2018", tempo: "150h", valor: "R$ 5.338,00" },
            { "id": 8, mes: "Novembro",  ano: "2018", tempo: "83h",  valor: "R$ 5.298,00" },
            { "id": 9, mes: "Outubro",   ano: "2018", tempo: "147h", valor: "R$ 5.126,00" },
            { "id": 10, mes: "Setembro", ano: "2018", tempo: "119h", valor: "R$ 8.706,00" },
            { "id": 11, mes: "Agosto",   ano: "2018", tempo: "51h",  valor: "R$ 4.288,00" },
            { "id": 12, mes: "Julho",    ano: "2018", tempo: "97h",  valor: "R$ 5.556,00" }
        ],
    };

    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text>{item.mes}/{item.ano} - {item.tempo} - {item.valor}</Text>
        </View>
    );

    render() {
        return (
            <ImageBackground source={require('../../img/background.png')} style={styles.imagem}>
                <FlatList
                    style={{ marginTop: 30 }}
                    contentContainerStyle={styles.list}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </ImageBackground>
        );
    };
}

const styles = {
    imagem: {
        flex: 1,
        width: null,
        height: null
    },
    list: {
        paddingHorizontal: 20,
    },

    listItem: {
        backgroundColor: '#8eb0ff',
        marginTop: 20,
        padding: 30,
    },
};
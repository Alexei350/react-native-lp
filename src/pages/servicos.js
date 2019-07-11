import React, { Component } from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';

export default class Servicos extends Component {
    static navigationOptions = {
        title: 'Serviços'
    };

    state = {
        data: [
            {id:  1, valor: "R$ 782,00", data: "19/10/19", tempo: "23h", servico: "Reparo"},
            {id:  2, valor: "R$ 444,00", data: "10/02/20", tempo: "41h", servico: "Reparo"},
            {id:  3, valor: "R$ 362,00", data: "12/01/20", tempo: "33h", servico: "Instalação"},
            {id:  4, valor: "R$ 956,00", data: "22/07/18", tempo: "21h", servico: "Instalação"},
            {id:  5, valor: "R$ 518,00", data: "02/06/20", tempo: "31h", servico: "Instalação"},
            {id:  6, valor: "R$ 288,00", data: "20/11/19", tempo: "36h", servico: "Instalação"},
            {id:  7, valor: "R$ 790,00", data: "18/05/19", tempo: "48h", servico: "Reparo"},
            {id:  8, valor: "R$ 579,00", data: "25/02/20", tempo: "10h", servico: "Instalação"},
            {id:  9, valor: "R$ 365,00", data: "29/09/18", tempo: "27h", servico: "Reparo"},
            {id: 10, valor: "R$ 737,00", data: "15/09/18", tempo: "13h", servico: "Manutenção"},
            {id: 11, valor: "R$ 688,00", data: "25/05/20", tempo: "6h",  servico: "Visita técnica"},
            {id: 12, valor: "R$ 921,00", data: "27/06/19", tempo: "29h", servico: "Manutenção"},
            {id: 13, valor: "R$ 189,00", data: "20/06/19", tempo: "14h", servico: "Visita técnica"},
            {id: 14, valor: "R$ 977,00", data: "22/06/19", tempo: "6h",  servico: "Manutenção"},
            {id: 15, valor: "R$ 361,00", data: "02/05/20", tempo: "7h",  servico: "Visita técnica"},
            {id: 16, valor: "R$ 380,00", data: "07/06/19", tempo: "6h",  servico: "Reparo"},
            {id: 17, valor: "R$ 998,00", data: "21/08/18", tempo: "38h", servico: "Visita técnica"},
            {id: 18, valor: "R$ 462,00", data: "04/08/19", tempo: "17h", servico: "Manutenção"},
            {id: 19, valor: "R$ 831,00", data: "27/03/19", tempo: "13h", servico: "Reparo"},
            {id: 20, valor: "R$ 639,00", data: "21/07/19", tempo: "25h", servico: "Instalação"},
            {id: 21, valor: "R$ 568,00", data: "02/02/20", tempo: "43h", servico: "Manutenção"},
            {id: 22, valor: "R$ 328,00", data: "19/05/19", tempo: "14h", servico: "Instalação"},
            {id: 23, valor: "R$ 367,00", data: "17/01/19", tempo: "18h", servico: "Instalação"},
            {id: 24, valor: "R$ 484,00", data: "06/05/20", tempo: "39h", servico: "Reparo"},
            {id: 25, valor: "R$ 549,00", data: "09/10/18", tempo: "18h", servico: "Reparo"},
            {id: 26, valor: "R$ 443,00", data: "03/06/19", tempo: "45h", servico: "Reparo"},
            {id: 27, valor: "R$ 712,00", data: "26/08/18", tempo: "21h", servico: "Visita técnica"},
            {id: 28, valor: "R$ 571,00", data: "30/09/19", tempo: "16h", servico: "Reparo"},
            {id: 29, valor: "R$ 434,00", data: "25/10/19", tempo: "25h", servico: "Reparo"},
            {id: 30, valor: "R$ 119,00", data: "20/08/19", tempo: "6h",  servico: "Reparo"},
            {id: 31, valor: "R$ 819,00", data: "13/05/20", tempo: "38h", servico: "Reparo"},
            {id: 32, valor: "R$ 317,00", data: "15/12/18", tempo: "6h",  servico: "Manutenção"},
            {id: 33, valor: "R$ 115,00", data: "21/09/19", tempo: "34h", servico: "Reparo"},
            {id: 34, valor: "R$ 494,00", data: "08/08/19", tempo: "38h", servico: "Reparo"},
            {id: 35, valor: "R$ 220,00", data: "18/11/19", tempo: "5h",  servico: "Manutenção"},
            {id: 36, valor: "R$ 175,00", data: "12/07/18", tempo: "20h", servico: "Visita técnica"},
            {id: 37, valor: "R$ 208,00", data: "13/01/19", tempo: "23h", servico: "Manutenção"},
            {id: 38, valor: "R$ 290,00", data: "13/12/19", tempo: "15h", servico: "Visita técnica"},
            {id: 39, valor: "R$ 918,00", data: "20/08/18", tempo: "41h", servico: "Visita técnica"},
            {id: 40, valor: "R$ 464,00", data: "04/12/18", tempo: "35h", servico: "Visita técnica"},
            {id: 41, valor: "R$ 288,00", data: "18/01/20", tempo: "37h", servico: "Reparo"},
            {id: 42, valor: "R$ 785,00", data: "26/04/19", tempo: "7h",  servico: "Manutenção"},
            {id: 43, valor: "R$ 686,00", data: "13/04/19", tempo: "40h", servico: "Manutenção"},
            {id: 44, valor: "R$ 421,00", data: "28/10/19", tempo: "30h", servico: "Instalação"},
            {id: 45, valor: "R$ 549,00", data: "18/12/19", tempo: "50h", servico: "Instalação"},
            {id: 46, valor: "R$ 778,00", data: "30/12/19", tempo: "46h", servico: "Instalação"},
            {id: 47, valor: "R$ 390,00", data: "26/03/19", tempo: "46h", servico: "Visita técnica"},
            {id: 48, valor: "R$ 164,00", data: "19/11/19", tempo: "24h", servico: "Instalação"},
            {id: 49, valor: "R$ 597,00", data: "11/07/19", tempo: "32h", servico: "Reparo"},
            {id: 50, valor: "R$ 539,00", data: "05/03/19", tempo: "15h", servico: "Instalação"},
        ],
    };

    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text>{item.servico} - {item.valor} - {item.data} - {item.tempo}</Text>
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
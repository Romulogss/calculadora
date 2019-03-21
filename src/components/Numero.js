import React from 'react';
import {TextInput} from 'react-native';

export default props => (
        <TextInput style={Estilo.txtInpt} 
            value={props.num}
            onChangeText={entrada => props.atualizar(props.nome,entrada)}
        />
);

const Estilo = {
    txtInpt:{
        width: 140,
        height: 80,
        fontSize: 20,
        textAlign: 'center'
    }
};
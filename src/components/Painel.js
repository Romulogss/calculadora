import React from 'react';
import {View} from 'react-native';
import Operacao from './Operacao';
import Entrada from './Entrada';
import Comando from './Comando';

const Painel = props => (
        <View>
            <Entrada 
                num1={props.num1}
                num2={props.num2}
                atualizar={props.atualizaValor}
            />
            <Operacao 
                operacao={props.operacao} 
                atualiza={props.atualizaOp}
            />
            <Comando acao={props.calcular}/>
    </View>
);


export {Painel};
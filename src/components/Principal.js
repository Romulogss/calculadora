import React,{Component} from 'react';
import { View} from 'react-native';
import { Topo, Painel, Resultado} from './'

export default class Principal extends Component {
    constructor(props){
        super(props);
        this.state = {num1:'', num2:'', operacao: 'soma', resultado: ''}

        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOp = this.atualizaOp.bind(this);
    }
    calcular(){
        let resultado = 0;
        switch(this.state.operacao){ 
            case 'soma':
                resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2)
                break;
            case 'subtração':
                resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2)
                break;
            case 'multiplicação':
                resultado = parseFloat(this.state.num1) * parseFloat(this.state.num2)
                break;
            case 'divisão':
                resultado = parseFloat(this.state.num1) / parseFloat(this.state.num2)
                break;
            default:
                resultado = 0;
         }
         this.setState({resultado: resultado.toString()})
    }
    atualizaOp(op){
        this.setState({operacao:op})
    }
    atualizaValor(nome,numero){
        const obj = {}
        obj[nome] = numero
        this.setState(obj);
    }
    render(){
        return(
            <View>
                <Topo/>
                <Resultado resultado={this.state.resultado}/>
                <Painel
                    num1={this.state.num1}
                    num2={this.state.num2}
                    operacao={this.state.operacao}
                    calcular={this.calcular}
                    atualizaOp={this.atualizaOp}
                    atualizaValor={this.atualizaValor}
                />
            </View>
        );
    }
}
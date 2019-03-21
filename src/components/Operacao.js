import React,{Component} from 'react';
import { Picker } from 'react-native';

export default class Operacao extends Component{
    render(){
        return(
            <Picker style={{marginTop:15,marginBottom:15}}
                selectedValue={this.props.operacao}
                onValueChange={op => {this.props.atualiza(op);}}
            >
                <Picker.Item label="Soma" value='soma'/>
                <Picker.Item label="Subtração" value='subtração'/>
                <Picker.Item label="Multiplicação" value='multiplicação'/>
                <Picker.Item label="Divisão" value='divisão'/>
            </Picker>
        );
    }
}
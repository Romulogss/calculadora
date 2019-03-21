import React from 'react';
import {TextInput, View} from 'react-native';

export default props =>(
            <View>
                <TextInput
                    placeholder={'Resultado'}
                    editable={false}
                    value={props.resultado}
                    keyboardType={"phone-pad"}
                    style={{height:100,fontSize:30,textAlign:'center'}}
                />
            </View>
        );
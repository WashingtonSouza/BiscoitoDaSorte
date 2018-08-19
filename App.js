import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Botao extends Component{

   constructor(props){
      super(props);
      this.state = {};
      this.style = StyleSheet.create({
         botao:{
            width:250,
            height:50,
            borderWidth:2,
            borderColor:'#FF0000',
            backgroundColor:'transparent',
            borderRadius:25
         }
      });
   }

   render(){
      return(
         <TouchableOpacity style={this.style.Botao}>
            <View>
               <Text>Quebrar Biscoito</Text>
            </View>
         </TouchableOpacity>
      );
   }

}

export default class App extends Component {

  render() {
    return (
      <View style={styles.body}>
         <Botao/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   body:{
      paddingTop:20
   }
});

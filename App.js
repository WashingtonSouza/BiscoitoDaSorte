import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class Botao extends Component{

   constructor(props){
      super(props);
      this.state = {};
      this.style = StyleSheet.create({
         botao:{
            width:250,
            height:50,
            borderWidth:2,
            borderColor:props.color,
            backgroundColor:'transparent',
            borderRadius:25
         },
         botaoArea:{
            flex:1,
            flexDirection:'row',
            justifyContent: 'center',
            alignItems:'center'
         },
         botaoText:{
            color:props.color,
            fontSize:14,
            fontWeight:'bold'
         }
      });
   }

   render(){
      return(
         <TouchableOpacity style={this.style.botao} onPress={this.props.onPress}>
            <View style={this.style.botaoArea}>
               <Text style={this.style.botaoText}>{this.props.text}</Text>
            </View>
         </TouchableOpacity>
      );
   }
}

export default class BiscoitoDaSorte extends Component {

   constructor(props){
      super(props);
      this.state = {texto:""};
      this.frases = [
         "A vida trará coisas boas se tiveres paciência.",
         "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
         "Não compense na ira o que lhe falta na razão.",
         "Defeitos e virtudes são apenas dois lados da mesma moeda.",
         "A maior de todas as torres começa no solo."
      ];
      this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
   }

   quebrarBiscoito(){
      let s = this.state;
      let r = Math.floor(Math.random() * this.frases.length)

      s.texto = this.frases[r];
      this.setState(s);
   }

   render() {
      return (
      <View style={styles.body}>
         <Image source={require('./images/cookie.png')}/>
         <Text style={styles.texto}>{this.state.texto}</Text>
        <Botao color="#B55689" text="Quebrar Biscoito" onPress={this.quebrarBiscoito}/>

      </View>
      );
   }
}

const styles = StyleSheet.create({
   body:{
      paddingTop:25,
      flex:1,
      justifyContent:'center',
      alignItems:'center'
   },
   texto:{
      fontSize:17,
      color:'#B55689',
      margin:30,
      fontStyle:'italic',
      textAlign:'center'
   }
});

import React from 'react';
import {StyleSheet, Text} from 'react-native';



export default function Cep(props){
return(
<>
<Text styles={styles.texto}> Dados do endereco novogit </Text>
<Text styles={styles.texto}> CEP: {props.data.cep} </Text>
<Text styles={styles.texto}> Lagradouro: {props.data.logradouro} </Text>
<Text styles={styles.texto}> Bairro: {props.data.bairro} </Text>
<Text styles={styles.texto}> Localidade: {props.data.Localidade} </Text>
<Text styles={styles.texto}> UF: {props.data.uf} </Text>
</>
);
}



const styles = StyleSheet.create({
texto:{
marginTop:20,
fontSize:20,
},

});
import { StyleSheet, Text, View, FlatList,  } from 'react-native';
import React from 'react';
import Restaurante from './Restaurante';

const ResultList = (props) => {
  return (
    <View style={styles.main}>
       <Text style={styles.titulo}>{props.titulo}</Text> 
        <FlatList data={props.resultado} renderItem={({item})=>{
            return <Restaurante restaurante={item}/>
        }} keyExtractor={(resultado)=>resultado.id} horizontal/>
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
    main: {
     display:"flex",
     alignItems:'flex-start',
     width:300,
     padding:10   
    },
    titulo : {
        fontWeight:"700",
        fontSize:20,
        
    }
});

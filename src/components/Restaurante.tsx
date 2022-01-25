
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Restaurante = ({restaurante}) => {
  return (
      

    <View style={styles.main}>
        
       <Image source={{uri: restaurante.image_url}} style={styles.image}/> 
      <Text style={styles.texto}>{restaurante.name}</Text>
      <Text>Nota: {restaurante.rating}</Text>
      
    </View>
      
  );
};

export default Restaurante;

const styles = StyleSheet.create({
    main : {
        padding:10,
        height:250,
        justifyContent:"center"
    },
    image : {
        width:200,
        height:200,
        borderRadius:20
    },
    texto : {
        fontWeight:"bold",
        fontSize:16
    }
});

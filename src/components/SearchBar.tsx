import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {Feather } from "@expo/vector-icons"

interface SearchProps{
    termoPesquisa : string
    onTermoChange : (novaPesquisa : string)=>void
    onTermoSubmit : ()=>void
}

const SearchBar = (props : SearchProps) => {
    return (
        <View style={styles.main}>
            <Feather name='search'  size={30} color={"black"} style={styles.icone}/> 
            <TextInput autoCorrect={false} onEndEditing={props.onTermoSubmit} autoCapitalize='none' autoCompleteType='name' keyboardAppearance='dark' placeholder='Buscar' style={styles.input}
                value={props.termoPesquisa} onChangeText={props.onTermoChange}/>
       
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    main :{
        alignItems:"center",
        margin:20,
        flexDirection:"row",
        backgroundColor:"#FFDFDF",
        borderRadius:20,
        
    },
    input:{
       
        marginLeft:5,
        width:300,
        padding:10,
        /* borderRadius:20, */
        textAlign:"left",
       
    },
    icone :{
        marginLeft:10
    }
})

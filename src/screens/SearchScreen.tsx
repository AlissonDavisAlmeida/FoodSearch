import React, {  useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ResultList from '../components/ResultList'
import SearchBar from '../components/SearchBar'

import useSearchAPI from '../hooks/useSearchAPI'

const SearchScreen = ({navigation}) => {

    const [termoPesquisa, settermoPesquisa] = useState<string>("");
    const {resultado, mensagemErro, searchAPI} = useSearchAPI()

    const onTermoChange = (novaPesquisa :string)=>{
        settermoPesquisa(novaPesquisa)
    }

    const filtrarResultadosPorPreco = (price)=>{

        return resultado.filter(retorno => retorno.price === price)
    }

    return (
        <View style={styles.main}>
            <SearchBar 
            termoPesquisa={termoPesquisa} 
            onTermoChange={onTermoChange}
            onTermoSubmit={()=>searchAPI(termoPesquisa)}/>

            {mensagemErro ? <Text>Ocorreu um erro</Text>: null}
            <ScrollView scrollEnabled>
            <ResultList resultado= {filtrarResultadosPorPreco("$")} titulo={`Melhores preços`}/>
            <ResultList resultado= {filtrarResultadosPorPreco("$$")} titulo={`Preços Médios`}/>
            <ResultList resultado= {filtrarResultadosPorPreco("$$$")} titulo={`Preços Altos`}/>
            
           </ScrollView>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    main :{
        display:'flex',
        flex:1
    }
})

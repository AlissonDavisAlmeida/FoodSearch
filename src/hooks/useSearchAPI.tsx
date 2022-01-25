import { useState, useEffect} from "react"
import yelp from "../api/yelp"

export default ()=>{

    const [resultado, setresultado] = useState([]);
    const [mensagemErro, setmensagemErro] = useState<String>(null);

   
    useEffect(() => {
     searchAPI("pasta")
    }, []);
    

    const searchAPI = (searchTerm: string)=>{
        
            yelp.get("/search",{
                params:{
                    limit:50,
                    term : searchTerm,
                    location : "Salvador"
                }
            }).then(retorno=>{
                setresultado(retorno.data.businesses)
            }).catch(erro=>{
                console.log(erro)
                setmensagemErro(erro)
            })
       
       
    }

    return{

        resultado,
        mensagemErro,
        searchAPI
    }
    
    

}
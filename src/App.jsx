import { useEffect, useState } from 'react'
import './App.css'

import axios from "axios"
import ResidentInfo from './components/ResidentInfo'
import Location from './components/Location'




function App() {

 




const [id, setId]= useState ("2")

const[arrayResidentUrl, setArrayResidentUrl]=useState([])
//console.log(arrayResidentUrl);

useEffect (()=>{
axios
.get (`https://rickandmortyapi.com/api/location/${id}`)
.then(resp => {
 setId(resp.data)
// console.log(resp.data.residents);
 
setArrayResidentUrl(resp.data.residents)})
.catch ( error => console.error(error) )
},[id])


const searchId = (e)=>{
    e.preventDefault()
    //console.log(e.target[0].value);
    setId(e.target[0].value)

}


  return (
    <div className="App">

        <Location data={id}/>

   <form onSubmit={ (e)=> searchId (e)}>
    
      <input type="text" placeholder='Search location by id' />
      <button>Search</button>

    </form>
     
     <ul>
       
      {arrayResidentUrl.map((item,indice)=> <li key={item}>{item}</li> )}
      
     </ul>
     <ul>
      {
        arrayResidentUrl.map(resident=>(
          <ResidentInfo key= {resident.name}  residentData = {resident} />
        ))
      }
       
     </ul>

     { /** <ul>
        {pokemonsArray.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemonData={pokemon} />
        ))}
      </ul>*/
     
     }
     



   


      

       
    </div>
  )
}

export default App



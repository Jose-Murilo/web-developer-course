import './App.css'
import {CardPerfil} from '../components/CardPerfil/index'
 
export function App() {

  return (
    <div className="container">
        <h1>Class components</h1>
        <CardPerfil 
          name = 'Murilo' 
          age = {16} 
          login ='Jose-Murilo'
        />

        <CardPerfil 
          name = 'Italo' 
          age = {25} 
          login ='Italo-Morais'
        />

        <CardPerfil 
          name = 'EmanuelQuintino' 
          age = {29} 
          login ='EmanuelQuintino'
        />
    </div>
  )
}

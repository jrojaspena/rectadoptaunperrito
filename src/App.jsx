import { useState } from "react";
import Header from "./componentes/Header";
import MyCard from "./componentes/Mycard";
import Footer from "./componentes/Footer";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="body">
      <Header titulo='Adopta un perrito'/>
      <div className="container">  
        <MyCard
          imagen='https://purina.cl/sites/default/files/styles/webp/public/2022-10/purina-brand-edad-de-los-perros-nota_01.jpg.webp?itok=osLV0a9x' 
          titulo='Polo'
          texto='Lleno de energía, juguetón!'
          color='success' 
          nombre='Mestizo'
        />
           
        <MyCard 
          imagen='https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg' 
          titulo='Duque' 
          texto='Es juguetón, y muy sociable con otros perros y gatos'
          color='primary' 
          nombre='Mestizo'
        />
          
        <MyCard 
          imagen='https://www.ngenespanol.com/wp-content/uploads/2022/08/estudio-ayuda-a-conocer-origen-de-los-perros-770x431.jpg' 
          titulo='Mila' 
          texto='Una perrita muy tierna le gustan los mimos ! '
          color='danger' 
          nombre='Metizo'
        />
        <MyCard 
          imagen='https://www.aon.es/personales/seguro-perro-gato/wp-content/uploads/sites/2/2021/04/bichon-maltes.jpg' 
          titulo='Orenlla' 
          texto='Es una compañera leal, pequeñita y cariñosa '
          color='warning' 
          nombre='Poodle'
        />
      </div>
      <Footer className='footer'/>

    </div>
  )
}
export default App;

import './App.css';
import Kepek from './Kepek.js';
import kep1 from './kepek/kep1.png';
import kep2 from './kepek/kep2.png';
import kep3 from './kepek/kep3.png';
import kep4 from './kepek/kep4.png';
import kep5 from './kepek/kep5.png'
import kep6 from './kepek/kep6.png';
import kep7 from './kepek/kep7.png';
import kep8 from './kepek/kep8.png';
import kep9 from './kepek/kep9.png';
import kep10 from './kepek/kep10.png';
import Fokep from './Fokep'
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import { useState } from 'react';
import KepekModell from './Model/KepekModel';

const kepTomb=[
  {
    id:1,
    kep:kep1,
    leiras:"Szarvasok"
  },{
    id:2,
    kep:kep2,
    leiras:"Kutyusok"
  },{
    id:3,
    kep:kep3,
    leiras:"Havazik"
  },{
    id:4,
    kep:kep4,
    leiras:"Csillagszoro"
  },{
    id:5,
    kep:kep5,
    leiras:"Fadisz"
  },{
    id:6,
    kep:kep6,
    leiras:"Forrócsoki"
  },{
    id:7,
    kep:kep7,
    leiras:"Aesthetic"
  },{
    id:8,
    kep:kep8,
    leiras:"Cuki bögrék"
  },{
    id:9,
    kep:kep9,
    leiras:"Cuki bögrék"
  },{
    id:10,
    kep:kep10,
    leiras:"Cozy"
  }
]

function App() {

  const[kepeim,Setkepeim]= useState([]);

  const kepekModel = new KepekModell(kepeim);

  function kepkezeles(adat){
    //console.log(adat,"appjs");
    kepekModel.setKepeim(adat);
    Setkepeim(kepekModel.getKepeim());
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <aside>
      <p>holafaszbanvaaaagya</p>
      <div>
      {kepeim.map((ko,index)=>{
        return(<Fokep kepeimObj={ko} key={index}/>);
      }

      )}</div>
      
      </aside>
      <article>
      {kepTomb.map((kep,index)=>{
        return(<Kepek kepObj={kep} key={index} kepkezelesFv={kepkezeles}/>)
      })}
      </article>
      <footer>Szedlár Krisztina</footer>
    </div>
  );
}

export default App;

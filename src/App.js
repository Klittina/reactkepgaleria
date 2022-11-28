import './App.css';
import Kepek from './Kepek.js';
import kep1 from './kep1.png';
import kep2 from './kep2.png';
import kep3 from './kep3.png';
import kep4 from './kep4.png';
import kep5 from './kep5.png'
import kep6 from './kep6.png';
import kep7 from './kep7.png';
import kep8 from './kep8.png';
import kep9 from './kep9.png';
import kep10 from './kep10.png';

const kepTomb=[
  {
    kep:<img src={kep1} alt="kep" className='kepekcss' />,
    leiras:"Szarvasok"
  },{
    kep:<img src={kep2} alt="kep" className='kepekcss'/>,
    leiras:"Kutyusok"
  },{
    kep:<img src={kep3} alt="kep" className='kepekcss'/>,
    leiras:"Havazik"
  },{
    kep:<img src={kep4} alt="kep" className='kepekcss'/>,
    leiras:"Csillagszoro"
  },{
    kep:<img src={kep5} alt="kep" className='kepekcss'/>,
    leiras:"Fadisz"
  },{
    kep:<img src={kep6} alt="kep" className='kepekcss'/>,
    leiras:"Forrócsoki"
  },{
    kep:<img src={kep7} alt="kep" className='kepekcss'/>,
    leiras:"Aesthetic"
  },{
    kep:<img src={kep8} alt="kep" className='kepekcss'/>,
    leiras:"Cuki bögrék"
  },{
    kep:<img src={kep9} alt="kep" className='kepekcss'/>,
    leiras:"Cuki bögrék"
  },{
    kep:<img src={kep10} alt="kep" className='kepekcss'/>,
    leiras:"Cozy"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <article>
      {kepTomb.map((kep,index)=>{
        return(<Kepek kepObj={kep} key={index}/>)
      })}
      </article>
      <footer>Szedlár Krisztina</footer>
    </div>
  );
}

export default App;

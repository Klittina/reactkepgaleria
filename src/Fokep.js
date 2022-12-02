import './Fokep.css';

function Fokep(props){
    function visszalep(){
        console.log("Visszalep");
        props.fokepkezelesFv(props.kepeimObj);
    }

    function elorelep(){
        console.log("Előrelép");
        props.fokepkezelesFv(props.kepeimObj);
    }
    console.log("fokep.js");
    return(
        
        <div>
        <div><button onClick={visszalep}>Hátralép</button></div>
        <div>{props.kepeimObj}</div>
        <div><button onClick={elorelep}>Előrelép</button></div>
        </div>

    );
}

export default Fokep;
import './kepek.css';

function Kepek(props){

    function kepid(){
        //props.kepkezeles(props.kepObj);
        //console.log(props.kepObj);
        props.kepkezelesFv(props.kepObj);
    }

    return(
        <div className="kep">
        <div><img src={props.kepObj.kep} alt="kep" className='kepekcss' onClick={kepid}/></div>
        <p>{props.kepObj.leiras}</p>
        </div>
    )
}

export default Kepek;
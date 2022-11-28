import './kepek.css';

function Kepek(props){

    return(
        <div className="kep">
        <div>{props.kepObj.kep}</div>
        <p>{props.kepObj.leiras}</p>
        </div>
    )
}

export default Kepek;
import './PokeList.css'


export const PokeList = (props) => {

    return(
        <div className="PokeList">
                <img className="Pic" src={props.picture && props.picture} alt=""></img>
                <div className="Border" onClick={props.onClick}>{props.name}</div>
        </div>
    )
}
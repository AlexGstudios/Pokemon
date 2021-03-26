

export const PokeList = (props) => {

    return(
        <>
            <img src={props.pic} alt=""></img>
            <h3 onClick={props.onClick}>{props.name}</h3>
        </>
    )
}
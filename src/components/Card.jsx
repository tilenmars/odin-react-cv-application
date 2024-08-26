const Card = (props) => {
    console.log(props)
    return(
        <div className="card">
            {<h1>{props.title}</h1>}
            <h2 className="email">{props.dataField1}</h2>
            <h2 className="phone">{props.dataField2}</h2>
            <p className=""></p>
        </div>
    )
}
export default Card
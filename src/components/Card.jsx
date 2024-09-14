import React from "react"
import './Card.css'

const Card = (props) => {
    return(
        <div className="card">
            {<h1>{props.title}</h1>}
            <h2 className="email">{props.dataField1}</h2>
            <h2 className="phone">{props.dataField2}</h2>
            <p className=""></p>
            {props.type != "register" && <button onClick={props.onClick}>Delete</button>}
        </div>
    )
}
export default Card
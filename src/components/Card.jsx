import React from "react"
import './Card.css'

const Card = ({title, dataField1, dataField2, type, onClick, onClickEdit}) => {
    return(
        <div className="card">
            <h1>{title}</h1>
            <h2 className="email">{dataField1}</h2>
            <h2 className="phone">{dataField2}</h2>
            <p className=""></p>
            {type != "register" && <><button onClick={onClick}>Delete</button> <button onClick={onClickEdit}>Edit</button></>} 
        </div>
    )
}
export default Card

// export default function(props)
// export default const Card : <FC(props)> = () => {} 
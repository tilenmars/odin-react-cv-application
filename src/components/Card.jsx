const Card = (props) => {
    return(
        <div class="card">
            <h1>{props.title}</h1>
            <h2 className="email"></h2>
            <h2 className="phone"></h2>
            <p className=""></p>
        </div>
    )
}

export default Card
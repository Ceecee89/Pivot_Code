function Card(props) {
    //return lets us use HTML
    return (
        <div style={
            {
                backgroundColor: "white",
                border: "1px solid black",
                width: "200px",

                padding: "10px",
                borderRadius: "10px"

            }
        }>
            <h2>{props.nameProps}</h2>
            <p>{props.descriptionProps}</p>
            <img style={{

                height: "200px",
            }}
                src="https://images.photowall.com/products/44494/sunflower-field.jpg?h=699&q=85"
            />
        </div>
    )
}

export default Card;
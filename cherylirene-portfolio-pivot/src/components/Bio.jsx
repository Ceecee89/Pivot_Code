function Bio() {
    return (
        <div style={
            { backgroundColor: 'white',
                border: "1px solid black",
                width: "200px",

                padding: "10px",
                borderRadius: "10px"
        
            }
        }>
            <h2>Bio</h2>
            <p>I'm new to React and loving it so far! I'm excited to keep learning and
        building creative, user-friendly web projects. </p>
            <img style={{

                height: "200px",
            }}
                src="https://ih1.redbubble.net/image.3651999615.7498/st,small,507x507-pad,600x600,f8f8f8.jpg"
            />
        </div>
    )
            
}

export default Bio;

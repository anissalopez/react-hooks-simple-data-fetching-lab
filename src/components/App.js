// create your App component here
import React, {useState, useEffect} from "react"


function App(){

        useEffect(()=>{

            fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then((data) => setImage(data.message))
    }, [])

    const [image, setImage] = useState(null)

    if(!image){
    return <p>Loading...</p>
    }

    return (
       
        <div>
            <img src={image} alt="A Random Dog"></img>
        </div>
    )


}

export default App;
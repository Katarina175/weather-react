import React from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner';


export default function Weather(props){

    
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}`)
    }
    let apiKey = "b855a19b8fb3b4c4426ec0e293bf081b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=imperial&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
return(
    <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={4000} 
 
      />
    
);
}
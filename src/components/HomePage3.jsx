import { useEffect, useState } from "react";
import React from "react";

const HomePage3 = () => {
    
    /* úkol - Upravte efekt tak, aby pomocí volání fetch získal aktuální datum a čas pro časovou zónu Europe/Prague. 
    Hodnotu získáte na API endpointu https://worldtimeapi.org/api/timezone/Europe/Prague
    pod položkou datetime. Získanou hodnotu uložte do stavu a vyzkoušejte, že vaše aplikace funguje.
    */    
    const [datetime, setDatetime] = useState('');

    useEffect(() => {
        const timePrague = async () => {
          const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Prague');
          const data = await response.json();
          console.log(data.datetime);
          setDatetime(data.datetime);
        };
    
        timePrague();
      }, []);

    return (
        <>
            <h3>Hodnota datetime:</h3>
            <div>{datetime}</div>
        </>
    )
    
       
}

export default HomePage3;
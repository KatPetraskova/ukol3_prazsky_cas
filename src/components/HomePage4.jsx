import { useEffect, useState } from "react";
import React from "react";

const HomePage4 = () => {
    
    /* Vložte do stránky formulář, ze kterého si uživatel může vybrat časovou zónu.
    Vytvořte stav timezone s výchozí hodnotou Europe/Prague. Propojte stav timezone s prvkem select.
    Zařiďte, aby se efekt volal při každé změně stavu timezone. Uvnitř efektu zkonstruujte 
    URL pro dotaz tak, aby server poslal data pro časovou zónu vybranou uživatelem.
    Vaše aplikace by měla fungovat tak, že když uživatel vybere z nabídky časovou zónu, 
    rovnou se mu na stránce ukáže aktuální čas v této zóně.
    */
    
    const [dateTime, setDatetime] = useState('');
    const [timeZone, setTimezone] = useState('Europe/Prague');

    const handleChange = (event) => {
        setTimezone(event.target.value)
    };
    
    useEffect(() => {
        const timeSelect = async () => {
          const response = await fetch(`https://worldtimeapi.org/api/timezone/${timeZone}`);
          const data = await response.json();
          console.log(data.datetime);
          setDatetime(data.datetime);
        };
    
        timeSelect();
      }, [timeZone]);  
      
    return (
        <>
            <div className="nadpis"><h3>Hodnota datetime:</h3></div>
            <div>{dateTime}</div>

            <div className="nadpis"><h3>
                Vyberte zónu:
            </h3></div>
            <div>
            <select onChange={handleChange} value={timeZone}>
                    <option value="America/New_York">New York</option>
                    <option value="Europe/London">Londýn</option>
                    <option value="Europe/Moscow">Moskva</option>
                    <option value="Europe/Prague">Praha</option>
                    <option value="Asia/Hong_Kong">Hong Kong</option>
                    <option value="Asia/Jerusalem">Jeruzalém</option>
            </select>
            </div>
        </>
    )
      
}

export default HomePage4;
import { useEffect, useState } from "react";
import React from "react";

const HomePage2 = () => {
    
    /* úkol - přidat stav datetime, jehož výchozí hodnota bude prázdný řetězec. 
    V efektu smaž volání alert a ulož do stavu nějaký čas jako řetězec ve formátu '2020-11-13T22:46'
    Zobraz čas někde na stránce - efekt se nastaví stav při prvním zobrazení komponenty.
    */
    
    const [datetime, setDatetime] = useState('');

    useEffect(() => {
        // přidala jsem zpoždění zobrazní o 3 sekundy, aby byl vidět po načtení 
        // stránky výchozí stav (tedy prázdná hodnota)
        const timeoutId = setTimeout(() => {
            setDatetime('2020-11-13T22:46');
          }, 3000);         
    }
    );

    return (
        <>
            <h3>Hodnota datetime:</h3>
            <div>{datetime}</div>
        </>
    )
    
       
}

export default HomePage2;
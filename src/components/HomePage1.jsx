import { useEffect, useState } from "react";
import React from "react";

const HomePage1 = () => {
    
    // úkol - při načtení stránky se má zobrazit vyskakovací okno se zprávou:

    useEffect(() => {
       alert("Načtení stránky :)")
    }, []);
    
       
}

export default HomePage1;
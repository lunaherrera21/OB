import React, { useState, useEffect } from "react";

export const ClockHook = () => {
    const initialData = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José",
    };
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => {
        clearInterval(timerID);
        };
    }, []);

    function tick() {
        setData((prevState) => ({
        fecha: new Date(),
        edad: prevState.edad + 1,
        nombre: "Luna",
        apellidos: "Herrera",
        }));
    }

    return (
        <div>
        <h2>Hora Actual: {data.fecha.toLocaleTimeString}</h2>
        <h3>
            {data.nombre} {data.apellidos}
        </h3>
        <h1>Edad: {data.edad}</h1>
        
        </div>
    );
    };

export default ClockHook;
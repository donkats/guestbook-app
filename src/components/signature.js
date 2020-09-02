import React from 'react';

const Signature = ({signature}) => {
    const dateObj = new Date(signature._ts / 1000);
    let dateString = `${dateObj.toLocaleString('nl-NL', {weekday: 'long', day: 'numeric', month: 'long'})} om ${dateObj.toLocaleTimeString('default', {hour: '2-digit',minute: '2-digit', hour12: false})}`

    return (
    <article className="signature box">      
        <h1 className="signature__headline"><strong>Geschreven door {signature.name}</strong> op {dateString}</h1><br />
        <p className="signature__message">
            {signature.message} 
        </p>
    </article>
)};

export default Signature;
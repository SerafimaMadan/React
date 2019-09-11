import React, {useEffect, useState} from 'react';
import Person from "./Person";


export default function List({handleInfo}) {
    const [name, setName] = useState([]);
    const [choice, setChoice] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
            .then(response => response.json())
            .then(data => {
                setName(data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);
    function handleChoice(id, name) {
        setChoice(id);
        handleInfo(id, name.name);
    }
    return (
        <div>
            <div className="rectangle">
                {name.map(o => (
                    <Person
                        name={o.name}
                        handleInfo={id => handleChoice(id, o)}
                        isChoice={o.id === choice}
                        key={o.id}
                        id={o.id}
                    />
                ))}
            </div>
        </div>)
};
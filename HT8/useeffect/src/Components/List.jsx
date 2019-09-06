import React, {useEffect, useState} from 'react';



export default function List() {
    const [name, setName] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
            .then(response => response.json())
            .then(data => {
                    setName(data)
                }
            )
    }, []);
    console.log('return');
    return (
        <div>
            <ul className="rectangle">{name.map(o =>
                <li key={o.id}>
                    <a>{o.name}</a>

                </li>)
            }
            </ul>
        </div>)
};
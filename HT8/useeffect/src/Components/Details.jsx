import React, {useEffect, useState} from 'react';


export default function Details(props) {
    const [info, setInfo] = useState(props.info);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/{id}.json, ")
            .then(response => response.json())
            .then(data => {
                    setInfo(data)
                }
            )
    }, []);
    console.log('return');
    return


};

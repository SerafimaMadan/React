import React, {useEffect, useState} from 'react';


export default function Details({info}) {
    const [data, setData] = useState(0);

    useEffect(() => {
        if (!info.id) return;
        const currentData = data;

        if (currentData) {
            return setData(currentData);
        } else {
            fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/" + info.id + ".json")
                .then(response => response.json())
                .then(result => {
                    setData(result);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [info.id, data]);

    if (!data) return null;

    return (
        <div className="list-names">
            <img
                className="list-name-image"
                src={
                    data.avatar
                }
                alt="avatar"
            />
            <div>city: {data.details.city} </div>
            <div>company: {data.details.company} </div>
            <div>position: {data.details.position} </div>
        </div>
    );
}

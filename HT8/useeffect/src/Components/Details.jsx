import React, {useEffect, useState} from 'react';

let prevId = null;

export default function Details({info}) {
    const [data, setData] = useState(0);

    useEffect(() => {
        if (!info.id) return;
        const currentData = data;

        if (currentData && (prevId === info.id)) {
            return setData(currentData);
        } else {
            prevId = info.id;
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
                    data.avatar + prevId
                }
                alt="avatar"
            />
            <div>city: {data.details.city} </div>
            <div>company: {data.details.company} </div>
            <div>position: {data.details.position} </div>
        </div>
    );
}

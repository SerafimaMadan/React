import React from "react";
import useJsonFetch from "../Hook/useJsonFetch";

export default function Hook ({ url }) {
    const[data, loading, error] = useJsonFetch(url)
    return (
        <div className="App">
            <h1>{data && data.status}</h1>
            <h1>{loading && 'Loading'}</h1>
            <h1>{error && 'Error'}</h1>
        </div>
    );
}
import React from 'react'

export function DataDisplay({data}) {
    console.log(data)
    return (<div><pre>{JSON.stringify(data, null, 2) }</pre></div>);

}

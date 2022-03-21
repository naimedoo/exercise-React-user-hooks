import React from 'react'

function UserInfo(props) {
    return (
        <>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <a href={props.website}>{props.website}</a>
        </>
    )
}
export default UserInfo
import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios'
import UserInfo from './UserInfo';

function Users() {
    const [user,setUser] = useState([]);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users').then((res)=> {
            const utilisateurs = res.data;
            console.log(utilisateurs)
            setUser(utilisateurs)

        }) 
    }, []);
    return (
        <>
        {user.map((utilisateur) => { return <UserInfo name={utilisateur.name} email={utilisateur.email} website={utilisateur.website} />
        })}
        </>
    )
}
export default Users

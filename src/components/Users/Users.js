import React from 'react'
import User from './User/User'


const Users = (props) => {
    const UsersMap = props.data.map(a => {
        return <User UserId={a.UserId} FirstName={a.FirstName} LastName={a.LastName} Location={a.Location} Follow={a.follow}         />
    }) 
return (
    <div>
        <h1>Users page</h1>
        <div>
            {UsersMap}
        </div>
    </div>
)
}

export default Users;
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(users => {
                setUsers(users);
            });
    }, []);

    return (
    <div>
        <ul>
            {users.map(user => <li>Username: {user.username}, Age: {user.age}</li>)}
        </ul>
    </div>
    )
}

export default Users;
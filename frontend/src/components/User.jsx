import { useSelector } from "react-redux";
import { selectAllUsers } from "../redux/slices/user";

const Users = () => {
    const users = useSelector(selectAllUsers);

    return (
    <div>
        <ul>
            {users?.map(user => <li key={user._id}>Username: {user.username}, Age: {user.age}</li>)}
        </ul>
    </div>
    )
}

export default Users;
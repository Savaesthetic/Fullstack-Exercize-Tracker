import axios from 'axios';

const url = 'http://localhost:3500/api/users'

export const fetchUsers = () => axios.get(url)
    .then(res => res.data);

export const fetchUser = (userid) => axios.post(userid);
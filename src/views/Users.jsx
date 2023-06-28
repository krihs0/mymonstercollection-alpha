import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link} from "react-router-dom";
import "./Users.scss";

export default function Users() {
    const  [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(Boolean);

    useEffect(() =>{
        getUsers();
    },[])

    const onDelete= (u) =>{
        if(!window.confirm("Are you sure you want to delete this user?")){
            return;
        }

        axiosClient.delete(`/users/${u.id}`)
            .then(() =>{
                //TODO show notification

                getUsers()
            })
    }

    const getUsers = () =>{
        setLoading(true)
        axiosClient.get('/users')
            .then(({data}) =>{
                setLoading(false)
                setUsers(data.data);
            })
            .catch(() =>{
                setLoading(false)
            })
    }

    return (
        <div className="users">
            <header className="users__header">
                <h1 className="users__header__title">Users</h1>
                <Link className="users__header__newuserbutton" to="/users/new">Add new</Link>
            </header>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Create Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {loading && <tbody>
                    <tr>
                        <td colSpan="5" className="text-center">
                            Loading...
                        </td>
                    </tr>
                    </tbody>}
                    {!loading && <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.created_at}</td>
                            <td className="actionbuttonswrapper">
                                <Link className="edituserbutton" to={'/users/' + u.id}>Edit</Link>
                                <button onClick={ev => onDelete(u)} className="deleteuserbutton">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>}
                </table>
            </div>
        </div>
    )
}

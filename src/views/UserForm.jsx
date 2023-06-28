import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import "./UserForm.scss"
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function userForm() {
    const {id} = useParams()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null);
    const {setNotification} = useStateContext()
    const [user, setUser] = useState({
        id: null,
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    if(id){
        useEffect(() =>{
            setLoading(true);
            axiosClient.get(`/users/${id}`)
                .then(({data})=>{
                    setLoading(false);
                    setUser(data)
                })
                .catch(()=>{
                    setLoading(false)
                })
        }, [])
    }

    const onSubmit =(ev) =>{
        ev.preventDefault();
        if (user.id){
            axiosClient.put(`/users/${user.id}`, user)
                .then(()=>{
                    setNotification("User was succesfully updated")
                    navigate('/users')
                })
                .catch(err =>{
                    const response = err.response;
                    if(response && response.status === 422){
                        setErrors(response.data.errors)
                    }
                })
        }else {
            axiosClient.post(`/users`, user)
                .then(()=>{
                    setNotification("User was succesfully created")
                    navigate('/users')
                })
                .catch(err =>{
                    const response = err.response;
                    if(response && response.status === 422){
                        console.log(response.data.errors);
                        setErrors(response.data.errors)
                    }
                })
        }
    }

    return (
        <section className="userform">
            {user.id && <h1 className="userform__title">Update User: {user.name}</h1>}
            {!user.id && <h1 className="userform__title">New User</h1>}
            <div className="userform__wrapper">
                {loading && (
                    <div>Loading...</div>
                )}

                {!loading &&
                    <form className="userform__wrapper__form" onSubmit={onSubmit}>

                        <input className="userform__wrapper__form__input" value={user.name} onChange={ev => setUser({...user, name: ev.target.value})} placeholder="Name"/>
                        <input className="userform__wrapper__form__input" type="email" value={user.email} onChange={ev => setUser({...user, email: ev.target.value})} placeholder="Email"/>
                        <input className="userform__wrapper__form__input" type="password" onChange={ev => setUser({...user, password: ev.target.value})} placeholder="Password"/>
                        <input className="userform__wrapper__form__input" type="password" onChange={ev => setUser({...user, password_confirmation: ev.target.value})} placeholder="Password Confirmation"/>
                        {errors && <div className="loginform__errors">
                            {Object.keys(errors).map(key => (
                                <p className="loginform__error" key={key}>{errors[key][0]}</p>
                            ))
                            }</div>
                        }
                        <button className="userform__wrapper__form__button">Save</button>
                    </form>
                }
            </div>
        </section>
    )
}

import React, { useState, useEffect, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import style from './register.module.css'

export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState()

    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        try {
            const result = await api.post("/register",{name, email, password})
            console.log(result.data)
            navigate({pathname:"/"})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form className={style.form} onSubmit={event => handleSubmit(event)}>
                <div className={style.input_section}>
                    <label>Nome</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className={style.input_section}>
                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className={style.input_section}>
                    <label>Senha</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className={style.btn_submit} type='submit'>Entrar</button>
            </form>
        </div>
    )
}

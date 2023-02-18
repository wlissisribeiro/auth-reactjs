import React, { useState, useEffect, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import style from './register.module.css'

export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        try {
            const result = await api.post("/register", { name, email, password })
            setError(result.data.message)
        } catch (err) {
            Promise.reject(err)
        }
    }

    return (
        <div className={style.container}>
            <h1 className={style.title}>Criar conta</h1>
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
                <button className={style.btn_submit} type='submit'>Confirmar</button>
                <span>{error}</span>
                <Link className={style.link} to="/">Login</Link>
            </form>
        </div>
    )
}

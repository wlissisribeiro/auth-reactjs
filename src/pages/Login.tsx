import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/ContextProvider'

//style
import style from './login.module.css'

export const Login = () => {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  const{SignIn}=useContext(Context)

  function handleSubmit(event:FormEvent){
    event.preventDefault();
    SignIn(email, password)
  }
  
  //limpa todos os dados de acesso do localstorage
  useEffect(()=>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("dataUser")
  },[])
  
  return (
    <div className={style.container}>
      <h1 className={style.title}>Login</h1>
      <form className={style.form} onSubmit={event=> handleSubmit(event)}>
        <div className={style.input_section}>
          <label htmlFor="">Email</label>
          <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <div className={style.input_section}>
          <label htmlFor="">Senha</label>
          <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
        </div>
      <button className={style.btn_submit} type='submit'>Entrar</button>
      <Link to="/register">Criar uma conta</Link>
      </form>
    </div>
  )
}

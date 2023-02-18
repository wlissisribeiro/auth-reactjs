import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/ContextProvider'
import style from './navbar.module.css'


export const Navbar = () => {
  const { user, SignOut } = useContext(Context)


  function Logout() {
    SignOut()
  }

  return (
    <div className={style.navbar}>
      <div className={style.section_link}>
      <Link className={style.posts} to="/home">Blog</Link>
      <Link className={style.posts} to="/posts">Meus posts</Link>
      <Link className={style.posts} to="/create">Criar Post</Link>

      </div>
      <div className={style.section_user}>
        <span className={style.name}>{user?.name}</span>
        <button className={style.btnLogout} onClick={Logout}>Sair</button>
      </div>
    </div>
  )
}

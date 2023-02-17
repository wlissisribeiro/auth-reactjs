import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/ContextProvider'
import style from './post.module.css'

type PostProps = {
  id?: string
  title: string
  content: string
  author?: string 
}

export const Post = (props: PostProps) => {
  const {user} = useContext(Context);


  return (
    <div className={style.post}>  
      <h1 className={style.title}>{props.title}</h1>
      <p className={style.content}>{props.content}</p>
      <span className={style.author}>Autor: {props.author}</span>
      <div className={style.section} style={
        user.id != props.author  ?
        {display:"none"}:{display:"flex"}}>
        <span>Excluir</span>

        <span>Editar</span>
      </div>
    </div>
  )
}

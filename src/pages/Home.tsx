import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/ContextProvider'
import { api } from '../services/api';

//components
import { Navbar } from '../components/navbar/Navbar'
import { Post } from '../components/post/Post';

import style from './home.module.css'

type Post = {
  id: string
  title: string
  content: string
}

export const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<any>()

  useEffect(() => {

    const token = localStorage.getItem("accessToken")
    if (!token) {
      navigate("/")
    }

    async function getListPosts() {
      try {
        const result = await api.get("/home", { headers: { Authorization: `Bearer ${token}` } });
        setPosts(result.data)
      } catch (error) {
        Promise.reject(error)
      }
    }

    getListPosts();

  }, []);


  return (
    <div className={style.container}>
      <Navbar />
      <h1 className={style.title}>Meu Blog</h1>
      {
        posts?.map((post: { id: React.Key | null | undefined; title: string; content: string; user_id: string | undefined; }) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              content={post.content}
              author={post.user_id} />
          )
        })
      }
    </div>
  )
}

import { Key, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//services
import { api } from '../services/api'

//component
import { Navbar } from '../components/navbar/Navbar'
import { Post } from '../components/post/Post'

export const Posts = () => {
  const navigate = useNavigate();
  const [postsUser, setPostsUser] = useState()
  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (!token) {
      navigate("/")
    }

    async function getListPostsUser() {
      try {
        const result = await api.get("/posts", { headers: { Authorization: `Bearer ${token}` } });
        setPostsUser(result.data)
      } catch (error) {
        console.log(error)
        Promise.reject(error)
      }
    }

    getListPostsUser();
  }, [])

  return (
    <div>
      <Navbar />
      <div>
        {
          postsUser?.map(post => {
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
    </div>
  )
}

import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import IMAGES from '../../images'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import { selectPosts } from '../../store/slices/posts/postsSlice'
import { resetSearch, selectSearch } from '../../store/slices/search/searchSlice'
import Post from '../Post/Post'

function Posts() {

    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)
    const search = useSelector(selectSearch)

    useEffect(() => {
        if(!posts.length){
            dispatch(fetchPosts())
        }
        return () => {
            dispatch(resetSearch())
        }
    }, [])

    const filteredPosts = useMemo(() => {
        return [
            ...posts.filter(post => post.name.includes(search))
        ]
    }, [search, posts])

  return (
    <>
        {
            filteredPosts.map(el => <Post key={el.id} id={el.id} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} comments={el.comments} />)
        }
    </>
  )
}

export default Posts
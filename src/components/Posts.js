import React from 'react'
import Post from './Post'


export default ({ posts }) => {
    return posts.map(post => <Post post={post} id={post} />)
}
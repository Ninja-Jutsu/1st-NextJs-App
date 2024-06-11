import React from 'react'

export default async function PostsPage() {
  const data = await fetch('http://localhost:3000/api/posts')
  const result = await data.json()
  console.log(result)
  return <div>POSTS PAGE</div>
}

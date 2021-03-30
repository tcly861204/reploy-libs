import React, { useState, useEffect } from 'react'

function State () {
  const [user, setUser] = useState({
    name: 'cobill',
    age: 30
  })
  const { name, age } = user
  useEffect(() => {
  }, [])
  return (
    <div>
      <span>用户：{name}</span>
      <span>年龄：{age}</span>
      <button onClick={() => setUser({
        ...user,
        age: age + 1
      })}>按钮</button>
    </div>
  )
}

export default State
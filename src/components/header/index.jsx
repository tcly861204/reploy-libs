import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'logo'
    }
  }

  render () {
    const { title } = this.state
    return (
      <header className="header">
        <h1>{title}</h1>
        <ul>
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/detail">介绍</Link>
          <Link to="/login">登录</Link>
        </ul>
      </header>
    )
  }
}
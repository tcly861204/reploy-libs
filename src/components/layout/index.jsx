import React, { Component } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
export default class Layout extends Component {
  render () {
    return (
      <>
        <Header />
        <main className="container">
          {this.props.children}
        </main>
        <Footer />
      </>
    )
  }
}

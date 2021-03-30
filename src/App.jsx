import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Layout from '@/components/layout'
import '@/styles/App'
import '@/styles/index'
import '@/styles/base'
import { Router } from '@/router'
@withRouter
class App extends Component {
  render () {
    return (
      <>
        <Layout>
          <Router />
        </Layout>
      </>
    )
  }
}

export default App

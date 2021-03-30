import { Component } from 'react';
import { withRouter } from 'react-router-dom'
import loadable from '@/libs/loadable'
const Login = loadable(() => import('@/views/login'))
class CheckLogin extends Component {
  componentDidMount() {
    if (this.props.location.pathname !== 'login') {
      this.props.history.push('/login')
    }
  }
  render() {
    return <Login></Login>;
  }
}

export default withRouter(CheckLogin)

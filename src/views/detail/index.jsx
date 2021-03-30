import React, { Component } from 'react'
import State from '@/hooks/State'
// import Message from '@/components/message'
const withLog = Component => {
  return class extends Component {
    componentDidMount () {
    }
    render () {
      return <Component {...this.props} />
    }
  }
}

@withLog
class Detail extends Component {
  render () {
    return (
      <div>
        detail
        <State /><br/>
        <button onClick={()=>{ this.Message.info('普通提示') }}>成功</button>
      </div>
    )
  }
}



export default Detail
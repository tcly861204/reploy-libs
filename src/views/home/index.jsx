import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from '@/redux/num/action'
@connect(
  state => ({
    num: state.num
  }),
  {
    add,
    minus,
    asyncAdd
  }
)
class Home extends Component {
  render () {
    return (
      <div>
        <p>{this.props.num}</p>
        <div>
          <button onClick={() => this.props.add()}>+</button>
          <button onClick={() => this.props.minus()}>-</button>
          <button onClick={() => this.props.asyncAdd()}>延迟添加</button>
        </div>
      </div>
    )
  }
}
export default Home

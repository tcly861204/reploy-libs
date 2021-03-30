import React, { Component } from 'react'

const Comment = React.memo(function (props) {
  return <div>
    <p>{ props.body }</p>
    <p>--{ props.author }</p>
  </div>
})

class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        comments: [
          { body: "react is very good", author: "facebook" },
          { body: "vue is very good", author: "youyuxi" }
        ]
      });
    }, 0);
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  render () {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} {...c} />
        ))}
      </div>
    )
  }
}

export default About

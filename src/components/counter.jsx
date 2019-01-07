import React, { Component } from 'react'
class Counter extends Component {
  state = {
    count: this.props.value,
    image: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
  }
  // constructor () {
  //   super()

  //   this.handleImcreament = this.handleImcreament.bind(this)
  // }
  // styles = {
  //   fontSize: 30,
  //   fontWeight: 'bold'
  // }

  renderTags () {
    if (this.state.tags.length === 0) return <p>No tags found!!!</p>
    return (
      <ul>
        {this.state.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    )
  }
  handleImcreament = product => {
    console.log(product)
    this.setState({ count: this.state.count + 1 })
  }
  render () {
    let classes = this.getBadgeClasses()

    return (
      <React.Fragment>
        {this.props.children}
        {/* <img src={this.state.image} alt='peep' /> */}
        {/* <span style={this.styles} className='badge badge-primary m-2'> */}
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleImcreament({ id: 1 })}
          // onClick={this.handleImcreament}
          className='btn btn-secondary btn-sm'
        >
          Increament
        </button>
        <button onClick={this.props.onDelete} className='btn btn-danger m-2'>
          Delete
        </button>
        {/* {this.state.tags.length === 0 && 'Please create tags first.'} */}
        {/* {this.renderTags()} */}
      </React.Fragment>
    )
  }

  getBadgeClasses () {
    let classes = 'badge m-2 badge-'
    classes += this.state.count === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount () {
    const { count } = this.state
    return count === 0 ? 'Zero' : count
  }
}

export default Counter

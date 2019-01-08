import React, { Component } from 'react'
class Counter extends Component {
  // state = {
  //   count: this.props.value,
  //   image: 'https://picsum.photos/200',
  //   tags: ['tag1', 'tag2', 'tag3']
  // }
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
  disableNegativeButton = () => {
    console.log(this.props.counter.value)
    if (this.props.counter.value === 0) return true
    else return false
  }
  // handleImcreament = product => {
  //   console.log(product)
  //   this.setState({ count: this.state.count + 1 })
  // }
  render () {
    let classes = this.getBadgeClasses()
    let disabledState = this.disableNegativeButton()
    const { onDecrement, onDelete, onIncrement, children, counter } = this.props
    return (
      <React.Fragment>
        {children}
        {/* <img src={this.state.image} alt='peep' /> */}
        {/* <span style={this.styles} className='badge badge-primary m-2'> */}
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          // onClick={() => this.handleImcreament({ id: 1 })}
          // onClick={this.handleImcreament}
          className='btn btn-secondary btn-sm m-2'
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className='btn btn-secondary btn-sm m-2'
          disabled={disabledState}
        >
          -
        </button>
        <button onClick={onDelete} className='btn btn-danger btn-sm m-2'>
          Delete
        </button>
        {/* {this.state.tags.length === 0 && 'Please create tags first.'} */}
        {/* {this.renderTags()} */}
      </React.Fragment>
    )
  }

  getBadgeClasses () {
    let classes = 'badge btn-sm m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount () {
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value
  }
}

export default Counter

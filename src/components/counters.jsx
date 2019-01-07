import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    )
    this.setState({ counters })
    // console.log('event handler called ' + counterId)
  }

  render () {
    return (
      <React.Fragment>
        <button className='btn btn-primary btn-sm m-2'>Reset</button>
        {this.state.counters.map((counter, index) => (
          <Counter
            key={index}
            counter={counter}
            selected
            onDelete={() => this.handleDelete(counter.id)}
          >
            <h3>Counter #{counter.id}</h3>
          </Counter>
        ))}
      </React.Fragment>
    )
  }
}

export default Counters

import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
  render () {
    const { counters, onDelete, onIncrement, onReset, onDecrement } = this.props

    return (
      <React.Fragment>
        <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        {counters.map((counter, index) => (
          <Counter
            key={index}
            counter={counter}
            selected
            onDelete={() => onDelete(counter.id)}
            onIncrement={() => onIncrement(counter)}
            onDecrement={() => onDecrement(counter)}
          >
            <h3>Counter #{index}</h3>
          </Counter>
        ))}
      </React.Fragment>
    )
  }
}

export default Counters

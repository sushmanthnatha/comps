import { useEffect, useState, useReducer } from 'react';
import Counter from '../components/Counter';
import Button from '../components/Button';
import useCounter from '../hooks/useCounter';
import Panel from '../components/Panel';

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  CHANGE_VALUE: 'CHANGE_VALUE',
  ADD_VALUE: 'ADD_VALUE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actionTypes.CHANGE_VALUE:
      return { ...state, valueToAdd: action.payload };
    case actionTypes.ADD_VALUE:
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    default:
      return state;
  }
};
function CounterPage({ initialCount = 0 }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  function increment() {
    // setCount(count + 1);
    dispatch({ type: actionTypes.INCREMENT });
  }

  function decrement() {
    // setCount(count - 1);
    dispatch({ type: actionTypes.DECREMENT });
  }

  function handleChange(event) {
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: actionTypes.CHANGE_VALUE, payload: value });
    // setValueToAdd(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: actionTypes.ADD_VALUE });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  }
  return (
    <Panel>
      <h2 className="text-lg">Count is {state.count}</h2>
      <div className="flex gap-2">
        <Button secondary onClick={decrement}>
          Decrement
        </Button>
        <Button primary onClick={increment}>
          Increment
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          type="number"
          value={state.valueToAdd}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button outline success>
          Add it
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;

import { useEffect, useState } from 'react';
import Counter from '../components/Counter';
import Button from '../components/Button';
import useCounter from '../hooks/useCounter';
import Panel from '../components/Panel';

function CounterPage({ initialCount = 0 }) {
  //   const { count, handleClick } = useCounter(initialCount);
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function handleChange(event) {
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  }
  return (
    <Panel>
      <h2 className="text-lg">Count is {count}</h2>
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
          value={valueToAdd}
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

import { useState, useEffect } from "react";

function useCounter(initialCount) {
      const [count, setCount] = useState(initialCount);
      useEffect(() => {
        console.log(count);
      }, [count]);

      const handleClick = (action) => {
        if (action === 'increment') setCount(count + 1);
        else if (action === 'decrement') setCount(count - 1);
    };
    
    return { count, handleClick}
}

export default useCounter;
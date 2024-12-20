import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
    setChosenCount((prevChosenCount) => prevChosenCount + 1); // both state updates are scheduled and they're guaranteed to be executed in the order in which they are scheduled.
    console.log(chosenCount); // won't work!
  }; // React performs state batching, which simply means that multiple state updates that are triggered from the same function, for example, are batched together and will only lead to one component function execution.

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet= {handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;

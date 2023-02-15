import { useState } from "react";
import useClock from "./hooks/useClock";
import LocalClock from "./components/local-clock/local-clock";
import ClockList from "./components/clock-list/clock-list";

function App() {
  const {
    localClock,
    updateLocalClock,
    createClock,
    updateClock,
    deleteClock,
  } = useClock();
  return (
    <div className="App">
      <LocalClock />
      <ClockList />
    </div>
  );
}

export default App;

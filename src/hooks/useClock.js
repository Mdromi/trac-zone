import { useState } from "react";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

const useClock = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  if (!localClock) return;

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  const createClock = (clock) => {
    clock.id = shortid.generate();
    setClocks([...clocks, clock]);
  };

  const updateClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) return updatedClock;
      return clock;
    });
    setClocks(updatedClocks);
  };

  const deleteClock = (id) => {
    const updatedClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedClocks);
  };
  return {
    localClock,
    updateLocalClock,
    createClock,
    updateClock,
    deleteClock
  }
};

export default useClock;

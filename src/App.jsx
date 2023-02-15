import { useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import useClock from "./hooks/useClock";
import LocalClock from "./components/local-clock/local-clock";
import ClockList from "./components/clock-list/clock-list";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#4a98f7",
        },
      },
    },
  },
});

function App() {
  const {
    clocks,
    localClock,
    updateLocalClock,
    createClock,
    updateClock,
    deleteClock,
  } = useClock();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <div className="App">
          <LocalClock
            clock={localClock}
            updateClock={updateLocalClock}
            createClock={createClock}
          />
          <ClockList
            clocks={clocks}
            localClock={localClock.date}
            updateClock={updateClock}
            deleteClock={deleteClock}
          />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

import { format } from "date-fns";
import { Card, CssBaseline } from "@mui/material";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  let offsetHr = offset / 60;
  return (
    <>
      <Card sx={{ maxWidth: 275 }}>
        <h1>Title: {title}</h1>
        <h3>{format(date, "yyyy-MM-dd hh:mm:ss aaa")}</h3>
        <p>
          {timezone}
          {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
        </p>
      </Card>
    </>
  );
};

export default ClockDisplay;

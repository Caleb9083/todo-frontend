import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

const Calender = () => {
  const [date, setDate] = React.useState(() => dayjs(Date.now()));
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;

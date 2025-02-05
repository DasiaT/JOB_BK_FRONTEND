import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { DateTimeRangePicker } from '@mui/x-date-pickers-pro/DateTimeRangePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button, Typography } from "@mui/material";

export default function CalendarWithDateTimeRanges() {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);
  const [ranges, setRanges] = React.useState<{ date: Dayjs; range: DateRange<Dayjs>[] }[]>([]);

  const handleDateSelect = (date: Dayjs) => {
    setSelectedDate(date);
  };

  const addRange = () => {
    if (selectedDate) {
      setRanges(prev => {
        const existingEntry = prev.find(entry => entry.date.isSame(selectedDate, 'day'));
        if (existingEntry) {
          existingEntry.range.push([dayjs(selectedDate).hour(9), dayjs(selectedDate).hour(10)]);
          return [...prev];
        }
        return [...prev, { date: selectedDate, range: [[dayjs(selectedDate).hour(9), dayjs(selectedDate).hour(10)]] }];
      });
    }
  };

  const updateRange = (date: Dayjs, index: number, newValue: DateRange<Dayjs>) => {
    setRanges(prev =>
      prev.map(entry =>
        entry.date.isSame(date, 'day')
          ? { ...entry, range: entry.range.map((r, i) => (i === index ? newValue : r)) }
          : entry
      )
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <Typography variant="h5">Seleccione una fecha</Typography>
        <DateCalendar onChange={handleDateSelect} />
        {selectedDate && (
          <>
            <Typography variant="h6">Rangos para {selectedDate.format('DD/MM/YYYY')}</Typography>
            {ranges.find(entry => entry.date.isSame(selectedDate, 'day'))?.range.map((range, index) => (
              <DateTimeRangePicker
                key={index}
                value={range}
                onChange={(newValue) => updateRange(selectedDate, index, newValue)}
              />
            ))}
            <Button variant="contained" onClick={addRange}>
              Añadir Rango
            </Button>
          </>
        )}
      </div>
    </LocalizationProvider>
  );
}

import { Grid, Paper, Typography } from '@mui/material';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Calendar({ events }) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={8}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Calendar
          </Typography>
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            views={['month', 'week', 'day']}
            step={60}
            showMultiDayTimes
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Calendar;

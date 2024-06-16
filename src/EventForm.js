import { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

function EventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, start: new Date(start), end: new Date(end) });
    setTitle('');
    setStart('');
    setEnd('');
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h5" align="center" gutterBottom>
        Add Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Event Name"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Event Start"
              type="datetime-local"
              variant="outlined"
              fullWidth
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Event End"
              type="datetime-local"
              variant="outlined"
              fullWidth
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Event
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default EventForm;

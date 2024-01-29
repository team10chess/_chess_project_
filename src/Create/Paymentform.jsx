import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tournament Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="tourid"
            name="tourid"
            label="Tournament ID"
            fullWidth
            autoComplete="tournament id"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Format</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="format"
            >
              <MenuItem value={10}>Round Robin</MenuItem>
              <MenuItem value={20} selected>
                Swiss
              </MenuItem>
              <MenuItem value={30}>Single elimination</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField id="player-num" label="Number of players"  />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

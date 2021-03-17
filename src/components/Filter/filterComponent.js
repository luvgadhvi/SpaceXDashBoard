import React from 'react';
import {
  Grid,
  Container,
  makeStyles
} from "@material-ui/core";
import DateRangeComponent from "./DateSelector/dateRangeSelector";
import LaunchStatusComponent from './LaunchStatus/launchStatus';
import './filterStyle.css'
const useStyles = makeStyles(theme => ({
  filterGridContainer: {
    marginTop: '30px'
  }
}));
function FilterComponent() {
  const classes = useStyles();
  return (
    <Container className={classes.filterGridContainer} >
      <Grid container direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <DateRangeComponent />
        </Grid>
        <Grid item>
          <LaunchStatusComponent />
        </Grid>
      </Grid>
    </Container>
  );
}

export default FilterComponent;
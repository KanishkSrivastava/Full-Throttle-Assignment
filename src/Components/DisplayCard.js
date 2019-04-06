import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PulseLoader from 'react-spinners/PulseLoader';

const styles = { card: { minWidth: 27 }, title: { fontWeight: 'bold' }, content: { color: '#3f51b5 ' }, payment: { color: '#4CBB17' } };
const DisplayCard = ({ classes, cost, time, loading, interestRate, monthlyPayments, noOfPayments }) => {
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Grid container alignItems='center'>
            <Grid item xs={10}>
              <Typography className={classes.title} variant='h6' component='h2'>
                Amount: <span className={classes.content}>$ {cost}</span> Time: <span className={classes.content}>{time} Months</span>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <PulseLoader sizeUnit={'px'} size={10} color={'#4CBB17'} loading={loading} />
            </Grid>
            <Grid item xs={10}>
              <Typography variant='h6'>Interest Rate</Typography>
              <Typography variant='h6'>Monthly Payments </Typography>
              <Typography variant='h6'>Number Of Payments </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h6' className={classes.payment}>
                {interestRate}
              </Typography>
              <Typography variant='h6' className={classes.payment}>
                $ {monthlyPayments}
              </Typography>
              <Typography variant='h6' className={classes.payment}>
                {noOfPayments}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(DisplayCard);

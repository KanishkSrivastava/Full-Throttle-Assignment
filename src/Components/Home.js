import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Slider from './Slider';
import Navbar from './Navbar';
import DisplayCard from './DisplayCard';

import { costSlider, timeSlider } from '../Actions/sliderActions';

export class Home extends Component {
  constructor(props) {
    super(props);
    const { cost, time } = props.slider;
    const { loading, interestRate, monthlyPayments, noOfPayments } = props.payment;
    this.state = { cost, time, loading, interestRate, monthlyPayments, noOfPayments };
  }
  componentWillReceiveProps({ slider, payment }) {
    if (slider !== this.props.slider || payment !== this.props.payment) {
      const { cost, time } = slider;
      const { loading, interestRate, monthlyPayments, noOfPayments } = payment;
      this.setState({ cost, time, loading, interestRate, monthlyPayments, noOfPayments });
    }
  }
  handleCostChange = cost => this.props.costSlider(cost);
  handleTimeChange = time => this.props.timeSlider(time);

  render() {
    const { cost, time, loading, interestRate, monthlyPayments, noOfPayments } = this.state;
    return (
      <Grid container justify='space-evenly' alignItems='center'>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12} sm={5} style={{ marginTop: 100 }}>
          <Grid item style={{ margin: 20 }}>
            <Typography variant='body2'>COST</Typography>
            <Slider min={500} max={5000} onChange={this.handleCostChange} />
          </Grid>
          <Grid item style={{ margin: 20 }}>
            <Typography variant='body2'>TIME</Typography>
            <Slider min={6} max={24} onChange={this.handleTimeChange} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={7} lg={3} style={{ marginTop: 100 }}>
          <DisplayCard
            cost={cost}
            time={time}
            interestRate={interestRate}
            monthlyPayments={monthlyPayments}
            noOfPayments={noOfPayments}
            loading={loading}
          />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ slider, payment }) => ({ slider, payment });
const mapDispatchToProps = { costSlider, timeSlider };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the node modules.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Documentation

### Display Card Component

Dumb component which shows amount, time, interest rate, monthly payments and number of payments.

> Props: classes, cost, time, loading, interestRate, monthlyPayments, noOfPayments

### Home Component

Smart component connected to redux store.

> State: cost, time, loading, interestRate, monthlyPayments, noOfPayments cost, time, loading, interestRate, monthlyPayments, noOfPayments

### Slider Component

Dumb component which renders a slider.

> Props:min, max, onChange( )

### Calculate Payments Action

Action which fetches the response from the API which by sending cost and time.

> Fetches response and store state: interestRate, monthlyPayments, noOfPayments

### Slider Actions

Sets the store state to current slider value

### Calculate Payments Reducer

> State: loading, interestRate, monthlyPayments noOfPayments

### Slider Reducer

> State: cost, time

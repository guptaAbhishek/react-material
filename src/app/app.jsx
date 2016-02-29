import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';
import ProductContainer from './DatePickerCopy';

injectTapEventPlugin();

const PRODUCTS = [
  {
    productName:'Loan Against Property',
    productDesc:'Loan against propserr amafskjfa afjkasfajkf asfjkafjkahfs',
    btnText:'Explore1',

  },
  {
    productName:'Lease Rental Discounting',
    productDesc:'Loan against propserr dfsfd afjkasfajkf asfjkafjkahfs',
    btnText:'Explore',
  },
  {
    productName:'Medical Equipment',
    productDesc:'jskdfh sdfjkhsdf sudfhkjsdf sdfkh',
    btnText:'Explore3',
  },
  {
    productName:'Franchise Financing',
    productDesc:'sd2fjkhsfd',
    btnText:'Explore2',
  },
];

const App = React.createClass({
  render: function() {
    return (
      <ProductContainer products={this.props.product}></ProductContainer>
    );
  },
});



ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('app'));

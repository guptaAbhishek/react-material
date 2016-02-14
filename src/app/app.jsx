import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';
import DatePicker from './DatePicker';

injectTapEventPlugin();

const App = React.createClass({
  render: function() {
    return (
      <DatePicker></DatePicker>
    );
  },
});



ReactDOM.render(<App />, document.getElementById('app'));

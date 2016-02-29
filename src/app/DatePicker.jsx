import React from 'react';
import ReactDOM from 'react-dom';

const HeadingProduct = React.createClass({
  render: function() {
    return (
      <h1>{this.props.productName}</h1>
    );
  },
});

const ProductDesc = React.createClass({
  render: function(){
    return (
    <h3>{this.props.productDesc}</h3>
    );
  },
});

const ProductExBtn = React.createClass({
  render: function(){
    return(
      <button className="btn" type="button">{this.props.btnText}</button>
    );
  },
});

const ProductContainer = React.createClass({
  render: function() {
    const rows=[];
    this.props.products.forEach(function(product){
    rows.push(<HeadingProduct productName={product.productName} key={product.productName}/>);
    rows.push(<ProductDesc productDesc={product.productDesc} key={product.productDesc}/>);
    rows.push(<ProductExBtn btnText={product.btnText} key={product.btnText}/>);
    }.bind(this));
    return (
      <div>
        {rows}
      </div>
    );
  },
});



export default ProductContainer;

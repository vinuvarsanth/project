// ProductTable.js

import React from 'react';
import './ProductTable.css'; // Import the CSS file for styling

class ProductTable extends React.Component {
  constructor(props) {
    super(props);

    // Sample data for 10 products
    this.state = {
      products: [
        { id: 1, companyName: 'Company A', productName: 'Product 1', quantity: 50 },
  { id: 2, companyName: 'Company B', productName: 'Product 2', quantity: 30 },
  { id: 3, companyName: 'Company C', productName: 'Product 3', quantity: 25 },
  { id: 4, companyName: 'Company D', productName: 'Product 4', quantity: 40 },
  { id: 5, companyName: 'Company E', productName: 'Product 5', quantity: 60 },
  { id: 6, companyName: 'Company F', productName: 'Product 6', quantity: 20 },
  { id: 7, companyName: 'Company G', productName: 'Product 7', quantity: 35 },
  { id: 8, companyName: 'Company H', productName: 'Product 8', quantity: 45 },
  { id: 9, companyName: 'Company I', productName: 'Product 9', quantity: 55 },
  { id: 10, companyName: 'Company J', productName: 'Product 10', quantity: 28 },
  { id: 11, companyName: 'Company K', productName: 'Product 11', quantity: 37 },
  { id: 12, companyName: 'Company L', productName: 'Product 12', quantity: 42 },
  { id: 13, companyName: 'Company M', productName: 'Product 13', quantity: 33 },
  { id: 14, companyName: 'Company N', productName: 'Product 14', quantity: 48 },
  { id: 15, companyName: 'Company O', productName: 'Product 15', quantity: 22 },
  { id: 16, companyName: 'Company P', productName: 'Product 16', quantity: 39 },
  { id: 17, companyName: 'Company Q', productName: 'Product 17', quantity: 50 },
  { id: 18, companyName: 'Company R', productName: 'Product 18', quantity: 30 },
  { id: 19, companyName: 'Company S', productName: 'Product 19', quantity: 25 },
      ],
    };
  }

  render() {
    return (
      <div>
        <center>

        <br></br>
        <br></br>
        <h1>Product Table</h1>
        <br></br>
        <br></br>
        </center>
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Company Name</th>
              <th>Product Name</th>
              <th>Available Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.companyName}</td>
                <td>{product.productName}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;

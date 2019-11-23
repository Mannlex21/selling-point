import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import ItemModal from '../components/ItemModal';
import ItemProduct from '../components/item-product';
import '../assets/css/products.scss';

class Product extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;

    return (
      <div className="div-container">
        <label>Productos</label>
        <ItemModal></ItemModal>
        <Row>
          {
            items.map((item) => (
              <ItemProduct key={item._id} itemPassed={ item }></ItemProduct>
            ))
          }
        </Row>
      </div>
    );
  }
}

Product.protoTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems })(Product);
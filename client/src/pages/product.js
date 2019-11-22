import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import ItemModal from '../components/ItemModal';
import ItemProduct from '../components/item-product';

class Product extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div>
        <label>Productos</label>
        <ItemModal></ItemModal>
        <ItemProduct></ItemProduct>
          
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
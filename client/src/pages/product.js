import React, { Component } from 'react';
import {
  Button,
  Row
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import ItemModal from '../components/item-modal/item-modal';
import ItemProduct from '../components/item-product';
import '../assets/css/products.scss';

class Product extends Component {

  state = {
    modal: false,
    id: null,
    buttons: false
  }

  componentDidMount() {
    this.props.getItems();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  newItem = () => {
    this.setState({
      modal: !this.state.modal,
      id: null
    });
  };

  onChange = (id) => {
    this.setState({
      id: id
    });
  };

  render() {
    const { items } = this.props.item;

    return (
      <div className="div-container">
        <Button
          color="dark"
          style={{marginBottom: '1rem'}}
          onClick={ this.newItem }
        >
          Agregar producto
        </Button>

        <ItemModal
          modal={ this.state.modal }
          onIdChange={ this.onChange }
          toggle={ this.toggle }
          idItem={ this.state.id }
        ></ItemModal>

        <Row className="m-0">
          {
            items.map((item) => (
              <ItemProduct
                onIdChange={ this.onChange }
                toggle={ this.toggle }
                key={ item._id }
                itemPassed={ item }
              ></ItemProduct>
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
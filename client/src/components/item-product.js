import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { Row, Col } from 'react-bootstrap';

class ItemProduct extends Component {
  state = {
    modal: false,
    sku: '',
    name: '',
    description: '',
    quantity: null,
    purchase_price: null,
    sale_price: null
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;

    return (
      <Row>
        {
          items.map(({ _id, name }) => (
            <Col sm={3}>
              <div key={ _id } className="div-item" >
                <label>{name}</label>
              </div>
            </Col>
          ))
        }
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems })(ItemProduct);
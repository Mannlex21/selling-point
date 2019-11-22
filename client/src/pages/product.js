import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import ItemModal from '../components/ItemModal';

class Product extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;

    return (
      <div>
        <label>Productos</label>
        <ItemModal></ItemModal>
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
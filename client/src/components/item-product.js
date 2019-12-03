import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem, getItem } from '../actions/itemActions';
import { Col } from 'reactstrap';
import cereal from '../assets/img/cereal.png';
import { VIEW, UPDATE, DELETE } from '../actions/type_crud';

class ItemProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.onViewClick = this.onViewClick.bind(this);
  }

  onDeleteClick = (id) => e => {
    this.props.deleteItem(id);
    this.props.onIdChange(id, DELETE);
  }

  onViewClick = (id) => e => {
    this.props.onIdChange(id, VIEW);
    this.props.toggle();
  }

  onEditClick = (id) => e => {
    this.props.onIdChange(id, UPDATE);
    this.props.toggle();
  }

  render() {
    const itemPassed = this.props.itemPassed;

    return (
      <Col xs={6} sm={6} md={2}>
        <div className="div-item sh-container sh-effect--delta">
          <div id={ itemPassed._id } className="div-product" >
            <div className="div-img-product">
              <img src={ cereal } alt="cereal"></img>
            </div>
            <label>{itemPassed.name}</label>
          </div>
          <div className="div-buttons sh-effect--delta__overlay">
            <div className="sh-effect--delta__overlay-inside">
              <div className="div-center">
                <div className="sh-effect--delta__button" onClick={this.onViewClick(itemPassed._id)}><label>Ver</label></div>
                <div className="sh-effect--delta__button" onClick={this.onEditClick(itemPassed._id)}><label>Editar</label></div>
                <div className="sh-effect--delta__button" onClick={this.onDeleteClick(itemPassed._id)}><label>Borrar</label></div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem, getItem })(ItemProduct);
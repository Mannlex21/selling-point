import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import { Col } from 'react-bootstrap';
import cereal from '../assets/img/cereal.png';

class ItemProduct extends Component {
  state = {
    buttons: false,
  }

  componentDidMount() {

  }

  onViewOptions = param => event => {
    this.setState({
      active: !this.state.active
    });
  }

  onDeleteClick = (id) => e => {
    this.props.deleteItem(id);
  }

  onViewClick = (id) => e => {
    // this.props.deleteItem(id);
  }

  onEditClick = (id) => e => {
    // this.props.deleteItem(id);
  }

  render() {
    const itemPassed = this.props.itemPassed;

    return (
      <Col sm={2}>
        <div className="div-item sh-container sh-effect--delta">
          <div id={ itemPassed._id } className="div-product" onClick={this.onViewOptions(itemPassed)} >
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

export default connect(mapStateToProps, { getItems, deleteItem })(ItemProduct);
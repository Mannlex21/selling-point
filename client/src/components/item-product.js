import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { Col } from 'react-bootstrap';
import cereal from '../assets/img/cereal.png';

class ItemProduct extends Component {
  state = {
    buttons: false,
  }

  componentDidMount() {

  }

  onViewOptions = param => event => {
    console.log(param, event)
    this.setState({
      active: !this.state.active
    });
  }

  onCloseOptions = e => {
    this.setState({
      active: !this.state.active
    });
  };

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
          <div className={`div-buttons sh-effect--delta__overlay ${this.state.active? 'active': ''}`} onClick={this.onCloseOptions}>
            <div className="sh-effect--delta__overlay-inside">
              <div className="sh-effect--delta__button">View</div>
              <div className="sh-effect--delta__meta">Editar</div>
              <div className="sh-effect--delta__meta">Borrar</div>
              <div className="sh-effect--delta__meta">Atras</div>
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

export default connect(mapStateToProps, { getItems })(ItemProduct);

/* <Row>
  {
    items.map((item) => (
      <Col key={ item._id } sm={2} onClick={ this.props.onViewOptions(null, item) }>
        <div id={item._id} className="div-item" >
          <div className="div-img-product">
            <img src={ cereal } alt="cereal"></img>
          </div>
          <label>{item.name}</label>
        </div>
      </Col>
    ))
  }
</Row> */
import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Row,
  Col,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem, getItem } from '../../actions/itemActions';
import './item-modal.scss';
import { VIEW, UPDATE, ADD } from '../../actions/type_crud';

class ItemModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      func1: this.func1.bind(this),
      modal: false,
      idItem: null,
      sku: '',
      name: '',
      description: '',
      quantity: '',
      purchase_price: '',
      sale_price: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.idItem !== state.idItem) {
      return { idItem: state.idItem, fun: state.func1(props.idItem) };
    }

    return null;
  }

  func1 = (id) => {
    if(id !== null) {
      this.props.getItem(id).then(res=>{
        this.setState({
          sku: res.sku,
          name: res.name,
          description: res.description,
          quantity: res.quantity,
          purchase_price: res.pricing.purchase_price,
          sale_price: res.pricing.sale_price
        })
      })
    } else {
      this.setState({
        sku: '',
        name: '',
        description: '',
        quantity: '',
        purchase_price: '',
        sale_price: ''
      })
    }

    this.setState({
      idItem: id,
    })
  }

  onChange = (e) => {
    const { name, value, type } = e.target;

    this.setState({ [name]: type === "number" ? parseInt(value, 10) : value });
  };

  toggle = () => {
    this.props.toggle();
  };

  isView = () => {
    console.log(this.props.type === VIEW)
    return this.props.type === VIEW;
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props)

    let newItem = null;

    switch (this.props.type) {
      case UPDATE:
        newItem = {
          _id: this.state.idItem,
          sku: this.state.sku,
          name: this.state.name,
          description: this.state.description,
          quantity: this.state.quantity,
          pricing: {
            purchase_price: this.state.purchase_price,
            sale_price: this.state.sale_price,
          }
        }

        break;
      case ADD:
        newItem = {
          _id: null,
          sku: this.state.sku,
          name: this.state.name,
          description: this.state.description,
          quantity: this.state.quantity,
          pricing: {
            purchase_price: this.state.purchase_price,
            sale_price: this.state.sale_price,
          }
        }

        this.props.addItem(newItem);

        break;

      default:
        break;
    }

    this.toggle();
  }

  render() {
    const showModal = this.props.modal;

    return (
      <div className="div-item-modal">
        <Modal
          isOpen={showModal}
          toggle={this.props.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Agregar producto
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup className="form-item-modal">
                <Row >
                  <Col sm={6}>
                    <Input
                      type="text"
                      name="sku"
                      placeholder="SKU"
                      onChange={ this.onChange }
                      value={ this.state.sku }
                    ></Input>
                  </Col>
                  <Col sm={6}>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nombre del producto"
                      onChange={this.onChange}
                      value={ this.state.name }
                    ></Input>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Input
                      type="text"
                      name="description"
                      placeholder="Descripción"
                      onChange={this.onChange}
                      value={ this.state.description }
                    ></Input>
                  </Col>
                  <Col sm={6}>
                    <Input
                      type="number"
                      name="quantity"
                      placeholder="Cantidad"
                      onChange={this.onChange}
                      value={ this.state.quantity }
                    ></Input>
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}>
                    <Input
                      type="number"
                      name="purchase_price"
                      placeholder="Precio de compra"
                      onChange={this.onChange}
                      value={ this.state.purchase_price }
                    ></Input>
                  </Col>
                  <Col sm={6}>
                    <Input
                      type="number"
                      name="sale_price"
                      placeholder="Precio de venta"
                      onChange={this.onChange}
                      value={ this.state.sale_price }
                    ></Input>
                  </Col>
                </Row>
                {!this.isView() &&
                  <Button
                    color="dark"
                    style={{marginTop: '2rem'}}
                    block
                  >
                    Add Item
                  </Button>
                }
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem, updateItem, getItem })(ItemModal);
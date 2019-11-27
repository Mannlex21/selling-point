import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';
import './item-modal.scss';

class ItemModal extends Component {
  state = {
    modal: false,
    sku: '',
    name: '',
    description: '',
    quantity: null,
    purchase_price: null,
    sale_price: null
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = (e) => {
    const { name, value, type } = e.target;

    this.setState({ [name]: type === "number" ? parseInt(value, 10) : value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      sku: this.state.sku,
      name: this.state.name,
      description: this.state.description,
      quantity: this.state.quantity,
      pricing: {
        purchase_price: this.state.purchase_price,
        sale_price: this.state.sale_price,
      }
    }

    // Add item via addItem action
    this.props.addItem(newItem);

    // Close modal
    this.toggle();
  }

  render() {
    return (
      <div className="div-item-modal">
        <Button
          color="dark"
          style={{marginBottom: '1rem'}}
          onClick={this.toggle}
        >
          Agregar producto
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
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
                      onChange={this.onChange}
                    ></Input>
                  </Col>
                  <Col sm={6}>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nombre del producto"
                      onChange={this.onChange}
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
                    ></Input>
                  </Col>
                  <Col sm={6}>
                    <Input
                      type="number"
                      name="quantity"
                      placeholder="Cantidad"
                      onChange={this.onChange}
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
                    ></Input>
                  </Col>
                  <Col sm={6}>
                    <Input
                      type="number"
                      name="sale_price"
                      placeholder="Precio de venta"
                      onChange={this.onChange}
                    ></Input>
                  </Col>
                </Row>
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >
                  Add Item
                </Button>
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

export default connect(mapStateToProps, { addItem })(ItemModal);
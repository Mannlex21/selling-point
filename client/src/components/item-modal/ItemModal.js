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
    console.log(newItem)
    // Add item via addItem action
    this.props.addItem(newItem);

    // Close modal
    // this.toggle();
  }

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
        >
          Add Item  
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Add To Shopping List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Row>
                  <Col sm={6}>
                    <Input 
                      type="text"
                      name="sku"
                      placeholder="sku"
                      onChange={this.onChange}
                    ></Input>
                  </Col>
                  <Col sm={6}>
                    <Input 
                      type="text"
                      name="name"
                      placeholder="name"
                      onChange={this.onChange}
                    ></Input>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Input 
                      type="text"
                      name="description"
                      placeholder="description"
                      onChange={this.onChange}
                    ></Input>
                  </Col>
                  <Col sm={6}>
                    <Input 
                      type="number"
                      name="quantity"
                      placeholder="quantity"
                      onChange={this.onChange}
                    ></Input>
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}>
                    <Input
                      type="number"
                      name="purchase_price"
                      placeholder="purchase_price"
                      onChange={this.onChange}
                    ></Input>
                  </Col>
                  <Col sm={6}>
                    <Input
                      type="number"
                      name="sale_price"
                      placeholder="sale_price"
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
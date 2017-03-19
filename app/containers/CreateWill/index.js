import React, { Component } from 'react';
import { Button, Card, Row, Icon, Input } from 'react-materialize';
import TableBlock from './btable';
import Background from '../background.jpg';
// import NavLink from 'components/NavLink';

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`,
  overflow: 'hidden',
};

export default class CreateWill extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      address_: '',
      name_: '',
      amount_: '',
      myaddress_: '1JVNvdGRXi3Jzd6xiAr4TMCF5wRBnSqzK8',
      tableEnable: false,
      errorAddress: '',
      errorName: '',
      errorAmount: '',
      rows: [],
    };
    this.addEntity = this.addEntity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputErrorCheck = this.inputErrorCheck.bind(this);
     //   this.clearInput = this.clearInput.bind(this);
    this.invalidInput = this.invalidInput.bind(this);
    this.processSubmit = this.processSubmit.bind(this);
  }

  processSubmit() {}

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  invalidInput(refName, errorState, errorComment = '') {
    const id = `#${refName._id}`;
    this.setState({
      [errorState]: errorComment,
    });
    $(id).removeClass('valid').addClass('invalid').focus();
  }

  clearInput(refName) {
    const id = `#${refName._id}`;
    $(id).focus();
    $(id).siblings('label').removeClass('active');
    $(id).focus();
  }

  inputErrorCheck() {
    const name = this.state.name_;
    if (name.length <= 1) {
      this.invalidInput(this.refs.beneficiaryName, 'errorName', 'Input Valid Name');
      return false;
    }
    const address = this.state.address_;
    if (address == '' || address.length != 34) {
      this.invalidInput(this.refs.beneficiaryAddress, 'errorAddress', 'Invalid address');
      return false;
    }
    const amount = this.state.amount_;
    if (amount == '' || amount <= 0) {
      document.getElementById((this.refs.beneficiaryAmount._id)).focus();
      this.invalidInput(this.refs.beneficiaryAmount, 'errorAmount', 'Input Valid Amount');
      return false;
    }
    return true;
  }

  addEntity() {
    if (this.inputErrorCheck() == true) {
      this.setState((state) => ({
        tableEnable: true,
        rows: state.rows.concat({
          nameT: state.name_,
          addressT: state.address_,
          amountT: state.amount_,
        }),
        address_: '',
        name_: '',
        amount_: '',
        error: 'Input value',
      }));
      $('select').val('None');
      $('select').material_select();
          //  clearInput(this.refs.beneficiaryAmount);
           //  clearInput(this.refs.beneficiaryAddress);
          //  clearInput(this.refs.beneficiaryName);
    }
  }

  render() {
    return (
      <div style={sectionStyle}>
        <Card
          className="container formRegistrationContainer centerAling z-depth-5" textClassName="black-text "
          title={<h3>Create Your Will</h3>}
          actions={[<Button
            onClick={this.processSubmit}
            waves="light" type="submit" className="red lighten-1 centerAling" key="createContractSubmit"
          >
           Create <Icon left>done_all</Icon>
          </Button>]}
        >
          <Row>
            <Input s={12} l={12} className="blue-text" label="Your Address" defaultValue={this.state.myaddress_} disabled />
            <Input
              s={12} l={12} className="purple-text" ref="beneficiaryName" name="name_" label="Name" error={this.state.errorName} validate
              value={this.state.name_} onChange={this.handleChange} type="text"
            />
            <Input
              s={12} l={7} className="purple-text" ref="beneficiaryAddress" name="address_" label="To address" error={this.state.errorAddress}
              validate value={this.state.address_} onChange={this.handleChange} type="text"
            />
            <Input
              s={12} l={3} className="purple-text" name="amount_" ref="beneficiaryAmount" label="Amount" error={this.state.errorAmount}
              value={this.state.amount_} validate onChange={this.handleChange} type="number"
            />
            <Row className="center-align ">
              <Button floating large className="orange" waves="light" icon="add" onClick={this.addEntity} />
            </Row>

            <TableBlock visiblity={this.state.tableEnable} data={this.state.rows} />
          </Row>
        </Card>
      </div>
    );
  }
}

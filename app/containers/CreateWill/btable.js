import React, { Component } from 'react';
import { Table } from 'react-materialize';


export default class TableBlock extends Component {// eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    visiblity: React.PropTypes.bool,
    data: React.PropTypes.array,
  };

  render() {
    if (this.props.visiblity === true) {
      return (
        <Table>
          <thead>
            <tr>
              <th data-field="Id">Id</th>
              <th data-field="name">Name</th>
              <th data-field="address">Beneficiary Address</th>
              <th data-field="Amount">Amount</th>
            </tr>
          </thead>
          <tbody>
            { this.props.data.map((element, i) => (
              <tr key={i}>
                <td>
                  { i + 1 }
                </td>
                <td>
                  { element.nameT }
                </td>
                <td>
                  { element.addressT }
                </td>
                <td>
                  { element.amountT } <b> btc</b></td>
              </tr>
                          )) }
          </tbody>
        </Table>);
    }
    return (<div></div>);
  }
}

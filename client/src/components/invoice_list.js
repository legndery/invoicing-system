import React, { Component } from 'react'
import { connect } from "react-redux";

import { List, Divider} from '@material-ui/core'
import ListItem from './invoice_listItem'
export class InvoiceList extends Component {
  render() {
    return (
      <List>
          {
            this.props.invoiceList.map(invoice=>(
              [
                <ListItem key={'item'+invoice.id} data={invoice} 
                selected={this.props.selectedInvoiceID === invoice.id}/>,
                <Divider key={'divider'+invoice.id}/>
              ]
            ))
          }
      </List>
    )
  }
}
function mapStateToProps(state){
  return {
    invoiceList: state.invoiceList,
    selectedInvoiceID: state.selectedInvoice.id
  }
}
function mapDispatchToProps(){

}
export default connect(mapStateToProps)(InvoiceList)

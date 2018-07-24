import React, { Component } from 'react'
import { connect } from "react-redux";
import selectInvoice from '../actions/selectInvoice_action'
import { List, Divider} from '@material-ui/core'
import ListItem from './invoice_listItem'
export class InvoiceList extends Component {
  onListItemClick=(e)=>{
    this.props.selectInvoice(e);
  }
  render() {
    
    if(!this.props.invoiceList){
      return (<div></div>)
    }
    return (
      <List>
          {
            this.props.invoiceList.map(invoice=>(
              [
                <ListItem key={'item'+invoice.id} data={invoice} 
                selected={this.props.selectedInvoiceID === invoice.id}
                onClick={this.onListItemClick}/>,
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
    invoiceList: state.invoice.invoiceList,
    selectedInvoiceID: state.invoice.invoiceID
  }
}

export default connect(mapStateToProps,{
  selectInvoice
})(InvoiceList)

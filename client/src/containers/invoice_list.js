import React, { Component } from 'react'
import { connect } from "react-redux";

import List from '@material-ui/core/List'
import ListItem from './invoice_listitem'
export class InvoiceList extends Component {
  render() {
    return (
      <List>
          {
            this.props.invoiceList.map(invoice=>(
              <ListItem data={invoice}/>
            ))
          }
      </List>
    )
  }
}
function mapStateToProps(state){
  return {
    invoiceList: state.invoiceList
  }
}
function mapDispatchToProps(){

}
export default connect(mapStateToProps)(InvoiceList)

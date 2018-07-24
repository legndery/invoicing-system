import React, { Component } from 'react'
import { connect } from 'react-redux'
import Drawer from '@material-ui/core/Drawer'
import InvoiceList from './invoice_list'
import { withStyles, Typography } from '@material-ui/core'
import SearchBar from './invoice_search'
import * as colors from '@material-ui/core/colors';
///
const drawerWidth = 300;
const styles = theme => (
    {
        drawerPaper: {
            position: 'relative',
            minWidth: drawerWidth,
            width: '100%',
            zIndex: theme.zIndex.appBar - 1,
        },
        Typography:{
            padding: '5px 0 0 20px',
            color: colors.grey["500"]
        }
    }
);


export class SideBar extends Component {
  render() {
    const {classes} = this.props;
    return (
        <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
            <SearchBar />
            <Typography variant="body2" className={classes['Typography']}>Invoices - {this.props.invoiceNumber}</Typography>
            <InvoiceList />
        </Drawer>
    )
  }
}
function mapStateToProps(state){
    return {
        invoiceNumber: state.invoice.invoiceList.length
    }
}
export default connect(mapStateToProps)(withStyles(styles)(SideBar))

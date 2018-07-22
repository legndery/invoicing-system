import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import InvoiceList from './../containers/invoice_list'
import { withStyles } from '@material-ui/core'

///
import * as color from '@material-ui/core/colors'
const drawerWidth = 240;
const styles = theme => (
    {
        drawerPaper: {
            position: 'relative',
            minWidth: drawerWidth,
            width: '23%',
            zIndex: theme.zIndex.appBar - 1,
        }
    }
);


export class SideBar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
            <InvoiceList />
        </Drawer>
        
      </div>
    )
  }
}

export default withStyles(styles)(SideBar)

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as colors from '@material-ui/core/colors'
import { connect } from 'react-redux'
import openDialog from './../actions/open_dialog'
import closeDialog from './../actions/close_dialog'
import { Typography, Table, TableBody, TableRow, TableCell, Input } from '@material-ui/core';

const style = {
  inputStyle: {disableUnderline:true,style:{ borderTop:'1px solid #ddd', borderBottom:'1px solid #ddd',padding:4}}
}

class FormDialog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      secondFormOpen: false
    }
  }
  handleClickOpen = () => {
    this.props.openDialog();
  };

  handleClose = () => {
    this.props.closeDialog();
  };
  handleSkip = () => {
    this.setState({secondFormOpen: true})
  }
  handleExit=()=>{
    this.setState({secondFormOpen: false})
  }
  render() {
    return (
        <Dialog
          color="primary"
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          style={{padding:0, minWidth:'50%'}}
          onExited={this.handleExit}
        >
          <DialogTitle id="form-dialog-title">Create New Invoice</DialogTitle>
          <div style={{display:this.state.secondFormOpen?'none':'block'}}>
          <DialogContent>
            
            <div className="clearfix">
            <span style={{verticalAlign:'center'}}>Customer Details</span>
            <Button variant="outlined" style={{float:'right'}} onClick={this.handleSkip}>Skip</Button>
            </div>
            <hr />
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{border:0}}>
                    <TextField autoFocus margin="normal" InputProps={style.inputStyle}
                    id="user.name" label="Full Name" type="text" fullWidth required />
                  </TableCell>
                  <TableCell style={{border:0}}>
                    <TextField margin="normal" InputProps={style.inputStyle}
                    id="user.phone" label="Phone Number" type="email" fullWidth required />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{border:0}}>
                    <TextField multiline margin="normal" InputProps={ {...style.inputStyle, rows:4}}
                    id="user.address" label="Address" type="text" fullWidth required />
                  </TableCell>
                  <TableCell style={{border:0}}>
                    <TextField margin="normal" InputProps={style.inputStyle}
                    id="user.email" label="Email" type="email" fullWidth required />
                    <TextField margin="normal" InputProps={style.inputStyle}
                    id="user.pincode" label="Pincode" type="number" fullWidth required />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </DialogContent>
          <DialogActions style={{background:'#ddd', margin:0,padding:20}}>
            <Button onClick={this.handleClose} style={{background:colors.blue[500], color:'#e4e4e4'}} size="large" variant="raised">
              Proceed
            </Button>
          </DialogActions>
          </div>
        </Dialog>
    );
  }
}

function mapStateToProps(state){
    console.log(state);
    return {
        open : state.open
    }
}
export default connect(mapStateToProps, {
    openDialog,
    closeDialog
})(FormDialog);
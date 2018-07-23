import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar'
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
const styles = theme => ({
    fab: {
        position: 'absolute',
        top: "50%",
        right: "10%",
    }
})
export class TheHeader extends Component {
  render() {
    const { classes, theme } = this.props;
    const fab= {
          color: 'secondary',
          className: classes.fab,
          icon: <AddIcon />,
    }
    console.log(classes);
    return (
      <div>
        <AppBar position="absolute" color="primary">
            <Toolbar>
            <Typography variant="title" color="inherit">
                Dashboard
            </Typography>
            <Button variant="fab" className={fab.className} color={fab.color}>
              {fab.icon}
            </Button>
            </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(TheHeader)

import React, { Component } from 'react'
import MListItem from '@material-ui/core/ListItem'
import * as colors from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core'
const style = theme=>({
  "invoice-list-item": {
    color: colors.grey["500"],
    fontWeight: '200',
    padding: '20px 20px',
    "&.active":{
      color:'white',
      background: theme.palette.grey['700']
    }
  },
  "item-container": {
    minWidth: '100%',
    fontSize:'0.9em'
  },
  "text-left": {
    float: 'left',
    fontWeight: '400'
  },
  "text-right": {
    float: 'right',
    color: colors.grey["500"],
    fontSize: '0.75rem'
  },
  "text-items":{
    padding: '10px 0 5px 0',
    fontSize: '0.9rem'
  },
  'user-name': {
    color: colors.blue["500"],
    fontSize:'0.75rem',
    '&.unknown':{
      color: colors.grey['700']
    }
  },
  'total-price': {
    fontWeight:'400',
    float: 'right',
    fontSize:'1.1rem'

  }
});
export class ListItem extends Component {
  render() {
    const { data, classes, selected, theme } = this.props;
    console.log(theme);
    return (
      <MListItem button className={`${classes["invoice-list-item"]} ${selected?'active':''}`}>
        <div className={`${classes["item-container"]}`}>
           <div className='clearfix'>
            <div className={classes['text-left']}>INV. # - {data.id}</div>
            <div className={classes['text-right']}>{data.created_time}</div>
          </div>
          <div className={classes['text-items']}>Items - {data.items.count}</div>
          <div className="clearfix">
            <div className={`${classes['user-name']} ${data.user.name?'':'unknown'} ${classes['text-left']}`}>{data.user.name?data.user.name:'Unknown User'}</div>
            <div className={classes['total-price']}>{data.items.total_price}</div>
          </div>
        </div>
      </MListItem>
    )
  }
}

export default withStyles(style, {withTheme: true})(ListItem)

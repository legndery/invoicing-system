import React, {
    Component
} from 'react'
import { withStyles, Paper , Typography, 
    Table, TableBody, TableCell, TableRow, TableHead,
    Grid, Button} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Print'
import { connect } from 'react-redux'
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        marginTop: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        backgroundColor: theme.palette.common.white,
        color:theme.palette.grey['500']
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey['300'],
        padding: theme.spacing.unit * 3,
        color:theme.palette.grey['500']
    },
    table: {
        "& th":{
            color:theme.palette.grey['500'],
            fontSize:'1.0em',
            borderColor: theme.palette.grey['500'],
            borderTop : '1px solid'
        },
        "& td":{
            color:theme.palette.grey['700'],
            borderColor: theme.palette.grey['400'],
            paddingTop: '20px',
            paddingBottom: '20px'
        }
    },
    rowRoot: {
        // height: 'auto'
    },
    button: {
        margin: theme.spacing.unit,
        borderColor: theme.palette.primary.main
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    "right-align":{
        textAlign: 'right'
    }
});

export class InvoiceDetails extends Component {
    render() {
        const {classes, theme, selectedInvoice} = this.props;
        if(!selectedInvoice){
            return <main className={classes.content} />
        }
        return ( 
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography variant="title" color="inherit">{'Invoice Details'.toUpperCase()}</Typography>
                <Paper className={classes.root} elevation={2}>
                
                <Grid container spacing={24}>
                    <Grid item xs={5} style={{paddingBottom: 25, color: theme.palette.common.black}}>
                        <Typography variant="title" color="inherit">{'Invoice'.toUpperCase()}</Typography>
                        <Typography variant="body1" color="inherit">{`# INV${selectedInvoice.id}`}</Typography>
                        <Typography variant="body2" color="inherit">{`${selectedInvoice.createdAt}`}</Typography>
                    </Grid>
                    <Grid item xs={5} className={classes['right-align']} style={{paddingBottom: 25, color: theme.palette.common.black}}>
                        <Typography variant="body1" color="inherit">{'customer details'.toUpperCase()}</Typography>
                        <Typography variant="title" color="inherit">{selectedInvoice.User.name}</Typography>
                        <Typography variant="body2" color="inherit">{selectedInvoice.User.email}</Typography>
                    </Grid>
                    <Grid item xs={2} className={classes['right-align']}>
                        <Button variant="outlined" size="large" color="primary" className={classes.button}>
                                Print&nbsp;&nbsp;<SaveIcon className={classes.leftIcon}/>
                        </Button>
                    </Grid>
                </Grid>

                
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes['rowRoot']}>
                            <TableCell>Item</TableCell>
                            <TableCell numeric>Quantity</TableCell>
                            <TableCell numeric>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.selectedInvoice.Items.map((item,i)=>
                                (
                                    <TableRow key={'item-'+i}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell numeric>{item.quantity}</TableCell>
                                        <TableCell numeric>{item.price}</TableCell>
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </Table>
                <Grid container spacing={32}>
                    <Grid item xs={8}/>
                    <Grid item  xs={4} style={{paddingBottom: 25, color: theme.palette.grey['700']}}>
                        <p style={{paddingRight:20}}>Sub Total
                            <span style={{float:'right'}}>{selectedInvoice.subTotal}</span>
                        </p>
                        <p style={{paddingRight:20}}>Tax ({this.props.selectedInvoice.tax}%)
                            <span style={{float:'right'}}>{(selectedInvoice.tax_amt = selectedInvoice.subTotal*Number(selectedInvoice.tax)/100).toFixed(2)}</span>
                        </p>
                        <p style={{paddingRight:20}}>Discount ({selectedInvoice.discount}%)
                            <span style={{float:'right'}}>{
                               (selectedInvoice.discount_amt =  (selectedInvoice.subTotal+selectedInvoice.tax_amt)*selectedInvoice.discount/100).toFixed(2)
                            }</span>
                        </p>
                        <br/>
                        <Typography variant="title" color="inherit" style={{paddingRight:20}}>Grand Total
                            <span style={{float:'right'}}>{
                               selectedInvoice.totalPrice.toFixed(2)
                            }</span>
                        </Typography> 
                    </Grid>
                </Grid>
                </Paper>
            </main>
        )
    }
}
function mapStateToProps(state){
    return {
        selectedInvoice: state.invoice.invoiceList[state.invoice.invoiceArrIDMap[state.invoice.invoiceID]]

    }
}
export default connect(mapStateToProps)(withStyles(styles,{withTheme: true})(InvoiceDetails))
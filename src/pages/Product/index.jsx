import React from "react";
import {Fragment, Component} from "react";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import NavBar from '../NavBar'
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productForm: {
                code: '',
                description:'',
                price:'',
                qty:'',
            },
            products: [],
        }
    }

    saveProduct = () => {
        console.log(this.state.productForm)
        console.log(this.state.customers)


        let productForm = this.state.productForm;
        let products = this.state.products;
        products.push(productForm);
        this.setState({products})

        console.log(this.state.products)
    }
    updateProduct(row) {
        console.log(row)
    }
    deleteProduct(row) {
        console.log(row)

    }


    clearFields = () => {
        this.setState({
            productForm: {
                code: '',
                description:'',
                price:'',
                qty:'',
            },
        })
    }


    render() {
        return (
            <Fragment>
                <NavBar/>
                <div className="manage-container">
                    <div className="manage-sub-container">
                        <div className="manage-form-title">
                            <h1>Product Manage</h1>
                        </div>
                        <div className="manage-form-detail" >
                            <div className="manage-form-detail-col1">
                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="Code"
                                        variant="outlined"
                                        value={this.state.productForm.code}
                                        onChange={(e) => {
                                            let productForm = this.state.productForm;
                                            productForm.code = e.target.value
                                            this.setState({productForm})
                                        }}
                                    />
                                </div>
                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="description"
                                        variant="outlined"
                                        value={this.state.productForm.description}
                                        onChange={(e) => {
                                            let productForm = this.state.productForm;
                                            productForm.description = e.target.value
                                            this.setState({productForm})
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="manage-form-detail-col1">

                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="price"
                                        variant="outlined"
                                        value={this.state.productForm.price}
                                        onChange={(e) => {
                                            let productForm = this.state.productForm;
                                            productForm.price = e.target.value
                                            this.setState({productForm})
                                        }}
                                    />
                                </div>
                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="qty"
                                        variant="outlined"
                                        value={this.state.productForm.qty}
                                        onChange={(e) => {
                                            let productForm = this.state.productForm;
                                            productForm.qty = e.target.value
                                            this.setState({productForm})
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="manage-form-btn">
                            <Button
                                variant="outlined"
                                color="error"
                                size="large"
                                sx={{marginRight: "10px"}}
                                onClick={() => {
                                    this.clearFields()
                                }}
                            >
                                Clear
                            </Button>
                            <Button variant="outlined" size="large" type="button" onClick={this.saveProduct}>
                                Save
                            </Button>
                        </div>
                    </div>

                    <div className="user-sub-table-container">
                        <div className="user-form-title">
                            <h1>All Product</h1>
                        </div>
                        <div style={{overflow: 'auto'}} className={"user-from-detail"}>
                            <TableContainer style={{width: '100%'}} component={Paper}>
                                <Table aria-label="user table">
                                    <TableHead style={{background: '#141212'}}>
                                        <TableRow>
                                            <TableCell style={{color: 'white', fontSize: '15px'}} align="center">Code</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Price</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Description</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Quantity</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {/*          {
                                        this.state.customers.map((row,index) => (
                                            <TableRow key={index}>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.code}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.gender}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.nic}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.email}</TableCell>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">
                                                    <Tooltip title="Edit">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.updateCustomer(row);
                                                            }}
                                                        >
                                                            <EditIcon color="primary"/>
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.deleteCustomer(row)
                                                            }}
                                                        >
                                                            <DeleteIcon color="error"/>
                                                        </IconButton>
                                                    </Tooltip></TableCell>
                                            </TableRow>
                                        ))
                                    }*/}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Product;

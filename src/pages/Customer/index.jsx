import React, {createContext} from "react";
import {Fragment, Component} from "react";
import "../Product/style.css";
import {
    TextField,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper, Tooltip,
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NavBar from "../NavBar";

const Name=createContext();

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerForm: {
                customer_name: '',
                gender:'',
                nic:'',
                email:'',
            },
            gender:["male","female"],
            customers: [],
        }
    }

    saveCustomer = () => {
        console.log(this.state.customerForm)
        console.log(this.state.customers)


        let customerForm = this.state.customerForm;
        let customers = this.state.customers;
        customers.push(customerForm);
        this.setState({customers})

        console.log(this.state.customers)
    }

    updateCustomer(row) {
        console.log(row)
    }
    deleteCustomer(index) {
        let customers = this.state.customers;
        customers.pop(index)
        this.setState({customers})

    }

    clearFields = () => {
        this.setState({
            customerForm: {
                customer_name: '',
                gender:'',
                nic:'',
                email:'',
            }
        })
    }

    render() {
        return (
            <Fragment>
                <NavBar/>
                <div className="manage-container">
                    <div className="manage-sub-container">
                        <div className="manage-form-title">
                            <h1>Customer Manage</h1>
                        </div>
                        <div className="manage-form-detail" >
                            <div className="manage-form-detail-col1">
                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="Customer Name"
                                        variant="outlined"
                                        value={this.state.customerForm.customer_name}
                                        onChange={(e) => {
                                            let customerForm = this.state.customerForm;
                                            customerForm.customer_name = e.target.value
                                            this.setState({customerForm})
                                        }}
                                    />
                                </div>
                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="NIC"
                                        variant="outlined"
                                        value={this.state.customerForm.nic}
                                        onChange={(e) => {
                                            let customerForm = this.state.customerForm;
                                            customerForm.nic = e.target.value
                                            this.setState({customerForm})
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="manage-form-detail-col1">
                                <FormControl fullWidth style={{marginTop:"30px"}}>
                                    <InputLabel id="demo-simple-select-label">
                                        Gender
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="User Name"
                                        onChange={(e) => {
                                            let customerForm = this.state.customerForm;
                                            customerForm.gender = this.state.gender[e.target.value];
                                            this.setState({customerForm})
                                        }}
                                    >
                                        <MenuItem value={0}>male</MenuItem>
                                        <MenuItem value={1}>Female</MenuItem>
                                    </Select>
                                </FormControl>

                                <div style={{width: '100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px",width:'100%'}}
                                        id="outlined-basic"
                                        label="Email"
                                        variant="outlined"
                                        value={this.state.customerForm.email}
                                        onChange={(e) => {
                                            let customerForm = this.state.customerForm;
                                            customerForm.email = e.target.value
                                            this.setState({customerForm})
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
                            <Button variant="outlined" size="large" type="button" onClick={this.saveCustomer}>
                                Save
                            </Button>
                        </div>
                    </div>

                    <div className="user-sub-table-container">
                        <div className="user-form-title">
                            <h1>All Customers</h1>
                        </div>
                        <div style={{overflow: 'auto'}} className={"user-from-detail"}>
                            <TableContainer style={{width: '100%'}} component={Paper}>
                                <Table aria-label="user table">
                                    <TableHead style={{background: '#141212'}}>
                                        <TableRow>
                                            <TableCell style={{color: 'white', fontSize: '15px'}} align="center">Customer Name</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Gender</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">NIC</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Email</TableCell>
                                            <TableCell style={{color: 'white', fontSize: '15px'}}
                                                       align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                            {
                                        this.state.customers.map((row,index) => (
                                            <TableRow key={index}>
                                                <TableCell style={{fontSize: '15px'}}
                                                           align="center">{row.customer_name}</TableCell>
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
                                                                console.log("hre")
                                                                this.deleteCustomer(index)
                                                            }}
                                                        >
                                                            <DeleteIcon color="error"/>
                                                        </IconButton>
                                                    </Tooltip></TableCell>
                                            </TableRow>
                                        ))
                                    }
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

export default Customer;

import React from "react";
import {Fragment, Component} from "react";
import "./style.css";
import {Button, TextField} from "@mui/material";
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
                title: '',
                price: '',
                category: '',
                image: '',
                description: '',
            },
            category:[]
        }
    }

    clearFields = () => {
        this.setState({
            productForm: {
                title: '',
                price: '',
                category: '',
                image: '',
                description: '',
            }
        })
    }

    saveProduct = async () => {

    }

    setProductCategory=async ()=>{

    }

    componentDidMount() {
        this.setProductCategory()
    }


    render() {
        return (
            <Fragment>
                <NavBar/>
                <div className="manage-container">
                    <TextField className="manage-sub-container"
                                   ref="form"
                                   onSubmit={this.saveProduct}
                                   onError={errors => console.log(errors)}>
                        <div className="manage-form-title">
                            <h1>Product Manage</h1>
                        </div>
                        <div className="manage-form-detail">
                            <div  className="manage-form-detail-col1">
                                <div style={{width:'100%'}}>
                                    <TextField
                                        fullWidth
                                        id="title"
                                        label="Title"
                                        variant="outlined"
                                        value={this.state.productForm.title}
                                        onChange={(e) => {
                                            let form = this.state.productForm;
                                            form.title = e.target.value;
                                            this.setState({form})
                                        }}
                                        validators={['required']}/>
                                </div>
                                <FormControl fullWidth sx={{marginTop: "30px"}}>
                                    <InputLabel id="demo-simple-select-label">
                                        Product Title
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Product Title"
                                        onChange={(e) => {
                                            let productForm = this.state.productForm;
                                            productForm.category = this.state.category[e.target.value];
                                            this.setState({productForm})
                                        }}
                                    >
                                        {this.state.category.map((category,index) => (
                                            <MenuItem value={index}>{category}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <Button variant="contained" component="label" sx={{marginTop: "30px"}}
                                        fullWidth>
                                    Choose Image
                                    <input hidden accept="image/*" multiple type="file"
                                           onChange={(e) => {
                                               let form = this.state.productForm;
                                               form.image = e.target.value;
                                               this.setState({form})
                                           }}/>
                                </Button>

                            </div>
                            <div className="manage-form-detail-col1">
                                <div style={{width:'100%'}}>
                                    <TextField
                                        id="price"
                                        label="Price"
                                        variant="outlined"
                                        type="number"
                                        fullWidth
                                        value={this.state.productForm.price}
                                        onChange={(e) => {
                                            let form = this.state.productForm;
                                            form.price = e.target.value;
                                            this.setState({form})
                                        }}
                                        validators={['required']}
                                    />
                                </div>
                                <div style={{width:'100%'}}>
                                    <TextField
                                        sx={{marginTop: "30px"}}
                                        id="description"
                                        label="Description"
                                        variant="outlined"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        value={this.state.productForm.description}
                                        onChange={(e) => {
                                            let form = this.state.productForm;
                                            form.description = e.target.value;
                                            this.setState({form})
                                        }}
                                        validators={['required']}
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: '50px'}} className="manage-form-btn">
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
                            <Button variant="outlined" size="large" type="submit">
                                Save
                            </Button>
                        </div>
                    </TextField>
                </div>
            </Fragment>
        );
    }
}

export default Product;

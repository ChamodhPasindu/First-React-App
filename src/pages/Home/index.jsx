import {Component, Fragment} from "react";
import NavBar from "../NavBar";
import "./style.css";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: '00',
            carts: '00',
            users: '00',
            username: ''
        }
    }

    setCarts = async () => {

    }

    setProducts = async () => {

    }

    setUsers = async () => {

    }

    setUsername = async () => {

    }

    componentDidMount() {
        this.setCarts()
        this.setProducts()
        this.setUsers()
        this.setUsername()
    }

    render() {
        return (
            <Fragment>
                <NavBar username={this.state.username}/>
                <div className="home-container">
                    <div className="home-sub-container">
                        <div className="home-card-div-container" >
                            <div className="home-card-div">
                                <h1>PRODUCT</h1>
                                <h1>{this.state.products}</h1>
                            </div>
                            <div className="home-card-div">
                                <h1>USERS</h1>
                                <h1>{this.state.users}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;

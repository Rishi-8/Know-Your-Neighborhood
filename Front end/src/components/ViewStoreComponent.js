import React, { Component } from 'react'
import StoreService from '../services/StoreService'

class ViewStoreComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storeId: this.props.match.params.id,
            storeName: "",
            storeNumber: "",
            storeLocation: ""
        }
    }

    componentDidMount(){
        StoreService.getStoreById(this.state.storeId).then( res => {
            let store = res.data;
            this.setState(
                {
                    storeName:store.storeName,
                    storeLocation:store.storeLocation,
                    storeNumber:store.storeNumber
                }
            )
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Store Details</h3>
                    <div className = "card-body">

                        <div className = "row">
                            <label> Store Name: </label>
                            <div> { this.state.storeName}</div>
                        </div>

                        <div className = "row">
                            <label> Store Number: </label>
                            <div> { this.state.storeNumber }</div>
                        </div>

                        <div className = "row">
                            <label> Store Location : </label>
                            <div> { this.state.storeLocation }</div>
                        </div>

                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStoreComponent
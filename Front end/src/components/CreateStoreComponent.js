import React, { Component } from 'react'
import StoreService from '../services/StoreService';

class CreateStoreComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            storeId: this.props.match.params.id,
            storeName: '',
            storeNumber: '',
            storeLocation: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        

        this.saveOrUpdateStore = this.saveOrUpdateStore.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.storeId === '_add'){
            return
        }else{
            StoreService.getStoreById(this.state.storeId).then( (res) =>{
                let store = res.data;
                this.setState({storeName: store.storeName,
                    storeNumber: store.storeNumber,
                    storeLocation : store.storeLocation,
                    
                });
            });
        }        
    }


    saveOrUpdateStore = (e) => {
        e.preventDefault();
        let store = {storeName: this.state.storeName, storeNumber: this.state.storeNumber, storeLocation: this.state.storeLocation};
        console.log('store => ' + JSON.stringify(store));

        // step 5
        if(this.state.storeId === '_add'){
            StoreService.createStore(store).then(res =>{
                this.props.history.push('/stores');
            });
        }else{
            StoreService.updateStore(store, this.state.storeId).then( res => {
                this.props.history.push('/stores');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({storeName: event.target.value});
    }

    changeNumberHandler= (event) => {
        this.setState({storeNumber: event.target.value});
    }

    changeLocationHandler= (event) => {
        this.setState({storeLocation: event.target.value});
    }



    cancel(){
        this.props.history.push('/stores');
    }

    getTitle(){
        if(this.state.storeId === '_add'){
            return <h3 className="text-center">Add Store</h3>
        }else{
            return <h3 className="text-center">Update Store</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "stored col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "stored-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Store Name : </label>
                                            <input placeholder="Store Name" name="storeName" className="form-control" 
                                                value={this.state.storeName} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Store Number: </label>
                                            <input placeholder="Store Number" name="storeNumber" className="form-control" 
                                                value={this.state.storeNumber} onChange={this.changeNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Location </label>
                                            <input placeholder="Location" name="storeLocation" className="form-control" 
                                                value={this.state.storeLocation} onChange={this.changeLocationHandler}/>
                                        </div>

                                       

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStore}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateStoreComponent
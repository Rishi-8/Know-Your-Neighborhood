import React, { Component } from 'react'
import StoreService from '../services/StoreService'

class ListStoreComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stores: [],
            keyword: '',
        }
        this.addStore = this.addStore.bind(this);
        this.editStore = this.editStore.bind(this);
        this.deleteStore = this.deleteStore.bind(this);
        this.searchStore = this.searchStore.bind(this);
    }

    componentDidMount() {
        StoreService.getStores().then((res) => {
            this.setState({ stores: res.data });
        });

    }





    deleteStore(id) {
        StoreService.deleteStore(id).then(res => {
            this.setState({ stores: this.state.stores.filter(store => store.storeId !== id) });
        });
    }
    viewStore(id) {

        this.props.history.push(`/view-store/${id}`);
    }
    editStore(id) {
        this.props.history.push(`/add-store/${id}`);
    }

    addStore() {
        this.props.history.push('/add-store/_add');
    }


    changeSearchHandler = (event) => {
        console.log("search Handler");
        this.setState({ searchKeyword: event.target.value });
    }

    searchStore(searchKeyword) {
        console.log("search Store Method " + searchKeyword);
        this.props.history.push(`/search-stores/${searchKeyword}`);


    }



    render() {
        return (
            <div>
                <h2 className="text-center">Store List</h2>

                <div className="row" style={{ marginTop: "2%" }}>
                    <form class="d-flex col-md-6" style={{ margin: "auto" }}>
                        <input class="form-control me-sm-2" style={{border:"2px solid"}} type="search" placeholder="Search" value={this.state.searchKeyword} onChange={this.changeSearchHandler} />
                        <button onClick={() => this.searchStore(this.state.searchKeyword)} class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>

                    <div className="col-md-2">
                        <button className="btn btn-primary" onClick={this.addStore}> Add New Store</button>
                    </div>
                </div>


                <div class="d-flex justify-content-center flex-wrap">
                {
                                this.state.stores.map(
                                    store => 
                <div key={store.storeId} class="card border-primary mb-3" style={{width:"24rem",margin:"20px"}}>
                    <h4 class="card-header">Store no. {store.storeId}</h4>
                    <div class="card-body">
                        <h5>Store Name: {store.storeName}</h5>
                        <h5>Store Number: {store.storeNumber}</h5>
                        <h5>Store Location: {store.storeLocation}</h5>
                        <button onClick={() => this.viewStore(store.storeId)} className="btn btn-success">View </button>
                        <button style={{ marginLeft: "10px" }} onClick={() => this.editStore(store.storeId)} className="btn btn-info">Update </button>
                        <button style={{ marginLeft: "10px" }} onClick={() => this.deleteStore(store.storeId)} className="btn btn-danger">Delete </button>
                    </div>
                </div>
                            
                )}
                </div>

            </div>
        )
    }
}

export default ListStoreComponent
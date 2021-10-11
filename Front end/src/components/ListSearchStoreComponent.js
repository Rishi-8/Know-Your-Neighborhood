import React, { Component } from 'react'
import StoreService from '../services/StoreService'

class ListSearchStoreComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
                stores: [],
                searchKeyword:this.props.match.params.searchKeyword
        }
       
        this.searchStore = this.searchStore.bind(this);
    }

   
    viewStore(id){
        this.props.history.push(`/view-store/${id}`);
    }
   

    componentDidMount(){
        StoreService.searchStore(this.state.searchKeyword).then((res) => {
            this.setState({ stores: res.data});
        });

    }

    
    changeSearchHandler= (event) => {
        console.log("search Handler");
        this.setState({searchKeyword: event.target.value});
    }

    searchStore(searchKeyword){
        console.log("search Store Method "+searchKeyword);
         this.props.history.push(`/search-stores/${searchKeyword}`);
        

    }



    render() {
        return (
            <div>
                 <h2 className="text-center">Search Store Results</h2>
                 
                 <div className="row" style={{ marginTop: "2%" }}>
                    <form class="d-flex col-md-6" style={{ margin: "auto" }}>
                        <input class="form-control me-sm-2" style={{border:"2px solid"}} type="search" placeholder="Search" value={this.state.searchKeyword} onChange={this.changeSearchHandler} />
                        <button onClick={() => this.searchStore(this.state.searchKeyword)} class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
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
                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewStore(store.storeId)} className="btn btn-info">View </button>
                    </div>
                </div>
                            
                )}
                </div>


            </div>
        )
    }
}

export default ListSearchStoreComponent
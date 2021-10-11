import axios from 'axios';
import authHeader from './auth-header';

const API_BASE_URL = "http://localhost:8080/store_controller/api/stores";

class StoreService {

    getStores(){
        console.log("Get All Store");
        return axios.get(API_BASE_URL,{headers:authHeader()});
    }


    getStoreById(store_id){
        console.log("Get Store by id " + store_id);
        return axios.get(API_BASE_URL + '/' + store_id,{ headers: authHeader() });
    }


    createStore(store){
        console.log("Add New Store");
        return axios.post(API_BASE_URL, store,{ headers: authHeader() });
    }


    updateStore(store, store_id){
        console.log("Update Store by id "+store_id);
        return axios.put(API_BASE_URL + '/' + store_id, store,{ headers: authHeader() });
    }

    deleteStore(store_id){
        console.log("Delete Store "+store_id);
        return axios.delete(API_BASE_URL + '/' + store_id,{ headers: authHeader() });
    }

    searchStore(searchKeyword){
        console.log("Search keyword is  "+searchKeyword);
        return axios.get("http://localhost:8080/store_controller/api/search_stores" + '/' + searchKeyword,{ headers: authHeader() });
    }



}

export default new StoreService()
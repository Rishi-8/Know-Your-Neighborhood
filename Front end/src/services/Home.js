import React, { Component } from 'react'
import Header from '../components/Header';
import CarService from '../services/CarService'


class Home extends Component {

 

render() {
    const ISstyle = {
        width: "100%",
        margin: "0px",
        height: "593px",
        align: "center",
        backgroundImage: `url("https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_26/2053956/170627-better-grocery-store-main-se-539p-2053956.jpg")`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
      };
    return (
        <div><Header></Header>
        
        
        <div         id="intro-example"
        class=" p-6 text-center bg-image"
        style={ISstyle}>
            <h1 class="text-center" style={{position:`absolute`, top:`330px`, left:`517px`, backgroundColor:`yellow`, fontSize:`50px`}}>Welcome to KYN Stores</h1>
        <div style={{ paddingRight: `50px` }} class="d-flex justify-content-end">
                  
        
               
        
        </div>
             </div>
             <br></br>
             
             </div>
            

            


    )

             }

}

export default Home
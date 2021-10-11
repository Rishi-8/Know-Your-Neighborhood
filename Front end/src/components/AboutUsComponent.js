import { Component } from "react";

class AboutUsComponent extends Component{

    render(){
        return(
            <div>
                <div class="image-on-text" style={{position:"relative"}}> 
                    <img src="https://www.nybo.in/images/aboutheader.png" style={{width:"100%"}} alt="About us image"></img>
                    <h2 style={{position:"absolute",top:"30%",left:"0",right:"0",bottom:"0"}}>We help you to get information of stores in your surrounding</h2>
                </div>
            </div>
        )
    }

}

export default AboutUsComponent
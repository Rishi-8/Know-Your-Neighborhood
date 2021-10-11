import { Component } from "react";

class ContactUsComponent extends Component{

    render(){
        return(
            <div>
                <h2>Contact Us</h2>

                <p>Phone Number : 895476-4567</p>
                <p>Location :</p>
                <p>The Great Pyramid of Giza, Al Haram, Nazlet El-Semman, Al Giza Desert, Giza Governorate, Egypt</p>

                <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0068032219506!2d31.13201321518794!3d29.97923448190611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584587ac8f291b%3A0x810c2f3fa2a52424!2sThe%20Great%20Pyramid%20of%20Giza!5e0!3m2!1sen!2sin!4v1623310604586!5m2!1sen!2sin" width="600" height="450" style={{border:"0",allowfullscreen:"",loading:"lazy"}}></iframe>
                </div>
            </div>
        )
    }

}

export default ContactUsComponent
import React from 'react';
import './Contact.css'

const Contact = () => {
    return ( 
        <div class="contact-container">
        <h1>Contact Form</h1>
        <form>
            <label for="name">Name: </label>
            <input type="text" name="name"></input>
            <br />
            <label for="name">Email: </label>
            <input type="email" name="email"></input>
            <br />
            <label for="name">Phone: </label>
            <input type="phone" name="phone"></input>
            <br />
            <label for="name">Comment: </label>
            <textarea name="comment"></textarea>
            <br />
            <input type="submit" value="Submit" />
            </form>
        </div>

     );
}
 
export default Contact;
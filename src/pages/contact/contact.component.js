import React from 'react'
import FormInput from '../../components/form-input/form-input.component'
import './contact.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component'

const Contact = () => {
    return (
<div class="container">
  <h1>Contact Us</h1>
    <form>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your name.."/>

    <label for="email">Email</label>
    <input type="text" id="email" name="email" placeholder="Your email.."/>

  

    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Write something.."></textarea>

    
    <CustomButton>Submit</CustomButton>

 </form>

</div>
    
    )
}

export default Contact

import React from 'react'
import "./ContactInfoStyle.css"
import msg_icon from '../Assets/msg-icon.png'
import mail_icon from '../Assets/mail-icon.png'
import phone_icon from '../Assets/phone-icon.png'
import loaction_icon from '../Assets/location-icon.png'


const ContactInfo = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "84210731-f214-45b3-8a2a-e197672495d3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    

  return (
    
    <div className='heading-cont '>
      <h1>Contact Me</h1>
      <div className='contact'>
        <div className='contact-col '>
            <h3>Send us a message <img src={msg_icon} alt='' /> </h3>
            <p>Feel free to reach out throught contact form or find our contact information below. Your feedback, questions, and suggestions are important to me.</p>
            <ul>
              <li><a href='https://maps.app.goo.gl/Hhk6bYW39gjc75uv9'> <img src={loaction_icon} alt='' /> Kurla, Mumbai, Maharashtra </a></li>
              <li><a href='mailto:omkarpalav1610@gamil.com'><img src={mail_icon} alt=''/>omkarpalav1610@gmail.com </a></li>
              <li><a href='tel:+91 9324295093'> <img src={phone_icon} alt='' />+91 9324295093  </a></li>
                
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input  type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn send-btn'>Send </button>
            </form>
            <span>{result} </span>
        </div>
      </div>
    </div>
  )
}
export default ContactInfo;
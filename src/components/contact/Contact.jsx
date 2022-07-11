import "./contact.scss"

const Contact = () => {
  return (
     <div className="contact" id="contact">

  <h1>Contact.</h1>
<div className="form">
<form action="">
{/* Email */}
<input type="text" placeholder="Email"/>
<input type="text" placeholder="Name" />
<textarea name="" id="" cols="10"  placeholder="Message"></textarea>
<button className="btn">Send</button></form>
</div>



      </div>)
}

export default Contact
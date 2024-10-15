import "./index.css";
const ContactUS = () => {
  return (
    <div className="contact-us">
      <div className="name">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
      </div>
      <div className="contact-info">
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Phone Number"></input>
      </div>
      <div className="message">
      <textarea rows="5"placeholder="Message"></textarea>
        {/* <input type="textArea" placeholder="Message"></input> */}
      </div>
      <div className="submit">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ContactUS;

import React from "react";

function ContactPage() {
  return (
    <div className="contact-container" style={{display:'grid',placeContent:"center",height:"723px"}}>
      <h1 style={{textAlign:'center'}}>Info</h1>
      <div className="contact">
        <h3>
          <span>Email : </span>
          KarenTWinslow@dayrep.com
        </h3>
        <h3>
          <span>Phone : </span>
          407-712-2546
        </h3>
        <h3>
          <span>Address : </span>
          657 Grand Avenue Winter Park, FL 32789
        </h3>
        <h3>
          <span>Company : </span>
          Linens 'n Things
        </h3>
      </div>
    </div>
  );
}

export default ContactPage;

import React from "react";
const Contact: React.FC = () => {
  const email = "Kevinkadar1905@gmail.com";

  return (
    <div className="container text-center mt-5 mb-10">
      <hr />
      <h2>Contact Information</h2>
      <p className="email">Email: {email}</p>
      <hr />
    </div>
  );
};

export default Contact;

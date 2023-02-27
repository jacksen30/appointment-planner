import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type='text' value={name} name='name' onChange={(e) => setName(e.target.value)} required placeholder='Contact Name' />
      </label>
      <label>
        <input type='tel' value={phone} name='phone' onChange={(e) => setPhone(e.target.value)} required placeholder='Phone Number'/>
      </label>
      <label>
        <input type='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)} required placeholder='Email' />
      </label>
      <label>
        <input type='submit' />
      </label>
    </form>
  );
};

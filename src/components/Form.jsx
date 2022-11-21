import React from 'react'

export default function Form() {
  return (
    <div>
      {/* Form Heading */}

      {/*
      Info about them
        name
        adress
          Number
          Street Name 
          Town/City
          Post Code *
        telephone
        email address
      */}
      <form className='form'>
        <label className='name-label' htmlFor="name">Name</label>
        <input className='name-input' type="text" id="name" name="name" placeholder='Type company name'/>
        <fieldset className='address'>
          <legend className='address-heading' htmlFor="address">Your Business Address:</legend>

          <label className='firstline-label' htmlFor="first-line">Number or name of property</label>
          <input className='firstline-input' type="text" id="first-line" name="first-line" placeholder='Number or name of property' required/>

          <label className='secondline-label' htmlFor="second-line">Street Name</label>
          <input className='secondline-input' type="text" id="second-line" name="second-line" placeholder='Street name'/>

          <label className='thirdline-label' htmlFor="third-line">Town / City</label>
          <input className='secondline-input' type="text" id="third-line" name="third-line" placeholder='Town / City'/>

          <label className='thirdline-label' htmlFor="third-line">Post Code</label>
          <input className='secondline-input' type="text" id="third-line" name="third-line" placeholder='Post code' required/>
          
        </fieldset>

        <label className='phone-label' htmlFor="phone">Phone</label>
        <input className='phone-input' type="tel" id="phone" name="phone" placeholder='Type company phone'/>

        <label className='email-label' htmlFor="email">Email</label>
        <input className='email-input' type="email" id="email" name="email" placeholder='Type company email'/>

        <label className='website-label' htmlFor="website">Company Website</label>
        <input className='website-input' type="url" id="website" name="website" placeholder='Your company website'/>
        
      </form>


    </div>

  )
}

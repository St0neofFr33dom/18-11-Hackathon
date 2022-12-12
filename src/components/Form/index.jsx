import React, { useState } from 'react';
import { getRequest } from '../../funcs/getRequest.jsx';

export default function Form({ locations, setLocations }) {
    const [form, setForm] = useState({
        name: '',
        firstLine: '',
        secondLine: '',
        town: '',
        postcode: '',
        phone: '',
        email: '',
        website: '',
    });

    function handleChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let coordinates = await getRequest(form.postcode);
        if (coordinates === "Error"){
            return
        }
        setLocations([...locations, { ...form, ...coordinates }]);
        setForm({
          name: '',
          firstLine: '',
          secondLine: '',
          town: '',
          postcode: '',
          phone: '',
          email: '',
          website: '',
        })
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <label className='name-label' htmlFor='name'>
                    Name
                </label>
                <input
                    onChange={handleChange}
                    value={form.name}
                    className='name-input'
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Type company name'
                />
                <fieldset className='address'>
                    <legend className='address-heading' htmlFor='address'>
                        Your Business Address:
                    </legend>

                    <label className='firstline-label' htmlFor='first-line'>
                        Number or name of property
                    </label>
                    <input
                        onChange={handleChange}
                        value={form.firstLine}
                        className='firstline-input'
                        type='text'
                        id='first-line'
                        name='firstLine'
                        placeholder='Number or name of property'
                        required
                    />

                    <label className='secondline-label' htmlFor='second-line'>
                        Street Name
                    </label>
                    <input
                        onChange={handleChange}
                        value={form.secondLine}
                        className='secondline-input'
                        type='text'
                        id='second-line'
                        name='secondLine'
                        placeholder='Street name'
                    />

                    <label className='town-label' htmlFor='town-line'>
                        Town / City
                    </label>
                    <input
                        onChange={handleChange}
                        value={form.town}
                        className='town-input'
                        type='text'
                        id='town-line'
                        name='town'
                        placeholder='Town / City'
                    />

                    <label className='postcode-label' htmlFor='postcode-line'>
                        Post Code
                    </label>
                    <input
                        onChange={handleChange}
                        value={form.postcode}
                        className='postcode-input'
                        type='text'
                        id='postcode-line'
                        name='postcode'
                        placeholder='Post code'
                        required
                    />
                </fieldset>

                <label className='phone-label' htmlFor='phone'>
                    Phone
                </label>
                <input
                    onChange={handleChange}
                    value={form.phone}
                    className='phone-input'
                    type='tel'
                    id='phone'
                    name='phone'
                    placeholder='Type company phone'
                />

                <label className='email-label' htmlFor='email'>
                    Email
                </label>
                <input
                    onChange={handleChange}
                    value={form.email}
                    className='email-input'
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Type company email'
                />

                <label className='website-label' htmlFor='website'>
                    Company Website
                </label>
                <input
                    onChange={handleChange}
                    value={form.website}
                    className='website-input'
                    type='url'
                    id='website'
                    name='website'
                    placeholder='Your company website'
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { client } from "~/utilities/client";


const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        enquiry: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
            _type: 'contact',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            enquiry: formData.enquiry,
          };
        
          client.create(contact)
          .then(() => {
            toast.success('Enquiry sent successfully..');
          })
          .catch((err) => console.log(err));
          
        console.log("Data: ", formData)
            setFormData({
              name: '',
              email: '',
              phone: '',
              enquiry: ''
            });
        // try {
        //   const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        //   });
        //   if (response.ok) {
        //     alert('Enquiry submitted successfully!');
        //     setFormData({
        //       name: '',
        //       email: '',
        //       phone: '',
        //       enquiry: ''
        //     });
        //   } else {
        //     throw new Error('Failed to submit enquiry');
        //   }
        // } catch (error) {
        //   console.error(error);
        //   alert('Failed to submit enquiry');
        // }
      };
    return (
        <form onSubmit={handleSubmit}>
        <div className="ps-form--contact">
            <h2 className="ps-form__title">
            For enquiry related to Products
            </h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="ps-form__group">
                        <input
                            className="form-control ps-form__input"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="ps-form__group">
                        <input
                            className="form-control ps-form__input"
                            type="email"
                            name="email"
                            placeholder="Your E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="ps-form__group">
                        <input
                            className="form-control ps-form__input"
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="ps-form__group">
                        <textarea
                            className="form-control ps-form__textarea"
                            rows="5"
                            name="enquiry"
                            placeholder="Message"
                            value={formData.enquiry}
                            onChange={handleChange}
                            required></textarea>
                    </div>
                </div>
            </div>
            <div className="ps-form__submit">
                <button className="ps-btn ps-btn--warning" type="submit">Send enquiry</button>
                <Toaster />
            </div>
        </div>
        </form>
    );
};

export default FormContact;

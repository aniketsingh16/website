import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        toast.success('Subscribed successfully..');
        console.log("Data: ", email)
        setEmail('');
      };

      
    return (
        <section
            className="ps-section--newsletter bg--cover"
            style={{ backgroundImage: "url(/static/img/newsletter-bg.jpg)" }}>
            <h3 className="ps-section__title">
                Join our newsletter and get <br />
               latest updates on medical products
            </h3>
            <div className="ps-section__content">
                <form action="do_action" onSubmit={handleSubmit}>
                    <div className="ps-form--subscribe">
                        <div className="ps-form__control">
                            <input
                                className="form-control ps-input"
                                type="email"
                                required
                                placeholder="Enter your email address"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <button className="ps-btn ps-btn--warning" type="submit">
                                Subscribe
                            </button>
                            <Toaster />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;

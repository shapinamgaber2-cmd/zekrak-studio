import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email) return;
    // Hook this up to your email provider (Mailchimp, Klaviyo, etc.)
    setSubmitted(true);
  }

  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <p className="eyebrow">✦ Stay In The Loop ✦</p>
        <h2 className="newsletter__heading">Get early access to new collections &amp; offers</h2>

        {submitted ? (
          <p className="newsletter__success">You're on the list — thank you!</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="newsletter__input"
            />
            <button type="submit" className="btn btn-primary newsletter__submit">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    const service_id = process.env.SERVICE_ID;
    const template_id = process.env.TEMPLATE_ID;
    const public_id = process.env.PUBLIC_ID;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.name,
      to_name: 'Vainqueur',
      message: formData.message,
      subject: formData.subject,
    };

    emailjs.send(service_id, template_id, templateParams, public_id)
      .then((response) => {
        console.log('Sent:', response);
        setFormData({
          name: '',
          email: '',
          message: '',
          subject: ''
        });
        setSuccess('Message sent successfully!');
      })
      .catch((error) => {
        console.log(error);
        setError('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <div className='flex flex-row justify-between gap-2 items-center'>
            <div className="font-general-regular mb-4">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                aria-label="name"
                value={formData?.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="font-general-regular mb-4">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                aria-label="Email"
                value={formData?.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="font-general-regular mb-4">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-1"
              htmlFor="Subject"
            >
              Subject
            </label>
            <input
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              aria-label="Subject"
              value={formData?.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-3">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="16"
              rows="3"
              aria-label="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mt-6">
            <button 
            disabled={isSubmitting}
            className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-black hover:bg-[#3e6653] focus:ring-1 focus:ring-black rounded-lg duration-500"
            >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

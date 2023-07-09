'use client';

import ContactForm from '@/components/ContactForm'

const ContactPage: React.FC = () => {
  const handleFormSubmit = (data: FormData) => {
    // Handle the form submission (e.g., send data to server)
    console.log('Form data:', data);
  };

  return (
    <div>
      <h1 className='text-5xl'>Contact Us</h1>
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default ContactPage;

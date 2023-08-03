import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm12 = () => {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size <= 2 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        // Handle validation error for image size
        alert('Image size should be less than 2MB.');
      }
    }
  };

  const handleImageRemove = () => {
    setImagePreview(null);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={(values) => {
        const errors: { [key: string]: string } = {};
        // Add any custom form validation here
        if (!values.name) {
          errors.name = 'Name is required';
        }
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.message) {
          errors.message = 'Message is required';
        }
        return errors;
      }}
      onSubmit={(values) => {
        // Handle form submission here (e.g., sending data to the server)
        console.log('Form values:', values);
      }}
    >
      {({ handleSubmit, setFieldValue, values }) => (
        <Form>
          <div>
            {imagePreview && (
              <div>
                <img src={imagePreview as string} alt="Uploaded Logo" style={{ width: '150px', height:'50px' }} />
                <button type="button" onClick={handleImageRemove}>
                  Remove Image
                </button>
              </div>
            )}
            
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <Field as="textarea" id="message" name="message" />
            <ErrorMessage name="message" component="div" />
          </div>
          <div>
          <label htmlFor="logoUpload">Upload Logo:</label>
            <input type="file" id="logoUpload" name="logo" onChange={handleImageChange} accept="image/*" />
            <ErrorMessage name="logo" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm12;

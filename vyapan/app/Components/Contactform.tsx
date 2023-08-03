
'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik';


const roles = [
  { id: 1, name: 'Role 1' },
  { id: 2, name: 'Role 2' },
  { id: 3, name: 'Role 3' },
];

interface ContactFormValues {
    contactId: string;
    roleId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    contactNo1: string;
    contactNo2: string;
    email: string;
  }

const ContactForm = () => {
    const initialValues: ContactFormValues ={
    contactId: '',
    roleId: '',
    firstName: '',
    middleName: '',
    lastName: '',
    contactNo1: '',
    contactNo2: '',
    email: '',
  };

  const validateForm = (values: ContactFormValues) => {
    const errors: Partial<ContactFormValues> = {};

    if (!values.contactId) {
      errors.contactId = 'Contact ID is required';
    }
    if (!values.roleId) {
        errors.roleId = 'Role ID is required';
      }
  
    if (!values.firstName) {
        errors.firstName = 'First Name is required';
      }
  
    if (!values.lastName) {
        errors.lastName = 'Last Name is required';
      }
  
    if (!values.contactNo1) {
        errors.contactNo1 = 'Contact No. 1 is required';
      }
  
    if (!values.email) {
        errors.email = 'Email is required';
      }
      
    if (!values.contactNo2) {
        errors.contactNo2 = 'Contact No. 2 is required';
      }

    return errors;
  };

  const handleSubmit = (values:any, { setSubmitting }:any) => {
     
    console.log(values);
     
     
    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 border p-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="contactId" className="block mb-2 font-medium">
                Contact ID <span className='text-red-600'>*</span>
              </label>
              <Field
                type="text"
                id="contactId"
                name="contactId"
                className="border rounded-md p-2 w-full"
              />
              <ErrorMessage
                name="contactId"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="roleId" className="block mb-2 font-medium">
                Role ID
              </label>
              <Field
                as="select"
                id="roleId"
                name="roleId"
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select Role</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="roleId"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block mb-2 font-medium">
                  First Name <span className='text-red-600'>*</span>
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="border rounded-md p-2 w-full"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label htmlFor="middleName" className="block mb-2 font-medium">
                  Middle Name
                </label>
                <Field
                  type="text"
                  id="middleName"
                  name="middleName"
                  className="border rounded-md p-2 w-full"
                />
                <ErrorMessage
                  name="middleName"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-2 font-medium">
                Last Name <span className='text-red-600'>*</span>
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="border rounded-md p-2 w-full"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contactNo1" className="block mb-2 font-medium">
                  Contact No. 1
                </label>
                <Field
                  type="text"
                  id="contactNo1"
                  name="contactNo1"
                  className="border rounded-md p-2 w-full"
                />
                <ErrorMessage
                  name="contactNo1"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label htmlFor="contactNo2" className="block mb-2 font-medium">
                  Contact No. 2
                </label>
                <Field
                  type="text"
                  id="contactNo2"
                  name="contactNo2"
                  className="border rounded-md p-2 w-full"
                />
                <ErrorMessage
                  name="contactNo2"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="border rounded-md p-2 w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;

import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm123 = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
    image: null as File | null,
  };

   

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {({ setFieldValue, values }) => (
        <Form className="max-w-md mx-auto">
          <div className="mb-4">
            {values.image ? (
              <img
                src={URL.createObjectURL(values.image)}
                alt="Logo"
                className="h-16 w-16 object-contain rounded-full mb-4"
              />
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="message">Message</label>
            <Field as="textarea" id="message" name="message" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files?.[0];
                setFieldValue('image', file);
              }}
            />
            <ErrorMessage name="image" component="div" className="text-red-500" />
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm123;

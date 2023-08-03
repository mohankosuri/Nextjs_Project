import React from 'react';
import { Formik, Form } from 'formik';
import FormComponent1 from '../Components/Part1';
import FormComponent2 from '../Components/Part2';
import FormComponent3 from '../Components/Part3';

const initialValues = {
  field1: '',
  field2: '',
  field3: '',
  field4: '',
  field5: '',
  field6: '',
  field7: '',
  field8: '',
  field9: '',
};

const Home = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };
  const validate = (values: typeof initialValues) => {
    const errors: Partial<typeof initialValues> = {};
     
    if (!values.field1) {
      errors.field1 = 'Field 1 is required';
    }
    if (!values.field2) {
      errors.field2 = 'Field 2 is required';
    }
    if (!values.field3) {
        errors.field3 = 'Field 3 is required';
      }
    if (!values.field4) {
        errors.field4 = 'Field 4 is required';
      }
    if (!values.field5) {
        errors.field5 = 'Field 5 is required';
      }
    if (!values.field6) {
        errors.field6 = 'Field 6 is required';
      }
    if (!values.field7) {
        errors.field7 = 'Field 7 is required';
      }
    if (!values.field8) {
        errors.field8 = 'Field 8 is required';
      }
    if (!values.field9) {
        errors.field9 = 'Field 9 is required';
      }
      
    return errors;
  }

  return (
    <div className="container mx-auto mt-8">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
        {() => (
          <Form className="border p-4 rounded ml-[150px] mr-[150px]">
            <FormComponent1 />
            <FormComponent2 />
            <FormComponent3 />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Home;

import React from 'react';
import { Field, ErrorMessage } from 'formik';
import 'tailwindcss/tailwind.css';

const FormComponent1 = () => {
  return (
    <div className="flex space-x-4 mb-4">
      <div className="flex-1">
        <Field type="text" name="field1" placeholder="Field 1" className="border rounded px-3 py-2 w-full" />
        <ErrorMessage name="field1" component="div" className="text-red-500 text-sm" />
      </div>
      <div className="flex-1">
        <Field type="text" name="field2" placeholder="Field 2" className="border rounded px-3 py-2 w-full" />
        <ErrorMessage name="field2" component="div" className="text-red-500 text-sm" />
      </div>
      <div className="flex-1">
        <Field type="text" name="field3" placeholder="Field 3" className="border rounded px-3 py-2 w-full" />
        <ErrorMessage name="field3" component="div" className="text-red-500 text-sm" />
      </div>
    </div>
  );
};

export default FormComponent1;

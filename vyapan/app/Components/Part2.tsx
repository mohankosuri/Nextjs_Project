import React from 'react';
import { Field, ErrorMessage } from 'formik';
import 'tailwindcss/tailwind.css';

const FormComponent2: React.FC = () => {
  return (
    <div className="flex space-x-4 mb-4">
      <div className="flex-1">
        <Field type="text" name="field4" placeholder="Field 4" className="border rounded px-3 py-2 w-full" />
        <ErrorMessage name="field4" component="div" className="text-red-500 text-sm" />
      </div>
      <div className="flex-1">
        <Field type="text" name="field5" placeholder="Field 5" className="border rounded px-3 py-2 w-full" />
        <ErrorMessage name="field5" component="div" className="text-red-500 text-sm" />
      </div>
      <div className="flex-1">
        <Field type="text" name="field6" placeholder="Field 6" className="border rounded px-3 py-2 w-full" />
        <ErrorMessage name="field6" component="div" className="text-red-500 text-sm" />
      </div>
    </div>
  );
};

export default FormComponent2;

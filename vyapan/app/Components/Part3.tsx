import React from 'react';
import { Field, ErrorMessage } from 'formik';
import 'tailwindcss/tailwind.css';

const FormComponent3: React.FC = () => {
  return (
    <div className="flex space-x-4 mb-4">
      <div className="flex-1">
        <Field type="text" name="field7" placeholder="Field 7" className="border rounded px-3 py-2 w-full" />
        <ErrorMessage name="field7" component="div" className="text-red-500 text-sm" />
      </div>
      <div className="flex-1">
        <Field type="text" name="field8" placeholder="Field 8" className="border rounded px-3 py-2 w-full" />
        <ErrorMessage name="field8" component="div" className="text-red-500 text-sm" />
      </div>
      <div className="flex-1">
        <Field type="text" name="field9" placeholder="Field 9" className="border rounded px-3 py-2 w-full" />
        <ErrorMessage name="field9" component="div" className="text-red-500 text-sm" />
      </div>
    </div>
  );
};

export default FormComponent3;

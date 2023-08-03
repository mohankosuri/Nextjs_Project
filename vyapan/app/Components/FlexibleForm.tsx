"use client"

// components/FlexibleForm.tsx
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';

const initialValues = {
  // Define your initial form field values here
  items: [{ name: '', age: '' }],
};

const FlexibleForm: React.FC = () => {
  const onSubmit = (values: typeof initialValues) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values }) => (
        <Form className="space-y-6">
          <FieldArray name="items">
            {({ push, remove }:any) => (
              <div>
                {values.items.map((_, index) => (
                  <div key={index} className="space-y-4">
                    <div>
                      <label htmlFor={`items.${index}.name`} className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <Field
                        type="text"
                        id={`items.${index}.name`}
                        name={`items.${index}.name`}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm outline-none"
                      />
                      <ErrorMessage name={`items.${index}.name`} component="div" className="text-red-500 text-sm" />
                    </div>

                    <div>
                      <label htmlFor={`items.${index}.age`} className="block text-sm font-medium text-gray-700">
                        Age
                      </label>
                      <Field
                        type="number"
                        id={`items.${index}.age`}
                        name={`items.${index}.age`}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm outline-none"
                      />
                      <ErrorMessage name={`items.${index}.age`} component="div" className="text-red-500 text-sm" />
                    </div>

                    {values.items.length > 1 && (
                      <button
                        type="button"
                        className="text-red-600 hover:text-red-800"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => push({ name: '', age: '' })}
                >
                  Add Item
                </button>
              </div>
            )}
          </FieldArray>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FlexibleForm;

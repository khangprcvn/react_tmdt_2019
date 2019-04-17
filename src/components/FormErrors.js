import React from 'react';

export const FormErrors = ({ formErrors }) => (
  // TODO: formErrors is object so use Object.keys return a array

  <div>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <div className="alert alert-warning" role="alert" key={i}>
            <strong>{fieldName.toUpperCase()}</strong> <p>{formErrors[fieldName]}</p>
          </div>
        );
      } else {
        return '';
      }
    })}
  </div>
);
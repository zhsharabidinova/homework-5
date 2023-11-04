import React, { useState } from 'react';

const PrototypeForm = {
  key1: 'Barbara',
  key2: 'Hepworth',
  key3: 'bhepworth@react.com',
  key4: 'love cats'
};

const MyFormComponent = () => {
  const [formData] = useState(PrototypeForm);

  return (
    <div>
      {Object.keys(formData).map((key, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <label>
            {key}:
            <input
              type="text"
              value={formData[key]}
              readOnly
              style={{ 
                backgroundColor: 'rgb(204, 226, 230)',
                border: 'none',
                padding: '5px',
                borderRadius: '7px',
                marginLeft: '10px' }}
            />
          </label>
        </div>
      ))}

      <div>
        {Object.keys(formData).map((key, index) => (
          <p key={index}>
            {key}: {formData[key]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default MyFormComponent;

import React from 'react';
import { Form } from 'react-bootstrap';

const Checkbox = field => (
  <div>
    <Form.Check aria-label="Small" aria-describedby="inputGroup-sizing-sm" {...field.input} label={field.label} checked={field.input.value} />
    {field.meta.touched &&
    field.meta.error &&
    <span className="error">{field.meta.error}</span>}
  </div>
);

export default Checkbox;

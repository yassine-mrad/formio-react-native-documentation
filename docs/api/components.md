---
sidebar_position: 1
---

# Components API

This section details the API for all Formio components supported by `formio-react-native`.

## `FormioForm`

The primary component for rendering Form.io forms.

### Props

| Prop Name    | Type                                      | Default     | Description                                             |
| :----------- | :---------------------------------------- | :---------- | :------------------------------------------------------ |
| `form`       | `FormioFormSchema`                        | `required`  | The Form.io form schema JSON.                           |
| `submission` | `object`                                  | `{}`        | Initial submission data for the form.                   |
| `options`    | `FormioOptions`                           | `{}`        | Configuration options for the form renderer.            |
| `onSubmit`   | `(submission: any) => void`               | `undefined` | Callback function when the form is submitted.           |
| `onChange`   | `(component: any, value: any) => void`    | `undefined` | Callback function when any component's value changes.   |
| `onError`    | `(errors: FormioError[]) => void`         | `undefined` | Callback function when form validation errors occur.    |
| `i18n`       | `object`                                  | `{}`        | Custom internationalization messages.                   |
| `theme`      | `string`                                  | `'default'` | Name of the theme to apply.                             |
| `children`   | `ReactNode`                               | `undefined` | Custom children to render inside the form.              |

### Usage Example

```tsx
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { FormioForm } from 'formio-react-native';

const myForm = {
  components: [
    {
      type: 'textfield',
      key: 'name',
      label: 'Your Name',
      validate: { required: true },
    },
    {
      type: 'email',
      key: 'email',
      label: 'Your Email',
      validate: { required: true, email: true },
    },
    {
      type: 'button',
      action: 'submit',
      label: 'Submit Form',
    },
  ],
};

function MyFormWrapper() {
  const [submissionData, setSubmissionData] = useState({});

  const handleSubmit = (submission: any) => {
    Alert.alert('Form Submitted', JSON.stringify(submission, null, 2));
    setSubmissionData(submission);
  };

  const handleChange = (component: any, value: any) => {
    console.log(`Component '${component.key}' changed to:`, value);
  };

  const handleError = (errors: any[]) => {
    console.error('Form errors:', errors);
    // Display errors to the user
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FormioForm
        form={myForm}
        submission={submissionData}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onError={handleError}
      />
    </View>
  );
}

export default MyFormWrapper;
```

---

Next: [Core APIs](./core-apis.md)
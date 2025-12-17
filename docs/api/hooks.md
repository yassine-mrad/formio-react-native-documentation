---
sidebar_position: 3
---

# Hooks

`formio-react-native` provides several custom React hooks to simplify common tasks and enhance form interactivity.

## `useFormioForm`

This hook provides access to form instance and methods.

### Parameters

| Parameter | Type   | Description                                   |
| :-------- | :----- | :-------------------------------------------- |
| `form`    | `object` | The form schema or FormioForm instance.     |
| `options` | `object` | Options to configure the form.                |

### Returns

| Return Value | Type       | Description                                  |
| :----------- | :--------- | :------------------------------------------- |
| `formInstance` | `object`     | The FormioForm instance.                   |
| `submission` | `object`     | The current form submission data.            |
| `errors`     | `object`     | Any validation errors.                       |
| `setSubmission` | `function` | Function to update the form's submission.    |
| `submitForm` | `function` | Function to programmatically submit the form. |

### Usage Example

```tsx
import React from 'react';
import { View, Button, Alert } from 'react-native';
import { FormioForm, useFormioForm } from 'formio-react-native';

const myFormSchema = {
  components: [
    {
      type: 'textfield',
      key: 'name',
      label: 'Name',
      validate: { required: true },
    },
    {
      type: 'button',
      action: 'submit',
      label: 'Submit (Internal)',
    },
  ],
};

function MyFormWithHook() {
  const { formInstance, submission, setSubmission, submitForm } = useFormioForm(
    myFormSchema,
  );

  const handleExternalSubmit = () => {
    // Programmatically submit the form
    submitForm();
  };

  const handleFormSubmit = (data: any) => {
    Alert.alert('Form Submitted', JSON.stringify(data, null, 2));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FormioForm
        form={formInstance} // Pass the formInstance from the hook
        submission={submission}
        onSubmit={handleFormSubmit}
      />
      <Button title="Submit Externally" onPress={handleExternalSubmit} />
    </View>
  );
}

export default MyFormWithHook;
```
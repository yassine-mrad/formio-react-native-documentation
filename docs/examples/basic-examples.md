---
sidebar_position: 1
---

import MobileMockup from '../../src/components/MobileMockup';

# Basic Examples

This section provides basic examples to help you get started with `formio-react-native`.

## Simple Form

<MobileMockup placeholder="[EXAMPLE_1_IMAGE_PLACEHOLDER]" title="Simple Form">
</MobileMockup>

```tsx
import React from 'react';
import { View, Alert } from 'react-native';
import { FormioForm } from 'formio-react-native';

const simpleFormSchema = {
  components: [
    {
      type: 'textfield',
      key: 'name',
      label: 'Your Name',
      placeholder: 'Enter your name',
    },
    {
      type: 'email',
      key: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email',
    },
    {
      type: 'button',
      action: 'submit',
      label: 'Submit',
    },
  ],
};

function SimpleFormExample() {
  const handleSubmit = (submission: any) => {
    Alert.alert('Form Submitted', JSON.stringify(submission, null, 2));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FormioForm form={simpleFormSchema} onSubmit={handleSubmit} />
    </View>
  );
}

export default SimpleFormExample;
```

## Form with Validation

<MobileMockup placeholder="[EXAMPLE_2_IMAGE_PLACEHOLDER]" title="Validation Form">
</MobileMockup>

```tsx
import React from 'react';
import { View, Alert } from 'react-native';
import { FormioForm } from 'formio-react-native';

const validationFormSchema = {
  components: [
    {
      type: 'textfield',
      key: 'username',
      label: 'Username',
      placeholder: 'Min 5 characters',
      validate: {
        required: true,
        minLength: 5,
      },
    },
    {
      type: 'password',
      key: 'password',
      label: 'Password',
      placeholder: 'Min 8 characters',
      validate: {
        required: true,
        minLength: 8,
      },
    },
    {
      type: 'button',
      action: 'submit',
      label: 'Submit',
    },
  ],
};

function ValidationFormExample() {
  const handleSubmit = (submission: any) => {
    Alert.alert('Form Submitted', JSON.stringify(submission, null, 2));
  };

  const handleError = (errors: any[]) => {
    Alert.alert('Validation Errors', JSON.stringify(errors, null, 2));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FormioForm form={validationFormSchema} onSubmit={handleSubmit} onError={handleError} />
    </View>
  );
}

export default ValidationFormExample;
```

## Multi-step Form (Wizard)

<MobileMockup placeholder="[EXAMPLE_3_IMAGE_PLACEHOLDER]" title="Wizard Form">
</MobileMockup>

```tsx
import React from 'react';
import { View, Alert } from 'react-native';
import { FormioForm } from 'formio-react-native';

const wizardFormSchema = {
  components: [
    {
      type: 'panel',
      label: 'Step 1: Personal Info',
      key: 'personalInfo',
      components: [
        {
          type: 'textfield',
          key: 'firstName',
          label: 'First Name',
          validate: { required: true },
        },
        {
          type: 'textfield',
          key: 'lastName',
          label: 'Last Name',
          validate: { required: true },
        },
        {
          type: 'button',
          action: 'next',
          label: 'Next',
        },
      ],
    },
    {
      type: 'panel',
      label: 'Step 2: Contact Info',
      key: 'contactInfo',
      components: [
        {
          type: 'email',
          key: 'email',
          label: 'Email',
          validate: { required: true },
        },
        {
          type: 'phoneNumber',
          key: 'phone',
          label: 'Phone Number',
        },
        {
          type: 'button',
          action: 'prev',
          label: 'Previous',
        },
        {
          type: 'button',
          action: 'submit',
          label: 'Submit',
        },
      ],
    },
  ],
};

function WizardFormExample() {
  const handleSubmit = (submission: any) => {
    Alert.alert('Wizard Form Submitted', JSON.stringify(submission, null, 2));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FormioForm form={wizardFormSchema} onSubmit={handleSubmit} />
    </View>
  );
}

export default WizardFormExample;
```

---

Next: [Advanced Examples](./advanced-examples.md)
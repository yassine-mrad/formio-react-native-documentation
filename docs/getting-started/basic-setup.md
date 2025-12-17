--- 
sidebar_position: 3
---

# Basic Setup

This guide will walk you through the basic setup of `formio-react-native` in your project.

## 1. Import `FormioForm`

```typescript
import { FormioForm } from 'formio-react-native';
```

## 2. Basic Form Example

```tsx
import React from 'react';
import { View } from 'react-native';
import { FormioForm } from 'formio-react-native';

const myFormSchema = {
  components: [
    {
      type: 'textfield',
      key: 'firstName',
      label: 'First Name',
      placeholder: 'Enter your first name',
      validate: {
        required: true,
      },
    },
    {
      type: 'textfield',
      key: 'lastName',
      label: 'Last Name',
      placeholder: 'Enter your last name',
      validate: {
        required: true,
      },
    },
    {
      type: 'email',
      key: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      validate: {
        required: true,
        pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      },
    },
    {
      type: 'button',
      action: 'submit',
      label: 'Submit',
      theme: 'primary',
    },
  ],
};

function MyFormScreen() {
  const handleSubmit = (submission: any) => {
    console.log('Form Submitted:', submission);
    // You can send this data to your backend
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FormioForm
        form={myFormSchema}
        onSubmit={handleSubmit}
      />
    </View>
  );
}

export default MyFormScreen;
```

---

Next: [API Documentation](../api/components.md)

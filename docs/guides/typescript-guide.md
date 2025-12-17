---
sidebar_position: 4
---

# TypeScript Guide

`formio-react-native` is written in TypeScript and provides comprehensive type definitions to ensure type safety and improve developer experience. This guide covers the key interfaces you will work with.

## Key Interfaces

### FormioFormSchema

This is the main interface for defining your form structure. It represents the JSON schema of the form.

```typescript
import { FormioFormSchema } from '@formio/react-native';

const myForm: FormioFormSchema = {
  title: 'User Registration',
  display: 'form',
  components: [
    // Array of FormioComponent
  ]
};
```

### FormioComponent

Defines the configuration for a single form component (field).

```typescript
import { FormioComponent } from '@formio/react-native';

const textField: FormioComponent = {
  type: 'textfield',
  key: 'firstName',
  label: 'First Name',
  placeholder: 'Enter name',
  required: true,
  validate: {
    minLength: 2,
    maxLength: 50
  }
};
```

### FormProps

Props accepted by the `FormioForm` component.

```typescript
interface FormProps {
  form: FormioFormSchema;
  submission?: { data: any };
  onChange?: (submission: any) => void;
  onSubmit?: (submission: any) => void;
  readOnly?: boolean;
  // ... other props
}
```

## Type-Safe Custom Components

When creating custom components or overrides, you can use the `ComponentRenderer` and `ComponentRenderProps` types.

```tsx
import React from 'react';
import { Text, TextInput } from 'react-native';
import { ComponentRenderer, ComponentRenderProps } from '@formio/react-native';

const CustomInput: ComponentRenderer = (component, props) => {
  // props is strongly typed as ComponentRenderProps
  const { value, onChange, error } = props;

  return (
    <>
      <Text>{component.label}</Text>
      <TextInput 
        value={value} 
        onChangeText={onChange} 
      />
      {error && <Text style={{color: 'red'}}>{error}</Text>}
    </>
  );
};
```

## Validation Rules

The `ValidateRule` interface helps you define validation logic in your schema.

```typescript
import { ValidateRule } from '@formio/react-native';

const rules: ValidateRule = {
  required: true,
  minLength: 5,
  pattern: '^[A-Z]+$',
  custom: 'valid = input === "secret" ? true : "Wrong password";'
};
```

## Best Practices

1.  **Always define your form schemas** using `FormioFormSchema` to catch errors in component properties early.
2.  **Use `FormioComponent`** when manipulating individual component definitions in code.
3.  **Extend interfaces** if you are adding custom properties to your components that the library doesn't know about by default.

```typescript
interface CustomComponent extends FormioComponent {
  myCustomProp: string;
}
```
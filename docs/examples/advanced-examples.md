---
sidebar_position: 2
---

# Advanced Examples

This section demonstrates advanced patterns with `formio-react-native`, including nested schemas, dynamic logic, file uploads, data grids, custom components, API integration, and wizards. Examples use `FormioForm` and `FormioProvider` from `formio-react-native`.

## Complex Nested Forms

Use containers (`panel`, `container`, `columns`) with conditional visibility and calculated values.

```tsx
import React from 'react';
import { View } from 'react-native';
import { FormioForm } from 'formio-react-native';

export default function NestedExample() {
  const form = {
    components: [
      {
        type: 'panel',
        title: 'Personal Information',
        key: 'panelPersonal',
        components: [
          {
            type: 'columns',
            key: 'nameColumns',
            label: 'Name',
            columns: [
              {
                components: [
                  { type: 'textfield', key: 'firstName', label: 'First Name', validate: { required: true } }
                ]
              },
              {
                components: [
                  { type: 'textfield', key: 'lastName', label: 'Last Name', validate: { required: true } }
                ]
              }
            ]
          },
          {
            type: 'container',
            key: 'extras',
            label: 'Extras',
            components: [
              {
                type: 'checkbox',
                key: 'subscribe',
                label: 'Subscribe to newsletter'
              },
              {
                type: 'textfield',
                key: 'email',
                label: 'Email',
                customConditional: "show = data.subscribe === true",
                validate: { required: true }
              }
            ]
          }
        ]
      },
      {
        type: 'number',
        key: 'quantity',
        label: 'Quantity',
        defaultValue: 1
      },
      {
        type: 'number',
        key: 'price',
        label: 'Price',
        defaultValue: 10
      },
      {
        type: 'number',
        key: 'total',
        label: 'Total',
        calculateValue: "value = (data.quantity || 0) * (data.price || 0)"
      },
      { type: 'button', key: 'submit', label: 'Submit' }
    ]
  };

  return (
    <View>
      <FormioForm
        form={form}
        onSubmit={(data) => console.log('Submitted:', data)}
      />
    </View>
  );
}
```

## File Upload Forms

Integrate platform file pickers by overriding the built-in `file` renderer and passing `onPickFile`.

```tsx
import React from 'react';
import { FormioForm, FormioProvider } from 'formio-react-native';
import { FileUpload } from 'formio-react-native/src/components/FileUpload';
// For production: use a library like 'react-native-document-picker'

const form = {
  components: [
    {
      type: 'file',
      key: 'attachments',
      label: 'Attachments',
      multiple: true,
      validate: { required: true }
    },
    { type: 'button', key: 'submit', label: 'Submit' }
  ]
};

const overrideFileRenderer = (component, { value, onChange, error, disabled, readOnly }) => {
  const onPickFile = async () => {
    // Example: return a stub representing picked files
    return [{ name: 'example.pdf', url: 'https://example.com/example.pdf' }];
  };
  return (
    <FileUpload
      component={component}
      value={value}
      onChange={onChange}
      error={error}
      disabled={disabled}
      readOnly={readOnly}
      onPickFile={onPickFile}
    />
  );
};

export default function FileUploadExample() {
  return (
    <FormioProvider components={{ file: overrideFileRenderer }}>
      <FormioForm
        form={form}
        onSubmit={(data) => console.log('Files submitted:', data.attachments)}
      />
    </FormioProvider>
  );
}
```

## Data Grid Examples

Capture table-like data with `datagrid` columns defined as subcomponents.

```tsx
import React from 'react';
import { View } from 'react-native';
import { FormioForm } from 'formio-react-native';

export default function DataGridExample() {
  const form = {
    components: [
      {
        type: 'datagrid',
        key: 'items',
        label: 'Items',
        minLength: 1,
        components: [
          { type: 'textfield', key: 'name', label: 'Name', validate: { required: true } },
          { type: 'number', key: 'qty', label: 'Qty', defaultValue: 1, validate: { min: 1 } },
          { type: 'number', key: 'price', label: 'Price', defaultValue: 0 }
        ]
      },
      {
        type: 'number',
        key: 'grandTotal',
        label: 'Grand Total',
        calculateValue: `
          value = (Array.isArray(data.items) ? data.items.reduce((sum, row) => {
            const q = Number(row.qty || 0);
            const p = Number(row.price || 0);
            return sum + q * p;
          }, 0) : 0);
        `
      },
      { type: 'button', key: 'submit', label: 'Submit' }
    ]
  };

  return (
    <View>
      <FormioForm
        form={form}
        onSubmit={(data) => console.log('DataGrid submitted:', data)}
      />
    </View>
  );
}
```

## Custom Component Integration

Override or add custom renderers for new component types.

```tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FormioForm, FormioProvider } from 'formio-react-native';

const form = {
  components: [
    { type: 'myCustom', key: 'magic', label: 'Magic Value' },
    { type: 'button', key: 'submit', label: 'Submit' }
  ]
};

const MyCustomRenderer = (component, { value, onChange }) => {
  const next = (value ?? 0) + 1;
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ marginBottom: 8 }}>{component.label}</Text>
      <TouchableOpacity
        onPress={() => onChange(next)}
        style={{ padding: 12, backgroundColor: '#4338CA', borderRadius: 8 }}
      >
        <Text style={{ color: '#fff' }}>Increment: {String(value ?? 0)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function CustomComponentExample() {
  return (
    <FormioProvider components={{ myCustom: MyCustomRenderer }}>
      <FormioForm
        form={form}
        onSubmit={(data) => console.log('Custom submitted:', data)}
      />
    </FormioProvider>
  );
}
```

## API Integration Examples

Use `select` with `dataSrc: 'url'` and a custom `fetcher`, or post `onSubmit` to your backend.

```tsx
import React from 'react';
import { FormioForm, FormioProvider } from 'formio-react-native';
import { ResourceSelect } from 'formio-react-native/src/components/ResourceSelect';

const form = {
  components: [
    {
      type: 'select',
      key: 'product',
      label: 'Product',
      placeholder: 'Select a product',
      data: {
        dataSrc: 'url',
        url: 'https://api.example.com/products',
        labelProperty: 'name',
        valueProperty: 'id',
        searchField: 'q'
      },
      validate: { required: true }
    },
    { type: 'textfield', key: 'notes', label: 'Notes' },
    { type: 'button', key: 'submit', label: 'Submit' }
  ]
};

const overrideSelectRenderer = (component, props) => {
  const fetcher = async (url) => {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    return res.json();
  };
  return (
    <ResourceSelect
      component={component}
      value={props.value}
      onChange={props.onChange}
      error={props.error}
      disabled={props.disabled}
      readOnly={props.readOnly}
      fetcher={fetcher}
    />
  );
};

export default function ApiIntegrationExample() {
  return (
    <FormioProvider components={{ select: overrideSelectRenderer }}>
      <FormioForm
        form={form}
        onSubmit={async (data) => {
          await fetch('https://api.example.com/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          console.log('Submitted to API:', data);
        }}
      />
    </FormioProvider>
  );
}
```

## Wizard Forms

Render multi-page forms by setting `display: 'wizard'`.

```tsx
import React from 'react';
import { FormioForm } from 'formio-react-native';

export default function WizardExample() {
  const form = {
    display: 'wizard',
    title: 'Onboarding',
    components: [
      {
        type: 'panel',
        title: 'Step 1',
        key: 'step1',
        components: [
          { type: 'textfield', key: 'fullName', label: 'Full Name', validate: { required: true } }
        ]
      },
      {
        type: 'panel',
        title: 'Step 2',
        key: 'step2',
        components: [
          { type: 'email', key: 'email', label: 'Email', validate: { required: true } }
        ]
      },
      { type: 'button', key: 'submit', label: 'Finish' }
    ]
  };

  return (
    <FormioForm
      form={form}
      onSubmit={(data) => console.log('Wizard submitted:', data)}
    />
  );
}
```

---

Next: [RTL Examples](./rtl-examples.md)

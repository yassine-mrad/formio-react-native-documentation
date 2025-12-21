---
sidebar_position: 5
---

import MobileMockup from '@site/src/components/MobileMockup';

# Local Development Playground

Since `formio-react-native` relies on native mobile capabilities, the best way to experiment and "play" with the code is to set up a local playground environment using the provided example app or within your own project.

## Using the Example App

The repository comes with a full-featured example application in the `example/` directory. This is the perfect place to test changes and see how different components behave.

### 1. Running the Example

```bash
# From the root of the repository
cd example
npm install
npm run ios     # or npm run android
```

### 2. Modifying the Playground

The `example/App.tsx` (or specific example screens like `I18nExample.tsx`) serves as a playground. You can modify the `form` schema directly to test different configurations.

```tsx
// example/App.tsx
const myTestForm = {
  components: [
    {
      type: 'textfield',
      key: 'testField',
      label: 'Testing Playground',
      placeholder: 'Change me to see updates!'
    }
  ]
};

// Pass this to the FormioForm component
<FormioForm form={myTestForm} />
```


<MobileMockup 

  title="Example App Playground" 
>
 <img src={require('@site/static/img/testing.png').default}  alt="Example App Playground" />
</MobileMockup>
## Creating Your Own Playground Screen

If you are integrating the library into an existing app, we recommend creating a dedicated `PlaygroundScreen` for testing forms.

### Step 1: Create the Screen

```tsx
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { FormioForm, FormioFormSchema } from '@formio/react-native';

const PlaygroundScreen = () => {
  const [formData, setFormData] = useState({});

  const playgroundSchema: FormioFormSchema = {
    components: [
      {
        type: 'panel',
        title: 'Playground Area',
        components: [
          {
            type: 'textfield',
            key: 'experiment',
            label: 'Experimental Field'
          }
        ]
      }
    ]
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Form Playground</Text>
        
        <FormioForm 
          form={playgroundSchema}
          onSubmit={(data) => console.log('Submitted:', data)}
          onChange={(data) => setFormData(data)}
        />
        
        <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Live Data:</Text>
        <Text>{JSON.stringify(formData, null, 2)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlaygroundScreen;
```

### Step 2: Use Hot Reloading

React Native's Fast Refresh feature makes this workflow very powerful.
1.  Open your `PlaygroundScreen.tsx`.
2.  Change a component definition (e.g., add `required: true`).
3.  Save the file.
4.  The simulator/emulator will update instantly, allowing you to iterate rapidly on your form designs.

## Testing Custom Components

The playground approach is especially useful for developing custom components.

1.  Define your custom component renderer.
2.  Register it in the `FormioProvider` within your playground.
3.  Add an instance of that component to your playground schema.
4.  Tweak the renderer code and see changes live.
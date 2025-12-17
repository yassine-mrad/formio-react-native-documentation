---
sidebar_position: 3
---

import MobileMockup from '../../src/components/MobileMockup';

# RTL Examples

This section provides examples of how to implement Right-to-Left (RTL) language support in your forms.

## RTL Form Setup

<MobileMockup placeholder="[EXAMPLE_4_IMAGE_PLACEHOLDER]" title="RTL Form">
</MobileMockup>

```tsx
import React from 'react';
import { View, Alert } from 'react-native';
import { FormioForm } from 'formio-react-native';
import { I18nManager } from 'react-native';

// Ensure RTL layout is enabled for the app
if (!I18nManager.isRTL) {
  I18nManager.forceRTL(true);
  // Restart the app if needed, for example, using react-native-restart
  // import RNRestart from 'react-native-restart';
  // RNRestart.Restart();
}

const rtlFormSchema = {
  components: [
    {
      type: 'textfield',
      key: 'name',
      label: 'الاسم', // Arabic for "Name"
      placeholder: 'أدخل اسمك', // Arabic for "Enter your name"
    },
    {
      type: 'email',
      key: 'email',
      label: 'البريد الإلكتروني', // Arabic for "Email"
      placeholder: 'أدخل بريدك الإلكتروني', // Arabic for "Enter your email"
    },
    {
      type: 'button',
      action: 'submit',
      label: 'إرسال', // Arabic for "Submit"
    },
  ],
};

function RTLFormExample() {
  const handleSubmit = (submission: any) => {
    Alert.alert('Form Submitted (RTL)', JSON.stringify(submission, null, 2));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FormioForm form={rtlFormSchema} onSubmit={handleSubmit} />
    </View>
  );
}

export default RTLFormExample;
```

## Language Switching

Demonstrates how to dynamically switch between LTR and RTL languages, updating the form and UI accordingly.

## Mixed LTR/RTL Content

Examples of forms that contain a mix of LTR and RTL text inputs and how the layout adapts.
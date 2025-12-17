---
sidebar_position: 1
---

import MobileMockup from '@site/src/components/MobileMockup';

# Translation Guide

`formio-react-native` provides a built-in internationalization (i18n) system that allows you to easily localize your forms and applications. This guide explains how to configure languages, provide translations, and handle RTL layouts.

## Core Concepts

The library uses a React Context-based approach with `I18nProvider` to supply translation data and the `useI18n` hook to consume it.

### 1. I18nProvider

Wrap your application (or just the form) with the `I18nProvider` to make translations available.

```tsx
import React from 'react';
import { I18nProvider } from '@formio/react-native';
import MyForm from './MyForm';

const App = () => {
  const i18nConfig = {
    language: 'en',
    translations: {
      en: {
        'submit': 'Submit',
        'cancel': 'Cancel',
        'required': 'This field is required'
      },
      fr: {
        'submit': 'Soumettre',
        'cancel': 'Annuler',
        'required': 'Ce champ est requis'
      },
      ar: {
        'submit': 'إرسال',
        'cancel': 'إلغاء',
        'required': 'هذا الحقل مطلوب'
      }
    },
    rtlLanguages: ['ar', 'he', 'fa', 'ur'] // Optional: customize RTL languages
  };

  return (
    <I18nProvider config={i18nConfig}>
      <MyForm />
    </I18nProvider>
  );
};
```

### 2. useI18n Hook

Use the `useI18n` hook within any component under `I18nProvider` to access the current language, translation function, and RTL status.

```tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useI18n } from '@formio/react-native';

const MyComponent = () => {
  const { language, translate, setLanguage, isRTL } = useI18n();

  return (
    <View>
      <Text>{translate('welcome_message', 'Welcome!')}</Text>
      
      <Button 
        title={translate('switch_to_french', 'French')} 
        onPress={() => setLanguage('fr')} 
      />
      
      <Text>Current Language: {language}</Text>
      <Text>Is RTL: {isRTL ? 'Yes' : 'No'}</Text>
    </View>
  );
};
```

## Form Translation

The `FormioForm` component automatically uses the `I18nContext` to translate field labels, placeholders, and error messages if the keys match your translation object.

<MobileMockup 
  src="https://placehold.co/375x600/png?text=Translation+Example" 
  alt="Form Translation Example" 
/>

### Translation Keys
When defining your form schema, the text values (labels, placeholders) act as keys.

```tsx
const formSchema = {
  components: [
    {
      type: 'textfield',
      key: 'firstName',
      label: 'First Name', // This string is the lookup key
      placeholder: 'Enter your first name'
    }
  ]
};

// In your translations config:
// en: { 'First Name': 'First Name', 'Enter your first name': 'Enter your first name' }
// fr: { 'First Name': 'Prénom', 'Enter your first name': 'Entrez votre prénom' }
```

## Handling Dynamic Language Changes

The `I18nProvider` is reactive. Calling `setLanguage` will trigger a re-render of all consumers, instantly updating the UI text and layout direction (if switching between LTR and RTL).

```tsx
import { TouchableOpacity, Text } from 'react-native';
import { useI18n } from '@formio/react-native';

const LanguageSwitcher = () => {
  const { setLanguage } = useI18n();

  return (
    <>
      <TouchableOpacity onPress={() => setLanguage('en')}>
        <Text>English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLanguage('ar')}>
        <Text>Arabic (RTL)</Text>
      </TouchableOpacity>
    </>
  );
};
```
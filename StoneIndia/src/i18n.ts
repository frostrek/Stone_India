import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Placeholder for translation resources
// In a real app, you would load these from JSON files
const resources = {
  en: {
    translation: {
      "Home": "Home",
      "About Us": "About Us",
      "Infrastructure": "Infrastructure",
      "Packaging": "Packaging",
      "Products": "Products",
      "Projects": "Projects",
      "Blog": "Blog",
      "Contact Us": "Contact Us",
      "Get a Consultation": "Get a Consultation",
      "Call us on": "Call us on",
      "Email Address": "Email Address",
      "Read More": "Read More",
      "View Products": "View Products",
      "Our Process": "Our Process",
      "Why Choose": "Why Choose",
      "Contact": "Contact"
    }
  },
  hi: {
    translation: {
      "Home": "मुख्य पृष्ठ",
      "About Us": "हमारे बारे में",
      "Infrastructure": "बुनियादी ढांचा",
      "Packaging": "पैकेजिंग",
      "Products": "उत्पाद",
      "Projects": "परियोजनाएं",
      "Blog": "ब्लॉग",
      "Contact Us": "संपर्क करें",
      "Get a Consultation": "परामर्श लें",
      "Call us on": "हमें कॉल करें",
      "Email Address": "ईमेल पता",
      "Read More": "और पढ़ें",
      "View Products": "उत्पाद देखें",
      "Our Process": "हमारी प्रक्रिया",
      "Why Choose": "क्यों चुनें",
      "Contact": "संपर्क"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

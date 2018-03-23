import I18n from 'react-native-i18n';
import en from './locales/en';
import it from './locales/it';

I18n.fallbacks = true;

I18n.translations = {
    en,
    it,
};

export default I18n; 

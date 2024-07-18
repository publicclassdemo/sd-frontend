import { createI18n } from 'vue-i18n';
import en from './locales/en'
import cn from './locales/cn';

const messages = {
  en,
  cn
};

const i18n = createI18n({
  locale: 'cn', // 设置默认语言
  messages, // 设置翻译消息
});

export default i18n;

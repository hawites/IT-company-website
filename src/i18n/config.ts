/**
 * Multilingual config: English now, Amharic later.
 * Use locale in URLs or cookie/header for SSR.
 */
export const defaultLocale = 'en' as const;
export const supportedLocales = ['en', 'am'] as const;
export type Locale = (typeof supportedLocales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  am: 'አማርኛ',
};

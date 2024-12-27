import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'

import en from './en'
import es from './es'
import pt from './pt'

const i18n = new I18n({
  en,
  pt,
  es,
})
i18n.enableFallback = true
i18n.defaultLocale = 'en'
i18n.locale = getLocales()[0]?.languageCode ?? 'en'

export const idioma = i18n

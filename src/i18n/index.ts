import { createI18n, useI18n } from 'vue-i18n'

// 语言包
import zhCn from './lang/zh-cn'
import en from './lang/en'

const localeMessages = {
  zhCn,
  en
}

const i18n = createI18n({
  fallbackLocale: 'en',
  locale: 'en',
  messages: localeMessages
})
export default i18n

export type LocaleType = keyof typeof localeMessages

export function toggleLocale(localeValue: LocaleType) {
  const { locale } = useI18n()
  locale.value = localeValue
}

export const localeList: { value: LocaleType, label: string }[] = [
  {
    label: '简体中文',
    value: 'zhCn'
  },
  {
    label: 'English',
    value: 'en'
  }
]

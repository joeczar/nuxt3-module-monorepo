
import { computed, inject } from 'vue'

export function useTheme() {
  enum THEME_CFG {
    B2B = 'B2B',
    B2C = 'B2C',
    DEFAULT = 'B2B'
  }
  const tagExists = (tag: string) => !!THEME_CFG[tag]
  const THEME = inject(
    'THEME', {
      tag: THEME_CFG.DEFAULT
    })
  const isTheme = (themeTag: string) => {
    if (tagExists(themeTag)) {
      return themeTag === THEME.tag
    }
  }
  const isB2B = computed((): boolean => {
    return THEME.tag === 'B2B'
  })
  const isB2C = computed((): boolean => {
    return THEME.tag === 'B2C'
  })

  return {
    THEME,
    isB2B,
    isB2C,
    isTheme,
    tagExists,
    THEME_CFG
  }
}

import { StyleSheet } from 'react-native'
import theme from '@styles/AppStyles'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: theme.spacing.m,
    fontSize: theme.textVariants.title.fontSize,
    textAlign: 'center',
    color: theme.colors.text
  }
})
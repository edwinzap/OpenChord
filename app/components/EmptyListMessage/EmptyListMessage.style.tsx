import { StyleSheet } from 'react-native'
import theme from '../../AppStyles'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    fontSize: theme.textVariants.title.fontSize,
    textAlign: 'center',
    color: theme.colors.text
  }
})
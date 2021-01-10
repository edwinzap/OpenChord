import { StyleSheet, Platform } from 'react-native';
import theme from '@styles/AppStyles';

export default StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: theme.colors.headerBackground,
    borderBottomWidth: .5,
    borderBottomColor: theme.colors.shadow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: theme.colors.shadow,
    ...Platform.select({
      ios: {
        paddingLeft: undefined
      },
      android: {
        paddingLeft: 16
      }
    })
  },
  title: {
    flex: 1,
    ...Platform.select({
      ios: {
        fontFamily: undefined,
        fontWeight: '600',
        fontSize: 17,
        textAlign: 'center',
      },
      android: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
        fontSize: theme.textVariants.header.fontSize,
        textAlign: undefined,
      }
    }),
    paddingVertical: theme.spacing.s,
    color: theme.colors.text
  },
  headerRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
  }
})
import { StyleSheet } from 'react-native'
import theme from '../../AppStyles';

const HEADER_HEIGHT = 60

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  playlistNameInputContiner: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.m,
    justifyContent: 'center',
    alignItems: 'center'
  },
  playlistNameInput: {
    fontSize: theme.textVariants.title.fontSize,
    textAlign: 'center',
    borderBottomWidth: 2,
    maxWidth: 250
  },
  headerTitle: {
    fontSize: theme.textVariants.header.fontSize,
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEADER_HEIGHT
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.mainBackground,
    justifyContent: 'flex-start'
  },
  textContainer: {
    paddingTop: theme.spacing.m,
    paddingBottom: theme.spacing.m,
  },
  title: {
    fontSize: theme.textVariants.title.fontSize
  },
  subtitle: {
    fontSize: theme.textVariants.subtitle.fontSize
  }
});
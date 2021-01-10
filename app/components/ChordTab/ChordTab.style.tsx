
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tabContainter: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: 180,
    zIndex: 999
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 2,
    fontSize: 14
  },
  closeButtonText: {
    fontSize: 16
  },
  chordList: {
    backgroundColor: '#eee'
  },
  item: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemTitle: {
    fontSize: 18
  },
  itemSelected: {
    borderBottomColor: 'tomato',
    borderBottomWidth: 5
  }
});
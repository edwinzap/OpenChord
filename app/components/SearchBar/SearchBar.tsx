import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './SearchBar.style'

interface SearchBarProps extends TextInputProps {
  query: string
  inputRef?: React.RefObject<TextInput> | null | undefined
  onChangeText: (text: string) => void
  onSubmitEditing?: () => void
  placeholder: string
}
const SearchBar: FunctionComponent<SearchBarProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="magnify" size={24} color="#aaa" />
        <TextInput
          ref={props.inputRef}
          style={styles.searchText}
          keyboardType="default"
          placeholderTextColor="#aaa"
          autoFocus={false}
          autoCorrect={false}
          autoCapitalize='none'
          onSubmitEditing={props.onSubmitEditing}
          value={props.query}
          {...props}
        />
      </View>
    </View>
  );
}
export default SearchBar

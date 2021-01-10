import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import { View, TouchableOpacity, Modal, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { ErrorText, PrimaryButton } from "@components";
import styles from './TextInputModal.style'


interface TextInputModalProps {
  enabled: boolean
  initialValue?: string
  placeholder?: string
  error?: string | null
  submitButtonTitle?: string
  value?: string
  onChange?: (name: string) => void
  onDismiss: () => void
  onSubmit: (name: string) => void
}
const TextInputModal: FunctionComponent<TextInputModalProps> = (props) => {
  const {
    enabled,
    initialValue = "",
    placeholder,
    onDismiss,
    error,
    onSubmit,
    submitButtonTitle = 'OK',
    onChange
  } = props
  const [value, setValue] = useState(initialValue)
  const textInput = useRef<TextInput>(null)
  useEffect(() => {
    if (enabled && textInput.current) {
      setTimeout(() => textInput.current?.focus(), 100)
    }
  }, [enabled])
  function onChangeText(value: string) {
    setValue(value)
    if (onChange)
      onChange(value)
  }
  if (!enabled) return null

  return (
    <Modal transparent onDismiss={onDismiss}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.outsideContainer} onPress={onDismiss} />
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'} contentContainerStyle={styles.backgroundOverlayer}>
          <TextInput style={styles.input} ref={textInput} placeholder={placeholder} onChangeText={onChangeText} value={props.value} />
          <ErrorText>{error}</ErrorText>
          <PrimaryButton style={styles.button} onPress={() => onSubmit(value)} title={submitButtonTitle} />
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}
export default TextInputModal


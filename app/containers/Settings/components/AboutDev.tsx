import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import LanguageContext from '@languages/LanguageContext'
import styles from "./AboutDev.style";

const AboutDev = () => {
  const { t } = useContext(LanguageContext)

  async function goToDevURL() {
    try {
      await Linking.openURL('https://github.com/artutra')
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.developpedBy}>{t('developed_by')} </Text>
      <TouchableOpacity onPress={goToDevURL} style={styles.devButton}>
        <Text style={styles.devName}>Artur Miranda</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AboutDev
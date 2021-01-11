import 'react-native-gesture-handler';
import React, { useContext, useEffect } from "react";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from '@navigation/AppNavigation'
import LanguageContext, { LanguageProvider } from "@languages/LanguageContext";
import { GlobalSettings } from "@db/GlobalSettings";

import theme from '@styles/AppStyles'

const LoadLanguage = () => {
  const { changeLanguage } = useContext(LanguageContext)
  useEffect(() => {
    let { language } = GlobalSettings.get()
    changeLanguage(language)
  }, [])
  return null
}

export default class App extends React.Component {
  render() {
    return (
      <LanguageProvider>
        <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.headerBackground} />
        <LoadLanguage />
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </LanguageProvider>
    );
  }
}
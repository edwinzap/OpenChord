import React, { useState, useEffect, FunctionComponent, useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Song, Artist } from '@db'
import { TouchableIcon } from "@components";
import ChordSheetJS from 'chordsheetjs'
import { RootStackParamList } from "@navigation/AppNavigation";
import LanguageContext from "@languages/LanguageContext";
import styles from './SongEdit.style'

type SongEditScreenRouteProp = RouteProp<RootStackParamList, 'SongEdit'>
type SongEditScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SongEdit'
>
type Props = {
  route: SongEditScreenRouteProp
  navigation: SongEditScreenNavigationProp;
}
const SongEdit: FunctionComponent<Props> = (props) => {
  const { navigation } = props
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [content, setContent] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [mode, setMode] = useState<'CHORD_PRO' | 'CHORD_SHEET'>('CHORD_PRO')
  const { t } = useContext(LanguageContext)

  function removeMetaTags(text: string) {
    text = text.replace(/{title:[^}]+}\n?/g, '')
    text = text.replace(/{t:[^}]+}\n?/g, '')
    text = text.replace(/{artist:[^}]+}\n?/g, '')
    text = text.replace(/{a:[^}]+}\n?/g, '')
    return text
  }
  useEffect(() => {
    let id = props.route.params?.id
    if (id != null) {
      let song = Song.getById(id)!
      setTitle(song.title)
      setArtist(song.artist.name)
      setContent(removeMetaTags(song.content))
    }
  }, [])

  function saveSong() {
    if (title.trim() == '') return setError(t('invalid_title'))
    if (artist.trim() == '') return setError(t('invalid_artist'))
    if (content.trim() == '') return setError(t('invalid_content'))
    let artistName = artist.trim()
    let songTitle = title.trim()
    let chordPro = content
    if (mode == 'CHORD_SHEET') {
      const formatter = new ChordSheetJS.ChordProFormatter();
      let chordSheetSong = new ChordSheetJS.ChordSheetParser({ preserveWhitespace: false }).parse(content)
      chordPro = formatter.format(chordSheetSong)
    }
    let songId = props.route.params?.id
    let artistDb: Artist | undefined = Artist.getByName(artistName)
    if (artistDb == null) {
      artistDb = Artist.create(artistName)
    }
    if (songId) {
      Song.update(songId, artistDb, songTitle, chordPro)
    } else {
      let song = Song.create(artistDb, songTitle, chordPro)
      songId = song.id
    }
    props.navigation.replace('SongView', { id: songId, title: songTitle })
  }

  function switchToChordPro() {
    let song = new ChordSheetJS.ChordSheetParser({ preserveWhitespace: false }).parse(content)
    let chordPro = new ChordSheetJS.ChordProFormatter().format(song)
    setContent(chordPro)
    setMode('CHORD_PRO')
  }
  function switchToChordSheet() {
    let song = new ChordSheetJS.ChordProParser().parse(content)
    let plainText = new ChordSheetJS.TextFormatter().format(song)
    setContent(plainText)
    setMode('CHORD_SHEET')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <TouchableIcon onPress={saveSong} name="content-save" />,
    });
  }, [navigation, title, content, artist]);

  const contentPlaceholder = mode == 'CHORD_PRO' ?
    "You can edit any song here\n" +
    "U[C]sing the [Dm]chordPro format[G]\n\n\n" :
    "You can edit any song here\n" +
    " C              Dm          G\n" +
    "Using the chord sheet format\n\n\n"

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardDismissMode="none"
    >
      <KeyboardAvoidingView>
        {error != null && <Text style={{ color: 'red' }}>{error}</Text>}
        <TextInput
          style={styles.input}
          placeholder={t('song_title')}
          autoFocus={false}
          autoCorrect={false}
          autoCapitalize='words'
          onChangeText={setTitle}
          value={title}
        />
        <TextInput
          style={styles.input}
          placeholder={t('artist_name')}
          autoFocus={false}
          autoCorrect={false}
          autoCapitalize='words'
          onChangeText={setArtist}
          value={artist}
        />
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={mode == 'CHORD_PRO' ? styles.tabActive : styles.tabInactive}
            onPress={switchToChordPro} disabled={mode == 'CHORD_PRO'}>
            <Text>ChordPro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={mode == 'CHORD_SHEET' ? styles.tabActive : styles.tabInactive}
            onPress={switchToChordSheet} disabled={mode == 'CHORD_SHEET'}>
            <Text>{t('chords_over_lyrics')}</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          textAlignVertical="top"
          style={styles.content}
          placeholder={contentPlaceholder}
          numberOfLines={4}
          placeholderTextColor="#aaa" //TODO: set it in the style file
          multiline
          autoFocus={false}
          autoCorrect={false}
          autoCapitalize='sentences'
          onChangeText={setContent}
          value={content}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default SongEdit
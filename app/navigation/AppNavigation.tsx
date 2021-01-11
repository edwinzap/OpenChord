import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import ArtistList from "@containers/artists/ArtistList/ArtistList";
import ArtistView from '@containers/artists/ArtistView/ArtistView';
import SongView from '@containers/songs/SongView/SongView';
import SongList from '@containers/songs/SongList/SongList';
import { TabBarIcon } from '@components';
import OnlineSearch from '@containers/online/OnlineSearch/OnlineSearch';
import SongPreview from '@containers/songs/SongPreview/SongPreview';
import OnlineArtistView from '@containers/online/OnlineArtistView/OnlineArtistView';
import SongEdit from '@containers/songs/SongEdit/SongEdit';
import PlaylistList from '@containers/playlist/PlaylistList/PlaylistList';
import PlaylistView from '@containers/playlist/PlaylistView/PlaylistView';
import PlaylistAddSongs from '@containers/playlist/PlaylistAddSong/PlaylistAddSongs';
import PlaylistEdit from '@containers/playlist/PlaylistEdit/PlaylistEdit';
import Settings from '@containers/Settings';
import FontSizeSelect from '@containers/Settings/FontSizeSelect';
import LanguageContext from '@languages/LanguageContext';
import theme from "@styles/AppStyles";

export type SettingsStackParamList = {
  Settings: undefined;
  FontSizeSelect: undefined;
};
const SettingsStack = createStackNavigator<SettingsStackParamList>();
const SettingsTab = () => {
  const { t } = useContext(LanguageContext)
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" options={{ title: t('settings') }} component={Settings} />
      <SettingsStack.Screen name="FontSizeSelect" options={{ title: t('text_size') }} component={FontSizeSelect} />
    </SettingsStack.Navigator>
  )
}
export type MainTabParamList = {
  PlaylistList: undefined
  ArtistList: undefined
  SongList: undefined
  OnlineSearch: undefined
  Settings: undefined
}
const Tab = createBottomTabNavigator<MainTabParamList>();
const MainTab = () => {
  const { t } = useContext(LanguageContext)
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.activeTint,
        inactiveTintColor: theme.colors.text,
        style: { backgroundColor: theme.colors.headerBackground, },
        labelStyle: { paddingHorizontal: 1 }
      }}>
      <Tab.Screen
        name="SongList"
        options={{ title: t('songs'), tabBarIcon: (props) => <TabBarIcon {...props} name="format-list-bulleted-square" /> }}
        component={SongList} />
      <Tab.Screen
        name="ArtistList"
        options={{ title: t('artists'), tabBarIcon: (props) => <TabBarIcon {...props} name="artist" /> }}
        component={ArtistList} />
      <Tab.Screen
        name="PlaylistList"
        options={{ title: t('playlists'), tabBarIcon: (props) => <TabBarIcon {...props} name="playlist-music" /> }}
        component={PlaylistList} />
      <Tab.Screen
        name="OnlineSearch"
        options={{ title: t('online_search'), tabBarIcon: (props) => <TabBarIcon {...props} name="magnify" /> }}
        component={OnlineSearch} />
      <Tab.Screen
        name="Settings"
        options={{ title: t('settings'), tabBarIcon: (props) => <TabBarIcon {...props} name="settings" /> }}
        component={SettingsTab} />
    </Tab.Navigator>
  )
}

export type RootStackParamList = {
  MainTab: undefined
  OnlineArtistView: { serviceName: string, path: string, title: string }
  SongPreview: { serviceName: string, path: string }
  ArtistView: { id: string, title: string }
  SongView: { id: string, title: string }
  SongEdit: undefined | { id: string }
  PlaylistView: { id: string, title: string }
  PlaylistAddSongs: { id: string }
  PlaylistEdit: { id: string },
}
const RootStack = createStackNavigator<RootStackParamList>()
const AppNavigation = () => {
  const { t } = useContext(LanguageContext)
  return (
    <RootStack.Navigator screenOptions={{ cardStyle: { backgroundColor: theme.colors.mainBackground, shadowColor: '#00000000' } }}>
      <RootStack.Screen name="MainTab" component={MainTab} options={{ headerShown: false, title: t('home') }} />
      <RootStack.Screen
        name="OnlineArtistView"
        component={OnlineArtistView}
        options={({ route }) => ({ title: route.params.title })} />
      <RootStack.Screen
        name="SongPreview"
        component={SongPreview}
        options={{ title: t('preview') }} />
      <RootStack.Screen
        name="ArtistView"
        component={ArtistView}
        options={({ route }) => ({ title: route.params.title })} />
      <RootStack.Screen
        name="SongView"
        component={SongView}
        options={({ route }) => ({ title: route.params.title })} />
      <RootStack.Screen
        name="SongEdit"
        component={SongEdit} />
      <RootStack.Screen
        name="PlaylistView"
        component={PlaylistView}
        options={({ route }) => ({ title: route.params.title })} />
      <RootStack.Screen
        name="PlaylistAddSongs"
        component={PlaylistAddSongs}
        options={{ title: t('add_songs') }} />
      <RootStack.Screen
        name="PlaylistEdit"
        component={PlaylistEdit}
        options={{ headerShown: false }} />
    </RootStack.Navigator>
  )
}
export default AppNavigation;

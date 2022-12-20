import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import codePush from 'react-native-code-push';

let App: () => React$Node = () => {
  let codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.ON_NEXT_RESUME,
  };
  App = codePush(codePushOptions)(App);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          ) */}
          <View style={styles.body}>
            {/* <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View> */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Hello PepsiCo!</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Welcome DPS world</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                This application will work in mobile and web at once
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

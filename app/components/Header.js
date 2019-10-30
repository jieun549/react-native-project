// app/components/Header.js

import React from 'react';
import {Text,View,StyleSheet} from 'react-native'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>React-Native</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop:70,
    marginBottom:40
  },
  headerText: {
    fontSize: 26,
    fontWeight: '600',
    color:'#55FF55'
  }
})

export default Header;
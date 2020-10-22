import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useSelector } from 'react-redux'

const MainScreen = (props) => {
  const greeting = useSelector(state => state.mainPageGreeting)
  return (
    <View style={styles.container}>
      <Text></Text>
      <Button 
        title="Press me!"
        onPress={() => props.navigation.navigate("Another page", {customParameter: "Hellooo Thomas"})}>
      </Button>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

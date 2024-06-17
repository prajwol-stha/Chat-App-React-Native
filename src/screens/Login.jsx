import { StyleSheet, Text, View ,Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'

const Login = () => {
    const navigation=useNavigation();
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <TouchableOpacity onPress={()=>navigation.navigate('Homescreen')}>
        <Text style={tw`text-2xl`}>
            Loginasd
        </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})



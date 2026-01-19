import { StyleSheet, Text, View, Image } from 'react-native';
import { s } from 'react-native-size-matters';
import React from 'react'

const UserAvatar = () => {
  return (
    <Image 
    source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOy5z90iLbiRND-3MHN7sCb7pV45Db0wY9g&s"}}
    style={styles.avatar}/>
  )
}

export default UserAvatar

const styles = StyleSheet.create({
    avatar: {
        height: s(32),
        width: s(32),
        borderRadius: s(16)
    }
})

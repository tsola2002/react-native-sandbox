import { View, Text, Animated } from 'react-native'
import {React, useRef,  useEffect } from 'react'

const SlideBox = () => {
    const position = useRef(new Animated.Value(-200)).current;


    useEffect(() => {
        Animated.timing(position, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

  return (
      <Animated.View
        style={{
              transform: [{ translateX: position }],
                width: 100,
                height: 100,
                backgroundColor: 'red',
        }}
      /> 
  )
}

export default SlideBox
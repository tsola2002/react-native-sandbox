import { View, Text, Animated } from 'react-native'
import  { React, useRef, useEffect } from 'react'

const FadeInBox = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    
    useEffect(() => { 
        Animated.timing(opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, []);

  return (
    <Animated.View 
        style={{ 
              opacity,
              width: 200,
              height: 200,
              backgroundColor: 'blue',
          }}>
      <Text>FadeInBox</Text>
    </Animated.View>
  )
}

export default FadeInBox
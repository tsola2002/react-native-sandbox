import React from 'react';
import { Text, View } from 'react-native';

const box = (size) => ({
  width: size,
  height: size,
  alignItems: 'center',
  justifyContent: 'center',
});

/**
 * Dependency-free icon set. Shapes are drawn with plain Views so the project
 * keeps working without any icon font or SVG library.
 */
export default function Icon({ name, size = 22, color = '#fff' }) {
  const t = Math.max(1.6, size * 0.095);

  if (name === 'heart' || name === 'star') {
    return (
      <Text
        allowFontScaling={false}
        style={{
          fontSize: name === 'star' ? size * 0.92 : size * 0.86,
          lineHeight: size,
          color,
          includeFontPadding: false,
          textAlign: 'center',
        }}
      >
        {name === 'star' ? '\u2605' : '\u2665'}
      </Text>
    );
  }

  if (name === 'home') {
    return (
      <View style={box(size)}>
        <View
          style={{
            position: 'absolute',
            top: size * 0.07,
            width: size * 0.5,
            height: size * 0.5,
            borderRadius: size * 0.08,
            backgroundColor: color,
            transform: [{ rotate: '45deg' }],
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: size * 0.1,
            width: size * 0.64,
            height: size * 0.44,
            backgroundColor: color,
            borderBottomLeftRadius: size * 0.08,
            borderBottomRightRadius: size * 0.08,
          }}
        />
      </View>
    );
  }

  if (name === 'search') {
    return (
      <View style={box(size)}>
        <View
          style={{
            position: 'absolute',
            top: size * 0.08,
            left: size * 0.08,
            width: size * 0.6,
            height: size * 0.6,
            borderRadius: size * 0.3,
            borderWidth: t,
            borderColor: color,
          }}
        />
        <View
          style={{
            position: 'absolute',
            right: size * 0.04,
            bottom: size * 0.16,
            width: size * 0.32,
            height: t,
            borderRadius: t,
            backgroundColor: color,
            transform: [{ rotate: '45deg' }],
          }}
        />
      </View>
    );
  }

  if (name === 'user') {
    return (
      <View style={box(size)}>
        <View
          style={{
            position: 'absolute',
            top: size * 0.1,
            width: size * 0.34,
            height: size * 0.34,
            borderRadius: size * 0.17,
            backgroundColor: color,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: size * 0.1,
            width: size * 0.68,
            height: size * 0.34,
            borderTopLeftRadius: size * 0.34,
            borderTopRightRadius: size * 0.34,
            backgroundColor: color,
          }}
        />
      </View>
    );
  }

  if (
    name === 'chevron-right' ||
    name === 'chevron-left' ||
    name === 'chevron-down'
  ) {
    const rotate =
      name === 'chevron-left'
        ? '-135deg'
        : name === 'chevron-down'
        ? '135deg'
        : '45deg';
    return (
      <View style={box(size)}>
        <View
          style={{
            width: size * 0.38,
            height: size * 0.38,
            borderTopWidth: t,
            borderRightWidth: t,
            borderColor: color,
            transform: [{ rotate }],
          }}
        />
      </View>
    );
  }

  if (name === 'close') {
    return (
      <View style={box(size)}>
        <View
          style={{
            position: 'absolute',
            width: size * 0.58,
            height: t,
            borderRadius: t,
            backgroundColor: color,
            transform: [{ rotate: '45deg' }],
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: size * 0.58,
            height: t,
            borderRadius: t,
            backgroundColor: color,
            transform: [{ rotate: '-45deg' }],
          }}
        />
      </View>
    );
  }

  if (name === 'filter') {
    return (
      <View style={box(size)}>
        {[0.24, 0.5, 0.76].map((top, index) => (
          <View
            key={top}
            style={{
              position: 'absolute',
              top: size * top,
              width: size * 0.74,
              height: t,
              borderRadius: t,
              backgroundColor: color,
            }}
          >
            <View
              style={{
                position: 'absolute',
                left: size * [0.5, 0.2, 0.56][index],
                top: -t * 1.5,
                width: t * 4,
                height: t * 4,
                borderRadius: t * 2,
                backgroundColor: color,
              }}
            />
          </View>
        ))}
      </View>
    );
  }

  if (name === 'location') {
    return (
      <View style={box(size)}>
        <View
          style={{
            width: size * 0.44,
            height: size * 0.44,
            borderRadius: size * 0.22,
            borderWidth: t,
            borderColor: color,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: size * 0.18,
            width: size * 0.3,
            height: size * 0.3,
            borderBottomWidth: t,
            borderRightWidth: t,
            borderColor: color,
            transform: [{ rotate: '45deg' }],
          }}
        />
      </View>
    );
  }

  if (name === 'check') {
    return (
      <View style={box(size)}>
        <View
          style={{
            width: size * 0.42,
            height: size * 0.22,
            borderLeftWidth: t,
            borderBottomWidth: t,
            borderColor: color,
            transform: [{ rotate: '-45deg' }],
            marginTop: -size * 0.08,
          }}
        />
      </View>
    );
  }

  return null;
}

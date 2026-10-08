import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        height: 120,
        padding: 8
    },
    col: {
        flex: 1,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        padding: 8
    },
    col1: { backgroundColor: '#21bccd' },
    col2: { backgroundColor: '#b9d70d' },
    col3: {backgroundColor: '#e909b4'}
});


import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const ContactCard = ({ contact }) => {
  const isAddButton = contact.icon === 'plus';

  return (
    <View style={styles.container}>
      <View style={[styles.avatarContainer, isAddButton && styles.addButton]}>
        {isAddButton ? (
          <Text style={styles.plusIcon}>+</Text>
        ) : (
          <Image source={contact.image} style={styles.avatar} />
        )}
      </View>
      <Text style={styles.name}>{contact.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 20,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#b8a4d1',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  plusIcon: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.white,
  },
  name: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text,
  },
});

export default ContactCard;

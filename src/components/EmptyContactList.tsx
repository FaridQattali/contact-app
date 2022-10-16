import React from 'react';
import {View, StyleSheet} from 'react-native';

import {EmptyIcon} from './icons';
import {Text} from '.';

const EmptyContactList = () => {
  return (
    <View style={styles.container}>
      <EmptyIcon />
      <View style={styles.emptyTxtContainer}>
        <Text fontSize={18} fontWeight="400">
          چیزی یافت نشد
        </Text>
      </View>
    </View>
  );
};

export default EmptyContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  emptyTxtContainer: {
    paddingBottom: '100%',
  },
});

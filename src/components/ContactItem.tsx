import React from 'react';
import {View, TouchableWithoutFeedback, Image, StyleSheet} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {useToast} from 'react-native-toast-notifications';

import {CopyIcon} from '../components/icons';
import {Text} from '../components';

type Props = {
  firstname: string;
  lastname: string;
  position: string;
  phone: string;
  image: string | number;
};

const ContactItem = ({firstname, lastname, position, phone, image}: Props) => {
  const toast = useToast();

  const onCopyPress = async () => {
    await Clipboard.setString(phone);
    toast.show('کپی شد', {
      duration: 1000,
    });
  };

  return (
    <TouchableWithoutFeedback>
      <View style={[styles.row, styles.container]}>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <View>
            <View>
              <Text fontSize={14}>
                {firstname} {lastname} ({position})
              </Text>
            </View>
            <Text fontSize={13}>{phone}</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={onCopyPress}>
          <View>
            <CopyIcon />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#9FD5E144',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  imageContainer: {
    borderColor: '#0195B5',
    borderWidth: 2,
    borderRadius: 1000,
    marginRight: 10,
  },
  image: {
    width: 47,
    height: 47,
    borderRadius: 1000,
  },
});

export default ContactItem;

import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Linking,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {ContactItem, ContactListHeader, EmptyContactList} from '../components';
import data from '../data/contacts.json';
import {PhoneIcon, SmsIcon} from '../components/icons';

const ContactList = () => {
  const [contacts, setContacts] = React.useState<{}[]>([]);
  const [openedRow, setOpenedRow] = React.useState<string | null>(null);
  const [searchTerm, setSearchTerm] = React.useState<string | null>('');

  React.useEffect(() => {
    if (searchTerm) {
      const filteredContacts = data.filter(
        contact =>
          contact.firstname.includes(searchTerm) ||
          contact.lastname.includes(searchTerm) ||
          contact.phone.includes(searchTerm),
      );
      setContacts(filteredContacts);
    } else {
      setContacts(data);
    }
  }, [searchTerm]);

  const onPhonePress = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const onSmsPress = (phone: string) => {
    Linking.openURL(`sms:${phone}`);
  };

  const onContactSearch = (text: string) => {
    setSearchTerm(text);
  };

  const onResetPress = () => {
    setSearchTerm('');
  };

  return (
    <View>
      <SwipeListView
        data={contacts}
        keyExtractor={(item: any) => item._id.toString()}
        leftOpenValue={110}
        rightOpenValue={0}
        onRowOpen={rowKey => setOpenedRow(rowKey)}
        onRowClose={() => setOpenedRow(null)}
        closeOnRowPress
        closeOnRowBeginSwipe
        disableLeftSwipe
        swipeGestureBegan={() => setOpenedRow(null)}
        ListEmptyComponent={EmptyContactList}
        ListHeaderComponent={
          <ContactListHeader
            onSearch={onContactSearch}
            searchTerm={searchTerm}
            onReset={onResetPress}
          />
        }
        renderItem={(data: {item: any}, rowMap) => (
          <ContactItem
            firstname={data.item.firstname}
            lastname={data.item.lastname}
            phone={data.item.phone}
            image={data.item.image}
          />
        )}
        renderHiddenItem={(data: {item: any}, rowMap) => {
          if (data.item._id != openedRow) {
            return <View></View>;
          }

          return (
            <View style={styles.rowBack}>
              <TouchableWithoutFeedback
                onPress={() => onSmsPress(data.item.phone)}>
                <View style={[styles.swipeActionBtn, {marginLeft: 10}]}>
                  <SmsIcon />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => onPhonePress(data.item.phone)}>
                <View style={styles.swipeActionBtn}>
                  <PhoneIcon />
                </View>
              </TouchableWithoutFeedback>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row-reverse',
    paddingLeft: 15,
  },
  swipeActionBtn: {
    backgroundColor: '#9FD5E144',
    padding: 8,
    borderRadius: 8,
  },
});

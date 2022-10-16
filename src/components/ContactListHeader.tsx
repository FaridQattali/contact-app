import React from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import {Text} from '.';
import {SearchIcon, CrossIcon} from './icons';

type Props = {
  searchTerm: string | null;
  onSearch: (text: string) => void;
  onReset: () => void;
};

const ContactListHeader = ({searchTerm, onSearch, onReset}: Props) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View>
      <Text
        fontFamily="DimaFantasy"
        fontWeight="400"
        fontSize={30}
        textAlign="center"
        lineHeight={30}
        color="#0195B5">
        کانتکت یاب
      </Text>
      <View
        style={[
          styles.searchBoxContainer,
          {borderColor: isFocused ? '#0195B5' : 'transparent', borderWidth: 1},
        ]}>
        <View>
          <SearchIcon />
        </View>
        <TextInput
          placeholder="مخاطب مورد نظرت رو پیدا کن!"
          value={searchTerm}
          onChangeText={onSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[styles.searchInput]}
        />
        {searchTerm?.length > 0 && (
          <TouchableWithoutFeedback onPress={onReset}>
            <View>
              <CrossIcon />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};

export default ContactListHeader;

const styles = StyleSheet.create({
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#9FD5E144',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  searchInput: {
    width: '80%',
    marginHorizontal: 10,
    fontFamily: 'IRANSans',
    fontSize: 12,
    lineHeight: 19,
  },
});

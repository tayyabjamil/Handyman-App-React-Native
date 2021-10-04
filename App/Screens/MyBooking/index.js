/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';

import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/user';
import Header from '../../Components/Header';
import { BLACK, GREY, ORANGE, WHITE } from '../../helper/Color';
import { CommonActions } from '@react-navigation/native';
import { FONT, SCREEN } from '../../helper/Constant';

export default class MyBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    }
  }

  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          headerText="My Services"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.mainView}>
            <View style={{ height: 50, width: SCREEN.width, justifyContent: 'center', paddingTop: 15, }}>
              <FlatList horizontal
                keyExtractor={(item, index) => index.toString()}
                data={['All', 'Ongoing', 'Completed', 'History', 'Scheduled']} showsHorizontalScrollIndicator={false} renderItem={(item, index) =>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => this.setState({ selectedIndex: item.index })}
                    style={{
                      height: 35, paddingHorizontal: 10, marginHorizontal: 10, justifyContent: 'center', borderRadius: 5,
                      backgroundColor: this.state.selectedIndex === item.index ? ORANGE.light : '#FFFAF6'
                    }}>
                    <Text style={{ fontSize: 11, fontFamily: FONT.Popins.regular, color: this.state.selectedIndex === item.index ? 'white' : 'black' }}>{item.item}</Text>
                  </TouchableOpacity>} />
            </View>
            <View style={{ flex: 1, paddingBottom: 10 }}>
              <FlatList
                data={['Electrician', 'Handyman', 'Carpenter']}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item, index) => <View style={{
                  paddingTop: 15, paddingBottom: 18, borderRadius: 10, alignSelf: 'center', width: SCREEN.width - 30,
                  backgroundColor: WHITE.dark, borderWidth: 0.3, borderColor: 'black', borderRadius: 10, marginTop: 20
                }}>
                  <View style={{ height: 138, width: '90%', flexDirection: 'row', alignSelf: 'center' }}>
                    <View style={{ height: 138, width: 87, backgroundColor: '#FDF3E9', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}></View>
                    <View style={{ flex: 1, paddingLeft: 20 }}>
                      <Text style={{ fontSize: 12, fontFamily: FONT.Popins.medium }}>Ash</Text>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontFamily: FONT.Popins.regular, fontSize: 10, color: '#777777' }}>
                          Service Fee
                        </Text>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                          <Text style={{ fontSize: 12, fontFamily: FONT.Popins.medium }}>300 RS.</Text>
                        </View>
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontFamily: FONT.Popins.regular, fontSize: 10, color: '#777777' }}>
                          Tax
                        </Text>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                          <Text style={{ fontSize: 12, fontFamily: FONT.Popins.medium }}>30 RS.</Text>
                        </View>
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontFamily: FONT.Popins.regular, fontSize: 10, color: '#777777' }}>
                          Total
                        </Text>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                          <Text style={{ fontSize: 12, fontFamily: FONT.Popins.medium }}>300 RS.</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', marginTop: 10}}>
                   <View style={{width: 87, justifyContent: 'center', }}>
                     <Text style={{fontSize: 12, fontFamily: FONT.Popins.medium, color: ORANGE.dark}}>More Info</Text>
                   </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                      <Text style={{ fontFamily: FONT.Popins.regular, fontSize: 10, color: '#777777' }}>
                        Paid By
                        </Text>
                      <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 12, fontFamily: FONT.Popins.medium, color: ORANGE.light }}>Cash</Text>
                      </View>
                    </View>
                  </View>
                </View>} />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor: ORANGE.dark,
  },
  mainView: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: WHITE.btntxtColor,
  },
  log: {
    height: 100,
    width: 100,
    borderRadius: 45,
    alignSelf: 'center',
  },
  shadowView: {
    width: '100%',
    backgroundColor: WHITE.btntxtColor,
    shadowColor: GREY.light,
    justifyContent: 'space-between',
    shadowOffset: {
      width: -2,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginTop: 29,
    paddingHorizontal: 15,
    paddingTop: 13,
    borderRadius: 10,
  },
  ItemView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderColor: GREY.Lightborder,
    paddingBottom: 20,
    marginBottom: 15,
  },
  IconSize: {
    width: 14,
    height: 14,
    marginRight: 13.8,
  },
  boldBlack: {
    fontFamily: FONT.Popins.bold,
    fontSize: 21,
    color: BLACK.dark,
    marginTop: 19,
  },
  mediumBlack: {
    fontFamily: FONT.Popins.medium,
    fontSize: 14,
    color: BLACK.dark,
  },
  SignInBtn: {
    width: '90%',
    height: 42,
    backgroundColor: ORANGE.dark,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: ORANGE.dark,
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 35,
  },
  semiBoldWhite: {
    fontFamily: FONT.Popins.semi_bold,
    fontSize: 14,
    color: WHITE.btntxtColor,
  },
  blackRegular: {
    fontFamily: FONT.Popins.regular,
    fontSize: 12,
    color: BLACK.dark,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  mediusGrey: {
    fontFamily: FONT.Popins.medium,
    fontSize: 12,
    color: GREY.extraLight,
    textAlign: 'center',
  },
  ValueTxt: {
    fontFamily: FONT.Popins.regular,
    fontSize: 14,
    color: GREY.extraLight,
  },
});

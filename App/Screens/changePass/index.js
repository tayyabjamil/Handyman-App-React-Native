import React, {Component} from 'react';
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

import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import Header from '../../Components/Header';
import {BLACK, GREY, ORANGE, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secure: true,
    };
  }
  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          leftIcon={require('../../assets/back_white.png')}
          leftPress={() => this.props.navigation.goBack()}
          headerText="Change Password"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View style={[styles.LoginView, {marginTop: 43}]}>
              <Text style={styles.mediumBlack}>Current Password</Text>
              <View style={styles.borderLine} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{fontSize: 14}}
                  secureTextEntry={this.state.secure}
                  placeholder={'*********'}
                />
                <TouchableOpacity
                  onPress={() => this.setState({secure: !this.state.secure})}>
                  <Image source={require('../../assets/invisible.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.LoginView]}>
              <Text style={styles.mediumBlack}>New Password</Text>
              <View style={styles.borderLine} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{fontSize: 14}}
                  secureTextEntry={this.state.secure}
                  placeholder={'*********'}
                />
                <TouchableOpacity
                  onPress={() => this.setState({secure: !this.state.secure})}>
                  <Image source={require('../../assets/invisible.png')} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.LoginView]}>
              <Text style={styles.mediumBlack}>Confirm Password</Text>
              <View style={styles.borderLine} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{fontSize: 14}}
                  secureTextEntry={this.state.secure}
                  placeholder={'*********'}
                />
                <TouchableOpacity
                  onPress={() => this.setState({secure: !this.state.secure})}>
                  <Image source={require('../../assets/invisible.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1, justifyContent:'flex-end'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.SignInBtn}>
              <Text style={[styles.semiBoldWhite]}>Edit Profile</Text>
            </TouchableOpacity>
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
    backgroundColor: WHITE.btntxtColor,
  },
  borderLine: {
    borderBottomWidth: 0.35,
    borderColor: GREY.Lightborder,
    width: '100%',
  },
  mainView: {
    flex: 1,
    width: SCREEN.width - 49,
    alignSelf: 'center',
  },
  log: {
    height: 100,
    width: 100,
    borderRadius: 45,
    alignSelf: 'center',
  },
  LoginView: {
    width: '100%',
    height: 91,
    backgroundColor: WHITE.btntxtColor,
    shadowColor: GREY.light,
    justifyContent: 'space-between',
    shadowOffset: {
      width: -2,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginTop: 18,
    paddingHorizontal: 15,
    paddingBottom: 16,
    paddingTop: 13,
    borderRadius: 10,
  },
  BorderView: {
    height: 22,
    width: 1,
    backgroundColor: GREY.Lightborder,
    marginRight: 20,
  },
  roundView: {
    height: 51,
    width: 51,
    borderRadius: 35,
    backgroundColor: ORANGE.extraLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 19,
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
    marginBottom: 35,
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

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
} from 'react-native';

import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/user';
import Header from '../../Components/Header';
import { BLACK, GREY, ORANGE, WHITE } from '../../helper/Color';
import { FONT, SCREEN } from '../../helper/Constant';
import Loader from '../../helper/Loader';
import { OTPVerify } from '../../helper/api';

class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      phone:'',
      loading:false
    }
  
    
  }
  
async componentDidMount(){
  if(this.props.route.params){
  let phone =  this.props.route.params.phone
  this.setState({phone:phone})
  alert(phone)

}
}
  async VerifyPress() {
    this.setState({loading:true})
    dataToSend={
      phone:this.state.phone
    }
      await OTPVerify(dataToSend).then(response => {

        this.setState({loading:false})
    
        if(response.status===200){
        if(response.data.data.is_registered===false){
          this.props.navigation.navigate('SignUp',{phone:this.state.phone});
        }else{
          this.props.navigation.navigate('Home');
          
        }
        }else{
          alert(response.data.message)
        }
      });
    // const {one, two, three, four, five, six} = this.state;
    // if (
    //   one.length > 0 &&
    //   two.length > 0 &&
    //   three.length > 0 &&
    //   four.length > 0 &&
    //   five.length > 0 &&
    //   six.length > 0
    // ) {
    //   this.setState({loading: true});
    //   let code = one + two + three + four + five + six;
    //   let verify = this.props.route.params.codeVerify;
    //   try {
    //     await verify.confirm(code);
        
    //     this.props.navigation.navigate('Home');
    //   } catch (error) {
    //     Alert.alert('Invalid');
    //     console.log('Invalid code.');
    //   }
    //   this.setState({loading: false});
    // } else {
    //   Alert.alert('Please fiull all data');
    // }
  }

  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          leftIcon={require('../../assets/back_white.png')}
          leftPress={() => this.props.navigation.goBack()}
          headerText="OTP Verification"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.mainView}>
            <Image
              style={styles.log}
              source={require('../../assets/logo.png')}
            />
            <Text style={styles.boldBlack}>OTP Number</Text>
            <View style={styles.OTP_Value}>
              <TextInput placeholder={'1'} maxLength={1} style={styles.enterNumber} maxLength={1} onChangeText={(first) => {
                if (first.trim().length > 0) {
                  this.refs['second'].focus()
                }
              }} />
              <TextInput
                ref="second" placeholder={'1'} maxLength={1}  style={styles.enterNumber} onChangeText={(first) => {
                  if (first.trim().length > 0) {
                    this.refs['third'].focus()
                  }
                }} />
              <TextInput
                ref="third" placeholder={'1'} maxLength={1}  style={styles.enterNumber} onChangeText={(first) => {
                  if (first.trim().length > 0) {
                    this.refs['four'].focus()
                  }
                }} />
              <TextInput
                ref="four" placeholder={'1'} maxLength={1}  style={styles.enterNumber} />
            </View>
            <Text style={[styles.blackRegular, { marginTop: 23 }]}>
              We have sent an OTP on your mobile number Please enter the OTP to
              continue
            </Text>
            <View style={{ flex: 1, width: '100%', justifyContent: 'flex-end' }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  marginBottom: SCREEN.height * 0.09,
                }}>
                <TouchableOpacity
                  onPress={() =>
                   this.VerifyPress()
                  }
                  style={styles.SignInBtn}>
                  <Text style={[styles.semiBoldWhite]}>Verify</Text>
                </TouchableOpacity>
                <Text style={[styles.OrangeRegualr, { marginTop: 20 }]}>
                  Resend the OTP code again
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
        {this.state.loading && <Loader loading={this.state.loading} />}
   
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor: WHITE.btntxtColor,
  },
  mainView: {
    flex: 1,
    width: SCREEN.width - 100,
    alignSelf: 'center',
    alignItems: 'center',
  },
  log: {
    height: 99,
    width: 99,
    resizeMode: 'contain',
    marginTop: 36,
  },
  OTP_Value: {
    width: '95%',
    height: 74,
    backgroundColor: WHITE.btntxtColor,
    shadowColor: GREY.light,
    shadowOffset: {
      width: -2,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  enterNumber: {
    borderBottomWidth: 0.35,
    borderColor: GREY.Lightborder,
    width: 30,
    paddingBottom: 3,
    marginRight: 10,
    paddingLeft: 10,
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
  OrangeRegualr: {
    fontFamily: FONT.Popins.regular,
    fontSize: 12,
    color: ORANGE.dark,
  },
});

function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
    role: state.user.role,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    callApi: (user, access_token) =>
      dispatch(userActions.setUser({ user, access_token })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);

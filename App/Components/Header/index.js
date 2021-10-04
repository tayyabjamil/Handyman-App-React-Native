/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { FONT, isIphoneXorAbove, SCREEN } from '../../helper/Constant';

function Header({ leftPress, leftIcon, rightPress, BoldTxt, headerTextColor, backColor, headerText, rightIcon }) {
  return (
    <View
      style={{
        height: isIphoneXorAbove ? 110 : 93,
        width: SCREEN.width,
        backgroundColor: backColor,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'center'
      }}>

      { headerText && <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
        <Text style={{ fontFamily: BoldTxt ? FONT.Popins.regular : FONT.Popins.regular, fontSize: 15, color: headerTextColor }}>{headerText}</Text>
      </View>}


      {rightPress && <TouchableOpacity style={{ height: 40, width: 40, position: 'absolute', right: 21}} onPress={rightPress}>
         <Image style={{ height: 40, width: 40,resizeMode: 'contain' }} source={rightIcon} />
      </TouchableOpacity>}
      {leftPress && <TouchableOpacity style={{ height: 12, width: 12, position: 'absolute', left: 12}} onPress={leftPress}>
         <Image style={{ height: 12, width: 12, resizeMode: 'contain' }} source={leftIcon} />
      </TouchableOpacity>}
    </View>
  );
}

export default Header;

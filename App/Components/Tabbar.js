import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet ,Image} from 'react-native'
// import { GOLD } from '../helper/Color';
import { isIphoneXorAbove, SCREEN } from '../helper/Constant';




class Tabbar extends Component {

  navigateTo(routeName,index) {
    this.setState({index:index})
    this.props.navigation.navigate(routeName);
  }
  constructor(props) {
    super(props);
    this.state = {
      index:0
    };
  }

  render() {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => {this.setState({index:0}) 
        this.navigateTo(this.props.state.routes[0].name,0) }} style={[styles.item]}>
          <Image source={this.state.index === 0 ? require('../assets/home_select_tab.png') : require('../assets/home_Un_select_tab.png')}  style={{height:47,width:35, resizeMode: 'stretch'}}/>
         </TouchableOpacity>

        
        <TouchableOpacity onPress={() =>{this.setState({index:1}) 
         this.navigateTo(this.props.state.routes[1].name,1) }}  style={[styles.item,]} >
        <Image source={this.state.index === 1 ? require('../assets/booking_select.png') : require('../assets/booking_un_select.png')}  style={{height:47,width:35, resizeMode: 'stretch'}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={[styles.item, {flex: 0.25}]}>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{this.setState({index:2}) 
        this.navigateTo(this.props.state.routes[2].name,2) }}  style={[styles.item,]} >
         <Image source={this.state.index === 2 ? require('../assets/support_select.png') : require('../assets/support_un_select.png')}  style={{height:47,width:35, resizeMode: 'stretch'}}/>
        
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{this.setState({index:3}) 
         this.navigateTo(this.props.state.routes[3].name,3) }}  style={[styles.item,]}>
         <Image source={this.state.index === 3 ? require('../assets/more_select.png') : require('../assets/more_un_select.png')}  style={{height:47,width:35, resizeMode: 'stretch'}}/>
        </TouchableOpacity>
        

      </View>
    )
  }

}
const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
    backgroundColor: '#EB8924',
   
    
  },
  tabBar: {
    height: isIphoneXorAbove ? 80 : 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  text:{

  }

});
export default Tabbar;


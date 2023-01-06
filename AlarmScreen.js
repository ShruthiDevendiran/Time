import React,{Component} from 'react';
import {
View, 
Text, 
StyleSheet,
ImageBackground,
Image,
TouchableOpacity
} from 'react-native';

import HomeScreen from './HomeScreen';
import SnoozeScreen from './SnoozeScreen';
import ScheduleScreen from './ScheduleScreen';

export default class AlarmScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          alarmTime:'',
          alarmText:'',
          time:'',
          date:'',
          hours:'',
        }
    }

    getTime =()=>{
      var nd = new Date();
      var dd = nd.getDate();
      var mm = nd.getMonth() + 1;
      var yy = nd.getFullYear();
      var hr = nd.getHours();
      var min = nd.getMinutes();
      var sec = nd.getSeconds();
 
      let today= `${dd}-${mm}-${yy}`;
      let time = `${hr}:${min}:${sec}`
 
      this.setState({time:time})
      this.setState({date:today})
      this.setState({hours:hr})
 
     /* const date = new Date().toJSON().slice(0,10)
      this.setState({time:date})*/
     }
 
     componentDidMount(){
       this.getTime()
     }

    render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <View style={styles.appLogo}>
                 <Image source={require('../assets/1.png')} style={styles.logo}/>
               </View>
               <View style={styles.textContainer}>
                  <Text style={styles.text}>Ding dong</Text>
               </View>
               <View style={styles.background}>
                 <ImageBackground source={require('../assets/wall.jpg')} style={styles.BackgroundImage}/>
               </View>
               <View style={styles.alarmTimeContainer}>
                 <Text style={styles.text}>{this.state.time}</Text>
               </View>
               <View>
                 <Text style={styles.text}>{this.state.alarmText}</Text>
               </View>
               <View style={styles.stopContainer}>
                  <TouchableOpacity style={styles.stopButton} onPress={()=>{this.props.navigation.navigate("HomeScreen")}}>
                    <Text style={styles.stopText}>Stop</Text>
                  </TouchableOpacity>
                  <View style={styles.snoozeContainer}>
                     <TouchableOpacity style={styles.snoozeButton}>
                       <Text style={styles.snoozeText}>Snooze</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  appLogo:{
    right:10,
    left:30,
    top:10,
    bottom:10
 },

 logo:{
    height:200,
    width:100,
    right:700,
 },

 textContainer:{
    height:200,
    width:500,
    right:350,
    bottom:141,
 },

 text:{  
    color: "black",
   fontSize: 50,
   fontStyle:'italic',
 },
})
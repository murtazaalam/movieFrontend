import React, {useState} from 'react';
import Axios from 'axios';
import {
  StyleSheet, 
  View, 
  Text, 
  Dimensions, 
  ScrollView, 
  Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const MoviesScreen: React.FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    Axios.get('http://192.168.1.5:1234/movies', {
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        }  
    }).then((response) => {
      console.log("",response?.data, response?.status);
      
      response?.status === 200 && setData(response?.data)
    }).catch((error) => {
      console.log("erorhere",error);
    })
  },[])
  return (
    <ScrollView>
      <View style={Style.root}>
        {console.log("data==============>",data)}
          {data?.length > 0 ? data?.map((item, index) => (
          <View style={Style.cardView} key={index}>
            <View>
              <Image
                style={Style.tinyLogo}
                source={{uri: item?.image}}
              />
            </View>
            <View  style={Style.textStyleBox}>
              <View style={Style.nameBox}>
                <Text style={Style.textTitle}>Movie Name: </Text>
                <Text style={Style.textStyle}>{item?.name}</Text>
              </View>
              <View style={Style.nameBox}>
                <Text style={Style.textTitle}>Rating: </Text>
                <Text style={Style.textStyle}>{item?.rating}/5</Text>
              </View>
              <View style={Style.nameBox}>
                <Text style={Style.textTitle}>Release Date: </Text>
                <Text style={Style.textStyle}>{item?.releaseDate}</Text>
              </View>
            </View>
          </View>)):
          <View>
            <Text>No Data Available</Text>
          </View>
          }
      </View>
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  root:{
    padding: 24,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardView:{
    height: 200,
    flexGrow: 1,
    width: windowWidth - 230,
    margin: 4,
    backgroundColor: '#d3d3d3',
    borderRadius: 4,
  },
  nameBox:{
    flexDirection: 'row',
  },
  textTitle:{
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  textStyle:{
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3cb371'
  },
  tinyLogo: {
    width: '100%',
    height: 120,
    borderRadius: 4,
    marginBottom: 8
  },
  textStyleBox:{
    paddingLeft: 8,
    paddingRight: 8
  }
})

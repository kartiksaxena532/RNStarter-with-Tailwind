import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { Card, Title, Paragraph } from 'react-native-paper';

const Navbar = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let content = 'Waiting..';
  if (errorMsg) {
    content = errorMsg;
  } else if (location) {
    content = (
      <Card style={styles.card}>
        <Card.Content>
          <Title>Location Details</Title>
          <Paragraph>Latitude: {location.coords.latitude}</Paragraph>
          <Paragraph>Longitude: {location.coords.longitude}</Paragraph>
          <Paragraph>Altitude: {location.coords.altitude}</Paragraph>
          <Paragraph>Accuracy: {location.coords.accuracy}</Paragraph>
          <Paragraph>Speed: {location.coords.speed}</Paragraph>
          <Paragraph>Heading: {location.coords.heading}</Paragraph>
          <Paragraph>Timestamp: {new Date(location.timestamp).toString()}</Paragraph>
        </Card.Content>
      </Card>
    );
  }

  return (
    <View style={styles.container}>
      {typeof content === 'string' ? <Text style={styles.paragraph}>{content}</Text> : content}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default Navbar;
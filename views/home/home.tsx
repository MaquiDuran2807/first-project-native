// code: HomeScreen.tsx
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
return (
<View style={styles.container}>
  <Image
    style={styles.imageBackground}
    source={require('../../assets/1.jpg')}
  />
    <Text
        style={{
            position: 'absolute',
            top: 100,
            fontSize: 40,
            fontWeight: 'bold',
            color: 'white',
        }}
    >Home Screen</Text>

<View style={styles.button}>
    <Button
        title="Entrar"
        onPress={() => {
            navigation.navigate('Login');
        }}
    />
</View>
  
  <StatusBar style="auto" />
</View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
        imageBackground: {
        width: "100%",
        height: "100%",
    },
    button: {
        
        position: 'absolute',
        bottom: 50,
        width: 200,
        height: 50,
    }
});
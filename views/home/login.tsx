// code : Login.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const Login = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        await fetch('https://rn1nb289-9000.use2.devtunnels.ms/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        }).then((response) => response.json()).then((data) => {
            console.log('Success:', data);
            if (data.accessToken) {
                navigation.navigate('Dashboard', { userName: username });
            } else {
                alert(data.error);
            }
        }

        ).catch((error) => {
            console.error('Error:', error);
            alert("Error: " + error);
        }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={'white'}
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={'white'}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.Boton}>
                <Button title="Login" onPress={handleLogin} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#332f2c',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        color : 'white',
        
    },
    Title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    Boton: {
        width: '100%',
        marginTop: 10,
    },
});

export default Login;
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../App';




const ModalCreate: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [product, setProduct] = useState({
        Nombre: '',
        Precio: 0,
        Cantidad: 0,
        ID_categoria:0,
        // Agrega aquí otras propiedades del producto que desees editar
    });
    const handleSave =async () => {
        console.log('Producto guardado', product);
        fetch(`https://rn1nb289-9000.use2.devtunnels.ms/productos/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ producto: product}),
        }).then((response) => response.json()).then((data) => {
            console.log('Success:', data);
            navigation.goBack();
        }).catch((error) => {
            console.error('Error:', error);
        });

        // Aquí deberías implementar la lógica para guardar el producto editado
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={product.Nombre}
                onChangeText={(text) => setProduct({ ...product, Nombre: text })}
            />
            <TextInput
                style={styles.input}
                value={product.Precio.toString()}
                onChangeText={(text) => setProduct({ ...product, Precio: Number(text) })}
            />
            <TextInput
                style={styles.input}
                value={product.Cantidad.toString()}
                onChangeText={(text) => setProduct({ ...product, Cantidad: Number(text) })}
            />
            <TextInput
                style={styles.input}
                value={product.ID_categoria.toString()}
                onChangeText={(text) => setProduct({ ...product, ID_categoria: Number(text) })}
            />
            {/* Repite el TextInput para otras propiedades del producto que desees editar */}
            <Button title="Guardar" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
    },
});

export default ModalCreate;
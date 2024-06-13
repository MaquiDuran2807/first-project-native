import React,{useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { RouteProp, NavigationProp } from '@react-navigation/native';
 import { RootStackParamList } from '../../App';


type ModalEditRouteProp = RouteProp<RootStackParamList, 'ModalEdit'>;
type ModalEditNavigationProp = NavigationProp<RootStackParamList, 'ModalEdit'>;

type Props = {
    route: ModalEditRouteProp;
    navigation: ModalEditNavigationProp;
};

const ModalEdit: React.FC<Props> = ({ route, navigation }) => {
    const [product, setProduct] = useState(route.params.product);

    console.log('Producto:', product);

    

    const handleSave =async () => {
        console.log('Producto guardado', product);
        fetch(`https://rn1nb289-9000.use2.devtunnels.ms/productos/editproduct/${product.ID_Producto}`, {
            method: 'PUT',
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

export default ModalEdit;
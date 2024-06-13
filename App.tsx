// Code: App.tsx
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './views/home/home';
import Login  from './views/home/login';
import Dashboard from './views/home/dashboard';
import ModalEdit from './views/components/modalEdit';
import ModalCreate from './views/components/modalCreate';
import { Product } from './views/types/types';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Dashboard: { userName: string };
  ModalEdit: { product: Product };
  ModalCreate: undefined;
};


export default function App() {
  const Stack = createNativeStackNavigator <RootStackParamList>();
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ModalEdit" component={ModalEdit} />
        <Stack.Screen name="ModalCreate" component={ModalCreate} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import SearchScreen from './src/screens/SearchScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search' >
        <Stack.Screen name='Search' component={SearchScreen} options={{title:"Business Search",
          headerStyle:{backgroundColor:'#f4511e'},headerTitleStyle:{fontWeight:"bold"}, headerTitleAlign:"center"}}/>
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

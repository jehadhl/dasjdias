import { StatusBar } from 'expo-status-bar';
import {LogBox} from 'react-native';
import Header from './shared/Header';
import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';

//Screen
import Main from './Navigator/Main';

import {Provider} from 'react-redux'
import store from './Redux/store'

LogBox.ignoreAllLogs(true) ;

export default function App() {
  return (
    // <StripeProvider
    // publishableKey="pk_test_51LAdnHG4SMgSp4GKBkSb6pY0JP9w3ytlT57yIf6FGVxYmLoB5mfbLnS0XOYJ2T4aurd3NxIWOVsneF0jZL9ToGfM00ob3F1hVM"
    // urlScheme="your-url-scheme" 
    // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}">
      <Provider store={ store }>
        <NavigationContainer>
            <Header/>
            <Main/>
        </NavigationContainer>
      </Provider>
    // </StripeProvider>
  
  );
}

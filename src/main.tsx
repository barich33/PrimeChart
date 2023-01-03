import 'localstorage-polyfill';
import { registerRootComponent } from 'expo';
import {ThemeProvider} from './ui';
import { RootNavigator } from 'navigation';
import { useAuthStore } from 'stores/authStore';

 function App() {  
  console.log('started');
  return (
    <ThemeProvider>
         <RootNavigator />
    </ThemeProvider>
  );
}
registerRootComponent(App);
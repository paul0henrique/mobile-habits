import { StatusBar } from 'react-native';
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'

import { Loading } from './src/components/Loading';
import { Home } from './src/assets/screens/Home';

export default function App() {
  const [fontsLoadead] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontsLoadead){
    return (
      <Loading />
    );
  }
  
  return (
    <>
      <Home />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
   </>
  );
}


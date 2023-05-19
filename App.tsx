import React from 'react';
import FancyCounter from './src/screens/FancyScreen';
import BoxObjectModalScreen from './src/screens/BoxObjectModalScreen';
import { SafeAreaView, StatusBar } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      {/* <BoxObjectModalScreen /> */}
      {/* <FancyCounter /> */}
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;


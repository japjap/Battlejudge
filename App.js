import { StyleSheet, View } from 'react-native';
import Battlejudge from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Battlejudge />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

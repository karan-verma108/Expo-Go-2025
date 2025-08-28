import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link style={{ color: 'blue', backgroundColor: 'yellow' }} href='/about'>
        Go to about us page
      </Link>
    </View>
  );
}

Index.options = {
  title: 'Home Page',
};

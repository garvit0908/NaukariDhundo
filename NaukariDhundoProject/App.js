import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FetchData from './API/FetchData';

export default function App() {
  const {data,isLoading} = FetchData();
  return (
    <>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    <View>
    {
      data?.map((job) => {
        return (
          <Card
            key={job.job_id}
            title={job.title}
            content={job.description}
          />
        );
      }
      )
    }
    </View>
    </>
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

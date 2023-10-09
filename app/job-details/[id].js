import {React,useState,useEffect} from 'react'
import { Text ,View,SafeAreaView,ScrollView,ActivityIndicator,RefreshControl} from 'react-native'

import {Stack,useRouter,useSearchParams} from 'expo-router'
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";

import { COLORS, icons, SIZES } from "../../constants";

const jobDetails = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const url = 'https://jsearch.p.rapidapi.com/job-details?job_id=fFunVwyb9l4AAAAAAAAAAA%3D%3D&extended_publisher_details=false';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '63ae627465mshe17c2c73a60df7dp1e24cbjsn5fb8408a7866',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setData(data);
      // console.log("heelo")
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };


  return (
    <div>
      <SafeAreaView style={{flex :1,backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          ),
          headerTitle: "",
        }}
      />

      </SafeAreaView>
      
    </div>
  )
}

export default jobDetails

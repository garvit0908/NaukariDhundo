import {React,useState,useEffect} from 'react'
import { Text ,View,SafeAreaView,ScrollView,ActivityIndicator,RefreshControl} from 'react-native'

import {Stack,useRouter} from 'expo-router'
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";

import { COLORS, icons, SIZES } from "../../constants";



const JobDetails = () => {
  
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const tabs=["About","Qualifications","Responsibilities"]

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const url = 'https://jsearch.p.rapidapi.com/job-details?job_id=fFunVwyb9l4AAAAAAAAAAA%3D%3D&extended_publisher_details=false';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f5f4717b9emshfd49fff2aed8bd5p15b368jsn0042fa9baea7',
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

  const[activeTab,setActiveTab]=useState(tabs[2])

  const DisplayTabContent=()=>{
    switch(activeTab)
    {
         case "Qualifications":
          return(
            <Specifics
                title='Qualifications'
                points={data.data[0].job_highlights.Qualifications
                }
            />

          );

          case "About":
            return(
              <JobAbout
                 info={data.data[0].job_description}              
              />

            );
          case "Responsibilities":
            return(
              <Specifics
                title='Responsibilities'
                points={data.data[0].job_highlights.Responsibilities
                }
            />
              

            );


    }
}



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

      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (<ActivityIndicator/>):

          (<View style={{padding:SIZES.medium,paddingBottom:100}}>
          <Company 
              companyLogo={data.data[0].employer_logo}
              jobTitle={data.data[0].job_title}
              companyName={data.data[0].employer_name}
              location={data.data[0].job_country}
              />
          <JobTabs 
             tab={tabs}
             activeTab={activeTab}
             setActiveTab={setActiveTab}
          />

          {DisplayTabContent()}
          </View>)
        
      
      }


      </ScrollView>

      </SafeAreaView>
      
    </div>
  )
}

export default JobDetails

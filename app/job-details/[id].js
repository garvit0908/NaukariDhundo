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
import FetchData from '../../API/FetchData';



const JobDetails = () => {
  
  const router = useRouter();
  const {data,isLoading}=FetchData();

  const[activeTab,setActiveTab]=useState("About")

  const DisplayTabContent=()=>{
    switch(activeTab)
    {
         case "Qualifications":
          return(
            <Specifics
                title='Qualifications'
                points={data.data[0].job_highlights?.Qualifications ?? ["N/A"]}                
            />

          );

          case "About":
            return(
              <JobAbout info={data.data[0].job_description ?? "No data provided"} />

            );
          case "Responsibilities":
            return(
              <Specifics
                title='Responsibilities'
                points={data.data[0].job_highlights?.Responsibilities ?? ["N/A"]}
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
            //  tab={tabs}
             activeTab={activeTab}
             setActiveTab={setActiveTab}
          />

          {DisplayTabContent()}
          </View>)
        
      
      }


      </ScrollView>

      <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />

      </SafeAreaView>
      
    </div>
  )
}

export default JobDetails

import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';



const StatsScreen = () => {
  return (
    <ScrollView  className='p-4 pt-14'>
       <Text className='p-4 text-lg text-gray-700 text-center tpt-14' >Market Prices: Dry Maize</Text>
      <Text className='p-4 text-gray-700 text-center tpt-14' >Interactive Data Visualization to Inform Food Security</Text>

      <WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          style={{ height: 300, width: 500 }}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> Maize Production in Kenya
                    <body>
                      <div id="baseDiv">
                      
                      <iframe style="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-testing-idavr/embed/charts?id=64a9dfb3-1ed0-44e0-8922-c7b07eae8622&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
                      </div> 
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
       
        
       <Text className='p-4 text-gray-700 text-center tpt-14' >Interactive Data Visualization to Inform Food Security</Text>

      
      <WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          style={{ height: 300, width: 500 }}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> Maize Production in Kenya
                    <body>
                      <div id="baseDiv">
                      
                      <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-testing-idavr/embed/charts?id=64a9dfca-de9a-4b05-8171-063a5f9e74a9&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
                      </div> 
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
       <Text className='p-4 text-gray-700 text-center tpt-14' >Interactive Data Visualization to Inform Food Security</Text>

<WebView
    scalesPageToFit={true}
    bounces={false}
    javaScriptEnabled
    style={{ height: 300, width: 500 }}
    source={{
      html: `
            <!DOCTYPE html>
            <html>
              <head></head> Maize Production in Kenya
              <body>
                <div id="baseDiv">
                
                <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-testing-idavr/embed/charts?id=64a9df97-2925-494c-80b5-15cc0aa3e267&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
                </div> 
              </body>
            </html>
      `,
    }}
    automaticallyAdjustContentInsets={false}
  />
 <Text className='p-4 text-gray-700 text-center tpt-14' >Dry maize categories in Kenyan Market in the past 3 months</Text>

<WebView
    scalesPageToFit={true}
    bounces={false}
    javaScriptEnabled
    style={{ height: 300, width: 500 }}
    source={{
      html: `
            <!DOCTYPE html>
            <html>
              <head></head> Maize Production in Kenya
              <body>
                <div id="baseDiv">
                
                <iframe style="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-testing-idavr/embed/charts?id=64a9dfb3-1ed0-44e0-8922-c7b07eae8622&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
                </div> 
              </body>
            </html>
      `,
    }}
    automaticallyAdjustContentInsets={false}
  />
 <Text className='p-4 text-gray-700 text-center tpt-14' >Dry maize Distribution in Kenyan Market in the past 3 months</Text>

<WebView
    scalesPageToFit={true}
    bounces={false}
    javaScriptEnabled
    style={{ height: 300, width: 500 }}
    source={{
      html: `
            <!DOCTYPE html>
            <html>
              <head></head> Maize Production in Kenya
              <body>
                <div id="baseDiv">
                
                <iframe style="background: #F1F5F4;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);width: 100vw;height: 100vh;"  src="https://charts.mongodb.com/charts-testing-idavr/embed/dashboards?id=64a9dd1d-810f-4187-853a-3e040f26002f&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>
                </div> 
              </body>
            </html>
      `,
    }}
    automaticallyAdjustContentInsets={false}
  />
 
    </ScrollView>
  )
}

export default StatsScreen
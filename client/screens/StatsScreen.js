
import React from 'react'
import { ScrollView, View,  StatusBar, Dimensions, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'
import { data, contributionData, pieChartData, progressChartData } from '../data'

const screenWidth = Dimensions.get("window").width;

const StatsScreen = () => {

    const lineChartData={
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }
        ]
      }

    const PieChartDataset = [
        {
          name: "Machakos",
          population: 21500,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Kitui",
          population: 2800,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Kakamega",
          population: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Siaya",
          population: 8538000,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Kisumu",
          population: 119200,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];

    const BarChartData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };
    // each value represents a goal ring in Progress chart
const progressRingData = {
    labels: ["Dry Maize", "Rice", "Banana(Ripening)"], // optional
    data: [0.4, 0.6, 0.8]
  };


    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
      };

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        style:{
            marginVertical: 8,
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
          
      }

     const  chart2Config={
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#00AA13",
        backgroundGradientTo: "#00AA13",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }


      const graphStyle = {
                marginVertical: 8,
                ...chartConfig.style
              }
    
  return (
    <ScrollView>
        <Text>Pie Chart Market prices</Text>
<PieChart
  style={graphStyle}
  data={PieChartDataset}
  width={screenWidth}
  height={200}
  yAxisLabel="$"
  yAxisSuffix="k"
  yAxisInterval={1} // optional, defaults to 1
  chartConfig={chart2Config}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"2"}
  center={[10, 10]}
  absolute
/>
         <Text>Bar Chart Market prices</Text>
<BarChart
  style={graphStyle}
  data={BarChartData}
  width={screenWidth}
  height={260}
  yAxisLabel="$"
  yAxisSuffix="k"
  yAxisInterval={1} // optional, defaults to 1
  chartConfig={chart2Config}
  verticalLabelRotation={30}
  
/>
        
<Text>ProgressChart Market prices</Text>
<ProgressChart
  style={graphStyle}
  data={progressRingData}
  width={screenWidth}
  height={260}
  yAxisLabel="$"
  yAxisSuffix="k"
  yAxisInterval={1} // optional, defaults to 1
  strokeWidth={16}
  radius={32}
  chartConfig={chart2Config}
  hideLegend={false}
/>
<Text> Line Market prices</Text>
<LineChart
 style={graphStyle}
  data={data}
  width={screenWidth}
  height={260}
  yAxisLabel="$"
  yAxisSuffix="k"
  yAxisInterval={1} // optional, defaults to 1
  verticalLabelRotation={30}
  chartConfig={chart2Config}
  bezier
/>
<Text>Bezier Line Market prices</Text>
<LineChart
 style={graphStyle}
  data={data}
  width={screenWidth}
  height={260}
  chartConfig={chart2Config}
/>
     <View>
  <Text>Bezier Line Market prices</Text>
  <LineChart
    data={lineChartData}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={chart2Config}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
    </ScrollView>
  )
}

export default StatsScreen

// import React from 'react'
// import { ScrollView, View,  StatusBar, Dimensions, Text } from 'react-native'
// import ScrollableTabView from 'react-native-scrollable-tab-view'
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph
// } from 'react-native-chart-kit'
// import { data, contributionData, pieChartData, progressChartData } from '../data'
// import 'babel-polyfill'

// // in Expo - swipe left to see the following styling, or create your own
// const chartConfigs = [
//   {
//     backgroundColor: '#000000',
//     backgroundGradientFrom: '#1E2923',
//     backgroundGradientTo: '#08130D',
//     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#022173',
//     backgroundGradientFrom: '#022173',
//     backgroundGradientTo: '#1b3fa0',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#ffffff',
//     backgroundGradientFrom: '#ffffff',
//     backgroundGradientTo: '#ffffff',
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
//   },
//   {
//     backgroundColor: '#26872a',
//     backgroundGradientFrom: '#43a047',
//     backgroundGradientTo: '#66bb6a',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#000000',
//     backgroundGradientFrom: '#000000',
//     backgroundGradientTo: '#000000',
//     color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
//   }, {
//     backgroundColor: '#0091EA',
//     backgroundGradientFrom: '#0091EA',
//     backgroundGradientTo: '#0091EA',
//     color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
//   },
//   {
//     backgroundColor: '#e26a00',
//     backgroundGradientFrom: '#fb8c00',
//     backgroundGradientTo: '#ffa726',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#b90602',
//     backgroundGradientFrom: '#e53935',
//     backgroundGradientTo: '#ef5350',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#ff3e03',
//     backgroundGradientFrom: '#ff3e03',
//     backgroundGradientTo: '#ff3e03',
//     color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
//   }
// ]

// export default class App extends React.Component {
//   renderTabBar() {
//     return <StatusBar hidden/>
//   }
//   render() {
//     const width = Dimensions.get('window').width
//     const height = 220
//     return (
//         <View>
//            <View>
//   <Text>Bezier Line Market prices</Text>
//   <LineChart
//     data={{
//       labels: ["January", "February", "March", "April", "May", "June"],
//       datasets: [
//         {
//           data: [
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100
//           ]
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     yAxisLabel="$"
//     yAxisSuffix="k"
//     yAxisInterval={1} // optional, defaults to 1
//     chartConfig={{
//       backgroundColor: "#e26a00",
//       backgroundGradientFrom: "#fb8c00",
//       backgroundGradientTo: "#ffa726",
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16
//       },
//       propsForDots: {
//         r: "6",
//         strokeWidth: "2",
//         stroke: "#ffa726"
//       }
//     }}
//     bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   />
  
// <LineChart
//                 data={data}
//                 width={width}
//                 height={height}
//                 chartConfig={chartConfig}
//                 bezier
//                 style={graphStyle}
//               />

// </View>
//         </View>
    //   <ScrollableTabView renderTabBar={this.renderTabBar}>
    //     {chartConfigs.map(chartConfig => {
    //       const labelStyle = {
    //         color: chartConfig.color(),
    //         marginVertical: 10,
    //         textAlign: 'center',
    //         fontSize: 16
    //       }
    //       const graphStyle = {
    //         marginVertical: 8,
    //         ...chartConfig.style
    //       }
    //       return (
    //         <ScrollView
    //           key={Math.random()}
    //           style={{
    //             backgroundColor: chartConfig.backgroundColor
    //           }}
    //         >
    //           <Text style={labelStyle}>Bezier Line Market prices</Text>
    //           <LineChart
    //             data={data}
    //             width={width}
    //             height={height}
    //             chartConfig={chartConfig}
    //             bezier
    //             style={graphStyle}
    //           />
    //           <Text style={labelStyle}>Progress Market prices</Text>
    //           <ProgressChart
    //             data={progressChartData}
    //             width={width}
    //             height={height}
    //             chartConfig={chartConfig}
    //             style={graphStyle}
    //           />
    //           <Text style={labelStyle}>Bar Graph</Text>
    //           <BarChart
    //             width={width}
    //             height={height}
    //             data={data}
    //             chartConfig={chartConfig}
    //             style={graphStyle}
    //           />
    //           <Text style={labelStyle}>Pie Market prices</Text>
    //           <PieChart
    //             data={pieChartData}
    //             height={height}
    //             width={width}
    //             chartConfig={chartConfig}
    //             accessor="population"
    //             style={graphStyle}
    //           />
    //           <Text style={labelStyle}>Line Market prices</Text>
    //           <LineChart
    //             data={data}
    //             width={width}
    //             height={height}
    //             chartConfig={chartConfig}
    //             style={graphStyle}
    //           />
    //           <Text style={labelStyle}>Contribution Graph</Text>
    //           <ContributionGraph
    //             values={contributionData}
    //             width={width}
    //             height={height}
    //             endDate={new Date('2016-05-01')}
    //             numDays={105}
    //             chartConfig={chartConfig}
    //             style={graphStyle}
    //           />
    //         </ScrollView>
    //       )
    //     })}
    //   </ScrollableTabView>
//     )
//   }
// }
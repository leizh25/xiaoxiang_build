import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-gifted-charts';
import Color from '../../constants/Color';
const d1 = [
  {value: 110},
  {value: 90},
  {value: 100},
  {value: 120},
  {value: 100, label: '2005', showXAxisIndex: true},
  {value: 80},
  {value: 90},
  {value: 110},
  {value: 120},
  {value: 100, label: '2010', showXAxisIndex: true},
  {value: 90},
  {value: 100},
  {value: 88},
  {value: 80},
  {value: 120, label: '2015', showXAxisIndex: true},
  {value: 76},
  {value: 104},
  {value: 112},
];
const d2 = [
  0.055, 0.02, 0.1, 0.01, 0.05, 0.06, 0.08, 0.1, 0.08, 0.07, 0.06, 0.025, 0.04,
  0.06, 0.045, 0.09, 0.06, 0.04,
];
const d3 = [
  70, 85, 90, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160,
];

const d4 = [10, 30, 20, 50, 40, 50, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];
export default () => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.chartLayout}>
        <View style={styles.yAxisLabel}>
          <Text style={styles.yAxisLabelTxt}>电流/A</Text>
          <Text style={styles.yAxisLabelTxt}>电压 / V</Text>
        </View>
        <LineChart
          width={300}
          data={d1}
          data2={d3.map(v => ({value: v}))}
          data3={d4.map(v => ({value: v}))}
          maxValue={Math.max(...d3)}
          noOfSections={7}
          spacing={16}
          adjustToWidth={true}
          hideDataPoints
          hideRules
          color="orange"
          color2="rgb(0, 255, 0)"
          color3="rgb(0, 0, 0)"
          yAxisColor="orange"
          showYAxisIndices
          yAxisIndicesColor="orange"
          yAxisIndicesWidth={10}
          yAxisTextStyle={{
            fontSize: 12,
            color: 'orange',
          }}
          secondaryData={d2.map(v => ({value: v}))}
          secondaryLineConfig={{color: 'blue'}}
          secondaryYAxis={{
            maxValue: Math.max(...d2),
            noOfSections: 4,
            showFractionalValues: true,
            roundToDigits: 3,
            yAxisColor: 'blue',
            yAxisIndicesColor: 'blue',
            yAxisTextStyle: {
              fontSize: 12,
              color: 'blue',
            },
          }}
          // tertiaryData={d3.map(v => ({value: v}))}
          // tertiaryLineConfig={{color: 'green'}}
          // quaternaryData={d4.map(v => ({value: v}))}
          // quaternaryLineConfig={{color: 'purple'}}
          xAxisLabelTextStyle={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'gray',
            width: 50,
            marginLeft: -25,
          }}
          xAxisIndicesHeight={10}
          xAxisIndicesWidth={2}
        />
      </View>
      {/* 图例部分 */}
      <View style={styles.legendContainer}>
        {/* 图例 1 */}
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'orange'}]} />
          <Text style={styles.legendText}>电压</Text>
        </View>

        {/* 图例 2 */}
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'blue'}]} />
          <Text style={styles.legendText}>电流</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'green'}]} />
          <Text style={styles.legendText}>数据组 3</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'purple'}]} />
          <Text style={styles.legendText}>数据组 4</Text>
        </View>
      </View>
      <View style={styles.chartLayout}>
        <View style={styles.yAxisLabel}>
          <Text style={styles.yAxisLabelTxt}>电流/A</Text>
          <Text style={styles.yAxisLabelTxt}>电压 / V</Text>
        </View>
        <LineChart
          width={300}
          data={d1}
          data2={d3.map(v => ({value: v}))}
          data3={d4.map(v => ({value: v}))}
          maxValue={Math.max(...d3)}
          noOfSections={7}
          spacing={16}
          adjustToWidth={true}
          hideDataPoints
          hideRules
          color="orange"
          color2="rgb(0, 255, 0)"
          color3="rgb(0, 0, 0)"
          yAxisColor="orange"
          showYAxisIndices
          yAxisIndicesColor="orange"
          yAxisIndicesWidth={10}
          yAxisTextStyle={{
            fontSize: 12,
            color: 'orange',
          }}
          secondaryData={d2.map(v => ({value: v}))}
          secondaryLineConfig={{color: 'blue'}}
          secondaryYAxis={{
            maxValue: Math.max(...d2),
            noOfSections: 4,
            showFractionalValues: true,
            roundToDigits: 3,
            yAxisColor: 'blue',
            yAxisIndicesColor: 'blue',
            yAxisTextStyle: {
              fontSize: 12,
              color: 'blue',
            },
          }}
          // tertiaryData={d3.map(v => ({value: v}))}
          // tertiaryLineConfig={{color: 'green'}}
          // quaternaryData={d4.map(v => ({value: v}))}
          // quaternaryLineConfig={{color: 'purple'}}
          xAxisLabelTextStyle={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'gray',
            width: 50,
            marginLeft: -25,
          }}
          xAxisIndicesHeight={10}
          xAxisIndicesWidth={2}
        />
      </View>
      {/* 图例部分 */}
      <View style={styles.legendContainer}>
        {/* 图例 1 */}
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'orange'}]} />
          <Text style={styles.legendText}>电压</Text>
        </View>

        {/* 图例 2 */}
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'blue'}]} />
          <Text style={styles.legendText}>电流</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'green'}]} />
          <Text style={styles.legendText}>数据组 3</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'purple'}]} />
          <Text style={styles.legendText}>数据组 4</Text>
        </View>
      </View>
      <View style={styles.chartLayout}>
        <View style={styles.yAxisLabel}>
          <Text style={styles.yAxisLabelTxt}>电流/A</Text>
          <Text style={styles.yAxisLabelTxt}>电压 / V</Text>
        </View>
        <LineChart
          width={300}
          data={d1}
          data2={d3.map(v => ({value: v}))}
          data3={d4.map(v => ({value: v}))}
          maxValue={Math.max(...d3)}
          noOfSections={7}
          spacing={16}
          adjustToWidth={true}
          hideDataPoints
          hideRules
          color="orange"
          color2="rgb(0, 255, 0)"
          color3="rgb(0, 0, 0)"
          yAxisColor="orange"
          showYAxisIndices
          yAxisIndicesColor="orange"
          yAxisIndicesWidth={10}
          yAxisTextStyle={{
            fontSize: 12,
            color: 'orange',
          }}
          secondaryData={d2.map(v => ({value: v}))}
          secondaryLineConfig={{color: 'blue'}}
          secondaryYAxis={{
            maxValue: Math.max(...d2),
            noOfSections: 4,
            showFractionalValues: true,
            roundToDigits: 3,
            yAxisColor: 'blue',
            yAxisIndicesColor: 'blue',
            yAxisTextStyle: {
              fontSize: 12,
              color: 'blue',
            },
          }}
          // tertiaryData={d3.map(v => ({value: v}))}
          // tertiaryLineConfig={{color: 'green'}}
          // quaternaryData={d4.map(v => ({value: v}))}
          // quaternaryLineConfig={{color: 'purple'}}
          xAxisLabelTextStyle={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'gray',
            width: 50,
            marginLeft: -25,
          }}
          xAxisIndicesHeight={10}
          xAxisIndicesWidth={2}
        />
      </View>
      {/* 图例部分 */}
      <View style={styles.legendContainer}>
        {/* 图例 1 */}
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'orange'}]} />
          <Text style={styles.legendText}>电压</Text>
        </View>

        {/* 图例 2 */}
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'blue'}]} />
          <Text style={styles.legendText}>电流</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'green'}]} />
          <Text style={styles.legendText}>数据组 3</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, {backgroundColor: 'purple'}]} />
          <Text style={styles.legendText}>数据组 4</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.white,
  },
  yAxisTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  chartLayout: {
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  legendBox: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
    color: '#000',
  },
  yAxisLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingRight: 20,
    marginBottom: 10,
  },
  yAxisLabelTxt: {},
});

import React from "react";
import { connect } from "react-redux";
import echarts from "echarts";
import global from "store/reducers/global";

@connect(
  ({ global }) => {
    return { ...global };
  },
  {
    ...global.actions
  }
)
export default class Performance extends React.PureComponent {
  componentDidMount() {
    let myChart = echarts.init(document.getElementById('main'));
      let option = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['语文', '2019-10', '2019-11'],
            ['语文', 111, 99.5],
            ['数学', 69, 88.5],
            ['英语', 76.88, 110.5],
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0,max:150,splitNumber:10 },
        grid: { top: '55%' },
        series: [
          { type: 'line', smooth: true, seriesLayoutBy: 'row' },
          { type: 'line', smooth: true, seriesLayoutBy: 'row' },
          { type: 'line', smooth: true, seriesLayoutBy: 'row' },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
              formatter: '{b}: {@2019-10} ({d}%)'
            },
            encode: {
              itemName: '语文',
              value: '2019-10',
              tooltip: '2019-10'
            }
          }
        ]
      };
      myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });
      // 绘制图表
      myChart.setOption(option);
    }

  render() {
        console.log(this.props);
        const { dataList = {} } = this.props;
        const { list =[] } = dataList;
        return(
      <div>
      < div id = "main" style = {{ width: 500, height: 400 }}></div >
      </div >
    );
  }
}

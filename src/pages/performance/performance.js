import React from "react";
import { connect } from "react-redux";
import echarts from "echarts";
import global from "store/reducers/global";
import "./performance.scss"

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
    this.major();
    // this.ranking();
    this.synthesize();
    this.school();
    this.grades();
    this.score();
  }
  major = () => {
    let myChart = echarts.init(document.getElementById('major'));
    let option = {
      title: {
        text: '语数外分数'
      },
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
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: '{value}分'
        },
        gridIndex: 0, max: 150, splitNumber: 10
      },
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
  ranking = () => {
    let myChart = echarts.init(document.getElementById('ranking'));
    let option = {
      title: {
        text: '校次和班次'
      },
      // legend: {},
      // tooltip: {
      //   trigger: 'axis',
      // },
      // dataset: {
      //   source: [
      //     ['校次', '2019-10', '2019-11'],
      //     ['校次', 454],
      //     ['班次', 29],
      //   ]
      // },
      // xAxis: { type: 'category' },
      // yAxis: { gridIndex: 0, max: 690 },
      // series: [
      //   { type: 'line', smooth: true, seriesLayoutBy: 'row' },
      //   { type: 'line', smooth: true, seriesLayoutBy: 'row' },
      // ]
      animation: false,
      title: {
        left: 'left',
        text: '校次/班次',
      },
      legend: {},
      tooltip: {
        triggerOn: 'none',
        position: function (pt) {
          return [pt[0], 130];
        }
      },
      toolbox: {
        left: 'center',
        itemSize: 25,
        top: 55,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {}
        }
      },
      xAxis: {
        type: 'category',
        axisPointer: {
          value: '2019-11',
          snap: true,
          lineStyle: {
            color: '#004E52',
            opacity: 0.5,
            width: 2
          },
          label: {
            show: true,
            formatter: function (params) {
              return echarts.format.formatTime('yyyy-MM', params.value);
            },
            backgroundColor: '#004E52'
          },
          handle: {
            show: true,
            color: '#004E52'
          }
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        axisTick: {
          inside: true
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          inside: true,
          formatter: '{value}\n'
        },
        z: 2
      },
      grid: {},
      dataZoom: [{
        type: 'inside',
        throttle: 50
      }],
      series: [
        {
          name: '校次',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          sampling: 'average',
          itemStyle: {
            normal: {
              color: '#8ec6ad'
            }
          },
          stack: 'a',
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#8ec6ad'
              }, {
                offset: 1,
                color: '#ffe'
              }])
            }
          },
          data: [["2019-10", "451"], ["2019-11", "442"]]
        },
        {
          name: '班次',
          type: 'line',
          smooth: true,
          stack: 'a',
          symbol: 'circle',
          symbolSize: 5,
          sampling: 'average',
          itemStyle: {
            normal: {
              color: '#d68262'
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#d68262'
              }, {
                offset: 1,
                color: '#ffe'
              }])
            }
          },
          data: [["2019-10", "29"], ["2019-11", "30"]]
        }

      ]
    };
    // 绘制图表
    myChart.setOption(option);
  }
  synthesize = () => {
    let myChart = echarts.init(document.getElementById('synthesize'));
    let option = {
      title: {
        text: '理化生分数'
      },
      legend: {},
      tooltip: {
        trigger: 'axis',
      },
      dataset: {
        source: [
          ['物理', '2019-10', '2019-11'],
          ['物理', 69, 66],
          ['化学', 65, 44],
          ['生物', 70.5, 52.5],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: '{value}分'
        }, gridIndex: 0, max: 100
      },
      series: [
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
      ]
    };
    // 绘制图表
    myChart.setOption(option);
  }
  school = () => {
    let myChart = echarts.init(document.getElementById('school'));
    let option = {
      title: {
        text: '校次排名'
      },
      legend: {},
      tooltip: {
        trigger: 'axis',
      },
      dataset: {
        source: [
          ['语文', '2019-10', '2019-11'],
          ['语文', 49,303],
          ['数学', 474,292],
          ['外语', 536,456],
          ['物理', 473,544],
          ['化学', 531],545,
          ['生物', 307,388],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: '{value}名'
        }, gridIndex: 0, max: 690
      },
      series: [
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
      ]
    };
    // 绘制图表
    myChart.setOption(option);
  }
  grades = () => {
    let myChart = echarts.init(document.getElementById('grades'));
    let option = {
      title: {
        text: '班次排名'
      },
      legend: {},
      tooltip: {
        trigger: 'axis',
      },
      dataset: {
        source: [
          ['语文', '2019-10', '2019-11'],
          ['语文', 5,21],
          ['数学', 30,19],
          ['外语', 38,29],
          ['物理', 31,35],
          ['化学', 36,40],
          ['生物', 19,30],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: '{value}名'
        }, gridIndex: 0, max: 42
      },
      series: [
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
      ]
    };
    // 绘制图表
    myChart.setOption(option);
  }
  score = () => {
    let myChart = echarts.init(document.getElementById('score'));
    let option = {
      title: {
        text: '历次总分'
      },
      legend: {},
      tooltip: {
        trigger: 'axis',
      },
      dataset: {
        source: [
          ['总分', '2019-10', '2019-11'],
          ['总分', 461.38, 461],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: '{value}分'
        }, gridIndex: 0, max: 750
      },
      series: [
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
      ]
    };
    // 绘制图表
    myChart.setOption(option);
  }
  render() {
    console.log(this.props);
    const { dataList = {} } = this.props;
    const { list = [] } = dataList;
    return (
      <div className="performance-container">
        <div className="show-box clear">
          <div id="major" style={{ width: 600, height: 800 }}></div >
          {/* <div id="ranking" style={{ width: 500, height: 400 }}></div > */}
          <div id="synthesize" style={{ width: 600, height: 400 }}></div >
          < div id="school" style={{ width: 600, height: 400 }}></div >
          < div id="grades" style={{ width: 600, height: 400 }}></div >
          < div id="score" style={{ width: 600, height: 400 }}></div >
        </div>
      </div >
    );
  }
}

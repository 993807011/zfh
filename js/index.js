// 柱状图1模块
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "经营",
          "投资",
          "税金",
          "补助",
          "管理",
          "公益",
          "其他",
          "所得税",
        ],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "8",
          },
        },
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12",
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            // width: 1,
            // type: "solid"
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "25%",
        data: [654436.07, 0, 0, 16560, 0, 0, 23178.1, 0],
        itemStyle: {
          barBorderRadius: 5,
        },
      },
    ],
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [
    { year: "收入", data: [654436.07, 0, 0, 16560, 0, 0, 23178.1, 0] },
    {
      year: "支出",
      data: [370626.55, 0, 0, 738048.28, 164587.67, 1445983.19, 0, 0],
    },
  ];

  $(".bar h2 ").on("click", "a", function () {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 折线图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  option = {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["银行存款", "应收款", "内部往来", "固定资产", "在建工程"],
      data: this.allLegend,
      textStyle: {
        fontSize: 7,
        color: "rgba(255,255,255,.6)",
      },
      itemHeight: 5,
      itemWidth: 7,
      type: "scroll",
      right: 10,
      top: 10,
    },
    grid: {
      top: "17%",
      left: "0%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["2024年1月", "2024年2月", "2024年3月", "2024年4月"],
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: "8",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: "8",
        },
      },
    },
    series: [
      {
        name: "银行存款",
        type: "line",
        stack: "Total",
        data: [11470482.87, 11470482.87, 2628462.26, 2628462.26],
      },
      {
        name: "应收款",
        type: "line",
        stack: "Total",
        data: [13930480.11, 13930480.11, 13930480.11, 13930480.11],
      },
      {
        name: "内部往来",
        type: "line",
        stack: "Total",
        data: [298258.97, 298258.97, 8513.57, 8513.57],
      },
      {
        name: "固定资产",
        type: "line",
        stack: "Total",
        data: [289689312.5, 289689312.5, 289757262.87, 289757262.87],
      },

      {
        name: "在建工程",
        type: "line",
        stack: "Total",
        data: [53736856.45, 53736856.45, 58573070.34, 58573070.34],
      },
    ],
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼形图定制
// 折线图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      },
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["资金", "村务", "党务", "三资", "项目", "其他"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12",
      },
    },
    series: [
      {
        name: "小微权力监督一点通22-24年公示项目分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab",
        ],
        label: { show: true },
        labelLine: { show: true },
        data: [
          { value: 2, name: "资金" },
          { value: 3, name: "村务" },
          { value: 1, name: "党务" },
          { value: 2, name: "三资" },
          { value: 2, name: "项目" },
          { value: 1, name: "其他" },
        ],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 学习进度柱状图模块
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: this.allLegend,
      textStyle: {
        fontSize: 7,
        color: "rgba(255,255,255,.6)",
      },
      itemHeight: 5,
      itemWidth: 7,
      type: "scroll",
      right: 10,
      top: 10,
    },
    grid: {
      top: "10%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: "6",
        },
      },
    },
    yAxis: {
      type: "category",
      data: [
        "房屋及建筑物",
        "设施类",
        "家具电器类",
        "交通工具类",
        "电子设备类",
        "其他",
      ],
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: "8",
        },
      },
    },
    series: [
      {
        name: "资产原值",
        type: "bar",
        data: [286104920.9, 94225, 308911, 99600, 198647.11, 2950958.86],
      },
      {
        name: "累计折旧值",
        type: "bar",
        data: [5881223.14, 74143.41, 257939.94, 36402.42, 158348.35, 438450.92],
      },
      {
        name: "净残值",
        type: "bar",
        data: [14302820.29, 4711.25, 15445.55, 4980, 9932.36, 147349.92],
      },
    ],
  };
  myChart.setOption(option);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 折线图 优秀作品
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b",
        },
      },
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12",
      },
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true,
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },

        data: [
          "1999",
          "2000",
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
        ],
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20,
      },
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "购入量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)",
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12,
          },
        },
        data: [
          1, 0, 0, 0, 2, 0, 1, 1, 5, 1, 0, 2, 2, 6, 27, 2, 50, 25, 12, 6, 5, 5,
          2, 2, 8, 2,
        ],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 点位分布统计模块
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    legend: {
      top: "90%",
      itemWidth: 9,
      itemHeight: 8,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
          { value: 6, name: "房屋及建筑物" },
          { value: 6, name: "设施类" },
          { value: 72, name: "家具电器类" },
          { value: 2, name: "交通工具类" },
          { value: 43, name: "电子设备类" },
          { value: 38, name: "其他" },
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 8,
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 6,
          // 连接到文字的线长度
          length2: 10,
        },
      },
    ],
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
(function () {
  // 实例化对象

  // 把配置给实例对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

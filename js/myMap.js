(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  var geoCoordMap = {
    西陵区: [111.295468, 30.702476],
    伍家岗区: [111.307215, 30.679053],
    点军区: [111.268163, 30.692322],
    猇亭区: [111.427642, 30.530744],
    夷陵区: [111.326747, 30.770199],
    远安县: [111.64331, 31.059626],
    兴山县: [110.754499, 31.34795],
    秭归县: [110.976785, 30.823908],
    长阳土家族自治县: [111.198475, 30.466534],
    五峰土家族自治县: [110.674938, 30.199252],
    宜都市: [111.454367, 30.387234],
    当阳市: [111.793419, 30.824492],
    枝江市: [111.751799, 30.425364],
  };

  var XAData = [
    [{ name: "西陵区" }, { name: "宜都市", value: 100 }],
    [{ name: "西陵区" }, { name: "当阳市", value: 100 }],
    [{ name: "西陵区" }, { name: "枝江市", value: 100 }],
    [{ name: "西陵区" }, { name: "点军区", value: 100 }],
    [{ name: "西陵区" }, { name: "兴山县", value: 100 }],
  ];

  var XNData = [
    [{ name: "伍家岗区" }, { name: "远安县", value: 100 }],
    [{ name: "伍家岗区" }, { name: "宜都市", value: 100 }],
    [{ name: "伍家岗区" }, { name: "猇亭区", value: 100 }],
    [{ name: "伍家岗区" }, { name: "远安县", value: 100 }],
    [{ name: "伍家岗区" }, { name: "五峰土家族自治县", value: 100 }],
  ];

  var YCData = [
    [{ name: "秭归县" }, { name: "长阳土家族自治县", value: 100 }],
    [{ name: "秭归县" }, { name: "当阳市", value: 100 }],
    [{ name: "秭归县" }, { name: "枝江市", value: 100 }],
  ];

  var planePath = "image://images/海豚卡通动物.png";
  //var planePath = 'arrow';
  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value,
        });
      }
    }
    return res;
  };

  var color = ["#fff", "#fff", "#fff"]; //航线的颜色
  var series = [];
  [
    ["西陵区", XAData],
    ["伍家岗区", XNData],
    ["秭归县", YCData],
  ].forEach(function (item, i) {
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 10,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke",
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}",
          },
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
            areaColor: "#2B91B7",
          },
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
          };
        }),
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      },
    },

    geo: {
      map: "宜昌市",
      label: {
        emphasis: {
          show: true,
          color: "#fff",
        },
      },
      roam: false,
      //   放大我们的地图
      zoom: 1,
      itemStyle: {
        normal: {
          areaColor: "rgba(43, 196, 243, 0.42)",
          borderColor: "rgba(43, 196, 243, 1)",
          borderWidth: 1,
        },
        emphasis: {
          areaColor: "#2B91B7",
        },
      },
    },
    series: series,
  };
  myChart.setOption(option);
  myChart.on("click", function (param) {
    console.log(param.name);
    var urlArr = [
      "http://nyt.hubei.gov.cn/nczcjy/xlqwz/",
      "http://nyt.hubei.gov.cn/nczcjy/wjgqwz/index.html",
      "http://nyt.hubei.gov.cn/nczcjy/djqwz/",
      "http://nyt.hubei.gov.cn/nczcjy/xtqwz/",
      "http://nyt.hubei.gov.cn/nczcjy/ylqwz/",
      "http://nyt.hubei.gov.cn/nczcjy/yaxwz/",
      "http://nyt.hubei.gov.cn/nczcjy/xsxwz/",
      "http://nyt.hubei.gov.cn/nczcjy/zgxwz/",
      "http://nyt.hubei.gov.cn/nczcjy/cywz/",
      "http://nyt.hubei.gov.cn/nczcjy/wfwz/",
      "http://nyt.hubei.gov.cn/nczcjy/ydswz/",
      "http://nyt.hubei.gov.cn/nczcjy/dyswz/",
      "http://nyt.hubei.gov.cn/nczcjy/zjswz/",
    ]; //这里填写你点击每个省份要跳转的页面
    switch (param.name) {
      case "西陵区":
        location.href = urlArr[0];
        break;
      case "伍家岗区":
        location.href = urlArr[1];
        break;
      case "点军区":
        location.href = urlArr[2];
        break;
      case "猇亭区":
        location.href = urlArr[3];
        break;
      case "夷陵区":
        location.href = urlArr[4];
        break;
      case "远安县":
        location.href = urlArr[5];
        break;
      case "兴山县":
        location.href = urlArr[6];
        break;
      case "秭归县":
        location.href = urlArr[7];
        break;
      case "长阳土家族自治县":
        location.href = urlArr[8];
        break;
      case "五峰土家族自治县":
        location.href = urlArr[9];
        break;
      case "宜都市":
        location.href = urlArr[10];
        break;
      case " 当阳市":
        location.href = urlArr[11];
        break;
      case "枝江市":
        location.href = urlArr[12];
        break;
    }
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

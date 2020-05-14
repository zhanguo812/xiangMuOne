//问题统计表
$(() => {
  let biao = () => {
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
      title: {
        text: '本月问题处理-----饼图',
        subtext: '可修改的副标题',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['整改中', '已整改', '未整改']
      },
      // '#8dc1a9', '#ea7e53', '#eedd78', '#73a373', '#73b9bc', '#7289ab','#91ca8c', '#f49f42'
      color: ['#dd6b66', '#759aa0', '#777'],
      series: [{
        name: '本月问题',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
          value: 80,
          name: '整改中'
        },
        {
          value: 10,
          name: '已整改'
        },
        {
          value: 10,
          name: '未整改'
        }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',

          }
        }
      }]
    };

    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
  }
  biao();
})
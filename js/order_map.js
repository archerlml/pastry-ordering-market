        // echarts init
        var myChart = echarts.init(document.getElementById('main'));
        var app = {};
        option = null;
        myChart.showLoading();

    $.get('data/us.geo.json', function (usaJson) {
        myChart.hideLoading();

    echarts.registerMap('USA', usaJson);

    var geoCoordMap = {
    'Birmingham': [-86.75,33.57],
    'deadhorse': [-148.47,70.20],
    'Homer': [-151.50,59.63],
    'fairbanks': [-147.87,64.82],
    'douglas':[-109.60,31.45],
    'phoenix': [-112.02,33.43],
    'camden': [-92.40,33.52],
    'fresno':[-119.72,36.77],
    'san jose':[-121.886329, 37.338208],
    'san diego':[-117.13,32.82],
    'los angeles':[-118.92,33.93],
    'san fransisco':[-122.68,37.75],
    'sacramento':[-121.50,38.52],
    'palo alto':[-122.12,37.47],
    'Alton':[-90.05,38.88],
    'Mullan':[-115.80,47.47],
    'Molokai':[-157.10,21.15],
    'Gary':[-87.42,41.62],
    'Hays':[-99.27,38.85],
    'Greenwood':[-90.08,33.50],
    'honolulu':[-157.846374,21.331813],
    'haw':[-155.461682,19.435700],
    'New York':[-73.9385,40.664274]
      };

    var SJData = [
    [{name:'san jose'}, {name:'New York',value:95}],
    [{name:'san jose'}, {name:'san fransisco',value:90}],
    [{name:'san jose'}, {name:'phoenix',value:80}],
    [{name:'san jose'}, {name:'sacramento',value:70}],
    [{name:'san jose'}, {name:'Mullan',value:60}],
    [{name:'san jose'}, {name:'los angeles',value:50}],
    [{name:'san jose'}, {name:'Greenwood',value:40}],
    [{name:'san jose'}, {name:'Gary',value:30}],
    [{name:'san jose'}, {name:'douglas',value:20}],
    [{name:'san jose'}, {name:'birmingham',value:10}],
    [{name:'san jose'}, {name:'deadhorse',value:15}],
    [{name:'san jose'}, {name:'Homer',value:13}],
    [{name:'san jose'}, {name:'camden',value:13}],
    [{name:'san jose'}, {name:'Hays',value:13}],
    [{name:'san jose'}, {name:'honolulu',value:3}],
    [{name:'san jose'}, {name:'haw',value:5}],
    [{name:'san jose'}, {name:'fairbanks',value:10}]
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord
            }, {
                coord: toCoord
            }]);
        }
    }
        return res;
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [['San Jose', SJData]].forEach(function (item, i) {
        series.push({
            name: item[0] + 'Boutique',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 2
            },
            lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
            },
            data: convertData(item[1])
            },
    {
        name: item[0] + 'Boutique',
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 10
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + 'Boutique',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        <!--data: item[1].map(function (dataItem) {-->
            <!--return {-->
                <!--name: dataItem[1].name,-->
                <!--value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])-->
            <!--};-->
        <!--})-->
        });
    });

    option = {
        backgroundColor: '#404a59',
        title: {
            text: 'We Are Shipping Nationwide',
            textStyle : {
                color: '#fff'
            },
            subtext: 'GiveME5 confections',
            left: 'right',
            top: 20

        },
        tooltip: {
            trigger: 'item'
        },

        geo: {
            map: 'USA',
            label: {
            emphasis: {
                show: false
            }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
    },
    series: series

    };

    myChart.setOption(option);
});;
if (option && typeof option === "object") {
    var startTime = +new Date();
    myChart.setOption(option, true);
    var endTime = +new Date();
    var updateTime = endTime - startTime;
    console.log("Time used:", updateTime);
}

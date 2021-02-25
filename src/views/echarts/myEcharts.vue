<template>
    <!-- <div :class="className" style="{ height: 250px, width: 250px }" ref="myEcharts"/> -->
    <div ref="myEcharts" />
</template>

<script>
// import echarts from 'echarts'  版本 4.~引入
import * as echarts from 'echarts';
export default {
    props: {
        // 可以通过父组件传值定义
        // className: {
        // 	type: String,
        // 	default: 'chart',
        // },
        // width: {
        // 	type: String,
        // 	default: '100%',
        // },
        // height: {
        // 	type: String,
        // 	default: '350px',
        // },
        // option 为图表数据 包括呈现的方式 数据
        optionData: {
            type: Object,
        },
    },
    data() {
        return {
            chart: null,
        }
    },
    // 监听数据变化 进行试试刷新
    watch: {},
    mounted() {
        // 防止未加载完毕 报错
        this.$nextTick(() => {
            this.initChart()
        })
    },
    // 关闭 及 删除图表
    beforeDestroy() {
        if (!this.chart) {
            return
        }
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        initChart() {
            //macarons echarts的一个主题
            this.chart = echarts.init(this.$el, 'macarons')
            // this.chart = echarts.init(this.$refs.myEcharts)
            let tooltipData = {}
            let seriesData = []
            let legendData = []
            this.optionData.seriesData.forEach((ele) => {
                legendData.push(ele.name)
            })
            switch (this.optionData.type) {
                case 'pie':
                    tooltipData = { trigger: 'item', formatter: '{a} <br/>{b} : {c} ({d}%)' }
                    seriesData.push({
                        name: this.optionData.name,
                        type: this.optionData.type,
                        center: ['50%', '60%'],
                        radius: this.optionData.name == '年龄分布' ? ['40%', '60%'] : ['10%', '70%'],
                        data: this.optionData.seriesData,
                        roseType: this.optionData.name == '年龄分布' ? '' : 'radius',
                    })
                    break
                case 'line':
                    tooltipData = {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            crossStyle: {
                                // color: '#999',
                            },
                        },
                    }
                    this.optionData.seriesData.forEach((ele) => {
                        if (ele.name == '播放量' || ele.name == '转发量') {
                            seriesData.push({
                                name: ele.name,
                                type: this.optionData.type,
                                data: ele.data,
                                barWidth: '35%',
                                itemStyle: {
                                    barBorderRadius: 5,
                                },
                                symbol: 'circle',
                                showSymbol: false,
                                smooth: true,
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
                                                    color: 'rgba(1, 132, 213, 0.4)',
                                                },
                                                {
                                                    offset: 0.8,
                                                    color: 'rgba(1, 132, 213, 0.1)',
                                                },
                                            ],
                                            false
                                        ),
                                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    },
                                },
                            })
                        } else {
                            seriesData.push({
                                name: ele.name,
                                type: this.optionData.type,
                                data: ele.data,
                                barWidth: '35%',
                                itemStyle: {
                                    barBorderRadius: 5,
                                },
                            })
                        }
                    })
                    break
                default:
                    tooltipData = {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            crossStyle: {
                                // color: '#999',
                            },
                        },
                    }
                    this.optionData.seriesData.forEach((ele) => {
                        seriesData.push({
                            name: ele.name,
                            type: this.optionData.type,
                            data: ele.data,
                            barWidth: '35%',
                            itemStyle: {
                                barBorderRadius: 5,
                            },
                        })
                    })
                    break
            }
            var option = {
                color: ['#006cff', '#60cda0', '#ed3f35', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
                tooltip: tooltipData,
                grid: {
                    left: '3%',
                    top: '30px',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true,
                },
                toolbox: {
                    // 工具栏
                    show: false,
                    feature: {
                        // 显示表格数据
                        dataView: { show: true, readOnly: false },
                        // 切换为 k线图 或柱形图
                        magicType: { show: true, type: ['line', 'bar'] }, // 刷新
                        restore: { show: true },
                        // 保存为本地图片
                        saveAsImage: { show: true },
                    },
                },
                // 说明 数据与 series 的name值对应 才会显示
                legend: {
                    top: 0,
                    data: legendData,
                    textStyle: {
                        color: 'rgba(255,255,255,.5)',
                        fontSize: '11',
                    },
                },
                xAxis: [
                    // 设置x轴底部显示的标题数据 及样式
                    {
                        type: 'category',
                        data: this.optionData.xData,
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLabel: {
                            // 修饰刻度标签的颜色
                            textStyle: {
                                color: 'rgba(255,255,255,.6)',
                                fontSize: '11',
                            },
                        },
                        axisLine: {
                            show: false,
                        },
                        axisPointer: {
                            type: 'shadow',
                        },
                    },
                ],
                yAxis: [
                    // 显示样式设置  此处显示1个 y轴
                    {
                        type: 'value',
                        // name: '水量',
                        // min: 0,
                        // max: 250,
                        // interval: 50,
                        axisTick: {
                            // 去除刻度
                            show: false,
                        },
                        axisLabel: {
                            // 修饰刻度标签的颜色
                            // formatter: '',
                            textStyle: {
                                color: 'rgba(255,255,255,.6)',
                                fontSize: '11',
                            },
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,.1)',
                            },
                        },
                        splitLine: {
                            // 修改y轴分割线的颜色
                            lineStyle: {
                                color: 'rgba(255,255,255,.1)',
                            },
                        },
                    },
                ],
                series: seriesData,
                // series: [
                // 	// bar 为柱形图 一个隔断 分为四个柱形  外加一个line K线图  数据全放在series
                // 	{
                // 		name: '',
                // 		type: this.optionData.type,
                // 		data: this.optionData.seriesData,
                // 		barWidth: '35%',
                // 		itemStyle: {
                // 			barBorderRadius: 5,
                // 			normal: {
                // 				label: {
                // 					show: false, //开启显示数据图上的数值
                // 					position: 'top', //在上方显示
                // 					textStyle: {
                // 						//数值样式
                // 						color: 'red',
                // 						fontSize: 12,
                // 					},
                // 				},
                // 			},
                // 		},
                // 	},
                // ],
            }
            this.chart.setOption(option)
            window.addEventListener('resize', this.chart.resize)
        },
    },
}
</script>

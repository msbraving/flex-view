<template>
    <div ref="floawChart" />
</template>

<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            chart: null,
            angle: 0
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
            var uploadedDataURL = require("../../assets/img/circuit/dot.png");
            var option = {
                tooltip: {
                    trigger: 'none', //触发类型
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    show: false,
                },
                series: [
                    {
                        name: 'Line 1',
                        type: 'pie',
                        startAngle: 144,
                        clockWise: true,
                        center: ['50%', '80%'],
                        radius: ['105%', '106%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true
                                },
                                labelLine: {
                                    show: false
                                },
                            }
                        },
                        hoverAnimation: false,
                        data: [
                            {
                                name: "",
                                value: 30,
                                itemStyle: {
                                    normal: {
                                        color: '#20da97'
                                    }
                                }
                            },
                            {//画中间的图标
                                name: "",
                                value: 0,
                                label: {
                                    position: 'inside',
                                    backgroundColor: {
                                        image: uploadedDataURL
                                    },
                                    width: 16,
                                    height: 16,
                                    // borderRadius: 20,
                                    padding: 5
                                }
                            },
                            {
                                name: "",
                                value: 70,
                                name: '',
                                itemStyle: {
                                    normal: {
                                        color: 'transparent',
                                        label: {
                                            show: false
                                        },
                                        labelLine: {
                                            show: false
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {//第一层
                        name: '阶段',
                        type: 'pie',
                        startAngle: '180',
                        center: ["50%", "80%"],
                        radius: ['80%', '100%'],
                        color: ['#4360fb', '#58c7fc', '#56bffc', '#56bcfc', '#54aefc', '#519efc', '#4e8dfc', '#4e8bfc', '#4d86fc'],
                        label: {
                            position: 'inner',
                            fontSize: 14,
                        },
                        labelLine: {
                            show: false,
                            length: 30,
                        },
                        itemStyle: {
                            borderWidth: 5, //设置border的宽度有多大
                            borderColor: '#fff',
                        },
                        data: [
                            { value: 1, name: '需求阶段' },
                            { value: 1, name: '采购阶段' },
                            { value: 1, name: '生产阶段' },
                            { value: 1, name: '供应阶段' },
                            { value: 1, name: '入库阶段' },
                            { value: 1, name: '库内阶段' },
                            { value: 1, name: '出库阶段' },
                            { value: 1, name: '转资阶段' },
                            { value: 1, name: '运维阶段' },
                            {
                                value: 9, name: '', itemStyle: {
                                    normal: {
                                        color: "rgba(80,150,224,0)"
                                    }
                                }
                            }
                        ],
                    },
                    {//第二层
                        name: '数据',
                        type: 'pie',
                        startAngle: '180',
                        center: ["50%", "80%"],
                        radius: ['70%', '80%'],
                        color: ['#a7e2fe', '#a6e0fe', '#a6e0fe', '#a4dbfe', '#a2d0fe', '#9fc9fe', '#9ec5fe', '#9cc2fe', '#9cc1fe'],
                        hoverAnimation: false,
                        label: {
                            position: 'inner',
                            fontSize: 14,
                            // rotate: 'tangential'
                        },

                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            borderWidth: 5, //设置border的宽度有多大
                            borderColor: '#fff',
                        },
                        data: [
                            { value: 1, name: '需求清单' },
                            { value: 1, name: '采购订单' },
                            { value: 1, name: '配置清单' },
                            { value: 1, name: '运输单' },
                            { value: 1, name: '入库单' },
                            { value: 1, name: '作业单' },
                            { value: 1, name: '领用单' },
                            { value: 1, name: '转资报告' },
                            { value: 1, name: '运维单' },
                            {
                                value: 9, name: '', itemStyle: {
                                    normal: {
                                        color: "rgba(80,150,224,0)"
                                    }
                                }
                            }
                        ]
                    },
                    {//第三层
                        name: '类别',
                        type: 'pie',
                        startAngle: '180',
                        center: ["50%", "80%"],
                        radius: ['50%', '70%'],
                        color: ['#caedfe', '#caedfe', '#caeafe', '#c9e7fe', '#c8e3fe', '#c7dffe', '#c7dcfe', '#c6dafe', '#c6d9fe'],
                        avoidLabelOverlap: false,
                        hoverAnimation: false,
                        legendHoverLink: false,
                        label: {
                            position: 'inner',
                            fontSize: 14,
                            // rotate: true
                            backgroundColor: {
                                image: 'xxx/xxx.png'
                                // 这里可以是图片的 URL，
                                // 或者图片的 dataURI，
                                // 或者 HTMLImageElement 对象，
                                // 或者 HTMLCanvasElement 对象。
                            }

                        },
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            borderWidth: 5, //设置border的宽度有多大
                            borderColor: '#fff',
                        },
                        data: [
                            { value: 1, name: '0' },
                            { value: 1, name: '1' },
                            { value: 1, name: '2' },
                            { value: 1, name: '3' },
                            { value: 1, name: '4' },
                            { value: 1, name: '5' },
                            { value: 1, name: '6' },
                            { value: 1, name: '7' },
                            { value: 1, name: '8' },
                            {
                                value: 9, name: '', itemStyle: {
                                    normal: {
                                        color: "rgba(80,150,224,0)",
                                    }
                                }
                            }
                        ]
                    },
                ]
            };
            this.chart.setOption(option)
            window.addEventListener('resize', this.chart.resize)
        },
    },
}
</script>

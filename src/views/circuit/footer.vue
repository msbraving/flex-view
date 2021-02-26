<template>
    <div ref="footer" />
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-liquidfill'

export default {
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
            this.chart = echarts.init(this.$el)
            let option = {
                series: [
                    {
                        type: 'liquidFill',
                        radius: '30%',
                        data: [0.7, 0.5, 0.3], // data个数代表波浪数
                        color: ['#e3f7fd', '#b6f1fc', '#83daf7'],
                        // color: [
                        //     {
                        //         type: 'linear',
                        //         x: 0,
                        //         y: 0,
                        //         x2: 0,
                        //         y2: 1,
                        //         colorStops: [{
                        //             offset: 1,
                        //             color: '#90acf2'
                        //         }, {
                        //             offset: 0.5,
                        //             color: '#88cbf6'
                        //         }, {
                        //             offset: 0,
                        //             color: '#e6fbfe'
                        //         }],
                        //         globalCoord: false
                        //     },
                        //     {
                        //         type: 'linear',
                        //         x: 0,
                        //         y: 0,
                        //         x2: 0,
                        //         y2: 1,
                        //         colorStops: [{
                        //             offset: 1,
                        //             color: '#e6fbfe'
                        //         }, {
                        //             offset: 0.5,
                        //             color: '#90acf2'
                        //         }, {
                        //             offset: 0,
                        //             color: '#88cbf6'
                        //         }],
                        //         globalCoord: false
                        //     },
                        //     {
                        //         type: 'linear',
                        //         x: 0,
                        //         y: 0,
                        //         x2: 0,
                        //         y2: 1,
                        //         colorStops: [{
                        //             offset: 1,
                        //             color: '#e6fbfe'
                        //         }, {
                        //             offset: 0.5,
                        //             color: '#88cbf6'
                        //         }, {
                        //             offset: 0,
                        //             color: '#90acf2'
                        //         }],
                        //         globalCoord: false
                        //     },
                        // ],
                        shape: 'container',
                        backgroundStyle: {
                            // borderWidth: 1,
                            color: '#fff'
                        },
                        itemStyle: {
                            opacity: 0.5
                        },
                        label: {
                            show: false,
                        },
                        emphasis: {
                            itemStyle: {
                                opacity: 0
                            }
                        },
                        outline: {
                            show: false,
                        }
                        // outline: {
                        // borderDistance: 0,
                        // itemStyle: {
                        // borderWidth: 5,
                        // borderColor: '#156ACF',
                        // shadowBlur: 20,
                        // shadowColor: 'rgba(255, 0, 0, 1)'
                        // }
                        // }
                    },
                ],
            };
            this.chart.setOption(option)
            window.addEventListener('resize', this.chart.resize)
        },
    },
}
</script>

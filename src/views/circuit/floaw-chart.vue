<template>
    <div class="echarts">
        <div ref="floawChart"> </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-liquidfill'

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
            console.log(this.$el)
            this.chart = echarts.init(this.$el)
            let setData = [
                {
                    name: 'pie1', startAngle: 180, radius: ['80%', '100%'],
                    data: [
                        { value: 1, name: '需求阶段', color: '#5bd2fd' },
                        { value: 1, name: '采购阶段', color: '#58c7fc' },
                        { value: 1, name: '生产阶段', color: '#56bffc' },
                        { value: 1, name: '供应阶段', color: '#56bcfc' },
                        { value: 1, name: '入库阶段', color: '#54aefc' },
                        { value: 1, name: '库内阶段', color: '#519efc' },
                        { value: 1, name: '出库阶段', color: '#4e8dfc' },
                        { value: 1, name: '转资阶段', color: '#4e8bfc' },
                        { value: 1, name: '运维阶段', color: '#4d86fc' },
                        { value: 9, name: '', color: 'rgba(80,150,224,0)' },
                    ]
                },
                {
                    name: 'pie2', startAngle: 180, radius: ['70%', '80%'],
                    data: [
                        { value: 1, name: '需求清单', color: '#a7e2fe' },
                        { value: 1, name: '采购订单', color: '#a6e0fe' },
                        { value: 1, name: '配置清单', color: '#a6e0fe' },
                        { value: 1, name: '运输单', color: '#a4dbfe' },
                        { value: 1, name: '入库单', color: '#a2d0fe' },
                        { value: 1, name: '作业单', color: '#9fc9fe' },
                        { value: 1, name: '领用单', color: '#9ec5fe' },
                        { value: 1, name: '转资报告', color: '#9cc2fe' },
                        { value: 1, name: '运维单', color: '#9cc1fe' },
                        { value: 9, name: '', color: 'rgba(80,150,224,0)' },
                    ]
                },
                {
                    name: 'pie3', startAngle: 180, radius: ['50%', '70%'],
                    data: [
                        { value: 1, name: '300', color: '#caedfe' },
                        { value: 1, name: '300', color: '#caedfe' },
                        { value: 1, name: '300', color: '#caeafe' },
                        { value: 1, name: '300', color: '#c9e7fe' },
                        { value: 1, name: '300', color: '#c8e3fe' },
                        { value: 1, name: '300', color: '#c7dffe' },
                        { value: 1, name: '300', color: '#c7dcfe' },
                        { value: 1, name: '300', color: '#c6dafe' },
                        { value: 1, name: '300', color: '#c6d9fe' },
                        { value: 9, name: '300', color: 'rgba(80,150,224,0)' },
                    ]
                },
                {
                    name: 'pie4', startAngle: 180, radius: ['40%', '50%'],
                    data: [
                        { value: 1, name: 'ERP物料', color: '#b5e39b' },
                        { value: 1, name: 'BOM', color: '#b2e29c' },
                        { value: 1, name: '', color: '#9fe0a5' },
                        { value: 1, name: '序列号', color: '#8edeae' },
                        { value: 1, name: '资产', color: '#81ddb6' },
                        { value: 5, name: '', color: 'rgba(80,150,224,0)' },
                    ]
                },
                {
                    name: 'pie5', startAngle: 180, radius: ['30%', '40%'],
                    data: [
                        { value: 1, name: '品类', color: '#d7efb4' },
                        { value: 1, name: '品类', color: '#d6efb5' },
                        { value: 1, name: '品类', color: '#d4efb6' },
                        { value: 1, name: '品类', color: '#cfedb9' },
                        { value: 1, name: '品类', color: '#ceedba' },
                        { value: 5, name: '', color: 'rgba(80,150,224,0)' },
                    ]
                },
            ]
            let uploadedDataURL = require("../../assets/img/circuit/dot.png");
            let option = {
                series: [
                    {
                        name: 'Line 1',
                        type: 'pie',
                        startAngle: 144,
                        clockWise: true,
                        center: ['50%', '90%'],
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
                    {
                        type: 'liquidFill',
                        radius: '30%',
                        center: ['50%', '82%'],
                        data: [0.5, 0.4, 0.3], // data个数代表波浪数
                        color: ['#e3f7fd', '#b6f1fc', '#83daf7'],
                        shape: 'path://M 100 350 A 150 150 0 1 1 400 350',
                        backgroundStyle: {
                            borderWidth: 1,
                            color: '#fff'
                        },
                        itemStyle: {
                            opacity: 0.6
                        },
                        label: {
                            formatter: '全过程 全链条 全渠道\n供应链全生命周期数据池',
                            fontSize: 14,
                            color: '#1847d5',
                            position: ['50%', '60%'],
                        },
                        outline: {
                            show: false,
                        },
                        emphasis: {
                            itemStyle: {
                                opacity: 0
                            }
                        },
                    },
                ],
                graphic: [{
                    type: 'group',
                    left: 'center',
                    top: '79%',
                    children: [{
                        type: 'text',
                        z: 100,
                        left: '0',
                        top: 'middle',
                        style: {
                            fill: '#ec8000',
                            text: '顶层赋码设计',
                            font: '20px Microsoft YaHei'
                        }
                    }]
                }],
            };
            setData.forEach((item, index) => {
                option.series.push({
                    name: item.name,
                    type: 'pie',
                    startAngle: item.startAngle,
                    center: ["50%", "90%"],
                    radius: item.radius,
                    avoidLabelOverlap: false,//防止标签重叠
                    legendHoverLink: false,
                    emphasis: { //高亮状态的扇区和标签样式。
                        scale: true,//开启扇区放大效果
                        label: {
                            show: true,
                            fontSize: '18',
                            fontWeight: 'bold'
                        }
                    },
                    label: { // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                    },
                    itemStyle: { //图形样式。
                        borderWidth: 5,
                        borderColor: '#fff',
                    },
                    data: this.calcAngle(item.data),
                })
            })
            this.chart.setOption(option)
            window.addEventListener('resize', this.chart.resize)
        },
        calcAngle(data) {//添加data 转换角度
            let sum = data.reduce(function(total, currentValue, currentIndex, arr) {
                return total + currentValue.value;
            }, 0);
            let angle = 0, array = []
            //当前元素的角度
            data.forEach((ele, i) => {
                //本次设置 从 180度开始顺时针旋转
                let currentAngle = angle + ele.value / sum * 360 - (360 / sum / 2)
                angle += ele.value / sum * 360
                currentAngle = 90 - currentAngle
                array.push({
                    value: ele.value,
                    name: ele.name,
                    itemStyle: {
                        color: ele.color,
                    },
                    label: {
                        position: 'inside',
                        fontSize: 15,
                        rotate: currentAngle,
                        // formatter: '{title|{b}}',
                        // rich: {
                        //     title: {
                        //         padding: 12,
                        //         height: 30,
                        //         fontSize: 15,
                        //         lineHeight: 30,
                        //         align: 'bottom',
                        //     },
                        // }
                    },
                })
            })
            return array
        }
    },
}
</script>

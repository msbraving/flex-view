<template>
    <div class="echarts">
        <header>
            <h2>自适应可视化展板-Echarts</h2>
            <div class="currentTime">当前时间 : {{ currentTime }}</div>
        </header>
        <section class="echartsBox">
            <div class="side">
                <div class="panel bar">
                    <h2>行业人数</h2>
                    <myEcharts class="myEcharts_every" :optionData="option_one"></myEcharts>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel line">
                    <h2>人员变化</h2>
                    <myEcharts class="myEcharts_every" :optionData="option_two"></myEcharts>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel pie">
                    <h2>年龄分布</h2>
                    <myEcharts class="myEcharts_every" :optionData="option_three"></myEcharts>
                    <div class="panel-footer"></div>
                </div>
            </div>
            <div class="center">
                <chinaMap class="chinaMap"> </chinaMap>
            </div>
            <div class="side">
                <div class="panel bar">
                    <h2>技能掌握</h2>
                    <myEcharts class="myEcharts_every" :optionData="option_four"></myEcharts>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel line">
                    <h2>播放量</h2>
                    <myEcharts class="myEcharts_every" :optionData="option_five"></myEcharts>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel pie">
                    <h2>地区分布</h2>
                    <myEcharts class="myEcharts_every" :optionData="option_six"></myEcharts>
                    <div class="panel-footer"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import myEcharts from './myEcharts'
import chinaMap from './chinaMap'
import echartsData from '../../assets/js/echarts/echartsData'
export default {
    name: 'echarts',
    data() {
        return {
            currentTime: '',
            option_one: echartsData.option_one,
            option_two: echartsData.option_two,
            option_three: echartsData.option_three,
            option_four: echartsData.option_four,
            option_five: echartsData.option_five,
            option_six: echartsData.option_six,
        }
    },
    components: { myEcharts, chinaMap },
    created() {
        setInterval(() => {
            this.getCurrentTime()
        }, 1000)
    },
    mounted() { },
    methods: {
        getCurrentTime() {
            //当前时间
            var myDate = new Date()
            this.currentTime = myDate.toLocaleString()
        },
    },
}
</script>

<style scoped lang="scss">
.echarts {
    width: 100%;
    height: 100%;
    background: url("../../assets/img/echarts/bg.jpg") no-repeat;
    background-size: cover;
    header {
        width: 100%;
        height: 100px;
        position: relative;
        background: url("../../assets/img/echarts/head_bg.png") no-repeat top;
        h2 {
            height: 100px;
            line-height: 80px;
            font-size: 36px;
            color: #fff;
            text-align: center;
        }
        .currentTime {
            position: absolute;
            height: 80px;
            line-height: 80px;
            font-size: 25px;
            top: 0;
            right: 20px;
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
        }
    }
    section {
        width: 100%;
        height: calc(100% - 100px);
        padding: 10px 10px 0 10px;
        box-sizing: border-box;
        display: flex;
        .side {
            width: 25%;
            height: calc(100% - 10px);
            display: flex;
            flex-wrap: wrap;
            .panel {
                width: 100%;
                height: calc((100% - 30px) / 3);
                border: 1px solid rgba(25, 186, 139, 0.17);
                margin-bottom: 10px;
                position: relative;
                .panel-footer {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                }
                .panel-footer::before {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    content: "";
                    width: 10px;
                    height: 10px;
                    border-bottom: 2px solid #02a6b5;
                    border-left: 2px solid #02a6b5;
                }
                .panel-footer::after {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    content: "";
                    width: 10px;
                    height: 10px;
                    border-bottom: 2px solid #02a6b5;
                    border-right: 2px solid #02a6b5;
                }
                h2 {
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    color: #fff;
                    font-size: 16px;
                }
                .myEcharts_every {
                    width: 100%;
                    height: calc(100% - 30px);
                }
            }
            .panel::before {
                position: absolute;
                content: "";
                top: 0;
                left: 0;
                width: 10px;
                height: 10px;
                border-top: 2px solid #02a6b5;
                border-left: 2px solid #02a6b5;
            }
            .panel::after {
                position: absolute;
                top: 0;
                right: 0;
                content: "";
                width: 10px;
                height: 10px;
                border-top: 2px solid #02a6b5;
                border-right: 2px solid #02a6b5;
            }
        }
        .center {
            width: 50%;
            height: calc(100% - 10px);
            padding: 10px;
            .chinaMap {
                width: 100%;
                height: 100%;
            }
        }
    }
}
@media screen {
}
</style>

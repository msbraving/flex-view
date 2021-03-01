<template>
    <div class="echarts">
        <header></header>
        <section class="echartsBox">
            <div class="center">
                <floawChart class="floawChart"></floawChart>
            </div>
            <div class="echartsLeft-top">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="echartsLeft-bottom">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </section>
        <foot class="foot"></foot>
    </div>
</template>

<script>
import floawChart from './floaw-chart'
import foot from './footer'
export default {
    name: 'circuit',
    data() {
        return {
        }
    },
    components: { floawChart, foot },
    created() { },
    mounted() { },
    methods: {},
}
</script>

<style scoped lang="scss">
.echarts {
    width: 100%;
    height: 100%;
    background-size: cover;
    header {
        width: 100%;
        height: 100px;
    }
    section {
        position: relative;
        width: 100%;
        height: 650px;
        padding: 10px 10px 0 10px;
        box-sizing: border-box;
        .center {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 66;
            .floawChart {
                width: 100%;
                height: 100%;
            }
        }
        .echartsLeft-top {
            position: relative;
            width: 50%;
            height: 60%;
            .dot:nth-child(1) {
                position: absolute;
                right: calc(30% + 100px);
                top: 50px;
                width: 10px;
                height: 10px;
                border: 2px solid #1aab6a;
                border-radius: 50%;
            }
            .dot:nth-child(2) {
                position: absolute;
                right: calc(30% + 100px);
                top: 100px;
                width: 10px;
                height: 10px;
                border: 2px solid #5bcfff;
                border-radius: 50%;
            }
            .dot:nth-child(3) {
                position: absolute;
                right: calc(30% + 100px);
                top: 150px;
                width: 10px;
                height: 10px;
                border: 2px solid #468ffe;
                border-radius: 50%;
            }
            .dot:nth-child(3)::after {
                content: "";
                position: absolute;
                top: 6px;
                right: 2px;
                width: 2px;
                height: 420px;
                background-color: #468ffe;
            }
        }
        .echartsLeft-bottom {
            position: absolute;
            width: 50%;
            height: 10%;
            left: 0;
            bottom: 0;
            z-index: 99;
            .dot:nth-child(1) {
                position: absolute;
                right: 12%;
                top: 3%;
                width: 10px;
                height: 10px;
                border: 2px solid #1aab6a;
                border-radius: 50%;
            }
            .dot:nth-child(1)::before {
                content: "";
                position: absolute;
                top: 8px;
                left: 2px;
                width: 2px;
                height: 24px;
                background-color: #1aab6a;
            }
            .dot:nth-child(1)::after {
                content: "";
                position: absolute;
                top: 32px;
                right: 2px;
                width: 400px;
                height: 2px;
                background-color: #1aab6a;
            }
            .dot:nth-child(2) {
                position: absolute;
                right: 22%;
                top: 3%;
                width: 10px;
                height: 10px;
                border: 2px solid #5bcfff;
                border-radius: 50%;
            }
            .dot:nth-child(2)::before {
                content: "";
                position: absolute;
                top: 8px;
                left: 2px;
                width: 2px;
                height: 10px;
                background-color: #5bcfff;
            }
            .dot:nth-child(2)::after {
                content: "";
                position: absolute;
                top: 18px;
                right: 2px;
                width: 200px;
                height: 2px;
                background-color: #5bcfff;
            }
            .dot:nth-child(3) {
                position: absolute;
                right: 30%;
                top: 3%;
                width: 10px;
                height: 10px;
                border: 2px solid #468ffe;
                border-radius: 50%;
            }
            .dot:nth-child(3)::after {
                content: "";
                position: absolute;
                top: 2px;
                right: 5px;
                width: 100px;
                height: 2px;
                background-color: #468ffe;
            }
        }
    }
    .foot {
        width: 100%;
        height: 200px;
    }
}
</style>

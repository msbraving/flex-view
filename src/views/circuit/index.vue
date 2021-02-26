<template>
    <div class="echarts">
        <header></header>
        <section class="echartsBox">
            <div class="center">
                <floawChart class="floawChart"></floawChart>
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
        width: 100%;
        height: 650px;
        padding: 10px 10px 0 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        .center {
            width: 80%;
            height: calc(100% - 30px);
            .floawChart {
                width: 100%;
                height: 100%;
            }
        }
    }
    .foot {
        width: 100%;
        height: 200px;
    }
}
</style>

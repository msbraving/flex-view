<template>
    <div class="index">
        <div class=left>
            <el-scrollbar class="left-scrollbar">
                <div class="components-list">
                    <div v-for="(item, listIndex) in leftComponents" :key="listIndex">
                        <div class="components-title">
                            <!-- <svgIcon icon-class="component" /> -->
                            {{ item.title }}
                        </div>
                        <draggable class="components-draggable" :list="item.list" :group="{ name: 'componentsGroup', pull: 'clone', put: false }" :clone="cloneComponent"
                                   draggable=".components-item" :sort="false" @end="onEnd">
                            <div v-for="(element, index) in item.list" :key="index" class="components-item" @click="addComponent(element)">
                                <div class="components-body">
                                    <!-- <svgIcon :icon-class="element.__config__.tagIcon" /> -->
                                    {{ element.__config__.label }}
                                </div>
                            </div>
                        </draggable>
                    </div>
                </div>
            </el-scrollbar>
        </div>
        <div class="right">
            <rightPanel :active-data="activeData" :form-conf="formConf" :show-field="!!drawingList.length" @tag-change="tagChange" @fetch-data="fetchData" />
        </div>
    </div>
</template>

<script>
import { inputComponents, selectComponents, formConf } from './configData/config'// 左侧面板数据
import draggable from 'vuedraggable' //拖拽
// import svgIcon from './svgIcon'// svg component
import RightPanel from './RightPanel'  //右侧组件
import drawingDefalut from './configData/defalut'  // 初始化默认显示单行文本
// import {
//     inputComponents, selectComponents, layoutComponents, formConf
// } from '@/components/generator/config'
import {
    getDrawingList, saveDrawingList, getIdGlobal, saveIdGlobal, getFormConf
} from '@/utils/db'

export default {
    data() {
        return {
            leftComponents: [
                {
                    title: '输入型',
                    list: inputComponents
                },
                {
                    title: '选择型',
                    list: selectComponents
                },
            ],
            activeData: drawingDefalut[0],
            formConf,
            drawingList: drawingDefalut,

        };
    },
    components: {
        draggable: draggable,
        // svgIcon: svgIcon,
        rightPanel: RightPanel,
    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        onEnd(obj) {//拖拽结束
            // if (obj.from !== obj.to) {
            //     this.fetchData(tempActiveData)
            //     this.activeData = tempActiveData
            //     this.activeId = this.idGlobal
            // }
        },
        cloneComponent(origin) {//单个 formitem 复制
            // const clone = deepClone(origin)
            // const config = clone.__config__
            // config.span = this.formConf.span // 生成代码时，会根据span做精简判断
            // this.createIdAndKey(clone)
            // clone.placeholder !== undefined && (clone.placeholder += config.label)
            // tempActiveData = clone
            // return tempActiveData
        },
        tagChange() {

        },
        fetchData() {

        }
    }
};
</script>

<style scoped lang="scss">
.index {
    .left {
        width: 200px;
        .left-scrollbar {
            height: calc(100% - 42px);
            overflow: hidden;
            .components-list {
                padding: 8px;
                box-sizing: border-box;
                height: 100%;
                .components-title {
                    font-size: 14px;
                    color: #222;
                    margin: 6px 2px;
                    .svg-icon {
                        color: #666;
                        font-size: 18px;
                    }
                }
                .components-draggable {
                    padding-bottom: 20px;
                    .components-item {
                        display: inline-block;
                        width: 48%;
                        margin: 1%;
                        transition: transform 0ms !important;
                        .components-body {
                            padding: 8px 10px;
                            background: #f6f7ff;
                            font-size: 12px;
                            cursor: move;
                            border: 1px dashed #f6f7ff;
                            border-radius: 3px;
                            .svg-icon {
                                color: #777;
                                font-size: 15px;
                            }
                            &:hover {
                                border: 1px dashed #787be8;
                                color: #787be8;
                                .svg-icon {
                                    color: #787be8;
                                }
                            }
                        }
                    }
                    .components-item.sortable-ghost {
                        width: 100%;
                        height: 60px;
                        background-color: #f6f7ff;
                    }
                }
            }
        }
    }
}
</style>

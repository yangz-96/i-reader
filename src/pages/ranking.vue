<template>
    <div>
        <van-nav-bar title="排行榜" left-text="返回" left-arrow fixed placeholder z-index="9999"/>
        <van-tabs v-model="active"  sticky offset-top="46">
            <van-tab title="男生">
                <van-row>
                    <van-col span="6">
                        <van-sidebar v-model="maleActiveKey" style="position: fixed;">
                            <van-sidebar-item title="最热榜" />
                            <van-sidebar-item title="热搜榜" />
                            <van-sidebar-item title="潜力榜" />
                            <van-sidebar-item title="留存榜" />
                            <van-sidebar-item title="完本榜" />
                        </van-sidebar>
                    </van-col>
                    <van-col span="18">
                        <div style="margin-top: 5px;height: 60px;" v-for="(index) in 20" :key="index">
                            <div style="height: 60px;float: left;width: 18%;">
                                <img style="height: 100%;" src="https://bookcover.yuewen.com/qdbimg/349573/1016293952/180"/>
                            </div>
                            <div style="float: right;width: 82%;height: 60px;">
                                <div>{{index}}.从观众席走向娱乐圈</div>
                                <div style="font-size: 12px;padding: 5px 0;color: #b7b2b9;">
                                    杯盏长生酒 · 都市 · 连载 · 161万字
                                </div>
                            </div>
                        </div>
                    </van-col>
                </van-row>
            </van-tab>
            <van-tab title="女生">
                <van-row>
                    <van-col span="6">
                        <van-sidebar v-model="femaleActiveKey" style="position: fixed;">
                            <van-sidebar-item title="最热榜" />
                            <van-sidebar-item title="热搜榜" />
                            <van-sidebar-item title="潜力榜" />
                            <van-sidebar-item title="留存榜" />
                            <van-sidebar-item title="完本榜" />
                        </van-sidebar>
                    </van-col>
                    <van-col span="18">
                        <div style="margin-top: 5px;height: 60px;" v-for="(index) in 20" :key="index">
                            <div style="height: 60px;float: left;width: 18%;">
                                <img style="height: 100%;" src="https://bookcover.yuewen.com/qdbimg/349573/1016293952/180"/>
                            </div>
                            <div style="float: right;width: 82%;height: 60px;">
                                <div>{{index}}.从观众席走向娱乐圈</div>
                                <div style="font-size: 12px;padding: 5px 0;color: #b7b2b9;">
                                    杯盏长生酒 · 都市 · 连载 · 161万字
                                </div>
                            </div>
                        </div>
                    </van-col>
                </van-row>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "ranking",
        data(){
            return{
                active: 0,
                maleActiveKey:0,
                femaleActiveKey:0,
            }
        }
    }
</script>

<style scoped>

</style>
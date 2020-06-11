<template>
    <section>
        <van-nav-bar :title="title" fixed placeholder z-index="9999"/>
        <section>
            <!--<Bookshelf v-show="false"/>
            <Bookstore v-show="true"/>-->
            <router-view/>
        </section>
        <van-tabbar v-model="active" placeholder route>
            <van-tabbar-item name="home" replace to="/bookshelf">
                <span>书架</span>
                <template #icon="props">
                    <van-icon class="iconfont" class-prefix="icon" :name="props.active ? 'bookshelf-active' :'bookshelf'" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item name="search" icon="diamond-o" replace to="/store">精选</van-tabbar-item>
            <van-tabbar-item name="discover">
                <span>发现</span>
                <template #icon="props">
                    <van-icon class="iconfont" class-prefix="icon" :name="props.active ? 'discover-active' :'discover'" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item name="setting" icon="contact">我</van-tabbar-item>
        </van-tabbar>
    </section>
</template>

<script>
   /* import Bookshelf from '@/pages/bookshelf'
    import Bookstore from "@/pages/bookstore";*/
    export default {
        name: "index",
        components: {
            /*Bookstore,
            Bookshelf*/
        },
        data(){
            return{
                title: '书架',
                active: 'home'
            }
        }
    }
</script>

<style scoped>

</style>
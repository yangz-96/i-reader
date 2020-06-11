<template>
    <section>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <van-image :src="image" />
            </van-swipe-item>
        </van-swipe>
        <van-grid>
            <van-grid-item icon="apps-o" text="分类" to="/classification" />
            <van-grid-item to="/ranking">
                <van-icon class-prefix="icon" class="iconfont" name="ranking" size="26px"/>
                <span class="van-grid-item__text" style="margin-top: 8px;">排行</span>
            </van-grid-item>
            <van-grid-item icon="bookmark-o" text="免费" />
            <van-grid-item>
                <van-icon class-prefix="icon" class="iconfont" name="shu" size="26px"/>
                <span class="van-grid-item__text" style="margin-top: 8px;">完本</span>
            </van-grid-item>
        </van-grid>
        <section>
            <van-notice-bar left-icon="volume-o" :scrollable="false">
                <van-swipe style="height: 24px;font-size: 12px;" :height="24" autoplay="3000" :show-indicators="false" vertical>
                    <van-swipe-item v-for="(item, index) in text" :key="index">
                        <van-row>
                            <van-col span="3"><van-tag type="danger">{{item.tag}}</van-tag></van-col>
                            <van-col span="20">{{item.content}}</van-col>
                        </van-row>
                    </van-swipe-item>
                </van-swipe>
            </van-notice-bar>
        </section>
        <!--<section style="padding: 10px;border-bottom: 1px solid #f7f9fa;">
            <van-swipe style="height: 24px;font-size: 12px;" :height="24" autoplay="3000" :show-indicators="false" vertical>
                <van-swipe-item v-for="(item, index) in text" :key="index">
                    <van-row>
                        <van-col span="3"><van-tag type="danger">{{item.tag}}</van-tag></van-col>
                        <van-col span="20">{{item.content}}</van-col>
                        <van-col span="1"><van-icon name="arrow" size="15"/></van-col>
                    </van-row>
                </van-swipe-item>
            </van-swipe>
        </section>-->
        <div>
            <div>
                <van-cell title="畅销精选" title-style="font-size:18px;font-weight: bolder;" is-link value="更多"/>
                <Book v-for="(item, index) in books" :key="index" :book="item"/>
            </div>
            <div>
                <van-cell title="主编力荐" title-style="font-size:18px;font-weight: bolder;" is-link value="更多"/>
                <Book v-for="(item, index) in books" :key="index" :book="item"/>
            </div>
            <div>
                <van-cell title="限时免费" title-style="font-size:18px;font-weight: bolder;" is-link value="更多"/>
                <van-grid :border="false" :column-num="4">
                    <van-grid-item>
                        <van-image src="https://bookcover.yuewen.com/qdbimg/349573/1016276604/150" />
                        <div style="font-size: 10px;width: 100%;">大反派崛起之路</div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image src="https://bookcover.yuewen.com/qdbimg/349573/1013607299/150" />
                        <span style="font-size: 10px;">无限血核</span>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image src="https://bookcover.yuewen.com/qdbimg/349573/1014222426/150" />
                        <span class="van-ellipsis" style="font-size: 10px;">飞跃泡沫时代</span>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image src="https://bookcover.yuewen.com/qdbimg/349573/1018385822/150" />
                        <span class="van-ellipsis" style="font-size: 10px;">军工重器</span>
                    </van-grid-item>
                </van-grid>
                <div style="text-align: center;color: #396eb9;">
                    <a href="#"><van-icon class="iconfont" class-prefix='icon' name='shuaxin1' /><span style="font-size: 12px;margin-left: 5px;">换一批</span></a>
                </div>
            </div>
            <div>
                <van-cell title="新书强推" title-style="font-size:18px;font-weight: bolder;" is-link value="更多"/>
                <Book v-for="(item, index) in books" :key="index" :book="item"/>
            </div>
            <div>
                <van-cell title="经典完本" title-style="font-size:18px;font-weight: bolder;" is-link value="更多"/>
            </div>
        </div>
    </section>
</template>

<script>
    import Book from '@/components/book'
    export default {
        name: "bookstore",
        data() {
            return {
                images: [
                    'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/50fecf0b5927500cd1d34bb80ef82bd5.jpg',
                    'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ff971685622440c2065f41b3f06eb6a1.jpg',
                    'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/9d4ad80c360ad867ecf3e025810ba98c.jpg',
                    'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/216ef615a7051ee742017c1316cd58eb.jpg'
                ],
                text: [
                    {tag:'标签',content:'那一日，幼虎稍微大了，咬死狼王，占了狼穴···'},
                    {tag:'标签',content:'携带采集术穿越火影世界，成为月光寒风。'},
                    {tag:'标签',content:'深渊入侵苍澜，陈勾则入侵深渊。'},
                    {tag:'标签',content:'叮！你成功制作出了六味地黄丸，药效×3···'},
                ],
                books:[
                    {
                        cover:"https://bookcover.yuewen.com/qdbimg/349573/1016293952/180",
                        title:"从观众席走向娱乐圈",
                        author:"杯盏长生酒",
                        majorCate:"都市",
                        isSerial:"连载",
                        wordCount:"161",
                        longIntro:"直接重生在周董的演唱会上，许阳迷迷糊糊的坐在观众席上。",
                    },
                    {
                        cover:"https://bookcover.yuewen.com/qdbimg/349573/1016293952/180",
                        title:"从观众席走向娱乐圈",
                        author:"杯盏长生酒",
                        majorCate:"都市",
                        isSerial:"连载",
                        wordCount:"161",
                        longIntro:"直接重生在周董的演唱会上，许阳迷迷糊糊的坐在观众席上。",
                    },
                    {
                        cover:"https://bookcover.yuewen.com/qdbimg/349573/1016293952/180",
                        title:"从观众席走向娱乐圈",
                        author:"杯盏长生酒",
                        majorCate:"都市",
                        isSerial:"连载",
                        wordCount:"161",
                        longIntro:"直接重生在周董的演唱会上，许阳迷迷糊糊的坐在观众席上。",
                    }
                ]
            };
        },
        components: {
            Book
        },
    }
</script>

<style scoped>

</style>
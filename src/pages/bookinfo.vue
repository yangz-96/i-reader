<template>
    <section>
        <van-nav-bar title="书籍详情" left-text="返回" left-arrow fixed placeholder z-index="9999"/>
        <van-row>
            <van-col span="8" style="padding: 15px;">
                <van-image width="90" :src="book.cover" />
            </van-col>
            <van-col span="16" style="padding: 15px 0;">
                <div style="font-size: 20px;font-weight: bold;" v-text="book.title"></div>
                <div style="padding: 10px 0;">
                    <van-icon name="user-o" />
                    <span style="font-size: 12px;margin-left: 5px;" v-text="book.author"></span>
                </div>
                <div style="font-size: 12px;" v-text="book.minorCate + ' · ' + book.wordCount/10000 + '万字 · ' + (book.isSerial?'连载中':'完结')"></div>
                <div style="font-size: 12px;margin-top: 10px;" v-text="'更新时间：' + formatTime(book.updated,'yyyy-MM-dd hh:mm:ss')"></div>
            </van-col>
        </van-row>
        <div style="padding: 10px;font-size: 14px;" v-text="book.longIntro"></div>
        <van-cell title="目录" is-link :value="'连载至' + book.chaptersCount + '章'" :border="false"/>
        <div>
            <van-cell title="作者其他作品" is-link value="更多" :border="false" />
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
        </div>
        <div>
            <van-cell title="同类作品推荐" is-link value="更多" :border="false" />
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
        </div>
    </section>
</template>

<script>
    import formatDateTime from '@/assets/plugins/formatDateTime.js'
    export default {
        name: "bookinfo",
        data(){
            return{
                book:{
                    "_id": "59ba0dbb017336e411085a4e",
                    "title": "元尊",
                    "author": "天蚕土豆",
                    "longIntro": "彼时的归途，已是一条命运倒悬的路。\r\n昔日的荣华，如白云苍狗，恐大梦一场。\r\n少年执笔，龙蛇飞动。\r\n是为一抹光芒劈开暮气沉沉之乱世，问鼎玉宇苍穹。\r\n \r\n复仇之路，与吾同行。\r\n一口玄黄真气定可吞天地日月星辰，雄视草木苍生。\r\n \r\n铁画夕照，雾霭银钩，笔走游龙冲九州。\r\n横姿天下，墨洒青山，鲸吞湖海纳百川。",
                    "cover": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2107590%2F2107590_2607eaf03b2542ba88e4b75ac96bb12c.jpg%2F",
                    "majorCate": "玄幻",
                    "minorCate": "东方玄幻",
                    "latelyFollower": 143025,
                    "wordCount": 3810000,
                    "retentionRatio": "63.02",
                    "updated": "2020-06-07T13:26:22.000Z",
                    "isSerial": true,
                    "chaptersCount": 1270,
                    "lastChapter": "第一千两百五十九章  斗法",
                    "cat": "东方玄幻"
                }
            }
        },
        methods:{
            formatTime(date,format){
                return formatDateTime(date,format);
            }
        }
    }
</script>

<style scoped>

</style>
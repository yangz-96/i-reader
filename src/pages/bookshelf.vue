<template>
    <section>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-row style="height: 85px;border-bottom: 1px solid #ebedf0;padding-top: 5px;" v-for="(item,index) in books" :key="index">
                <van-col span="5" style="padding: 5px 0 5px 5px;text-align: center;">
                    <!--<van-image height="70" width="auto" src="https://bookcover.yuewen.com/qdbimg/349573/1016293952/180" />-->
                    <img style="width: auto;height: 70px;" :src="item.cover"/>
                </van-col>
                <van-col span="16" style="padding: 7px 5px 7px 0;">
                    <div v-text="item.title"></div>
                    <div style="font-size: 12px;color: #b7b2b9;margin-top: 5px;" v-text="item.author + ' · ' + '未读过'"></div>
                    <div class="van-ellipsis" style="font-size: 12px;color: #b7b2b9;margin-top: 5px;" v-text="'连载 · ' + item.lastChapter"></div>
                </van-col>
                <van-col span="3" style="padding:25px 0;text-align: center;">
                    <van-icon name="ellipsis" size="30" @click="showAction(item._id,item.title)" />
                </van-col>
            </van-row>
        </van-list>
        <van-action-sheet v-model="show" @select="onSelect" :title="title" >
            <van-grid :column-num="2">
                <van-grid-item>
                    <van-icon class="iconfont van-icon van-grid-item__icon" class-prefix="icon" name="details" size="26" />
                    <span class="van-grid-item__text">书籍详情</span>
                </van-grid-item>
                <van-grid-item icon="delete" text="移除" />
                <van-grid-item icon="chat-o" text="书友圈" />
                <van-grid-item >
                    <van-icon class="iconfont van-icon van-grid-item__icon" class-prefix="icon" name="share-two" size="26" />
                    <span class="van-grid-item__text">分享本书</span>
                </van-grid-item>
            </van-grid>
        </van-action-sheet>
    </section>
</template>

<script>
    export default {
        name: "bookshelf",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                show: false,
                title:'',
                books: [
                    {
                        "_id": "508646479dacd30e3a000001",
                        "title": "将夜",
                        "author": "猫腻",
                        "longIntro": "与天斗，其乐无穷。",
                        "cover": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F42314%2F42314_e1c68c4267f54a968806264b7538d14a.jpg%2F",
                        "majorCate": "玄幻",
                        "minorCate": "东方玄幻",
                        "latelyFollower": 7462,
                        "wordCount": 3991515,
                        "retentionRatio": "46.61",
                        "updated": "2017-06-03T00:51:27.023Z",
                        "isSerial": false,
                        "chaptersCount": 1119,
                        "lastChapter": "第六卷忽然之间 第一百三十章 结尾",
                        "cat": "东方玄幻"
                    },
                    {
                        "_id": "50865988d7a545903b000009",
                        "title": "斗破苍穹",
                        "author": "天蚕土豆",
                        "longIntro": "这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！\r\n新书等级制度：斗者，斗师，大斗师，斗灵，斗王，斗皇，斗宗，斗尊，斗圣，斗帝。\r\n",
                        "cover": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F41615%2F41615_2ee961bffe91492b93fd844cbd25c765.jpg%2F",
                        "majorCate": "玄幻",
                        "minorCate": "东方玄幻",
                        "latelyFollower": 22237,
                        "wordCount": 5043000,
                        "retentionRatio": "54.4",
                        "updated": "2019-05-30T15:41:11.329Z",
                        "isSerial": false,
                        "chaptersCount": 1681,
                        "lastChapter": "第十五章 精神力量",
                        "cat": "东方玄幻"
                    },
                    {
                        "_id": "508de73e55e53b9a1a000031",
                        "title": "超级兵王",
                        "author": "步千帆",
                        "longIntro": "他是雇佣兵世界的王者，他是令各国元首头疼的兵王！为朋友，他甘愿两肋插刀；为亲人，不惜血溅五步！是龙，终要翱翔于九天之上，携风云之势，一路高歌猛进，混的风生水起。",
                        "cover": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F685385%2F685385_c586cf332a344e2e9153e961a8c8b107.jpg%2F",
                        "majorCate": "都市",
                        "minorCate": "都市生活",
                        "latelyFollower": 14219,
                        "wordCount": 25536000,
                        "retentionRatio": "55.89",
                        "updated": "2019-06-25T09:16:56.892Z",
                        "isSerial": true,
                        "chaptersCount": 8512,
                        "lastChapter": "第4章 星空古盒",
                        "cat": "都市生活"
                    },
                    {
                        "_id": "5091fbcf8d834c0f190000cd",
                        "title": "校花的贴身高手",
                        "author": "鱼人二代",
                        "longIntro": "一个大山里走出来的绝世高手，一块能预知未来的神秘玉佩……\r\n林逸是一名普通学生，不过，他还身负另外一个重任，那就是追校花！而且还是奉校花老爸之命！\r\n虽然林逸很不想跟这位难伺候的大小姐打交道，但是长辈之命难违抗，他不得不千里迢迢的转学到了松山市，给大小姐鞍前马后的当跟班……于是，史上最牛的跟班出现了——大小姐的贴身高手！\r\n ",
                        "cover": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F42303%2F42303_f6be16768fb441ddb63c6322809fdb91.jpg%2F",
                        "majorCate": "都市",
                        "minorCate": "异术超能",
                        "latelyFollower": 20006,
                        "wordCount": 47136000,
                        "retentionRatio": "58.87",
                        "updated": "2019-09-09T10:46:40.258Z",
                        "isSerial": true,
                        "chaptersCount": 15712,
                        "lastChapter": "第4952章 这事我记住了",
                        "cat": "异术超能"
                    },
                    {
                        "_id": "50975b961db679b876000029",
                        "title": "雪中悍刀行",
                        "author": "烽火戏诸侯",
                        "longIntro": "这个江湖。有武夫自称天下第二一甲子。有剑仙一剑破甲两千六。有胆小的骑牛道士肩扛两道。但一样是这个江湖，可能是江湖儿郎江湖死，才初出茅庐，便淹死在江湖中。可能对一个未入江湖的稚童来说，抱住了一柄刀，便是抱住了整座江湖。而主角，一刀将江湖捅了个透！临了，喊一声：小二，上酒~",
                        "cover": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F22517%2F22517_8e9f0bed3eea445eadcc41fab941f7d9.jpg%2F",
                        "majorCate": "玄幻",
                        "minorCate": "东方玄幻",
                        "latelyFollower": 40855,
                        "wordCount": 4555360,
                        "retentionRatio": "57.01",
                        "updated": "2018-03-10T02:31:28.293Z",
                        "isSerial": false,
                        "chaptersCount": 1000,
                        "lastChapter": "第一千章 番外",
                        "cat": "东方玄幻"
                    },
                    {
                        "_id": "50b45582aab49e9d04000035",
                        "title": "吞噬苍穹",
                        "author": "虾米XL",
                        "longIntro": "孤儿轩辕因为痛失至亲，转世重生，来到了以武为尊的异界。得到了近古吞噬大帝的传承，可吞噬天地血肉，魂魄，至宝，化为自身所有，掌控超强杀技。从一个平凡的少年，逐渐成长为九界至尊！皇族娇女，妖族女娲，魔族公主，太古女王……全部都和他发生交集。他逆天而行，威凌天下，凭借自身的天赋与无数的奇遇，最终踏上了征战星空的道路。",
                        "cover": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F686494%2F686494_0650c49eb0a449ae83de50e543aa6e51.jpg%2F",
                        "majorCate": "玄幻",
                        "minorCate": "异界大陆",
                        "latelyFollower": 9107,
                        "wordCount": 6870016,
                        "retentionRatio": "57.77",
                        "updated": "2019-07-18T08:11:00.977Z",
                        "isSerial": false,
                        "chaptersCount": 2178,
                        "lastChapter": "第二千一百七十八章 中兴鸿蒙",
                        "cat": "异界大陆"
                    },
                    {
                        "_id": "50bff9dc209793513100001f",
                        "title": "黑道特种兵",
                        "author": "巅峰残狼",
                        "longIntro": "曾经的军队精英如今却成了黑道份子，一个特殊的任务却让他混迹黑道。\n是堕落，还是龙腾九天？一样的黑道故事，不一样的黑道感觉……\n面对阴谋，看主角如何一步步成长为一个恐怖的存在。天涯无角海做岸，山峰无顶人做峰。09年经典黑道为你呈现！",
                        "cover": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F607686%2F607686_68dd33bbd4384e238cb4f2d503b3602b.jpg%2F",
                        "majorCate": "都市",
                        "minorCate": "都市生活",
                        "latelyFollower": 1004,
                        "wordCount": 18234000,
                        "retentionRatio": "22.05",
                        "updated": "2019-06-16T21:57:43.873Z",
                        "isSerial": false,
                        "chaptersCount": 6078,
                        "lastChapter": "第三百五十九章 破三虚空2",
                        "cat": "都市生活"
                    },
                    {
                        "_id": "510f60ec59762e9453000007",
                        "title": "我的贴身校花",
                        "author": "带玉",
                        "longIntro": "一个普通的高中生，跟随自称是世界顶级杀手的色老头子学功夫，无意间又得到一瓶丹药，让他身怀数种异能，从此踏上了不归路啊有木有？！什么？我还要给你这个色老头子报仇？什么？和靓丽性感的美女同租，和时尚妩媚的警花暧昧风流？好吧，为了我的纯洁，我去！",
                        "cover": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F30253%2F30253_dab31abe0fe44d45bb8ef4e289833142.jpg%2F",
                        "majorCate": "都市",
                        "minorCate": "青春校园",
                        "latelyFollower": 9031,
                        "wordCount": 35766000,
                        "retentionRatio": "46.69",
                        "updated": "2020-04-08T00:31:53.764Z",
                        "isSerial": false,
                        "chaptersCount": 11922,
                        "lastChapter": "10747几秒",
                        "cat": "青春校园"
                    },
                    {
                        "_id": "53115e30173bfacb4904897e",
                        "title": "永夜君王",
                        "author": "烟雨江南",
                        "longIntro": "千夜自困苦中崛起，在背叛中坠落。自此一个人，一把枪，行在永夜与黎明之间，却走出一段传奇。若永夜注定是他的命运，那他也要成为主宰的王。",
                        "cover": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F683452%2F683452_b8c0ecaea75144f6a5873756bc515dfd.jpg%2F",
                        "majorCate": "玄幻",
                        "minorCate": "异界大陆",
                        "latelyFollower": 11419,
                        "wordCount": 4926836,
                        "retentionRatio": "52.88",
                        "updated": "2019-01-09T16:23:59.445Z",
                        "isSerial": false,
                        "chaptersCount": 1515,
                        "lastChapter": "第一千五百一十六章  美丽新世界",
                        "cat": "异界大陆"
                    },
                ]
            };
        },
        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }

                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            },
            onSelect() {
                // 默认情况下点击选项时不会自动收起
                // 可以通过 close-on-click-action 属性开启自动收起
                this.show = false;
            },
            showAction(bookId,title){
                this.show = true;
                this.title = title;
                console.log(bookId);
            }
        }
    }
</script>

<style scoped>

</style>
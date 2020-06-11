<template>
    <section>
        <van-nav-bar title="分类" left-text="返回" left-arrow fixed placeholder z-index="9999"/>
        <van-tabs v-model="active" swipeable sticky>
            <van-tab title="男生">
                <van-grid :border="false" :column-num="2" direction="horizontal">
                    <van-grid-item v-for="(item, index) in maleList" :key="index">
                        <van-image :src="item.bookCover[0]" width="50" />
                        <div style="margin-left: 10px;">
                            <div style="font-size: 16px;font-weight: bolder;" v-text="item.majorCate"></div>
                            <div style="margin-top: 10px;font-size: 14px;color: #9a969a" v-text="item.count + '部'"></div>
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab title="女生">
                <van-grid :border="false" :column-num="2" direction="horizontal">
                    <van-grid-item v-for="(item, index) in femaleList" :key="index">
                        <van-image :src="item.bookCover[0]" width="50" />
                        <div style="margin-left: 10px;">
                            <div style="font-size: 16px;font-weight: bolder;" v-text="item.majorCate"></div>
                            <div style="margin-top: 10px;font-size: 14px;color: #9a969a" v-text="item.count + '部'"></div>
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
        </van-tabs>
    </section>
</template>

<script>
    export default {
        name: "classification",
        data(){
            return{
                active: 0,
                femaleList:[
                    {
                        "gender": "female",
                        "majorCate": "古代言情",
                        "order": 0,
                        "count": 182320,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2175596%2F2175596_432a6d12f75f4616a01ed3bda399ba7f.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2045755%2F2045755_7a7a750f61f64703977e72cca5c8dc90.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1505754%2F1505754_81b22622819e476fb78b2d760f94b617.jpg%2F"
                        ]
                    },
                    {
                        "gender": "female",
                        "majorCate": "现代言情",
                        "order": 1,
                        "count": 201574,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F84550%2F84550_d9200ccb1ab0488ea8a1697143f5bba5.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1367041%2F1367041_b7b17cbc9538413d9f4f4ed7a1e4fb02.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2148350%2F2148350_934ff2b4b6d14bd7949be61df7eed913.jpg%2F"
                        ]
                    },
                    {
                        "gender": "female",
                        "majorCate": "青春校园",
                        "order": 2,
                        "count": 62763,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1200747%2F1200747_8acedaa3e7a547a8843feca07120b2c9.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2279091%2F2279091_9ad0367ced944ec5b1e0c1c96a11fab6.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2238873%2F2238873_8ef2608ca0634a38aa52dfdad35ae5ca.jpg%2F"
                        ]
                    },
                    {
                        "gender": "female",
                        "majorCate": "玄幻奇幻",
                        "order": 4,
                        "count": 44852,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F42127%2F42127_f23f08d9dd1942c8923cedd192425a22.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1240992%2F1240992_ab6af3f8592e44d08eee43e18a7ee6f2.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1527442%2F1527442_a920242541164d159f339f35f82072da.jpg%2F"
                        ]
                    },
                    {
                        "gender": "female",
                        "majorCate": "耽美",
                        "order": 3,
                        "count": 6195,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1174497%2F1174497_707e402c40c64a60ac7bc223f3a2c4ac.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2390042%2F2390042_3179d98d74f54b3b9939d32a391c0a42.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F84011%2F_84011_320357.jpg%2F"
                        ]
                    },
                    {
                        "gender": "female",
                        "majorCate": "武侠仙侠",
                        "order": 5,
                        "count": 23649,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F243028%2F_243028_470038.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2238871%2F2238871_6bc7ecde28084a0c984a2cbd5d1b61ed.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F44329%2F44329_955e2281a0124749acaadb851d21637c.jpg%2F"
                        ]
                    },
                    {
                        "gender": "female",
                        "majorCate": "科幻",
                        "order": 6,
                        "count": 10845,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2207711%2F2207711_524c81ce00b74c508dcb8fa7cac18c75.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2329345%2F2329345_e76b549524a948978e3c9f2548f43406.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2189051%2F2189051_3531d35fe6d44414afb80aa8d7d4c10c.jpg%2F"
                        ]
                    },
                    {
                        "gender": "female",
                        "majorCate": "游戏竞技",
                        "order": 7,
                        "count": 491,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http://image.cmfu.com/books/1744704/1744704.jpg",
                            "http://statics.zhuishushenqi.com/agent/http://bbs.jjwxc.net/upload/201601/07/07-eacb34c.jpg"
                        ]
                    },
                    {
                        "gender": "female",
                        "majorCate": "悬疑灵异",
                        "order": 8,
                        "count": 6173,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1457026%2F1457026_3aeb19659f0c460a8e86a997efbb6534.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1423134%2F1423134_4d765d70d7f44151b44cad100d42bb4a.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2230500%2F2230500_28d011702e3f4d9899e54bcf70b1890a.jpg%2F"
                        ]
                    },
                    {
                        "gender": "female",
                        "majorCate": "同人",
                        "order": 9,
                        "count": 10919,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2229966%2F2229966_8bd448377b104a29bba4f748d1f2d7be.jpg%2F",
                            "",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2194234%2F2194234_d5cd733ac0f54e21a637ca9fec6c0a17.jpg%2F"
                        ]
                    },
                    {
                        "gender": "female",
                        "majorCate": "女尊",
                        "order": 10,
                        "count": 7681,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F851414%2F_851414_740896.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F857217%2F857217_34eea5a4425d4437896b19d2774ac5da.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2241654%2F2241654_dee9d5cbb5984e729f93444f1694c847.jpg%2F"
                        ]
                    },
                    {
                        "gender": "female",
                        "majorCate": "百合",
                        "order": 11,
                        "count": 380,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http://ww1.sinaimg.cn/bmiddle/005K5T3Ogw1ezekp64o88j30b40fk3zd.jpg",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2190302%2F2190302_43cb1be1c97246dbb7f23f1cb54867b4.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2143470%2F2143470_57e5277a76a043e09ed1fc1f411a8fa6.jpg%2F"
                        ]
                    },
                ],
                maleList:[
                    {
                        "gender": "male",
                        "majorCate": "玄幻",
                        "order": 0,
                        "count": 174844,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1228859%2F1228859_d14f18e849b34420904ead54936e440a.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F41584%2F41584_873f1d8b2f7a447a8c59f3573094db1b.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2107590%2F2107590_2607eaf03b2542ba88e4b75ac96bb12c.jpg%2F"
                        ]
                    },
                    {
                        "gender": "male",
                        "majorCate": "奇幻",
                        "order": 1,
                        "count": 25425,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2328044%2F2328044_3077a625538f4ef29384ba71e7387736.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2229427%2F2229427_b89561dfb0ff476281e95642b63032e4.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1130743%2F1130743_42e9200c279a48b7a31001d363ba401c.jpg%2F"
                        ]
                    },
                    {
                        "gender": "male",
                        "majorCate": "武侠",
                        "order": 2,
                        "count": 16004,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F682805%2F682805_ad98924f53e74138a50e69208bd579be.png%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2247827%2F2247827_11355e33136a4811b9f0b7f5dd596960.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F994219%2F994219_21eb3060590440f9b8fd0c73895b8728.jpg%2F"
                        ]
                    },

                    {
                        "gender": "male",
                        "majorCate": "仙侠",
                        "order": 3,
                        "count": 50861,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2014980%2F2014980_4886fb1ed53f453a9a76005611a3310a.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1188355%2F1188355_9989e2c949d147f0ac423da594a54b3f.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2126166%2F2126166_c1002339e5664d7bb1a536e2608fa599.jpg%2F"
                        ]
                    },

                    {
                        "gender": "male",
                        "majorCate": "都市",
                        "order": 4,
                        "count": 93822,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F857368%2F857368_8428516582234635819871b0dd5862e7.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F683354%2F683354_f01a24b90d6a429c8c052614cc2d6ede.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2078208%2F2078208_c0b7721c06b744baa3883f514a113120.jpg%2F"
                        ]
                    },

                    {
                        "gender": "male",
                        "majorCate": "职场",
                        "order": 5,
                        "count": 4453,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1159594%2F1159594_5a3bc597b4f94a76b8f615471563f6a8.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1466377%2F1466377_5b35c940dfa2460f9a52b8ba7ee22e1d.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F870182%2F870182_169292f059144c8e8932d52834219316.JPG%2F"
                        ]
                    },
                    {
                        "gender": "male",
                        "majorCate": "历史",
                        "order": 6,
                        "count": 22789,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2371361%2F2371361_7deb47a053ce4fc0a3f7e42ae72cf4d3.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2326717%2F2326717_fa135a1044fa4602854e9cbe2f0663d5.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2078199%2F2078199_242a8ffcc41a4482b150ea28aa962c92.jpg%2F"
                        ]
                    },
                    {
                        "gender": "male",
                        "majorCate": "军事",
                        "order": 7,
                        "count": 5650,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2266163%2F2266163_7ffd0ca6a6544f5f90a557478d325ef3.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2405465%2F2405465_f5af4826bd8d4fbca23e64c0d1a22fa7.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1154847%2F1154847_e303441cbaee447784e08cc42c233151.jpg%2F"
                        ]
                    },
                    {
                        "gender": "male",
                        "majorCate": "游戏",
                        "order": 8,
                        "count": 23901,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2044454%2F2044454_5ca42e40354d4b898fa81d953a56320b.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2202011%2F2202011_412601e37a0849f6a01519603f1c20e7.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2194747%2F2194747_b15f4efee26647bab7c7bbdb654da586.jpg%2F"
                        ]
                    },

                    {
                        "gender": "male",
                        "majorCate": "竞技",
                        "order": 9,
                        "count": 2572,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2406312%2F2406312_51d09a6f10a44dcf82c87336ae29bcc2.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2379309%2F2379309_eccf51f45dc14c079be9a399120b6da7.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2409674%2F2409674_57d7b70bc261476088a67151712b0c1a.jpg%2F"
                        ]
                    },
                    {
                        "gender": "male",
                        "majorCate": "科幻",
                        "order": 10,
                        "count": 35790,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2175391%2F2175391_2bed95dd170047198e9c550dde86f165.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2185681%2F2185681_d17e1de37a814b769015e624184fe659.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2202193%2F2202193_3fe76aece2f14d5da7fd7b67d43884e1.jpg%2F"
                        ]
                    },

                    {
                        "gender": "male",
                        "majorCate": "灵异",
                        "order": 11,
                        "count": 31564,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2190222%2F2190222_35193469a0ab4198b58e13ec34d49b47.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2437722%2F2437722_0ae1b0af1e4643829952042800e879c5.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2225869%2F2225869_fbfd4ee3058f4c3ca6158395349eafb3.jpg%2F"
                        ]
                    },
                    {
                        "gender": "male",
                        "majorCate": "同人",
                        "order": 12,
                        "count": 14552,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1518279%2F1518279_f75d8d0662ba4fb18224be37cd75621c.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2044717%2F2044717_8909c1c627e441aa9009cd1c8d26af42.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2273555%2F2273555_aedad5c75c434946b224587118f1c5e5.jpg%2F"
                        ]
                    },
                    {
                        "gender": "male",
                        "majorCate": "轻小说",
                        "order": 13,
                        "count": 5623,
                        "bookCover": [
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2204326%2F2204326_65ffd88476dc4894a9a970eeeda5cf89.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2148576%2F2148576_626b71c9e87143c7920ef7188e45c7e7.jpg%2F",
                            "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1494992%2F1494992_5ef21f0940d34c5fb6f11c3dbd0c5b0b.jpg%2F"
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="book">
        <div class="book-image">
            <img style="height: 100%;" :src="book.cover"/>
        </div>
        <div class="book-info">
            <div class="book-title" v-text="book.title"></div>
            <div class="book-author">
                {{book.author}} · {{book.majorCate}} · {{book.isSerial}} · {{book.wordCount}}万字
            </div>
            <div class="van-multi-ellipsis--l3 book-longIntro" v-text="book.longIntro"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "book",
        props: {
            book:{
                type:Object,
                require:true
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .book{
        height: 100px;
        padding: 5px 0px;
    }
    .book-image{
        width:26%;
        height: 100px;
        float: left;
        text-align: center;
    }
    .book-info{
        width: 74%;
        height: 100px;
        float: right;
    }
    .book-title{

    }
    .book-author{
        font-size: 12px;
        padding: 5px 0;
        color: #b7b2b9;
    }
    .book-longIntro{
        font-size: 12px;
        padding: 2px;
    }
</style>
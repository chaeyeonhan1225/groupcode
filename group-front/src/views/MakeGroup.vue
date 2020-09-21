<template>
    <v-container>
        <h1>그룹 만들기</h1>
        <h3>그룹 이름과 그룹 소개, 인원 수를 설정하세요</h3>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field label="그룹 이름" v-model="title"></v-text-field>
                <v-textarea label="그룹 소개" outlined v-model="introduction"></v-textarea>
            </v-col>
            <v-col cols="12" md="6">
                <div class="subtitle">그룹 이름</div>
                <h1><span class="mark_pen">{{this.title==""?"untitled":this.title}}</span></h1>
                <div class="subtitle">그룹 소개</div>
                <div class="content">{{this.introduction}} </div>
                <v-btn style="float:right">등록</v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                title: "",
                introduction: "",
            }
        }
    }
</script>

<style>
    .subtitle {
        font-size: 16px;
        margin-top: 6px;
        color: gray;
    }

    .content {
        font-size: 1.2rem;

    }
</style>
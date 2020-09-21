<template>
    <div>
        <div class="group-card">
            <h2 class="group-title">Group1</h2>
            <div>한국해양대학교 DSC 웹 팀입니다.</div>
            div
            <div style="display:flex;justify-content:space-between;bottom:10px">
                <span style="float:left">
                    인원수: 4명/5명
                </span>
                <span>
                    <v-icon>mdi-dots-vertical</v-icon>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .group-title {
        font-size: 1.8rem;
        color: #469e9a;
    }

    .group-card {
        position: relative;
        background-color: #e3f0f5;
        border: 1px solid #cbe2e4;
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
        min-width: 25rem;
        min-height: 13rem;
    }
    .group-card:hover{
        transform:translateY(-10px);
        transition: 3ms;
    }
</style>
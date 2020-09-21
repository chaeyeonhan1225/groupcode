<template>
<div>
    <div class="group-card">
        <span class="group-title">그룹 만들기</span>
        <router-link to="/group/newgroup"><v-icon style="float:right" large color="blue">mdi-plus</v-icon></router-link>
    </div>
    </div>
</template>

<script>
export default {
    methods: {
        makeGroup(){
            console.log("그룹 만들기!");
        }
    }
}
</script>

<style>
.group-title {
    font-size: 1.8rem;
    color: #469e9a;
}
.group-card {
    background-color: #e3f0f5;
    border: 1px solid  #cbe2e4;
    border-radius: 20px;
    padding: 10px 20px;
    min-width: 25rem;
    min-height: 13rem;
}

</style>
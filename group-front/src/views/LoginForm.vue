<template>
    <v-container>
        <v-card>
            <v-container style="display:block;width: 35rem">
                <h1 style="text-align:center">로그인</h1>
                <div style="text-align:center">이메일과 비밀번호를 입력하세요</div>
                <v-form>
                    <v-text-field label="이메일" v-model="email"></v-text-field>
                    <v-text-field label="비밀번호" v-model="password" type="password"></v-text-field>
                    <a href="/signup"><span>아직 아이디가 없으신가요?</span></a>
                    <div style="display:flex;justify-content:flex-end">
                        <v-btn text>로그인</v-btn>
                    </div>
                </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        
    }
}
</script>
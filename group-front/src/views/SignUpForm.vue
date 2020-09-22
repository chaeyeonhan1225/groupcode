<template>
    <v-container>
        <v-card>
            <v-container style="display:block;width: 35rem">
                <h1 style="text-align:center">회원가입</h1>
                <div style="text-align:center">회원 정보를 입력하세요</div>
                <v-form>
                    <v-text-field label="이메일" v-model="email"></v-text-field>
                    <v-text-field label="비밀번호" type="password" v-model="password"></v-text-field>
                    <v-text-field label="비밀번호 확인" type="password"></v-text-field>
                    <v-text-field label="닉네임" v-model="nick"></v-text-field>
                    <v-checkbox label="회원 정보를 알맞게 입력하였습니다." v-model="agree"></v-checkbox>
                    <div style="display:flex;justify-content:flex-end">
                        <v-btn type="submit" text>회원가입</v-btn>
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
            nick: null,
            agree: null,
        }
    }
}
</script>
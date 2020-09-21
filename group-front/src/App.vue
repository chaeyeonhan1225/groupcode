<template>
  <v-app>
    <v-app-bar app flat color="white">
      <v-spacer></v-spacer>
      <a href="/"><h1>GroupCode</h1></a>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs centered>
          <v-tab to="/login">SignIn</v-tab>
          <v-tab>MyGroup</v-tab>
          <v-tab>TASK</v-tab>
          <v-tab>SETTING</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-row>
        <v-col cols="12" md="2" />
        <v-col cols="12" md="8">
          <router-view />
        </v-col>
        <v-col cols="12" md="2" />
      </v-row>
      <v-footer dark padless>
        <v-row justify="center" no gutters>
          <v-card flat tile class="white--test text-center" style="width:100%">
            <v-card-text>This is Footer</v-card-text>
          </v-card>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      //
    }),
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
* {
  font-family: 'Noto Sans KR', sans-serif;
}

.mark_pen{
  background: linear-gradient(to top,yellow 50%,transparent 50%);
}

</style>
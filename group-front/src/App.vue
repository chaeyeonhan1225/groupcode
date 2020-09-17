<template>
  <v-app>
    <v-app-bar app flat>
      <v-spacer></v-spacer>
      <v-toolbar-title>GroupCode</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title grow>
          <v-tab>Menu1</v-tab>
          <v-tab>Menu2</v-tab>
          <v-tab>Menu3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-row>
        <v-col cols="12" md="2"/>
        <v-col cols="12" md="8">
          <LoginForm/>
        </v-col>
        <v-col cols="12" md="2"/>
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
  import LoginForm from './components/LoginForm';

  export default {
    name: 'App',

    components: {
      LoginForm
    },

    data: () => ({
      //
    }),
  };
</script>
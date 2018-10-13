import Vue from 'vue/dist/vue.esm';
import * as  Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';
import Header from '../components/layouts/header.vue';
import Router from '../router/router'

Vue.use(Bootstrap);

const app = new Vue({
    router: Router,
    el: "#app",
    components: {
        'nav-bar': Header
    },
    data() {
        return {
            text: "Welcome to Iron! That's  Rust Web Application Framework!"
        }
    }
})
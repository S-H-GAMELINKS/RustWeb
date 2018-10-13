import Vue from 'vue/dist/vue.esm';
import * as  Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';
import Header from '../components/layouts/header.vue';

Vue.use(Bootstrap);

const app = new Vue({
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
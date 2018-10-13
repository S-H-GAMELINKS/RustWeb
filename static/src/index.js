import Vue from 'vue/dist/vue.esm';
import Header from '../components/layouts/header.vue';

const app = new Vue({
    el: "#app",
    components: {
        'nav-bar': Header
    },
    data() {
        return {
            text: "Awesome Iron!"
        }
    }
})
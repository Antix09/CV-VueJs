import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// EventBus pour la navigation
export const eventBus = new Vue({
    data: {
        page: "Profil",
    },
    methods: {
        changePage(page) {
            this.page = page;
            this.$emit("update:page", this.page);
        },
    },
});

new Vue({
    render: (h) => h(App),
}).$mount("#app");

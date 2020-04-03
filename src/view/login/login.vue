<template>
    <div class="login-page">demo</div>
</template>

<script>
export default {
    name: "login",
    components: {},
    data() {
        return {};
    },
    methods: {
        handleLogin() {
            console.log("login");
        }
    }
};
</script>

<style lang="less">
@import "../../style/mixin";

.login-page {
    min-height: 100vh;
    background-color: #ffffff;
}
</style>

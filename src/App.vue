<template>
    <div id="app">
        <!-- <keep-alive include="presents-house"> -->
        <router-view />
        <!-- </keep-alive> -->
    </div>
</template>
<script>
export default {
    created() {
        // this.$api.jssdk({url: window.location.href.split("#")[0]}).then(
        //     res => {
        //         if (res.errCode === 0) {
        //             /* eslint-disable no-undef */
        //             wx.config({
        //                 debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出
        //                 appId: res.body.sign.appId, // 必填，公众号的唯一标识
        //                 timestamp: res.body.sign.timestamp, // 必填，生成签名的时间戳
        //                 nonceStr: res.body.sign.nonceStr, // 必填，生成签名的随机串
        //                 signature: res.body.sign.signature, // 必填，签名
        //                 jsApiList: ["scanQRCode", "openAddress", "chooseWXPay"] // 必填，需要使用的JS接口列表
        //             });
        //         } else {
        //             this.$notify(res.errMsg);
        //         }
        //     },
        //     () => {
        //     }
        // );
    }
};
</script>
<style>
* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

html {
    /* 当设计图为375px */
    font-size: 10vw;
    /* 当设计图为750px */
    /*font-size: 5vw !important;*/
}

body {
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;
}

#app {
    -webkit-overflow-scrolling: touch;
}
</style>

<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="router-view-c" ref="routerView" />
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            transitionName: "normal"
        };
    },
    watch: {
        $route(to, from) {
            if (to.query["stack"] === "forward") {
                this.transitionName = "forward";
            } else if (to.query["stack"] === "back") {
                this.transitionName = "back";
            } else {
                this.transitionName = "normal";
            }
        }
    },
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
    min-height: 100vh;
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;
}

#app {
    -webkit-overflow-scrolling: touch;
}
.router-view-c {
    position: absolute;
    transition: opacity 0.5s, transform 0.5s;
    width: 100%;
}

.forward-enter,
.back-leave-active {
    opacity: 0.5;
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
}

.forward-leave-active,
.back-enter {
    opacity: 0.5;
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
}

.normal-enter-active,
.normal-leave-active {
    transition: opacity 0.1s;
}

.normal-enter,
.normal-leave-to {
    opacity: 0;
}
</style>

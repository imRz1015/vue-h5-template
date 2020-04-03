import Service from "./Service";

export default {
    // demo
    demo(data) {
        return Service.post("/demo", data);
    },
    jssdk(data) {
        return Service.post('/jssdk', data);
    }
};

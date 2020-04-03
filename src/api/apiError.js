import { Toast, Notify } from 'vant';

export default function (error) {
    let { errCode, errMsg } = error.response.data;
    switch (errCode) {
        case 50004:
            // Toast('登录超时，请重新登录');
            Notify('登录超时，请重新登录');
            break;
        case 50005:
            // Toast('该账号在其他地方登录，您即将被强制登出');
            Notify('该账号在其他地方登录，您即将被强制登出');
            break;
        default:
            // Toast('网络异常，请稍后再试')
            Notify('网络异常，请稍后再试');
    }
}

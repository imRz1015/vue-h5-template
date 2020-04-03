/**
 *  这个方法是为了解决在IOS中，对使用了Fixed布局的元素中含有输入框，点击弹出键盘后，会引起DOM错乱
 *  但是用户手动滑动一下页面即可解决，所以这个方法是判断在IOS下，模拟用户滑动页面的操作
 */
export function inputBlur() {
    let isIphone = navigator.userAgent.includes('iPhone');
    let isIpad = navigator.userAgent.includes('iPad');
    let isIos = isIphone || isIpad;
    if (isIos) {
        let currentPosition, timer;
        let speed = 1;//页面滚动距离
        timer = setInterval(function () {
            currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            currentPosition -= speed;
            window.scrollTo(0, currentPosition);//页面向上滚动
            currentPosition += speed; //speed变量
            window.scrollTo(0, currentPosition);//页面向下滚动
            clearInterval(timer);
        }, 1);
    }
}

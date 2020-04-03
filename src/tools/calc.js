/**
 * created by TANGIMING
 * 2019-3-30
 *
 * 这是处理JS 小数 加减乘除丢失精度的方法
 *
 *      ----- 多级运算时，  最后一级才保留小数
 *
 */


/***
 * 重写 toFixed 方法
 *
 * -------- 解决 toFixed 采用的不是严格的四舍五入的标准
 * -------  四舍六入五成双 --- 银行家舍入法
 * @param d
 * @returns {string}
 */
Number.prototype.toFixed = function (d) {
    let s = this + "";
    if (!d) d = 0;
    if (s.indexOf(".") == -1) s += ".";
    s += new Array(d + 1).join("0");
    if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (d + 1) + "})?)\\d*$").test(s)) {
        let s = "0" + RegExp.$2, pm = RegExp.$1, a = RegExp.$3.length, b = true;
        if (a == d + 2) {
            a = s.match(/\d/g);
            if (parseInt(a[a.length - 1]) > 4) {
                for (var i = a.length - 2; i >= 0; i--) {
                    a[i] = parseInt(a[i]) + 1;
                    if (a[i] == 10) {
                        a[i] = 0;
                        b = i != 1;
                    } else break;
                }
            }
            s = a.join("").replace(new RegExp("(\\d+)(\\d{" + d + "})\\d$"), "$1.$2");

        } if (b) s = s.substr(1);
        return (pm + s).replace(/\.$/, "");
    } return this + "";

};


/****
 * @ l 最后保留长度
 */

export default {
    //除法
    accDiv(arg1, arg2) {
        if (!arg1) return 0;
        let t1 = 0, t2 = 0, r1, r2, t;
        try {
            t1 = arg1.toString().split(".")[1].length
        } catch (e) {
        }
        try {
            t2 = arg2.toString().split(".")[1].length
        } catch (e) {
        }
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        t = this.accMul((r1 / r2), Math.pow(10, t2 - t1));
        return t


    },
    //乘法
    accMul(arg1, arg2) {
        if (!arg1) return 0;
        let m = 0, s1 = arg1.toString(), s2 = arg2.toString(), t;
        try {
            m += s1.split(".")[1].length
        } catch (e) {
        }
        try {
            m += s2.split(".")[1].length
        } catch (e) {
        }
        t = Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
        return t
    },

    //加法
    accAdd(arg1, arg2) {
        let r1, r2, m, t;
        try {
            r1 = arg1.toString().split(".")[1].length
        } catch (e) {
            r1 = 0
        }
        try {
            r2 = arg2.toString().split(".")[1].length
        } catch (e) {
            r2 = 0
        }
        m = Math.pow(10, Math.max(r1, r2));
        t = (arg1 * m + arg2 * m) / m;
        return t

    },
    //减法
    Subtr(arg1, arg2) {
        let r1, r2, m, n, t;
        try {
            r1 = arg1.toString().split(".")[1].length
        } catch (e) {
            r1 = 0
        }
        try {
            r2 = arg2.toString().split(".")[1].length
        } catch (e) {
            r2 = 0
        }
        n = Math.max(r1, r2);
        m = Math.pow(10, n);
        t = Number(((arg1 * m - arg2 * m) / m).toFixed(n));
        return t

    }
}

/**
 *author: 	brwon
 *name: 		公用的js
 *date: 		2016-6-23 16:43
 */

var mobileExp = /^1[3,5,7-8][0-9]{9}$/i; //手机正则
var passwordExp = /^(?![^a-zA-Z]+$)(?!\D+$)[0-9a-zA-Z]{6,16}$/; //密码正则
var messageExp = /^[0-9]{6}$/; //验证码正则
var okeyExp = /^1[3,5,7-8][0-9]{9}$/i; //推荐码
var nameExp = /^[\u4E00-\u9FA5]{2,10}$/; //真实姓名
var emailExp = /^[a-z0-9]+([._\-]*[a-z0-9])*@([-a-z0-9]*[a-z0-9]+.){2,63}[a-z0-9]+$/i; //邮箱绑定
var amountExp = /^([1-9]{1}[0-9]{0,7}|0){1}(.[0-9]{1,2}){0,1}$/; //金额
//借款人身份验证
var $company_name = /^[A-Za-z\u4E00-\u9FA5]{1,90}$/;
var $address = /^[A-Za-z0-9#\(\)（）\u4E00-\u9FA5]{1,90}$/;
var $license_address = /^[A-Za-z0-9#\(\)（）\u4E00-\u9FA5]{1,50}$/;
var $website = /^((http:\/\/)|(https:\/\/))[0-9a-zA-Z-.]{1,90}$/;
var $license_no = /^\d{1,50}$/; //数字15位
var $business_scope = /^[\(\)（），,、。;；\u4E00-\u9FA5]{1,50}$/;
var $license_expire_date = /^\d{4}-\d{2}-\d{2}$/;
var $telephone = /^[\d]{1,20}$/; //联系电话
var $organization_no = /^[\d-]{1,32}$/; //组织机构证
var $summary = /^[a-zA-Z_\-\(\)（），,、。;；\u4E00-\u9FA5\d]{1,512}$/;
var $cert_no = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
var $province = /^[\u4E00-\u9FA5]{2,8}$/;
var $city = /^[\u4E00-\u9FA5]{2,8}$/;
var $legal_person = /^[\u4E00-\u9FA5]{1,32}$/;
var $bank_branch = /^[\u4E00-\u9FA5]{2,32}$/;
var $bank_account_no = /^\d{6,32}$/;
//截取保留到小数点后两位正则
var matchTwoExp = /^\d+(?:\.\d{0,2})?/;
var zipcode = /^[1-9][0-9]{5}$/; //邮政编码正则

function matchTwo(num) {
    return num.toString().match(matchTwoExp);
}

//阻止表单提交
function formNo() {
    $("form").submit(function(e) {
        e.preventDefault();
    });
}
/**
 * @desc 获取非安全连接的二级域名
 * @access public
 * @param
 * @return string domain
 */
function getHP() {
    //	return "http://test.www.benrongfax.com";
    return "";
}

//正则表达式
function reg(val, exp) {
    if (!exp.test(val)) {
        return false;
    } else {
        return true;
    }
}

//判断是否为空
function is_null(val) {
    if (typeof(val) == undefined) {
        return true;
    } else if (val == null) {
        return true;
    } else {
        if ($.trim(val) == "") {
            return true;
        }
    }
    return false;
}

//去掉两端空格
function trim(val) {
    return val.replace(/(^\s*)|(\s*$)/g, "");
}
//判断金额
function is_amount(val) {
    return reg(val, amountExp);
}
//判断真实姓名正则
function is_name(val) {
    return reg(val, nameExp);
}
//判断手机正则
function is_mobile(val) {
    return reg(val, mobileExp);
}
//判断手机正则
function is_telephone(val) {
    return reg(val, $telephone);
}
//判断邮政编码
function is_zipcode(val) {
    return reg(val, zipcode);
}

//判断法人手机
function is_legal_person_phone(val) {
    return reg(val, mobileExp);
}

//判断密码正则
function is_password(val) {
    return reg(val, passwordExp);
}

//判断验证码正则
function is_message(val) {
    return reg(val, messageExp);
}

//判断推荐码正则
function is_okey(val) {
    return reg(val, okeyExp);
}

//判断邮箱正则
function is_email(val) {
    if (val.length > 50) {
        return false;
    }
    return reg(val, emailExp);
}

//判断企业名称
function is_company_name(val) {
    return reg(val, $company_name);
}

//判断企业地址
function is_address(val) {
    return reg(val, $address);
}

//判断企业地址
function is_license_address(val) {
    return reg(val, $license_address);
}


//判断企业地址
function is_website(val) {
    return reg(val, $website);
}

//判断
function is_license_no(val) {
    return reg(val, $license_no);
}

//判断
function is_business_scope(val) {
    return reg(val, $business_scope);
}

//判断
function is_license_expire_date(val) {
    return reg(val, $license_expire_date);
}

//判断
function is_organization_no(val) {
    return reg(val, $organization_no);
}

//判断
function is_summary(val) {
    //	return reg(val,$summary);
    if (val.length > 1000) {
        return false;
    } else {
        return true;
    }
}

//判断法人证件号码
function is_cert_no(val) {
    return is_identity(val);
}

//判断省份
function is_province(val) {
    return reg(val, $province);
}

//判断城市
function is_city(val) {
    return reg(val, $city);
}

//判断法人名称
function is_legal_person(val) {
    return reg(val, $legal_person);
}

//判断
function is_bank_branch(val) {
    return reg(val, $bank_branch);
}

//判断
function is_bank_account_no(val) {
    return reg(val, $bank_account_no);
}

//判断身份证方法
function is_identity(id) {
    var strlen = id.length;
    if (strlen != 18) {
        return false;
    }
    var set = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var ver = ['1', '0', 'x', '9', '8', '7', '6', '5', '4', '3', '2'];
    var arr = id.split("");
    var sum = 0;
    for (var i = 0; i < 17; i++) {
        if (isNaN(arr[i])) {
            return false;
        }
        sum += arr[i] * set[i];
    }
    var mod = sum % 11;
    if (ver[mod] != arr[17]) {
        if (mod == 2) {
            if (arr[17] == "X" || arr[17] == "x") {
                return true;
            }
        }
        return false;
    }
    return true;
}

/**
 * @desc 将时间戳转换为YYYY-MM-DD格式
 * @access public
 * @param 时间戳
 * @return string
 */
function formatDate(now) {
    var d = new Date(now * 1000);
    var month = parseInt(d.getMonth()) + 1;
    var day = parseInt(d.getDate());
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return d.getFullYear() + "-" + month + "-" + day;
}

function formatDateFont(now) {
    var d = new Date(now * 1000);
    var month = parseInt(d.getMonth()) + 1;
    var day = parseInt(d.getDate());
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return d.getFullYear() + "年" + month + "月" + day + "日";
}

/**
 * @desc 将时间戳转换为YYYY-MM-DD HH:ii
 * @access public
 * @param
 * @return string
 */
function formatDateTime(now) {
    var d = new Date(now * 1000);
    var hour = parseInt(d.getHours());
    var minute = parseInt(d.getMinutes());
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    return formatDate(now) + " " + hour + ":" + minute;
}

//排他
function tab(btn, div1, div2) {
    btn.click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        div1.show();
        div2.hide();
    });
}

/**
 * @desc 金额转换，保留2位小数并四舍五入
 * @author：qiurui
 * @createDate：2016-08-10
 * @param  num / string : 1000.59
 * @return string : 1,000.60
 */
function getMoneyFormat(number) {
    number = number + ''; //数字转换成字符串
    number = number.replace(/\,/g, ""); //将 , 转换为空
    //判断是否是数字
    if (isNaN(number) || number == "") {
        return "";
    }
    //四舍五入,保留2位
    number = Math.round(number * 100) / 100;
    //是否是负数
    if (number < 0) {
        return '-' + getFormatYuan(Math.floor(Math.abs(number) - 0) + '') + getFormatCents(Math.abs(number) - 0);
    } else {
        return getFormatYuan(Math.floor(number - 0) + '') + getFormatCents(number - 0);
    }
    //格式化整数
    function getFormatYuan(number) {
        //判断是否是0.几几
        if (number.length <= 3) {
            return (number == '' ? '0' : number);
        } else {
            var mod = number.length % 3; //求余
            //截取字符开头的数字
            var output = (mod == 0 ? '' : (number.substring(0, mod)));
            for (var i = 0; i < Math.floor(number.length / 3); i++) {
                //mod==0 && i==0 说明数字的长度被3整除；第一次循环的时候截取（0,3）位
                if ((mod == 0) && (i == 0)) {
                    output += number.substring(mod + 3 * i, mod + 3 * i + 3);
                } else {
                    output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
                }
            }
            return (output);
        }
    }
    //格式化小数
    function getFormatCents(amount) {
        amount = Math.round(((amount) - Math.floor(amount)) * 100);
        return (amount < 10 ? '.0' + amount : '.' + amount);
    }
}

//交易类型英文显示为汉子
function getType(r) {
    //'交易类型\npurchase—购买\nrecharge—充值\nwithdraw—提现\nrepay.investor—回款投资者\npay.debtor—打款到借方\nrepay.merchant—还款商户'
    if (r.type == "purchase") {
        a = "购买</br>" + (r.description).replace("投资", "") + "</br>" + r.order_number;
    } else if (r.type == "withdraw") {
        a = "提现";
    } else if (r.type == "repay.investor") {
        a = "回款 </br>" + (r.description).replace("回款", "") + "</br>" + r.order_number;
    } else if (r.type == "refund.investor") {
        a = "退款 </br>" + (r.description).replace("退款", "") + "</br>" + r.order_number;
    } else if (r.type == "recharge") {
        a = "充值";
    } else if (r.type == "pay.debtor") {
        a = "打款";
    } else if (r.type == "repay.merchant") {
        a = "还款";
    } else {
        a = "";
    }
}

//根据期限类型显示相应的年月日
function periodType(r) {
    if (r.period_type == "day") {
        period_type = "天";
    } else if (r.period_type == "month") {
        period_type = "个月";
    } else if (r.period_type == "year") {
        period_type = "年";
    } else {}
}

//判断期数类型 	
function qishu(r) {
    var qishu_type = "";
    if (r == "day") {
        qishu_type = "天";
    } else if (r == "month") {
        qishu_type = "个月";
    } else if (r == "year") {
        qishu_type = "年";
    } else {}
    return qishu_type;
}






















//单除总百分比进度＋“％”，外加四舍五入
function chu(a, b) {
    if (a / b == 1) {
        return (a / b * 100) + "%";
    } else {
        return getMoneyFormat(a / b * 100) + "%";
    }
}


//计算倒计时 ,时间戳 id 
function jisuandaojishi(id, closeTime) {
    var displayTime;

    function showTime() {
        var day = Math.floor(closeTime / (60 * 60 * 24));
        var hour = Math.floor(closeTime / (3600)) - (day * 24);
        var minute = Math.floor(closeTime / (60)) - (day * 24 * 60) - (hour * 60);
        var second = Math.floor(closeTime) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        closeTime -= 1;
        var html = day + '天' + hour + '小时' + minute + '分' + second + '秒';
        id.html(html);
        if (closeTime == -1) {
            clearInterval(displayTime);
            document.location.href = document.location.href;
            return;
        }
    }
    showTime();
    displayTime = setInterval(function() {
        showTime();
    }, 1000)
}

//计算当月多少钱
function getDaysInMonth(year, month) {
    var d = new Date(now * 1000);
    var hour = parseInt(d.getFullYear());
    var minute = parseInt(d.getMonth());
    month = parseInt(month, 10) + 1;
    var temp = new Date(year + "/" + month + "/0");
    return temp.getDate();
}

//计算月收益
function get_days(timestamp, add_month_num) {
    var day_sum = 0; //总天数
    var cur_date = new Date(timestamp * 1000);
    var cur_yea = cur_date.getFullYear();
    var cur_mon = cur_date.getMonth() + 1;
    var cur_day = cur_date.getDate();

    var cur_day_num = get_day_of_month(cur_yea, cur_mon);
    day_sum = cur_day_num - cur_day; //当前月份剩余天数
    //循环每个月天数
    for (var i = 0; i < add_month_num; i++) {
        cur_mon++;
        if ((cur_mon + 1) == 13) {
            cur_yea + 1;
            cur_mon = 1;
        }
        cur_day_num = get_day_of_month(cur_yea, cur_mon);

        if (i < (add_month_num - 1)) { //前几个月
            day_sum += cur_day_num;
        } else { //最后一个月
            if (cur_day > cur_day_num) { //对天大于月份,则返回当月天数
                day_sum += cur_day_num;
            } else { //对天小于月份,
                day_sum += cur_day;
            }
        }
    }
    return day_sum;
}

function get_day_of_month(y, m) {
    var day = 31;
    if (m == '2') {
        is_leap_year(y) ? day = 28 : day = 29;
    } else if (m == '4' || m == '6' || m == '9' || m == '11') {
        day = 30;
    }
    return day;
}

function is_leap_year(pYear) {
    if ((pYear % 4 == 0 && pYear % 100 != 0) || (pYear % 100 == 0 && pYear % 400 == 0)) {
        return true;
    }
    return false;
}

function setCookie(name, value) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + 1 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function num2Add(num1, num2) {
    return (num1 * 100 + num2 * 100) / 100;
}

function num3Add(num1, num2, num3) {
    return (num1 * 100 + num2 * 100 + num3 * 100) / 100;
}

//获取银行下拉列表
function optionBank(sec) {
    $.ajax({
        type: "get",
        async: false,
        url: getHP() + "/bank/corp.html",
        error: function() {
            console.log("ajax-error");
        },
        success: function(res) {
            $.each(res, function(i, v) {
                sec.append("<option value='" + $.trim(v.code) + "'>" + v.name + "</option>");
            });
        }
    });
}


//判断域名是否包含benrongfax
function is_benrongfax(url, time) {
    var str = "benrongfax";
    if (url.indexOf(str) > 8) {
        clearInterval(time);
    }
}


//弹窗提示
function q_alert() {
    alert("系统异常，请联系客服！");
}

//把数组字符串转换为数字
function strToNum(arr) {
    var json = [];
    for (var i = 0; i < arr.length; i++) {
        json.push(arr[i] - 0);
    }
    return json;
}

//获取项目期限
function getProductDeadline(a, b) {
    var c = Math.ceil((a - b) / 86400);
    if (c < 0) {
        c = 0;
    }
    return c;
}



//判断正整数
function isPositiveNum(s) { //是否为正整数
    var re = /^[0-9]*[1-9][0-9]*$/;
    if (re.test(s)) {
        s = s + ".00";
    }
    return s;
}

//获取url后面的参数
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    //	var url = document.referrer;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    var hash = window.location.hash.replace("#page-", '');
    if (!is_null(hash)) {
        theRequest['page'] = hash;
    }
    var page = theRequest['page'];
    return page;
}

function GetRequest2() {
    var url = location.search; //获取url中"?"符后的字串   
    //	var url = document.referrer;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    var type = theRequest['type'];
    return type;
}

//改变url参数
function changeURLPar(destiny, par, par_value) {
    var pattern = par + '=([^&]*)';
    var replaceText = par + '=' + par_value;
    if (destiny.match(pattern)) {
        var tmp = '/\\' + par + '=[^&]*/';
        tmp = destiny.replace(eval(tmp), replaceText);
        return (tmp);
    } else {
        if (destiny.match('[\?]')) {
            return destiny + '&' + replaceText;
        } else {
            return destiny + '?' + replaceText;
        }
    }
    return destiny + '\n' + par + '\n' + par_value;
}

//检测窗口高度让弹框居中显示
function winCenter(dom, height) {
    var windowHeight = document.documentElement.clientHeight;
    dom.css({
        "margin-top": (windowHeight - height) / 2
    });
}

//封装jqajax方法
function ajaxfun(url, data, succ, is_show) {
    if (is_null(is_show)) {
        $("#q_load").show();
    } else {
        $("#q_load").hide();
    }
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "JSON",
        success: succ,
        error: function() {
            $("#q_load").hide();
            console.log("ajax-error");
        }
    });
}


function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}

function getCookie1(key) {
    var cookieArr = document.cookie.split(';');
    for (var i = 0; i < cookieArr.length; i++) {
        var u = cookieArr[i];
        u = u.replace(/(^\s*)|(\s*$)/g, '');
        var d = u.split('=');
        if (key == d[0]) {
            return d[1];
        }
    }
}
//判断数字是否为小数
function hasDot(num) {
    if (!isNaN(num)) {
        return ((num + '').indexOf('.') != -1) ? true : false;
    }
}
//截取小数点后面的数字,控制前后数字大小
function subStrNum(num, fontSize) {
    var str = "",
        first_str_match, last_str_match, small_num, span;
    var r = /^\+?[1-9][0-9]*$/;　　 //正整数
    var first_exp = /[0-9]+/;
    var last_exp = /.\d+$/;
    var str = (num - 0) * 100 / 100;
    if (!hasDot(str)) { //判断正整数
        str = str + "";
        small_num = "0";
    } else {
        str = str + "";
        last_str_match = str.match(last_exp);
        small_num = last_str_match[0].replace(".", "");
    }
    first_str_match = str.match(first_exp);
    span = first_str_match[0] + ".<span style='font-size:" + fontSize + "px'>" + small_num + "</span>";
    return span;
}

// 截取url中字符串
function GetIc(url) {
    var ic = "";
    if (url.indexOf("brfax") > 0) {
        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("brfax");
        ic = paraString[1].replace("ic", "");
    }
    return ic;
}
//截取url后面的字符串
function GetQd(url) {
    var qd = "";
    if (url.indexOf("brfax") > 0) {
        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("brfax");
        qd = paraString[0].replace("qd", "");
    }
    return qd;
}

/**
 * 设置cookie
 * @param key 
 * @param val
 * @param exp 有效期单位为秒
 */
function setCookie1(key, val, exp) {
    var d = new Date();
    d.setTime(d.getTime() + exp * 1000); //1000为毫秒
    var expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + val + ";" + expires + ";path=/";
}

function setCount() {
    var isCount = getCookie1("isCount");
    if (typeof isCount == "undefined" || isCount == "" || isCount == 1) {
        setCookie1("isCount", 1, 5);
    } else {
        setCookie1("isCount", 2, 5);
    }
}
if (void 0 == fapiaotong_DEBUG) {
	var fapiaotong_DEBUG = !1;
}
if (void 0 == GID) {
	var GID = "fapiaotong";
}
if (void 0 == APP_API_URL) {
	var APP_API_URL = "http://mp.weixin.qq.com" ? "/s?__biz=MzI1MDAzODgxNg==&mid=212072632&idx=1&sn=1e47eaa93766a4227fdc32420707d15d#rd" : "/s?__biz=MzI1MDAzODgxNg==&mid=212072632&idx=1&sn=1e47eaa93766a4227fdc32420707d15d#rd";
}
if (void 0 == APP_LIST_URL) {
	var APP_LIST_URL = "/s?__biz=MzI1MDAzODgxNg==&mid=212072632&idx=1&sn=1e47eaa93766a4227fdc32420707d15d#rd";
}
if (void 0 == APP_FOLLOW_URL) {
	var APP_FOLLOW_URL = "http://mp.weixin.qq.com/s?__biz=MzI1MDAzODgxNg==&mid=212072632&idx=1&sn=1e47eaa93766a4227fdc32420707d15d#rd";
}
if (void 0 == ENABLE_SHARE) {
	var ENABLE_SHARE = !0;
}
if (void 0 == ENABLE_LB) {
	var ENABLE_LB = !0;
}
var APP_DEPLOYMENT = "WX",
	IS_IOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1,
	IS_ANDROID = -1 < navigator.userAgent.indexOf("Android"),
	KEY_MY_ID = "myid",
	KEY_FOLLOWED = "flw",
	KEY_BEST_SUFFIX = ":best";

function fapiaotongLog() {
	console.log(arguments);
}
fapiaotongShare = {
	title: GID,
	desc: GID,
	link: "http://q" + (Math.floor(Math.random() * 20000)) + ".qcloud130.com/game/count_fapiao/?t=" + (new Date()).valueOf(),
	imgUrl: "/game/count_fapiao/img/sharePic.png",
	doneJump: "http://mp.weixin.qq.com/s?__biz=MzI1MDAzODgxNg==&mid=212072632&idx=1&sn=1e47eaa93766a4227fdc32420707d15d#rd"
};
document.addEventListener("WeixinJSBridgeReady", function() {
	APP_DEPLOYMENT = "WX";
	WeixinJSBridge.call("showOptionMenu");
	WeixinJSBridge.call("hideToolbar");
	WeixinJSBridge.on("menu:share:appmessage", function(b) {
		WeixinJSBridge.invoke("sendAppMessage", {
			title: fapiaotongShare.title,
			desc: fapiaotongShare.desc,
			link: fapiaotongShare.link,
			img_url: fapiaotongShare.imgUrl
		}, function(a) {
			document.location.href = fapiaotongShare.doneJump;
		});
	});
	WeixinJSBridge.on("menu:share:timeline", function(b) {
		WeixinJSBridge.invoke("shareTimeline", {
			title: fapiaotongShare.desc,
			desc: fapiaotongShare.desc,
			link: fapiaotongShare.link,
			img_url: fapiaotongShare.imgUrl
		}, function(a) {
			document.location.href = fapiaotongShare.doneJump;
		});
	});
	WeixinJSBridge.on("menu:share:weibo", function(b) {
		WeixinJSBridge.invoke("shareWeibo", {
			content: fapiaotongShare.desc,
			url: fapiaotongShare.link
		}, function(a) {
			document.location.href = fapiaotongShare.doneJump;
		});
	});
});
(function(b, h) {
	var j = APP_API_URL + "social/",
		i = location.search ? location.search : "",
		e = GID + KEY_BEST_SUFFIX;
	b.myPid = function() {
		return b.storage.get(KEY_MY_ID);
	};
	b.isFollowed = function() {
		return b.storage.get(KEY_FOLLOWED);
	};
	b.updateLoginInfo = function(a, c) {
		fapiaotongLog("updateLoginInfo");
		fapiaotongLog("pid: " + a);
		fapiaotongLog("followed: " + c);
		a && a != b.storage.get(KEY_MY_ID) && b.storage.set(KEY_MY_ID, a);
		a && a != b.storage.get(KEY_FOLLOWED) && b.storage.set(KEY_FOLLOWED, c);
	};
	b.onNewScore = function(a) {
		ENABLE_LB && (a > b.best && (newRecord = !0, a > b.best && (b.best = a, b.storage.set(e, b.best))), a > SCORE_LIMIT && b.uploadScore(a));
	};
	b.storage = b.storage || {};
	b.storage.get = function(c) {
		try {
			if (c in localStorage) {
				return localStorage[c];
			}
		} catch (d) {}
		return $.cookie(c);
	};
	b.storage.set = function(d, f) {
		try {
			return localStorage[d] = f, !0;
		} catch (g) {}
		$.cookie(d, f, {
			expires: 365
		});
		return !0;
	};
	b.score = 0;
	b.best = b.storage.get(e) || 0;
	b.newRecord = !1;
	b.newscore_wxoauth = function(a) {
		return;
		a = APP_API_URL + "wxoauth/newscore/" + GID + "/?score=" + a + "&callback=?";
		fapiaotongLog(a);
	};
	b.uploadScore = function(a) {
		return;
		a = APP_API_URL + "newscore/" + GID + "/" + a + "/?callback=?";
		fapiaotongLog(a);
	};
	b.startOAuth = function() {
		fapiaotongLog(APP_API_URL + "wxoauth_start");
		window.open(APP_API_URL + "wxoauth_start");
	};
	b.leaderboard = function(d, f, g) {
		return;
		fapiaotongLog(APP_API_URL + "leaderboard/" + f + "/" + g + "?callback=?");
	};
	b.onGameInit = function() {};
	b.onGameStarted = function() {
		fapiaotongStage.showFollowAnim(!1);
	};
	b.onGameOver = function() {
		fapiaotongStage.showFollowAnim(!0);
	};
	b.social = b.social || {};
	b.social.chongzhi = function(a) {
		fapiaotongLog(j + "chongzhi" + i);
	};
	b.social.startOAuth = function(a) {
		a = encodeURIComponent(a);
		fapiaotongLog(j + "wxoauth_start/?ret=" + a);
		window.open(j + "wxoauth_start/?ret=" + a);
	};
	b.social.viewMe = function(a) {
		fapiaotongLog(j + "me" + i);
	};
	b.social.viewPlayer = function(c, d) {
		fapiaotongLog(j + "view" + i + "&pid=" + d);
	};
	b.social.searchPlayer = function(c, d) {
		fapiaotongLog(j + "search" + i + "&qstr=" + encodeURIComponent(d));
	};
	b.social.friendList = function(a) {
		fapiaotongLog(j + "frdlist" + i);
	};
	b.social.mywall = function(a) {
		fapiaotongLog(j + "mywall" + i);
	};
	b.social.peerwall = function(c, d) {
		fapiaotongLog(j + "wall" + i + "&pid=" + d);
	};
	b.social.conversation = function(c, d) {
		fapiaotongLog(j + "conversation" + i + "&pid=" + d);
	};
	b.social.wallAdd = function(c, f, d) {
		fapiaotongLog(j + "walladd" + i + "&pid=" + d);
	};
	b.social.wallDel = function(c, d) {
		fapiaotongLog(j + "walldel" + i + "&msgid=" + d);
	};
	b.social.friendDel = function(c, d) {
		fapiaotongLog(j + "frddel" + i + "&pid=" + d);
	};
	b.social.friendAdd = function(c, d) {
		fapiaotongLog(j + "frdadd" + i + "&pid=" + d);
	};
	b.social.friendBlack = function(c, d) {
		fapiaotongLog(j + "frdblack" + i + "&pid=" + d);
	};
	b.leaderboard = function(f, k, g) {
		return;
		fapiaotongLog(APP_API_URL + "leaderboard/" + k + "/" + g + "?callback=?");
	};
})(window.fapiaotongApp = window.fapiaotongApp || {});

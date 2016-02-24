H = 1050;

function qp_a(b) {}
var qp_b = 16,
    qp_c, qp_d = 5,
    qp_e = 3,
    qp_f = qp_e,
    qp_g = 420,
    qp_h = 0,
    qp_i = [],
    qp_j = 20,
    qp_k = 0,
    qp_l, qp_m = 0,
    qp_n = 0,
    qp_o = 0;

function qp_p() {
    fapiaotongStage.stage.arrow.visible = !0;
    qp_q = fapiaotongApp.score = 0;
    qp_n = qp_b;
    qp_m = -1;
    fapiaotongStage.stage.num.txt.text = qp_n + '"';
    qp_k = 0;
    qp_o = 1;
    fapiaotongApp.onGameStarted();
}

function qp_r() {
    fapiaotongStage.stage.splash.visible = !0;
}

function qp_s() {
    fapiaotongStage.stage.arrow.visible = !1;
    qp_m = 0;
}

function qp_t() {
    qp_o = 3;
    qp_l = setTimeout(function() {
        window.clearTimeout(qp_l);
    }, 900);
    qp_u();
    fapiaotongApp.onNewScore(fapiaotongApp.score);
    fapiaotongApp.onGameOver();
    fapiaotongStage.stage.gameover.visible = !0;
    fapiaotongStage.stage.gameover.refresh();
}

function qp_v(b) {
    IS_ANDROID && (createjs.Sound.registMySound("count", 0), createjs.Sound.registMySound("silenttail", 0.25));
    try{
    	qp_w();
	    qp_u();
    }
    catch(er){
    	console.error(er);
    	if(confirm("\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u518d\u8bd5\u3002")){
    		location.href = location.href;
    	}
    }
}

function Qp_x() {
    this.initialize();
    this.bg = new createjs.Shape;
    this.bg.graphics.beginFill("#fa435b").drawRect(0, 0, W, H);
    this.addChild(this.bg);
    this.start = new createjs.Bitmap(fapiaotongStage.queue.getResult("mb0"));
    this.start.y = H - 390;
    this.start.x = (W - this.start.getBounds().width) / 2;
    this.addChild(this.start);
    this.arrow = new createjs.Bitmap(fapiaotongStage.queue.getResult("starttip"));
    this.arrow.y = H - 442;
    this.arrow.x = (W - this.arrow.getBounds().width) / 2;
    this.addChild(this.arrow);
    var d, c;
    this.start.on("mousedown", function(a) {
        0 == qp_o && (d = a.localY, c = H - 300);
    });
    this.start.on("pressmove", function(a) {
        0 == qp_o && SplashPressmoveEvent(a.localY - d, c);
    });
    this.start.on("pressup", function(a) {
        0 == qp_o && 30 > d - a.localY && (createjs.Sound.play("count", !0), createjs.Tween.get(fapiaotongStage.stage.splash.start).to({
            y: -H
        }, 400).call(function(b) {
            fapiaotongStage.stage.splash.arrow.visible = !1;
            qp_p();
            fapiaotongStage.stage.splash.visible = !1;
        }));
    });
    createjs.Tween.get(this.start).to({
        y: -H
    }, 400).call(function(b) {
        fapiaotongStage.stage.splash.arrow.visible = !1;
        qp_p();
        fapiaotongStage.stage.splash.visible = !1;
    });
}
Qp_x.prototype = new createjs.Container;

function SplashPressmoveEvent(d, c) {
    fapiaotongStage.stage.splash.start.y + d < c && (fapiaotongStage.stage.splash.start.y += d);
}

function qp_w() {
    var B = new createjs.Shape;
    B.graphics.beginFill("#fa435b").drawRect(0, 0, W, H);
    fapiaotongStage.stage.addChild(B);
    var q = new createjs.Shape;
    q.graphics.beginFill("white").rect(0, 200, W, H);
    B.hitArea = q;
    var o = 0,
        p = 0;
    B.on("mousedown", function(a) {
        IS_TOUCH && a.nativeEvent instanceof MouseEvent || 2 != qp_o && 1 != qp_o || (o = a.localY, p = fapiaotongStage.stage.player.m[qp_f].y);
    });
    B.on("pressmove", function(a) {
        IS_TOUCH && a.nativeEvent instanceof MouseEvent || (1 == qp_o && (qp_s(), qp_o = 2), 2 == qp_o && (fapiaotongStage.stage.player.m[qp_f].visible = !0, fapiaotongStage.stage.player.m[qp_f].y += (a.localY - o) / 1.5));
    });

    function E(b) {
        var a = document.createElement("div");
        a.textContent = b;
        if (b.match("4") != null) {
            a.id = "bj2";
        } else {
            a.id = "bj";
        }
        document.body.appendChild(a);
        setTimeout(function() {
            document.body.removeChild(a);
        }, 2000);
    }

    function g(b) {
        var a = document.createElement("div");
        a.textContent = b;
        a.id = "bCC";
        document.body.appendChild(a);
        setTimeout(function() {
            document.body.removeChild(a);
        }, 1000);
    }
    var k = 0;
    var C = 0;
    var j = 0;
    var i = 0;
    var F = 0;
    var D = false;
    var m = 0;
    var l = 0;

    B.on("pressup", function(e) {
        F++;
        i = 1;
        if (C == 0) {
            j = new Date().getTime();
            C++;
        } else {
            if (F > 12) {
                j = new Date().getTime();
                F = 1;
            }
            var a = Math.floor(1000 / Math.floor((new Date().getTime() - j) * 1 / F));
            var d = (new Date().getTime() - j) / F;
            var b = (F == 1 ? 100 : a);
            if (F > 3 && a > 600 && (Math.random() * 3 >> 0 == 2) && !D) {
                var c;
                l < 470 / 6 * 5 ? l = l + 470 / 6 : l = 470;
                if (l == 470) {
                    setTimeout(function() {
                        h();
                        l = 0;
                    }, 300);
                }
                c.setBaoModePar(l);
            }
            if (F > 10 && d < 190) {
                if (Math.random() * 3 >> 0 == 1) {
                    if (d < 165) {
                        i = 4;
                        E("+4");
                        C = 0;
                        F = 0;
                    } else {
                        i = 2;
                        E("+2");
                        C = 0;
                        F = 0;
                    }
                }
            }
        }
        if (D) {
            m++;
            i = m;
            g("\u66b4\u51fb +" + i);
        }
        IS_TOUCH && e.nativeEvent instanceof MouseEvent || 2 != qp_o || (50 < o - e.localY ? (e = (new Date).getTime(), 0 < qp_i.length && qp_i[qp_i.length - 1] + 50 > e ? qp_a("WARNING: Too fast! maybe engine error.") : (k = qp_y(e), k <= qp_j ? (qp_k++, fapiaotongApp.score += i, fapiaotongStage.stage.player.playAnimation(fapiaotongStage.stage.player.m[qp_f]), createjs.Sound.play("count", !0)) : (qp_i.length--, qp_a("WARN: " + k)))) : (LB_z(p), fapiaotongStage.stage.player.m[qp_f].visible = !1));
    });
    qp_c = [];
    for (B = 0; B <= qp_e; B++) {
        for (qp_c[B] = [], q = 0; q < qp_d; q++) {
            var n = new createjs.Bitmap(fapiaotongStage.queue.getResult("d0"));
            n.regX = n.getBounds().width / 2;
            n.regY = n.getBounds().height / 2;
            n.x = genRandom(W);
            n.y = -H / 2 + genRandom(H);
            n.visible = !1;
            qp_c[B].push(n);
            fapiaotongStage.stage.addChild(qp_c[B][q]);
        }
    }
    fapiaotongStage.stage.player = new Qp_A;
    fapiaotongStage.stage.addChild(fapiaotongStage.stage.player);
    fapiaotongStage.stage.num = new Qp_B;
    fapiaotongStage.stage.num.y = 15;
    fapiaotongStage.stage.addChild(fapiaotongStage.stage.num);
    fapiaotongStage.stage.arrow = new createjs.Bitmap(fapiaotongStage.queue.getResult("starttip"));
    fapiaotongStage.stage.arrow.x = (W - fapiaotongStage.stage.arrow.getBounds().width) / 2;
    fapiaotongStage.stage.arrow.y = 290;
    fapiaotongStage.stage.arrow.visible = !1;
    fapiaotongStage.stage.addChild(fapiaotongStage.stage.arrow);
    fapiaotongStage.stage.gameover = new LB_C;
    fapiaotongStage.stage.gameover.x = 0;
    fapiaotongStage.stage.gameover.y = 260;
    fapiaotongStage.stage.gameover.visible = !1;
    fapiaotongStage.stage.addChild(fapiaotongStage.stage.gameover);
    fapiaotongStage.stage.splash = new Qp_x;
    fapiaotongStage.stage.addChild(fapiaotongStage.stage.splash);
    setInterval(qp_D, 1000);
    createjs.Ticker.addEventListener("tick", function(a) {
        0 <= qp_m && (qp_m += a.delta, a = qp_b - parseInt(qp_m / 1000), a != qp_n && (qp_n = a, fapiaotongStage.stage.num.txt.text = qp_n + '"'), 0 >= qp_n && (qp_m = -1, qp_t()));
        fapiaotongStage.stage.num.sum.text = fapiaotongApp.score;
    });
}

function Qp_A() {
    this.initialize();
    this.mb = new createjs.Bitmap(fapiaotongStage.queue.getResult("mb0"));
    this.mb.regX = this.mb.getBounds().width / 2;
    this.mb.regY = this.mb.getBounds().height / 2;
    this.mb.y = qp_g;
    this.x = W / 2;
    this.y = H / 2 - 150;
    this.addChild(this.mb);
    this.m = [];
    for (var d = 0; 3 >= d; d++) {
        this.m[d] = new createjs.Bitmap(fapiaotongStage.queue.getResult("m0")), this.m[d].regX = this.m[d].getBounds().width / 2, this.m[d].regY = this.m[d].getBounds().height / 2, this.m[d].y = qp_g, this.m[d].visible = !1, this.addChild(this.m[d]);
    }
    for (d = 0; d <= qp_e; d++) {
        this.m[d].image = fapiaotongStage.queue.getResult("m0");
    }
    for (d = 0; d < qp_c.length; d++) {
        for (var c = 0; c < qp_c[d].length; c++) {
            qp_c[d][c].image = fapiaotongStage.queue.getResult("d0");
        }
    }
}
Qp_A.prototype = new createjs.Container;
Qp_A.prototype.playAnimation = function(b) {
    b.visible = !0; 
    createjs.Tween.get(b).to({
        scaleX: 0.5,
        scaleY: 0.5,
        y: -H
    }, 300).to({
        visible: !1,
        y: qp_g,
        scaleX: 1,
        scaleY: 1
    }, 0);
    0 < qp_f ? qp_f-- : qp_f = qp_e;
};

function genRandom(b) {
    return parseInt(Math.random() * b);
}

function qp_E(b) {
    return 10;
}
var lb_F = 0;

function qp_D() {
    for (var b = 0; b < qp_d; b++) {
        qp_c[lb_F][b].visible = !0, createjs.Tween.get(qp_c[lb_F][b]).to({
            y: H + qp_c[lb_F][b].getBounds().height / 2 + 100,
            rotation: 720 + genRandom(400),
            x: genRandom(W)
        }, 1000 + genRandom(800)).to({
            visible: !1
        }, 10).to({
            x: genRandom(W),
            y: -H / 2 + genRandom(H / 2),
            rotation: 0
        }, 10);
    }
    lb_F < qp_e ? lb_F++ : lb_F = 0;
}

function LB_z(d) {
    var c = Math.abs(fapiaotongStage.stage.player.m[qp_f] - d);
    createjs.Tween.get(fapiaotongStage.stage.player.m[qp_f]).to({
        y: d
    }, 20 * c);
}

function LB_C() {
    this.initialize();
    var f = new createjs.Shape,
        e = fapiaotongStage.queue.getResult("dlgbg");

    f.setBounds(0, 0, W, e.height);
    f.graphics.bf(e).r(0, 0, W, e.height);
    f.y = 10;
    this.addChild(f);
    e = new createjs.Bitmap(fapiaotongStage.queue.getResult("start"));
    e.x = 80;
    e.y = f.y + f.getBounds().height - 165;
    e.on("click", function(a) {
        qp_p();
        fapiaotongStage.stage.gameover.visible = !1;
        _hmt.push(["_trackEvent", "button", "gameReStart"]);
    });
    var h = new createjs.Bitmap(fapiaotongStage.queue.getResult("rank"));
    h.x = W / 2;
    h.y = e.y;
    h.regX = h.getBounds().width / 2;
    h.on("click", function(a) {
        _hmt.push(["_trackEvent", "button", "rankings"]);
        window.open("http://mp.weixin.qq.com/s?__biz=MzI1MDAzODgxNg==&mid=212072632&idx=1&sn=1e47eaa93766a4227fdc32420707d15d#rd");
    });
    var g = new createjs.Bitmap(fapiaotongStage.queue.getResult("share"));
    g.x = W - 80;
    g.y = e.y;
    g.regX = h.getBounds().width;
    g.on("click", function(a) {
        // _hmt.push(["_trackEvent", "button", "clickShare"]);
        $("div.share_tip").css("display","block");
        // IS_TOUCH && a.nativeEvent instanceof MouseEvent || fapiaotongStage.showShareTip();
    });
    $("div.share_tip").on("click", function(a) {
        $(this).css("display","none");
    });
    this.addChild(e);
    this.addChild(h);
    this.addChild(g);

    this.scoreText = new createjs.Text("", "bold 89px Helvetica", "#e9152c");
    this.scoreText.textAlign = "center";
    this.scoreText.x = W / 2;
    this.scoreText.y = f.y + 20;
    this.addChild(this.scoreText);
    this.shareText = new createjs.Text("", "bold 45px HeiTi", "#e9152c");
    this.shareText.textAlign = "center";
    this.shareText.x = W / 2;
    this.shareText.y = this.scoreText.y + 190;
    this.addChild(this.shareText);
}
LB_C.prototype = new createjs.Container;
var oveT = 0;
LB_C.prototype.refresh = function() {
    oveT++;
    if (oveT == 2 || oveT == 4) {
        _hmt.push(["_trackEvent", "button", "showBigbanner"]);
    } else {
    }
    _hmt.push(["_trackEvent", "over", fapiaotongApp.score]);
    this.scoreText.text = fapiaotongApp.score;
    this.shareText.text = 0 <= fapiaotongApp.score ? fapiaotongShare.desc.replace("\u6bd4", "\n\u6bd4").replace("\u6211\u662f", "\n\u6211\u662f") : "";
};

function Qp_B() {
    this.initialize();
    this.tmbg = new createjs.Bitmap(fapiaotongStage.queue.getResult("tmbg2"));
    this.tmbg.x = (W - this.tmbg.getBounds().width) / 2;
    this.tmbg.y = 0;
    this.addChild(this.tmbg);
    this.sum = new createjs.Text(fapiaotongApp.score, "normal 60px Arial", "white");
    this.sum.textAlign = "center";
    this.sum.textBaseline = "middle";
    this.sum.x = W / 4 - 15;
    this.sum.y = this.tmbg.y + this.tmbg.getBounds().height / 2 + 85;
    this.addChild(this.sum);
    this.txt = new createjs.Text(qp_n + '"', "normal 60px Arial", "white");
    this.txt.textAlign = "center";
    this.txt.textBaseline = "middle";
    this.txt.x = 3 * W / 4 + 30;
    this.txt.y = this.tmbg.y + this.tmbg.getBounds().height / 2 + 85;
    this.addChild(this.txt);
}
Qp_B.prototype = new createjs.Container;

function qp_y(f) {
    var e = 0;
    if (0 != qp_i.length) {
        var h;
        for (h = 0; h < qp_i.length && !(qp_i[h] > f - 1000); h++) {}
        for (var e = qp_i.length - h, g = h; g < qp_i.length; g++) {
            qp_i[g - h] = qp_i[g];
        }
        qp_i.length -= h;
    }
    qp_i.push(f);
    return parseInt(e);
}

function qp_u() {
    fapiaotongShare.title = "\u6570\u7968\u5b50\uff0c\u4eba\u751f\u5fc5\u5907\u6280\u80fd\u5927\u6bd4\u62fc\uff01";
    var msga =["\u91cd\u5ea6\u624b\u61d2\u60a3\u8005","\u91cd\u5ea6\u8010\u5fc3\u7f3a\u5931\u8005","\u91cd\u5ea6\u770b\u7834\u7ea2\u5c18\u8005","\u4e0e\u4f1a\u8ba1\u8d22\u52a1\u804c\u4e1a\u65e0\u7f18","\u4e0d\u9002\u5408\u91cd\u590d\u6027\u5de5\u4f5c"];
    var msgb =["\u804c\u573a\u8fd0\u52bf\u9760\u8ba4\u771f","\u98ce\u683c\u6cfc\u8fa3\u5e72\u7ec3\u9738\u6c14","\u5e72\u4f1a\u8ba1\u5c06\u5e74\u5e74\u6da8\u85aa","\u6027\u60c5\u6c89\u7740\u51b7\u9759","\u6570\u8fc7\u7684\u94b1\u53ef\u7ed5\u5730\u7403\u4e00\u5708"];
    var msgc =["\u6570\u7968\u62a5\u9500\u5bb6\u5e38\u4fbf\u996d","\u4e0d\u9760\u5356\u840c\u9760\u5b9e\u529b","\u6570\u6570\u754c\u7684\u5927\u5e08\u7ea7\u522b","\u7ecf\u8d22\u795e\u8ba4\u8bc1\u7684\u4eba\u624d","5\u5e74\u540e\u767b\u4e0a\u4eba\u751f\u5dc5\u5cf0"];
    var msgd =["\u6df7\u4f1a\u8ba1\u8d22\u52a1\u754c\u5fc5\u6709\u4f5c\u4e3a","\u9002\u5408\u8fb9\u6570\u94b1\u8fb9\u559d\u9152","\u6570\u94b1\u6280\u80fd\u5708\u5185\u4e00\u6d41","\u5f39\u6307\u795e\u529f\u6709\u4e0a\u6625\u665a\u6f5c\u8d28","\u5e74\u85aa\u767e\u4e07\u6307\u65e5\u53ef\u5f85"];
    var msge =["\u4e0d\u5e72\u4f1a\u8ba1\u8d22\u52a1\u53ef\u60dc\u4e86","2016\u544a\u522b\u5356\u840c\u67f3\u6697\u82b1\u660e","\u4e13\u6ce8\u6570\u94b130\u5e74","\u65e0\u654c\u6309\u637b\u624b\u795e\u529f\u5df2\u6210","\u901f\u5ea6\u4e0e\u6fc0\u60c5\u7684\u5b8c\u7f8e\u6f14\u7ece\u8005"];
    var msgf =["\u95ee\u9f0e\u5929\u4e0b\u65e0\u4eba\u4e89\u950b","\u5f6a\u608d\u7684\u4eba\u751f\u65e0\u9700\u89e3\u91ca","\u9ad8\u5904\u4e0d\u80dc\u5bd2\u7684\u5bc2\u5bde\u72d7","\u771f\u540d\u58eb\u81ea\u98ce\u6d41","\u5b64\u72ec\u6c42\u8d25"];
    // fapiaotongShare.desc = fapiaotongShare.title;
    var b = parseInt(Math.sqrt(1000 * fapiaotongApp.score / 15));
    99 < b && (b = "99.9");
    if (fapiaotongApp.score > 120) {
        fapiaotongShare.desc = fapiaotongApp.score + "\u5f20\uff0c\u6218\u80dc\u4e86\u5168\u56fd" + b + "%\u7684\u4eba\uff0c\n" + msgf[Math.floor(Math.random() * msgf.length)] + "\uff0c\u4e0d\u670d\u6765\u6218\uff01";
    } else if (fapiaotongApp.score > 60) {
        fapiaotongShare.desc = fapiaotongApp.score +  "\u5f20\uff0c\u6218\u80dc\u4e86\u5168\u56fd" + b + "%\u7684\u4eba\uff0c\n" + (85 > fapiaotongApp.score ? msga[Math.floor(Math.random() * msga.length)] : 90 > fapiaotongApp.score ? msgb[Math.floor(Math.random() * msgb.length)] : 95 > fapiaotongApp.score ? msgc[Math.floor(Math.random() * msgc.length)] : 100 > fapiaotongApp.score ? msgd[Math.floor(Math.random() * msgd.length)] : 105 > fapiaotongApp.score ? msge[Math.floor(Math.random() * msge.length)] : msgf[Math.floor(Math.random() * msgf.length)] ) + "\uff01";
    } else {
        fapiaotongShare.desc = fapiaotongApp.score +  "\u5f20\uff0c\u6218\u80dc\u4e86\u5168\u56fd" + b + "%\u7684\u4eba\uff0c\n" + (0 >= fapiaotongApp.score ? "\u804c\u4e1a\u6253\u9171\u6cb9\u515a" : msga[Math.floor(Math.random() * msga.length)]) + "\uff01";
    } 
    document.title = fapiaotongApp.score == 0 ? fapiaotongShare.title : fapiaotongShare.desc;
}
var _cfg = {
    startFunc: qp_v,
    img: {
        path: "img/",
        manifest: [{
            src: "m0.png",
            id: "m0"
        }, {
            src: "mb0.png",
            id: "mb0"
        }, {
            src: "d0.png",
            id: "d0"
        }, {
            src: "starttip.png",
            id: "starttip"
        }, {
            src: "tmbg2.png",
            id: "tmbg2"
        }, {
            src: "start.png",
            id: "start"
        }, {
            src: "rank.png",
            id: "rank"
        }, {
            src: "share.png",
            id: "share"
        }, {
            src: "logo.png",
            id: "logo"
        }, {
            src: "dlgbg.png",
            id: "dlgbg"
        }]
    },
    audio: {
        path: "img/",
        manifest: [{
            src: "count.mp3",
            id: "count"
        }]
    }
};
fapiaotongStage.init(_cfg);

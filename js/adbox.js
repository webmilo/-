(function(a) {
	a.adbox = {
		init: function() {
			var b = this;
			try {
				var c = a.location.href.match(/\/game\/(.*?)(\/|\?)/)[1];
			} catch (d) {
				return;
			}
			b.getDated({
				url: "/game/conf/" + c + ".json?t=" + new Date().getTime(),
				callback: function(f) {
					try {
						var g = JSON.parse(f);
					} catch (h) {
						return;
					}
					b.setCss();
					b.pushAd(g);
				}
			});
		},
		getDated: function(d) {
			var c = new XMLHttpRequest();
			c.onreadystatechange = function() {
				if (c.readyState == 4 && c.status == 200) {
					d.callback(c.responseText);
				}
			};
			c.open("get", d.url);
			c.send(null);
		},
		setCss: function() {
			var b = "#guanzhu{width:240px;height:240px;position:fixed;z-index:999;top:50%;left:50%;margin:-120px 0 0 -120px}#guanzhu a{width:100%;height:100%;display:block}#guanzhu span{position:absolute;top:0;right:0;width:25px;display:block;height:25px}.adbox{width:100%;height:50px;position:fixed;bottom:-50px;display:block;left:50%;margin-left:-50%;background-size:contain;-webkit-animation:adbox .6s .2s;-webkit-animation-fill-mode:both}.adbox2{width:100%;height:60px;position:fixed;top:-50px;display:block;left:50%;margin-left:-50%;background-size:contain;-webkit-animation:adbox2 .6s .2s;-webkit-animation-fill-mode:both}@-webkit-keyframes adbox{100%{bottom:0}}@-webkit-keyframes adbox2{100%{top:0}}";
			var c = document.createElement("style");
			c.innerHTML = b;
			document.head.insertBefore(c);
		},
		pushAd: function(c) {
			var f = this;
			var h = c;
			if(!h){return}
			var j = h.top;
			var e = h.banner;
			var g = h.footer;
			for (i = j.length; i--;) {
				var d = j[i].img_url;
				var b = new Image;
				b.src = d;
			}
			for (i = g.length; i--;) {
				var d = j[i].img_url;
				var b = new Image;
				b.src = d;
			}
			for (i = e.length; i--;) {
				var d = j[i].img_url;
				var b = new Image;
				b.src = d;
			}
			f.pushAd = function(l) {
				if (j.length > 0) {
					var m = document.createElement("a");
					var n = Math.random() * j.length >> 0;
					m.href = j[n].link_url;
					m.style.background = "url(" + j[n].img_url + ") no-repeat";
					m.addEventListener("touchstart", function() {
						_hmt.push(["_trackEvent", "button", "clickTopAD" + n]);
					});
					m.target = "_blank";
					m.style.backgroundSize = "100%";
					m.className = "adbox2";
					document.body.appendChild(m);
					_hmt.push(["_trackEvent", "button", "showTopAD" + n]);
				}
				if (g.length > 0) {
					var m = document.createElement("a");
					var n = Math.random() * g.length >> 0;
					m.href = g[n].link_url;
					m.style.background = "url(" + g[n].img_url + ") no-repeat";
					m.addEventListener("touchstart", function() {
						_hmt.push(["_trackEvent", "button", "clickBottomAD" + n]);
					});
					m.target = "_blank";
					m.style.backgroundSize = "100%";
					m.className = "adbox";
					document.body.appendChild(m);
					_hmt.push(["_trackEvent", "button", "showBottomAd" + n]);
				}
				if (e.length > 0) {
					if (!l) {
						return;
					}
					var m = document.createElement("div");
					var k = document.createElement("a");
					var n = document.createElement("span");
					m.id = "guanzhu";

					k.href = e[0].link_url;
					k.style.background = "url(" + e[0].img_url + ") no-repeat";

					var h = navigator.userAgent;
					if( h.match(/android/gi) != null  && h.match(/MicroMessenger/gi) == null && h.match(/gkuwan/gi) == null  ){
				        k.href = "/game/gkuwan.apk";
						k.style.background = "url(img/guanz03.png) no-repeat";
				    }

					k.style.backgroundSize = "contain";
					n.addEventListener("click", function() {
						document.body.removeChild(m);
					});
					m.appendChild(k);
					m.appendChild(n);
					k.addEventListener("touchstart", function() {
						_hmt.push(["_trackEvent", "over", "bigbanner"]);
					});
					document.body.appendChild(m);
				}
			};
		},
		removeAd: function() {
			var c = document.querySelectorAll("#guanzhu,.adbox,.adbox2");
			for (i = c.length; i--;) {
				var b = c[i];
				b.parentNode.removeChild(b);
			}
		}
	};
	adbox.init();
}(window));

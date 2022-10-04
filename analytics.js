var isMobile = !!navigator.userAgent
  .toLowerCase()
  .match(/android|iphone|ipad|ipod|blackberry|symbianos/i);

function eventoAnalytics(event) {
  if (window.ga) {
    console.log("ga");
    ga("send", "event", "WindowsB2C", "Download Button Clicked", event);
  }
  if (window.gtag) {
    gtag("event", "download_button_clicked", {
      event_category: "WindowsB2C",
      event_label: "download_button_clicked",
      value: event,
    });
  }
  if (window.singularSdk) {
    console.log("singularSdk");
    singularSdk.event("Download Button Clicked");
  }
  if (window.dataLayer) {
    window.dataLayer.push({ event: "downloadButtonClicked" });
  }
  if (window.trackEvent) {
    window.trackEvent("Download Button Clicked", {});
  }
}

function accountAnalytics(name) {
  if (window.dataLayer) {
    window.dataLayer.push({ event: "Menu Clicked " + name });
  }
}

window.addEventListener("load", function (event) {
  if (location.host.indexOf("www.voicemod.net") == -1) return;

  const buttons = document.getElementsByClassName("voicemod-button");
  console.log("Added to ", buttons.length, " buttons");
  for (var z = 0; z < buttons.length; z++) {
    var elem = buttons[z];
    elem.onclick = function () {
      eventoAnalytics("From " + window.location.pathname);
    };
  }

  setTimeout(function () {
    console.log("Load Analytics");
    window.ga =
      window.ga ||
      function () {
        (ga.q = ga.q || []).push(arguments);
      };
    ga.l = +new Date();
    ga("create", "UA-19277908-8", {
      cookieDomain: "voicemod.net",
    });
    ga("require", "GTM-MT5HGB8");
    ga("send", "pageview");

    ga(function (tracker) {
      var today = new Date();
      var expire = new Date();
      expire.setTime(today.getTime() + 3600000 * 24 * 30);
      var linkerParam = ga.getAll()[0].get("linkerParam");
      if (linkerParam != "") {
        document.cookie =
          "linkerParam=" +
          escape(linkerParam) +
          ";expires=" +
          expire.toGMTString() +
          "; path=/";
      }
    });
    var t = document.createElement("script");
    (t.src = "https://www.google-analytics.com/analytics.js"), (t.async = !0);
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(t, s);

    console.log("Load Singular", !window.singularSdk);
    if (!window.singularSdk) {
      var t = document.createElement("script");
      t.src =
        "https://web-sdk-cdn.singular.net/singular-sdk/latest/singular-sdk.js";
      t.addEventListener("load", function () {
        console.log("Start Singular");
        const config = new SingularConfig(
          "voicemod_a34653bd",
          "c432b8816323e90fb71b40554151a80a",
          "voicemod.web"
        ).withAutoPersistentSingularDeviceId("voicemod.net");
        window.singularSdk.init(config);
      });
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(t, s);
    }

    console.log("Load GTAG");
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", "AW-659377836");
    window.gtag("config", "G-GLK7CYZ4FD");
    var t = document.createElement("script");
    t.src = "https://www.googletagmanager.com/gtag/js?id=AW-659377836";
    t.async = true;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(t, s);

    if (!isMobile) {
      console.log("Load Reddit");
      !(function (w, d) {
        if (!w.rdt) {
          var p = (w.rdt = function () {
            p.sendEvent
              ? p.sendEvent.apply(p, arguments)
              : p.callQueue.push(arguments);
          });
          p.callQueue = [];
          var t = d.createElement("script");
          (t.src = "https://www.redditstatic.com/ads/pixel.js"), (t.async = !0);
          var s = d.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(t, s);
        }
      })(window, document);
      rdt("init", "t2_48ftnl3");
      rdt("track", "PageVisit");
    }

    console.log("Load mParticle");
    window.getMParticleCommonProperties = function () {
      let commonProperties = new CommonProperties({
        serviceName: services.VOICEMODNET,
      });

      return {
        ...commonProperties.toJSON(),
      };
    };

    window.mParticle = {
      config: {
        isDevelopmentMode: location.host.indexOf("www.voicemod.net") == -1,
        v1SecureServiceUrl: "mp.voicemod.net/webevents/v1/JS/",
        v2SecureServiceUrl: "mp.voicemod.net/webevents/v2/JS/",
        v3SecureServiceUrl: "mp.voicemod.net/webevents/v3/JS/",
        configUrl: "mp.voicemod.net/tags/JS/v2/",
        identityUrl: "mp.voicemod.net/identity/v1/",
        aliasUrl: "mp.voicemod.net/webevents/v1/identity/",
        useCookieStorage: true,
        appName: "voicemod.net",
        cookieDomain: "voicemod.net",
      },
    };

    (function (t) {
      window.mParticle = window.mParticle || {};
      window.mParticle.EventType = {
        Unknown: 0,
        Navigation: 1,
        Location: 2,
        Search: 3,
        Transaction: 4,
        UserContent: 5,
        UserPreference: 6,
        Social: 7,
        Other: 8,
      };
      window.mParticle.eCommerce = { Cart: {} };
      window.mParticle.Identity = {};
      window.mParticle.config = window.mParticle.config || {};
      window.mParticle.config.rq = [];
      window.mParticle.config.snippetVersion = 2.2;
      window.mParticle.ready = function (t) {
        window.mParticle.config.rq.push(t);
      };
      var e = [
        "endSession",
        "logError",
        "logBaseEvent",
        "logEvent",
        "logForm",
        "logLink",
        "logPageView",
        "setSessionAttribute",
        "setAppName",
        "setAppVersion",
        "setOptOut",
        "setPosition",
        "startNewSession",
        "startTrackingLocation",
        "stopTrackingLocation",
      ];
      var o = ["setCurrencyCode", "logCheckout"];
      var i = ["identify", "login", "logout", "modify"];
      e.forEach(function (t) {
        window.mParticle[t] = n(t);
      });
      o.forEach(function (t) {
        window.mParticle.eCommerce[t] = n(t, "eCommerce");
      });
      i.forEach(function (t) {
        window.mParticle.Identity[t] = n(t, "Identity");
      });
      function n(e, o) {
        return function () {
          if (o) {
            e = o + "." + e;
          }
          var t = Array.prototype.slice.call(arguments);
          t.unshift(e);
          window.mParticle.config.rq.push(t);
        };
      }
      var mp = document.createElement("script");
      mp.type = "text/javascript";
      mp.async = true;
      mp.src = "https://mp.voicemod.net/tags/JS/v2/" + t + "/mparticle.js";
      var c = document.getElementsByTagName("script")[0];
      c.parentNode.insertBefore(mp, c);
    })("us1-10e1620394b1c644896bc3a9e5775cf3");
    window.mParticle.ready(function () {
      window.mParticle.logPageView(
        "Web Voicemod.net",
        {
          ...getMParticleCommonProperties(),
        },
        {}
      );
    });

    window.trackEvent = function (name, attributes) {
      if (window.mParticle) {
        window.mParticle.logEvent(
          name,
          mParticle.EventType.Navigation,
          {
            ...attributes,
            ...getMParticleCommonProperties(),
          },
          {}
        );
      }
    };

    console.log("Load Facebook");
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.agent = "dvpixelcaffeinewordpress";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    var aepc_pixel = {
        pixel_id: "873364306086764",
        user: {},
        enable_advanced_events: "yes",
        fire_delay: "0",
      },
      aepc_pixel_args = [],
      aepc_extend_args = function (args) {
        if (typeof args === "undefined") {
          args = {};
        }

        for (var key in aepc_pixel_args) args[key] = aepc_pixel_args[key];

        return args;
      };

    // Extend args
    if ("yes" === aepc_pixel.enable_advanced_events) {
      aepc_pixel_args.userAgent = navigator.userAgent;
      aepc_pixel_args.language = navigator.language;

      if (document.referrer.indexOf(document.domain) < 0) {
        aepc_pixel_args.referrer = document.referrer;
      }
    }

    fbq("init", aepc_pixel.pixel_id, aepc_pixel.user);

    setTimeout(function () {
      fbq("track", "PageView", aepc_pixel_args);
    }, aepc_pixel.fire_delay * 1000);

    console.log("Load Twitter");
    !(function (e, t, n, s, u, a) {
      e.twq ||
        ((s = e.twq =
          function () {
            s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
          }),
        (s.version = "1.1"),
        (s.queue = []),
        (u = t.createElement(n)),
        (u.async = !0),
        (u.src = "//static.ads-twitter.com/uwt.js"),
        (a = t.getElementsByTagName(n)[0]),
        a.parentNode.insertBefore(u, a));
    })(window, document, "script");
    // Insert Twitter Pixel ID and Standard Event data below
    twq("init", "o8c73");
    twq("track", "PageView");
  }, 0);
});

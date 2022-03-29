var metadata =
  typeof epublish !== "undefined"
    ? JSON.stringify(epublish.foundation.userData)
    : "";
(function (b, o, i) {
  b.wO = {
    t: "af236f6b-4ab8-417f-91f8-da374817a702",
    original_session_id: "",
    widget_platform: 7,
    uniqueId: "",
    autoDerivate: true,
    defaultOpenStatus: false,
    derivationText: "susc",
    metadata: metadata,
  };
  var e = o.createElement(i);
  var r = o.getElementsByTagName(i)[0];
  e.src = "https://widget-blocks.keos.co/widget/script.js";
  r.parentNode.insertBefore(e, r);

  setTimeout(() => {
    document.querySelector("#pgb-container").hide();
  }, 4000);
})(window, document, "script");

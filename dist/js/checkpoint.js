/*! formstone v1.3.3 [checkpoint.js] 2017-08-18 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function c(){v=u.height(),d.iterate.call(g,o)}function a(){g=e(r.base),c()}function i(){d.iterate.call(g,n)}function o(e){switch(e.windowIntersect){case"top":e.windowCheck=0-e.offset;break;case"middle":e.windowCheck=v/2-e.offset;break;case"bottom":e.windowCheck=v-e.offset}switch(e.elIntersect){case"top":e.elCheck=e.$target[0].offsetTop;break;case"middle":e.elCheck=e.$target[0].offsetTop+e.$target.outerHeight()/2;break;case"bottom":e.elCheck=e.$target[0].offsetTop+e.$target.outerHeight()}n(e)}function n(e){w+e.windowCheck>=e.elCheck?(e.active||e.$el.trigger(l.activate),e.active=!0,e.$el.addClass(f.active)):e.reverse&&(e.active&&e.$el.trigger(l.deactivate),e.active=!1,e.$el.removeClass(f.active))}var s=t.Plugin("checkpoint",{widget:!0,defaults:{intersect:"bottom-top",offset:0,reverse:!1},classes:["active"],events:{activate:"activate",deactivate:"deactivate"},methods:{_construct:function(t){var c=t.intersect.split("-");t.windowIntersect=c[0],t.elIntersect=c[1],t.visible=!1;var a=e(t.$el.data("checkpoint-container"));t.$target=a.length?a:t.$el,t.$el.addClass(f.base)},_postConstruct:function(e){a(),c()},_destruct:function(e){a()},_resize:c,_raf:function(){(w=u.scrollTop())<0&&(w=0),w!==h&&(i(),h=w)}}}),r=(s.namespace,s.classes),f=r.raw,l=s.events,d=s.functions,u=(t.window,t.$window),v=0,w=0,h=0,g=[]});
const http = require('http')
const fs = require('fs')


const fullpage = `!function(t,n){"use strict";var i=function(){function t(t,n){this.$el=t,this.currIndex=0,this.animating=!1,this.init()}var i={throttle:function(t,n,i){var e=null,o=0;return function(){var r=this,s=arguments,c=Date.now();i&&c-o>=i?(o=c,t.apply(r,s)):(e&&clearTimeout(e),e=setTimeout(function(){t.apply(r,s)},n))}}};return t.prototype={constructor:t,init:function(){this.initHTML(),this.bindEvent()},initHTML:function(){this.$el.children().css({height:"100vh",transition:"all 0.7s","-webkit-transition":"all 0.7s"})},bindEvent:function(){var t,e,o,r,s,c,h=this;n(window).on("wheel DOMMouseScroll",i.throttle(function(){var n=arguments[0].originalEvent;c=n.wheelDelta?n.wheelDelta:-n.detail,t=h.currIndex+(c>0?-1:1),h.gotoTarget(t)},100)),this.$el.on("touchstart",function(t){e=t.touches[0].clientX,o=t.touches[0].clientY}),this.$el.on("touchmove",i.throttle(function(){console.log("move");var n=arguments[0];e&&o&&(r=n.touches[0].clientX-e,s=n.touches[0].clientY-o,t=h.currIndex+(s>0?-1:1),h.gotoTarget(t))},16))},gotoTarget:function(t){var i,e=this.$el.children(),o=this;this.animating||t<0||t>this.$el.children().length-1||(i="translateY(-"+100*t+"%)",this.animating=!0,n(e[0]).on("transitionend",function t(){this.removeEventListener("transitionend",t),o.animating=!1}),e.css({transform:i,"-webkit-transform":i}),this.currIndex=t)}},t}();n.fn.fullpage=function(t){return this.each(function(){new i(n(this),t)}),this}}(0,this.jQuery);`;
http.createServer((req, res) =>{
    switch (req.url) {
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'});
            let myFileHtml = fs.readFileSync('main.html');
            res.end(myFileHtml);

        case '/app.css':
            res.writeHead(200,{'Content-Type':'text/css'});
            let myFileCss = fs.readFileSync('style.css');
            res.end(myFileCss);

        case '/app.js':
            res.writeHead(200,{'Content-Type':'text/js'});
            let myFileJs = fs.readFileSync('script.js');
            res.end(myFileJs);

        case '/app.fullpage':
            res.writeHead(200,{'Content-Type':'text/js'});
            res.end(fullpage);

        case '/mod3':
            res.writeHead(200,{'Content-Type':'text/html'});
            let myFileMod3 = fs.readFileSync('Model3.html');
            res.end(myFileMod3);
        case '/app.cssM':
            res.writeHead(200,{'Content-Type':'text/css'});
            let myFileMod3Style = fs.readFileSync('StyleOption.css');
            res.end(myFileMod3Style);
        case '/app.cr':
            res.writeHead(200,{'Content-Type':'image/jpg'});
            let cr = fs.readFileSync('media/cr.jpg',function (err) {
                if(err) throw err;
            });
            res.end(cr);
        case '/app.cb':
            res.writeHead(200,{'Content-Type':'image/jpg'});
            let cb = fs.readFileSync('media/cb.jpg',function (err) {
                if(err) throw err;
            });
            res.end(cb);
        case '/app.cbl':
            res.writeHead(200,{'Content-Type':'image/jpg'});
            let cbl = fs.readFileSync('media/cbl.jpg',function (err) {
                if(err) throw err;
            });
            res.end(cbl);
        case '/app.cw':
            res.writeHead(200,{'Content-Type':'image/jpg'});
            let cw = fs.readFileSync('media/cw.jpg',function (err) {
                if(err) throw err;
            });
            res.end(cw);
        case '/app.cg':
            res.writeHead(200,{'Content-Type':'image/jpg'});
            let cg = fs.readFileSync('media/cg.jpg',function (err) {
                if(err) throw err;
            });
            res.end(cg);
        case '/app.sw':
            res.writeHead(200,{'Content-Type':'image/jpg'});
            let sw = fs.readFileSync('media/sw.jpg',function (err) {
                if(err) throw err;
            });
            res.end(sw);
        case '/app.sb':
            res.writeHead(200,{'Content-Type':'image/jpg'});
            let sb = fs.readFileSync('media/sb.jpg',function (err) {
                if(err) throw err;
            });
            res.end(sb);
        default:
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end('404 Не знайдено');
    }
}).listen(3000,() =>{console.log('Server has been started....')});
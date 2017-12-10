// ==UserScript==
// @name        AGAR TUTORIALS BOTS
// @authur       AGAR TUTORIALS DZ
// @namespace    http://agrtutobots.ga/
// @version      1.0.0
// @description  Clone Bots By AGAR TUTORIALS DZ
// @match        http://agar-tr.com/*
// @match        http://nbk.io/*
// @match        http://agariospielen.org/*
// @match        http://en.agar.bio/*
// @match        http://cellcraft.io/*
// @match        http://playgr.win/*
// @match        http://agargo.com/*
// @match        http://agar.bz/*
// @match        http://en.agariogermany.com/*
// @match        http://es.agariogermany.com/*
// @match        http://eu.agariogermany.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

setTimeout(function() {
    window.__WebSocket = window.WebSocket;
    window.fakeWebSocket = function(){return {readyState: 0}};
    window._WebSocket = window.WebSocket = function(ip){return new window.fakeWebSocket(ip);};
    window.__botclonsData = {};
    window.__botclonsData.mx = 0;
    window.__botclonsData.my = 0;
    window.__botclonsData.ml = 0;
    window.__botclonsData.ma = 0;
    window.__botclonsData.mb = 0;
    window.__botclonsData.wa = false;
    window.__botclonsData.sa = false;
    window.__botclonsData.w = null;
    window.__botclonsData.s = null;
    window.__botclonsData.aX = -1;
    window.__botclonsData.aY = -1;
    window.__botclonsData.p = 0;
    window.__botclonsData.q=false;
    window.__botclonsData.socketaddr = null;
    w.fakeWebSocket = function(){return {readyState: 0};};
    window.addEventListener("load",function(){
        // ??? ??????????
        if(!window.OldSocket)
        OldSocket = window.__WebSocket;
        window._WebSocket = window.WebSocket = window.fakeWebSocket = function(ip){
        var ws = new OldSocket(ip);
        ws.binaryType="arraybuffer"
        var fakeWS = {};
        for(var i in ws)
            fakeWS[i] = ws[i];
        fakeWS.send = function(){
        //console.log("??????????? ????????! " + arguments[0]);
        var msg = new DataView(arguments[0]);
           if((msg.byteLength>0)&&(msg.getUint8(0)!=16)){
            var f="";
            for(var i=0;i<msg.byteLength;i++){
            var a=msg.getUint8(i);
            f=f+a+" ";
            }
            console.log(f);
            }
        if(msg.byteLength==21){ // Most clones
            if(msg.getInt8(0, true) == 16){
                window.__botclonsData.mx = msg.getFloat64(1, true);
                window.__botclonsData.my = msg.getFloat64(9, true);
                window.__botclonsData.ml = msg.byteLength;
            }
        } else {
            if(msg.byteLength==13){ // Agar.re, agarioforums.io, alis.io
            if(msg.getUint8(0, true) == 16){
                window.__botclonsData.mx = msg.getInt32(1, true);
                window.__botclonsData.my = msg.getInt32(5, true);
                window.__botclonsData.ml = msg.byteLength;
            }else{
                if(msg.byteLength>4){ // gota.io
            if(msg.getUint8(0, true) == 16){
                window.__botclonsData.mx = msg.getInt16(1, true);
                window.__botclonsData.my = msg.getInt16(3, true);
                window.__botclonsData.ml = msg.byteLength;
            }
            }
            }
            }
        }
        return ws.send.apply(ws, arguments);
        };
        ws.onmessage = function(){
        //console.log("??????????? ?????! " + arguments[0].data);
        var msg = new DataView(arguments[0].data);
            if(msg.byteLength>16){ // Most clones
            if(msg.getUint8(0, true) == 64){
                window.__botclonsData.ma = msg.getFloat64(1, true);
                window.__botclonsData.mb = msg.getFloat64(9, true);
            }
                }
        fakeWS.onmessage && fakeWS.onmessage.apply(ws, arguments);
        };
        ws.onopen = function(){
        window.__botclonsData.socketaddr = ws.url;
        //console.log("??????????? ???????????!");
        fakeWS.readyState = 1;
        fakeWS.onopen.apply(ws, arguments);
        };
        ws.onclose = function(){
        fakeWS.readyState = 0;
        fakeWS.onclose.apply(ws, arguments);
        };
        return fakeWS;
        }
        if(location.origin=="http://cellcraft.io")connect("");
        if(location.origin=="http://xbots.io/web/")connect("");
    })
    var real_minx = -7071;
    var real_miny = -7071;
    var real_maxx = 7071;
    var real_maxy = 7071;
    var lastsent = {
        minx: 0,
        miny: 0,
        maxx: 0,
        maxy: 0
    };
    function valcompare(Y, Z) {
        return 0.01 > Y - Z && -0.01 < Y - Z
    }
    var socket = io.connect('ws://localhost:8081');
    var canMove = true;
    var movetoMouse = true;
    var moveEvent = new Array(2);
    var canvas = document.getElementById("canvas");
    last_transmited_game_server = null;
    socket.on('force-login', function(data) {
        socket.emit("login", {
            "uuid": client_uuid,
            "type": "client"
        });
        transmit_game_server()
    });

        var client_uuid = httpGet("https://api.ipify.org/");
    if (client_uuid == null) {
        client_uuid = nety;
        for (var ii = 0; ii < 3; ii++) client_uuid += ranStr.charAt(Math.floor(Math.random() * ranStr.length));
        localStorage.setItem('client_uuid', client_uuid)
    }
    function p() {
    var a = wdtnColors[colorIndices[0]],
        b = wdtnColors[colorIndices[1]],
        c = wdtnColors[colorIndices[2]],
        d = wdtnColors[colorIndices[3]],
        e = 1 - wdtnStep,
        f = Math.round(e * a[0] + wdtnStep * b[0]),
        g = Math.round(e * a[1] + wdtnStep * b[1]),
        h = Math.round(e * a[2] + wdtnStep * b[2]),
        i = "rgb(" + f + "," + g + "," + h + ")",
        j = Math.round(e * c[0] + wdtnStep * d[0]),
        k = Math.round(e * c[1] + wdtnStep * d[1]),
        l = Math.round(e * c[2] + wdtnStep * d[2]),
        m = "rgb(" + j + "," + k + "," + l + ")";
    document.getElementById("menu")
        .style.background = "-webkit-gradient(linear, left top, right top, from(" + i + "), to(" + m + "))", document.getElementById("menu")
        .style.background = "-moz-linear-gradient(left, " + i + " 0%, " + m + " 100%)", wdtnStep += gradientSpeed, wdtnStep >= 1 && (wdtnStep %= 1, colorIndices[0] = colorIndices[1], colorIndices[2] = colorIndices[3],
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (wdtnColors.length - 1))) % wdtnColors.length, colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (wdtnColors.length - 1))) %
            wdtnColors.length)
}
       function w() {
    var a = wdtnColors[colorIndices[0]],
        b = wdtnColors[colorIndices[1]],
        c = wdtnColors[colorIndices[2]],
        d = wdtnColors[colorIndices[3]],
        e = 1 - wdtnStep,
        f = Math.round(e * a[0] + wdtnStep * b[0]),
        g = Math.round(e * a[1] + wdtnStep * b[1]),
        h = Math.round(e * a[2] + wdtnStep * b[2]),
        i = "rgb(" + f + "," + g + "," + h + ")",
        j = Math.round(e * c[0] + wdtnStep * d[0]),
        k = Math.round(e * c[1] + wdtnStep * d[1]),
        l = Math.round(e * c[2] + wdtnStep * d[2]),
        m = "rgb(" + j + "," + k + "," + l + ")";
        document.getElementById("idlogo")
        .style.background = "-webkit-gradient(linear, left top, right top, from(" + i + "), to(" + m + "))", document.getElementById("idlogo")
        .style.background = "-moz-linear-gradient(left, " + i + " 0%, " + m + " 100%)", wdtnStep += gradientSpeed, wdtnStep >= 1 && (wdtnStep %= 1, colorIndices[0] = colorIndices[1], colorIndices[2] = colorIndices[3],
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (wdtnColors.length - 1))) % wdtnColors.length, colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (wdtnColors.length - 1))) %
            wdtnColors.length)
}
    function q() {
    var a = wdtnColors[colorIndices[0]],
        b = wdtnColors[colorIndices[1]],
        c = wdtnColors[colorIndices[2]],
        d = wdtnColors[colorIndices[3]],
        e = 1 - wdtnStep,
        f = Math.round(e * a[0] + wdtnStep * b[0]),
        g = Math.round(e * a[1] + wdtnStep * b[1]),
        h = Math.round(e * a[2] + wdtnStep * b[2]),
        i = "rgb(" + f + "," + g + "," + h + ")",
        j = Math.round(e * c[0] + wdtnStep * d[0]),
        k = Math.round(e * c[1] + wdtnStep * d[1]),
        l = Math.round(e * c[2] + wdtnStep * d[2]),
        m = "rgb(" + j + "," + k + "," + l + ")";
        document.getElementById("welogo")
        .style.background = "-webkit-gradient(linear, left top, right top, from(" + i + "), to(" + m + "))", document.getElementById("welogo")
        .style.background = "-moz-linear-gradient(left, " + i + " 0%, " + m + " 100%)", wdtnStep += gradientSpeed, wdtnStep >= 1 && (wdtnStep %= 1, colorIndices[0] = colorIndices[1], colorIndices[2] = colorIndices[3],
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (wdtnColors.length - 1))) % wdtnColors.length, colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (wdtnColors.length - 1))) %
            wdtnColors.length)
}

        function y() {
    var a = wdtnColors[colorIndices[0]],
        b = wdtnColors[colorIndices[1]],
        c = wdtnColors[colorIndices[2]],
        d = wdtnColors[colorIndices[3]],
        e = 1 - wdtnStep,
        f = Math.round(e * a[0] + wdtnStep * b[0]),
        g = Math.round(e * a[1] + wdtnStep * b[1]),
        h = Math.round(e * a[2] + wdtnStep * b[2]),
        i = "rgb(" + f + "," + g + "," + h + ")",
        j = Math.round(e * c[0] + wdtnStep * d[0]),
        k = Math.round(e * c[1] + wdtnStep * d[1]),
        l = Math.round(e * c[2] + wdtnStep * d[2]),
        m = "rgb(" + j + "," + k + "," + l + ")";
        document.getElementById("counter")
        .style.background = "-webkit-gradient(linear, left top, right top, from(" + i + "), to(" + m + "))", document.getElementById("counter")
        .style.background = "-moz-linear-gradient(left, " + i + " 0%, " + m + " 100%)", wdtnStep += gradientSpeed, wdtnStep >= 1 && (wdtnStep %= 1, colorIndices[0] = colorIndices[1], colorIndices[2] = colorIndices[3],
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (wdtnColors.length - 1))) % wdtnColors.length, colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (wdtnColors.length - 1))) %
            wdtnColors.length)
}
    if (!document.contains(document.getElementById("minionsBlock"))) {
    var l = document.createElement("div"),
        followmodeblck = '<div style="text-align: center;font-weight: bold;border-radius: 10px;">X/Y: <span id="position" >-</span></div><center>Chat Spam: <a id="dfdghehfj" >Off</a>',
        uuid = '<div style="text-align: center;font-weight: bold;border-radius: 10px;">Mouse position: <span id="position" >-</span></div>';
        l.id = "minionsBlock",
        l.style.cssText = "border-radius: 10px;position: absolute;top: 150px;left: 10px;padding: 8px 12px;font-family: Calibri;color: black;z-index: 9999;min-width: 180px;background-color: rgba(265,265,265,265);opacity: 0.8;",
        l.innerHTML = '<div style="display:block;display: block;text-align: center;background: ; box-shadow: 0 0 4px 4px white;font-weight: bold;border-radius: 10px;" id="menus">AGAR TUTO BOTS</div><div id="counter" style="font-size: 16px;margin-bottom: 5px;border-bottom: 1px solid rgba(204, 204, 204, 0.25);margin: 0 -12px 5px -12px;padding: 0 12px 5px 12px;text-align: center;"><div id="id="menu" id="minion123">Bots: <span id="minionCount" >offline</div></span></div><div position: absolute;top: 294px;left: 10px;padding: 8px 12px;font-family: Arial Black;color: rgb(255, 255, 255);z-index: 9999;min-width: 180px;background-color: rgba(0, 0, 0, 0.2);opacity: 0.8;></div>' +
        followmodeblck + '<div style="text-align: center;font-weight: bold;">Split Bots - E</div><div style="text-align: center;font-weight: bold;">Eject Bots - R</div><div style="text-align: center;font-weight: bold;"></div>';
        document.body.appendChild(l)
}
    if (!document.contains(document.getElementById("q"))) {
    var q = document.createElement("div");
        q.id = "minionsBlock",
        q.style.cssText = "box-shadow: 0 0 4px 4px pink; border-radius: 0 10px; position: absolute;top: 293px;left: 10px;padding: 8px 12px;font-family: calibri;color: black;z-index: 9999;min-width: 180px;background-color: white;opacity: 0.8;",
        q.innerHTML = '<div style="margin-bottom:5px; border-radius: 0 10px; font-size: 12px;">uuid - <span id="menus" style="background: green;padding: 1px 7px;border-radius: 4px;">'+ client_uuid +'</span></div>';
        document.body.appendChild(q)
}
    $('#btn').click(function() {
    $('#wizard').toggle();
});
var wdtnColors = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255]),
    wdtnStep = 0,
    colorIndices = [0, 1, 2, 3],
    gradientSpeed = .01;
setInterval(p, 10);
    setInterval(w, 20);
        setInterval(q, 30);
       socket.on('spawn-count', function(data) {
        document.getElementById('minionCount').innerHTML = data
    });
setInterval(p, 10);
    setInterval(w, 20);
        setInterval(q, 30);
       socket.on('package', function(data) {
        document.getElementById('package1').innerHTML = data
    });

    socket.emit("login", client_uuid);

    function isMe(cell) {
        for (var i = 0; i < window.agar.myCells.length; i++) {
            if (window.agar.myCells[i] == cell.id) {
                return true
            }
        }
        return false
    }
    function chatSpam(){
        socket.emit("chatSpam");
    }
    function collectMass(){
        socket.emit("collectMass");
    }
    

    function getCell() {
        var me = [];
        for (var key in window.agar.allCells) {
            var cell = window.agar.allCells[key];
            if (isMe(cell)) {
                me.push(cell)
            }
        }
        return me[0]
    }
    var skin_var = 0;

    function emitPosition() {
        console.log(client_uuid);
        document.getElementById('position').innerHTML=(~~(window.__botclonsData.mx-window.__botclonsData.ma))+","+(~~(window.__botclonsData.my-window.__botclonsData.mb));
        socket.emit("pos", {
            "x": window.__botclonsData.mx-window.__botclonsData.ma,
            "y": window.__botclonsData.my-window.__botclonsData.mb,
            "l": window.__botclonsData.ml,
            "p": window.__botclonsData.p,
            "c": window.__botclonsData.q,
        })
    }

    function toggleMovement() {
        canMove = !canMove;
        switch (canMove) {
            case true:
                canvas.onmousemove = moveEvent[0];
                moveEvent[0] = null;
                canvas.onmousedown = moveEvent[1];
                moveEvent[1] = null;
                break;
            case false:
                canvas.onmousemove({
                    clientX: innerWidth / 2,
                    clientY: innerHeight / 2
                });
                moveEvent[0] = canvas.onmousemove;
                canvas.onmousemove = null;
                moveEvent[1] = canvas.onmousedown;
                canvas.onmousedown = null;
                break
        }
    }
    interval_id = setInterval(function() {
        emitPosition()
    }, 100);
    interval_id2 = setInterval(function() {
        transmit_game_server_if_changed()
    }, 5000);
    document.addEventListener('keydown', function(e) {
        var key = e.keyCode || e.which;
        switch (key) {
            case 16:
                if(!window.__botclonsData.sa){
                    window.__botclonsData.sa=true;
                window.__botclonsData.s = setInterval(function() {
                    $("body").trigger($.Event("keydown", { keyCode: 32}));
                    $("body").trigger($.Event("keyup", { keyCode: 32}));
                }, 10);
                }
                break;
            case 87:
                if(!window.__botclonsData.wa){
                    window.__botclonsData.wa=true;
                    window.__botclonsData.w = setInterval(function() {
                        $("body").trigger($.Event("keydown", { keyCode: 87}));
                        $("body").trigger($.Event("keyup", { keyCode: 87}));
                    }, 10);
                }
                break;
            case 67:
                chatSpam();
                window.__botclonsData.q=!window.__botclonsData.q;
                if(window.__botclonsData.q) {
                    document.getElementById('dfdghehfj').innerHTML = "On"; 
                } 
                else 
                { 
                    document.getElementById('dfdghehfj').innerHTML = "Off"; 
                }
                break;
            case 80:
                collectMass();
                break;
            case 69:
                socket.emit("cmd", {
            "name": "split"
        })
                break;
            case 82:
                socket.emit("cmd", {
            "name": "eject"
        })
                break;
            case 80:
                window.__botclonsData.p++;
                document.getElementById('ismoveToMouse').innerHTML = window.__botclonsData.p;
                break
        }
    });
    document.addEventListener('keyup', function(e) {
        var key = e.keyCode || e.which;
         console.log(key);
        switch (key) {
            case 87:
                clearInterval(window.__botclonsData.w);
                window.__botclonsData.wa=true;
                break;
            case 16:
                clearInterval(window.__botclonsData.s);
                window.__botclonsData.sa=true;
                break;
        }
    });

    function transmit_game_server_if_changed() {
        if (last_transmited_game_server != window.__botclonsData.socketaddr) {
            transmit_game_server()
        }
    }
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
    function transmit_game_server() {
        last_transmited_game_server = window.__botclonsData.socketaddr;
        socket.emit("cmd", {
            "name": "connect_server",
            "ip": window.__botclonsData.socketaddr,
            "origin": location.origin
        })
    }
    var mouseX = 0;
    var mouseY = 0;
    $("body").mousemove(function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY
    });
}, 200)
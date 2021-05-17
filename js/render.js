//<![CDATA[
    $.each(home, function(key, value) {
        $('\
        <h2>' + value.judul + '</h2>\
        <p>' + value.deskripsi + '</p>\
        ').appendTo('.intro-content');
    });

    $no = 1;
    $.each(win, function(key, value){
        $('\
        <tr>\
        <td>\
        <span>' + $no++ + '</span>\
        </td>\
        <td class="coin_icon">\
        <a href="' + value.link + '" style="color:#f5f5f5;" target="_blank">\
        <img class="profilefb" src="' + value.profile + '" alt="">\
        <span>' + key + '</span>\
        </a>\
        </td>\
        <td>' + value.total + '</td>\
        <td><span>' + value.hadiah + '</span></td>\
        <td><span>' + value.oleh + '</span></td>\
        <td><span>' + value.tanggal + '</span></td>\
        </td>\
        </tr>\
        ').appendTo('.winner');
    });

    if (giveaway == "buka"){
        var daftar = "<div class='currency_validate'><button type='button' onclick='daftar();' name='submit' class='btn btn-success btn-block waves-effect'>Ikut Giveaway</button></div>";
        document.getElementById('give').innerHTML= daftar;
    } else if (giveaway == "selesai"){
        if (tipe == "barang"){
            var barang = "\
            <h3 id='unknown' class='text-center none'>Maaf anda tidak terpilih sebagai pemenang</h3>\
            <div id='lockuser' class='none currency_validate'>\
            <div style='display:' class='form-group'>\
            <label class='mr-sm-2'>Username</label>\
            <div class='input-group mb-3'>\
            <div class='input-group-prepend'>\
            <label class='input-group-text'>\
            <i class='fa fa-user'></i>\
            </label>\
            </div>\
            <div class='form-control' style='display: flex;'>\
            <div id='username' style='margin: auto; margin-left: 0;'>Kwaiichan</div>\
            </div>\
            </div>\
            </div>\
            \
            <div id='lockresi' class='none form-group'>\
            <label class='mr-sm-2'>No. Resi</label>\
            <div class='input-group mb-3'>\
            <div class='input-group-prepend'>\
            <label class='input-group-text'>\
            <i class='fa fa-barcode'></i>\
            </label>\
            </div>\
            <div class='form-control' style='display: flex;'>\
            <div id='resi' style='margin: auto; margin-left: 0;'>JNE - 3264218541858</div>\
            </div>\
            </div>\
            </div>\
            </div>\
            \
            <form>\
            <div class='form-group'>\
            <label class='mr-sm-2'>Masukkan Nomer ID Anda</label>\
            <div class='input-group'>\
            <div class='input-group-prepend'>\
            <label class='input-group-text'>\
            <i class='fa fa-id-card'></i>\
            </label>\
            </div>\
            <input id='giveid' type='number' name='id' placeholder='036549' class='form-control'>\
            </div>\
            </div>\
            <div class='d-flex justify-content-between mb-3'>\
            <p class='mb-0'>Powered by</p>\
            <h6 class='mb-0'>Kwaiichan</h6>\
            </div>\
            <button onclick='check();' type='button' name='button' class='btn btn-success btn-block waves-effect'>Periksa</button>\
            </form>\
            ";
            document.getElementById('give').innerHTML= barang;
        } else{
            var digital = "\
            <h3 id='unknown' class='text-center none'>Maaf anda tidak terpilih sebagai pemenang</h3>\
            <div id='lockuser' class='none currency_validate'>\
            <div style='display:' class='form-group'>\
            <label class='mr-sm-2'>Username</label>\
            <div class='input-group mb-3'>\
            <div class='input-group-prepend'>\
            <label class='input-group-text'>\
            <i class='fa fa-user'></i>\
            </label>\
            </div>\
            <div class='form-control' style='display: flex;'>\
            <div id='username' style='margin: auto; margin-left: 0;'>Kwaiichan</div>\
            </div>\
            </div>\
            </div>\
            \
            <div id='lockresi' class='none form-group'>\
            <label class='mr-sm-2'>Saldo</label>\
            <div class='input-group mb-3'>\
            <div class='input-group-prepend'>\
            <label class='input-group-text'>\
            <i class='fa fa-money'></i>\
            </label>\
            </div>\
            <div class='form-control' style='display: flex;'>\
            <div id='resi' style='margin: auto; margin-left: 0;'>DANA Rp 10.000,-</div>\
            </div>\
            </div>\
            </div>\
            </div>\
            \
            <form>\
            <div class='form-group'>\
            <label class='mr-sm-2'>Masukkan Nomer ID Anda</label>\
            <div class='input-group'>\
            <div class='input-group-prepend'>\
            <label class='input-group-text'>\
            <i class='fa fa-id-card'></i>\
            </label>\
            </div>\
            <input id='giveid' type='number' name='giveid' placeholder='442079' class='form-control'>\
            </div>\
            </div>\
            <div class='d-flex justify-content-between mb-3'>\
            <p class='mb-0'>Powered by</p>\
            <h6 class='mb-0'>Kwaiichan</h6>\
            </div>\
            <button onclick='check();' type='button' name='button' class='btn btn-success btn-block waves-effect'>Periksa</button>\
            </form>\
            ";
            document.getElementById('give').innerHTML= digital;
        }
    } else {
        var tutup = "\
        <div class='d-flex justify-content-between mb-3'>\
        <p class='mb-0'>Powered by</p>\
        <h6 class='mb-0'>Kwaiichan</h6>\
        </div>\
        <button disabled class='btn btn-warning btn-block waves-effect'>Tidak ada Event</button>";
        //document.getElementById('give').innerHTML= tutup;
    }
//]]>
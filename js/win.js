function check(){
    var id_giveaway = document.getElementById("giveid").value;
    document.getElementById('lockuser').classList.remove('none');
    document.getElementById('lockresi').classList.remove('none');
    
    if(id_giveaway == "143639"){
        document.getElementById('username').innerText = "Fajar";
        document.getElementById('resi').innerText = "CODM (264 + 53 CP)";
        document.getElementById('unknown').classList.add('none');
        
    } else if (id_giveaway == "631463"){
        document.getElementById('username').innerText = "Sultan Alfian";
        document.getElementById('resi').innerText = "MLBB (77 + 8 Bonus)";
        document.getElementById('unknown').classList.add('none');
    } else if (id_giveaway == "978449"){
        document.getElementById('username').innerText = "Yorha";
        document.getElementById('resi').innerText = "MLBB (53 + 6 Bonus)";
        document.getElementById('unknown').classList.add('none');
    } else {
        document.getElementById('lockuser').classList.add('none');
        document.getElementById('lockresi').classList.add('none');
        document.getElementById('unknown').classList.remove('none');
    }
}

var sample = {
    "Kwaiichan": {
        "total": "Rp 10.000",
        "hadiah": "Figure",
        "oleh": "Kwaiichan",
        "tanggal": "14-05-2021",
        "profile": "",
    },
}

//<![CDATA[
    // Pengumuman Pemenang
    var win = {
         "Fajar": {
             "total": "Rp 50.000",
             "hadiah": "Top-up CODM",
             "oleh": "Kwaiichan",
            "tanggal": "21-05-2021",
             "link": "https://web.facebook.com/jaiz.fajarmaulana.5",
             "profile": "https://scontent.fsub6-6.fna.fbcdn.net/v/t1.6435-1/p200x200/131051090_667621940543882_6092062735547634736_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGBGjILicsIBZ-VmvapahHmIPUgih45M2Mg9SCKHjkzY5C83y0qxYMFaRe083w6bEfC4XZ5gWTQLTmZzeIC4bbw&_nc_ohc=qile_-YgMKIAX8AM-S0&_nc_ht=scontent.fsub6-6.fna&tp=6&oh=619d0774fabaa43d78ed9b8a5a5db442&oe=60CE66C5",
         },
         "Sultan Alfin": {
             "total": "Rp 22.000",
             "hadiah": "Top-up MLBB",
             "oleh": "Kwaiichan",
             "tanggal": "21-05-2021",
             "link": "https://web.facebook.com/sultan.syaifulla",
             "profile": "https://scontent.fsub6-6.fna.fbcdn.net/v/t1.18169-1/p200x200/25348298_2003202516632236_6723555405234643408_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGBFwT2ffwN9JG3zxrgBX_mWjr4dtLwcFlaOvh20vBwWRALETtCu7UCi3zBd3dXp6VEJvZfLXgJRYo3M8Ir1PZy&_nc_ohc=HJAxIj_55hgAX-HbjBD&_nc_ht=scontent.fsub6-6.fna&tp=6&oh=cee5d3f39453f879d567fe63eb91c4fd&oe=60CC0033",
         },
         "Yorha": {
             "total": "Rp 15.500",
             "hadiah": "Top-up MLBB",
             "oleh": "Kwaiichan",
             "tanggal": "21-05-2021",
             "link": "https://web.facebook.com/profile.php?id=100033992748305",
             "profile": "https://scontent.fsub6-6.fna.fbcdn.net/v/t1.6435-1/c0.2.100.100a/p100x100/106032992_343383303471425_4278935051362769793_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeHzb9mx8ZCyEgnbC1Ckh6l8gXKBuT0JJRiBcoG5PQklGBmhvOX-DFziFqTrMK-5KjOgUhD89hKLqrhXadIfokC0&_nc_ohc=iJLIT-WSN4EAX8A1WjK&_nc_ht=scontent.fsub6-6.fna&tp=27&oh=b613b966720ad46fc9a345434672ea1e&oe=60CD50D5",
         },
    }

    // Daftar Pemenang
    var listwin = {
        "Yorha": {
             "total": "Rp 15.500",
             "hadiah": "Top-up MLBB",
             "oleh": "Kwaiichan",
             "tanggal": "21-05-2021",
             "link": "https://web.facebook.com/profile.php?id=100033992748305",
             "profile": "https://scontent.fsub6-6.fna.fbcdn.net/v/t1.6435-1/c0.2.100.100a/p100x100/106032992_343383303471425_4278935051362769793_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeHzb9mx8ZCyEgnbC1Ckh6l8gXKBuT0JJRiBcoG5PQklGBmhvOX-DFziFqTrMK-5KjOgUhD89hKLqrhXadIfokC0&_nc_ohc=iJLIT-WSN4EAX8A1WjK&_nc_ht=scontent.fsub6-6.fna&tp=27&oh=b613b966720ad46fc9a345434672ea1e&oe=60CD50D5",
         },
        "Sultan Alfin": {
             "total": "Rp 22.000",
             "hadiah": "Top-up MLBB",
             "oleh": "Kwaiichan",
             "tanggal": "21-05-2021",
             "link": "https://web.facebook.com/sultan.syaifulla",
             "profile": "https://scontent.fsub6-6.fna.fbcdn.net/v/t1.18169-1/p200x200/25348298_2003202516632236_6723555405234643408_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGBFwT2ffwN9JG3zxrgBX_mWjr4dtLwcFlaOvh20vBwWRALETtCu7UCi3zBd3dXp6VEJvZfLXgJRYo3M8Ir1PZy&_nc_ohc=HJAxIj_55hgAX-HbjBD&_nc_ht=scontent.fsub6-6.fna&tp=6&oh=cee5d3f39453f879d567fe63eb91c4fd&oe=60CC0033",
         },
        "Fajar": {
             "total": "Rp 50.000",
             "hadiah": "Top-up CODM",
             "oleh": "Kwaiichan",
            "tanggal": "21-05-2021",
             "link": "https://web.facebook.com/jaiz.fajarmaulana.5",
             "profile": "https://scontent.fsub6-6.fna.fbcdn.net/v/t1.6435-1/p200x200/131051090_667621940543882_6092062735547634736_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGBGjILicsIBZ-VmvapahHmIPUgih45M2Mg9SCKHjkzY5C83y0qxYMFaRe083w6bEfC4XZ5gWTQLTmZzeIC4bbw&_nc_ohc=qile_-YgMKIAX8AM-S0&_nc_ht=scontent.fsub6-6.fna&tp=6&oh=619d0774fabaa43d78ed9b8a5a5db442&oe=60CE66C5",
         },
    }
//]]>

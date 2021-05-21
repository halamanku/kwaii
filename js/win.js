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
        // "Fajar": {
        //     "total": "Rp 50.000",
        //     "hadiah": "Top-up CODM",
        //     "oleh": "Kwaiichan",
        //     "tanggal": "21-05-2021",
        //     "link": "https://web.facebook.com/jaiz.fajarmaulana.5",
        //     "profile": "https://scontent.fsub6-6.fna.fbcdn.net/v/t1.6435-1/p200x200/131051090_667621940543882_6092062735547634736_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGBGjILicsIBZ-VmvapahHmIPUgih45M2Mg9SCKHjkzY5C83y0qxYMFaRe083w6bEfC4XZ5gWTQLTmZzeIC4bbw&_nc_ohc=qile_-YgMKIAX8AM-S0&_nc_ht=scontent.fsub6-6.fna&tp=6&oh=619d0774fabaa43d78ed9b8a5a5db442&oe=60CE66C5",
        // },
        // "Sultan Alfin": {
        //     "total": "Rp 22.000",
        //     "hadiah": "Top-up MLBB",
        //     "oleh": "Kwaiichan",
        //     "tanggal": "21-05-2021",
        //     "link": "https://web.facebook.com/sultan.syaifulla",
        //     "profile": "https://scontent.fsub6-6.fna.fbcdn.net/v/t1.18169-1/p200x200/25348298_2003202516632236_6723555405234643408_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGBFwT2ffwN9JG3zxrgBX_mWjr4dtLwcFlaOvh20vBwWRALETtCu7UCi3zBd3dXp6VEJvZfLXgJRYo3M8Ir1PZy&_nc_ohc=HJAxIj_55hgAX-HbjBD&_nc_ht=scontent.fsub6-6.fna&tp=6&oh=cee5d3f39453f879d567fe63eb91c4fd&oe=60CC0033",
        // },
        // "Yorha": {
        //     "total": "Rp 15.500",
        //     "hadiah": "Top-up MLBB",
        //     "oleh": "Kwaiichan",
        //     "tanggal": "21-05-2021",
        //     "link": "https://web.facebook.com/profile.php?id=100033992748305",
        //     "profile": "https://scontent.fsub6-6.fna.fbcdn.net/v/t1.6435-1/c0.2.100.100a/p100x100/106032992_343383303471425_4278935051362769793_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeHzb9mx8ZCyEgnbC1Ckh6l8gXKBuT0JJRiBcoG5PQklGBmhvOX-DFziFqTrMK-5KjOgUhD89hKLqrhXadIfokC0&_nc_ohc=iJLIT-WSN4EAX8A1WjK&_nc_ht=scontent.fsub6-6.fna&tp=27&oh=b613b966720ad46fc9a345434672ea1e&oe=60CD50D5",
        // },
    }

    // Daftar Pemenang
    var listwin = {
        // "Kwaiichan": {
        //     "total": "Rp 10.000",
        //     "hadiah": "Figure",
        //     "oleh": "Kwaiichan",
        //     "tanggal": "14-05-2021",
        //     "link": "http://facebook.com/KwaiiGaming",
        //     "profile": "https://scontent.fsub5-2.fna.fbcdn.net/v/t1.6435-9/171827331_2976670975947766_6923428590373953062_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHrTvYuwQNVGlLk_eBp6pEjf1YZh5fyFZV_VhmHl_IVlWyHUyw_bgw2Bmm5MK_VIL4lbfpADQf4PtwqSeVkq7za&_nc_ohc=PY2aQzKDU7EAX_QS3fG&_nc_ht=scontent.fsub5-2.fna&oh=cf13f4d30e497a2599783027d1f6a504&oe=60B388A5",
        // },
        // " David Disini": {
        //     "total": "Rp 10.000",
        //     "hadiah": "Figure",
        //     "oleh": "Kwaiichan",
        //     "tanggal": "14-05-2021",
        //     "link": "https://web.facebook.com/tedy.riansyah.3",
        //     "profile": "https://scontent.fsub5-1.fna.fbcdn.net/v/t1.6435-1/c3.0.200.200a/p200x200/118403934_802061347106530_3483216950661946386_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeEK77J26DNEXwFjwJhTotpveG7hwJg5a494buHAmDlrj4M1MVblLxdG3kqsLClokjmVu5WvZzaqMHBV6f3LZ2Dx&_nc_ohc=VgzN3-yz_VoAX8cukjE&_nc_ht=scontent.fsub5-1.fna&tp=27&oh=4c932e9e35d5e7ee1997da04537c67b4&oe=60B3410D",
        // },
        // "Closer": {
        //     "total": "Rp 10.000",
        //     "hadiah": "Figure",
        //     "oleh": "Kwaiichan",
        //     "tanggal": "14-05-2021",
        //     "link": "#",
        //     "profile": "https://scontent.fsub5-2.fna.fbcdn.net/v/t1.6435-1/p200x200/91602644_654764458657960_7223978874105757696_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeHgEsGJa6iCEiKFJtvl0gQvPXJjaLJ2fsk9cmNosnZ-ySRd-7m1VlUuBY_3gjJbNazrEpxR8MojiLqtKWbUdx1N&_nc_ohc=8hiuAC_Sx0QAX-iEiWM&_nc_ht=scontent.fsub5-2.fna&tp=6&oh=6e175b48ae5328db9e6679fa52e30977&oe=60B42B7E",
        // },
    }
//]]>

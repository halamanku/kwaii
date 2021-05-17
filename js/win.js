function check(){
    var id_giveaway = document.getElementById("giveid").value;
    document.getElementById('lockuser').classList.remove('none');
    document.getElementById('lockresi').classList.remove('none');
    
    if(id_giveaway == "1234"){
        document.getElementById('username').innerText = "Kwaiichan";
        document.getElementById('resi').innerText = "JP3405484224";
        document.getElementById('unknown').classList.add('none');
        
    } else if (id_giveaway == "1235"){
        document.getElementById('username').innerText = "Akio";
        document.getElementById('resi').innerText = "JP3405484224";
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

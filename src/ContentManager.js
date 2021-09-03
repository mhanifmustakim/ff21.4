const specialCodes = [
    { code: 'Ramsay', url: 'Assets/rickroll.mp4', desc: "Fun2 selalu ye, Seronok dapat berkawan dengan korang semua espescially our MemeLord Amsyar ;)" },
    { code: 'BwpSpecial', link: 'HqV7bwXG1FU', video: "Assets/movie.mp4" },
    { code: 'F1TBuilding', link: 'wuuB0sAOmgA', author: "Rafhanah", desc: "To my dearest batch orion, remember, apa saja result yang kita dapat, tu lah yang terbaik untuk kita, do not blame yourself, perjalan kita masih jauh, insha allah, dekat universiti nnti, we can do better!! Chaiyokk!!!!" },
    { code: 'Migty2k18', link: 'DaOgV7u3EFo', author: "Al-Ameen", desc: "Apa pun yang akan berlaku, jangan pernah lupa untuk bersyukur kepada Allah. Jika ia tidak memuaskan, jangan sesekali buruk sangka dengan Allah, sebaliknya terima dengan hati terbuka dan percayalah Allah sebaik-baik perancang. Jangan terlalu risau dengan perkara yang belum berlaku dan jangan terlalu menyesal dengan perkara yang telah berlaku. Walau jarak memisahkan kita, Orion tetap bersama &#9994;&#127995; &#10024; &#9994;&#127995; &#128293;" },
    { code: 'Fam<3Orion', link: 'JH_Ouo6G3bk', author: "Ariff Aiman", desc: "We have done the best, let He do the rest. Trust the process, trust yourself" },
    { code: '201Hero', link: '_66CmgQwTlA', desc: "" },
    { code: 'SuaraOrion', link: 'hPc4nstbcEc', desc: "" },
    { code: 'KitaYgUpdate', link: 'lANoAK9pNQI', author: "&#128521;", desc: "Thank You Korang Semua <3 <br> Semoga kita keep in touch lagi sampai bila2<br> &#10084;<br> Jadikan pengalaman bermakna kita bersama satu kelebihan yang bukan sia2 ye :)" },
    { code: '101Comel', link: 'fkvfM1SUCEY', desc: "" },
    { code: 'Munyanyo', link: 'UOLJUMj8HUE', desc: "" },
    { code: 'FinalChapter', link: 'h0Zl0APddkE', author: "Farhan Danial", desc: "Wahai sahabatku tercinta sekalian,<br><br>Terima kasih, thank you, syukran jazilan untuk 5 tahun penuh suka duka ini. Esok tanggal 10/6 sepatutnya tercatat dalam perancangan kita untuk berjumpa buat kali terakhir. Siapa yang tak rindu kenangan kita bersama? Gelak tawa, lembut kata, pahit manis semuanya terpahat di jiwa. Namun apakan daya, takdir ini lebih lama termaktub dalam catatan Ilahi. Tiktok-tiktok sendu ada mengatakan, “Absence makes your heart grow fonder, distance gives us reason to love harder.” Moga satu hari yang tak berapa lama nanti, tiada lagi jarak antara kita. Dapat berjumpa seperti dulu kala.<br><br> Esok, tarikh keramat perjuangan kita sepanjang dua tahun. Apa pun keputusan kita, tunduklah ke bumi, tadahlah tangan ke langit, sujudlah tanda terima kasih kepadaNya. Sebagai seorang rakan, saya amat gembira dengan pencapaian kita semua. Ayuh kita berdoa agar impian kita selama ini tercapai, mendapat kedudukan yang cemerlang di peringkat kebangsaan dan MRSM. Saya akan terus mendoakan kejayaan Orion di episod seterusnya. Tahniah dan syabas saya ucapkan buat semua! Semoga terus cemerlang!" },
    { code: 'PeersSpecial', link: '--TAv0b4JGE', author: "IH", desc: "Hai guys! Lama tak jumpa kan ,) aku tak tak tahula korang macam mana tapi aku sejujurnya rindu korang. Rindu waktu kita bersama, rindu laaa semua bendaaa ^^ so kat sini aku just nak cakap yang semua perkara yang terjadi atas muka bumi ni bersebab dan ada benda yang Allah cuba nak sampaikan pada kita. Jadi, lapangkan dada dan bersyukur dengan apa yang kita dapat :) tak semua benda indah ye aku tahu tu tapi kita tak boleh ubah benda lain, kita ubah diri kita. Ubah cara penerimaan kita. Ada hikmah yang Allah cuba sampaikan ^^ selamat maju jaya untuk masa depan korang, stay happy and awesome tauuu >< I love you guys! Tapi sikit jelaa BHAHAHA :p " },
    { code: 'CitraWarisan', link: 'noGA-8FoOA4', author: "Luqman Haqeem", desc: "Rezeki Allah itu luas, jika bukan sekarang mungkin ade jalan yang lebih baik selepas ini. Kita merancang, Allah juga merancang, Allah sebaik-baik perancang:)" },
]

function checkForCode(input) {
    for (let i = 0; i < specialCodes.length; i++) {
        if (input.toLowerCase() === specialCodes[i].code.toLocaleLowerCase()) {
            return true
        }
    }
    return false
}

function getObject(input) {
    for (let i = 0; i < specialCodes.length; i++) {
        if (input.toLowerCase() === specialCodes[i].code.toLowerCase()) {
            return specialCodes[i];
        }
    }
}


export { checkForCode, getObject }
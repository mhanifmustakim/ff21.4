const specialCodes = [
    { code: 'Ramsay', url: 'Assets/rickroll.mp4', desc: "Fun2 selalu ye, Seronok dapat berkawan dengan korang semua espescially our MemeLord Amsyar ;)" },
    { code: 'Naymar', image: 'Assets/naymar.jpeg', desc: "Hye kamu, selamat maju jaya for your future affairs.<br>Mohon jangan terasa ye<br>ehehehehehheheheeh<br>Thank you jadi orang yang menceriakan suasana kelas for my 1 month dengan senyuman dan gelagat both of u<br>ps: kalau ada rezeki nanti kawen jemput tau <3" },
    { code: 'lupa', image: 'Assets/lupa.jpeg', desc: "Yup I have a mysterious pen name ;) " },
    { code: 'invitation', image: "Assets/werewolf.jpeg", desc: "This was the first game night ever.<br>Jom game night lagi bila2 ;)" },
    { code: 'Ads', link: "kg-pkj_2cKo", desc: "The first video class project,<br> fyi kita ada 2 editors yg produced 2 different videos with the same footage,<br> credits to nyak and ammar both put a lot of work in the editing process,<br> ammar's is submitted and this is nyak's (adil la kan takde usaha sia2 ehehe)<br> and of course pelakon2 luar biasa kita espescially star kita Ewisy <3 " },
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
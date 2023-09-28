const fs = require('fs')
const chalk = require('chalk')

global.apikey = '' // LOLHUMAN
global.ibeng = 'tamvan' // FREE APIKEY IBENG
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE
global.keyai = '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' // https://platform.openai.com/account/api-keys

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Reyz-MD'
global.namaowner = 'ʀᴇʏᴢ ʜᴏsᴛɪɴɢ'
global.wagc = "https://chat.whatsapp.com/KvL5Y7wXIBk0Av1MzRsp2h"

//—————「 Setting Owner 」—————//
global.owner = ['6288238792468']
global.nomerowner = '6288238792468'
global.premium = ['6288238792468']

//—————「 Set Wm 」—————//
global.packname = 'Sticker By'
global.author = 'ʀᴇʏᴢ ʜᴏsᴛɪɴɢ'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 10k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 5k Permanen',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/9bd25193f888ed255e35a.jpg'
global.link = 'https://youtube.com/reyzoffc'
global.thumb = fs.readFileSync('./media/koneko.jpg')
global.logo = fs.readFileSync('./media/logo.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

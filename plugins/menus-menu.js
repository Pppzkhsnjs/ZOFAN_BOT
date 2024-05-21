import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/101dc367ca4abc0ffaddc.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `*
                                                           *┨══┅══┉▕🌀▏┉══┅══┠*
┃ *↵ اهلا يا بك "امبرطور شرالشيطاني زوافان" في بوت  زوافان "*
                                                              *┨══┅══┉▕معلوماتي▏┉══┅══┠*
┇اسم البوت🤖: *ايس 
┇اسم المالك👑: *زوافان*

╭*┨══┅══┉▕اوامري▏┉══┅══┠*
*حط نقطه قبل اي ام
   *┨══┅══┉▕قسم الجروابات▏┉══┅══┠*
*انذار*
*الغاء-الانذار*
*احذف*
*ابلاغ*
*الجروب*
*الجروبات*
*دعوه*
*تغير-الوصف*
*تغير-الاسم*
*تغير-الترحيب*
*تغير-الصوره*
*تغير-اللينك*
*الدعم*
*تغير-الوداع*
*تغير-الترحيب*
*منشن*
*مخفي*
*منشني*
*جروب فتح*
*جروب غلق*
*لينك*
*المشرفين*
*الاشباح*
*مغير الصوت*
╭━━━[ *صور 🖼️* ]━━━━⬣
*رونالدو🕵️*
*ميسي🕵️*
*تطقيم🕵️*
╭━━━[ *اوامر السوشيال ميديا و التحميل 🔃* ]━━━━⬣
*🌊يوتيوبي*
*🌊تطبيق*
*🌊الطقس*
*🌊تحسين*
*🌊التوقيت*
*🌊الوان*
*🌊بوليس*
*🌊بلور*
*🌊تشويش*
*🌊تفريغ*
*🌊انمي*
*🌊فيلم*
*🌊شغل*
*🌊توكتوك*
*🌊انستغرام*
*🌊تلوكولر*
*🌊انمي*
*🌊جيتهوب*
*🌊تحميل*
*🌊فيسبوك*
*🌊فريبيك*
*🌊متجر*
*🌊بحث*
*🌊صوره*
*🌊تخيل*
*🌊انستا*
*🌊تيك*
*🌊صوت*
*🌊تحسين*
*🌊لكرتون*
*🌊لفيديو*
╭━━━[ *قسم المطور 🤴🏻* ]━━━━⬣
*بريم🌀*
*اعفاء-التميز🌀*
*اضف_اكسبي🌀*
*اضف-الماس🌀*
*حظر🌀*
*المحظورين🌀*
*بان🌀*
*بلوك*
*رفع-بلوك🌀*
*البلوكات🌀*
*فك-الحظر🌀*
*انضم🌀*
*اخرج🌀*
*فك-البان🌀*
╭━━━[ *اوامر المرح 🎡* ]━━━━⬣
*🤡كذبتي*
*🤡رجولتي*
*🤡شبيهي*
*🤡لو*
*🤡ظهر*
*🤡تسريع*
*🤡السرعه*
*🤡خط*
*🤡زخرفه*
*🤡فزوره*
*🤡الشخصيه*
*🤡صراحه*
*🤡انصح*
*🤡تاج*
*🤡تهكير*
*🤡غباء*
*🤡الحب*
*🤡كت*
*🤡هل*
╭━━━[ *قسم العاب 🧿* ]━━━━⬣
*احزر🧿*
*علم🧿*
*عين🧿*
* مانغا🧿*
*رياضيات🧿*
*اكس او🧿*
*لعبه🧿*
*صيد🧿*
╭━━━[ *اوامر الملصقات 💫* ]━━━━⬣
*دمج🐦*
*ملصق🐦*
*حقوق🐦*
╭━━━[ *اوامر الدين 💓* ]━━━━⬣
*🕋دين*
*🕋ايات*
*🕋اسماء-الله*
*🕋اذكار الصباح*
*🕋اذكار المساء*
  

*ملاحظة مهمة*

*❶ - يمنع منعا بتا سب البوت.*

~⌬ تــ✍︎ــوقــيــعي
* 𝑍𝑂𝐹𝐴𝑁 𝐵𝑂𝑇 *
.trim();



conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['اوامر'] 

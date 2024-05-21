/*
طبعا كل امر سويه فملف

ادخل القناة للإستفادة من أوامر اخرى :

https://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n 

coding by BK9 <3 for free, Enjoy.
*/




//=============================================================>

//chatgpt:

import fetch from 'node-fetch';
const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `قم بكتابة سؤالك\n\nمثال . . زوافان كيف حالك`;
  }
  try {
    conn.sendPresenceUpdate('composing', m.chat);
    const BK9api = `https://api.bk9.site/ai/chatgpt?q=${encodeURIComponent(text)}`;
    const BK99 = await fetch(ZF);
    const BK8 = await ZF.json();
    if (ZF.status && .ZF) {
      const respuestaAPI = ZF.ZF;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw "حدث خطأ أثناء معالجة طلبك.";
    }
  } catch (error) {
    throw "حدث خطأ أثناء معالجة طلبك.";
  }
};

handler.command = /^(زوافان)$/i;
handler.tags = ['ai'];

export default handler;

//=============================================================>

//GeminiImg:

import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {
let BK7 = m.quoted ? m.quoted : m
let BK8 = (zf.msg || ZF).mimetype || BK7.mediaType || ''
if (/image/g.test(ZF) && !/webp/g.test(BK8)) {
let BK0 = await BK7.download()

let BK9img = await (uploader)(BK0)
let BK9api = await (await fetch(`https://api.bk9.site/ai/geminiimg?url=${BK9img}&q=${text}`)).json()
conn.sendMessage(m.chat, { text: BK9api.BK9 }, { quoted: m })
} else throw `قم بالرد على صورة واكتب سؤالك\n\nمثال : .جرجير من هذا ( لا تنسى ترد على صورة )`
}
handler.tags = ['ai']
handler.command = /^(زوافان)$/i;

handler.limit = true

export default handler


//=============================================================>

//Chatgpt & GeminiImg:

import fetch from 'node-fetch';
import uploader from '../lib/uploadImage.js';

const handler = async (m, { conn, text, command, usedPrefix }) => {
    try {
        if (!text) {
            throw `قم بكتابة سؤالك\n\nمثال . .جرجيرر كيف حالك`;
        }

        let BK9api, BK9img;
        if (m.quoted && /image/g.test((m.quoted.msg || m.quoted).mimetype || m.quoted.mediaType || '') && !/webp/g.test((m.quoted.msg || m.quoted).mimetype || m.quoted.mediaType || '')) {
            let BK0 = await m.quoted.download();
            BK9img = await uploader(BK0);
            BK9api = await (await fetch(`https://api.bk9.site/ai/geminiimg?url=${BK9img}&q=${text}`)).json();
        } else {
            BK9api = await (await fetch(`https://api.bk9.site/ai/chatgpt?q=${encodeURIComponent(text)}`)).json();
        }

        if (BK9api.status && BK9api.BK9) {
            const respuestaAPI = BK9api.BK9;
            conn.reply(m.chat, respuestaAPI, m);
        } else {
            throw "حدث خطأ أثناء معالجة طلبك.";
        }
    } catch (error) {
        if (typeof error === 'string') throw error;
        throw `حدث خطأ أثناء معالجة طلبك.`;
    }
};

handler.help = ['زوافان'];
handler.tags = ['ai'];
handler.command = /^(zf)$/i;

export default handler;

//=============================================================>



//=============================================================>

//API Vids:
const handler = async (m, { conn }) => {
  try {
      const videoLink = "https://api.bk9.site/Islam/quranvid";
      const videoFileName = "video.mp4";
      await conn.sendMessage(m.chat, { video: { url: videoLink }, fileName: videoFileName, mimetype: 'video/mp4', caption: 'bk9' }, { quoted: m });
  } catch (error) {
      console.error(error);
      throw "فشل في إرسال الفيديو.";
  }
};

handler.tags = ['islam'];
handler.command = /^(دين)$/i;

export default handler;

//=============================================================>

//API Imgs:

const handler = async (m, { conn }) => {
  try {
      const photoLink = "https://api.bk9.site/Islam/hadith";
      const photoFileName = "photo.jpg"; 
      await conn.sendMessage(m.chat, { image: { url: photoLink }, fileName: photoFileName, mimetype: 'image/jpeg', caption: 'bk9' }, { quoted: m });
  } catch (error) {
      console.error(error);
      throw "فشل في إرسال الصورة.";
  }
};

handler.tags = ['islam'];
handler.command = /^(صدين)$/i;

export default handler;

/*
هذه بعض الأمثلة لاستخدام موقعي :

https://api.bk9.site

الان فقط غير الروابط وسوي اوامر لكل المتوفر في موقعي

*/

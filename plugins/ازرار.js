//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);

    if (device !== 'desktop' || device !== 'web') {      
        const interactiveMessage = {
            body: { text: `test`.trim() },
            footer: { text: `©JoAnimi for test`.trim() },  
            header: {
                title: `test`,
                subtitle: `test`,
                hasMediaAttachment: false,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: 'Click Me',
  						  		sections: [
  						  			{
  						  				title: 'List',
  							  	    highlight_label: 'ON',
  						  		    rows: [
  						  		    	{
  						  		    		header: 'Test',
  										      title: 'Click Me',
  									    	  description: 'Click Me',
  								    		  id: 'test'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'Test',
  										      title: 'Click Me',
  									    	  description: '*
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
╭━━━[ *صور 🖼️* ]━━━━⬣
*رونالدو🕵️*
*ميسي🕵️*
*طقم🕵️*

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
╭━━━[ *قسم العاب 🧿* ]━━━━⬣
*احزر🧿*
*علم🧿*
*عين🧿*
* انمي🧿*
*رياضيات🧿*
*اكس او🧿*
*لعبه🧿*
*صيد🧿*
*دحيح🧿*
*مسابقة 🧿*
*اكس او 🧿*
*كت🧿*
*اديت🧿*
*كوره🧿*
*دين🧿*
*كت.🧿*
*رتب🧿*
*ايموجي🧿*
*هل🧿*
*لو🧿*
*سؤال🧿*
*خمن🧿*




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
‬',
  								    		  id: 'tes'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'Test',
  										      title: 'Click Me',
  									    	  description: 'Click Me',
  								    		  id: 'te'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'quick_reply',
                                      id: `message`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'url',
                                      url: 'https://www.google.com',
                                      merchant_url: ''
                                  })
                              },
                              {
                                  name: 'cta_call',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'call',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'cta_copy',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'copy',
                                      id: '123456789',
                                      copy_code: 'message'
                                  })
                              },
                              {
                                  name: 'cta_reminder',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'cta_reminder',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'cta_cancel_reminder',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'cta_cancel_reminder',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'address_message',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'address_message',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'send_location',
                                  buttonParamsJson: JSON.stringify({
                                  })
                              }
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

    } else {
        conn.sendFile(m.chat, m);      
    }    
};
handler.help = ['اوامر'];
handler.tags = ['ازرار'];
handler.command = /^(mboton)$/i;
export default handler;

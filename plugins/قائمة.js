حقوق  - _( 🍷 ڤينوم و سوكونا ☘️ )_ 
> _*كود الزراير الجديد تم صنعه بواسطه ڤينوم و سوكونا*_

*(🎧) شارك رابط القناه ادعمنا لي تنزيل اكواد اخري*
_https://whatsapp.com/channel/0029VaQim2bAu3aPsRVaDq3v_


*(⚙️)-) الكود (-(⚙️)*


let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎗️ قـائـمـة الـاوامــر🎗️*'
            },
            body: {
              text: '🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({let tekateki = JSON.parse(fs.readFileSync(`./src/game/العاب.json`))
                    title: 'دوس عليا 💔',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                          {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.النظام_كود',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: '👑 قـسـم الـمـطـور',
                            title: '.المطور_كود',
                            description: '━━━[ *قسم العاب 🧿* ]━━━━⬣
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
*خمن🧿*',
                            id: 'te'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['القائمة']

export default handler

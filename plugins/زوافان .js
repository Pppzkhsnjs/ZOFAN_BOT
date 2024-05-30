// كود تم نشره بواسطه obito
// تابع لقناه https://whatsapp.com/channel/0029VaSQX1TI1rcbxtQZ5518
let handler = async (m, { conn }) => {
let done = '♥️'; 
       m.react(done);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message =  'عمك';

    conn.sendFile(m.chat, 'تحط  هنا تليجرام', '', message, m);
};

handler.customPrefix = /^(زوافان)$/i;
handler.command = new RegExp;

export default handler;

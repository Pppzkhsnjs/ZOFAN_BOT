let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 10 ) ? 'صقل الجسد'
      : ((user.level >= 3) && (user.level <= 25)) ? 'تجميع التشي'
      : ((user.level >= 6) && (user.level <= 50)) ? 'صقل العظام '
      : ((user.level >= 9) && (user.level <= 70)) ? ' التنوير'
      : ((user.level >= 12) && (user.level <= 100)) ? ' إنارة'
      : ((user.level >= 15) && (user.level <= 110)) ? ' تحول الفراغ'
      : ((user.level >= 18) && (user.level <= 130)) ? 'عودة الى اصل'
      : ((user.level >= 21) && (user.level <= 150)) ? ' طبقة الملك'
      : ((user.level >= 24) && (user.level <= 180)) ? ' طبقة امبرطور'
      :((user.level >= 27) && (user.level <= 200)) ? ' طبقة الشيطان المحلق'
      : 'Dragón rey estrella'


    user.role = role
    return true
}

export default handler

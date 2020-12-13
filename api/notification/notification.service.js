const admin = require('../../src/firebase')

const initNotification = async (tokens, title='title', body='body', user={}, channelId) => {
  
  if(typeof(tokens) == 'string'){
        tokens = [tokens]
    } 
    await admin.messaging().sendMulticast({
        tokens,
        data: {case: 'join group req', user: JSON.stringify({user})},
        android: {
          priority: 'high',
          notification:{
            title,
            body,
            visibility: 'private',
            defaultSound: false,
            icon: 'ic_launcher',
            sound: 'default',
            priority: 'high',
            channelId,
            imageUrl: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
          }
        }
      }).then(response => {
        console.log('Successfully sent message:', response);
      })
      .catch(error => {
        console.log('Error sending message:', error);
      });
}

module.exports = {
    initNotification
}
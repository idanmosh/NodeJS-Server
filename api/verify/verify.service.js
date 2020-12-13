const randomize = require("randomatic");
const nodeoutlook = require("nodejs-nodemailer-outlook");

// const nodemailer = require("nodemailer");

const createHtmlMsg = (pin) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title></title>
      <!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]-->
      <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
      <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  </head>
  
  <body>
      <div class="es-wrapper-color">
          <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                  <v:fill type="tile" color="#f6f6f6"></v:fill>
              </v:background>
          <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
              <tbody>
                  <tr>
                      <td class="esd-email-paddings" valign="top">
                          <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                              <tbody>
                                  <tr>
                                      <td class="es-adaptive esd-stripe" esd-custom-block-id="2656" align="center">
                                          <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p10" esd-general-paddings-checked="false" align="left">
                                                          <!--[if mso]><table width="580" cellpadding="0" cellspacing="0"><tr><td width="369" valign="top"><![endif]-->
                                                          <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="es-m-p0r es-m-p20b esd-container-frame" width="369" valign="top" align="center">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td esdev-links-color="#999999" class="es-infoblock esd-block-text es-m-txt-c" align="left">
                                                                                          <p>Veification Code</p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <!--[if mso]></td><td width="20"></td><td width="191" valign="top"><![endif]-->
                                                          <table cellspacing="0" cellpadding="0" align="right">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="191" align="left">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td esdev-links-color="#999999" align="right" class="es-infoblock esd-block-text es-m-txt-c">
                                                                                          <p><a href="https://viewstripo.email/" target="_blank" class="view">View in browser</a></p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <!--[if mso]></td></tr></table><![endif]-->
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table cellpadding="0" cellspacing="0" class="es-header" align="center">
                              <tbody>
                                  <tr>
                                      <td class="es-adaptive esd-stripe" esd-custom-block-id="2657" align="center">
                                          <table class="es-header-body" width="600" cellspacing="0" cellpadding="0" align="center">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p5" esd-general-paddings-checked="false" style="background-color: #14141e;" bgcolor="#14141e" align="left">
                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="590" valign="top" align="center">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://demo.stripocdn.email/content/guids/2554a430-00f8-4d93-9ae3-16f09cc2ec21/images/67801602418564910.jpeg" alt style="display: block;"></a></td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center">
                                          <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure" align="left">
                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="600" valign="top" align="center">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td class="esd-block-image" align="center" style="font-size:0"><a href target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_7a17d17e0fd2296595b61c01d90dfaee/images/62771506321297100.jpg" alt="Sea" class="adapt-img" title="Sea" width="600"></a></td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text">
                                                                                          <p style="font-size: 36px;">Welcome To <span style="color:#40E0D0;"><strong>PoolOff</strong></span></p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center">
                                          <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure" align="left">
                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="600" valign="top" align="center">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text">
                                                                                          <p style="font-size: 24px;"><strong>Your Activation Code Is: " ${pin} "</strong></p>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="esd-block-image" align="center" style="font-size:0"><a href target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_f5a54491d786eb74fd5d02f051902d39/images/99501506005983262.jpg" alt="Sea" class="adapt-img" title="Sea" width="600"></a></td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" esd-custom-block-id="2674" align="center">
                                          <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p20" esd-general-paddings-checked="false" align="left">
                                                          <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="356" valign="top"><![endif]-->
                                                          <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="es-m-p20b esd-container-frame" width="356" align="left">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td esdev-links-color="#666666" align="left" class="esd-block-text">
                                                                                          <p style="line-height: 200%;">© 2017 Smart Tour. All rights reserved.</p>
                                                                                          <p style="line-height: 200%;">You're receiving this email because you subscribed our site.</p>
                                                                                          <p style="line-height: 200%;"><a target="_blank" class="unsubscribe" href>Unsubscribe</a></p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <!--[if mso]></td><td width="20"></td><td width="184" valign="top"><![endif]-->
                                                          <table cellspacing="0" cellpadding="0" align="right">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="184" align="left">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td class="esd-block-text" esdev-links-color="#666666" align="left">
                                                                                          <p style="line-height: 200%;"><a target="_blank" href="https://viewstripo.email">Questions?</a></p>
                                                                                          <p style="line-height: 200%;"><a target="_blank" href="https://viewstripo.email">Email us</a></p>
                                                                                          <p style="line-height: 200%;"><a target="_blank" style="line-height: 200%;" href="tel:123456789">123456789</a></p>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="esd-block-social es-p5t" align="left" style="font-size:0">
                                                                                          <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0">
                                                                                              <tbody>
                                                                                                  <tr>
                                                                                                      <td class="es-p10r" valign="top" align="center"><a href><img title="Twitter" src="https://stripo.email/cabinet/assets/editor/assets/img/social-icons/rounded-gray/twitter-rounded-gray.png" alt="Tw" width="24" height="24"></a></td>
                                                                                                      <td class="es-p10r" valign="top" align="center"><a href><img title="Facebook" src="https://stripo.email/cabinet/assets/editor/assets/img/social-icons/rounded-gray/facebook-rounded-gray.png" alt="Fb" width="24" height="24"></a></td>
                                                                                                      <td class="es-p10r" valign="top" align="center"><a href><img title="Youtube" src="https://stripo.email/cabinet/assets/editor/assets/img/social-icons/rounded-gray/youtube-rounded-gray.png" alt="Yt" width="24" height="24"></a></td>
                                                                                                      <td valign="top" align="center"><a href><img title="Vkontakte" src="https://stripo.email/cabinet/assets/editor/assets/img/social-icons/rounded-gray/vk-rounded-gray.png" alt="Vk" width="24" height="24"></a></td>
                                                                                                  </tr>
                                                                                              </tbody>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <!--[if mso]></td></tr></table><![endif]-->
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="esd-footer-popover es-content" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center">
                                          <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </body>
  
  </html>`;
};

const sendVerifyPin = async (userEmail) => {
    console.log('Verify Service', userEmail);
  const PIN = randomize("Aa0", 6);
  try {
      let prom = new Promise ((res, rej)=>{
        nodeoutlook.sendEmail({
            auth: {
              user: "Reem.A@kd-ict.com",
              pass: "Rr2020!!",
            },
            host: "smtp.office365.com",
            port: "587",
            secure: false,
            from: "reem.a@kd-ict.com",
            to: userEmail,
            subject: "PoolOff Verification Code",
            html: createHtmlMsg(PIN),
            text: "",
            replyTo: "",
            onError: (e) => rej(e),
            onSuccess: (i) => res(i)
          });
      })  
    await prom.then((i)=>console.log(i))
    await prom.catch((e)=> {throw e})
    return PIN
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = {
  sendVerifyPin,
};

var express = require('express');
var router = express.Router();
var upload = require('./multer')
var pool = require('./pool')
const nodemailer = require("nodemailer");






// const email = ["kapil6464sharma@gmail.com"]

const sendMessageMail = async (emails, subject, heading, msg, otp) => {
  try {
    const transport = await nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "deepaktomarcse2020@gmail.com",
        pass: "osvtggutvzxlpfdq",
      }
    });

    const htmlContent = `
    <html lang="en">

<body>
<div bgcolor="#F5F5F5" style="padding:0;background:#f5f5f5;margin-bottom:20px;height: 100vh;">
<center>
  
  <table align="center" bgcolor="#F5F5F5" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
    <tbody>
      <tr>
    <td align="center" style="padding:0px 0 0 0">

        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" role="presentation">
            <tbody>
                <tr bgcolor="#F5F5F5" height="32">
                    <td style="padding:0 0 0 0;height:32px"></td>
                </tr>
                <tr bgcolor="#F5F5F5">
                    <td align="center" style="padding:0 0 0 0" width="600px">
                        <h2
                            style="font-family: 'Archivo Black', sans-serif;color: rgb(1, 1, 172);text-transform: uppercase;font-weight: bolder;font-size: 22px;">
                            IPS College Of Technology & Management</h2>
                    </td>
                </tr>
                <tr bgcolor="#FFFFFF">
                    <td align="center" style="padding:0 0 0 0" width="600px">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"
                            role="presentation">
                            <tbody>
                                <tr bgcolor="#FFFFFF" height="36">
                                    <td style="padding:0 0 0 0;height:36px"></td>
                                </tr>
                                <tr bgcolor="#FFFFFF">
                                    <td class="m_-3822734882090449359side-padding" style="padding:0 44px 0 44px">



                                        <p
                                            style="font-family:'Inter',sans-serif;font-weight:500;font-size:16px;color:#3c4043;letter-spacing:-0.02px;line-height:24px">
                                            ${heading},
                                        </p>
                                        <p
                                            style="font-family:'Inter',sans-serif;font-weight:500;font-size:16px;color:#2f3132;letter-spacing:-0.02px;line-height:22px">
                                            ${msg}
                                            <br>
                                            <br>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr bgcolor="#FFFFFF">
                    <td class="m_-3822734882090449359side-padding" style="padding:0 44px 0 44px">
                        <p
                            style="font-family:'Inter',sans-serif;font-weight:500;font-size:16px;padding-bottom:40px;color:#3c4043;letter-spacing:-0.02px;line-height:24px">
                            
                            Best regards, <br><br>The event organizers
                            <br>
                            IPS College Of Technology & Management.
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
    </tr>
    </tbody>
  </table>
</center>
</div>
</body>

</html>
`;

    const mailOptions = {
      from: "deepaktomarcse2020@gmail.com",
      to: emails,
      subject: `${subject}`,
      html: htmlContent,
      // attachments:[
      //     {
      //         filename:filename

      //     }
      // ],
    }

    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      }
      else {
        console.log("Mail sent successfully!", info.response);
        console.log("Mail sent successfully!", info.accepted);
        console.log("Mail sent successfully!", info.rejected);
      }
    })

  }
  catch (error) {
    console.log(error.message);
  }
}

module.exports = sendMessageMail
import nodemailer from "nodemailer";
import { google } from "googleapis";

const CLIENT_ID =
  '489941715775-fcjdqnkujt2lsm5cdl7ea258qkkpdmsb.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//04WC3DXvIiUQGCgYIARAAGAQSNwF-L9IrfCgMHOsePYgEnfWdpzxloAx4IdCihWofJvsDyLPNVQ3kSnxVqcWz7fd76hnBDTEPfG8';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(emailOptions) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'techpowercodeyem@gmail.com',
        clientId: oAuth2Client._clientId,
        clientSecret: oAuth2Client._clientSecret,
        refreshToken: oAuth2Client.credentials.refresh_token,
        accessToken: accessToken,
      },
    });

    const result = await transport.sendMail(emailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

export default sendMail;

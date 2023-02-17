import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

/*
 * I censored my authentication data obviously for privacy reasons.
 * Enter your data generated on the test platform in these fields.
 */
const transport = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '',
    pass: '',
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Yuri Soares <example@gmail.com>', // Must be change to production environment
      subject,
      html: body,
    })
  }
}

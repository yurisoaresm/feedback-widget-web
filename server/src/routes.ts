import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

export const routes = express.Router()

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

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  })

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Yuri Soares <example@gmail.com>', // Must be change to production environment
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join('\n'),
  })

  return res.status(201).json({ data: feedback })
})

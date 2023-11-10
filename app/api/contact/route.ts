import sendgridMail, { MailDataRequired } from '@sendgrid/mail'
import { NextResponse } from 'next/server'

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY ?? '')

export async function POST(request: Request) {
  const { name, email, message }: { name: string, email: string, message: string } = await request.json()

  const payload: MailDataRequired = {
    from: process.env.SENDGRID_SENDER ?? '',
    to: process.env.SENDGRID_SENDER ?? '',
    replyTo: email,
    subject: `Portfolio - Message from ${name} ${email}`,
    text: message
  }

  try {
    await sendgridMail.send(payload)
    
    return NextResponse.json(
      { message: 'Contact email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while trying to send contact email' },
      { status: 500 }
    )
  }

}
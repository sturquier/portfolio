import sendgridMail, { MailDataRequired } from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY ?? '')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { name, email, message }: { name: string, email: string, message: string } = req.body;

  const payload: MailDataRequired = {
    from: email,
    to: 'simon.turquier96@gmail.com',
    subject: `Message from ${name} ${email}`,
    text: message
  }

  try {
    await sendgridMail.send(payload)

    res.status(200).json({ message: 'Contact email sent successfully' })
  } catch (error) {
    console.error(error)

    res.status(500).json({ error: 'An error occurred while sending contact email' })
  }
}
'use server';

export interface ContactFormState {
  status: 'idle' | 'success' | 'error';
  message: string;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const subject = formData.get('subject');
  const message = formData.get('message');
  const rgpd = formData.get('rgpd');
  const botField = formData.get('botField');

  // Honeypot check (anti-spam)
  if (botField) {
    console.log('Bot detected via honeypot. Ignoring submission.');
    return { status: 'success', message: 'Votre message a bien été envoyé. Nous vous répondrons rapidement !' };
  }

  // Basic validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return { status: 'error', message: 'Le nom est obligatoire (minimum 2 caractères).' };
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'Une adresse e-mail valide est obligatoire.' };
  }
  if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
    return { status: 'error', message: 'Un numéro de téléphone valide est obligatoire.' };
  }
  if (!rgpd) {
    return { status: 'error', message: 'Vous devez accepter la politique de confidentialité.' };
  }

  // -----------------------------------------------------------------------
  // TO CONNECT A MAILER: install nodemailer / resend / sendgrid and replace
  // the block below with real sending logic. Example with Resend:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'noreply@burnens-assainissement.fr',
  //   to:   'contact@burnens-assainissement.fr',
  //   subject: `Nouveau contact: ${subject}`,
  //   html: `<p>Nom: ${name}</p><p>Email: ${email}</p><p>Tél: ${phone}</p><p>${message}</p>`,
  // });
  // -----------------------------------------------------------------------

  console.log('Form data received:', { name, email, phone, subject, message });

  return { status: 'success', message: 'Votre message a bien été envoyé. Nous vous répondrons rapidement !' };
}

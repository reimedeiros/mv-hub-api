import * as nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

/**
 * Wrapper fortemente tipado para suprimir erros do ESLint de libs externas.
 */
export function createTypedTransporter(
  options: SMTPTransport.Options,
): nodemailer.Transporter<SMTPTransport.SentMessageInfo> {
  // Aqui o ESLint deixa passar porque o tipo de RETORNO é explícito
  return nodemailer.createTransport(
    options,
  ) as nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
}

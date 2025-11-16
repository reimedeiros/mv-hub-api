import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { createTypedTransporter } from './mailer.factory';
import type * as nodemailer from 'nodemailer';

export interface SendMailParams {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

@Injectable()
export class MailerService {
  private readonly transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
  private readonly logger = new Logger(MailerService.name);

  constructor(private readonly config: ConfigService) {
    const host = this.config.get<string>('SMTP_HOST')!;
    const port = Number(this.config.get<string>('SMTP_PORT')!);
    const user = this.config.get<string>('SMTP_USER')!;
    const pass = this.config.get<string>('SMTP_PASSWORD')!;

    const transportOptions: SMTPTransport.Options = {
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    };

    this.transporter = createTypedTransporter(transportOptions);
  }

  async sendMail(params: SendMailParams): Promise<SMTPTransport.SentMessageInfo> {
    try {
      const info = await this.transporter.sendMail({
        from: params.from,
        to: params.to,
        subject: params.subject,
        text: params.text,
        html: params.html,
      });

      return info;
    } catch (err: unknown) {
      if (err instanceof Error) {
        this.logger.error(err.message);
      } else {
        this.logger.error('Erro desconhecido ao enviar email');
      }
      throw err;
    }
  }
}

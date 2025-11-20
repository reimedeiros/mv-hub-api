export interface UserInterface {
  id: string;
  name: string;
  email: string;
  password: string;

  username: string | null;
  cpf: string;

  avatarUrl: string | null;
  phone: string | null;

  isActive: boolean;
  role: string;

  lastLogin: Date | null;
  failedLogins: number;
  emailVerified: Date | null;

  verificationToken: string | null;
  resetPasswordToken: string | null;
  resetPasswordExpires: Date | null;

  lastIp: string | null;
  registeredIp: string | null;

  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

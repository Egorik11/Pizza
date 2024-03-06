import { z } from 'zod';

export const loginSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'Имя должно содержать минимум 2 символа' })
    .max(50, { message: 'Имя должно содержать максимум 50 символов' }),
  numberPhone: z
    .string()
    .regex(/^\+?\d{1,3}[- ]?\d{3}[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/i, {
      message: 'Некорректный номер телефона',
    }),
  address: z
    .string()
    .min(5, { message: 'Адрес должен содержать минимум 5 символов' })
    .max(100, { message: 'Адрес должен содержать максимум 100 символов' }),
});

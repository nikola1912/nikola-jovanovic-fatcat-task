import { z } from 'zod';

import { UserSchema, UsersSchema } from './schema';

export type User = z.infer<typeof UserSchema>;
export type Users = z.infer<typeof UsersSchema>;

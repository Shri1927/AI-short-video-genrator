import { boolean, serial, varchar, pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    imgUrl: varchar('imgUrl', { length: 255 }),
    subscription: boolean('subscription').default(false)
});
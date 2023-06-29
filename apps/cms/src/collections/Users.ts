import { CollectionConfig } from "payload/types";

import { adminsAndUser } from "./access/adminAndUsers";
import { protectRoles } from "./hooks/protectRoles";
import { checkRole } from "./access/checkRole";
import { admins } from "./access/admins";
import { anyone } from "./access/anyone";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: { useAsTitle: "email" },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
    admin: ({ req: { user } }) => checkRole(["admin"], user),
  },
  fields: [
    {
      name: "roles",
      type: "select",
      hasMany: true,
      hooks: { beforeChange: [protectRoles] },
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};

export default Users;

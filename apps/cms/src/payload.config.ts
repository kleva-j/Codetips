import { Categories } from "./collections/Categories";
import { Articles } from "./collections/Articles";
import { buildConfig } from "payload/config";
import { Users } from "./collections/Users";

import path from "path";

export default buildConfig({
  serverURL:
    process.env.NODE_ENV === "production"
      ? process.env.RENDER_EXTERNAL_URL
      : process.env.HOSTNAME,
  cors: "*", // "*" wildflag
  admin: {
    user: Users.slug,
  },
  collections: [Users, Categories, Articles],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  plugins: [],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});

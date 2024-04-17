import { Manifest } from "deno-slack-sdk/mod.ts";
import { UpdateUsergroup } from "./functions/update_usergroup.ts";

export default Manifest({
  name: "update-user-group",
  description: "An app that has functions to update a user group",
  icon: "assets/default_new_app_icon.png",
  functions: [UpdateUsergroup],
  botScopes: [
    "usergroups:write",
    "usergroups:read",
  ],
});

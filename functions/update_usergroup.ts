import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const UpdateUsergroup = DefineFunction({
  callback_id: "update_usergroup",
  source_file: "functions/update_usergroup.ts",
  title: "Update usergroup",
  description: "Additional permissions might be required",
  input_parameters: {
    properties: {
      token: {
        type: Schema.types.string,
        description: "Authentication token bearing required scopes",
        title: "Token",
      },
      usergroup: {
        type: Schema.slack.types.usergroup_id,
        description: "Search all user groups",
        title: "Select a user group",
      },
      users: {
        type: "array",
        description: "Search all people",
        title: "Select member(s)",
        items: { type: Schema.slack.types.user_id },
      },
    },
    required: ["token", "usergroup", "users"],
  },
  output_parameters: {
    properties: {},
    required: [],
  },
});

export default SlackFunction(
  UpdateUsergroup,
  async ({ inputs: { token, usergroup, users }, client }) => {
    await client.usergroups.users.update({ token, usergroup, users });

    return { outputs: {} };
  },
);

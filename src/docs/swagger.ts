/* eslint-disable func-names */

import { newParam } from "./parameters";
import { userSchema } from "./schemas/user";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function () {
  return {
    openapi: "3.0.0",
    info: {
      title: "Desafio Node",
      description: "This is an API docs",
      version: "1.0.0",
      contact: {
        email: "matdeitos@gmail.com",
      },
    },
    paths: {
      "/users": {
        post: {
          tags: ["User"],
          summary: "Create a user",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                    },
                    email: {
                      type: "string",
                    },
                  },
                },
                example: {
                  name: "Mateus",
                  email: "mateus@mail.com",
                },
              },
            },
          },
          responses: {
            204: {
              content: {
                "application/json": {
                  schema: {
                    ...userSchema(),
                  },
                },
              },
            },
          },
        },
        get: {
          tags: ["User"],
          summary: "List all Users",
          description: "List all Users",
          parameters: [newParam("header", "user_id", "string", "uuid", true)],
          responses: {
            200: {
              description: "Success",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      ...userSchema(),
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/user/{user_id}": {
        get: {
          tags: ["User"],
          summary: "Get user by id",
          description: "Get user by id",
          parameters: [newParam("path", "user_id", "string", "uuid", true)],
          responses: {
            200: {
              description: "Success",
              content: {
                "application/json": {
                  schema: {
                    ...userSchema(),
                  },
                },
              },
            },
          },
        },
      },
      "/{user_id}/admin": {
        patch: {
          tags: ["User"],
          summary: "Promote user",
          description: "Turn user into admin",
          parameters: [newParam("path", "user_id", "string", "uuid", true)],
          responses: {
            200: {
              description: "Success",
              content: {
                "application/json": {
                  schema: {
                    ...userSchema({ admin: true }),
                  },
                },
              },
            },
          },
        },
      },
    },
  };
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable func-names */
interface IExample {
  id?: string;
  admin?: boolean;
  name?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}
export const userSchema = (overrideProps?: IExample) => ({
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    admin: {
      type: "boolean",
    },
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    created_at: {
      type: "string",
    },
    updated_at: {
      type: "string",
    },
  },
  example: {
    id: "c1b32930-4806-465c-9d44-2dd906441b4d",
    admin: false,
    name: "Mateus",
    description: "mateus@mail.com",
    created_at: "2021-05-08T13:47:31.210Z",
    updated_at: "2021-05-08T13:47:31.210Z",
    ...overrideProps,
  },
});

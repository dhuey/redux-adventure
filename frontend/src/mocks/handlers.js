import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3002/", async (request, response, context) => {
    // return { name: "Dalton Huey", status: "ok" };
    const resp = response(
      context.status(200),
      context.json({ name: "Dalton Huey", status: "ok" })
    );

    return resp;
  }),
];

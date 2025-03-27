import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { subscribreToEvent } from "../functions/subscribe-to-event";

export const subscribreToEventRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/subscriptions",
    {
      schema: {
        summary: "Inscreve usuário em evento",
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer: z.string().nullish(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body;

      const { subscriberId } = await subscribreToEvent({
        name,
        email,
        referrerId: referrer,
      });
      return reply.status(201).send({
        subscriberId,
      });
    }
  );
};

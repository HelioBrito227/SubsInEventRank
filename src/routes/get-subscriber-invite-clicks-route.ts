import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getSubscriberInviteclicks } from "../functions/get-subscriber-invite-clicks";

export const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod = async (
  app
) => {
  app.get(
    "/subscribers/:subscriberId/ranking/clicks",
    {
      schema: {
        summary: "Busca a contagem de clicks de inscrição de um convite ",
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: z.object({
            count: z.number(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params;
      const { count } = await getSubscriberInviteclicks({ subscriberId });

      return { count };
    }
  );
};

import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getSubscriberRankingPosition } from "../functions/get-subscriber-ranking-position";

export const getSubscriberRankingPositionRoute: FastifyPluginAsyncZod = async (
  app
) => {
  app.get(
    "/subscribers/:subscriberId/ranking/position",
    {
      schema: {
        summary: "Retorna a posição no ranking de inscrições ",
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: z.object({
            position: z.number().nullable(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params;
      const { position } = await getSubscriberRankingPosition({ subscriberId });

      return { position };
    }
  );
};

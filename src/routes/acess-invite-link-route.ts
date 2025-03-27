import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { env } from "../env";
import { accessInviteLink } from "../functions/access-invite-link";

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Acessa link de convite e redireciona usuário",
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          302: z.null({}),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params;
      const redirectUrl = new URL(env.WEB_URL);

      await accessInviteLink({ subscriberId });
      redirectUrl.searchParams.set("referrer", subscriberId);

      return reply.redirect(redirectUrl.toString(), 302);
    }
  );
};

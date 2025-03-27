import { env } from "./env";
import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { subscribreToEventRoute } from "./routes/subscribe-to-event-route";
import { accessInviteLinkRoute } from "./routes/acess-invite-link-route";
import { getSubscriberInviteClicksRoute } from "./routes/get-subscriber-invite-clicks-route";
import { getSubscriberInvitesCountRoute } from "./routes/get-subscriber-invite-count-route";
import { getSubscriberRankingPositionRoute } from "./routes/get-subscriber-ranking-position-route";
import { getRankingRoute } from "./routes/get-ranking-routes";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:3000",
});

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "NLW api",
      version: "0.0.1",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.register(subscribreToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubscriberInviteClicksRoute);
app.register(getSubscriberInvitesCountRoute);
app.register(getSubscriberRankingPositionRoute);
app.register(getRankingRoute);

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.listen({ port: env.PORT }).then(() => {
  console.log("servidor ligado");
});

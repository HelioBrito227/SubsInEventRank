import { redis } from "../redis/client";

interface GetSubscriberInviteclicksParams {
  subscriberId: string;
}

export async function getSubscriberInviteclicks({
  subscriberId,
}: GetSubscriberInviteclicksParams) {
  const count = await redis.hget("referral:access-count", subscriberId);
  return { count: count ? Number.parseInt(count) : 0 };
}

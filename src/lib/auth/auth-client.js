import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
});

export const { signIn, signUp, useSession,signOut } = authClient;

export const signInGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};
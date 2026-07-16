export type SessionUser = {
  id: string;
  email: string;
  name?: string;
};

export type Session = {
  user: SessionUser;
  expiresAt: string;
};

export async function getSession(): Promise<Session | null> {
  throw new Error("@flow-hq/auth: getSession is not implemented yet.");
}

export async function requireAuth(): Promise<Session> {
  const session = await getSession();
  if (!session) {
    throw new Error("Unauthorized");
  }
  return session;
}

export type AuthProvider = "email" | "google" | "github";

export type SignInOptions = {
  provider: AuthProvider;
  redirectTo?: string;
};

export async function signIn(_options: SignInOptions): Promise<void> {
  throw new Error("@flow-hq/auth: signIn is not implemented yet.");
}

export async function signOut(): Promise<void> {
  throw new Error("@flow-hq/auth: signOut is not implemented yet.");
}

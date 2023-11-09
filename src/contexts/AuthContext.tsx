/* import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

import { recoverUserInformation, signInRequest } from "@/services/auth";
import { api } from "@/services/api";

type SignInData = {
  email: string;
  password: string;
};

type User = {
  email: string;
};

type AuthContextType = {
  isAuthenticated: Boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response) => setUser(response.user));
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, "nextauth.token", token, {
      maxAge: 60 * 60 * 1, // 1h
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setUser(user);

    Router.push("/home");
  }

  return (
    <AuthContext.Provider
      value={{ user: user || { email: "" }, isAuthenticated, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
 */

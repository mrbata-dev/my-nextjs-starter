"use server"

import { auth } from "@/lib/auth"

export const signIn = async(email: string, password: string)=>{
    try {
       const response = await auth.api.signInEmail({
          body: { email, password },
        });
        return response
    } catch (error) {
        const e = error as Error
        throw new Error(e.message)
    }
}

export const signUp = async (name: string, email: string, password: string) => {
  try {
    const response = await auth.api.signUpEmail({
      body: {name, email, password },
    });
    return response;
  } catch (error) {
    const e = error as Error;
    throw new Error(e.message);
  }
};
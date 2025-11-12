'use client'; 
 
import { Authenticated, Unauthenticated, AuthLoading} from "convex/react";
import { AuthLayouts } from "../layouts/auth-layout";
import { SignInView } from "../views/sign-in-view";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AuthLoading>
                <AuthLayouts>
                    <p> Loading ...</p>
                </AuthLayouts>
            </AuthLoading>
            <Authenticated>
                <AuthLayouts>
                    {children}
                </AuthLayouts>
            </Authenticated>
            <Unauthenticated>
                <AuthLayouts>
                    <SignInView/>
                </AuthLayouts>
            </Unauthenticated>
        </>
    )
};
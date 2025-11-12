'use client'; 

import { useOrganization } from "@clerk/nextjs";
import { AuthLayouts } from "../layouts/auth-layout";
import { OrgSelectView } from "../views/org-select-view";

export const OrganizationGuard = ({ children }: { children: React.ReactNode }) => {
    const { organization } = useOrganization();
    if(!organization) {
        return (
            <AuthLayouts>
                <OrgSelectView/>
            </AuthLayouts>
        )
    }
    return (
        <>
            {children}
        </>
    )
};
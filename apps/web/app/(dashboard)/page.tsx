'use client';

import { Button } from "@workspace/ui/components/button";
import {OrganizationSwitcher, SignInButton, SignOutButton, SignUpButton, UserButton} from "@clerk/nextjs";
import {Input} from "@workspace/ui/components/input"; 
import {useQuery, useMutation, Authenticated, Unauthenticated} from "convex/react"; 
import {api} from "@workspace/backend/_generated/api";


export default function Page() {

  const users = useQuery(api.user.getMany)
  const addUser = useMutation(api.user.add); 

  return (
    <>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Hello World</h1>
            <Button size="sm" onClick={() => addUser()}>add</Button>

            <p>{JSON.stringify(users)}</p>
            <Input placeholder="Input" /> 

            <SignOutButton>
              sign out
            </SignOutButton>
            <UserButton>
              Profile
            </UserButton>
            <OrganizationSwitcher hidePersonal/>
          </div>
        </div>
    </>
  )
}

// stop at 2:20 
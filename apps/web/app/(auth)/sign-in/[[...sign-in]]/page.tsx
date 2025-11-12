import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { SignIn } from "@clerk/nextjs";

const page = () => {
    return ( 
        <SignInView/>
     );
}
 
export default page;
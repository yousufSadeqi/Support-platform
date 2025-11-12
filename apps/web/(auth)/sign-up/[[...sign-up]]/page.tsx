import { SignUp } from "@clerk/nextjs";

const page = () => {
    return ( 
        <>
            <div> sign in from nested route</div>
            <SignUp/>
        </>
     );
}
 
export default page;
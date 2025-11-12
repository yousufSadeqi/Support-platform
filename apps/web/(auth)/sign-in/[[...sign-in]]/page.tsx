import { SignIn } from "@clerk/nextjs";

const page = () => {
    return ( 
        <>
            <div> sign in from nested route</div>
            <SignIn/>
        </>
     );
}
 
export default page;
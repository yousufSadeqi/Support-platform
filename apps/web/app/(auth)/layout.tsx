import {AuthLayouts} from "@/modules/auth/ui/layouts/auth-layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthLayouts>
        {children}
    </AuthLayouts>
  )
};

export default Layout;
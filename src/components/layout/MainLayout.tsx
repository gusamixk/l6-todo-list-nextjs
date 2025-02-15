import { Toaster as Sooner } from "sonner";
import { TanstackProviders } from "./providers/TanstackProvider";
import { Toaster } from "../ui/toaster";

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <TanstackProviders>
            {children}
            <Sooner position="top-center" />
            <Toaster />
        </TanstackProviders>
    );
};
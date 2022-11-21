import { FC, useEffect, useState } from "react";

interface NetworkProps {
    handleOffline: () => void;
    handleOnline: () => void;
}

const useNetwork: FC<NetworkProps> = ({ handleOffline, handleOnline, children }) => {
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    
    const updateNetwork = () => {
        handleOffline()
        setIsOnline(navigator.onLine)
    }

    const clearError = () => {
        handleOnline()
        setIsOnline(navigator.onLine)
    }
    

    useEffect(() => {  
        console.log(isOnline);
            
        window.addEventListener("online", clearError);
        window.addEventListener("offline", updateNetwork);

       return () => {
          window.removeEventListener("offline", updateNetwork);
          window.removeEventListener("online", clearError);
       };
    });
    return <>{children}</>;
 };

 export default useNetwork;
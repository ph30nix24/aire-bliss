import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

    const [adminLoading, setAdminLoading] = useState(false);
    
    return (
        <AdminContext.Provider value={{ adminLoading, setAdminLoading }}>
            {children}
        </AdminContext.Provider>
    );
};


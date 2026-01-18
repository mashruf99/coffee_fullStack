import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const UserInfo = {
        
    }

    return (
        <AuthContext value={UserInfo} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
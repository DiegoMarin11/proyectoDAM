import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import auth, { FirebaseAuthTypes }  from '@react-native-firebase/auth';


interface AuthProviderProps {
    children: ReactNode;
  }

  interface AuthContextType {
    user: FirebaseAuthTypes.User | null;
    signOut: () => Promise<void>; 
  }
  
  const AuthContext = createContext<AuthContextType | null>(null);
  

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);


    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null); 
        }
        });

 
        return unsubscribe;
  }, []);
  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AuthContext.Provider value ={{ user, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
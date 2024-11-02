import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import {
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	User,
} from "firebase/auth";

interface AppContextType {
	isLogged: boolean;
	setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
	user: User | null;
	login: () => Promise<void>;
	logout: () => Promise<void>;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isLogged, setIsLogged] = useState<boolean>(() => {
		const storedUser = localStorage.getItem("user");
		return !!storedUser;
	});
	const [user, setUser] = useState<User | null>(() => {
		const storedUser = localStorage.getItem("user");
		return storedUser ? JSON.parse(storedUser) : null;
	});

	const provider = new GoogleAuthProvider();

	const login = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			const userData = result.user;
			setUser(userData);
			setIsLogged(true);
			localStorage.setItem("user", JSON.stringify(userData));
		} catch (error) {
			console.error("Error signing in: ", error);
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
			setUser(null);
			setIsLogged(false);
			localStorage.removeItem("user");
			
		} catch (error) {
			console.error("Error signing out: ", error);
			
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
				setIsLogged(true);
				localStorage.setItem("user", JSON.stringify(currentUser));
			} else {
				setUser(null);
				setIsLogged(false);
				localStorage.removeItem("user");
			}
		});

		return () => unsubscribe();
	}, []);

	const values: AppContextType = {
		isLogged,
		setIsLogged,
		user,
		login,
		logout,
	};

	return (
		<>
			<AppContext.Provider value={values}>{children}</AppContext.Provider>
		</>
	);
};

export const AppContextUse = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within a AppContextProvider");
	}
	return context;
};

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Interface from "./pages/Interface";
import Components from "./pages/Components";
import Pages from "./pages/Pages";
import Forms from "./pages/Forms";
import Gallery from "./pages/Gallery";
import Documentation from "./pages/Documentation";
import Login from "./pages/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { setUser } from "./features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

const App = () => {
	const isLogged = useAppSelector((state) => state.auth.isLogged);
	const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser(currentUser));
        localStorage.setItem('user', JSON.stringify(currentUser));
      } else {
        dispatch(setUser(null));
        localStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

	return (
		<BrowserRouter>
			{isLogged ? (
				<>
					<Header />
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/interface' element={<Interface />} />
						<Route path='/components' element={<Components />} />
						<Route path='/pages' element={<Pages />} />
						<Route path='/forms' element={<Forms />} />
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/documentation' element={<Documentation />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</>
			) : (
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='*' element={<Navigate to='/login' />} />
				</Routes>
			)}
		</BrowserRouter>
	);
};

export default App;

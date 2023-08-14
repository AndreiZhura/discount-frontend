import '../App/App.css'
import { useState, useEffect, } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
;
/*
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';*/

// Компоненты
import Main from '../main/main';
import SettingsDiscount from '../settingsDiscount/settingsDiscount';
import Register from '../auth/Register/Register.js';
import Login from '../auth/Login/Login.js'
import Profile from '../auth/Profile/Profile.js';
import DiscountAdd from '../main/discountAdd/discountAdd';
import LookDiscount from '../lookDiscount/lookDiscount';
//////////////////////////////////////////////////
import CurrentUserContext from "../contexts/CurrentUserContext";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js'

//Подключаем Api
import * as api from '../utils/api';


const App = () => {
	//Хуки
	//Поиск

	//загрузка категорий
	const [category, setCategory] = useState([]);
	const [categoryID, setCategoryID] = useState([]);
	const [positionID, setPositionID] = useState([])
	//загрузка скидок
	const [discount, setDiscount] = useState([]);
	//загрузка промокодов
	const [promocode, setPromocode] = useState([]);
	//инфо о скидке
	const [infoDiscount, setInfoDiscount] = useState([]);


	const historyLoggedIn = Boolean(localStorage.getItem('loggedIn'));
	const historyIsLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
	const [loggedIn, setloggedIn] = useState(historyLoggedIn);
	const [isLoggedIn, setisLoggedIn] = useState(historyIsLoggedIn);

	const [nameError, setNameError] = useState(true);
	const [EmailError, setEmailError] = useState(true);
	const [PasswordError, setPasswordError] = useState(true);
	const [buttonError, setButtonError] = useState(true);
	// const [userData, setUserData] = useState({});
	const [currentUser, setCurrentUser] = useState({});
	// проверяем авторизован пользователь или нет
	// Фильмы 

	const [registerError, setRegisterError] = useState(true)
	const [redisterMessage, setRegisterMessage] = useState('')
	const [loginError, setLoginError] = useState(true)
	const [loginMessage, setLoginMessage] = useState('');
	const [errorEmailUpdate, setErrorEmailUpdate] = useState(true)
	const [errorUpdateUser, setErrorUpdateUser] = useState('');
	const [successfulUpdateProfile, setSuccessfulUpdateProfile] = useState(false);
	const [successfulUpdateProfileText, setSuccessfulUpdateProfileText] = useState('');
	const [successfulRegistration, setSuccessfulRegistration] = useState(false);
	const [successfulRegistrationText, setSuccessfulRegistrationText] = useState('');
	const [blockButton, setBlockButton] = useState(true);
	const [email, setEmail] = useState('');
	const [name, setName] = useState('')


	const history = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			newAuth(token);
		}
		else {
			console.log("нет токена")
		}
	}, []);

	function userInformation() {
		api.userInfo()
			.then((res) => {
				setloggedIn(true);
				setCurrentUser(res.data);
				setEmail(res.data.email);
				setName(res.data.name);
			})
			.catch((err) => {
				console.error(err);

			});
	}





	//Функции

	const newAuth = (token) => {
		return api
			.checkToken(token)
			.then((res) => {
				if (res) {
					setisLoggedIn(true);
					setloggedIn(true);
					localStorage.setItem("loggedIn", true);
					localStorage.setItem("isLoggedIn", true);
					setCurrentUser(res.data);
				}
			})
			.catch((err) => {
				console.error(err);
			});

	};

	useEffect(() => {
		if (!isLoggedIn) return;
		userInformation()
	}, [isLoggedIn])


	function handleLogin(email, password) {
		api
			.authorize(email, password)
			.then((res) => {
				setloggedIn(true);
				setEmailError(true);
				setPasswordError(true);
				setButtonError(true);
				setBlockButton(false);
				history("/");
				localStorage.setItem("token", res.token);
				userInformation()

			})
			.catch((err) => {
				console.log(err);
				setEmailError(false);
				setPasswordError(false);
				setButtonError(false);
				setLoginError(false);
				setBlockButton(true);
				setLoginMessage(err)
			});

	}

	function handleRegistration(email, password, name) {
		const dataEmail = email;
		const dataPassword = password;
		api
			.register(email, password, name)
			.then((email, password, name) => {
				setSuccessfulRegistration(true);
				setSuccessfulRegistrationText(`Пользователь: ${dataEmail}, зарегестрирован успешно `)
				handleLogin(dataEmail, dataPassword);
				setNameError(true);
				setEmailError(true);
				setPasswordError(true);
				setBlockButton(false);
			})
			.catch((err) => {
				console.log(err);
				setSuccessfulRegistration(false);
				setNameError(false);
				setEmailError(false);
				setPasswordError(false);
				setRegisterError(false);
				setBlockButton(true);
				setRegisterMessage(err)
			});
	}

	function handleUpdateUser(User) {
		/*Редактирование профиля
		  Отредактированные данные профиля должны сохраняться на сервере.  */
		api
			.updateUserInfo(User)
			.then((result) => {
				setCurrentUser(result.data);
				setErrorEmailUpdate(true);
				setSuccessfulUpdateProfile(false)
				setSuccessfulUpdateProfileText('Данные пользователя успешно изменены!')
			})
			.catch((err) => {
				console.error(err);
				setErrorEmailUpdate(false)
				setSuccessfulUpdateProfile(true)
				setErrorUpdateUser('Данный Email уже занят!')
			});
	}



	function GetCategories() {
		api.getCategories()
			.then((result) => {
				setCategory(result.data);
			})
			.catch((err) => {
				console.error(err);
			})
	}

	function GetDiscount() {
		api.getDiscount()
			.then((result) => {
				setDiscount(result.data);
			})
			.catch((err) => {
				console.error(err);
			})
	}

	function GetPromocode() {
		api.getPromo()
			.then((result) => {
				setPromocode(result.data)
			})
			.catch((err) => {
				console.error(err);
			})
	}

	function DeleteCategory(id){
		api.deleteCategory(id)
		.then((result) => {
			GetCategories();
		})
		.catch((err) => {
			console.error(err);
		})
	}

	function DeleteDiscount(discountID) {
		api.deleteDiscount(discountID)
			.then((result) => {
				GetDiscount();
			})
			.catch((err) => {
				console.error(err);
			})
	}

	const handleDeletePromo = (promoDelete) => {
		api.deletePromocode(promoDelete._id)
			.then((res) => {
				GetPromocode();
			})
			.catch((err) => {
				console.log(err)
			})
	}




	//Поднятие стейта 
	const dataDiscount = (data) => {
		setInfoDiscount(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
	}
	const infoCategoryID = (id) => {
		setCategoryID(id)
	}

	function handleNewCategory(categoryName) {

		api.addNewCategories(categoryName)
			.then((categoryName) => {
				GetCategories();

			})
			.catch((error) => {
				console.log(error)
			})
	}

	function handleAddDiscount(name, image, description, link, barcode, category, promocode, date,) {
		api.addNewDiscount(name, image, description, link, barcode, category)
			.then((result) => {
				handlePromo(promocode, date, result.data._id);
				GetDiscount();
				GetPromocode();
				history("/");
			})
			.catch((error) => {
				console.log(error)
			})
	}

	function handleUpdateDiscountText(name, description, link, category, id) {
		api.UpdateDiscountText(name, description, link, category, id)
			.then((result) => {
				GetDiscount();
				history("/");
			})
			.catch((error) => {
				console.log(error)
			})
	}

	function handlePromo(promocode, date, position) {

		api.addNewPromo(promocode, date, position)
			.then((result) => {
				GetPromocode();
			})
			.catch((error) => {
				console.log(error)
			})
	}



	useEffect(() => {
		GetCategories();
		GetDiscount();
		GetPromocode();
	}, []);


	function signOut() {
		localStorage.removeItem('token');
		localStorage.removeItem('loggedIn');
		localStorage.removeItem('isLoggedIn');
		setloggedIn(false);
	}

	return (

		<CurrentUserContext.Provider value={currentUser}>
			<Routes>
				<Route path="/" element={<Main
					loggedIn={loggedIn}
					getDiscount={GetDiscount}
					category={category}
					discount={discount}
					dataDiscount={dataDiscount}
					infoCategoryID={infoCategoryID}
					handleNewCategory={handleNewCategory}
					handleAddDiscount={handleAddDiscount}
					DeleteCategory = {DeleteCategory}
				/>} />
				<Route path='/discount' element={<LookDiscount
					promocode={promocode}
					infoDiscount={infoDiscount}
					loggedIn={loggedIn}
				/>} />
				<Route path="/signup" element={<Register
					handleRegistration={handleRegistration}
					successfulRegistration={successfulRegistration}
					successfulRegistrationText={successfulRegistrationText}
					nameError={nameError}
					EmailError={EmailError}
					PasswordError={PasswordError}
					registerError={registerError}
					redisterMessage={redisterMessage}
					blockButton={blockButton}
				/>} />
				<Route path="/signin" element={<Login
					handleLogin={handleLogin}
					EmailError={EmailError}
					PasswordError={PasswordError}
					buttonError={buttonError}
					loginError={loginError}
					loginMessage={loginMessage}
					blockButton={blockButton}
				/>} />


				<Route path="/setting" element={
					<ProtectedRoute loggedIn={loggedIn}>
						<SettingsDiscount
							loggedIn={loggedIn}
							promocode={promocode}
							infoDiscount={infoDiscount}
							onCardDelete={DeleteDiscount}
							handlePromo={handlePromo}
							handleDeletePromo={handleDeletePromo}
							handleUpdateDiscountText={handleUpdateDiscountText}
						/>
					</ProtectedRoute>
				} />

				<Route path="/add-discount" element={
					<ProtectedRoute loggedIn={loggedIn}>
						<DiscountAdd
							categoryID={categoryID}
							positionID={positionID}
							handleAddDiscount={handleAddDiscount}
							handlePromo={handlePromo}
						/>
					</ProtectedRoute>
				} />
				<Route path="/profile" element={
					<ProtectedRoute loggedIn={loggedIn}>
						<Profile
							email={email}
							name={name}
							signOut={signOut}
							handleUpdateUser={handleUpdateUser}
							errorEmailUpdate={errorEmailUpdate}
							errorUpdateUser={errorUpdateUser}
							successfulUpdateProfile={successfulUpdateProfile}
							successfulUpdateProfileText={successfulUpdateProfileText}
						/>
					</ProtectedRoute>
				} />

			</Routes>
		</CurrentUserContext.Provider>



	);
}

export default App;

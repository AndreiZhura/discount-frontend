import '../App/App.css'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
/*
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';*/

// Компоненты
import Main from '../main/main';
import SettingsDiscount from '../settingsDiscount/settingsDiscount';
import Register from '../auth/Register/Register.js';
import Login from '../auth/Login/Login.js'
import Favorites from '../favorites/favorites';
import Profile from '../auth/Profile/Profile.js';
//////////////////////////////////////////////////

//Подключаем Api
import * as api from '../utils/api';




const App = () => {

	//Хуки
	//Поиск
	const [search, setSearch] = useState('');

	//Функции
	function AddSearch(value) {
		setSearch(value);
	}

	function GetDiscount() {
		api.getDiscount()
			.then((result) => {
				console.log(result)
			})
			.catch((err) => {
				console.error(err);
			})
	}
	GetDiscount();

	return (
		<>
			<Routes>
				<Route path="/" element={<Main
					search={search}
					onInputHandler={AddSearch}
				/>} />
				<Route path="/setting" element={<SettingsDiscount />} />
				<Route path="/signup" element={<Register />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
		</>

	);
}

export default App;

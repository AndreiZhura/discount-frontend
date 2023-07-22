import '../App/App.css'
import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Main from '../main/main';
//import AddDiscount from '../addDiscount/addDiscount';
import { Routes, Route } from 'react-router-dom';
import SettingsDiscount from '../settingsDiscount/settingsDiscount';
import Footer from '../main/footer/footer';
import Register from '../auth/Register/Register.js';
import Login from '../auth/Login/Login.js'
import Favorites from '../favorites/favorites';



const App = () => {

	return (
		<>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/setting" element={<SettingsDiscount />} />
				<Route path="/signup" element={<Register />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
		</>

	);
}

export default App;

import '../App/App.css'
import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Main from '../main/main';
//import AddDiscount from '../addDiscount/addDiscount';
import { Routes, Route } from 'react-router-dom';
import Register from '../auth/Register/Register';
import SettingsDiscount from '../settingsDiscount/settingsDiscount';


const App = () => {

	return (
		<>
			<SettingsDiscount />
		</>

	);
}

export default App;

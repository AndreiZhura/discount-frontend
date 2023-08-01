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
import DiscountAdd from '../discountAdd/discountAdd';
import LookDiscount from '../lookDiscount/lookDiscount';
//////////////////////////////////////////////////

//Подключаем Api
import * as api from '../utils/api';




const App = () => {

	//Хуки
	//Поиск
	const [search, setSearch] = useState('');

	//загрузка категорий
	const [category, setCategory] = useState([]);
	//загрузка скидок
	const [discount, setDiscount] = useState([]);

	//инфо о скидке
	const [infoDiscount, setInfoDiscount] = useState([]);


	//Функции
	function AddSearch(value) {
		setSearch(value);
	}

	function GetDiscount() {
		api.getDiscount()
			.then((result) => {
				//console.log(result.data)
				setDiscount(result.data);
			})
			.catch((err) => {
				console.error(err);
			})
	}

	function DeleteDiscount(discountID){
		api.deleteDiscount(discountID)
		.then((result)=>{
          console.log(result)
		})
		.catch((err) => {
			console.error(err);
		})
	}


	function GetCategories() {
		api.getCategories()
			.then((result) => {
				//console.log(result.data)
				setCategory(result.data);
			})
			.catch((err) => {
				console.error(err);
			})
	}

	//Поднятие стейта 
	const pull_data = (data) => {
		setInfoDiscount(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
	}

	function handleNewCategory(categoryName) {
		console.log(categoryName)
		api.addNewCategories(categoryName)
			.then((categoryName) => {
				console.log(categoryName)
			})
			.catch((error) => {
				console.log(error)
			})
	}


	useEffect(() => {
		GetCategories();
		GetDiscount();
	}, [category]);


	return (
		<>
			<Routes>
				<Route path="/" element={<Main
					search={search}
					onInputHandler={AddSearch}
					category={category}
					discount={discount}
					func={pull_data}
					handleNewCategory={handleNewCategory}
					/>} />
				<Route path="/setting" element={<SettingsDiscount
					infoDiscount={infoDiscount}
					onCardDelete = {DeleteDiscount}
				/>} />
				<Route path='/discount' element={<LookDiscount />} />
				<Route path='/add-discount' element={<DiscountAdd />} />
				<Route path="/signup" element={<Register />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
		</>

	);
}

export default App;

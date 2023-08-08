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
import Favorites from '../favorites/favorites';
import Profile from '../auth/Profile/Profile.js';
import DiscountAdd from '../main/discountAdd/discountAdd';
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
	const [categoryID, setCategoryID] = useState([]);
	const [positionID, setPositionID] = useState([])
	//загрузка скидок
	const [discount, setDiscount] = useState([]);
	//загрузка промокодов
	const [promocode, setPromocode] = useState([]);
	//инфо о скидке
	const [infoDiscount, setInfoDiscount] = useState([]);

	const history = useNavigate();

	//Функции
	function AddSearch(value) {
		setSearch(value);
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
				//console.log(result.data)
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

	function DeleteDiscount(discountID) {
		api.deleteDiscount(discountID)
			.then((result) => {
				//console.log(result)
				GetDiscount();
			})
			.catch((err) => {
				console.error(err);
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
				console.log(categoryName)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	function handleAddDiscount(name, image, description, link, barcode, category,promocode, date,) {
		api.addNewDiscount(name, image, description, link, barcode, category)
			.then((result) => {
			    handlePromo(promocode, date,result.data._id);
				GetDiscount();
				GetPromocode();
				history("/");
			})
			.catch((error) => {
				console.log(error)
			})
	}

	function handlePromo(promocode, date ,position) {
	
		api.addNewPromo(promocode, date, position)
			.then((result) => {
				console.log(result)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	useEffect(() => {
		GetCategories();
		GetDiscount();
		GetPromocode()
	}, []);


	return (
		<>
			<Routes>
				<Route path="/" element={<Main
					search={search}
					onInputHandler={AddSearch}
					category={category}
					discount={discount}
					dataDiscount={dataDiscount}
					infoCategoryID={infoCategoryID}
					handleNewCategory={handleNewCategory}
					handleAddDiscount={handleAddDiscount}
				/>} />
				<Route path="/setting" element={<SettingsDiscount
					infoDiscount={infoDiscount}
					onCardDelete={DeleteDiscount}
					promocode={promocode}
				/>} />
				<Route path='/discount' element={<LookDiscount />} />
				<Route path='/add-discount' element={<DiscountAdd
					categoryID={categoryID}
					positionID={positionID}
					handleAddDiscount={handleAddDiscount}
					handlePromo={handlePromo}
				/>} />
				<Route path="/signup" element={<Register />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
		</>

	);
}

export default App;

import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Main from './main/main';
import AddDiscount from './addDiscount/addDiscount';


const App = () => {


	return (
     <>
	<Main/>
	<AddDiscount/>
	 </>
		
	);
}

export default App;

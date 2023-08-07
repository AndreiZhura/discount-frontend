
export const BASE_URL = 'http://localhost:3001';

//обработка ошибок
function getResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}


//авторизоция
export const register = (email, password, name) => {

  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })

    .then((res) => {
      return getResponse(res)
    })
}

export const addNewDiscount = (name, image, description, link, barcode,  category) => {

  const data = new FormData()
  data.append('name', name)
  data.append('image', image)
  data.append('description', description)
  data.append('link', link)
  data.append('barcode', barcode)
  data.append('category', category)

  return fetch(`${BASE_URL}/positions`, {
    method: 'POST',
    body: data
  })
    .then((res) => {
      return getResponse(res)
    })
}

export const addNewPromo = (promocode,date,position) => {
  return fetch(`${BASE_URL}/promocode`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ promocode,date, position })
  })
    .then((res) => {
      return getResponse(res)
    })
}

//добавление карточки
export const getDiscount = () => {
  return fetch(`${BASE_URL}/positions`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })

    .then((res) => {
      return getResponse(res)
    })
}

//удаление карточки

export const deleteDiscount = (id) => {
  console.log(`api ${id}`)
  return fetch(`${BASE_URL}/positions/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return getResponse(res)
    })
}


// Категории

//Добавление категории
export const getCategories = () => {
  return fetch(`${BASE_URL}/categories`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

    .then((res) => {
      return getResponse(res)
    })
}

export const addNewCategories = (categoryName) => {
  return fetch(`${BASE_URL}/categories`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ categories: categoryName })
  })
    .then((res) => {
      return getResponse(res)
    })
}


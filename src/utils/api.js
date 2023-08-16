
export const BASE_URL = 'https://api.andreizhura.nomoredomains.club';

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

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      return getResponse(res)
    })
};


export const checkToken = (token) => {
  return fetch(`${BASE_URL}/admin/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((res) => {
      return getResponse(res)
    })
}


export const userInfo = () => {
  return fetch(`${BASE_URL}/admin/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return getResponse(res)
    })
}

export const updateUserInfo = ({ email, name }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      name,
    })
  })
    .then((res) => {
      return getResponse(res)
    })
}

export const getCategories = () => {
  return fetch(`${BASE_URL}/categories`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
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
      'Content-Type': 'application/json'
    },
  })

    .then((res) => {
      return getResponse(res)
    })
}

export const getPromo = () => {
  return fetch(`${BASE_URL}/promocode`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      return getResponse(res)
    })

}

export const addNewDiscount = (name, image, description, link, barcode, category) => {

  const data = new FormData()
  data.append('name', name)
  data.append('image', image)
  data.append('description', description)
  data.append('link', link)
  data.append('barcode', barcode)
  data.append('category', category)

  return fetch(`${BASE_URL}/positions`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: data
  })
    .then((res) => {
      return getResponse(res)
    })
}

export const UpdateDiscountText = (name, description, link, category, id) => {

  return fetch(`${BASE_URL}/positions/${id}`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, description, link })
  })
    .then((res) => {
      return getResponse(res)
    })
}

export const addNewPromo = (promocode, date, position) => {
  return fetch(`${BASE_URL}/promocode`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ promocode, date, position })
  })
    .then((res) => {
      return getResponse(res)
    })
}
//удаление карточки

export const deleteDiscount = (id) => {
  return fetch(`${BASE_URL}/positions/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return getResponse(res)
    })
}

export const deletePromocode = (id) => {
  return fetch(`${BASE_URL}/promocode/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return getResponse(res)
    })
}



// Категории
export const addNewCategories = (categoryName) => {
  return fetch(`${BASE_URL}/categories`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ categories: categoryName })
  })
    .then((res) => {
      return getResponse(res)
    })
}

export const deleteCategory = (id) => {
  return fetch(`${BASE_URL}/categories/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return getResponse(res)
    })
}



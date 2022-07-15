import axios from 'axios';

const http = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    'X-Requested-With': 'XMLHttpReques',
  },
  withCredentials: true,
});

export const authAPI = {
  logIn: () => {
    http.get('sanctum/csrf-cookie').then(() => {
      http.post('api/login', {
        email: 'stani@gmail.com',
        password: '0000',
      });
    });
  },

  logout: () => {
    http.post('api/logout');
  },

  authMe: () => http.post('api/auth/me')
    .then((response) => response.data),
};

export const profileAPI = {
  getProfileInfo: (userId) => http.get(`api/users/${userId ?? 1}`)
    .then((response) => response.data),
};

export const getProfileInfo = (userId) => http.get(`api/users/${userId ?? 1}`)
  .then((response) => response.data);

export const usersAPI = {
  getUsers: (currentPage = 1, usersPerPage = 10) => http
    .get(`api/users?page=${currentPage}&count=${usersPerPage}`)
    .then((response) => response.data),

  follow: (userId) => http.post(`api/follow/${userId}`)
    .then((response) => response.data),

  unfollow: (userId) => http.delete(`api/follow/${userId}`)
    .then((response) => response.data),
};

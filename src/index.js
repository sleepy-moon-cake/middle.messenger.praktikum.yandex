import commonStyles from '../static/styles/common.scss';

import { loginPageHTML } from './pages/login/login.js'
import { signinPageHTML } from './pages/signin/signin.js';
import { notFoundPageHTML } from './pages/errors/not-found/not-found.js';
import { unavailablePageHTML } from './pages/errors/unavailable/unavailable.js';
import { profilePageHTML } from './pages/profile/profile.js';
import { editProfilePageHTML } from './pages/edit-profile/edit-profile.js';
import { editPasswordPageHTML } from './pages/edit-password/edit-password.js';

const root = document.getElementById('root');

root.innerHTML = editPasswordPageHTML();
import {loginPageHTML} from './pages/login/login.js'
import {signinPageHTML} from './pages/signin/signin.js';
import { notFoundPageHTML } from './pages/errors/not-found/not-found.js';
import {unavailablePageHTML} from './pages/errors/unavailable/unavailable.js';

const root = document.getElementById('root');

root.innerHTML = unavailablePageHTML();
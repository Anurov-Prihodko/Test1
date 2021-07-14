import Post from './post'
import json from './assets/json'
import WebpackLogo from './assets/webpack-logo.png'
import './styles/styles.css'

const post = new Post('This a webpack Post title', WebpackLogo);

console.log('Post to string:', post.toString());

console.log('JSON:', json);
import * as $ from 'jquery'
import Post from './models/post'
// import json from './assets/json'
// import xml from './assets/data.xml'
// ======== возможно для работы с файлами csv
// нужно будет установить npm install papaparse ========
// import csv from './assets/data.csv'
import WebpackLogo from './assets/webpack-logo.png'
import './styles/styles.css'

const post = new Post('This a webpack Post title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

// console.log('Post to string:', post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)

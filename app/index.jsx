// 项目入口文件
import React, {Component} from 'react'
import {render} from 'react-dom'
// import Routers from './router/router.jsx'

import './static/css/base.css'


// 组件渲染到真实dom节点
render(
	<div>hello world</div>,
	document.getElementById('app')
)
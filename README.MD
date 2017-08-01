##RHL - react-hot-loader

Для подключения RHL необходимо сделать следующие 
* npm i -D react-hot-loader@3.0.0-beta.7
* Добавить плагин для react-hot-loader/babel -> babel.plugins
* Добавить точку входа react-hot-loader/patch 
* import { AppContainer } from 'react-hot-loader' 
* `<AppContainer><TestRHL/></AppContainer>`

Как понять что все работает? 
1. Создать компонент
```jsx harmony
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const TestRHL = () => (
	<div> 
        <span>Текст который можно попробовать поменять</span>
        <label>
            <input type="text"/>   
        </label>
    </div>
)

const container = document.createElement('div')
document.getElementsByTagName('body')[0].appendChild(container)

ReactDOM.render(<AppContainer><TestRHL/></AppContainer>, container)
```
2. Вводим значение в инпут
3. После чего меняем занчение в span или меняем сам span на что нибудь другое, должно автоматически пересобраться и 
значение в инпуте должно сохраниться + должен сработать ReactDOM.render.  


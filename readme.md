# личная визитка
## ссылка на деплой [здесь](https://abramsea.github.io/mycard/)

---

Приветствую! в данном репозитории находится моя личная визитка.
Использован сборщик gulp.
Использован webpack.
Использован препроцессор SASS.
Использован React.js.
Использован код-стайл студии М18, в которой я трудился на момент создания визитки.

_version 1.3_

### Клонирование

    git clone https://github.com/abramsea/mycard.git

### Зависимости

    "dependencies": {
        "autoprefixer": "^10.0.1",
        "gulp": "^4.0.2",
        "gulp-concat": "^2.6.1",
        "gulp-rename": "^2.0.0",
        "gulp-sass": "^4.1.0",
        "postcss": "^8.3.6",
        "webpack": "^5.49.0",
        "webpack-dev-server": "^4.0.0"
    }

    "devDependencies": {
        "gulp-autoprefixer": "^7.0.1",
        "gulp-babel": "^7.0.1",
        "gulp-cssmin": "^0.2.0",
        "gulp-gh-pages": "^0.5.4",
        "webpack-cli": "^4.7.2",
        "webpack-dev-server": "^3.11.2"
    }

    
### Сборка

&bull; для запуска сборки:

    gulp build

&bull; для запуска локального сервера:

    npm run start

&bull; для запуска деплоя:

    gulp deploy
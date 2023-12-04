[![Build status](https://ci.appveyor.com/api/projects/status/t95pjuf2o0nj18bh?svg=true)](https://ci.appveyor.com/project/iamgromov/hw-props-films)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-GO-green.svg)](https://iamgromov.github.io/hw-props-films)

# React + Vite Homework

Необходимо реализовать компонент, отображающий рейтинг фильма в виде звёзд:
![Список фильмов](https://github.com/netology-code/ra16-homeworks/raw/ra-51/props/films/assets/preview.png)

## Описание компонента

Для отображения рейтинга создайте компонент `Stars`, который принимает следующие атрибуты:

- `count` — рейтинг фильма, _число_, по умолчанию `0`.

Если рейтинг меньше `1` или больше `5`, или вообще не число, то компонент не должен иметь какого-либо представления в
DOM.

Звёзды рейтинга должны быть представлены тегом `<ul>` с классом `card-body-stars`. Для отображения символа звезды внутри
тега `<li>` используйте компонент `Star`.

## Пример использования

```jsx
// Внутри App
return (
    <Stars count={1}/>
);
```

Компонент должен дать следующий код:

```html

<ul class="card-body-stars u-clearfix">
    <li>
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
            <path d="M0 0h18v18H0z" fill="none"/>
        </svg>
    </li>
</ul>
```

## Реализация

Необходимо реализовать компонент `Stars`. Не забудьте, что отдельная звезда должна быть представлена компонентом `Star`.

Важно: вам нужно реализовать только отображение звёздочек, карточку фильма не нужно.

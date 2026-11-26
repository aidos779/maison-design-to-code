# MAISON · Defense preparation / Подготовка к защите

Use the two frames, the comparison board and the browser measurements for a live demonstration. The answers distinguish the verified connector run from the VS Code chat trial.

## 1. What is Figma MCP?

**EN** Model Context Protocol gives an assistant a standard way to call tools. Figma’s server can return a selected frame’s layout, styles, variables, assets and reference code.

**RU · Что такое Figma MCP?** Model Context Protocol задаёт общий способ вызова инструментов. Сервер Figma может вернуть структуру выбранного фрейма, стили, переменные, изображения и пример кода.

## 2. How does VS Code connect?

**EN** The workspace declares an HTTP server in .vscode/mcp.json. VS Code starts it and requests Figma authorization. A Copilot agent can then discover its tools and pass a frame link to get_design_context.

**RU · Как VS Code подключается к Figma?** В .vscode/mcp.json указан HTTP-сервер. VS Code запускает подключение и запрашивает авторизацию в Figma. После этого агент Copilot может обнаружить инструменты и передать ссылку на фрейм в get_design_context.

## 3. Which connection produced the implementation evidence?

**EN** The official Figma connector in Codex returned both versions’ design context, screenshots, layout metadata and variables. VS Code was configured and tested separately. Its chat request returned model_not_supported.

**RU · Через какое подключение получены данные для реализации?** Официальный коннектор Figma в Codex вернул контекст обеих версий, снимки, размеры и переменные. Подключение в VS Code проверялось отдельно. Запрос в чате вернул model_not_supported.

## 4. What does a frame link identify?

**EN** The file key identifies the document and node-id identifies a frame inside it. The V1 desktop node was 5:3. The final desktop node was 8:102.

**RU · Что определяет ссылка на фрейм?** Ключ файла определяет документ, а node-id указывает фрейм внутри него. Для настольного V1 это 5:3, для V2 — 8:102.

## 5. How do components and instances help?

**EN** A master defines a card’s structure. Its instances carry different names, prices and photos. The website expresses that same relationship by passing each sample record into PropertyCard.

**RU · Зачем нужны компоненты и экземпляры?** Основной компонент задаёт устройство карточки. Экземпляры получают разные названия, цены и фотографии. В React та же связь выражена передачей каждой записи в PropertyCard.

## 6. What is a variant?

**EN** A variant represents a defined state or type within a component set. The V2 button set has three kinds and three interaction states, giving nine combinations.

**RU · Что такое вариант компонента?** Вариант описывает тип или состояние внутри набора компонентов. У кнопки V2 три вида и три состояния взаимодействия, всего девять комбинаций.

## 7. How do variables become design tokens?

**EN** A variable holds a shared value. A semantic alias describes its role. V2 maps border/subtle to the CSS custom property --border-subtle, so a rule can refer to the border’s purpose.

**RU · Как переменные превращаются в дизайн-токены?** Переменная хранит общее значение, а семантический псевдоним описывает его назначение. В V2 переменная border/subtle соответствует CSS-свойству --border-subtle.

## 8. What did Auto Layout change?

**EN** On a temporary copy resized to 1024 px, the V1 main frame stayed 1440 px wide. In V2 it filled the 1024 px parent and the hero became 896 px wide after two 64 px gutters.

**RU · Что изменил Auto Layout?** После изменения ширины копии до 1024 px основной фрейм V1 остался шириной 1440 px. В V2 он занял 1024 px, а ширина hero за вычетом двух отступов по 64 px стала 896 px.

## 9. Why use semantic layer names?

**EN** Names such as Residence search and Site navigation identify product roles and suggest React component boundaries. The DOM import also produced generic names such as Container, which give a later implementer less context.

**RU · Зачем осмысленно называть слои?** Названия Residence search и Site navigation объясняют назначение элементов и подсказывают границы компонентов React. После обратного импорта встречается Container, который даёт меньше информации.

## 10. How did you keep the comparison fair?

**EN** Both versions share the generation brief, stack, property data, photography and viewport sizes. V1 was tagged before the iteration. The study is paired, with a human-directed review and a new tablet target in V2.

**RU · Как обеспечивалась сопоставимость версий?** В обеих версиях использованы одна инструкция генерации, одинаковый стек, данные, фотографии и размеры экрана. V1 зафиксирована тегом до изменений. При итерации учитывались результаты проверки и появился отдельный планшетный макет.

## 11. What was the title discrepancy?

**EN** At 1440 px, the Figma text layer was 373 px wide. In V1 the DOM element stretched to 1252 px while its glyphs occupied 371.23 px. V2 hugs the text at 371.23 px.

**RU · В чём состояло расхождение заголовка?** При ширине экрана 1440 px текстовый слой Figma занимал 373 px. В V1 HTML-элемент растянулся до 1252 px, а текст занял 371,23 px. В V2 ширина элемента совпала с шириной текста.

## 12. What changed visually on tablet?

**EN** At 768 px, V1 had three cards about 222.55 px wide. The authored V2 tablet frame has two 340 px cards per row. Chrome reproduces both the two-column width and the full 2370 px page height.

**RU · Что изменилось на планшете?** При ширине 768 px в V1 размещались три карточки примерно по 222,55 px. В макете V2 — две карточки по 340 px. В браузере совпали ширина колонок и полная высота страницы 2370 px.

## 13. Did visual fidelity improve substantially?

**EN** The change was small. At desktop width, pixels within 12 RGB levels in all channels rose from 95.22% to 95.25%. Source structure and tablet behavior changed more than the desktop image.

**RU · Насколько заметно улучшилось визуальное совпадение?** Прирост небольшой. На десктопе доля пикселей с расхождением не более 12 уровней в каждом RGB-канале выросла с 95,22% до 95,25%. Сильнее изменились структура исходника и планшетный макет.

## 14. How are listings filtered?

**EN** Draft inputs become applied filters when Search residences is submitted. Destination, property type and price are combined. An empty result offers a clear-filter action. Destination tiles apply their place directly.

**RU · Как фильтруются объекты?** Черновые значения применяются кнопкой Search residences. Учитываются направление, тип и цена. Фильтры можно сбросить при пустой выдаче. Карточка направления сразу применяет выбранную локацию.

## 15. How was the code tested?

**EN** Both TypeScript checks and Vite production builds passed. Automated Chrome checks covered 320, 390, 768 and 1440 px, filtering, empty results, reset, property dialogs and enquiry downloads. No console or page errors were captured in those runs.

**RU · Как проверялся код?** Обе версии прошли проверку TypeScript и сборку Vite. В Chrome проверены ширины 320, 390, 768 и 1440 px, фильтры, пустая выдача, сброс, карточки и скачивание запроса. В этих прогонах ошибок консоли и страницы не обнаружено.

## 16. How does reverse MCP work?

**EN** Figma’s capture script read the rendered local V2 page and submitted it to the official import tool. Its editable result is on 05_Reverse_MCP at node 11:2.

**RU · Как работает обратный MCP-перенос?** Скрипт Figma прочитал отрисованную локальную страницу V2 и передал её официальному инструменту импорта. Редактируемый результат находится на странице 05_Reverse_MCP, узел 11:2.

## 17. What survived the round trip?

**EN** The import kept the 1440 × 1901 canvas, 43 text layers and 86 nested frames. Of those frames, 73 used Auto Layout. No source component instances were recovered, and the search chevrons shifted left.

**RU · Что сохранилось после обратного переноса?** Сохранились размер 1440 × 1901, 43 текстовых слоя и 86 вложенных фреймов. У 73 фреймов есть Auto Layout. Связи с исходными компонентами не восстановились, а стрелки полей поиска сместились влево.

## 18. What was the role of AI and what can you conclude?

**EN** Codex used the real tools, adapted the React implementation and generated the analysis. The evidence supports a better-specified handoff in this project. The controlled comparison cannot isolate the effect of naming, variables or review individually.

**RU · Какова роль ИИ и какой вывод можно сделать?** Codex вызывал реальные инструменты, адаптировал реализацию на React и подготовил анализ. В этом проекте описание дизайна для разработки стало точнее. По одному сравнению нельзя выделить отдельный эффект названий, переменных или проверки.


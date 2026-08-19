# Forkify

Search over 1,000,000 recipes, view ingredients and instructions, adjust
servings, bookmark favorites, and upload your own custom recipes.

## Features

- 🔍 Search recipes by keyword
- 📖 View recipe details, ingredients, and cooking time
- 🔢 Dynamically adjust ingredient quantities based on servings
- 🔖 Bookmark recipes (persisted in local storage)
- ➕ Upload and share your own recipes
- 📄 Paginated search results

## Tech Stack

- JavaScript (ES6+ modules, MVC architecture)
- Sass
- [Parcel](https://parceljs.org/) as the build tool
- [Forkify API](https://forkify-api.herokuapp.com/) for recipe data

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm

### Installation

```bash
git clone https://github.com/leaves1205/recipe-application.git
cd recipe-application
npm install
```

### Development

```bash
npm start
```

Opens the app locally with hot reload (via Parcel).

### Production build

```bash
npm run build
```

Outputs the optimized production build to the `build/` directory.

## Project Structure

```
src/
├── js/
│   ├── controller.js      # App entry point, connects model and views
│   ├── model.js            # State and business logic
│   ├── config.js           # App-wide constants
│   └── views/               # UI rendering, one view per component
├── sass/                   # Stylesheets
└── img/                     # Icons, logo, favicon
```

## Architecture

This project follows an MVC-style pattern:

- **Model** (`model.js`) holds application state and handles data fetching.
- **Views** (`views/`) render the DOM and expose event-handler subscriptions.
- **Controller** (`controller.js`) wires model and views together.

## Acknowledgements

Built as part of [Jonas Schmedtmann's JavaScript course](https://www.udemy.com/course/the-complete-javascript-course/),
using the [Forkify API](https://forkify-api.herokuapp.com/).

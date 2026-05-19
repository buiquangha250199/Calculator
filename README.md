# Calculator

A simple AngularJS calculator application that evaluates mathematical expressions in real-time. Built with **AngularJS 1.x**, bundled with **Webpack**, and managed with **Bower** for front-end dependencies.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Components](#components)
  - [my-calculator](#my-calculator)
  - [my-message](#my-message)
- [Configuration](#configuration)
- [License](#license)

---

## Features

- Real-time mathematical expression evaluation
- Input validation — detects invalid characters (letters) and displays an error message
- Supports basic arithmetic operators: `+`, `-`, `*`, `/`, `%`
- Supports parentheses for grouping: `(`, `)`
- Supports decimal numbers
- Component-based architecture with AngularJS

---

## Demo

Open `index.html` in a browser after building the project. The app renders an input field pre-filled with the expression `(1.4+2/5*4)%2`. You can modify the expression to calculate any result in real-time.

---

## Tech Stack

| Technology | Purpose                        |
|------------|--------------------------------|
| AngularJS 1.x | Front-end MVC framework    |
| Webpack    | Module bundler                 |
| Bower      | Front-end package manager (AngularJS) |
| CSS        | Styling                        |
| HTML       | Templates                      |

---

## Project Structure

```
Calculator/
├── bower_components/
│   └── angular/              # AngularJS library (managed by Bower)
├── dist/
│   └── calculator.js         # Webpack output bundle
├── src/
│   ├── index.js              # App entry point — registers the AngularJS module
│   ├── my-calculator/
│   │   ├── index.js          # Calculator component (controller + validation + evaluation logic)
│   │   ├── template.html     # Calculator component template (input field + result display)
│   │   └── style.css         # Calculator component styles
│   └── my-message/
│       ├── index.js          # Message component (displays validation messages)
│       ├── template.html     # Message component template
│       └── style.css         # Message component styles (empty)
├── index.html                # Main HTML page — loads AngularJS and the bundled app
├── package.json              # npm dependencies (Webpack loaders)
├── package-lock.json         # Lockfile for npm
├── webpack.config.js         # Webpack configuration
└── README.md                 # This file
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v10 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/buiquangha250199/Calculator.git
   cd Calculator
   ```

2. **Install npm dependencies**

   ```bash
   npm install
   ```

   This installs the Webpack loaders required for bundling (`css-loader`, `html-loader`, `style-loader`).

---

## Usage

### Build the bundle

Use Webpack to bundle the source files into `dist/calculator.js`:

```bash
npx webpack
```

### Open the app

Open `index.html` directly in a web browser:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

### Try it out

1. The app loads with a default expression: `(1.4+2/5*4)%2`
2. Edit the expression in the input field
3. The result updates in real-time below the input
4. If the expression contains letters (e.g., `abc`), a validation message `Invalid expression!` is displayed

---

## Development

### Rebuild after changes

After modifying files in `src/`, rebuild the bundle:

```bash
npx webpack
```

### Watch mode

To automatically rebuild on file changes:

```bash
npx webpack --watch
```

---

## Components

### my-calculator

**Location:** `src/my-calculator/`

The main calculator component. It provides:

| Feature            | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| **Input binding**  | Two-way binding (`=`) on the `expression` attribute                        |
| **Validation**     | `check(expression)` — returns `'Valid expression!'` or `'Invalid expression!'` based on whether the input contains letters |
| **Evaluation**     | `calc(expression)` — evaluates the mathematical expression and returns the numeric result |

**Template:** Renders an input field bound to the expression, a `<my-message>` component for validation feedback, and an `<h3>` element displaying the computed result.

### my-message

**Location:** `src/my-message/`

A reusable message display component.

| Feature            | Description                                          |
|--------------------|------------------------------------------------------|
| **Input binding**  | Two-way binding (`=`) on the `message` attribute     |
| **Template**       | Renders a `<span>` containing the bound message text |

---

## Configuration

### Webpack (`webpack.config.js`)

| Option        | Value                  | Description                     |
|---------------|------------------------|---------------------------------|
| `mode`        | `development`          | Development build (not minified)|
| `entry`       | `./src/index.js`       | Application entry point         |
| `output.filename` | `calculator.js`   | Output bundle in `dist/`        |
| **Loaders**   | `html-loader`, `css-loader`, `style-loader` | Process HTML templates and CSS imports |

---

## License

ISC

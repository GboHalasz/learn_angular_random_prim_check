# Random Number Generator with Prime Number Check

This project is a simple Angular-based web application that generates random numbers and checks which of them are prime. It was originally developed as part of a frontend practice exam during a training course and later extended as a portfolio project.

🔗 [Live Demo / GitHub Pages](https://github.com/GboHalasz/learn_angular_random_prim_check)

## ✨ Features

- Generates a set of **10 unique random integers** between **4 and 5000**
- Displays the numbers dynamically on the page
- Enables a second step to **check for prime numbers**
- Highlights prime numbers when found and displays them
- Uses **date and boolean flags** to store result metadata

## 🛠️ Technologies Used

- [Angular](https://angular.io/) (v19+)[package-lock.json](package-lock.json)
- TypeScript
- HTML5
- Bootstrap 5

## 📷 Preview

![Screenshot of the app UI](screenshot-placeholder.png) <!-- Replace with actual screenshot if available -->

## 🚀 Getting Started

To run this project locally:

### 1. Clone the repository:

```bash
   git clone https://github.com/GboHalasz/learn_angular_random_prim_check.git
   cd learn_angular_random_prim_check
```

### 2. Install dependencies:

```bash
  npm install
```

### 3. Run the development server:

```bash
  ng serve
```

### 4. Open your browser at `http://localhost:4200/`


  ## 📁 Project Structure

  - main-page.component.ts: Contains the core logic for generating numbers and checking for primes.
  - main-page.component.html: UI layout using Bootstrap, with buttons and result display box.
  - main-page.component.css: Custom styling for disabled buttons.
  - index.html: Root HTML file with metadata and Angular entry point.

## 📊 Logic Overview


`generateNumbers(quantity: number): number[]`

- Generates an array of unique random integers in the range 4–5000.


`countPrimes(): CountPrimes`


- Filters the generated numbers to find which are prime.
- Returns an object with:
  - primes: array of found primes
  - count: number of found primes
  - dateTime: timestamp of the operation
  - found: boolean indicating if any primes were found

## 🧠 What I Learned
This project strengthened my understanding of:

- Angular component structure and bindings
- DOM event handling in Angular
- Basic algorithm design (prime checking, uniqueness logic)
- Responsive layout using Bootstrap

## 📌 To-Do / Ideas for Improvement

- Add unit tests for number generation and prime checking
- Enhance UI with loading indicators and animations
- Allow users to specify the quantity or range
- Display processing time for checking primes

## 📄 License
This project is open source and available under the MIT License.

### 💡 Made with passion for learning and code by [@GboHalasz](https://github.com/GboHalasz)

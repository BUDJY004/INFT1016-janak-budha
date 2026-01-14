
# Single-Page Planner & Gallery Web App

## Overview

This is a **single-page web application** combining multiple interactive features into a clean, modern interface. The website includes:

* **Name greeting:** Save and change your name.
* **Dark/Light theme toggle:** Theme choice persists across page reloads using `localStorage`.
* **Adelaide clock:** Real-time display of Adelaide, Australia time.
* **Image gallery:** Swap between two images (Picture A & Picture B) with descriptions.
* **To-Do list:** Add, delete, and save tasks in `localStorage` for persistence.
* Fully **responsive**, single-page layout with smooth, modern styling.

---

## Features

### 1. Name Greeting

* Input your name to personalize the page.
* Name is stored in `localStorage`, so it persists after refreshing the page.
* Option to reset/change your name.

### 2. Dark/Light Mode

* Toggle the theme with a button.
* Current theme is saved in `localStorage` for persistence.

### 3. Adelaide Clock

* Displays the current time in Adelaide, Australia.
* Updates every second automatically.

d.

### 5. Goals List

* Add tasks through a text input.
* Delete tasks by clicking on them.
* Tasks persist in `localStorage`.
* Load saved tasks anytime with the "Load Tasks" button.

---

## How to Use

1. **Open the HTML file:**
   Open the `.html` file in any modern web browser.

2. **Set your name:**

   * Enter your name in the input box and click “Save Name”.
   * Change name anytime with the “Change Name” button.

3. **Toggle theme:**

   * Click “Toggle Theme” to switch between dark and light modes.

4. **View time:**

   * The Adelaide time automatically updates every second.

5. **Image gallery:**

   * Click “Show Picture A” or “Show Picture B” to swap images and their descriptions.

6. **To-Do list:**

   * Enter a task in the input box and click “Add Task”.
   * Click on a task to remove it.
   * Click “Load Tasks” to reload saved tasks from `localStorage`.

---

## Technologies Used

* **HTML5** – Structure of the web page
* **CSS3** – Styling and dark/light mode
* **JavaScript** – Dynamic features: theme toggle, Adelaide clock, image swap, to-do list, and localStorage

---

**PASSWORD : Janakbudha$1234

## File Structure

```
single-page-app.html   <- Main HTML file with embedded CSS & JS
```

*Everything is self-contained in one file; no external dependencies.*

---

## Notes

* Works offline in modern browsers.
* Dark/light mode, name, and tasks persist thanks to `localStorage`.
* No server or backend required.

---

## Future Improvements

* Smooth scrolling for header links
* Add task priorities or due dates
* Add image gallery with more pictures
* Make the to-do

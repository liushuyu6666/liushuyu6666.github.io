# How to use
## Prepare `CSS` through `SASS`.
1. Install `Node.js` on your computer
2. Install `Sass` globally
    ```bash
    npm install -g sass
    ```
3. Update `Sass` file in the `sass/icon.scss` or create another `sass` file ending with `.scss` extension.
4. Compile `Sass` to `CSS`
    ```bash
    sass $your_sass_file $your_css_file
    ```
    or
    ```bash
    sass sass/icon.scss icon.css
    ```
5. Link the compiled `CSS` in your `HTML`.
6. Watch for changes instead of compiling it manually.
    ```bash
    sass --watch styles.scss output.css
    ```
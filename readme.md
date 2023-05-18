# How to use
## Prepare `CSS` through `SASS`.
1. Install `Node.js` on your computer.
2. Install `Sass` globally.
    ```bash
    npm install -g sass
    ```
3. Update `Sass` file in the `sass/icon.scss` or create another `sass` file ending with `.scss` extension.
4. Compile `Sass` to `CSS`.
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

## Add more icons
1. Go to [iconify](https://icon-sets.iconify.design/) to search icons.
2. Select `HTML`, then `CSS` tab under the icon image, then the url will appear.
3. Copy the url and paste it to `sass/icon.scss` file using the same format.
4. Go to `js/icon.js` file and add the new icon data in the `getTechStackMap` function.
5. Then you can use it in the `addTechStack` function.
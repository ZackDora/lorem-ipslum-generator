# Lorem Ipsum Generator

This is a practice project that acts as a practice for CSS and JavaScript.  

A Lorem Ipsum text generator with multiple themes, paragraph and word controls, and format options. Users can generate placeholder text in **Plain Text**, **HTML**, or **Bullet List** formats. The app also allows copying the text to the clipboard or downloading it as a `.txt` file, and has a **dark mode toggle** for better readability.  

The project is inspired by [GeeksforGeeks](https://www.geeksforgeeks.org/javascript/create-your-own-lorem-ipsum-using-html-css-and-javascript/)
## Screenshot

![Light Mode](./screenshots/light-generator)
![Dark Mode](./screenshots/dark-generator)

### Links

- Live Site URL: [https://yourusername.github.io/lorem-ipsum-generator/](https://yourusername.github.io/lorem-ipsum-generator/)

### Built with

- HTML
- CSS
- JavaScript

### How It Works

1. **Text generation:**  
   - Words are stored in arrays by theme (`latin`, `space`, `pirate`).  
   - Sentences are generated randomly from these arrays, then combined into paragraphs.  

2. **Paragraph control:**  
   - Users can select the number of paragraphs and words per paragraph.  
   - The first paragraph can optionally start with `"Lorem ipsum..."`.  

3. **Output formats:**  
   - **Plain Text:** Paragraphs separated by blank lines.  
   - **HTML:** `<p>` tags wrap each paragraph.  
   - **Bullet List:** `<li>` tags wrap paragraphs, all contained in a `<ul>`.  

4. **Copy & Download:**  
   - Users can copy the generated text to clipboard.  
   - Users can download the text as a `.txt` file using `Blob` and `URL.createObjectURL`.  

5. **Dark mode toggle**   

### What I learned

- [CSS] How to use CSS variables for theming (light/dark mode)  
- [CSS] Grid layouts with `auto-fit` and `minmax` to make responsive control panels  
- [JavaScript] How to generate random text from arrays and combine sentences into paragraphs  
- [JavaScript] How to handle different output formats (Plain Text, HTML, Bullet List)  
- [JavaScript] How to copy text to clipboard using `navigator.clipboard`  
- [JavaScript] How to download text as a `.txt` file using `Blob` and `URL.createObjectURL`  

## Author

- Zack Yang  
- Frontend Mentor - [@ZackDora](https://www.frontendmentor.io/profile/ZackDora)  
- Facebook - [Dương Trí Phú](https://www.facebook.com/ytp109)

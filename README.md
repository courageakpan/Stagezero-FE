#  HNG Frontend Stage 0 and stage 1 

Project: Personal Website — Profile | About | Contact

Files:
- index.html        → Profile page (profile card)
- About_Me.html     → About page
- Contact_Us.html   → Contact page (form + validation)
- styles.css        → Main stylesheet for all pages
- contact.js        → Contact form validation logic
- script.js         → For time in milliseconds
- README.md         → This file

Overview:
A small multi-page site built with plain HTML, CSS, and JavaScript. The site includes:
- A responsive Profile Card (index.html)
- An About page with required sections
- A Contact page with accessible form validation

Responsive behavior:
- Profile card (index.html):
  - Mobile (< 700px): card stacks vertically and centers; avatar above text.
  - Tablet (700–1023px): compact side-by-side or stacked depending on width.
  - Desktop (≥ 1024px): wider layout with avatar left and details right (two-column look).
- About & Contact pages:
  - Mobile & Tablet (< 1024px): navigation on top and content stacked below.
  - Desktop (≥ 1024px): navigation becomes a left vertical sidebar; main content on the right.

Contact form validation rules (client-side):
- All fields required.
- Email must match standard format (name@example.com).
- Message must be at least 10 characters.
- Error messages appear inline and are associated with inputs.
- Success message shows only after valid submission.

Accessibility notes:
- Inputs have <label> elements linked with `for` attributes.
- Error messages are placed in `<small>` elements (and should be wired to inputs with `aria-describedby` if desired).
- Links and buttons are keyboard-focusable.

How to run locally:
1. Open the project folder in your code editor (VS Code recommended).
2. Start Live Server (or open `index.html`, `About_Me.html`, or `Contact_Us.html` directly in a browser).
3. Test responsiveness by resizing the browser or using DevTools device toolbar.
4. Test the Contact page by submitting invalid and valid data to observe validation behavior.

Folder structure example:
project-folder/
├─ index.html
├─ About_Me.html
├─ Contact_Us.html
├─ styles.css
├─ contact.js
└─ script.js

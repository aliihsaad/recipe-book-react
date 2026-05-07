# Ironhack React App Mini Project Follow-Up Guide

This document turns the project brief into a practical follow-up guide that can be used while building the app day by day. The mini project is a team-based React assignment focused on building a single-page application for one user, without authentication, using JSON data as the main content source. [cite:1]

## Project purpose

The goal of the project is to learn core React concepts by building a working SPA in small daily iterations. The project also emphasizes teamwork, agile collaboration, pair programming, research habits, and clean code practices. [cite:1]

A single-page application in this context means the app runs from one HTML page and updates content dynamically with JavaScript instead of doing full page reloads. The brief highlights this as a more fluid experience that feels closer to a native app. [cite:1]

## Core constraints

The app must follow a few non-negotiable rules from the brief: [cite:1]

- The app is built in teams of 2. [cite:1]
- The app is made for a single user. [cite:1]
- The app must not require authentication such as login or signup. [cite:1]
- The app should use JSON data provided in the datasets or custom-generated JSON. [cite:1]
- The final deliverable is the GitHub repository link submitted through the Student Portal. [cite:1]

## Project choices

The brief offers five possible app types with different difficulty levels and JSON datasets. The available choices are To-Do app and Mini E-commerce Admin as easy options, Recipe Book app and Apartment Rentals Admin as medium options, and Kanban Board app as the hard option. [cite:1]

| App | Description | Difficulty | Notes |
|---|---|---:|---|
| To-Do app | Create and manage tasks, mark them complete or incomplete. [cite:1] | Easy [cite:1] | Optional extra: multiple to-do lists. [cite:1] |
| Mini E-commerce Admin | Manage products and inventory in a store dashboard. [cite:1] | Easy [cite:1] | Optional extra: save product image URL. [cite:1] |
| Recipe Book app | Create and manage favorite recipes. [cite:1] | Medium [cite:1] | Optional extra: upload image from filesystem. [cite:1] |
| Apartment Rentals Admin | Manage apartments shown on a rental platform. [cite:1] | Medium [cite:1] | Optional extra: bookmark favorite apartments. [cite:1] |
| Kanban Board app | Create, organize, and manage tasks across board columns. [cite:1] | Hard [cite:1] | Optional extras: toast feedback and drag-and-drop. [cite:1] |

If custom data is needed, the brief recommends using SmallDev.tools or Mockaroo to generate JSON test data. [cite:1]

## Required features checklist

The final React app must include all of the following requirements from the project brief. This section is the most important implementation checklist. [cite:1]

### Layout and shared UI

- Navbar shown on all pages, containing the app name and logo. [cite:1]
- Footer shown on all pages, containing a link to the GitHub repository. [cite:1]
- Sidebar shown on all pages, containing links to the app pages. [cite:1]

### Data and list behavior

- Render a list of items from JSON data. [cite:1]
- Use conditional rendering based on boolean properties or boolean-style checks. [cite:1]
- Add a delete button for each item so items can be removed from the list. [cite:1]

### Routing and pages

- Dashboard page as the first page users see, containing the main items list. [cite:1]
- Item Details page showing full details for a selected item. [cite:1]
- About page describing the project and listing team members with GitHub and LinkedIn links. [cite:1]
- Not Found page for invalid routes. [cite:1]

### Forms and CRUD actions

- Create Item form to add a new item to the list. [cite:1]
- Update Item form to edit an existing item. [cite:1]

### Code quality

- Use descriptive variable names. [cite:1]
- Keep indentation and file naming clean and consistent. [cite:1]
- Remove unused code and keep project structure organized. [cite:1]

## Team workflow

The brief strongly emphasizes collaboration quality, not just feature completion. Teams are expected to use VS Code Live Share for real-time collaboration, commit often, push frequently, pull before coding, and split work across separate files when needed to reduce merge conflicts. [cite:1]

A practical working rhythm based on the brief is: pull latest changes, agree on the next small task, implement it in pairs, commit once it works, push to GitHub, and then move to the next feature. This follows the collaboration advice given in the project setup section. [cite:1]

## Daily execution plan

The project is split into day-based iterations. The brief presents them as a suggested roadmap to complete the project incrementally. [cite:1]

### Day 1

Focus on repository setup, app bootstrap, and core layout. One teammate creates the GitHub repository, adds collaborators, and everyone clones the repo locally. Then the team creates the React app, commits often, and builds the Home Page with Navbar, Footer, Sidebar, and basic styling. [cite:1]

Suggested Day 1 output:

- GitHub repository created and shared. [cite:1]
- React app initialized locally. [cite:1]
- Base folder structure ready. [cite:1]
- Layout components created. [cite:1]
- Home page visible with basic styling. [cite:1]

### Day 2

Focus on JSON rendering and component extraction. The team renders JSON data as a list, adds conditional rendering, adds delete functionality, and separates the list and list item into dedicated components for cleaner structure. [cite:1]

Suggested Day 2 output:

- JSON imported or stored in state. [cite:1]
- Items list renders correctly. [cite:1]
- Conditional UI works. [cite:1]
- Delete button removes items. [cite:1]
- `ItemList` and `ItemCard` or similar components created. [cite:1]

### Day 3

Focus on routing and page architecture. The team installs and configures `react-router`, then creates the Dashboard Page, Item Details Page, About Page, and Not Found Page while keeping Navbar, Footer, and Sidebar visible on all pages. [cite:1]

Suggested Day 3 output:

- Router installed and configured. [cite:1]
- Dashboard route works. [cite:1]
- Details page route works. [cite:1]
- About page exists with team links. [cite:1]
- Wildcard route points to Not Found page. [cite:1]

### Day 4

Focus on forms and editing flows. The brief requires a form to create new items and a form to update existing items, and it also suggests finishing any remaining styling during this phase if it is not already complete. [cite:1]

Suggested Day 4 output:

- Controlled form for adding items. [cite:1]
- Controlled form for editing items. [cite:1]
- State updates correctly after create and edit. [cite:1]
- App styling feels consistent and presentable. [cite:1]

### Day 5

Focus on finishing, debugging, and preparing the presentation. The brief asks the team to complete remaining features, verify that all pages and functions work correctly, and check the browser console for leftover logs or unresolved errors. [cite:1]

Suggested Day 5 output:

- All core requirements completed. [cite:1]
- Manual feature test finished. [cite:1]
- Console cleaned up. [cite:1]
- Presentation draft started or completed. [cite:1]

### Day 6

Focus on final polish and presentation preparation. The brief says to complete remaining tasks and continue the presentation if needed; once all required tasks are done, optional extra features can be explored. [cite:1]

Suggested Day 6 output:

- App stable and demo-ready. [cite:1]
- Presentation finalized. [cite:1]
- Optional enhancements considered only after requirements are complete. [cite:1]

## Research reading plan

The project includes daily reading assignments to support the implementation work. These are part of the learning goals, not optional background reading. [cite:1]

| Day | Reading task |
|---|---|
| Day 1 | React Docs: Quick Start; Passing Props to a Component. [cite:1] |
| Day 2 | React Docs: Adding Interactivity. [cite:1] |
| Day 3 | React Docs: Reacting to Input with State. [cite:1] |
| Day 4 | React Docs: Sharing State Between Components. [cite:1] |
| Day 5 | Article: React Folder Structure in 5 Steps. [cite:1] |
| Day 6 | Explore an optional advanced feature after all required work is done. [cite:1] |

The brief also explains why this matters: becoming comfortable with reading documentation and technical materials is treated as a core developer skill, not just a supporting habit. [cite:1]

## Recommended React structure

The project brief does not force an exact folder structure, but it repeatedly stresses clean code and component separation. A practical structure that matches the brief well is shown below.

```txt
src/
  assets/
  components/
    Navbar.jsx
    Footer.jsx
    Sidebar.jsx
    ItemList.jsx
    ItemCard.jsx
    CreateItemForm.jsx
    UpdateItemForm.jsx
  pages/
    HomePage.jsx
    DashboardPage.jsx
    ItemDetailsPage.jsx
    AboutPage.jsx
    NotFoundPage.jsx
  data/
    items.json
  App.jsx
  main.jsx
```

This structure supports the required shared layout, extracted list components, dedicated pages, and form components described in the brief. [cite:1]

## Practical build strategy

A clean way to approach the project is to build in this order: shared layout, list rendering, delete behavior, routing, details page, about page, create form, update form, then styling polish. This sequence aligns closely with the day-by-day progression from the brief and reduces the chance of getting blocked by premature complexity. [cite:1]

To avoid common beginner issues in React, keep one source of truth for the items state, pass props clearly, and update state immutably when creating, deleting, or editing items. The brief points students toward props, interactivity, input state, and shared state readings specifically to support these patterns. [cite:1]

## Optional features

Once the required features are done, the brief suggests extending the project with more advanced topics such as Tailwind CSS and state management using Context and reducers. It also gives project-specific optional features like multiple to-do lists, product image URLs, recipe image upload, apartment bookmarks, or for the Kanban Board app, toast notifications and drag-and-drop between columns. [cite:1]

These extras should be treated as enhancements, not substitutes for the required checklist. The submission requirement clearly states that the mini-project is considered complete only after the listed project brief tasks are finished. [cite:1]

## Submission and deadline

The project is considered complete only when all tasks in the project brief are finished and the GitHub repository is submitted through the Student Portal. The deadline stated in the brief is Wednesday of the following week. [cite:1]

Before submission, the app should be manually checked for routing, list behavior, create and update flows, shared layout visibility, and browser console cleanliness. This follows the verification guidance explicitly mentioned in the Day 5 tasks. [cite:1]

## Presentation requirements

The final presentation lasts 5 minutes total: 3 minutes for slides and 2 minutes for the app demo. Presentations are done from a staff member's computer, so the slides must be online rather than uploaded as PowerPoint, Keynote, or local files. [cite:1]

The suggested presentation structure in the brief is: title slide, technical challenge, big mistake, demo slide, and closing slide, for a total of about 5 to 7 slides. Suggested online tools include Google Slides, Slides, and Prezi. [cite:1]

## Personal follow-up checklist

Use this checklist while building the project:

- Choose the simplest project that can be finished confidently, unless a harder option is intentional. [cite:1]
- Set up the repo correctly and collaborate through frequent commits, pushes, and pulls. [cite:1]
- Build shared layout components first. [cite:1]
- Render JSON data and extract list components early. [cite:1]
- Add routing before forms so page architecture is stable. [cite:1]
- Implement create, delete, and update actions with clean state flow. [cite:1]
- Test every route and every CRUD action manually. [cite:1]
- Clean up console logs, dead code, and inconsistent naming before submission. [cite:1]
- Prepare the presentation before the final day rush. [cite:1]
- Submit the GitHub repo before the Wednesday deadline. [cite:1]

## Suggested weekly routine

A strong routine based on the brief would be: start by reading the day task, pull latest Git changes, pair on implementation, commit working changes, push them, then spend the final part of the session on the assigned reading or preview for the next day. This matches the project’s development-plus-research rhythm. [cite:1]

For a smoother build, treat every day as a mini milestone with something visible working by the end of the session. The project brief is designed around incremental progress, so finishing one working slice at a time is the safest way to stay on track. [cite:1]

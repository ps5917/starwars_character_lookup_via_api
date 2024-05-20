# Star Wars Character Profile

This project is a Star Wars character profile application built using Next.js and React. It allows users to search for Star Wars characters and view their details, including biographical information, filmography, and starships.

## Features

- Search for Star Wars characters by name
- View detailed character information, including name, height, hair color, birth year, and more
- Explore the films the character has appeared in
- See the starships associated with the character

## Clean Code Principles

This project aims to follow clean code principles to ensure maintainability, readability, and extensibility:

- **Naming and Understandability**: The codebase follows clear and descriptive naming conventions for variables, functions, and components. Meaningful names are used to enhance the code's readability and make it self-explanatory. Explanatory variable and function names are employed to convey their purpose and functionality, improving overall understandability.
- **Error Handling**: Error handling is implemented using try-catch blocks to catch and handle potential errors gracefully. Errors are logged to the console for easier debugging.
- **Functions**: Functions are kept focused and perform a single task. They are named appropriately to convey their purpose and are kept concise, typically within 20 lines of code.
- **Objects and Data Structures**: The project utilizes React components as objects that encapsulate data and expose functions to operate on that data. The separation of concerns is maintained, with components responsible for rendering and managing their own state.
- **Formatting**: The codebase follows consistent formatting conventions, using vertical and horizontal spacing to improve readability. Indentation and line breaks are used to clearly distinguish code blocks and enhance visual structure.
- **Modularity**: The project is structured in a modular way, with separate components for the search page and character details page. This promotes reusability, maintainability, and separation of concerns.
- **Dependency Management**: The project uses modern web development tools and libraries, such as React and Next.js, to manage dependencies effectively. The use of `package.json` and `npm` ensures consistent and reproducible builds.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
https://github.com/ps5917/starwars_character_lookup_via_api.git

2. Navigate to the project directory:
cd starwars_character_lookup_via_api

3. Install the dependencies:
npm install

4. Start the development server:
npm run dev

5. Open your browser and visit `http://localhost:3000/page/search` to see the application in action.

## Project Structure

The project follows the standard Next.js directory structure:

- `pages`: Contains the page components for the application.
- `api`: Defines the API routes for fetching character data from the SWAPI API.
- `character`: Includes the character details page component.
- `search`: Contains the search page component.
- `public`: Stores static assets such as images.
- `styles`: Contains CSS modules for styling the components.

## Technologies Used

- Next.js: A React framework for building server-side rendered and statically generated applications.
- React: A JavaScript library for building user interfaces.
- CSS Modules: A CSS-in-JS solution for scoping styles to individual components.
- SWAPI (Star Wars API): An open API for retrieving Star Wars data.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
// Declare that this is a client-side component
'use client';

// Import the necessary modules and components
import Image from 'next/image';
import styles from './search.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Define the Character interface
interface Character {
  name: string;
  // Add other properties if needed
}

// Define the SearchPage component
export default function SearchPage() {
  // Create state variables using the useState hook
  const [searchValue, setSearchValue] = useState('');
  // Get the router instance using the useRouter hook
  const router = useRouter();

  // Function to handle changes in the search input field
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // Function to handle the search form submission
  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Make a fetch request to the SWAPI API with the search value
      const response = await fetch(`https://swapi.dev/api/people/?search=${searchValue}`);
      const data = await response.json();
      // Check if the API response contains any results
      if (data.results.length > 0) {
        // Get the first character from the results
        const character: Character = data.results[0];
        // Navigate to the character page with the character's name as a parameter
        router.push(`/page/character/${character.name}`);
      } else {
        // Display an alert if no character is found
        alert('No character found with that name.');
      }
    } catch (error) {
      // Log any errors that occur during the search process
      console.error('Error searching for character:', error);
      // Display an alert if an error occurs
      alert('An error occurred while searching for the character. Please try again.');
    }
  };

  // Render the search page component
  return (
    <div className={styles.container}>
      {/* Render the Star Wars logo */}
      <Image src="/starWars.png" alt="Star Wars Logo" className={styles.starWarsLogo} width={600} height={200} />
      {/* Render the character lookup image */}
      <Image src="/cLookup.png" alt="Character Lookup" className={styles.characterLookup} width={913} height={71} />
      {/* Render the search form */}
      <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
        {/* Render the search input field */}
        <input
          type="text"
          id="character-search"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Enter character name"
          className={styles.searchInput}
        />
        {/* Render the search button */}
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
}
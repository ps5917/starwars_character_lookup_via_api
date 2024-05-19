// Declare that this is a client-side component
'use client';

// Import the necessary modules and components
import { useEffect, useState } from 'react';
import styles from './character.module.css';

// Define the Character interface
interface Character {
  name: string;
  height: string;
  hair_color: string;
  mass: string;
  birth_year: string;
  // Add other properties as needed
}

// Define the Film interface
interface Film {
  episode_id: number;
  title: string;
  release_date: string;
  // Add other properties as needed
}

// Define the Starship interface
interface Starship {
  name: string;
  // Add other properties as needed
}

// Define the CharacterPageProps interface
interface CharacterPageProps {
  characterName: string;
}

// Define the CharacterPage component
export default function CharacterPage({ characterName }: CharacterPageProps) {
  // Create state variables using the useState hook
  const [character, setCharacter] = useState<Character | null>(null);
  const [films, setFilms] = useState<Film[]>([]);
  const [starships, setStarships] = useState<Starship[]>([]);

  // Use the useEffect hook to fetch character data when the component mounts or 'characterName' changes
  useEffect(() => {
    // Define an async function to fetch character data
    const fetchCharacterData = async () => {
      try {
        // Make a fetch request to the SWAPI API with the character name
        const response = await fetch(`https://swapi.dev/api/people/?search=${characterName}`);
        const data = await response.json();
        // Check if the API response contains any results
        if (data.results.length > 0) {
          // Get the first character from the results
          const characterData: Character = data.results[0];
          // Update the character state with the fetched data
          setCharacter(characterData);

          // Fetch film data for the character
          const filmPromises = characterData.films.map((filmUrl: string) =>
            fetch(filmUrl).then((res) => res.json())
          );
          const filmData: Film[] = await Promise.all(filmPromises);
          // Update the films state with the fetched data
          setFilms(filmData);

          // Fetch starship data for the character
          const starshipPromises = characterData.starships.map((starshipUrl: string) =>
            fetch(starshipUrl).then((res) => res.json())
          );
          const starshipData: Starship[] = await Promise.all(starshipPromises);
          // Update the starships state with the fetched data
          setStarships(starshipData);
        } else {
          // Set the character state to null if no character is found
          setCharacter(null);
        }
      } catch (error) {
        // Log any errors that occur during the data fetching process
        console.error('Error fetching character data:', error);
      }
    };

    // Call the fetchCharacterData function
    fetchCharacterData();
  }, [characterName]); // Re-run the effect when 'characterName' changes

  // Render a loading message if the character data is not yet available
  if (!character) {
    return <div>Loading character data...</div>;
  }

  // Render the character page component
  return (
    <div className={styles.container}>
      <div className={styles.crawlContainer}>
        <div className={styles.crawl}>
          {/* Render the character name */}
          <h1 className={styles.characterName}>{character.name}</h1>
          {/* Render the "About Me" section */}
          <div className={styles.aboutSection}>
            <h2>About Me</h2>
            <p>Height: {character.height} cm</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Mass: {character.mass} kg</p>
            <p>Birth Year: {character.birth_year}</p>
          </div>
          {/* Render the "Filmography" section */}
          <div className={styles.filmographySection}>
            <h2>Filmography</h2>
            <ul>
              {/* Map through the films array and render each film */}
              {films.map((film) => (
                <li key={film.episode_id}>
                  {film.title} ({film.release_date})
                </li>
              ))}
            </ul>
          </div>
          {/* Render the "Ships Flown" section */}
          <div className={styles.shipsSection}>
            <h2>Ships Flown</h2>
            <ul>
              {/* Map through the starships array and render each starship */}
              {starships.map((starship) => (
                <li key={starship.name}>{starship.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
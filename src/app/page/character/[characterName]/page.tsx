// Declare that this is a client-side component
'use client';

// Import the useParams hook from 'next/navigation' to access route parameters
import { useParams } from 'next/navigation';

// Import the CharacterPage component from the parent directory
import CharacterPage from '../character';

// Define the CharacterRoute component
export default function CharacterRoute() {
  // Use the useParams hook to get the route parameters
  const params = useParams();

  // Extract the 'characterName' parameter from the params object and assert it as a string
  // This ensures that characterName is always treated as a string value
  const characterName = params.characterName as string;

  // Render the CharacterPage component and pass the 'characterName' as a prop
  // The CharacterPage component will use this prop to fetch and display the character data
  return <CharacterPage characterName={characterName} />;
}
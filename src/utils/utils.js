export const generateRandomHexColor = () => {
    // Generate a random number between 0 and 255 for each RGB component
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    // Ensure the result is always 6 characters (including the '#')
    return randomColor.padStart(7, '#');
  }
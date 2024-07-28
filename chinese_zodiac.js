function chineseZodiac(year){
  const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
  const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  
  //calculating the number of years since 1924
  const yearSince1924 = year - 1924;
  
  const animalIndex = yearSince1924 % 12;
  const elementIndex = Math.floor((yearSince1924 % 10) / 2);
  
  return elements[elementIndex] + " " + animals[animalIndex];
   
}

'use strict';

const paintLivingRoomProject = [
  ["paint", "sand paper", "brushes", "wallpaper stripper"],
  ["colors", "painting techniques", "music for DIY"],
  ["strip wallpaper", "clean walls", "sand surfaces", "apply paint"],
  ["colors", "who does what", "budget", "sand paper"],
];
console.table(paintLivingRoomProject);


for (let listIndex = 0; listIndex < paintLivingRoomProject.length; listIndex++) {
  console.log("---------------------------------------");
  const humanListIndex = listIndex + 1; // Humans start counting from 1.
  console.log(`List ${humanListIndex} has ${paintLivingRoomProject[listIndex].length} items on it:`);
  const subList = paintLivingRoomProject[listIndex];
  for (let itemIndex = 0; itemIndex < subList.length; itemIndex++) {
    const humanItemIndex = itemIndex + 1; // Humans start counting from 1.
    console.log(`Item ${humanItemIndex}: ${subList[itemIndex]}.`);
  }
}
function newPlayableCharacter(x, y) {
  const element = newImage("assets/images/GIF/green-character/static.gif");
  element.style.zIndex = 1;

  function handleDirectionChange(direction) {
    if (direction === null) {
      element.src = `assets/images/GIF/green-character/static.gif`;
    }
    if (direction === "west") {
      element.src = `assets/images/GIF/green-character/west.gif`;
    }
    if (direction === "north") {
      element.src = `assets/images/GIF/green-character/north.gif`;
    }
    if (direction === "east") {
      element.src = `assets/images/GIF/green-character/east.gif`;
    }
    if (direction === "south") {
      element.src = `assets/images/GIF/green-character/south.gif`;
    }
  }

  move(element).withArrowKeys(x, y, handleDirectionChange);

  return {
    element: element,
  };
}

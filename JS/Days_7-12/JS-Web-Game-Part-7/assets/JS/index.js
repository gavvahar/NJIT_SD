// Create the playable character
const pc = newPlayableCharacter(100, 110);

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300);

// have the NPC start walking east immediately
async function moveNPC() {
  await npc.walkNorth(1400);
  await npc.walkEast(1200);
  await npc.walkSouth(300);
  await npc.walkEast(1500);
  await npc.walkSouth(1500);
  await npc.walkWest(2700);
  await npc.walkNorth(400);
}

moveNPC();
// Create the inventory
const inventory = newInventory();
move(inventory).to(0, 0);

// Create everything else
move(newImage("assets/images/PNG/tree.png")).to(200, 450);
move(newImage("assets/images/PNG/pillar.png")).to(350, 250);
move(newImage("assets/images/PNG/pine-tree.png")).to(450, 350);
move(newImage("assets/images/PNG/crate.png")).to(150, 350);
move(newImage("assets/images/PNG/well.png")).to(500, 575);
move(newItem("assets/images/PNG/sword.png")).to(500, 555);
move(newItem("assets/images/PNG/shield.png")).to(165, 335);
move(newItem("assets/images/PNG/staff.png")).to(600, 250);

import { GameCharacterFactory } from "./creational/factory/game-character.factory";

const hero = GameCharacterFactory.getWarrior(10);
const hero2 = GameCharacterFactory.getMage(5);
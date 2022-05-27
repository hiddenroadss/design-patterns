import { GameCharacter } from "./game-character";

export class Warrior implements GameCharacter {
    strength: number = 90;
    dexterity: number = 50;
    health: number = 90;
    magic: number = 10;
}
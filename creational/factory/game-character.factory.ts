import { GameCharacter } from "./game-character";
import { Mage } from "./mage";
import { UniversalSoldier } from "./universal-soldier";
import { Warrior } from "./warrior";

export class GameCharacterFactory {
    public static getWarrior(level: number): GameCharacter {
        if (level > 10) {
            return new UniversalSoldier()
        }
        return new Warrior();

    }

    public static getMage(level: number): GameCharacter {
        if (level > 10) {
            return new UniversalSoldier();
        }
        return new Mage()
    }
}
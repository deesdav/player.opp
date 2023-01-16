const info = document.getElementById("info");
const upgrade = document.getElementById("upgrade");

class Player {

    constructor(name, hp, mana, money) {
        this.name = name;
        this.hp = hp;
        this.mana = mana;
        this.money = money;
    }

    printInfo(element) {
        element.innerHTML = `
        <p>Name: ${this.name}</p>
        <p>HP: ${this.hp}</p>
        <p>Mana: ${this.mana}</p>
        <p>Money: ${this.money}</p>
        `;
    }

    upgradeStats(){
        this.hp++;
        this.mana++;
        this.money++;
    }
}

const myPlayer = new Player("Kanye", 100, 220, 150);

myPlayer.printInfo(info);

upgrade.onclick = () => {
    myPlayer.printInfo(info);
    myPlayer.upgradeStats();
}
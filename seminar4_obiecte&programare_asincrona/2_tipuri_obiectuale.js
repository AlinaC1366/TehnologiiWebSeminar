 
 /*class Robot{
    constructor(name){
        this.name = name
    }

    move(){
        console.log(`${this.name} is moving `)
    }
 }

 const r0 = new Robot('some robot')
 r0.move()

 class Weapon {
    constructor (description){
        this.description=description
    }
    fire(){
        console.log(`${this.description} is firing`)
    }
 }

 const w0 = new Weapon('pew pew laser')
 w0.fire();  

 class CombatRobot extends Robot{
    constructor (name){
        super(name)
        this.weapons = []
    }

    addWeapon(W){
        this.weapons.push(W);
    }

    fire(){
        console.log('firing all weapons')
        for(const W of this.weapons){
            W.fire()
        }
    }
 }

 const r1 = new CombatRobot('some combat robot')
 r1.addWeapon(w0)
 r1.fire()

 Robot.prototype.fly = function (){
    console.log(`${this.name} is flying`)
 }

 r1.fly()

 */
 
 //După ce ați testat exemplul, implementați următoarea structură de tipuri. 
 //Software este un tip care are metoda 'run'. 
 // Browser moștenește Software și poate adăuga și instala Plugin. 
 // Un Browser poate avea multiple Plugin.

 class Software {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} s-a pornit`);
    }
}



class Browser extends Software {
    constructor(name) {
        super(name);
        this.plugins = [];
    }
    addPlugin(P) {
        this.plugins.push(P);
    }
    
    run() {
        const count = this.plugins.length;
        console.log(`\n sunt ${count} plugin instalate:`);
        if (count > 0) {
            for (const P of this.plugins) {
                P.processPage(); 
            }
        } else {
            console.log('nu avem plugin');
        }
    }
}

class PluginBroswer {
    constructor(description) {
        this.description = description;
    }

    install() {
        console.log(`plugin-ul ${this.description} a fost instalat.`);
    }
}

const p1 = new PluginBrowser('plugin1');
const p2 = new PluginBrowser('plugin2');

const chrome = new Browser('firefox');

chrome.addPlugin(p1);
chrome.addPlugin(p2);

chrome.run();
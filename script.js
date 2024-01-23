const msgs = {
    msg1: 'You have clicked on the first button YAY!',
    msg2: 'You have clicked on the second button wow!',
    msg3: 'You have clicked on the third/last button oh no!',
    displayMsg1: function(){
        // the this is looking at the object msgs 
        // calling the displayMsg function 
        // then passes msg1 from msgs;
        this.displayMsg(this.msg1);
    },
    displayMsg2: function(){
        this.displayMsg(this.msg2);// this is referencing the object msgs then grabs msg2
    },
    displayMsg3: function(){
        this.displayMsg(this.msg3); // this is referencing the object msgs then grabs msg3
    },
    displayMsg: function(msg){
        const p = document.createElement('p');
        p.textContent = msg;
        document.body.appendChild(p); 
    },
};
const person = {
    name: 'George',
    greet1: ()=> console.log('Hello '+ this.name),// The this here is looking at the window object
    greet2: function(){
        // The this here is looking at the object person and getting the name
        console.log('Hello ' + this.name); // Returns 'Hello George'
    }
}
person.greet2();
person.greet1();

document.getElementById('btn1').addEventListener('click', msgs.displayMsg1.bind(msgs));
document.getElementById('btn2').addEventListener('click', msgs.displayMsg2.bind(msgs));
document.getElementById('btn3').addEventListener('click', msgs.displayMsg3.bind(msgs));
const msgs = {
    msg1: 'You have clicked on the first button YAY!',
    msg2: 'You have clicked on the second button wow!',
    msg3: 'You have clicked on the third/last button oh no!',
    displayMsg1: function(){
        this.displayMsg(this.msg1);
    },
    displayMsg2: function(){
        this.displayMsg(this.msg2);
    },
    displayMsg3: function(){
        this.displayMsg(this.msg3);
    },
    displayMsg: function(msg){
        const p = document.createElement('p');
        p.textContent = msg;
        document.body.appendChild(p); 
    },
    

};
document.getElementById('btn1').addEventListener('click', msgs.displayMsg1.bind(msgs));
document.getElementById('btn2').addEventListener('click', msgs.displayMsg2.bind(msgs));
document.getElementById('btn3').addEventListener('click', msgs.displayMsg3.bind(msgs));
let arr=[];
let cap={
    name:"Steve rogers",
    avenger_name:"Captain America",
    weapon:"shield",
    amt:40
};
let my_amt=150;
let f=0;
let b_f=0;
function cap_button(){
    let container=document.getElementById("inner_text_cap");
    if(f===1)
    {
        f=0;
        b_f=0;
        container.innerHTML='';
    }
    else{
        f=1;
        
        container.innerHTML=`<h2 style="color:black"> Name:${cap.name}
     Alias:${cap.avenger_name}
     Weapon:${cap.weapon}
     Amount:$${cap.amt}</h2>`;
    let btn=document.createElement("button");
    btn.innerHTML="BUY";
    btn.onclick=function()
    {
        if(b_f===1)
        {
            btn.innerHTML="BUY";
            my_amt=my_amt+cap.amt;
            document.getElementById("tot_amt").innerHTML=`<h2>Total amount left:${my_amt}</h2>`;
            b_f=0;
           arr = arr.filter(item => item !== "CAPTAIN AMERICA");
        }
        else{
            b_f=1;
            btn.innerHTML="SELL";
            if((150 - my_amt) + cap.amt > 175) {
            alert("You cannot spend more than 175!");
            return; 
        }
        if(arr.includes("CAPTAIN AMERICA")) {
        alert("You already bought Captain America!");
        return; // stop execution
    }
            my_amt=my_amt-cap.amt;
            document.getElementById("tot_amt").innerHTML=`<h2>Total amount left:${my_amt}</h2>`;
            arr.push("CAPTAIN AMERICA");
        }
        updatePurchased();
    };
    container.appendChild(btn);
    }
    
};
let clint = {
    name: "Clint Barton",
    avenger_name: "Hawkeye",
    weapon: "Bow & Arrow",
    amt: 35
};
let f_clint = 0;
let b_f_clint = 0;
function clint_button() {
    let container = document.getElementById("inner_text_clint");
    if(f_clint === 1) {
        f_clint = 0;
        b_f_clint = 0;
        container.innerHTML = '';
    } else {
        f_clint = 1;
        container.innerHTML = `<h2 style="color:black">
            Name: ${clint.name}<br>
            Alias: ${clint.avenger_name}<br>
            Weapon: ${clint.weapon}<br>
            Amount: $${clint.amt}
        </h2>`;
        let btn = document.createElement("button");
        btn.innerHTML = "BUY";
        btn.onclick = function() {
            if(b_f_clint === 1) {
                btn.innerHTML = "BUY";
                my_amt += clint.amt;
                b_f_clint = 0;
                arr = arr.filter(item => item !== "HAWKEYE");
            } else {
                b_f_clint = 1;
                if((150 - my_amt) + clint.amt > 175) {
            alert("You cannot spend more than 175!");
            return; // stop execution
        }
        if(arr.includes("HAWKEYE")) {
        alert("You already bought hawkeye!");
        return; // stop execution
    }
                btn.innerHTML = "SELL";
                my_amt -= clint.amt;
                arr.push("HAWKEYE");
            }
          updatePurchased();
            document.getElementById("tot_amt").innerHTML=`<h2>Total amount left:${my_amt}</h2>`;
        };
        container.appendChild(btn);
    }
    
}

// Hulk
let hulk = {
    name: "Bruce Banner",
    avenger_name: "Hulk",
    weapon: "Super Strength",
    amt: 50
};
let f_hulk = 0;
let b_f_hulk = 0;
function hulk_button() {
    let container = document.getElementById("inner_text_hulk");
    if(f_hulk === 1) {
        f_hulk = 0;
        b_f_hulk = 0;
        container.innerHTML = '';
    } else {
        f_hulk = 1;
        container.innerHTML = `<h2 style="color:black">
            Name: ${hulk.name}<br>
            Alias: ${hulk.avenger_name}<br>
            Weapon: ${hulk.weapon}<br>
            Amount: $${hulk.amt}
        </h2>`;
        let btn = document.createElement("button");
        btn.innerHTML = "BUY";
        btn.onclick = function() {
            if(b_f_hulk === 1) {
                btn.innerHTML = "BUY";
                my_amt += hulk.amt;
                b_f_hulk = 0;
                arr = arr.filter(item => item !== "HULK");
            } else {
                b_f_hulk = 1;
                if((150 - my_amt) + hulk.amt > 175) {
            alert("You cannot spend more than 175!");
            return; // stop execution
        }
        if(arr.includes("HULK")) {
        alert("You already bought hulk!");
        return; // stop execution
    }
                btn.innerHTML = "SELL";
                my_amt -= hulk.amt;
                arr.push("HULK");
            }
            updatePurchased();
            document.getElementById("tot_amt").innerHTML=`<h2>Total amount left:${my_amt}</h2>`;
        };
        container.appendChild(btn);
    }
    
}

// Iron Man
let tony = {
    name: "Tony Stark",
    avenger_name: "Iron Man",
    weapon: "Armor Suit",
    amt: 60
};
let f_tony = 0;
let b_f_tony = 0;
function tony_button() {
    let container = document.getElementById("inner_text_tony");
    if(f_tony === 1) {
        f_tony = 0;
        b_f_tony = 0;
        container.innerHTML = '';
    } else {
        f_tony = 1;
        container.innerHTML = `<h2 style="color:black">
            Name: ${tony.name}<br>
            Alias: ${tony.avenger_name}<br>
            Weapon: ${tony.weapon}<br>
            Amount: $${tony.amt}
        </h2>`;
        let btn = document.createElement("button");
        btn.innerHTML = "BUY";
        btn.onclick = function() {
            if(b_f_tony === 1) {
                btn.innerHTML = "BUY";
                my_amt += tony.amt;
                b_f_tony = 0;
                arr = arr.filter(item => item !== "IRON MAN");
            } else {
                b_f_tony = 1;
                btn.innerHTML = "SELL";
                if((150- my_amt) + tony.amt > 175) {
            alert("You cannot spend more than 175!");
            return;
        }
        if(arr.includes("IRON MAN")) {
        alert("You already bought Iron man!");
        return; // stop execution
    }
                my_amt -= tony.amt;
                arr.push("IRON MAN");
            }
            updatePurchased();
            document.getElementById("tot_amt").innerHTML=`<h2>Total amount left:${my_amt}</h2>`;
        };
        container.appendChild(btn);
    }
    
}

// Black Widow
let nat = {
    name: "Natasha Romanoff",
    avenger_name: "Black Widow",
    weapon: "Martial Arts",
    amt: 45
};
let f_nat = 0;
let b_f_nat = 0;
function nat_button() {
    let container = document.getElementById("inner_text_nat");
    if(f_nat === 1) {
        f_nat = 0;
        b_f_nat = 0;
        container.innerHTML = '';
    } else {
        f_nat = 1;
        container.innerHTML = `<h2 style="color:white">
            Name: ${nat.name}<br>
            Alias: ${nat.avenger_name}<br>
            Weapon: ${nat.weapon}<br>
            Amount: $${nat.amt}
        </h2>`;
        let btn = document.createElement("button");
        btn.innerHTML = "BUY";
        btn.onclick = function() {
            if(b_f_nat === 1) {
                btn.innerHTML = "BUY";
                my_amt += nat.amt;
                b_f_nat = 0;
                arr = arr.filter(item => item !== "BLACK WIDOW");
            } else {
                b_f_nat = 1;
                btn.innerHTML = "SELL";
                if((150- my_amt) + nat.amt > 175) {
            alert("You cannot spend more than 175!");
            return; 
        }
        if(arr.includes("BLACK WIDOW")) {
        alert("You already bought black widow!");
        return; // stop execution
    }
                my_amt -= nat.amt;
                arr.push("BLACK WIDOW");
            }
            updatePurchased();
            document.getElementById("tot_amt").innerHTML=`<h2>Total amount left:${my_amt}</h2>`;
        };
        container.appendChild(btn);
    }
    
}

// Scarlet Witch
let scarlet = {
    name: "Wanda Maximoff",
    avenger_name: "Scarlet Witch",
    weapon: "Chaos Magic",
    amt: 55
};
let f_scarlet = 0;
let b_f_scarlet = 0;
function scarlet_button() {
    let container = document.getElementById("inner_text_scarlet");
    if(f_scarlet === 1) {
        f_scarlet = 0;
        b_f_scarlet = 0;
        container.innerHTML = '';
    } else {
        f_scarlet = 1;
        container.innerHTML = `<h2 style="color:black">
            Name: ${scarlet.name}<br>
            Alias: ${scarlet.avenger_name}<br>
            Weapon: ${scarlet.weapon}<br>
            Amount: $${scarlet.amt}
        </h2>`;
        let btn = document.createElement("button");
        btn.innerHTML = "BUY";
        btn.onclick = function() {
            if(b_f_scarlet === 1) {
                btn.innerHTML = "BUY";
                my_amt += scarlet.amt;
                b_f_scarlet = 0;
                arr = arr.filter(item => item !== "SCARLET WITCH");
            } else {
                b_f_scarlet = 1;
                btn.innerHTML = "SELL";
                if((150 - my_amt) + scarlet.amt > 175) {
            alert("You cannot spend more than 175!");
            return; // stop execution
        }
        if(arr.includes("SCARLEY WITCH")) {
        alert("You already bought scarlet witch!");
        return; // stop execution
    }
                my_amt -= scarlet.amt;
                arr.push("SCARLET WITCH");
            }
    updatePurchased();

            document.getElementById("tot_amt").innerHTML=`<h2>Total amount left:${my_amt}</h2>`;
        };
        container.appendChild(btn);
    }
}

// Thor
let thor = {
    name: "Thor Odinson",
    avenger_name: "Thor",
    weapon: "Mjolnir",
    amt: 65
};
let f_thor = 0;
let b_f_thor = 0;
function thor_button() {
    let container = document.getElementById("inner_text_thor");
    if(f_thor === 1) {
        f_thor = 0;
        b_f_thor = 0;
        container.innerHTML = '';
    } else {
        f_thor = 1;
        container.innerHTML = `<h2 style="color:black">
            Name: ${thor.name}<br>
            Alias: ${thor.avenger_name}<br>
            Weapon: ${thor.weapon}<br>
            Amount: $${thor.amt}
        </h2>`;
        let btn = document.createElement("button");
        btn.innerHTML = "BUY";
        btn.onclick = function() {
            if(b_f_thor === 1) {
                btn.innerHTML = "BUY";
                my_amt += thor.amt;
                b_f_thor = 0;
                arr = arr.filter(item => item !== "THOR");
            } else {
                b_f_thor = 1;
                btn.innerHTML = "SELL";
                if((150- my_amt) + thor.amt > 175) {
            alert("You cannot spend more than 175!");
            return; // stop execution
        }
        if(arr.includes("THOR")) {
        alert("You already bought thor!");
        return; // stop execution
    }
                my_amt -= thor.amt;
                arr.push("THOR");
            }
            updatePurchased();
            document.getElementById("tot_amt").innerHTML=`<h2>Total amount left:${my_amt}</h2>`;
        };
        container.appendChild(btn);
    }
    
}
function updatePurchased() {
    let container = document.getElementById("purchased");
    if(arr.length === 0) {
        container.innerHTML = "<h2>Purchased Heroes: None</h2>";
    } else {
        container.innerHTML = `<h2>Purchased Heroes: ${arr.join(", ")}</h2>`;
    }
}


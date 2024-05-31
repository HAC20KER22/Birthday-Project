var visited=false;

document.body.addEventListener("click",() =>{render_hb()});


var gifts = []


function render_hb()
{
    if (visited == false)
    {
        visited = true;
        var render1=`<div class="hb-text-1"><h1>Happy Birthday<h1></div>`;
        document.body.innerHTML=render1;
        setTimeout(() =>{render_p1()},4000)
    }
    
}

function render_p1()
{
    document.body.style.backgroundImage = "url('floral.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "50%";
    document.body.style.backgroundPosition = "left";
    var render2 = `
    <div class="main-body">
        <div class="hb-text-2">
            <span class="--i:1">H</span>
            <span class="--i:2">a</span>
            <span class="--i:3">p</span>
            <span class="--i:4">p</span>
            <span class="--i:5">y &nbsp;</span>
            <span class="--i:6">B</span>
            <span class="--i:7">i</span>
            <span class="--i:8">r</span>
            <span class="--i:9">t</span>
            <span class="--i:10">h</span>
            <span class="--i:11">d</span>
            <span class="--i:12">a</span>
            <span class="--i:13">y</span>
        </div>
        <div class="addressing-person">
            My Dear Sister
        </div>
        <img class="confetti1" src="confetti_mirror.png" onclick="confetti1_blast();">
        <img class="confetti2" src="confetti.png" onclick="confetti2_blast();">
        <div class="input-part">
            <input type="text" id="choices" placeholder="Type your wishes....">
            <input type="submit" value="&#10004;" onclick="add()" class="submit-button">
            <button class="spin" onclick="render_p2();">
                SPIN
            </button>
        </div>
        <div class="list-item">
            This is where you will get your options.....
        </div>
    </div>`
    document.body.innerHTML=render2
    confetti1_blast();
    confetti2_blast();
}

function add()
{
    gifts.push(document.getElementById("choices").value);
    document.getElementById("choices").value='';
    render_list();
}


function fireworks()
{
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
}

function School_pride()
{
    var end = Date.now() + (15 * 1000);

    // go Buckeyes!
    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());
}

function confetti1_blast()
{
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      confetti({
        angle: 135,
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { x: 0.2 }
      });
}

function confetti2_blast()
{
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      confetti({
        angle: 45,
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { x: 0.8 }
      });
}

function render_list()
{
    let totalHTML =``;
    var list = document.querySelector(".list-item");
    for(var i=0;i<gifts.length;i++)
    {
        const html = `
        <div>
        <div class="item"> ${gifts[i].toUpperCase()} </div>
        <button class=" cb cancel-button">&#10060;</button></div>`;
        totalHTML += html;
    }
    list.innerHTML = totalHTML;
    document.querySelectorAll(".cancel-button").forEach((cb,index)=>{
        cb.addEventListener('click', ()=>{
            gifts.splice(index,1);
            render_list();
        })
    })
    
}

function render_p2()
{
    document.body.innerHTML='';
    
    document.body.style.marginTop = "0px";
    document.body.style.backgroundImage = "url('background.webp')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "50%";
    document.body.style.backgroundPosition = "center";
    var render3 = 
    `
        <img src="gifts.png" class="gift" onclick="render_p3();">
    
    `;
    document.body.innerHTML=render3; 
}

function render_p3()
{
    document.body.style.backgroundImage = "url('openedgiftbox.png')";
    var num = Math.floor(Math.random()*(gifts.length));
    var finalgift = gifts[num];
    document.body.innerHTML=`
    <div class="final-gift">
        You get a ${finalgift}.<br>
        You can see it <a href="https://www.google.com/search?q=${finalgift}">here.</a>
    </div>
    `;
    fireworks();
    School_pride();

}
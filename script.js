const app = () => {
    const song = document.querySelector(".song")
    const play = document.querySelector(".play")
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video")
    const reset = document.querySelector(".reset-btn");
    const heading_boxes = document.querySelectorAll(".heading-box")
    
                
                    
    headingPopUp()
            
            
        

        
    
    play.addEventListener("click",function(e){
        checkPlaying(song);
    })
    reset.addEventListener("click",function(){
        if(song.pause()==false){
           checkPlaying(song)
        }
        
        video.pause();
        play.src = "./svg/play.svg";
        song.currentTime = 0;
        
        
    })

    
    const sounds = document.querySelectorAll(".sound-picker button");
    for(let i=0;i<sounds.length;i++){
        sounds[i].addEventListener("click",function(e){
            song.pause;
            video.pause;
            
            song.src = this.getAttribute("data-sound");
            video.src = this.getAttribute("data-video");
            song.play();
            checkPlaying(song);
        })
    }
    const timeDisplay = document.querySelector(".time-display");
    const timeSelect = document.querySelectorAll(".time-select button");
    const outlineLength = outline.getTotalLength();
    console.log(outlineLength)

    let fakeDuration = 600;
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    for(let i=0;i<timeSelect.length;i++){
        timeSelect[i].addEventListener("click",function(e){
            song.pause();
            song.currentTime = 0;
            play.src = "./svg/play.svg";
            let time = (this.getAttribute("data-time"));
            fakeDuration = time;
            timeDisplay.textContent= `${fakeDuration/60}:${fakeDuration%60}`

        })
    }
    

    const checkPlaying = song => {

        
            if(song.paused){
                
                song.play();
                video.play();
                play.src = "./svg/pause.svg"
            }
            else{
                song.pause();
                video.pause();
                play.src = "./svg/play.svg"
            }
            
        
        
    }
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let minutes = Math.floor(elapsed/60);
        let seconds = Math.floor(elapsed%60);
        
        let progress = outlineLength - (currentTime/fakeDuration)*outlineLength;
        outline.style.strokeDashoffset = progress;
        if(seconds<10){
            seconds = "0" + seconds ;
        }
        console.log(seconds);
        timeDisplay.textContent= `${minutes}:${seconds}`;

        if(currentTime >= fakeDuration){
            song.pause();
            song.currentTime = 0;
            play.src = "./svg/play.svg";
            video.pause();
        }
        
    }
}
app();

function headingPopUp(){
    let h1 = document.getElementById("one");
    h1.addEventListener("click",function(){
        let body = document.querySelector("body");
        let modal = document.createElement("div");
        modal.classList.add("modal-container")
        modal.innerHTML = `
         <div class="modal-heading">
        <h1>Restless sleep</h1>
    </div>
    <div class="modal-footer">
            
                <img class="modal-image" src = "./svg/night.png" />
            
            <div class="modal-text">
                For some, sleep comes almost as soon as their head hits the pillow. For others, the journey into dreamland isn’t quite so seamless. If you struggle to stay asleep throughout the night or if it takes hours of tossing and turning to get you there, you may be experiencing restless sleep — a common obstacle that can often be overcome with the right lifestyle and bedtime rituals.

                In theory, it’s easy to understand the importance of a good night’s sleep: resting well can drastically improve memory, energy, and mood — we know this from experience. In reality, achieving 8 uninterrupted hours of sleep often proves to be a surprisingly difficult task. From the constant stimulation and distractions on your phone to the frequent overflow of daily stress into our nighttime routines, restless sleep can happen to the best of us.
                <br><br>
                So if you’re trying to figure out how to stop tossing and turning at night, there are a number of rituals and mindfulness techniques that may help you find ways to fall asleep faster — and stay asleep longer

              
            </div>
            
    
    </div>`

    body.appendChild(modal);

    modal.animate({
        "height":"600px",
        "width":"1000px"
    },300)

    document.querySelector(".app").addEventListener("click",function(){
        modal.animate({
            "width":"0vw"
        },300);
        setTimeout(() => {
            modal.remove();
        }, 300);
        
    })

    })


    let h2 = document.querySelector(".heading-box.two");
    h2.addEventListener("click",function(){
        let body = document.querySelector("body");
        let modal = document.createElement("div");
        modal.classList.add("modal-container")
        modal.innerHTML = `
         <div class="modal-heading">
        <h1>How to Relieve Stress</h1>
    </div>
    <div class="modal-footer">
            
                <img class="modal-image" src = "./svg/stress.jpg" />
            
            <div class="modal-text">
            Sometimes life is just plain stressful. Maybe you’re on a tight deadline at work or you or someone in your family is having health problems — or maybe both are happening at the same time and it feels like you’re juggling 100 things at once. No matter the circumstances, you’re likely wondering how to relieve stress so you can lead a more peaceful and healthy life.

            While it’s not always possible to control everything that is happening to us or around us, it is possible to change the way we relate to those things that are happening. Softening the way we perceive stress and relating to it in a more accepting way is the first trick for how to deal with stressful feelings.
            <br><br>
            Now that we understand just how important it is to manage our body’s stress response, what are techniques we can use to reduce stress? One helpful approach for how to reduce stress is practicing mindfulness.

Mindfulness is the ability to be fully present and engaged in the moment. Mindfulness lets us step back from unpleasant thoughts and emotions (aka stress) that arise because of challenging situations. It lets us calm the mind, get in touch with our body, and gain perspective of the world around us.

People who incorporate mindfulness meditation into their lives often report a greater sense of positivity, patience, acceptance, and compassion, as well as lower levels of stress, sadness, and frustration. A study published in mindfulness journal PLOS ONE found that 10 days of practicing mindfulness meditation using the Headspace app reduced stress by 14%.
            </div>
            
    
    </div>`

    body.appendChild(modal);

    modal.animate({
        "height":"600px",
        "width":"1000px"
    },300)

    document.querySelector(".app").addEventListener("click",function(){
        modal.animate({
            "width":"0vw"
        },300);
        setTimeout(() => {
            modal.remove();
        }, 300);
        
    })

    })



    

    let h3 = document.querySelector(".heading-box.three");
    h3.addEventListener("click",function(){
        let body = document.querySelector("body");
        let modal = document.createElement("div");
        modal.classList.add("modal-container")
        modal.innerHTML = `
         <div class="modal-heading">
        <h1>How to relax</h1>
    </div>
    <div class="modal-footer">
            
                <img class="modal-image" src = "./svg/relax.jpg" />
            
            <div class="modal-text">
            Has someone ever told you to “just relax” when you’re in the middle of a stressful situation, and you thought to yourself, “Well, that’s easy for you to say!”
            <br><br>
            Relaxation actually isn’t easy (and doesn’t come naturally) for many of us. It’s hard not to get caught up in worry during our fast-paced, time-crunched days, whether from work deadlines, financial worries, or feeling like we don’t have enough quality time for family and friends — or for ourselves and our favorite activities.
            <br>
            Even on vacation, have you noticed that it can take a few days to unwind? Learning how to relax is a little like learning meditation — or taking a vacation, for that matter: we can’t just do it once or twice a year and expect it to work miracles! To get better at relaxation takes practice. Luckily, there are a number of easily accessible relaxation techniques and strategies to help us consciously relax the body and mind on a regular basis.
            <br>
            There are some scientifically proven relaxation techniques that counter the stress response with what’s called—not surprisingly—the “relaxation response,” in which our bodies stop releasing stress hormones, our heart rate slows, our breathing deepens, and we begin to feel a sense of calm (what a relief!). Some techniques, like deep breathing and relaxation meditation, are available to us pretty much anywhere and anytime we need it. Others, like spending time in nature, doing yoga or qigong, or even getting a massage, may take a little more planning.
            <br>
The idea is to begin incorporating relaxation skills and activities that promote calm and well-being into your daily life. Try a few out and see which ones work best for you.

</div>
            
    
    </div>`

    body.appendChild(modal);
    
    /*End*/

    modal.animate({
        "height":"600px",
        "width":"1000px"
    },300)

    document.querySelector(".app").addEventListener("click",function(){
        modal.animate({
            "width":"0vw"
        },300);
        setTimeout(() => {
            modal.remove();
        }, 300);
        
    })

    })



}
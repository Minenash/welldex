import AudioMotionAnalyzer from 'https://cdn.skypack.dev/audiomotion-analyzer';

const svg_play = `<svg class="player-icon" width="22px" height="22px" viewBox="-0.5 0 7 7" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-291, -3606)" fill="black">
          <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]"></path>
        </g>
      </svg>`
const svg_pause = `<svg class="player-icon" width="20px" height="20px" viewBox="-1 0 8 8" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-171, -3605)" fill="black">
          <path d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606" id="pause-[#1006]"></path>
        </g>
      </svg>`
const svg_mute = `<svg class="player-icon" width="28px" height="28px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5314 13.4197L21.0814 11.9697L22.4814 10.5697C22.7714 10.2797 22.7714 9.79969 22.4814 9.50969C22.1914 9.21969 21.7114 9.21969 21.4214 9.50969L20.0214 10.9097L18.5714 9.45969C18.2814 9.16969 17.8014 9.16969 17.5114 9.45969C17.2214 9.74969 17.2214 10.2297 17.5114 10.5197L18.9614 11.9697L17.4714 13.4597C17.1814 13.7497 17.1814 14.2297 17.4714 14.5197C17.6214 14.6697 17.8114 14.7397 18.0014 14.7397C18.1914 14.7397 18.3814 14.6697 18.5314 14.5197L20.0214 13.0297L21.4714 14.4797C21.6214 14.6297 21.8114 14.6997 22.0014 14.6997C22.1914 14.6997 22.3814 14.6297 22.5314 14.4797C22.8214 14.1897 22.8214 13.7197 22.5314 13.4197Z"/>
        <path d="M14.02 3.78168C12.9 3.16168 11.47 3.32168 10.01 4.23168L7.09 6.06168C6.89 6.18168 6.66 6.25168 6.43 6.25168H5.5H5C2.58 6.25168 1.25 7.58168 1.25 10.0017V14.0017C1.25 16.4217 2.58 17.7517 5 17.7517H5.5H6.43C6.66 17.7517 6.89 17.8217 7.09 17.9417L10.01 19.7717C10.89 20.3217 11.75 20.5917 12.55 20.5917C13.07 20.5917 13.57 20.4717 14.02 20.2217C15.13 19.6017 15.75 18.3117 15.75 16.5917V7.41168C15.75 5.69168 15.13 4.40168 14.02 3.78168Z"/>
      </svg>`
const svg_low = `<svg class="player-icon" width="28px" height="28px" viewBox="3.75 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.52 3.78168C16.4 3.16168 14.97 3.32168 13.51 4.23168L10.59 6.06168C10.39 6.18168 10.16 6.25168 9.93 6.25168H9H8.5C6.08 6.25168 4.75 7.58168 4.75 10.0017V14.0017C4.75 16.4217 6.08 17.7517 8.5 17.7517H9H9.93C10.16 17.7517 10.39 17.8217 10.59 17.9417L13.51 19.7717C14.39 20.3217 15.25 20.5917 16.05 20.5917C16.57 20.5917 17.07 20.4717 17.52 20.2217C18.63 19.6017 19.25 18.3117 19.25 16.5917V7.41168C19.25 5.69168 18.63 4.40168 17.52 3.78168Z"/>
      </svg>`
const svg_med = `<svg class="player-icon" width="28px" height="28px" viewBox="1.5 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.3284 16.7503C19.1684 16.7503 19.0184 16.7003 18.8784 16.6003C18.5484 16.3503 18.4784 15.8803 18.7284 15.5503C20.2984 13.4603 20.2984 10.5403 18.7284 8.45027C18.4784 8.12027 18.5484 7.65027 18.8784 7.40027C19.2084 7.15027 19.6784 7.22027 19.9284 7.55027C21.8984 10.1703 21.8984 13.8303 19.9284 16.4503C19.7884 16.6503 19.5584 16.7503 19.3284 16.7503Z"/>
        <path d="M15.3481 3.78168C14.2281 3.16168 12.7981 3.32168 11.3381 4.23168L8.41813 6.06168C8.21813 6.18168 7.98813 6.25168 7.75813 6.25168H6.82812H6.32812C3.90812 6.25168 2.57812 7.58168 2.57812 10.0017V14.0017C2.57812 16.4217 3.90812 17.7517 6.32812 17.7517H6.82812H7.75813C7.98813 17.7517 8.21813 17.8217 8.41813 17.9417L11.3381 19.7717C12.2181 20.3217 13.0781 20.5917 13.8781 20.5917C14.3981 20.5917 14.8981 20.4717 15.3481 20.2217C16.4581 19.6017 17.0781 18.3117 17.0781 16.5917V7.41168C17.0781 5.69168 16.4581 4.40168 15.3481 3.78168Z"/>
      </svg>`
const svg_high = `<svg class="player-icon" width="28px" height="28px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" >
        <path d="M18.0003 16.7503C17.8403 16.7503 17.6903 16.7003 17.5503 16.6003C17.2203 16.3503 17.1503 15.8803 17.4003 15.5503C18.9703 13.4603 18.9703 10.5403 17.4003 8.45027C17.1503 8.12027 17.2203 7.65027 17.5503 7.40027C17.8803 7.15027 18.3503 7.22027 18.6003 7.55027C20.5603 10.1703 20.5603 13.8303 18.6003 16.4503C18.4503 16.6503 18.2303 16.7503 18.0003 16.7503Z"/>
        <path d="M19.8284 19.2503C19.6684 19.2503 19.5184 19.2003 19.3784 19.1003C19.0484 18.8503 18.9784 18.3803 19.2284 18.0503C21.8984 14.4903 21.8984 9.51027 19.2284 5.95027C18.9784 5.62027 19.0484 5.15027 19.3784 4.90027C19.7084 4.65027 20.1784 4.72027 20.4284 5.05027C23.4984 9.14027 23.4984 14.8603 20.4284 18.9503C20.2884 19.1503 20.0584 19.2503 19.8284 19.2503Z"/>
        <path d="M14.02 3.78168C12.9 3.16168 11.47 3.32168 10.01 4.23168L7.09 6.06168C6.89 6.18168 6.66 6.25168 6.43 6.25168H5.5H5C2.58 6.25168 1.25 7.58168 1.25 10.0017V14.0017C1.25 16.4217 2.58 17.7517 5 17.7517H5.5H6.43C6.66 17.7517 6.89 17.8217 7.09 17.9417L10.01 19.7717C10.89 20.3217 11.75 20.5917 12.55 20.5917C13.07 20.5917 13.57 20.4717 14.02 20.2217C15.13 19.6017 15.75 18.3117 15.75 16.5917V7.41168C15.75 5.69168 15.13 4.40168 14.02 3.78168Z" />
      </svg>`

const player = document.getElementById('wrapper');
const vis = document.getElementById('vis');
const canvas = document.getElementById('testc');
const title = document.getElementById('title')
const file_name = document.getElementById('file-name')
const play_pause = document.getElementById('play_pause')
const volume_indicator = document.getElementById('volume_indicator')
const time = document.getElementById('time')
const dur = document.getElementById('dur')
const seek = document.getElementById('seek')
const volume = document.getElementById('volume')
const settings_button = document.getElementById('settings-button')

const v_panel = document.getElementById('settings');
const v_fps = document.getElementById('v_fps');
const v_enable = document.getElementById('v_enable');
const v_high = document.getElementById('v_high');
const v_max_fps = document.getElementById('v_max_fps');
const v_style = document.getElementById('v_style');
const v_colors = document.getElementById('v_colors');

let audioMotion;
createAudioMotion();
// if (!v_enable)
//     audioMotion.destroy()

function createAudioMotion() {
    audioMotion = new AudioMotionAnalyzer(vis, {
        fsElement: vis,
        canvas: document.getElementById('testc'),
        mode: 1,
        gradient: 'rainbow',
        lineWidth: 1.5,
        showPeaks: false,
        overlay: true,
        showBgColor: false,
        // bgAlpha: 0.1,
        showScaleX: false,
        smoothing: 0.8,
        start: false,
        lowRes: true,
        minFreq: 1,
        maxFreq: 20000,
        maxFPS: 60,
        connectSpeakers: false

    });
}

applyVisualizerSettings()

let audio = null;
let isPlaying = false;
let mutedVolume = -1;
let rAF = null;
let audios = new Map();
let audioContexts = new Map();
let showSettings = false;

const whilePlaying = () => {
    seek.value = Math.floor(audio.currentTime);
    time.textContent = formatTime(audio.currentTime)
    rAF = requestAnimationFrame(whilePlaying);

    if (v_enable.checked)
        v_fps.textContent = audioMotion.fps.toFixed(1) + " fps";
}

play_pause.innerHTML = svg_play
volume_indicator.innerHTML = svg_high

play_pause.addEventListener('click', () => {
    if (isPlaying) {
        play_pause.innerHTML = svg_play
        audio.pause()
        cancelAnimationFrame(rAF)
    }
    else {
        play_pause.innerHTML = svg_pause
        audio.play()
        requestAnimationFrame(whilePlaying)
        audioMotion.start()
    }
    isPlaying = !isPlaying;
})


seek.addEventListener('input', () => {
    time.textContent = formatTime(seek.value);
    if(!audio.paused) {
        cancelAnimationFrame(rAF);
    }
});

seek.addEventListener('change', () => {
    audio.currentTime = seek.value;
    if(!audio.paused) {
        requestAnimationFrame(whilePlaying);
    }
});

volume.addEventListener('input', () => {
    audio.volume = volume.value / 100.0
    mutedVolume = -1
    setVolumeIcon()
})
volume_indicator.addEventListener('click', () => {
    if (mutedVolume < 0) {
        mutedVolume = audio.volume;
        audio.volume = 0;
        volume.value = 0;
    }
    else {
        audio.volume = mutedVolume;
        volume.value = mutedVolume * 100;
        mutedVolume = -1;
    }
    setVolumeIcon()
})

function setVolumeIcon() {
    let v = volume.value
    if (v < 1) volume_indicator.innerHTML = svg_mute
    else if (v <= 25) volume_indicator.innerHTML = svg_low
    else if (v <= 75) volume_indicator.innerHTML = svg_med
    else volume_indicator.innerHTML = svg_high
}

function formatTime(secs) {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

function setAudio(name, file) {
    player.classList.add('show-panel')
    play_pause.disable = true
    seek.disable = true
    play_pause.innerHTML = svg_play
    audioMotion.disconnectInput()
    if (audio != null)
        audio.pause()

    audio = audios.has(file) ? audios.get(file) : new Audio("audio/" + file)
    let context = audioContexts.has(audio) ? audioContexts.get(audio) : audioMotion.audioCtx.createMediaElementSource(audio)
    console.log("Before: " + context.destination)
    audios.set(file, audio)
    audioContexts.set(audio, context)

    audio.play().then((a) => {
        audio.volume = volume.value / 100
        play_pause.disable = false
        seek.disable = false
        isPlaying = true;
        title.textContent = name
        file_name.textContent = file
        seek.value = audio.currentTime
        seek.max = Math.floor(audio.duration)
        dur.textContent = formatTime(audio.duration)
        setVolumeIcon()
        play_pause.innerHTML = svg_pause
        requestAnimationFrame(whilePlaying)

        if (v_enable.checked)
            audioMotion.connectInput(context)
        context.connect(audioMotion.audioCtx.destination, 0)
        console.log("Before: " + context.destination)
        audioMotion.start()
    })
    audio.addEventListener('ended', () => {
        cancelAnimationFrame(rAF)
        isPlaying = false;
        play_pause.innerHTML = svg_play
        seek.value = 0
        time.textContent = formatTime(0)
    });
}



function closeplayer() {
    audio.pause()
    player.classList.remove('show-panel')
    v_panel.classList.remove('show-panel')
    showSettings = false
}

settings_button.addEventListener('click', () => {
    showSettings = !showSettings
    if (showSettings) {
        v_panel.classList.add('show-panel')
        settings_button.classList.add("settings-open")
    }
    else {
        v_panel.classList.remove('show-panel')
        settings_button.classList.remove("settings-open")
    }
})


window.setAudio = setAudio
window.closeplayer = closeplayer


function applyVisualizerSettings() {
    audioMotion.lowRes = !v_high.checked
    audioMotion.maxFPS = v_max_fps.value
    audioMotion.colorMode = v_style.value
    audioMotion.gradient = v_colors.value
}
v_high.addEventListener('input', applyVisualizerSettings)
v_max_fps.addEventListener('input', applyVisualizerSettings)
v_style.addEventListener('input', applyVisualizerSettings)
v_colors.addEventListener('input', applyVisualizerSettings)

let timer;
v_enable.addEventListener('input', setEnable)
setEnable()

function setEnable() {
    if (!v_enable.checked) {
        audioMotion.disconnectInput()
        v_fps.textContent = ""
        if (timer != null)
            clearTimeout(timer)
        timer = setTimeout(() => {
            audioMotion.stop()
            canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height)
        }, 1000)

    }
    else if (audio != null) {
        if (timer != null)
            clearTimeout(timer)
        audioMotion.start()
        audioMotion.connectInput(audioContexts.get(audio))
    }
}




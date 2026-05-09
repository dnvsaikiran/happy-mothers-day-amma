// ============================================================
//  🎉 MULTI-ORIGIN CONFETTI BLAST (Movie Theatre Style)
// ============================================================
let celebAnimId = null;
let allParticles = [];

function launchCelebration(clickX, clickY) {
    const canvas = document.getElementById('celebration-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (celebAnimId) cancelAnimationFrame(celebAnimId);

    // Bright, vibrant party colors exactly like the image
    const colors = [
        '#FF3366', '#FF9933', '#FFCC00', '#00CCFF', '#CC33FF', '#00FF66', '#FF0033'
    ];

    // Origins: 4 corners + center + click point
    const origins = [
        { x: clickX, y: clickY },
        { x: canvas.width / 2, y: canvas.height / 2 },
        { x: 0, y: 0 },
        { x: canvas.width, y: 0 },
        { x: 0, y: canvas.height },
        { x: canvas.width, y: canvas.height }
    ];

    const newParticles = [];

    origins.forEach((origin, oi) => {
        const count = 300; // MASSIVE quantity (1800 total across 6 origins)
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 8 + Math.random() * 25; // Explosive blast

            newParticles.push({
                x: origin.x,
                y: origin.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - (Math.random() * 10), // Burst outwards and slightly up
                w: 6 + Math.random() * 12, // Rect width
                h: 6 + Math.random() * 12, // Rect height
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.2,
                flip: Math.random() * Math.PI * 2,
                flipSpeed: (Math.random() - 0.5) * 0.3, // Simulates 3D tumbling
                opacity: 1,
                drag: 0.94, // Slow down spread over time
                gravity: 0.15 + Math.random() * 0.25 // Light gravity, falls like paper
            });
        }
    });

    allParticles = allParticles.concat(newParticles);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Keep particles that are still on screen and visible
        allParticles = allParticles.filter(p => p.y < canvas.height + 50 && p.opacity > 0.01);

        allParticles.forEach(p => {
            p.vx *= p.drag;
            if (p.vy < 0) p.vy *= p.drag; // Drag affects upward movement heavily
            p.vy += p.gravity;
            
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;
            p.flip += p.flipSpeed;
            
            // Fade out eventually
            if (p.vy > 2) p.opacity -= 0.005;

            ctx.save();
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.fillStyle = p.color;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            // The secret to realistic 3D paper confetti without killing phone performance:
            ctx.scale(Math.abs(Math.cos(p.flip)), 1);

            // Draw Tile
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            
            ctx.restore();
        });

        if (allParticles.length > 0) {
            celebAnimId = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            celebAnimId = null;
        }
    }

    animate();
}


const mediaList = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
    "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
    "41.jpg", "42.jpg", "VID20251020195945.mp4", "VIDEO-2026-05-09-22-55-07.mp4", "Happy_Mothers_day.mp4"
];

// Custom magical flower backgrounds
const flowerBackgrounds = [
    "photos/annime1.png",
    "photos/annime2.png",
    "photos/annime3.png",
    "photos/annime4.png",
    "photos/annime5.png",
    "photos/annime6.png",
    "photos/annime7.png",
    "photos/annime8.png",
    "photos/annime9.png",
    "photos/annime10.png"
];

const teluguQuotes = [
    "అమ్మా... ఈ సృష్టిలో మోసమెరుగని ఒకే ఒక్క అక్షరం.",
    "నా ప్రాణానికి ప్రాణం పోసిన నా మొదటి గురువు నువ్వే.",
    "నా ప్రతి అడుగులో, ప్రతి శ్వాసలో నీ ఆశీర్వాదమే ఉంటుంది.",
    "నువ్వు పడే కష్టం, నాకు పంచే ప్రేమ వెలకట్టలేనివి.",
    "నేను కిందపడినప్పుడు నాకంటే ముందు నీ గుండె తల్లడిల్లుతుంది.",
    "నా చిన్న చిన్న సంతోషాలకే నువ్వు సంబరపడిపోతావు.",
    "నా కళ్లలో కన్నీళ్లు వస్తే, నీ కళ్లు వర్షిస్తాయి.",
    "నా నవ్వు కోసం నువ్వు పడే తపన అంతా ఇంతా కాదు.",
    "నీ చేతి ముద్దలో ఉన్న కమ్మదనం, పంచభక్ష్య పరమాన్నాలలో కూడా దొరకదు.",
    "నేను ఓడిపోయినప్పుడు, 'నేనున్నాను' అంటూ ధైర్యం చెప్పే సైన్యం నువ్వు.",
    "నీ ప్రేమకు హద్దులు లేవు, నీ సహనానికి అవధులు లేవు.",
    "ఎంత ఎదిగినా, నీ కళ్ళకు నేను ఎప్పటికీ చిన్న పిల్లాడినే.",
    "నీ అనురాగం ముందు ఈ ప్రపంచంలో ఏదీ సాటి రాదు.",
    "నా తప్పులను క్షమించి, నన్ను ఎప్పుడూ సరైన దారిలో నడిపిస్తావు.",
    "నేను సాధించిన ప్రతి విజయం వెనుక నీ త్యాగం ఉంటుంది.",
    "నీ దీవెన లేనిదే నా రోజు మొదలవదు.",
    "నన్ను కంటికి రెప్పలా కాపాడుకునే నా కవచం నువ్వే.",
    "నీ మమకారం నా జీవితానికి వెలుగునిచ్చే దీపం.",
    "నీ మాటలో ఉన్న తీయదనం, నా బాధలన్నింటినీ మాయం చేస్తుంది.",
    "నా కలలను నిజం చేయడానికి నువ్వు ఎన్నో నిద్రలేని రాత్రులు గడిపావు.",
    "ఈ లోకంలో స్వార్థం లేని ఒకే ఒక్క బంధం... మన బంధం.",
    "నీలా నన్ను ప్రేమించే వారు ఈ ప్రపంచంలో ఎవరూ లేరు.",
    "నీ చిరునవ్వు చూస్తే నా అలసట మొత్తం మాయమవుతుంది.",
    "నా భవిష్యత్తు కోసం నువ్వు చేసిన ప్రతి ప్రార్థన నాకు శ్రీరామరక్ష.",
    "నువ్వు పక్కన ఉంటే చాలు, ఎంతటి కష్టమైనా ఎదురించగలను.",
    "నా ఆనందం కోసమే నీ జీవితాన్ని ధారపోశావు.",
    "నీ అనుబంధం నా జన్మకు సార్థకతనిచ్చింది.",
    "నేను ఏడవకుండా చూసుకోవడమే నీ ఏకైక లక్ష్యం.",
    "నీ ఒడిలోనే నాకు నిజమైన ప్రశాంతత దొరుకుతుంది.",
    "నా అల్లరిని కూడా అమితంగా ప్రేమించే అమ్మ నువ్వు.",
    "నీ దయ, నీ జాలి, నా జీవితానికి ఆదర్శం.",
    "నా ప్రతి ఎదుగుదల వెనుక నీ అదృశ్య హస్తం ఉంది.",
    "నీ ప్రేమను వర్ణించడానికి ఈ ప్రపంచంలోని భాషలన్నీ సరిపోవు.",
    "నువ్వు లేని నా జీవితాన్ని ఊహించుకోలేను అమ్మా.",
    "నీ అడుగుజాడల్లో నడవడమే నాకెంతో గర్వకారణం.",
    "నా కోసం నువ్వు వదులుకున్న కోరికలెన్నో నాకు తెలుసు.",
    "ఈ జన్మకు నీ కడుపున పుట్టడం నా అదృష్టం.",
    "వచ్చే జన్మంటూ ఉంటే, మళ్ళీ నీ బిడ్డగానే పుట్టాలి.",
    "నీ రుణం తీర్చుకునే అవకాశం నాకు అనునిత్యం ఇవ్వాలి.",
    "నీ కళ్ళలో ఆనందం చూడటమే నా జీవిత లక్ష్యం.",
    "ఎప్పటికీ నువ్వు నాతోనే, సంతోషంగా, ఆరోగ్యంగా ఉండాలి.",
    "హ్యాపీ మదర్స్ డే అమ్మా! నిన్ను ప్రాణంగా ప్రేమిస్తున్నాను! ❤️"
];

const introScenes = [
    {
        id: "intro-1",
        text: "అమ్మా... మన అందమైన ప్రయాణం... ✨",
        bg: "photos/ghibli1.png",
        buttons: [
            { text: "నెక్స్ట్... ✨", next: "intro-2" }
        ]
    },
    {
        id: "intro-2",
        text: "ప్రతి అడుగులో తోడుగా...",
        bg: "photos/ghibli2.png",
        buttons: [
            { text: "నెక్స్ట్... ✨", next: "intro-3" }
        ]
    },
    {
        id: "intro-3",
        text: "నువ్వు లేనిదే ఏదీ లేదు...",
        bg: "photos/ghibli3.png",
        buttons: [
            { text: "నెక్స్ట్... ✨", next: "intro-4" }
        ]
    },
    {
        id: "intro-4",
        text: "దేవుడి గుడిలోకంటే, నీ ఒడిలో ఉన్నప్పుడే ప్రశాంతత.",
        bg: "photos/ghibli4.png",
        buttons: [
            { text: "నెక్స్ట్... ✨", next: "intro-5" }
        ]
    },
    {
        id: "intro-5",
        text: "ఈ చిరునవ్వులు ఇలాగే కలకాలం నిలవాలి.",
        bg: "photos/ghibli5.png",
        buttons: [
            { text: "నెక్స్ట్... ✨", next: "intro-6" }
        ]
    },
    {
        id: "intro-6",
        text: "ఇంతేనా అని అనుకుంటున్నావా? 🧐|కొంచెం ఓపిక పట్టు అమ్మా, అసలు సర్ప్రైజ్ ముందుంది ✨",
        bg: "bg2.png",
        buttons: [
            { text: "ఏంటది? 🤔", next: "start-gallery" }
        ]
    }
];

// Build gallery scenes array
const galleryScenes = mediaList.map((filename, index) => {
    return {
        id: `gallery-${index}`,
        mediaUrl: `photos/${filename}`,
        type: filename.endsWith('.mp4') ? 'video' : 'image',
        text: teluguQuotes[index % teluguQuotes.length],
        bgIndex: index % flowerBackgrounds.length
    };
});

let isTyping = false;
let audioPlaying = false;
let galleryIndex = 0;
let slideshowTimeout;

// DOM Elements
const bgLayer = document.getElementById('bg-layer');
const appContainer = document.getElementById('app-container');

// Intro Elements
const introCard = document.getElementById('intro-card');
const introText = document.getElementById('intro-text');
const introButtons = document.getElementById('intro-buttons');

// Gallery Elements
const galleryContainer = document.getElementById('gallery-container');
const galleryText = document.getElementById('gallery-text');
const galleryImage = document.getElementById('scene-image');
const galleryVideo = document.getElementById('scene-video');
const memoryCardWrapper = document.getElementById('memory-card-wrapper');
const galleryNextBtn = document.getElementById('gallery-next-btn');

// Final Scene Elements
const finalScene = document.getElementById('final-scene');
const restartBtn = document.getElementById('restart-btn');

const bgMusic = document.getElementById('bg-music');
const musicToggleBtn = document.getElementById('music-toggle');
const particlesContainer = document.getElementById('particles');

// Initialize
function init() {
    createParticles();
    loadIntroScene(introScenes[0]);
}

// Particles
function createParticles() {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 8 + 4;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particlesContainer.appendChild(particle);
    }
}

// Typewriter
function typeWriter(element, textLines, callback) {
    element.innerHTML = '';
    let currentLine = 0;
    let currentChar = 0;
    let lines = textLines.split('|');

    function type() {
        if (currentLine < lines.length) {
            if (currentChar === 0 && currentLine > 0) {
                element.innerHTML += '<br><br>';
            }
            if (currentChar < lines[currentLine].length) {
                element.innerHTML += lines[currentLine].charAt(currentChar);
                currentChar++;
                setTimeout(type, 50);
            } else {
                currentLine++;
                currentChar = 0;
                setTimeout(type, 300); // Pause between lines
            }
        } else {
            isTyping = false;
            if (callback) callback();
        }
    }
    type();
}

// Intro Logic
function loadIntroScene(scene) {
    if (isTyping) return;
    isTyping = true;

    galleryContainer.classList.add('hidden');
    introCard.classList.remove('hidden');
    introButtons.classList.add('hidden');
    introButtons.innerHTML = '';
    
    bgLayer.style.backgroundImage = `url('${scene.bg}')`;

    typeWriter(introText, scene.text, () => {
        scene.buttons.forEach((btnInfo, idx) => {
            const btn = document.createElement('button');
            btn.className = 'pill-btn';
            btn.innerHTML = btnInfo.text;
            btn.style.opacity = '0';
            btn.style.animation = `fadeInUp 0.5s ease forwards ${idx * 0.2}s`;
            
            btn.addEventListener('click', (e) => {
                // 🎉 Launch celebration burst at click position
                launchCelebration(e.clientX, e.clientY);
                if (!audioPlaying && (btnInfo.next === "intro-3" || btnInfo.next === "start-gallery")) {
                    bgMusic.play().catch(e => console.log("Audio play blocked"));
                    audioPlaying = true;
                }
                if (btnInfo.next === "start-gallery") {
                    introCard.classList.add('hidden');
                    startGallery();
                } else {
                    const nextScene = introScenes.find(s => s.id === btnInfo.next);
                    loadIntroScene(nextScene);
                }
            });
            introButtons.appendChild(btn);
        });
        introButtons.classList.remove('hidden');
    });
}

// Gallery Logic
function startGallery() {
    galleryContainer.classList.remove('hidden');
    galleryIndex = 0;
    loadGalleryScene();
}

function loadGalleryScene() {
    clearTimeout(slideshowTimeout);
    if (galleryIndex >= galleryScenes.length) {
        showFinalScene();
        return;
    }

    const scene = galleryScenes[galleryIndex];
    isTyping = true;
    
    galleryNextBtn.classList.add('hidden');
    galleryText.innerHTML = '';

    // Cycle Flower Backgrounds dynamically
    bgLayer.style.backgroundImage = `url('${flowerBackgrounds[scene.bgIndex]}')`;

    // Handle Media
    memoryCardWrapper.classList.remove('visible');
    
    setTimeout(() => {
        if (scene.type === 'image') {
            galleryVideo.classList.add('hidden');
            galleryVideo.pause();
            galleryImage.src = scene.mediaUrl;
            galleryImage.classList.remove('hidden');
            
            // Auto next for image
            slideshowTimeout = setTimeout(() => {
                nextGalleryScene();
            }, 6000); // 6 seconds per photo

        } else {
            galleryImage.classList.add('hidden');
            galleryVideo.src = scene.mediaUrl;
            galleryVideo.classList.remove('hidden');
            galleryVideo.play().catch(e => console.log("Autoplay blocked"));
            
            // Pause background music for videos
            if (audioPlaying) {
                bgMusic.pause();
                audioPlaying = false;
            }
            
            // Auto next when video ends
            galleryVideo.onended = () => {
                nextGalleryScene();
            };
        }
        
        memoryCardWrapper.classList.add('visible');
        
        typeWriter(galleryText, scene.text + " ✨", () => {
            // Show skip button after typing
            galleryNextBtn.classList.remove('hidden');
        });

    }, 500);
}

function nextGalleryScene() {
    if (!isTyping) {
        galleryText.classList.add('fade-out');
        galleryNextBtn.classList.add('hidden');
        memoryCardWrapper.classList.remove('visible');
        galleryIndex++;
        setTimeout(() => {
            galleryText.classList.remove('fade-out');
            loadGalleryScene();
        }, 500);
    }
}

galleryNextBtn.addEventListener('click', (e) => {
    // 🎉 Launch celebration burst at click position
    launchCelebration(e.clientX, e.clientY);
    clearTimeout(slideshowTimeout);
    if (galleryScenes[galleryIndex] && galleryScenes[galleryIndex].type === 'video') {
        galleryVideo.pause();
    }
    nextGalleryScene();
});

// Final Scene
function showFinalScene() {
    galleryContainer.classList.add('hidden');
    appContainer.classList.add('hidden'); // Hide the main app container so final scene moves up
    finalScene.classList.remove('hidden');
    bgLayer.style.backgroundImage = `url('${flowerBackgrounds[0]}')`; 

    // Resume background music for the final message
    if (!audioPlaying) {
        bgMusic.play().catch(e => console.log("Audio play blocked"));
        audioPlaying = true;
    }
    initClock();
}

// Analog Clock Logic
function initClock() {
    const hourHand = document.getElementById('hourHand');
    const minHand = document.getElementById('minHand');
    const secHand = document.getElementById('secHand');

    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondsDegrees = ((seconds / 60) * 360);
        const minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6);
        const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30);

        secHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
        minHand.style.transform = `translateX(-50%) rotate(${minsDegrees}deg)`;
        hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();
}

restartBtn.addEventListener('click', () => {
    finalScene.classList.add('hidden');
    appContainer.classList.remove('hidden');
    loadIntroScene(introScenes[0]);
});

// Audio Toggle
musicToggleBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(e => console.log("No audio source"));
        audioPlaying = true;
        musicToggleBtn.style.opacity = '1';
    } else {
        bgMusic.pause();
        audioPlaying = false;
        musicToggleBtn.style.opacity = '0.5';
    }
});

window.onload = init;

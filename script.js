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
        const count = 167; // 167 * 6 = ~1000 total particles
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

    allParticles = newParticles; // Instantly clear old particles to prevent freezing the phone

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
    "41.jpg", "42.jpg", "video.mp4", "VIDEO-2026-05-09-22-55-07.mp4", "Happy_Mothers_day.mp4"
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
    "జనవరి 12, 2025... కిమ్స్ హాస్పిటల్, హైదరాబాద్.",
    "మన జీవితాలను మార్చేయబోతున్న ఆ రోజు... నాన్న, నేను ఎదురుచూస్తున్నాము.",
    "డాక్టర్ గారు ఆ కఠోరమైన నిజాన్ని చెప్పారు: నాన్నకు క్యాన్సర్ అని.",
    "ఆ విషయం నీకు అర్థం కాకూడదని నేను డాక్టర్ తో కావాలనే ఇంగ్లీష్ లో మాట్లాడాను.",
    "రాబోయే 20 రోజుల పాటు ఆ నిజాన్ని నీ నుండి దాచాను అమ్మా.",
    "ఆడవాళ్లు ఎమోషనల్ అని, ఈ వార్త వింటే నువ్వు తట్టుకోలేక ఏడుస్తావని అనుకున్నాను.",
    "నీ సున్నితమైన మనసును కాపాడాలన్నదే నా తపన.",
    "కానీ 20 రోజుల తర్వాత ఆ నిజం నీకు తెలిసిపోయింది.",
    "నువ్వు ఏడ్చావు నిజమే... కానీ అది కొద్ది క్షణాలు మాత్రమే.",
    "ఆ తర్వాత నీలో నేను చూసింది కన్నీళ్లు కాదు, ఒక అంతులేని ధైర్యం!",
    "ఏమైనా సరే నాన్నను కాపాడుకోవాలన్న నీ పట్టుదల నన్ను ఆశ్చర్యపరిచింది.",
    "మనకు ఉన్నది కేవలం 3 నెలల సమయం మాత్రమే.",
    "తమ్ముడికి సీఏ ఇంటర్ (CA Inter) ఎగ్జామ్స్ ఉన్నాయని వాడికీ ఈ విషయం చెప్పలేదు.",
    "ఆ భారం అంతా నీ గుండెల్లోనే దాచుకుని హాస్పిటల్స్ చుట్టూ తిరిగావు.",
    "అప్పుడు చూశాను అమ్మా... నీలో దాగున్న ఒక సరికొత్త యోధురాలిని!",
    "చిన్నప్పటి నుండి నాకు భగత్ సింగ్, అల్లూరి సీతారామరాజు అంటే ఇన్స్పిరేషన్.",
    "కానీ ఆ క్షణం నుండి నా నిజమైన ఇన్స్పిరేషన్ నువ్వే అయ్యావు అమ్మా!",
    "నాన్న కూడా అంత ధైర్యంగా లేరేమో, కానీ నువ్వు మాత్రం అడుగు వెనక్కి వేయలేదు.",
    "3 నెలల నరకం తర్వాత... దేవుడి దయ వల్ల మనకు ఆర్గాన్ (Organ) దొరికింది.",
    "సర్జరీ కోసం హుటాహుటిన వైజాగ్ కిమ్స్ (KIMS) కు వెళ్ళాము.",
    "అక్కడ రోజుకు రూ.12,000 కట్టే స్థోమత మనకు లేదు.",
    "నాన్న కోసం ఆ హాస్పిటల్ వెయిటింగ్ హాల్ నే నువ్వు ఇల్లుగా మార్చుకున్నావు.",
    "చెప్పులు విడిచే చోట, నేల మీద నువ్వు పడుకున్న ఆ దృశ్యం...",
    "నా జీవితంలో నేను ఎప్పటికీ మర్చిపోలేను అమ్మా.",
    "ఆ క్షణంలో నిన్ను చూశాక నాలో ఒక తెలియని తెగింపు వచ్చింది.",
    "జీవితంలో ఎలాంటి కష్టాన్నైనా ఎదుర్కోగలను అన్న నమ్మకం కలిగింది.",
    "ఇన్సూరెన్స్ కోసం పోరాడే ధైర్యాన్ని, ఆ తెగింపును నీవే నాకు ఇచ్చావు.",
    "నీ అండ చూసుకునే ఆ యుద్ధంలో నేను ముందుకెళ్ళాను.",
    "నీ ధైర్యం, ఆ శ్రీకృష్ణుడి దయ వల్ల నాన్నను ఆ గండం నుండి బయటపడేశాము.",
    "నాన్న ప్రాణాలతో తిరిగి వచ్చారంటే దానికి కారణం నీ పోరాటమే!",
    "నిన్ను చూస్తుంటే నాకు నేను చాలా అదృష్టవంతుడిగా అనిపిస్తుంది.",
    "ఇంత అద్భుతమైన, ధైర్యవంతురాలైన తల్లిని నాకు ఇచ్చినందుకు...",
    "ఆ కృష్ణయ్యకు నేను రోజూ రెండు చేతులెత్తి దండం పెడుతున్నాను.",
    "చూడటానికి చిన్నగా, చాలా క్యూట్ గా ఉంటావు కానీ...",
    "నీలో ఉన్న ధైర్యం ముందు కొండలైనా తలవంచాల్సిందే!",
    "నీలాంటి తల్లి దొరకడం నా పూర్వజన్మ సుకృతం.",
    "ఈ జీవితంలో నేను నీకు ఏది ఇచ్చినా అది తక్కువే అవుతుంది.",
    "కానీ నా ప్రాణం ఉన్నంత వరకు నిన్ను కంటికి రెప్పలా చూసుకుంటాను.",
    "నువ్వు పడిన కష్టాలన్నీ ఇక తీరిపోయాయి అమ్మా.",
    "ఇకపై నీ కళ్లలో నీరు కాదు, కేవలం ఆనందభాష్పాలు మాత్రమే చూడాలి.",
    "నా ప్రపంచం, నా దైవం, నా సర్వస్వం నువ్వే అమ్మా...",
    "ఎప్పటికీ ఇలాగే నవ్వుతూ ఉండు. హ్యాపీ మదర్స్ డే అమ్మా! ❤️"
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
        text: index < teluguQuotes.length ? teluguQuotes[index] : "",
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
        
        typeWriter(galleryText, scene.text ? scene.text + " ✨" : "", () => {
            // Show skip button after typing
            galleryNextBtn.classList.remove('hidden');
        });

    }, 500);
}

let isTransitioning = false;

function nextGalleryScene() {
    if (!isTyping && !isTransitioning) {
        isTransitioning = true;
        galleryText.classList.add('fade-out');
        galleryNextBtn.classList.add('hidden');
        memoryCardWrapper.classList.remove('visible');
        galleryIndex++;
        setTimeout(() => {
            galleryText.classList.remove('fade-out');
            loadGalleryScene();
            isTransitioning = false;
        }, 500);
    }
}

galleryNextBtn.addEventListener('click', (e) => {
    if (isTyping || isTransitioning) return;
    
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

    const finalMsgElement = document.getElementById('final-message-telugu');
    const msg = "నేను నీకు దూరంగా ఉన్నా నిన్ను చాలా మిస్ అవుతున్నాను... ఎప్పుడూ నీ గురించే ఆలోచిస్తుంటాను.|నీ చిరునవ్వు నా రోజును సంతోషంగా మారుస్తుంది, కాబట్టి ఎప్పుడూ నవ్వుతూనే ఉండు.|నేను ఫోన్ చేసినప్పుడు ఫోన్ ఎత్తు, నీ ఫోన్ ఎప్పుడూ నీ దగ్గరే ఉంచుకో! 😡😭";
    
    isTyping = true;
    typeWriter(finalMsgElement, msg, () => {
        // Typing finished
    });
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

// Add tiny pink heart on click/touch anywhere
function createTouchHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'touch-heart';
    heart.innerHTML = '💖';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 1000);
}

document.addEventListener('click', (e) => {
    createTouchHeart(e.clientX, e.clientY);
});

document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
        createTouchHeart(e.touches[0].clientX, e.touches[0].clientY);
    }
}, {passive: true});

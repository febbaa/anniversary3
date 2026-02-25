/**
 * ========================================
 * ROMANTIC ANNIVERSARY WEBSITE SCRIPT
 * ========================================
 * All functionality for the love scrapbook website
 * 
 * HOW TO CUSTOMIZE:
 * 1. Gallery Media: Update the galleryItems array below
 * 2. Relationship Start Date: Update the relationshipStartDate variable
 * 3. Music: Update audio file path in index.html
 * 
 * ========================================
 */

// ========================================
// CONFIGURATION - Easy to Customize
// ========================================

/**
 * ========================================
 * GALLERY MEDIA - All your photos and videos
 * ========================================
 */

const galleryItems = [
    // Videos (placed first for priority)
    { type: 'video', src: 'assets/media/videos/2.mp4', caption: 'Video Memory 1' },
    { type: 'video', src: 'assets/media/videos/40.mp4', caption: 'Video Memory 2' },
    { type: 'video', src: 'assets/media/videos/65.mp4', caption: 'Video Memory 3' },
    { type: 'video', src: 'assets/media/videos/68.mp4', caption: 'Video Memory 4' },
    { type: 'video', src: 'assets/media/videos/70.mp4', caption: 'Video Memory 5' },
    { type: 'video', src: 'assets/media/videos/71.mp4', caption: 'Video Memory 6' },
    
    // Photos
    { type: 'image', src: 'assets/media/photos/1.jpg', caption: 'Memory 1' },
    { type: 'image', src: 'assets/media/photos/3.jpg', caption: 'Memory 3' },
    { type: 'image', src: 'assets/media/photos/4.jpg', caption: 'Memory 4' },
    { type: 'image', src: 'assets/media/photos/5.jpg', caption: 'Memory 5' },
    { type: 'image', src: 'assets/media/photos/6.jpg', caption: 'Memory 6' },
    { type: 'image', src: 'assets/media/photos/7.jpg', caption: 'Memory 7' },
    { type: 'image', src: 'assets/media/photos/8.jpg', caption: 'Memory 8' },
    { type: 'image', src: 'assets/media/photos/9.jpg', caption: 'Memory 9' },
    { type: 'image', src: 'assets/media/photos/10.jpg', caption: 'Memory 10' },
    { type: 'image', src: 'assets/media/photos/11.jpg', caption: 'Memory 11' },
    { type: 'image', src: 'assets/media/photos/12.jpg', caption: 'Memory 12' },
    { type: 'image', src: 'assets/media/photos/13.jpg', caption: 'Memory 13' },
    { type: 'image', src: 'assets/media/photos/14.jpg', caption: 'Memory 14' },
    { type: 'image', src: 'assets/media/photos/15.jpg', caption: 'Memory 15' },
    { type: 'image', src: 'assets/media/photos/16.jpg', caption: 'Memory 16' },
    { type: 'image', src: 'assets/media/photos/17.jpg', caption: 'Memory 17' },
    { type: 'image', src: 'assets/media/photos/18.jpg', caption: 'Memory 18' },
    { type: 'image', src: 'assets/media/photos/19.jpg', caption: 'Memory 19' },
    { type: 'image', src: 'assets/media/photos/20.jpg', caption: 'Memory 20' },
    { type: 'image', src: 'assets/media/photos/21.jpg', caption: 'Memory 21' },
    { type: 'image', src: 'assets/media/photos/22.jpg', caption: 'Memory 22' },
    { type: 'image', src: 'assets/media/photos/23.jpg', caption: 'Memory 23' },
    { type: 'image', src: 'assets/media/photos/24.jpg', caption: 'Memory 24' },
    { type: 'image', src: 'assets/media/photos/25.jpg', caption: 'Memory 25' },
    { type: 'image', src: 'assets/media/photos/26.jpg', caption: 'Memory 26' },
    { type: 'image', src: 'assets/media/photos/27.jpg', caption: 'Memory 27' },
    { type: 'image', src: 'assets/media/photos/28.jpg', caption: 'Memory 28' },
    { type: 'image', src: 'assets/media/photos/29.jpg', caption: 'Memory 29' },
    { type: 'image', src: 'assets/media/photos/30.jpg', caption: 'Memory 30' },
    { type: 'image', src: 'assets/media/photos/31.jpg', caption: 'Memory 31' },
    { type: 'image', src: 'assets/media/photos/32.jpg', caption: 'Memory 32' },
    { type: 'image', src: 'assets/media/photos/33.jpg', caption: 'Memory 33' },
    { type: 'image', src: 'assets/media/photos/34.jpg', caption: 'Memory 34' },
    { type: 'image', src: 'assets/media/photos/35.jpg', caption: 'Memory 35' },
    { type: 'image', src: 'assets/media/photos/36.jpg', caption: 'Memory 36' },
    { type: 'image', src: 'assets/media/photos/37.jpg', caption: 'Memory 37' },
    { type: 'image', src: 'assets/media/photos/38.jpg', caption: 'Memory 38' },
    { type: 'image', src: 'assets/media/photos/39.jpg', caption: 'Memory 39' },
    { type: 'image', src: 'assets/media/photos/41.jpg', caption: 'Memory 41' },
    { type: 'image', src: 'assets/media/photos/42.jpg', caption: 'Memory 42' },
    { type: 'image', src: 'assets/media/photos/43.jpg', caption: 'Memory 43' },
    { type: 'image', src: 'assets/media/photos/44.jpg', caption: 'Memory 44' },
    { type: 'image', src: 'assets/media/photos/45.jpg', caption: 'Memory 45' },
    { type: 'image', src: 'assets/media/photos/46.png', caption: 'Memory 46' },
    { type: 'image', src: 'assets/media/photos/47.jpg', caption: 'Memory 47' },
    { type: 'image', src: 'assets/media/photos/48.jpg', caption: 'Memory 48' },
    { type: 'image', src: 'assets/media/photos/49.jpg', caption: 'Memory 49' },
    { type: 'image', src: 'assets/media/photos/50.jpg', caption: 'Memory 50' },
    { type: 'image', src: 'assets/media/photos/51.jpg', caption: 'Memory 51' },
    { type: 'image', src: 'assets/media/photos/52.jpg', caption: 'Memory 52' },
    { type: 'image', src: 'assets/media/photos/53.jpg', caption: 'Memory 53' },
    { type: 'image', src: 'assets/media/photos/54.jpeg', caption: 'Memory 54' },
    { type: 'image', src: 'assets/media/photos/55.jpg', caption: 'Memory 55' },
    { type: 'image', src: 'assets/media/photos/56.jpg', caption: 'Memory 56' },
    { type: 'image', src: 'assets/media/photos/57.jpg', caption: 'Memory 57' },
    { type: 'image', src: 'assets/media/photos/58.jpg', caption: 'Memory 58' },
    { type: 'image', src: 'assets/media/photos/59.jpg', caption: 'Memory 59' },
    { type: 'image', src: 'assets/media/photos/60.jpg', caption: 'Memory 60' },
    { type: 'image', src: 'assets/media/photos/61.jpg', caption: 'Memory 61' },
    { type: 'image', src: 'assets/media/photos/62.jpg', caption: 'Memory 62' },
    { type: 'image', src: 'assets/media/photos/63.jpg', caption: 'Memory 63' },
    { type: 'image', src: 'assets/media/photos/64.jpg', caption: 'Memory 64' },
    { type: 'image', src: 'assets/media/photos/66.jpg', caption: 'Memory 66' },
    { type: 'image', src: 'assets/media/photos/67.jpg', caption: 'Memory 67' },
    { type: 'image', src: 'assets/media/photos/69.jpg', caption: 'Memory 69' },
    { type: 'image', src: 'assets/media/photos/72.jpg', caption: 'Memory 72' },
    { type: 'image', src: 'assets/media/photos/73.jpg', caption: 'Memory 73' },
    { type: 'image', src: 'assets/media/photos/74.jpg', caption: 'Memory 74' },
    { type: 'image', src: 'assets/media/photos/75.jpg', caption: 'Memory 75' },
    { type: 'image', src: 'assets/media/photos/76.jpg', caption: 'Memory 76' },
    { type: 'image', src: 'assets/media/photos/77.jpg', caption: 'Memory 77' },
    { type: 'image', src: 'assets/media/photos/78.jpg', caption: 'Memory 78' },
    { type: 'image', src: 'assets/media/photos/79.jpg', caption: 'Memory 79' },
    { type: 'image', src: 'assets/media/photos/80.jpg', caption: 'Memory 80' },
    { type: 'image', src: 'assets/media/photos/81.jpg', caption: 'Memory 81' },
    { type: 'image', src: 'assets/media/photos/82.jpg', caption: 'Memory 82' },
    { type: 'image', src: 'assets/media/photos/83.jpg', caption: 'Memory 83' },
    { type: 'image', src: 'assets/media/photos/84.jpg', caption: 'Memory 84' },
    { type: 'image', src: 'assets/media/photos/85.jpg', caption: 'Memory 85' },
    { type: 'image', src: 'assets/media/photos/86.jpg', caption: 'Memory 86' },
    { type: 'image', src: 'assets/media/photos/87.jpg', caption: 'Memory 87' },
    { type: 'image', src: 'assets/media/photos/88.jpg', caption: 'Memory 88' },
    { type: 'image', src: 'assets/media/photos/89.jpg', caption: 'Memory 89' },
    { type: 'image', src: 'assets/media/photos/90.jpg', caption: 'Memory 90' },
    { type: 'image', src: 'assets/media/photos/91.jpg', caption: 'Memory 91' },
    { type: 'image', src: 'assets/media/photos/92.jpg', caption: 'Memory 92' },
    { type: 'image', src: 'assets/media/photos/93.jpg', caption: 'Memory 93' },
    { type: 'image', src: 'assets/media/photos/94.jpg', caption: 'Memory 94' },
    { type: 'image', src: 'assets/media/photos/95.jpg', caption: 'Memory 95' },
    { type: 'image', src: 'assets/media/photos/96.jpg', caption: 'Memory 96' },
];

/**
 * ========================================
 * RELATIONSHIP START DATE
 * Update this to your relationship start date
 * Format: 'YYYY-MM-DD' or 'Month DD, YYYY'
 * ========================================
 */
const relationshipStartDate = new Date('February 26, 2023');

// ========================================
// DOM ELEMENTS
// ========================================
const musicModal = document.getElementById('music-modal');
const btnPlayMusic = document.getElementById('btn-play-music');
const btnNoMusic = document.getElementById('btn-no-music');
const backgroundMusic = document.getElementById('background-music');
const floatingMusicBtn = document.getElementById('floating-music-btn');
const backToTopBtn = document.getElementById('back-to-top');
const lightbox = document.getElementById('lightbox');
const lightboxMediaContainer = document.getElementById('lightbox-media-container');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const galleryContainer = document.getElementById('gallery-container');
const navDots = document.querySelectorAll('.nav-dot');
const navScrollBtns = document.querySelectorAll('.nav-scroll-btn');
const scrollIndicator = document.querySelector('.hero-scroll-indicator');
const particlesContainer = document.getElementById('particles-container');

// ========================================
// STATE
// ========================================
let isMusicPlaying = false;
let currentLightboxIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let musicFadeInterval = null;
let musicPausedForVideo = false;
let musicVolumeBeforeFade = 0.7;
let isFading = false; // Prevent multiple fades

// ========================================
// AUDIO FADE UTILITIES
// ========================================
function fadeOutMusic(callback) {
    if (isFading || !backgroundMusic) {
        if (callback) callback();
        return;
    }
    
    // Store current state before fading
    musicPausedForVideo = isMusicPlaying;
    musicVolumeBeforeFade = backgroundMusic.volume || 0.7;
    
    if (!isMusicPlaying) {
        if (callback) callback();
        return;
    }
    
    isFading = true;
    const startVolume = backgroundMusic.volume;
    const fadeSteps = 20;
    const fadeTime = 500;
    const stepTime = fadeTime / fadeSteps;
    let currentStep = 0;
    
    musicFadeInterval = setInterval(() => {
        currentStep++;
        const newVolume = startVolume * (1 - currentStep / fadeSteps);
        backgroundMusic.volume = Math.max(0, newVolume);
        
        if (currentStep >= fadeSteps) {
            clearInterval(musicFadeInterval);
            backgroundMusic.pause();
            backgroundMusic.volume = musicVolumeBeforeFade;
            isFading = false;
            if (callback) callback();
        }
    }, stepTime);
}

function fadeInMusic() {
    if (isFading || !backgroundMusic) return;
    
    // Only resume if music was paused for video
    if (!musicPausedForVideo) return;
    
    isFading = true;
    musicPausedForVideo = false;
    const targetVolume = musicVolumeBeforeFade;
    backgroundMusic.volume = 0;
    
    backgroundMusic.play()
        .then(() => {
            isMusicPlaying = true;
            floatingMusicBtn.classList.add('playing');
            
            const fadeSteps = 20;
            const fadeTime = 500;
            const stepTime = fadeTime / fadeSteps;
            let currentStep = 0;
            
            musicFadeInterval = setInterval(() => {
                currentStep++;
                const newVolume = targetVolume * (currentStep / fadeSteps);
                backgroundMusic.volume = Math.min(targetVolume, newVolume);
                
                if (currentStep >= fadeSteps) {
                    clearInterval(musicFadeInterval);
                    backgroundMusic.volume = targetVolume;
                    isFading = false;
                }
            }, stepTime);
        })
        .catch(error => {
            console.log('Could not play audio');
            isFading = false;
            musicPausedForVideo = false;
        });
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initMusicModal();
    initGallery();
    initSmoothScroll();
    initBackToTop();
    initScrollReveal();
    initParticles();
    initRelationshipCounter();
    initNavDots();
    initLightbox();
});

// ========================================
// MUSIC MODAL
// ========================================
function initMusicModal() {
    // Always show modal on page load
    setTimeout(() => {
        musicModal.classList.add('active');
    }, 500);
    
    // Play music button
    btnPlayMusic.addEventListener('click', () => {
        playMusic();
        closeModal();
    });
    
    // No music button
    btnNoMusic.addEventListener('click', () => {
        closeModal();
    });
    
    // Floating music button
    floatingMusicBtn.addEventListener('click', toggleMusic);
}

function playMusic() {
    backgroundMusic.play()
        .then(() => {
            isMusicPlaying = true;
            floatingMusicBtn.classList.add('playing', 'visible');
        })
        .catch(error => {
            console.log('Audio autoplay blocked. User must interact first.');
        });
}

function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        floatingMusicBtn.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        backgroundMusic.play()
            .then(() => {
                floatingMusicBtn.classList.add('playing');
                isMusicPlaying = true;
            })
            .catch(error => {
                console.log('Could not play audio');
            });
    }
}

function closeModal() {
    musicModal.classList.remove('active');
    // Always show floating music button after modal closes
    setTimeout(() => {
        floatingMusicBtn.classList.add('visible');
    }, 300);
}

// ========================================
// GALLERY
// ========================================
function initGallery() {
    if (!galleryContainer) return;
    
    galleryItems.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        galleryContainer.appendChild(galleryItem);
    });
    
    // Initialize lazy loading after gallery is created
    initLazyLoading();
}

// Helper function to get video MIME type based on extension
function getVideoMimeType(src) {
    const ext = src.toLowerCase().split('.').pop();
    if (ext === 'mov') return 'video/quicktime';
    if (ext === 'webm') return 'video/webm';
    return 'video/mp4';
}

function createGalleryItem(item, index) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    // Random rotation for scattered polaroid effect
    const rotation = (Math.random() - 0.5) * 10; // -5 to 5 degrees
    div.style.setProperty('--rotation', `${rotation}deg`);
    div.dataset.index = index;
    
    let mediaContent = '';
    
    if (item.type === 'image') {
        mediaContent = `
            <img class="gallery-media lazy" 
                 data-src="${item.src}" 
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23FFE4E6' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23831843' font-family='Georgia'%3ELoading...%3C/text%3E%3C/svg%3E"
                 alt="${item.caption}"
                 loading="lazy">
        `;
    } else if (item.type === 'video') {
        const videoMimeType = getVideoMimeType(item.src);
        mediaContent = `
            <div class="gallery-video-container">
                <video class="gallery-media" preload="metadata" muted loop playsinline>
                    <source src="${item.src}" type="${videoMimeType}">
                </video>
            </div>
        `;
    }
    
    div.innerHTML = `
        <div class="gallery-item-inner">
            ${mediaContent}
            <div class="gallery-caption">${item.caption}</div>
        </div>
    `;
    
    // Click handler for lightbox
    div.addEventListener('click', () => openLightbox(index));
    
    // Video hover - play silently without affecting background music
    if (item.type === 'video') {
        const video = div.querySelector('video');
        
        div.addEventListener('mouseenter', () => {
            video.play().catch(() => {});
        });
        
        div.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
    
    return div;
}

// ========================================
// LIGHTBOX
// ========================================
function initLightbox() {
    // Close button
    lightboxClose.addEventListener('click', closeLightbox);
    
    // Navigation buttons
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
    
    // Touch swipe support
    lightbox.addEventListener('touchstart', handleTouchStart, { passive: true });
    lightbox.addEventListener('touchend', handleTouchEnd, { passive: true });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Handle music for video playback in lightbox
    const currentItem = galleryItems[index];
    if (currentItem && currentItem.type === 'video') {
        if (isMusicPlaying) {
            fadeOutMusic();
        }
    }
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    
    // Stop video if playing
    const video = lightboxMediaContainer.querySelector('video');
    if (video) {
        video.pause();
    }
    
    // Resume music if it was playing before video
    fadeInMusic();
}

function navigateLightbox(direction) {
    currentLightboxIndex += direction;
    
    // Wrap around
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = galleryItems.length - 1;
    } else if (currentLightboxIndex >= galleryItems.length) {
        currentLightboxIndex = 0;
    }
    
    // Handle music when navigating to/from videos
    const newItem = galleryItems[currentLightboxIndex];
    if (newItem && newItem.type === 'video') {
        // Navigated to a video - fade out music
        if (isMusicPlaying) {
            fadeOutMusic();
        }
    } else {
        // Navigated to an image - resume music if it was playing
        fadeInMusic();
    }
    
    updateLightboxContent();
}

function updateLightboxContent() {
    const item = galleryItems[currentLightboxIndex];
    
    let mediaHtml = '';
    
    if (item.type === 'image') {
        mediaHtml = `<img src="${item.src}" alt="${item.caption}">`;
    } else if (item.type === 'video') {
        // Use helper function for MIME type
        const videoMimeType = getVideoMimeType(item.src);
        
        mediaHtml = `
            <video id="lightbox-video-player" controls autoplay playsinline>
                <source src="${item.src}" type="${videoMimeType}">
                Your browser does not support video playback.
            </video>
        `;
    }
    
    lightboxMediaContainer.innerHTML = mediaHtml;
    lightboxCaption.textContent = item.caption;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${galleryItems.length}`;
    
    // Add video event listeners for music resumption
    if (item.type === 'video') {
        const video = lightboxMediaContainer.querySelector('video');
        if (video) {
            video.addEventListener('ended', () => {
                // Video ended - resume music
                fadeInMusic();
            });
            
            video.addEventListener('pause', () => {
                // Video paused - resume music after a short delay
                setTimeout(() => {
                    if (video.paused) {
                        fadeInMusic();
                    }
                }, 1000);
            });
        }
    }
}

// Touch handling for swipe
function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next
            navigateLightbox(1);
        } else {
            // Swipe right - previous
            navigateLightbox(-1);
        }
    }
}

// ========================================
// LAZY LOADING
// ========================================
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('.gallery-media.lazy');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                
                if (src) {
                    img.src = src;
                    img.onload = () => {
                        img.classList.add('loaded');
                    };
                    img.onerror = () => {
                        // Fallback for failed images
                        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23FFE4E6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23831843" font-family="Georgia"%3EImage not found%3C/text%3E%3C/svg%3E';
                    };
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// SMOOTH SCROLL NAVIGATION
// ========================================
function initSmoothScroll() {
    // Navigation buttons
    navScrollBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                smoothScrollTo(targetSection);
            }
        });
    });
    
    // Hero scroll indicator
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const loveLetterSection = document.getElementById('love-letter');
            if (loveLetterSection) {
                smoothScrollTo(loveLetterSection);
            }
        });
    }
}

function smoothScrollTo(element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// ========================================
// BACK TO TOP
// ========================================
function initBackToTop() {
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Click to scroll to top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// NAVIGATION DOTS
// ========================================
function initNavDots() {
    const sections = document.querySelectorAll('section[id]');
    
    // Click handlers
    navDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const sectionId = dot.dataset.section;
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                smoothScrollTo(targetSection);
            }
        });
    });
    
    // Update active state on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.dataset.section === current) {
                dot.classList.add('active');
            }
        });
    });
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add delay if specified
                const delay = entry.target.dataset.delay;
                if (delay) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay * 150);
                } else {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
    
    // Also observe gallery items
    observeGalleryItems();
}

function observeGalleryItems() {
    const galleryItemsElements = document.querySelectorAll('.gallery-item');
    
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.index * 0.03; // Faster stagger for 98 items
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 1000);
                galleryObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    });
    
    galleryItemsElements.forEach(item => {
        galleryObserver.observe(item);
    });
}

// ========================================
// FLOATING PARTICLES (Hearts)
// ========================================
function initParticles() {
    const particleCount = 25; // Number of floating hearts
    
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 20 + 15; // 15-35px
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 15; // 15-30 seconds
    const delay = Math.random() * 10;
    const opacity = Math.random() * 0.5 + 0.3;
    
    // Heart SVG
    particle.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor" style="color: ${getRandomHeartColor()}">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    `;
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        opacity: ${opacity};
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
    `;
    
    particlesContainer.appendChild(particle);
    
    // Remove and recreate after animation ends
    particle.addEventListener('animationend', () => {
        particle.remove();
        createParticle();
    });
}

function getRandomHeartColor() {
    const colors = [
        '#EC4899', // Pink
        '#F472B6', // Light pink
        '#BE185D', // Dark pink
        '#9F7AEA', // Purple
        '#FCD5CE', // Peach
        '#FDA4AF', // Rose
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// ========================================
// RELATIONSHIP COUNTER
// ========================================
function initRelationshipCounter() {
    updateRelationshipCounter();
    
    // Update every second
    setInterval(updateRelationshipCounter, 1000);
}

function updateRelationshipCounter() {
    const now = new Date();
    const start = relationshipStartDate;
    
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    
    // Adjust for negative values
    if (days < 0) {
        months--;
        // Get days in previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Update DOM
    const yearsEl = document.getElementById('years');
    const monthsEl = document.getElementById('months');
    const daysEl = document.getElementById('days');
    
    if (yearsEl) yearsEl.textContent = years;
    if (monthsEl) monthsEl.textContent = months;
    if (daysEl) daysEl.textContent = days;
}

console.log('💕 Romantic Anniversary Website - Loaded Successfully!');
console.log(`📸 Gallery loaded with ${galleryItems.length} memories (${galleryItems.filter(i => i.type === 'video').length} videos, ${galleryItems.filter(i => i.type === 'image').length} photos)`);

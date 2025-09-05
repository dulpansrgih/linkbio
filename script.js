const initialYear = 2024;
const lastUpdatedDate = "02 September 2024";
const phoneNumber = "6282161741753"; // Nomor WhatsApp Anda
const emailAddress = "dulpansofficial@gmail.com"; // Alamat Email Anda
const shareButton = document.getElementById('shareButton');
const sharePopup = document.getElementById('share-popup');
const sharePopupCloseButton = document.getElementById('share-popup-close-button');
const shareLinkInput = document.getElementById('share-link-input');
const copyButton = document.getElementById('copy-button');
const profileLink = "https://dulpanadisaragih.my.id/";
const qr = new QRious({
    element: document.getElementById('qr-code'),
    value: profileLink,
    size: 200,
    background: '#ffffff',
    foreground: '#000000',
});
shareButton.addEventListener('click', () => {
    sharePopup.style.display = 'flex';
    document.body.classList.add('blur-active');
});
sharePopupCloseButton.addEventListener('click', () => {
    sharePopup.style.display = 'none';
    document.body.classList.remove('blur-active');
});
sharePopup.addEventListener('click', (event) => {
    if (event.target === sharePopup) {
        sharePopup.style.display = 'none';
        document.body.classList.remove('blur-active');
    }
});
function showCustomAlert(message) {
    const alert = document.getElementById('custom-alert');
    const alertMessage = alert.querySelector('.custom-alert-message');
    alertMessage.textContent = message;
    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
    }, 2500);
}
copyButton.addEventListener('click', () => {
    shareLinkInput.select();
    document.execCommand('copy');
    showCustomAlert('Tautan disalin!');
});
document.getElementById('share-whatsapp').addEventListener('click', () => {
    window.open(`https://wa.me/?text=Lihat%20profil%20keren%20ini%20${encodeURIComponent(profileLink)}`, '_blank');
});
document.getElementById('share-facebook').addEventListener('click', () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileLink)}`, '_blank');
});
document.getElementById('share-twitter').addEventListener('click', () => {
    window.open(`https://twitter.com/intent/tweet?text=Lihat%20profil%20keren%20ini&url=${encodeURIComponent(profileLink)}`, '_blank');
});
document.getElementById('share-linkedin').addEventListener('click', () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(profileLink)}&title=Profile%20Dulpans&summary=Lihat%20portofolio%20keren%20ini!`, '_blank');
});
document.getElementById('share-email').addEventListener('click', () => {
    window.open(`mailto:?subject=Cek%20Profil%20ini&body=Lihat%20profil%20keren%20milik%20Dulpans:%20${encodeURIComponent(profileLink)}`, '_blank');
});
function updateTimeAndDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = now.toLocaleDateString('id-ID', options);
    const time = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const formattedTime = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h23'
    }).replace(/\./g, ':');
    const dateTimeString = `${date} | ${formattedTime} WIB`;
    const popupTimeDateElement = document.getElementById('popup-time-date');
    if (popupTimeDateElement) {
        popupTimeDateElement.textContent = dateTimeString;
    }
}
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    let yearText = initialYear;
    if (currentYear > initialYear) {
        yearText = `${initialYear} - ${currentYear}`;
    }
    const creditElement = document.getElementById('changelog-credit-text');
    if (creditElement) {
        creditElement.innerHTML = `&copy; ${yearText} &bull; <span onclick="window.open('https://prof.dulpanadisaragih.my.id/', '_blank')">Dulpan Adi Saragih</span>`;
    }
}
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();
updateCopyrightYear();
const popupLastUpdatedElement = document.getElementById('popup-last-updated');
if (popupLastUpdatedElement) {
    popupLastUpdatedElement.textContent = lastUpdatedDate;
}
document.querySelectorAll('.link-item').forEach(button => {
    button.addEventListener('click', function(event) {
        const url = this.getAttribute('data-url');
        if (this.id !== 'support-us-button' && this.id !== 'purchase-button' && url) {
            window.open(url, '_blank');
        }
    });
});
const supportUsButton = document.getElementById('support-us-button');
const popup = document.getElementById('custom-popup');
const okButton = document.getElementById('ok-button');
const cancelButton = document.getElementById('cancel-button');
const destinationUrl = supportUsButton.getAttribute('data-url');
supportUsButton.addEventListener('click', (event) => {
    event.preventDefault();
    popup.style.display = 'flex';
    document.body.classList.add('blur-active');
});
okButton.addEventListener('click', () => {
    window.open(destinationUrl, '_blank');
});
cancelButton.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.classList.remove('blur-active');
});
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
        document.body.classList.remove('blur-active');
    }
});
const openChangelogButton = document.getElementById('open-changelog-button');
const changelogPopup = document.getElementById('changelog-popup');
const closeChangelogButton = document.getElementById('close-changelog-button');
openChangelogButton.addEventListener('click', () => {
    changelogPopup.style.display = 'flex';
    document.body.classList.add('blur-active');
});
closeChangelogButton.addEventListener('click', () => {
    changelogPopup.style.display = 'none';
    document.body.classList.remove('blur-active');
});
changelogPopup.addEventListener('click', (event) => {
    if (event.target === changelogPopup) {
        changelogPopup.style.display = 'none';
        document.body.classList.remove('blur-active');
    }
});
document.querySelectorAll('.wrapper button.button').forEach(button => {
    button.addEventListener('click', function() {
        const url = this.getAttribute('onclick').match(/'([^']*)'/)[1];
        window.open(url, '_blank');
    });
});
const purchaseButton = document.getElementById('purchase-button');
const purchaseModal = document.getElementById('purchase-modal');
const closePurchaseModalBtn = document.getElementById('close-purchase-modal');
function openPurchaseModal() {
    purchaseModal.style.display = 'flex';
    document.body.classList.add('blur-active');
}
function closePurchaseModal() {
    purchaseModal.style.display = 'none';
    document.body.classList.remove('blur-active');
}
purchaseButton.addEventListener('click', (event) => {
    event.preventDefault();
    openPurchaseModal();
});
closePurchaseModalBtn.addEventListener('click', closePurchaseModal);
window.addEventListener('click', (event) => {
    if (event.target === purchaseModal) {
        closePurchaseModal();
    }
});
const contactButton = document.getElementById('contact-button');
const contactPopup = document.getElementById('contact-popup');
const contactPopupCloseBtn = document.querySelector('#contact-popup .contact-popup-close-btn');
const emailTab = document.querySelector('.contact-tab[data-tab="email"]');
const whatsappTab = document.querySelector('.contact-tab[data-tab="whatsapp"]');
const emailForm = document.getElementById('email-form');
const whatsappForm = document.getElementById('whatsapp-form');
contactButton.addEventListener('click', () => {
    contactPopup.style.display = 'flex';
    document.body.classList.add('blur-active');
});
contactPopupCloseBtn.addEventListener('click', () => {
    contactPopup.style.display = 'none';
    document.body.classList.remove('blur-active');
});
contactPopup.addEventListener('click', (event) => {
    if (event.target === contactPopup) {
        contactPopup.style.display = 'none';
        document.body.classList.remove('blur-active');
    }
});
emailTab.addEventListener('click', () => {
    emailTab.classList.add('active');
    whatsappTab.classList.remove('active');
    emailForm.classList.add('active');
    whatsappForm.classList.remove('active');
});
whatsappTab.addEventListener('click', () => {
    whatsappTab.classList.add('active');
    emailTab.classList.remove('active');
    whatsappForm.classList.add('active');
    emailForm.classList.remove('active');
});
if (whatsappTab) {
    whatsappTab.click();
} else if (emailTab) {
    emailTab.click();
}
const emailFormActual = document.getElementById('email-form-actual');
emailFormActual.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-input').value;
    const subject = document.getElementById('subject-input').value;
    const message = document.getElementById('message-input').value;
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Email dari: " + email + "\n\nPesan:\n" + message)}`;
    window.open(mailtoLink, '_blank');
});
const whatsappFormActual = document.getElementById('whatsapp-form-actual');
whatsappFormActual.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name-whatsapp-input').value;
    const message = document.getElementById('message-whatsapp-input').value;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Halo, saya ${name}. \n\nPesan:\n${message}`)}`;
    window.open(whatsappLink, '_blank');
});
document.querySelectorAll('.contact-input-group input, .contact-input-group textarea').forEach(input => {
    const label = input.nextElementSibling;
    if (input.value.trim() !== '') {
        label.classList.add('active');
    }
    input.addEventListener('focus', () => {
        label.classList.add('active');
    });
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            label.classList.remove('active');
        }
    });
});
const appsButton = document.getElementById('apps-button');
const appsModal = document.getElementById('apps-modal');
const closeAppsModalBtn = document.getElementById('close-apps-modal');
const moreAppsButton = document.getElementById('more-apps-button');
const swipeWrapper = document.querySelector('#apps-modal .swipe-wrapper');
const swipeButtons = document.querySelectorAll('#apps-modal .swipe-wrapper > button');
const swipeLeftBtn = document.getElementById('swipe-left-btn');
const swipeRightBtn = document.getElementById('swipe-right-btn');
    
let currentIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
const transitionTime = 400;

const swipeLineContainer = document.querySelector('.swipe-line-container');
const swipeProgressLine = document.querySelector('.swipe-progress-line');

function updateSwipeLine() {
    const totalItems = swipeButtons.length;
    if (totalItems > 0) {
        const itemWidthPercent = 150 / totalItems;
        const translateXPercent = currentIndex * itemWidthPercent;
        swipeProgressLine.style.width = `${itemWidthPercent}%`;
        swipeProgressLine.style.transform = `translateX(${translateXPercent}%)`;
    }
}
function updateNavButtons() {
    if (swipeLeftBtn && swipeRightBtn) {
        swipeLeftBtn.disabled = currentIndex === 0;
        swipeRightBtn.disabled = currentIndex === swipeButtons.length - 1;
    }
}
    
function setPositionByIndex() {
    if (swipeButtons.length > 0) {
        const containerWidth = swipeWrapper.offsetWidth;
        const itemWidth = swipeButtons[0].offsetWidth;
        const totalGap = (swipeButtons.length - 1) * 10; // 10px is the gap
        const totalWidth = (itemWidth * swipeButtons.length) + totalGap;
        
        // Calculate the maximum possible scroll amount
        const maxScroll = totalWidth - containerWidth;
        
        const newTranslate = -currentIndex * (itemWidth + 10); // 10px is the gap
        currentTranslate = Math.max(Math.min(0, newTranslate), -maxScroll);
        
        swipeWrapper.style.transform = `translateX(${currentTranslate}px)`;
        updateSwipeLine();
        updateNavButtons();
    }
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function touchStart(e) {
    startPos = getPositionX(e);
    isDragging = true;
    swipeWrapper.style.transition = 'none';
    prevTranslate = currentTranslate;
}

function touchEnd() {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    
    // Determine which direction was swiped and adjust index
    if (movedBy < -50 && currentIndex < swipeButtons.length - 1) {
        currentIndex++;
    } else if (movedBy > 50 && currentIndex > 0) {
        currentIndex--;
    }
    
    // Snap back to the nearest item position
    setPositionByIndex();
    swipeWrapper.style.transition = `transform ${transitionTime}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
}

function touchMove(e) {
    if (isDragging) {
        const currentPosition = getPositionX(e);
        const newTranslate = prevTranslate + currentPosition - startPos;
        
        // Calculate bounds
        const containerWidth = swipeWrapper.offsetWidth;
        const itemWidth = swipeButtons[0].offsetWidth;
        const totalGap = (swipeButtons.length - 1) * 10;
        const totalWidth = (itemWidth * swipeButtons.length) + totalGap;
        const maxScroll = totalWidth - containerWidth;
        
        // Clamp the newTranslate value to prevent scrolling too far
        const clampedTranslate = Math.max(Math.min(0, newTranslate), -maxScroll);
        
        currentTranslate = clampedTranslate;
        swipeWrapper.style.transform = `translateX(${currentTranslate}px)`;
    }
}

appsButton.addEventListener('click', (event) => {
    event.preventDefault();
    appsModal.style.display = 'flex';
    document.body.classList.add('blur-active');
    currentIndex = 0;
    // Gunakan requestAnimationFrame untuk memastikan DOM sudah siap sebelum menghitung posisi
    requestAnimationFrame(() => {
        setPositionByIndex();
    });
});

closeAppsModalBtn.addEventListener('click', () => {
    appsModal.style.display = 'none';
    document.body.classList.remove('blur-active');
});

window.addEventListener('click', (event) => {
    if (event.target === appsModal) {
        appsModal.style.display = 'none';
        document.body.classList.remove('blur-active');
    }
});

swipeWrapper.addEventListener('mousedown', touchStart);
swipeWrapper.addEventListener('mouseup', touchEnd);
swipeWrapper.addEventListener('mouseleave', touchEnd);
swipeWrapper.addEventListener('mousemove', touchMove);
swipeWrapper.addEventListener('touchstart', touchStart);
swipeWrapper.addEventListener('touchend', touchEnd);
swipeWrapper.addEventListener('touchmove', touchMove);
    
if (swipeLeftBtn && swipeRightBtn) {
    swipeLeftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            setPositionByIndex();
        }
    });

    swipeRightBtn.addEventListener('click', () => {
        if (currentIndex < swipeButtons.length - 1) {
            currentIndex++;
            setPositionByIndex();
        }
    });
}

moreAppsButton.addEventListener('click', () => {
    window.open('https://aast.dulpanadisaragih.my.id/', '_blank');
});

window.addEventListener('load', () => {
    updateSwipeLine();
    updateNavButtons();
});

// Deklarasi elemen untuk modal unduhan
const modSamsungButton = document.getElementById('mod-samsung-button');
const downloadModal = document.getElementById('download-modal');
const closeDownloadModalBtn = document.getElementById('close-download-modal');

// Logika hitungan mundur dan unduhan
const fileUrl = './data/download_Samsung.Apk'; // Ganti dengan path file APK Anda
let countdown;
let countdownInterval;

function startCountdownAndDownload() {
    // ... (kode fungsi ini tetap sama)
}

// Event listener untuk tombol "Mod Samsung Apk"
modSamsungButton.addEventListener('click', (event) => {
    event.preventDefault();
    downloadModal.style.display = 'flex';
    document.body.classList.add('blur-active');
    startCountdownAndDownload();
});

// Event listener untuk menutup modal
closeDownloadModalBtn.addEventListener('click', () => {
    downloadModal.style.display = 'none';
    document.body.classList.remove('blur-active');
    clearInterval(countdownInterval);
});

// Event listener untuk tombol unduh manual
document.getElementById('manual-download-btn').addEventListener('click', () => {
    if (!document.getElementById('manual-download-btn').disabled) {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Mod_Samsung_Apk.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showCustomAlert('Unduhan dimulai!');
        downloadModal.style.display = 'none';
        document.body.classList.remove('blur-active');
    }
});

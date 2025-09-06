// ig-checker-script.js

// Elemen untuk modal Instagram Checker
const instagramCheckerModal = document.getElementById('instagram-checker-modal');
const closeIgCheckerModalBtn = document.getElementById('close-ig-checker-modal');
const instagramCheckerButton = document.getElementById('mod-samsung-button');
const appsModal = document.getElementById('apps-modal'); 
const closePopup = (popupElement) => { 
    if (popupElement) {
        popupElement.style.display = 'none';
        document.body.classList.remove('blur-active');
    }
};
const openPopup = (popupElement) => {
    if (popupElement) {
        popupElement.style.display = 'flex';
        document.body.classList.add('blur-active');
    }
};

// Elemen untuk pop-up konfirmasi baru
const igCheckerPopup = document.getElementById('ig-checker-popup');
const igCheckerOkButton = document.getElementById('ig-checker-ok-button');
const igCheckerCancelButton = document.getElementById('ig-checker-cancel-button');

// Menambahkan fungsionalitas untuk membuka modal Instagram Checker
if (instagramCheckerButton) {
    instagramCheckerButton.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        
        closePopup(appsModal);
        openPopup(igCheckerPopup);
    });

    if (closeIgCheckerModalBtn) {
        closeIgCheckerModalBtn.addEventListener('click', () => closePopup(instagramCheckerModal));
    }
}

// Menangani tombol di pop-up konfirmasi
if (igCheckerOkButton) {
    igCheckerOkButton.addEventListener('click', () => {
        closePopup(igCheckerPopup);
        openPopup(instagramCheckerModal);
    });
}

if (igCheckerCancelButton) {
    igCheckerCancelButton.addEventListener('click', () => closePopup(igCheckerPopup));
}

// ===============================================
// Fungsionalitas Instagram Checker
// ===============================================
// Elemen-elemen ini sekarang ada di dalam modal
const followersFileInput = document.getElementById("followersFile");
const followingFileInput = document.getElementById("followingFile");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const resultsDiv = document.getElementById("results");
const statsDiv = document.getElementById("stats");

// Pastikan elemen ditemukan sebelum menambahkan event listener
if (checkBtn && resetBtn) {
    resetBtn.addEventListener("click", () => {
        if (followersFileInput) followersFileInput.value = "";
        if (followingFileInput) followingFileInput.value = "";
        if (resultsDiv) resultsDiv.innerHTML = "";
        if (statsDiv) statsDiv.innerHTML = "";
    });

    checkBtn.addEventListener("click", () => {
        const followersFile = followersFileInput.files[0];
        const followingFile = followingFileInput.files[0];

        if (!followersFile || !followingFile) {
            Swal.fire({
                icon: 'warning',
                title: 'File Tidak Lengkap',
                text: 'Mohon upload kedua file JSON terlebih dahulu.',
                confirmButtonColor: '#3B82F6',
                background: '#1A1A1A',
                color: '#f5f5f5'
            });
            return;
        }

        const readFile = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        resolve(data);
                    } catch (error) {
                        reject(error);
                    }
                };
                reader.onerror = reject;
                reader.readAsText(file);
            });
        };

        Promise.all([readFile(followersFile), readFile(followingFile)])
            .then(([followersData, followingData]) => {
                const followers = followersData.flatMap(item => item.string_list_data.map(sub => sub.value));
                const following = followingData.relationships_following.flatMap(item => item.string_list_data.map(sub => sub.value));
                const notFollowedBack = following.filter(user => !followers.includes(user));

                statsDiv.innerHTML = `
                    <p><strong>Total Followers:</strong> ${followers.length}</p>
                    <p><strong>Total Following:</strong> ${following.length}</p>
                    <p><strong>Tidak Followback:</strong> ${notFollowedBack.length}</p>
                `;

                resultsDiv.innerHTML = `<h2 class="text-xl font-semibold mb-2">Akun yang tidak followback:</h2>`;
                if (notFollowedBack.length === 0) {
                    resultsDiv.innerHTML += `<p class="text-green-500 font-medium">Semua akun yang kamu follow telah follow kamu kembali 🎉</p>`;
                } else {
                    notFollowedBack.forEach(user => {
                        const link = document.createElement("a");
                        link.href = `https://www.instagram.com/${user}`;
                        link.target = "_blank";
                        link.className = "text-blue-500 hover:underline block";
                        link.textContent = user;
                        resultsDiv.appendChild(link);
                    });
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Kesalahan Format File',
                    text: 'Terjadi kesalahan saat membaca file. Pastikan file JSON yang diunggah valid.',
                    confirmButtonColor: '#3B82F6',
                    background: '#1A1A1A',
                    color: '#f5f5f5'
                });
                console.error(err);
            });
    });
}
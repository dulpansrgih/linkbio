// ======================================
// Deklarasi Variabel dan Elemen
// ======================================

const initialYear = 2024;
const lastUpdatedDate = "05 September 2025";
const phoneNumber = "6285229592941";
const emailAddress = "dulpansofficial@gmail.com";
const profileLink = "https://dulpanadisaragih.my.id/";

// Elemen untuk Share Popup
const shareButton = document.getElementById('shareButton');
const sharePopup = document.getElementById('share-popup');
const sharePopupCloseButton = document.getElementById('share-popup-close-button');
const shareLinkInput = document.getElementById('share-link-input');
const copyButton = document.getElementById('copy-button');
let qr;

// Elemen untuk Changelog Popup
const openChangelogButton = document.getElementById('open-changelog-button');
const changelogPopup = document.getElementById('changelog-popup');
const closeChangelogButton = document.getElementById('close-changelog-button');

// Elemen untuk Purchase Modal
const purchaseButton = document.getElementById('purchase-button');
const purchaseModal = document.getElementById('purchase-modal');
const closePurchaseModalBtn = document.getElementById('close-purchase-modal');

// Elemen untuk Apps Modal (Swipe functionality)
const appsButton = document.getElementById('apps-button');
const appsModal = document.getElementById('apps-modal');
const closeAppsModalBtn = document.getElementById('close-apps-modal');
const swipeWrapper = document.querySelector('#apps-modal .swipe-wrapper');
const swipeButtons = document.querySelectorAll('#apps-modal .swipe-wrapper > button');
const swipeLeftBtn = document.getElementById('swipe-left-btn');
const swipeRightBtn = document.getElementById('swipe-right-btn');
const moreAppsButton = document.getElementById('more-apps-button');

// Elemen untuk Contact Popup
const contactButton = document.getElementById('contact-button');
const contactPopup = document.getElementById('contact-popup');
const contactPopupCloseBtn = document.querySelector('#contact-popup .contact-popup-close-btn');
const emailTab = document.querySelector('.contact-tab[data-tab="email"]');
const whatsappTab = document.querySelector('.contact-tab[data-tab="whatsapp"]');
const emailForm = document.getElementById('email-form');
const whatsappForm = document.getElementById('whatsapp-form');
const emailFormActual = document.getElementById('email-form-actual');
const whatsappFormActual = document.getElementById('whatsapp-form-actual');

// Elemen untuk Support Us Popup
const supportUsButton = document.getElementById('support-us-button');
const customPopup = document.getElementById('custom-popup');
const okButton = document.getElementById('ok-button');
const cancelButton = document.getElementById('cancel-button');
const loanButton = document.getElementById('loan-button');
const destinationUrl = supportUsButton.getAttribute('data-url');

// Elemen untuk QRIS Modals
const qrisModal = document.getElementById('qris-modal');
const closeQrisModalBtn = document.getElementById('close-qris-modal');
const nominalInput = document.getElementById('nominalInput');
const termsCheckbox = document.getElementById('termsCheckbox');
const openTermsLink = document.getElementById('openTermsLink');
const termsModal = document.getElementById('terms-modal');
const closeTermsModalBtn = document.getElementById('close-terms-modal');
const termsDoneButton = document.getElementById('terms-done-button');
const convertBtn = document.getElementById('convertBtn');

// Elemen untuk Instagram Checker
const instagramCheckerModal = document.getElementById('instagram-checker-modal');
const closeIgCheckerModalBtn = document.getElementById('close-ig-checker-modal');
const instagramCheckerButton = document.getElementById('mod-samsung-button');
const igCheckerPopup = document.getElementById('ig-checker-popup');
const igCheckerOkButton = document.getElementById('ig-checker-ok-button');
const igCheckerCancelButton = document.getElementById('ig-checker-cancel-button');
const followersFileInput = document.getElementById("followersFile");
const followingFileInput = document.getElementById("followingFile");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const resultsDiv = document.getElementById("results");
const statsDiv = document.getElementById("stats");

// Konstanta
const WHATSAPP_NUMBER = "6285229592941";

// ======================================
// Fungsionalitas Pop-up Umum
// ======================================

function showCustomAlert(message) {
    const alert = document.getElementById('custom-alert');
    const alertMessage = alert.querySelector('.custom-alert-message');
    alertMessage.textContent = message;
    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
    }, 2500);
}

function openPopup(popupElement) {
    if (popupElement) {
        popupElement.style.display = 'flex';
        document.body.classList.add('blur-active');
    }
}

function closePopup(popupElement) {
    if (popupElement) {
        popupElement.style.display = 'none';
        document.body.classList.remove('blur-active');
    }
}

function setupOutsideClickToClose(popupElement) {
    if (popupElement) {
        popupElement.addEventListener('click', (event) => {
            if (event.target === popupElement) {
                closePopup(popupElement);
            }
        });
    }
}

// ======================================
// Event Listeners
// ======================================

// Share Popup
if (shareButton) {
    shareButton.addEventListener('click', () => {
        openPopup(sharePopup);
        const qrElement = document.getElementById('qr-code');
        if (!qr && qrElement) {
            qr = new QRious({
                element: qrElement,
                value: profileLink,
                size: 200,
                background: '#ffffff',
                foreground: '#000000',
            });
        }
        if (qr) qr.value = profileLink;
    });
    sharePopupCloseButton.addEventListener('click', () => closePopup(sharePopup));
}

if (copyButton) {
    copyButton.addEventListener('click', () => {
        shareLinkInput.select();
        navigator.clipboard.writeText(shareLinkInput.value)
            .then(() => showCustomAlert('Tautan disalin!'))
            .catch(err => console.error('Gagal menyalin: ', err));
    });
}

document.querySelectorAll('.wrapper button').forEach(button => {
    button.addEventListener('click', function(event) {
        const url = this.getAttribute('onclick').match(/'([^']*)'/)[1];
        if (url) window.open(url, '_blank');
    });
});
document.querySelectorAll('.links-list .link-item, .links-list .featured-box').forEach(button => {
    button.addEventListener('click', function(event) {
        if (this.id === 'support-us-button' || this.id === 'purchase-button' || this.id === 'apps-button' || this.id === 'mod-samsung-button') return;
        const urlMatch = this.getAttribute('onclick').match(/'([^']*)'/);
        if (urlMatch && urlMatch[1]) {
            window.open(urlMatch[1], '_blank');
        }
    });
});

// Changelog Popup
if (openChangelogButton) {
    openChangelogButton.addEventListener('click', () => openPopup(changelogPopup));
    closeChangelogButton.addEventListener('click', () => closePopup(changelogPopup));
}

// Purchase Modal
if (purchaseButton) {
    purchaseButton.addEventListener('click', () => openPopup(purchaseModal));
    closePurchaseModalBtn.addEventListener('click', () => closePopup(purchaseModal));
}

// Contact Popup
if (contactButton) {
    contactButton.addEventListener('click', () => openPopup(contactPopup));
    contactPopupCloseBtn.addEventListener('click', () => closePopup(contactPopup));

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

    emailFormActual.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email-input').value;
        const subject = document.getElementById('subject-input').value;
        const message = document.getElementById('message-input').value;
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Email dari: " + email + "\n\nPesan:\n" + message)}`;
        window.open(mailtoLink, '_blank');
    });

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
}

// Apps Modal (dengan fungsionalitas geser yang sudah diperbaiki)
let currentIndex = 0;
let items = 0;

function updateCarousel() {
    if (swipeWrapper && items > 0) {
        const itemWidth = swipeWrapper.scrollWidth / items;
        const offset = -currentIndex * itemWidth;
        swipeWrapper.style.transform = `translateX(${offset}px)`;
        
        // Update progress line
        const progressLine = document.querySelector('.swipe-progress-line');
        const progressWidth = ((currentIndex + 1) / items) * 100;
        progressLine.style.width = `${progressWidth}%`;
        
        // Update button states
        swipeLeftBtn.disabled = currentIndex === 0;
        swipeRightBtn.disabled = currentIndex === items - 1;
        
    }
}

if (appsButton) {
    appsButton.addEventListener('click', (event) => {
        event.preventDefault();
        openPopup(appsModal);
        items = swipeWrapper.children.length;
        currentIndex = 0;
        updateCarousel();
    });
    closeAppsModalBtn.addEventListener('click', () => closePopup(appsModal));
    
    if (swipeLeftBtn) {
        swipeLeftBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    }

    if (swipeRightBtn) {
        swipeRightBtn.addEventListener('click', () => {
            if (currentIndex < items - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    }
}

// Support Us & QRIS Modal
if (supportUsButton) {
    supportUsButton.addEventListener('click', (event) => {
        event.preventDefault();
        openPopup(customPopup);
    });

    if (okButton) {
        okButton.addEventListener('click', () => {
            window.open(destinationUrl, '_blank');
        });
    }

    if (cancelButton) {
        cancelButton.addEventListener('click', () => closePopup(customPopup));
    }

    if (loanButton) {
        loanButton.addEventListener('click', (event) => {
            event.stopPropagation();
            closePopup(customPopup);
            openPopup(qrisModal);
            if (termsCheckbox) {
                termsCheckbox.checked = false;
                termsCheckbox.disabled = true;
            }
            if (nominalInput) nominalInput.value = '';
        });
    }
}

// Fungsionalitas untuk menutup pop-up QRIS
if (closeQrisModalBtn) {
    closeQrisModalBtn.addEventListener('click', () => closePopup(qrisModal));
}

// Fungsionalitas untuk membuka pop-up Syarat & Ketentuan
if (openTermsLink) {
    openTermsLink.addEventListener('click', (e) => {
        e.preventDefault();
        openPopup(termsModal);
    });
}
if (closeTermsModalBtn) {
    closeTermsModalBtn.addEventListener('click', () => closePopup(termsModal));
}

// Logika perbaikan di sini
if (termsDoneButton) {
    termsDoneButton.addEventListener('click', () => {
        if (termsCheckbox) {
            termsCheckbox.checked = true;
            termsCheckbox.disabled = false;
            const event = new Event('change');
            termsCheckbox.dispatchEvent(event);
        }
        closePopup(termsModal);
    });
}

// Logika Checkbox & Tombol "Bayar dengan QRIS"
if (termsCheckbox) {
    termsCheckbox.addEventListener('change', (e) => {
        const convertBtn = document.getElementById('convertBtn');
        convertBtn.disabled = !e.target.checked;
        convertBtn.style.opacity = e.target.checked ? '1' : '0.5';
        convertBtn.style.cursor = e.target.checked ? 'pointer' : 'not-allowed';
    });
    
    termsCheckbox.addEventListener('click', (e) => {
        if (e.target.disabled) {
            e.preventDefault();
            Swal.fire({
                icon: 'info',
                title: 'Wajib Baca Syarat & Ketentuan',
                text: 'Silakan baca dan klik "Selesai" di pop-up Syarat & Ketentuan terlebih dahulu.',
                confirmButtonText: 'Oke',
                confirmButtonColor: '#3B82F6',
                background: '#1A1A1A',
                color: '#f5f5f5'
            });
        }
    });
}

// Event listener untuk tombol 'Bayar dengan QRIS'
if (convertBtn) {
    convertBtn.addEventListener('click', async () => {
        const nominal = nominalInput.value.replace(/\D/g, '');
        if (!nominal || parseInt(nominal) < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Nominal Tidak Valid',
                text: 'Masukkan Nominal terlebih dahulu.',
                confirmButtonColor: '#3B82F6',
                background: '#1A1A1A',
                color: '#f5f5f5',
                customClass: {
                    htmlContainer: 'text-pusat' 
                }
            });
            return;
        }

        const nominalValue = nominalInput.value;
        const now = new Date();
        const currentDate = now.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const currentTime = now.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).replace(/\./g, ':');

        // Logika perhitungan biaya layanan
        const nominalNumber = parseInt(nominal.replace(/\./g, ''));
        let feePercentage = 0;

        if (nominalNumber > 1500000) {
            feePercentage = 0.02; // 2%
        } else if (nominalNumber >= 500000) {
            feePercentage = 0.03; // 3%
        } else {
            feePercentage = 0.05; // 5%
        }

        const fee = nominalNumber * feePercentage;
        const total = nominalNumber + fee;
        const formattedTotal = total.toLocaleString('id-ID');
        const formattedFee = fee.toLocaleString('id-ID');

        const result = await Swal.fire({
            title: 'Konfirmasi Pembayaran QRIS',
            html: `
                <div class="swal-header-section">
                    <p class="swal-total-amount">Rp ${formattedTotal}</p>
                    <div class="swal-summary-info">
                        <p>Jumlah Pembayaran: <span>Rp ${nominalValue}</span></p>
                        <p>Biaya Layanan (${feePercentage * 100}%): <span>Rp ${formattedFee}</span></p>
                        <i class="swal-terms-note">(Biaya layanan sesuai dengan <a href="#" onclick="Swal.close(); openPopup(termsModal);">Syarat & Ketentuan</a>)</i>
                    </div>
                </div>
                
                <div class="swal-form-section">
                    <h4 class="swal-section-title">Informasi Pribadi</h4>
                    <input id="swal-nama-lengkap" class="swal2-input custom-swal-input" placeholder="Nama Lengkap">
                    <input id="swal-nomor-whatsapp" class="swal2-input custom-swal-input" placeholder="Nomor WhatsApp">
                    <div class="swal-input-group-container">
                        <select id="swal-platform-pembayaran" class="swal2-select custom-swal-select">
                            <option value="">Platform Pembayaran</option>
                            <option value="ShopeePay">ShopeePay</option>
                            <option value="Paylatter">Paylatter</option>
                            <option value="Akulaku">Akulaku</option>
                            <option value="Lain-lain">Lain-lain</option>
                        </select>
                        <input id="swal-platform-pembayaran-lain" class="swal2-input custom-swal-input" placeholder="Isi Platform Pembayaran Lainnya" style="display: none;">
                    </div>
                </div>
                
                <div class="swal-form-section">
                    <h4 class="swal-section-title">Informasi Rekening</h4>
                    <input id="swal-nama-rekening" class="swal2-input custom-swal-input" placeholder="Nama Rekening">
                    <div class="swal-input-group-container">
                        <select id="swal-platform-pencairan" class="swal2-select custom-swal-select">
                            <option value="">Platform Pencairan</option>
                            <option value="ShopeePay">ShopeePay</option>
                            <option value="DANA">DANA</option>
                            <option value="GoPay">GoPay</option>
                            <option value="OVO">OVO</option>
                            <option value="LinkAja">LinkAja</option>
                            <option value="Lain-lain">Lain-lain</option>
                        </select>
                        <input id="swal-platform-pencairan-lain" class="swal2-input custom-swal-input" placeholder="Isi Platform Pencairan Lainnya" style="display: none;">
                    </div>
                    <input id="swal-nomor-rekening" class="swal2-input custom-swal-input" placeholder="Nomor Rekening">
                </div>
                
                <p class="small-text-note"><i>Mohon lampirkan bukti transaksi.</i></p>
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: '<i class="fab fa-whatsapp"></i> WhatsApp',
            cancelButtonText: 'Batal',
            confirmButtonColor: '#25D366',
            cancelButtonColor: '#555',
            background: '#1A1A1A',
            color: '#f5f5f5',
            allowOutsideClick: false,
            customClass: {
                container: 'sweetalert-container',
                popup: 'sweetalert-popup',
                confirmButton: 'sweetalert-confirm',
                cancelButton: 'sweetalert-cancel'
            },
            preConfirm: () => {
                const namaLengkap = Swal.getPopup().querySelector('#swal-nama-lengkap').value;
                const nomorWhatsapp = Swal.getPopup().querySelector('#swal-nomor-whatsapp').value;
                const platformPembayaran = Swal.getPopup().querySelector('#swal-platform-pembayaran').value;
                const otherPlatformInput = Swal.getPopup().querySelector('#swal-platform-pembayaran-lain');
                const namaRekening = Swal.getPopup().querySelector('#swal-nama-rekening').value;
                const platformPencairan = Swal.getPopup().querySelector('#swal-platform-pencairan').value;
                const otherPencairanInput = Swal.getPopup().querySelector('#swal-platform-pencairan-lain');
                const nomorRekening = Swal.getPopup().querySelector('#swal-nomor-rekening').value;

                let finalPlatformPembayaran = platformPembayaran;
                if (platformPembayaran === 'Lain-lain') {
                    finalPlatformPembayaran = otherPlatformInput.value;
                }

                let finalPlatformPencairan = platformPencairan;
                if (platformPencairan === 'Lain-lain') {
                    finalPlatformPencairan = otherPencairanInput.value;
                }

                if (!namaLengkap || !nomorWhatsapp || !finalPlatformPembayaran || !namaRekening || !finalPlatformPencairan || !nomorRekening) {
                    Swal.showValidationMessage(`
                        <div class="swal-validation-message">
                            <p>Mohon maaf, data belum lengkap.</p>
                            <p>Silakan isi semua kolom yang diperlukan.</p>
                        </div>
                    `);
                    return false;
                }

                return {
                    namaLengkap,
                    nomorWhatsapp,
                    finalPlatformPembayaran,
                    namaRekening,
                    finalPlatformPencairan,
                    nomorRekening
                };
            },
            didOpen: () => {
                const platformPembayaranSelect = Swal.getPopup().querySelector('#swal-platform-pembayaran');
                const otherPlatformInput = Swal.getPopup().querySelector('#swal-platform-pembayaran-lain');
                const platformPencairanSelect = Swal.getPopup().querySelector('#swal-platform-pencairan');
                const otherPencairanInput = Swal.getPopup().querySelector('#swal-platform-pencairan-lain');
                const nomorWhatsappInput = Swal.getPopup().querySelector('#swal-nomor-whatsapp');
                const nomorRekeningInput = Swal.getPopup().querySelector('#swal-nomor-rekening');

                platformPembayaranSelect.addEventListener('change', (e) => {
                    if (e.target.value === 'Lain-lain') {
                        otherPlatformInput.style.display = 'block';
                        otherPlatformInput.focus();
                    } else {
                        otherPlatformInput.style.display = 'none';
                    }
                });

                platformPencairanSelect.addEventListener('change', (e) => {
                    if (e.target.value === 'Lain-lain') {
                        otherPencairanInput.style.display = 'block';
                        otherPencairanInput.focus();
                    } else {
                        otherPencairanInput.style.display = 'none';
                    }
                });

                nomorWhatsappInput.addEventListener('input', function() {
                    this.value = this.value.replace(/[^0-9]/g, '');
                });

                nomorRekeningInput.addEventListener('input', function() {
                    this.value = this.value.replace(/[^0-9]/g, '');
                });
            }
        });

        if (result.isConfirmed) {
            const { namaLengkap, nomorWhatsapp, finalPlatformPembayaran, namaRekening, finalPlatformPencairan, nomorRekening } = result.value;

            const message =
                `*Konfirmasi Pembayaran QRIS*\n\n` +
                `*Informasi Pribadi*\n` +
                `> Nama Lengkap: ${namaLengkap}\n` +
                `> Nomor WhatsApp: ${nomorWhatsapp}\n` +
                `> Platform Pembayaran: ${finalPlatformPembayaran}\n\n` +
                `*Informasi Rekening*\n` +
                `> Nama Rekening: ${namaRekening}\n` +
                `> Platform Pencairan: ${finalPlatformPencairan}\n` +
                `> Nomor Rekening: ${nomorRekening}\n\n` +
                `Saya telah berhasil melakukan pembayaran dengan nominal awal *Rp ${nominalValue}* dan total pembayaran *Rp ${formattedTotal}*.\n\n` +
                `> Tanggal: ${currentDate}\n` +
                `> Waktu: ${currentTime} WIB\n\n` +
                `Mohon dibantu prosesnya kakak. Terima kasih.\n\n` +
                `_Bukti transaksi terlampir._`;

            const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        }
    });
}
// Fungsi untuk format nominal
if (nominalInput) {
    nominalInput.addEventListener('input', () => {
        let value = nominalInput.value.replace(/[^0-9]/g, '');
        if (!value) {
            nominalInput.value = '';
            return;
        }
        value = parseInt(value).toLocaleString('id-ID');
        value = value.replace(/,/g, '.');
        nominalInput.value = value;
    });
}

// ======================================
// Fungsionalitas Instagram Checker
// ======================================

// Menambahkan fungsionalitas untuk membuka modal Instagram Checker
if (instagramCheckerButton) {
    instagramCheckerButton.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        closePopup(appsModal);
        openPopup(instagramCheckerModal);
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

// Fungsionalitas utama checker
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


// ======================================
// Fungsionalitas untuk Tanggal, Waktu, dan Hak Cipta
// ======================================

function updateTimeAndDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = now.toLocaleDateString('id-ID', options);
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

// Fungsionalitas link di list
document.querySelectorAll('.link-item').forEach(button => {
    button.addEventListener('click', function(event) {
        const url = this.getAttribute('data-url');
        if (this.id !== 'support-us-button' && this.id !== 'purchase-button' && url) {
            window.open(url, '_blank');
        }
    });
});

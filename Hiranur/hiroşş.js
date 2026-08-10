let sevgi = 0; 
const mesajlar = ["Seni çok seviyorum Hiranur ❤️", 
    "İyi ki varsın 🥹❤️", "Sen benim için çok özelsin 💖", 
    "Kalbimde çok güzel bir yerin var 💕", 
    "Seni düşündüğümde yüzüm gülüyor 😊", 
    "Sana olan sevgimi kelimeler anlatamaz ❤️", 
    "Her tıklamada sana olan sevgim artıyor 💗", 
    "Hiranur, iyi ki varsın 🫶", 
    "Sen benim için gerçekten çok özelsin 💘", 
    "Seni tarif etmeye kelimeler yetmez ❤️", 
    "Ve bu daha başlangıç... 💕", 
    "Seni çook seviyorummm Hiranur ❤️"]; 
function sevgiGoster() { 
    sevgi++; 
    let mesajSirasi = 
    (sevgi - 1) % mesajlar.length; 
    document.getElementById("mesaj").innerText = 
    mesajlar[mesajSirasi]; 
    document.getElementById("sayac").innerText = "Sevgi seviyesi: " + sevgi + " ❤️"; 
    for (let i = 0; i < 10; i++) 
        { let kalp = document.createElement("div"); 
            kalp.className = "kalp"; 
            const kalpler = ["❤️", "💖", "💕", "💗", "💓"]; 
            kalp.innerText = 
            kalpler[Math.floor(Math.random() * kalpler.length)]; 
            kalp.style.left = Math.random() * 100 + "vw"; 
            kalp.style.animationDuration = (3 + Math.random() * 2) + "s"; 
            document.body.appendChild(kalp); 
            setTimeout(function () { kalp.remove(); 

            }, 5000); 
        } 
    }
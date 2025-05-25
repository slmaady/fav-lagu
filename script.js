var lagu = [
    ['Dalam Mihrab Cinta','Afgan', '40k', '30K', 'Dalam mihrab cinta.jpg','Dalam mihrab cinta.mp3'],
    ['I Wanna Be Yours', 'Artic Monkeys', '1.3K', '1.5K', 'i wanna be yours.jpg', 'I wanna be yourse.mp3'],
    ['You`ll Be in My Heart', 'NIKI', '1.3K', '1.4K', 'you will be in my heart.jpg', 'You`ll be in my heart.mp3'],
    ['Sempurna', 'Andra and the BackBone', '2K', '3.1K', 'sempurna.jpg', 'Sempurna.mp3'],
    ['Komang', 'Raim Laode', '2K', '3.3K', 'Komang.jpg', 'Komang.mp3'],
    ['About You', 'The 1975', '1.32K', '2.3K', 'about you.jpg', 'About You.mp3']
];

var element = '';

for(let i = 0; i < lagu.length; i++) {
    element += `
        <div class="lagu">
            <h2>${lagu[i][0]}</h2>
            <small><i>Oleh ${lagu[i][1]}</i></small>
            <img src="${lagu[i][4]}" alt="">
            <audio id="audio${i}" src="${lagu[i][5]}"></audio>
            <div class="bawah">
                <div class="kanan">${lagu[i][2]}</div>
                    <button onclick="putarLagu(${i})" class="play-button">
                    <img id="icon${i}" src="play-button.png" alt="Play" width="40">
                </button>
                <div class="kiri">${lagu[i][3]}</div>
            </div>
        </div>
    `;
}

document.getElementById("container").innerHTML = element;

function putarLagu(index) {
    for (let i = 0; i < lagu.length; i++) {
        let audio = document.getElementById("audio" + i);
        let icon = document.getElementById("icon" + i);
        if (i !== index) {
            audio.pause();
            audio.currentTime = 0;
            icon.src = "play-button.png";
        }
    }

    let audio = document.getElementById("audio" + index);
    let icon = document.getElementById("icon" + index);

    if (audio.paused) {
        audio.play();
        icon.src = "video-pause-button.png";
    } else {
        audio.pause();
        icon.src = "play-button.png";
    }
}




var konten = document.getElementById("container");

konten.innerHTML = element
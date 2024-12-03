document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("birthdayMusic");
    const playMusicButton = document.getElementById("playMusic");
    const sayangButton = document.getElementById("sayang");
    const tidakSayangButton = document.getElementById("tidakSayang");
    const terimakasihButton = document.getElementById("terimakasihButton");
    const kirimPesanButton = document.getElementById("kirimPesan");
  
    const sayangMessage = document.getElementById("sayangMessage");
    const tidakSayangMessage = document.getElementById("tidakSayangMessage");
    const menuTerimakasih = document.getElementById("menuTerimakasih");
  
    // Play Music
    playMusicButton.addEventListener("click", () => {
      music.play();
      playMusicButton.innerText = "🎵 Playing...";
      playMusicButton.disabled = true;
    });
  
    // Tombol Sayang
    sayangButton.addEventListener("click", () => {
      sayangMessage.classList.remove("hidden");
      tidakSayangMessage.classList.add("hidden");
      menuTerimakasih.classList.add("hidden");
    });
  
    // Tombol Tidak Sayang
    tidakSayangButton.addEventListener("click", () => {
      tidakSayangMessage.classList.remove("hidden");
      sayangMessage.classList.add("hidden");
      menuTerimakasih.classList.add("hidden");
    });
  
    // Tombol Terima Kasih
    terimakasihButton.addEventListener("click", () => {
      menuTerimakasih.classList.remove("hidden");
      sayangMessage.classList.add("hidden");
    });
  
    // Kirim Pesan ke WhatsApp
    kirimPesanButton.addEventListener("click", () => {
      const pesan = document.getElementById("pesan").value;
      if (pesan.trim()) {
        const waLink = `https://wa.me/6282350833396?text=${encodeURIComponent(pesan)}`;
        window.open(waLink, "_blank");
      } else {
        alert("Pesan tidak boleh kosong!");
      }
    });
  });
  
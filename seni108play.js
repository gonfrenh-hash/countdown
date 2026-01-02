/**
 * Hashira
 * Untuk hitung mundur saja
 * GonfrenH
 * Raven Division
 * SENI108
 * Dari Ribuan Bintang yang berserakan di langit aku hanya ingin hidup tenang, Jiwa yang pulang tanpa gaduh dan diri yang tumbuh lebih baik dari kemarin
 * Hashira Assets
 */

let totalSeconds = 23 * 41 * 08; 

        function updateCountdown() {
            if (totalSeconds <= 0) {
                document.getElementById('countdown').textContent = "00:00:00";
                document.getElementById('countdown').style.background = "#ff4444";
                return;
            }
            
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            // Format dengan leading zero
            const formatTime = (time) => time.toString().padStart(2, '0');
            
            document.getElementById('countdown').textContent = 
                `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
            
            totalSeconds--;
        }
        
        // Update setiap detik
        updateCountdown();
        setInterval(updateCountdown, 1000);

/**
 * GonfrenH
 * Untuk hitung mundur saja
 * Sano
 * Bull Division
 * ASD123
 * Percayalah, suatu hari nanti kamu akan melihat ke belakang dan tersenyum. Semua yang kamu perjuangkan, semua yang kamu tangisi, semua yang kamu tahan… ternyata membawamu ke tempat yang lebih baik dari yang pernah kamu bayangkan.
 * H-Assets
 */


let totalSeconds = 23 * 60 * 60; 

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

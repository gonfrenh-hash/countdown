/**
 * Hashira
 * Untuk hitung mundur saja
 * GonfrenH
 * Raven Division
 * SENI108
 * sedikit tidak nyaman dan merasa kalah tapi manusia dalam hidupnya memang punya hal hal yang datang dan pergi kan, tentangmu yang selalu abadi dalam karya seni milikku
 * Hashira Assets
 */

let totalSeconds = 24 * 60 * 60; 

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

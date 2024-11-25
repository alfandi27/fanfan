function convertCRC16(str) {
        let crc = 0xFFFF;
        const strlen = str.length;

        for (let c = 0; c < strlen; c++) {
            crc ^= str.charCodeAt(c) << 8;
            for (let i = 0; i < 8; i++) {
                if (crc & 0x8000) {
                    crc = (crc << 1) ^ 0x1021;
                } else {
                    crc = crc << 1;
                }
            }
        }
        let hex = crc & 0xFFFF;
        hex = ("000" + hex.toString(16).toUpperCase()).slice(-4);
        return hex;
    }

function formatCurrency(element) {
        const value = element.textContent;
        const formattedValue = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(value);
        
        element.style.opacity = '0';
        setTimeout(() => {
            element.textContent = formattedValue;
            element.style.opacity = '1';
        }, 200);
    }


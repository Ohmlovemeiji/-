// รับข้อมูลจาก URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

// แสดงชื่อในหน้าผลลัพธ์
document.getElementById("name").innerText = `ชื่อคนที่คุณชอบ: ${name}`;

// ฟังก์ชันสุ่มเปอร์เซ็นต์
document.getElementById("spinButton").onclick = function() {
    const spinCount = 10; // จำนวนการหมุน
    let currentSpin = 0;
    const interval = setInterval(() => {
        const percentage = Math.floor(Math.random() * 101);
        document.getElementById("result").innerText = `ความเข้ากันได้: ${percentage}%`;
        currentSpin++;
        if (currentSpin === spinCount) {
            clearInterval(interval);
            const finalPercentage = Math.floor(Math.random() * 101);
            document.getElementById("result").innerText = `ความเข้ากันได้: ${finalPercentage}%`;
        }
    }, 100); // อัปเดตทุก 100ms
};

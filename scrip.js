/* Định dạng trang web */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

/* Tiêu đề của trang */
h1 {
    margin-top: -146px;
    margin-bottom: 24px;
    font-size: 24px;
    color: #333;
}

/* Khung chứa bản đồ */
/* #map {
    display: flex;
    height: 500px;
    width: 90%;
    max-width: 1200px;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Định dạng cho tooltip */
.leaflet-tooltip {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-weight: bold;
    border-radius: 3px;
    padding: 5px;
    font-size: 12px;
}

/* Định dạng cho popup */
.leaflet-popup-content {
    font-size: 14px;
    font-weight: bold;
}

/* Định dạng responsive để bản đồ tự động thay đổi kích thước trên các thiết bị nhỏ hơn */
@media (max-width: 768px) {
    #map {
        width: 95%;
        height: 400px;
    }
} 
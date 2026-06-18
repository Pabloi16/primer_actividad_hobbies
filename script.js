document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. MODO OSCURO (Se ejecuta en ambas páginas)
    // ==========================================
    const btnDarkMode = document.getElementById("btn-dark-mode");
    
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (btnDarkMode) btnDarkMode.textContent = "☀️";
    }

    if (btnDarkMode) {
        btnDarkMode.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                btnDarkMode.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                btnDarkMode.textContent = "🌙";
            }
        });
    }

    // ==========================================
    // 2. CARRUSEL (Solo se activa en index.html)
    // ==========================================
    const hobbies = document.querySelectorAll(".carrusel-item");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    let posicionActual = 0;

    // Con esta condicional protegemos el código: si no encuentra botones (como en juego.html), no hace nada y evita errores.
    if (hobbies.length > 0 && prevBtn && nextBtn) {
        
        function cambiarHobby(nuevaPosicion) {
            hobbies[posicionActual].classList.remove("activo");
            
            if (nuevaPosicion >= hobbies.length) {
                posicionActual = 0;
            } else if (nuevaPosicion < 0) {
                posicionActual = hobbies.length - 1;
            } else {
                posicionActual = nuevaPosicion;
            }
            
            hobbies[posicionActual].classList.add("activo");
        }

        nextBtn.addEventListener("click", () => {
            cambiarHobby(posicionActual + 1);
        });

        prevBtn.addEventListener("click", () => {
            cambiarHobby(posicionActual - 1);
        });
    }
});
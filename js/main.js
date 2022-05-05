
       const navMenu = document.getElementById("navMenu");
       const navMb = document.getElementById("navMb");

       navMenu.addEventListener("click", () => {
           navMenu.classList.toggle("active");
           navMb.classList.toggle("activeNav");
       })
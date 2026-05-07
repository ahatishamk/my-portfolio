// =============================
// MOBILE NAVIGATION TOGGLE
// =============================

// Navbar UL ko select kar rahe hain
const navMenu = document.querySelector("nav ul"); // yeh mobile menu list hai

// Burger icon create karna (sirf mobile ke liye)
const burger = document.createElement("div"); // burger container
burger.classList.add("burger"); // styling ke liye class

// Burger icon ki 3 lines add karna
burger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`; // yeh 3 bars burger menu dikhati hain

// Burger ko header ke end me insert karna
document.querySelector("header").appendChild(burger); // is se mobile icon show hoga

// Burger click event — menu show/hide
burger.addEventListener("click", () => {
    navMenu.classList.toggle("show");      // mobile menu toggle (khulna / band hona)
    burger.classList.toggle("active");     // burger animation rotate / cross
});



// =============================
// AUTO CLOSE MOBILE MENU ON LINK CLICK
// =============================

// Sare menu anchors select karna
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");  // link click ke baad menu band ho jaye
        burger.classList.remove("active"); // burger icon wapis normal ho jaye
    });
});



// =============================
// MOBILE SMOOTH SCROLL
// =============================

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // default jump stop

        const target = document.querySelector(link.getAttribute("href")); 
        // jis section par click hua usay select kar liya

        // Section tak smooth scroll
        window.scrollTo({
            top: target.offsetTop - 60,    // mobile header ke hisab se offset
            behavior: "smooth"             // smooth scroll
        });
    });
});



// =============================
// MOBILE STICKY HEADER FIX
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {             // mobile me 30px ka scroll enough hota
        header.classList.add("sticky");    // sticky header apply
    } else {
        header.classList.remove("sticky"); // wapis normal
    }
});

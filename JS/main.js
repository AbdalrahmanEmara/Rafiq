// const header = document.querySelector("header");
// header.innerHTML = `<header>
//         <div class="container flex-between">
//             <div class="logo">
//                 <a href="index.html">رفيق</a>
//             </div>
//             <nav>
//                 <ul class=" flex-between ">
//                     <li><a href="dayRules.html">النهج المحمدي</a></li>
//                     <li><a href="اذكارالصباح.html">الأذكار</a></li>
//                     <li><a href="todo.html">قائمة المهام يومية</a></li>
//                     <li><a href="المرايات.html">الصوتيات</a></li>
//                 </ul>
//                 <div class="toggle">
//                     <i class="fa-solid fa-bars"></i>
//                 </div>
//             </nav>
//         </div>
//         <!-- toggle -->
//         <ul class="dropdown-menu">
//             <li><a href="dayRules.html">النهج المحمدي</a></li>
//             <li><a href="اذكارالصباح.html">الأذكار</a></li>
//             <li><a href="todo.html">قائمة المهام يومية</a></li>
//             <li><a href="المرايات.html">الصوتيات</a></li>
//         </ul>
//     </header>`
//nav bar
const toggleBtn = document.querySelector(".toggle");
const toggleBtnIcon = document.querySelector(".toggle i");
const dropDown = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDown.classList.toggle("open");
  const isOpen = dropDown.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// prayer time
function convertTo12HourFormat(time) {
  let [hours, minutes] = time.split(":").map(Number);
  let period = hours >= 12 ? "م" : "ص";
  hours = hours % 12 || 12; // Convert 0 to 12
  return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

async function getPrayerTimes(city, country) {
  try {
    const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data); // Debugging log

    if (!data.data || !data.data.timings) {
      throw new Error("Invalid data format received!");
    }

    const timings = data.data.timings;

    // Update prayer times in 12-hour format
    document.getElementById("fajr").innerText = convertTo12HourFormat(
      timings.Fajr,
    );
    document.getElementById("sunrise").innerText = convertTo12HourFormat(
      timings.Sunrise,
    );
    document.getElementById("dhuhr").innerText = convertTo12HourFormat(
      timings.Dhuhr,
    );
    document.getElementById("asr").innerText = convertTo12HourFormat(
      timings.Asr,
    );
    document.getElementById("maghrib").innerText = convertTo12HourFormat(
      timings.Maghrib,
    );
    document.getElementById("isha").innerText = convertTo12HourFormat(
      timings.Isha,
    );
  } catch (error) {
    console.error("Error fetching prayer times:", error);
  }
}
window.addEventListener("load", function () {
  getPrayerTimes("Cairo", "Egypt");
});

// prayer time
// books
let books = [
  {
    name: "مباحث في أصول الدين",
    image: "./imgs/1.png",
    url: "https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/do5UqLso9w11kvAs6fMsQUuBoQX06xebtX10ekxE.pdf",
  },
  {
    name: "أسماء الله وصفاته",
    image: "./imgs/2.png",
    url: "https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/Q7Dx2ww1JWl8NY5cSNTqyhJVI7Yyfks7ePcuzutZ.pdf",
  },
  {
    name: "الإبداع في كمال الشرع",
    image: "./imgs/3.png",
    url: "https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/OZoao0IWxhhe3YksNNBC7I7P8T0CRsw3bhI0geMt.pdf",
  },
  {
    name: "التمسك بالسنة",
    image: "./imgs/4.png",
    url: "https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/feEwev0UUHiAmTu44G4RUUE1tlNiJ0FJmmUZmJCi.pdf",
  },
  {
    name: "الخلاف بين العلماء",
    image: "./imgs/5.png",
    url: "https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/j88YUnmizlnSdsfKgLlp8XesJNlaqfBzvpeAdG4j.pdf",
  },
  {
    name: "مكارم الأخلاق",
    image: "./imgs/6.png",
    url: "https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/2TSIEsiymWdSHNNTasU5ZLfKi9mYrtv0el44bdQh.pdf",
  },
  {
    name: "من الأحكام الفقهية في الطهارة  ",
    image: "./imgs/7.png",
    url: "https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/h6GCK7mectZvd9oEyqSBcxUxFoTiazomb3MrfIRb.pdf",
  },
  {
    name: "ستون سؤالا في أحكام الحيض ",
    image: "./imgs/8.png",
    url: "https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/udjv4bLWNVb3AbORgXOOAA0bdjWlknisUazsp7Dt.pdf",
  },
  {
    name: "رسالة في مواقيت الصلاة",
    image: "./imgs/9.png",
    url: "https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/U4YtC46myREiRGBTt6IF8KeJhAt12Y3aKhCQ8SD4.pdf",
  },
  {
    name: " رسالة في سجود السهو",
    image: "./imgs/10.png",
    url: "https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/zgcKXDJ1lBKl5g69PdOrsVZ59Vfr6l055iocA5vk.pdf",
  },
];
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  autoplay: {
      delay: 2000,
      disableOnInteraction: true,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      320: { slidesPerView: 2 }, // Small screens (phones)
      480: { slidesPerView: 3 }, // Slightly larger phones
      768: { slidesPerView:4 }, // Tablets
      1024: { slidesPerView: 6 }, // Small laptops
      1280: { slidesPerView: 7 }, // Large screens
      1440: { slidesPerView: 8 }  // Full-size desktops
  }
});


const swiperWrapper = document.querySelector(".swiper-wrapper");

if (swiperWrapper) {
  
  books.forEach((book) => {
      let slide = document.createElement("div"); 
      slide.classList.add("swiper-slide"); 

      slide.innerHTML = `
          <div class="img-holder">
              <img src="${book.image}" alt="${book.name}" onerror="this.src='./img/default.png'"/>
          </div>
          <div class="book-content">
              <p>${book.name}</p>
              <a class="btn" href="${book.url}" target="_blank" rel="noopener noreferrer">المزيد</a>
          </div>
      `;
      swiperWrapper.appendChild(slide);
  });
  swiper.update();
} 
var swiper2 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination2",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});

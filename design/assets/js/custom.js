
jQuery(document).ready(function(){
    var domesticTripsSwiper = new Swiper(".domesticTrips", {
        slidesPerView: 'auto',
        spaceBetween: 36,
        navigation: {
            nextEl: ".domestic-trips-swiper-button-next",
            prevEl: ".domestic-trips-swiper-button-prev",
        },
    });

    var internationalTripsSwiper = new Swiper(".internationalTrips", {
        slidesPerView: 'auto',
        spaceBetween: 36,
        navigation: {
            nextEl: ".international-trips-swiper-button-next",
            prevEl: ".international-trips-swiper-button-prev",
        },
    });

    var brandsSwiper = new Swiper(".brandsSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 54,
        loop: true,
        speed: 2000,
        allowTouchMove: false,
        autoplay: false
    });

    gsap.to(".brandsSwiper .swiper-wrapper", {
        x: "-100%",
        duration: 15,
        ease: "linear",
        repeat: -1
    });

    const navLinks = document.querySelectorAll(".curated-categories-nav .nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    var cat1LocationSwiper = new Swiper(".cat1-location-swiper", {
        slidesPerView: 4,
        spaceBetween: 26,
        navigation: {
            nextEl: ".cat1-location-next",
            prevEl: ".cat1-location-prev",
        },
        pagination: {
            el: ".cat1-location-pagination",
        },
    });

    var cat2LocationSwiper = new Swiper(".cat2-location-swiper", {
        slidesPerView: 4,
        spaceBetween: 26,
        navigation: {
            nextEl: ".cat2-location-next",
            prevEl: ".cat2-location-prev",
        },
        pagination: {
            el: ".cat2-location-pagination",
        },
    });

    var cat3LocationSwiper = new Swiper(".cat3-location-swiper", {
        slidesPerView: 4,
        spaceBetween: 26,
        navigation: {
            nextEl: ".cat3-location-next",
            prevEl: ".cat3-location-prev",
        },
        pagination: {
            el: ".cat3-location-pagination",
        },
    });

    var upcomingDatesSwiper = new Swiper(".upcoming-dates-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {
            nextEl: ".upcoming-dates-next",
            prevEl: ".upcoming-dates-prev",
        },
    });

    const upcomingDatesLinks = document.querySelectorAll(".upcoming-dates-swiper a");
    upcomingDatesLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            upcomingDatesLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    var cat4LocationSwiper = new Swiper(".cat4-location-swiper", {
        slidesPerView: 4,
        spaceBetween: 26,
        navigation: {
            nextEl: ".cat4-location-next",
            prevEl: ".cat4-location-prev",
        },
        pagination: {
            el: ".cat4-location-pagination",
        },
    });

    var cat4LocationSwiper = new Swiper(".cat5-location-swiper", {
        slidesPerView: 4,
        spaceBetween: 26,
        navigation: {
            nextEl: ".cat5-location-next",
            prevEl: ".cat5-location-prev",
        },
        pagination: {
            el: ".cat5-location-pagination",
        },
    });

    var testimonialSwiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 3,
        spaceBetween: 42,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 2000,
        pagination: {
            el: ".testimonial-pagination",
        },
    });

    var listingContent1Swiper = new Swiper(".listing-content1-swiper", {
        slidesPerView: 3,
        spaceBetween: 70,
        navigation: {
            nextEl: ".listing-content1-next",
            prevEl: ".listing-content1-prev",
        },
    });

    var listingContent2Swiper = new Swiper(".listing-content2-swiper", {
        slidesPerView: 3,
        spaceBetween: 70,
        navigation: {
            nextEl: ".listing-content2-next",
            prevEl: ".listing-content2-prev",
        },
    });

    var listingContent3Swiper = new Swiper(".listing-content3-swiper", {
        slidesPerView: 3,
        spaceBetween: 70,
        navigation: {
            nextEl: ".listing-content3-next",
            prevEl: ".listing-content3-prev",
        },
    });

    var listingContent4Swiper = new Swiper(".listing-content4-swiper", {
        slidesPerView: 3,
        spaceBetween: 70,
        navigation: {
            nextEl: ".listing-content4-next",
            prevEl: ".listing-content4-prev",
        },
    });

    var listingContent5Swiper = new Swiper(".listing-content5-swiper", {
        slidesPerView: 3,
        spaceBetween: 70,
        navigation: {
            nextEl: ".listing-content5-next",
            prevEl: ".listing-content5-prev",
        },
    });

    var tripDurationSwiper = new Swiper(".trip-duration-swiper", {
        slidesPerView: 4,
        spaceBetween: 18,
        navigation: {
            nextEl: ".trip-duration-swiper-button-next",
            prevEl: ".trip-duration-swiper-button-prev",
        },
    });

    var listingContent6Swiper = new Swiper(".listing-content6-swiper", {
        slidesPerView: 3,
        spaceBetween: 70,
    });

});

let glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 0,
    autoplay: 4000,
    dragThreshold: 200,
    classes: {
        activeSlide: 'current'

    }
}).mount();

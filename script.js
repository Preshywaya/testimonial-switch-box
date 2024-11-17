

const testimonialsContainer = document.querySelector('.testimonials-container')


const testimonial = document.querySelector('.testimonial')

const userImage = document.querySelector('.user-image')

const username= document.querySelector('.username')

const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'miyah myles',
        position: 'marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',

        text: "i ve worked with literrally hundreds of html/ cs developers and i have to say the top spot goes to this guy",

    },

    {
        name: 'jonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg',

        text: "lorem comimg here to say",

    },


    {
        name: 'renee sims',
        position: 'receptionist',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',

        text: "lorem comimg here to say",

    },

    {
        name: 'jonathan Nunfiez',
        position: 'data entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',

        text: "lorem comimg here to say",

    },

    {
        name: 'june cha',
        position: 'software engineer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',

        text: "lorem comimg here to say",

    },
    
]


let idx = 1

function updateTestimonial() {
    const {name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position
    idx++

    if(idx > testimonials.length - 1) {
        idx = 0

    }
}

setInterval(updateTestimonial, 10000)
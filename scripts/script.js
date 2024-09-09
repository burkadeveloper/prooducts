let products = [
    {
        name:'basketBall',
        image: "basketball.jpg",
        price: 5,
        rating:"⭐⭐⭐⭐⭐",
        overprice:8
    },
    {
        name:'Nike Airforce',
        image: "airforcenike.jpg",
        price: 25,
        rating:"⭐⭐⭐⭐",
        overprice:37.99
    },
    {
        name:'hORDAN',
        image: "jordan.jpg",
        price: 25,
        rating:"⭐⭐⭐⭐",
        overprice:37.99
    },
    
    
];

           
let productsHTML = `  `
  products.forEach((product)=>{
    productsHTML +=` 
   
           
`

    

})
document.querySelector('.js-produts-grid').innerHTML += productsHTML 




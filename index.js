

// fonction constructice de notre objet ContentManager
function ContentManager(products) {
    this.products = products;
    console.log(products);
}

// Methode generateProductsCards que l'on rattache a notre objet ContentManager via son prototype

ContentManager.prototype.generateProductsCards = function() {
    let mytext = document.querySelector('.cycle-slideshow');
    
    let figure ="";
   
    for (let i = 0; i < this.products.length; i++ ){ 

     figure += `<figure>
     <img alt='${this.products[i].title}'
         src='${ this.products[i].img}'>
     <figcaption>
         <h3>${this.products[i].title} </h3>
         <span class='tag'>${this.products[i].subtitle}</span>
         <p>${this.products[i].resume}</p>
         <div class='rating'>
             <span class='fa fa-star'></span>
             <span class='fa fa-star'></span>
             <span class='fa fa-star'></span>
             <span class='fa fa-star'></span>
             <span class='fa fa-star'></span>
         </div>
     </figcaption>
 </figure>`

    }
    mytext.innerHTML= figure;


    // cibler l'element du dom dans lequel on va injecter les données -->


        // boucler sur nos données -->

            // generer la structure html comme indiquer dans index.html en incluant les données dans chaque element html qui correspond  -->

            // Faire appel a la methode ratingAverage pour generer le nombre de span correspondant a la moyenne de chaque product -->

            // Injecter les données dans l'element du dom cibler au préalable -->

            


}

// Methode qui retourne la moyenne des notes attribuer a un product
ContentManager.prototype.ratingAverage = function(ratings) {

}



// Ici on instancie un objet ContentManager en fesant appel a sa methode constructice
let contentManager = new ContentManager([
    { title: "A Taste of the Kitchen", subtitle: "Served Family Style", resume: "Vel nam odio dolorem, voluptas sequi minus quo tempore, animi est quia earum maxime. Reiciendisquae repellat, modi non, veniam.", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/first-course.jpg", ratings: [5, 3, 5, 4, 5, 3, 4, 1]},
    { title: "Rustic Reds", subtitle: "From the land of Italy", resume: "Vel nam odio dolorem, voluptas sequi minus quo tempore, animi est quia earum maxime. Reiciendisquae repellat, modi non, veniam.", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/second-course.jpg", ratings: [2, 3, 1, 4, 2, 3, 4, 1]},
    { title: "Delicious Desserts", subtitle: "Seasonal Ingredients", resume: "Vel nam odio dolorem, voluptas sequi minus quo tempore, animi est quia earum maxime. Reiciendisquae repellat, modi non, veniam.", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/third-course.jpg", ratings: [1, 3, 1, 4, 4, 3, 4, 2]}
]);

contentManager.generateProductsCards();



class Product {
    constructor(id,name,description,price,brand,activeSize,quantity,date,reviews,images){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.brand = brand;
        this.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
        this.activeSize = activeSize;
        this.quantity = quantity;
        this.date = date;
        this.reviews = [];
        this.images = images;
    };
    getId = () => this.id;
    setId = (newId) => this.id = newId;

    getName = () => this.name;
    setName = (newName) => this.name = newName;

    getDescription = () => this.description;
    setDescription = (newDescription) => this.description = newDescription;

    getPrice = () => this.price;
    setPrice = (newPrice) => this.price = newPrice;

    getBrand = () => this.brand;
    setBrand = (newBrand) => this.brand = newBrand;

    getSizes = () => this.sizes;
    setSizes = (newSizes) => this.sizes = newSizes;

    getActiveSize = () => this.activeSize;
    setActiveSize = (newActiveSize) => this.activeSize = newActiveSize;

    getQuantity = () => this.quantity;
    setQuantity = (newQuantity) => this.quantity = newQuantity;

    getdate = () => this.date;
    setdate = (newDate) => this.date = newDate;

    getImages = () => this.images;
    setImages = (newImages) => this.images = newImages;

    getReview = () => this.reviews
    setReview = (newReviews) => this.reviews = newReviews;
    // Methods 
    getReviewByID() {
        return reviewsList.find(inner => inner.idR === this.id)    
    }

    getImage(index) {
        if(index == undefined){
            return this.images[0]
        }
        else{
            return this.images[index]
        }
    }
    addSize(size) {
        return this.sizes.push(size)
    } 
    deleteSize(key){
        this.sizes.splice(key,1)
        return this.sizes
    }
    addReviews(newReview) {
        return reviewsList.push(newReview)
    }
    deleteReviews(key) {
        reviewsList.splice(key,1)
        return reviewsList
    }
    getAverageRating(){
        const rating = reviewsList[this.id].rating;
        const sum = rating.reduce((total, current) => total + current, 0);
        const averageRating = sum/rating.length
        return averageRating
    }

};

class reviews {
    constructor(idR,author,date,comment,service,price,value,quality) {
        this.idR = idR;
        this.author = author;
        this.date = date;
        this.comment = comment;
        this.rating = [
            this.service = service,
            this.price = price,
            this.value = value,
            this.quality =quality 
        ];
    }
    


}

//Function

function search(searchQuery) {
   let search = productList.filter(item => item.name.includes(searchQuery))
   return search
}

 
function sortProducts(sortRule) {
     
  let c = productList.sort((a,b) => a[sortRule] - b[sortRule])
  return c;
}


const productList = [new Product(1, 'shoes', 'no description', 1000, 'adidas', 'XS' , 57, [11,30,2023], [], ['shoes1.png','shoes2.png','shoes3.png']),
              new Product(2,'T-shirt', 'no description', 500, 'adidas', 'XL', 63, [11,30,2023], [], ['T-shirt1.png','T-shirt2.png','T-shirt3.png']),
              new Product(3,'shirt', 'no description', 700, 'lacoste', 'L', 67, [11,30,2023], [], ['shirt1.png','shirt2.png','shirt3.png']),
              new Product(4,'coat', 'no description', 1700, 'lacoste', 'S', 37, [11,30,2023], [], ['coat1.png','coat2.png','coat3.png']),
            ];
const reviewsList = [new reviews(1, 'James', 13, 'no', 5, 4, 3, 5 ),
              new reviews(2, 'Robert', 17, 'no', 5, 4, 3, 5 ),
              new reviews(3, 'Lisa', 23, 'no', 5, 4, 3, 5 ),
              new reviews(4, 'Emma', 30, 'no', 5, 4, 3, 5 )];

              
              
 




//console.log(productList[0].getReviewByID())

//console.log(productList[0].getImage(2))

//productList[0].addSize('XXXS')
//console.log(productList[0].sizes)

//console.log(productList[0].deleteSize(1))

//const newReview = new reviews(5, 'Bart', 31, 'no', 4, 5, 3, 1 )
//productList[0].addReviews(newReview)
//console.log(reviewsList)

//productList[0].deleteReviews(2)
//console.log(reviewsList)

//console.log(productList[0].getAverageRating())
 //const searchQuery = "shi"
//console.log(search(searchQuery))
//const sortRule = "price";
//console.log(sortProducts(sortRule))

//console.log(p1.getId())
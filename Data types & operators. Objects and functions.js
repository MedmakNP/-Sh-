
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
            this.reviews = reviews;
            this.images = images;
        };
        getId = () => this.id;
        setId = (id) => this.id = id;

        getName = () => this.name;
        setName = (name) => this.name = name;

        getDescription = () => this.description;
        setDescription = (description) => this.description = description;

        getPrice = () => this.price;
        setPrice = (price) => this.price = price;

        getBrand = () => this.brand;
        setBrand = (brand) => this.brand = brand;

        getSizes = () => this.sizes;
        setSizes = (sizes) => this.sizes = sizes;

        getActiveSize = () => this.activeSize;
        setActiveSize = (activeSize) => this.activeSize = activeSize;

        getQuantity = () => this.quantity;
        setQuantity = (quantity) => this.quantity = quantity;

        getdate = () => this.date;
        setdate = (date) => this.date = date;

        getImages = () => this.images;
        setImages = (images) => this.images = images;
        
        getReviewByID = () => {
            return rArr.find(inner => inner.idR === this.id) 
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
    


    const pArr = [new Product(1, 'shoes', 'no description', 1000, 'adidas', 'XS' , 57, [11,30,2023], [], 'img1.png'),
                  new Product(2,'T-shirt', 'no description', 500, 'adidas', 'XL', 63, [11,30,2023], [], 'img2.png'),
                  new Product(3,'shirt', 'no description', 700, 'lacoste', 'L', 67, [11,30,2023], [], 'img3.png'),
                  new Product(4,'coat', 'no description', 1700, 'lacoste', 'S', 37, [11,30,2023], [], 'img4.png'),
                ]
    const rArr = [new reviews(1, 'James', 13, 'no', 5, 4, 3, 5 ),
                  new reviews(2, 'Robert', 17, 'no', 5, 4, 3, 5 ),
                  new reviews(3, 'Lisa', 23, 'no', 5, 4, 3, 5 ),
                  new reviews(4, 'Emma', 30, 'no', 5, 4, 3, 5 )]
    
    console.log(pArr[0])

    //console.log(p1.getId())
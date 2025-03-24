import React, { useState } from "react";

export default function ProductFilters() {
  const foodProducts = [
    {
      name: "Spicy Chicken Burger",
      category: "Fast Food",
      price: 5.99,
      ratings: 4.5,
      reviews: [
        { user: "JohnDoe", comment: "Delicious and spicy!", rating: 5 },
        {
          user: "Foodie99",
          comment: "Good but a bit too spicy for me.",
          rating: 4,
        },
      ],
    },
    {
      name: "Margherita Pizza",
      category: "Italian",
      price: 8.49,
      ratings: 4.7,
      reviews: [
        { user: "PizzaLover", comment: "Cheesy and fresh!", rating: 5 },
        { user: "Anna", comment: "Loved the crispy crust!", rating: 4.5 },
      ],
    },
    {
      name: "Avocado Salad",
      category: "Healthy",
      price: 6.99,
      ratings: 4.3,
      reviews: [
        { user: "HealthNut", comment: "Fresh and tasty!", rating: 4.5 },
        { user: "Jake", comment: "Could use more dressing.", rating: 4 },
      ],
    },
    {
      name: "Chocolate Brownie",
      category: "Dessert",
      price: 3.99,
      ratings: 4.8,
      reviews: [
        { user: "SweetTooth", comment: "Super fudgy and rich!", rating: 5 },
        { user: "Emma", comment: "Perfect with ice cream.", rating: 4.8 },
      ],
    },
    {
      name: "Mango Smoothie",
      category: "Beverage",
      price: 4.49,
      ratings: 4.6,
      reviews: [
        { user: "SmoothieKing", comment: "Very refreshing!", rating: 5 },
        { user: "Sarah", comment: "Loved the natural sweetness.", rating: 4.5 },
      ],
    },
    {
      name: "Grilled Salmon",
      category: "Seafood",
      price: 12.99,
      ratings: 4.9,
      reviews: [
        {
          user: "SeafoodFan",
          comment: "Perfectly cooked and seasoned!",
          rating: 5,
        },
        { user: "Leo", comment: "Very fresh, loved it.", rating: 4.8 },
      ],
    },
    {
      name: "Vegan Buddha Bowl",
      category: "Healthy",
      price: 9.99,
      ratings: 4.7,
      reviews: [
        { user: "VeganLife", comment: "Nutritious and delicious!", rating: 5 },
        {
          user: "Samantha",
          comment: "Loved the mix of ingredients.",
          rating: 4.5,
        },
      ],
    },
    {
      name: "Beef Tacos",
      category: "Mexican",
      price: 7.49,
      ratings: 4.6,
      reviews: [
        { user: "TacoTuesday", comment: "Best tacos ever!", rating: 5 },
        {
          user: "Mike",
          comment: "Great taste, but needed more salsa.",
          rating: 4.4,
        },
      ],
    },
    {
      name: "Strawberry Cheesecake",
      category: "Dessert",
      price: 5.99,
      ratings: 4.8,
      reviews: [
        {
          user: "DessertLover",
          comment: "Creamy and full of flavor!",
          rating: 5,
        },
        { user: "Lucy", comment: "Perfect balance of sweetness.", rating: 4.7 },
      ],
    },
    {
      name: "Cappuccino",
      category: "Beverage",
      price: 3.49,
      ratings: 4.5,
      reviews: [
        { user: "CoffeeAddict", comment: "Rich and creamy!", rating: 5 },
        { user: "James", comment: "Nice aroma and taste.", rating: 4.3 },
      ],
    },
    {
      name: "BBQ Ribs",
      category: "Grill",
      price: 14.99,
      ratings: 4.9,
      reviews: [
        { user: "BBQMaster", comment: "Juicy and tender!", rating: 5 },
        { user: "Henry", comment: "Loved the smoky flavor.", rating: 4.8 },
      ],
    },
    {
      name: "Vegetable Stir Fry",
      category: "Asian",
      price: 7.99,
      ratings: 4.4,
      reviews: [
        {
          user: "HealthyEater",
          comment: "Crunchy and flavorful!",
          rating: 4.5,
        },
        { user: "Maya", comment: "Could use more spice.", rating: 4.2 },
      ],
    },
    {
      name: "Egg Benedict",
      category: "Breakfast",
      price: 8.99,
      ratings: 4.7,
      reviews: [
        { user: "BrunchLover", comment: "Perfectly poached eggs!", rating: 5 },
        {
          user: "Sophia",
          comment: "Hollandaise sauce was amazing.",
          rating: 4.6,
        },
      ],
    },
    {
      name: "Pepperoni Pizza",
      category: "Italian",
      price: 9.99,
      ratings: 4.8,
      reviews: [
        { user: "PizzaKing", comment: "Classic and tasty!", rating: 5 },
        { user: "David", comment: "Perfect amount of pepperoni.", rating: 4.7 },
      ],
    },
    {
      name: "Shrimp Fried Rice",
      category: "Asian",
      price: 8.49,
      ratings: 4.6,
      reviews: [
        {
          user: "RiceLover",
          comment: "Well-seasoned and delicious!",
          rating: 5,
        },
        { user: "Nina", comment: "Nice portion size.", rating: 4.5 },
      ],
    },
    {
      name: "Greek Yogurt Parfait",
      category: "Healthy",
      price: 4.99,
      ratings: 4.7,
      reviews: [
        { user: "FitnessGuru", comment: "Great for breakfast!", rating: 5 },
        { user: "Amy", comment: "Loved the granola crunch.", rating: 4.6 },
      ],
    },
    {
      name: "Hot Chocolate",
      category: "Beverage",
      price: 3.99,
      ratings: 4.7,
      reviews: [
        { user: "WinterVibes", comment: "Warm and rich!", rating: 5 },
        {
          user: "Chris",
          comment: "Good, but a little too sweet.",
          rating: 4.5,
        },
      ],
    },
    {
      name: "Caesar Salad",
      category: "Salad",
      price: 6.49,
      ratings: 4.5,
      reviews: [
        { user: "SaladQueen", comment: "Crisp and tasty!", rating: 5 },
        { user: "Tom", comment: "Great dressing!", rating: 4.4 },
      ],
    },
    {
      name: "Butter Chicken",
      category: "Indian",
      price: 10.99,
      ratings: 4.9,
      reviews: [
        { user: "SpiceLover", comment: "Best butter chicken ever!", rating: 5 },
        { user: "Priya", comment: "Authentic and flavorful.", rating: 4.8 },
      ],
    },
    {
      name: "Blueberry Pancakes",
      category: "Breakfast",
      price: 7.49,
      ratings: 4.6,
      reviews: [
        { user: "BrunchFan", comment: "Fluffy and tasty!", rating: 5 },
        { user: "Olivia", comment: "Great with syrup.", rating: 4.5 },
      ],
    },
  ];

  const [product,setProduct] = useState(foodProducts);
  const [foodName, setFoodName] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("");
  const [sort,setSort] = useState("All");
  return(
        <div>
            <div className="row">
                <div className="col-md-3">
                    <h4>Filters</h4>
                    <div className="form-group">
                        <label for="foodName">Food Name:</label>
                        <input type="text" className="form-control" id="foodName" placeholder="Enter food name" onChange={(e) => setFoodName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="category">Category:</label>
                        <select className="form-select" id="category" onChange={(e) => setCategory(e.target.value)}>
                            {
                            ['All',...new Set(foodProducts.map(product => product.category))].map(category => (
                                <option key={category}>{category}</option>
                            ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="price">Price:</label>
                        <input type="text" className="form-control" id="price" placeholder="Enter price range (e.g., 1-10)" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="sortBy">Sort by Alphabetic order</label>
                        <select className="form-select" id="sortBy"
                        onChange={
                            e => setSort(e.target.value)
                        }
                        >
                        <option value="All">All</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>
                
                <div className="col-md-9">
                <h4>Food Products</h4>
                <div className="row g-3">
                    {
                        product.filter(
                            product =>
                            product.name.toLowerCase().includes(foodName.toLowerCase()) &&
                            (category === "All" || product.category === category) &&
                            (price === "" || product.price <= parseInt(price.split("-")[1]))
                        ).sort((a, b) => {
                            if (sort === "asc") {
                            return a.name.localeCompare(b.name);
                            }
                            if (sort === "desc") {
                            return b.name.localeCompare(a.name);
                            }
                            return 0;
                        }).map(product => (
                            <div className="col-md-4" key={product.name}>
                                <div className="card">
                                    <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.category}</p>
                                    <p className="card-text">Price: ${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        </div>
  )
}

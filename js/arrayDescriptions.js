const descriptions = [
    {
        name: "Chic Windbreaker Set", 
        description: "An urban-style outfit featuring a dark green windbreaker with matching shorts, paired with high-top sneakers for a sporty yet casual look.", 
        price: "$50 - $80", 
        materials: ["Polyester", "Spandex", "Cotton"]
        },
        {
        name: "Casual Polo Co-Ord", 
        description: "A sleek and modern short-sleeve gray polo shirt paired with tailored matching shorts, perfect for an effortless streetwear look.", 
        price: "$60 - $90", 
        materials: ["Cotton", "Polyester"]
        },
        {
        name: "Athleisure Tank & Shorts", 
        description: "A versatile black tank top with gray relaxed-fit shorts, ideal for casual outings or workout sessions.", 
        price: "$40 - $70", 
        materials: ["Cotton", "Elastane"]
        },
        {
        name: "Beige Polo Summer Set", 
        description: "A minimalist beige polo shirt paired with relaxed-fit shorts, offering a refined yet comfortable summer vibe.", 
        price: "$50 - $80", 
        materials: ["Cotton", "Linen"]
        },
        {
        name: "Sport Luxe Tracksuit", 
        description: "A black and blue zip-up tracksuit featuring a sleek color block design, paired with comfortable joggers for a sporty yet polished look.", 
        price: "$70 - $100", 
        materials: ["Polyester", "Nylon"]
        },
        {
        name: "Classic Sport Tracksuit", 
        description: "A bold black and red tracksuit with signature stripe detailing, designed for a sporty and dynamic look.", 
        price: "$70 - $100", 
        materials: ["Polyester", "Elastane"]
      },
      {
        name: "Olive Relaxed Fit Set", 
        description: "A comfortable olive-green tracksuit with a crew neck sweatshirt and matching joggers, ideal for casual wear.", 
        price: "$60 - $90", 
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Casual Gray Co-Ord", 
        description: "A light gray unisex two-piece outfit with an oversized top and wide-leg pants, offering a modern and relaxed silhouette.", 
        price: "$50 - $80", 
        materials: ["Polyester", "Rayon"]
      },
      {
        name: "Neutral Lounge Set", 
        description: "A beige two-piece set with a boxy top and loose trousers, providing ultimate comfort and a minimalist aesthetic.", 
        price: "$50 - $80", 
        materials: ["Cotton", "Linen"]
      },
      {
        name: "Streetwear Travel Fit", 
        description: "A sleek all-black outfit featuring a zip-up hoodie and slim-fit joggers, perfect for on-the-go style.", 
        price: "$80 - $120", 
        materials: ["Cotton", "Polyester", "Spandex"]
      },
      {
        name: "Monochrome Jogger Set", 
        description: "A relaxed-fit dark gray sweatshirt paired with light gray joggers, styled with a baseball cap for a casual and sporty vibe.", 
        price: "$50 - $80", 
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Urban Hoodie Fit", 
        description: "A light gray hoodie paired with slim-fit black joggers and white sneakers, perfect for a modern streetwear look.", 
        price: "$60 - $90", 
        materials: ["Cotton", "Fleece"]
      },
      {
        name: "Travel Comfort Set", 
        description: "A beige matching hoodie and jogger set, styled with a baseball cap and sneakers, ideal for traveling in style and comfort.", 
        price: "$70 - $100", 
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Sporty Hooded Outfit", 
        description: "A cream-colored hoodie paired with black leggings and white high-top sneakers, great for a casual day outdoors.", 
        price: "$50 - $80", 
        materials: ["Cotton", "Spandex"]
      },
      {
        name: "Coffee Run Layered Look", 
        description: "A cozy layered outfit featuring a gray hoodie, black quilted vest, and slim-fit joggers, paired with a beanie and white sneakers for a chic casual look.", 
        price: "$60 - $90", 
        materials: ["Polyester", "Cotton", "Fleece"]
      },
      {
        name: "Urban Edge Casual",
        description: "A sporty, layered outfit featuring a black leather jacket, beige hoodie, black leggings, and chunky white sneakers, topped off with a black beanie for a stylish city vibe.",
        price: "$70 - $110",
        materials: ["Faux Leather", "Cotton", "Spandex", "Mesh"]
      },
      {
        name: "Minimalist Streetwear",
        description: "A simple yet trendy combination of a gray oversized zip-up hoodie, light gray leggings, and white sneakers. Paired with a baseball cap for a sporty and relaxed finish.",
        price: "$50 - $80",
        materials: ["Polyester", "Cotton", "Elastane"]
      },
      {
        name: "Sophisticated Athleisure",
        description: "A sleek look with a black sweater layered over the shoulders, black leggings, and statement white sneakers. The outfit is perfect for a casual outing or a city stroll.",
        price: "$60 - $100",
        materials: ["Wool Blend", "Cotton", "Spandex"]
      },
      {
        name: "Chic Gym Run",
        description: "An active yet chic outfit featuring a light-gray hoodie, charcoal leggings, and chunky white sneakers. Finished with a white baseball cap for a sporty vibe.",
        price: "$55 - $85",
        materials: ["Fleece", "Polyester", "Rubber"]
      },
      {
        name: "Athletic Cool",
        description: "A relaxed sporty outfit with a gray zip-up jacket, black Adidas track pants, and black-and-white trainers. Paired with a high bun and sunglasses for a trendy on-the-go look.",
        price: "$65 - $95",
        materials: ["Polyester", "Elastane", "Synthetic"]
      },
      {
        name: "Sporty Chic",
        description: "A sleek outfit featuring a cropped green hoodie, black joggers, and white high-top sneakers. Accessorized with a black cap for a casual sporty vibe.",
        price: "$60 - $90",
        materials: ["Cotton", "Polyester", "Canvas"]
      },
      {
        name: "Monochrome Minimalist",
        description: "An all-black ensemble with a cropped sweatshirt, tapered joggers, and white sneakers. Perfect for a cozy yet stylish athleisure look.",
        price: "$50 - $80",
        materials: ["Fleece", "Cotton", "Rubber"]
      },
      {
        name: "Athletic Gray",
        description: "A fitted gray long-sleeve top paired with black joggers and sleek black sneakers. Ideal for both workouts and casual errands.",
        price: "$70 - $100",
        materials: ["Polyester", "Spandex", "Mesh"]
      },
      {
        name: "Casual Cool",
        description: "A relaxed look featuring a gray hoodie, gray sweatpants, and white sneakers, layered with a navy bomber jacket for added style.",
        price: "$65 - $95",
        materials: ["Cotton", "Polyester", "Elastane"]
      },
      {
        name: "City Sophistication",
        description: "A refined outfit featuring a teal sweater, black slim-fit pants, and white sneakers. A versatile style for urban outings.",
        price: "$80 - $120",
        materials: ["Wool", "Cotton", "Leather"]
      },
      {
        name: "Summer Athleisure",
        description: "A casual summer outfit with a white oversized t-shirt, black shorts, and white sneakers. Simple, breathable, and stylish.",
        price: "$40 - $70",
        materials: ["Cotton", "Elastane", "Rubber"]
      },
      {
        name: "Edgy Luxe",
        description: "A bold black outfit featuring a cropped top, faux-leather leggings, and chunky sneakers, layered with a leather jacket for a chic urban vibe.",
        price: "$90 - $130",
        materials: ["Faux Leather", "Polyester", "Rubber"]
      },
      {
        name: "Coffee Date Casual",
        description: "A sophisticated trench coat layered over a gray hoodie, paired with black leggings and chunky sneakers. Completed with a baseball cap for a casual-chic vibe.",
        price: "$100 - $150",
        materials: ["Cotton", "Wool", "Synthetic"]
      },
      {
        name: "Trendy Layers",
        description: "A modern streetwear look with a gray oversized hoodie, black leggings, and chunky sneakers, accessorized with a mini handbag and a cap.",
        price: "$70 - $110",
        materials: ["Cotton", "Fleece", "Rubber"]
      },
      {
        name: "Black-on-Black Elegance",
        description: "A sleek black outfit featuring a leather jacket, black leggings, and chunky sneakers. The perfect combination for a night out in the city.",
        price: "$90 - $140",
        materials: ["Faux Leather", "Polyester", "Mesh"]
      },
      {
        name: "Red and Black Striped Sport Jacket",
        description: "A vibrant sport jacket featuring bold red and black stripes, perfect for an active yet stylish look.",
        price: "$60 - $100",
        materials: ["Polyester", "Spandex"]
      },
      {
        name: "Olive Green Casual Tracksuit",
        description: "A relaxed-fit olive-green tracksuit, ideal for both lounging and casual outings.",
        price: "$50 - $90",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Gray Oversized Lounge Set",
        description: "A comfy oversized two-piece set in a soft gray tone, great for cozy days indoors.",
        price: "$50 - $80",
        materials: ["Fleece", "Polyester"]
      },
      {
        name: "Beige Minimalist Two-Piece",
        description: "A neutral beige outfit with clean lines and a minimalist design for effortless style.",
        price: "$50 - $85",
        materials: ["Cotton", "Linen"]
      },
      {
        name: "Black Travel Hoodie and Joggers",
        description: "A sleek all-black travel outfit with a lightweight hoodie and joggers, perfect for on-the-go comfort.",
        price: "$70 - $120",
        materials: ["Cotton", "Elastane"]
      },
      {
        name: "White Relaxed Hoodie",
        description: "A cozy white hoodie with a relaxed fit, ideal for layering during cooler days.",
        price: "$40 - $70",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Classic Navy Track Jacket",
        description: "A versatile navy track jacket with stripe detailing, blending comfort with athletic style.",
        price: "$60 - $90",
        materials: ["Polyester", "Nylon"]
      },
      {
        name: "Sporty Beige Hooded Set",
        description: "A sporty hooded set in beige, designed for ultimate comfort and understated fashion.",
        price: "$55 - $85",
        materials: ["Cotton", "Fleece"]
      },
      {
        name: "Slim-Fit Gray Joggers",
        description: "Streamlined joggers in a sleek gray tone, designed for both fitness and casual wear.",
        price: "$40 - $60",
        materials: ["Polyester", "Spandex"]
      },
      {
        name: "Layered Black Puffer Vest",
        description: "A chic black puffer vest layered over a hoodie for a cozy, urban-inspired look.",
        price: "$60 - $90",
        materials: ["Polyester", "Down"]
      },
      {
        name: "Casual Gray Sweatshirt",
        description: "A simple yet stylish gray sweatshirt, perfect for lounging or casual outings.",
        price: "$30 - $60",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Active Streetwear Hoodie",
        description: "A sporty gray hoodie with a modern, slim-fit design ideal for athleisure styling.",
        price: "$40 - $80",
        materials: ["Cotton", "Elastane"]
      },
      {
        name: "Travel Comfort Tracksuit",
        description: "A matching neutral-toned tracksuit designed for travel and relaxation with added style.",
        price: "$50 - $90",
        materials: ["Fleece", "Polyester"]
      },
      {
        name: "Relaxed White Hoodie",
        description: "A cozy white hoodie made for comfort and minimalistic style, great for layering.",
        price: "$40 - $70",
        materials: ["Cotton", "Fleece"]
      },
      {
        name: "Layered Knit and Vest Combo",
        description: "A chic black knit sweater layered with a quilted vest, perfect for outdoor coffee runs.",
        price: "$70 - $120",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Gray Ribbed Sweater",
        description: "A warm ribbed sweater in dark gray with a high neckline for cool-weather comfort.",
        price: "$50 - $80",
        materials: ["Cotton", "Wool Blend"]
      },
      {
        name: "Effortless Beige Two-Piece Set",
        description: "A relaxed beige top and pants set designed for a chic yet comfortable everyday look.",
        price: "$60 - $110",
        materials: ["Linen", "Cotton"]
      },
      {
        name: "Light Gray Utility Joggers",
        description: "Utility-inspired jogger pants with a sleek design and side pockets, perfect for casual wear.",
        price: "$40 - $70",
        materials: ["Polyester", "Cotton"]
      },
      {
        name: "Beige Monochrome Co-Ord",
        description: "A matching monochrome set in beige tones, blending style with effortless ease.",
        price: "$50 - $100",
        materials: ["Cotton Blend", "Elastane"]
      },
      {
        name: "Black Bomber Jacket with Details",
        description: "A sharp black bomber jacket paired with slim-fit black jeans, perfect for urban explorers.",
        price: "$90 - $140",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Beige Knit Cardigan",
        description: "A soft beige cardigan with oversized sleeves, perfect for layering during cool weather.",
        price: "$50 - $90",
        materials: ["Wool", "Acrylic Blend"]
      },
      {
        name: "Light Gray Sweater Dress",
        description: "A cozy gray sweater dress with a relaxed fit, ideal for a casual yet stylish look.",
        price: "$60 - $100",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Black Quilted Puffer Coat",
        description: "A versatile black puffer coat designed for warmth and a sleek winter style.",
        price: "$90 - $150",
        materials: ["Nylon", "Down"]
      },
      {
        name: "Neutral-Tone Hoodie",
        description: "A minimalistic beige hoodie with a soft interior for everyday comfort.",
        price: "$40 - $70",
        materials: ["Cotton", "Fleece"]
      },
      {
        name: "Sporty Olive Tracksuit",
        description: "A modern olive-green tracksuit designed for athleisure styling with a sporty edge.",
        price: "$70 - $120",
        materials: ["Polyester", "Elastane"]
      },
      {
        name: "Chic Beige Blazer",
        description: "A tailored beige blazer for formal or business casual attire.",
        price: "$100 - $180",
        materials: ["Linen", "Polyester"]
      },
      {
        name: "Cozy White Turtleneck",
        description: "A snug white turtleneck sweater, perfect for layering or a minimalist look.",
        price: "$50 - $90",
        materials: ["Wool Blend", "Acrylic"]
      },
      {
        name: "Classic Navy Peacoat",
        description: "A timeless navy-blue peacoat for a sophisticated winter wardrobe.",
        price: "$120 - $200",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Relaxed Knit Lounge Set",
        description: "A beige knit top and bottom set for a cozy and chic loungewear option.",
        price: "$60 - $100",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Black Leather Biker Jacket",
        description: "A bold black leather jacket featuring silver zippers, perfect for edgy styling.",
        price: "$150 - $250",
        materials: ["Genuine Leather", "Polyester Lining"]
      },
      {
        name: "Camel-Colored Wool Coat",
        description: "A long, tailored wool coat in camel color, exuding elegance and warmth.",
        price: "$130 - $220",
        materials: ["Wool", "Viscose"]
      },
      {
        name: "Lightweight Denim Jacket",
        description: "A casual blue denim jacket, ideal for layering in transitional seasons.",
        price: "$60 - $110",
        materials: ["Denim", "Cotton"]
      },
      {
        name: "Soft Gray Lounge Set",
        description: "A matching light-gray lounge set, ideal for cozy days at home or errands.",
        price: "$50 - $90",
        materials: ["Cotton Blend", "Fleece"]
      },
      {
        name: "Neutral Ribbed Midi Dress",
        description: "A neutral-toned ribbed midi dress for a sleek, minimalistic look.",
        price: "$50 - $100",
        materials: ["Knitted Fabric", "Polyester"]
      },
      {
        name: "Warm White Cable-Knit Sweater",
        description: "A cozy white cable-knit sweater with intricate patterns, ideal for cold weather.",
        price: "$60 - $110",
        materials: ["Wool", "Acrylic"]
      },
      {
        name: "Black Winter Trench Coat",
        description: "A long black trench coat for a polished and sophisticated winter look.",
        price: "$120 - $200",
        materials: ["Wool Blend", "Polyester"]
      },
      {
        name: "Oversized Taupe Hoodie",
        description: "A relaxed taupe hoodie perfect for layering or casual outings.",
        price: "$40 - $70",
        materials: ["Cotton", "Fleece"]
      },
      {
        name: "Khaki Utility Jacket",
        description: "A lightweight khaki jacket with multiple pockets, great for functional style.",
        price: "$80 - $140",
        materials: ["Cotton", "Nylon"]
      },
      {
        name: "Cropped Black Cardigan",
        description: "A sleek black cropped cardigan, perfect for layering with casual outfits.",
        price: "$40 - $70",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Light Beige Puffer Vest",
        description: "A stylish beige puffer vest for added warmth and layering versatility.",
        price: "$60 - $110",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Neutral Maxi Coat",
        description: "A chic neutral-toned maxi coat designed for elegance in colder seasons.",
        price: "$150 - $250",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Soft Cream Lounge Pants",
        description: "Comfortable cream-colored pants designed for lounging or casual styling.",
        price: "$40 - $80",
        materials: ["Fleece", "Cotton"]
      },
      {
        name: "Tailored Gray Suit Set",
        description: "A modern gray suit set for formal or office wear, designed with a slim fit.",
        price: "$180 - $300",
        materials: ["Linen", "Viscose"]
      },
      {
        name: "Black Cropped Puffer Jacket",
        description: "A trendy cropped puffer jacket in black, offering warmth with modern aesthetics.",
        price: "$90 - $150",
        materials: ["Polyester", "Nylon"]
      },
      {
        name: "Beige High-Neck Knit Sweater",
        description: "A cozy high-neck beige sweater with a relaxed fit, perfect for layering.",
        price: "$60 - $100",
        materials: ["Wool", "Acrylic"]
      },
      {
        name: "Black Turtleneck and Pants Set",
        description: "A sleek black turtleneck paired with matching fitted pants for an elegant monochrome look.",
        price: "$80 - $140",
        materials: ["Knitted Fabric", "Polyester"]
      },
      {
        name: "Casual Olive Parka",
        description: "A practical olive parka featuring a hood and a relaxed silhouette.",
        price: "$100 - $180",
        materials: ["Cotton Blend", "Nylon"]
      },
      {
        name: "Classic Beige Trench Coat",
        description: "A long beige trench coat for a timeless and sophisticated style.",
        price: "$120 - $200",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Navy Lounge Tracksuit",
        description: "A relaxed-fit navy tracksuit for a cozy and sporty aesthetic.",
        price: "$70 - $120",
        materials: ["Fleece", "Cotton"]
      },
      {
        name: "Black Padded Winter Coat",
        description: "A long padded winter coat in black for maximum warmth and style.",
        price: "$130 - $220",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Plaid Oversized Coat",
        description: "A statement plaid coat with an oversized fit, perfect for layering.",
        price: "$120 - $200",
        materials: ["Wool Blend", "Polyester"]
      },
      {
        name: "White Cable-Knit Sweater",
        description: "A cozy white sweater with intricate cable-knit details for cold seasons.",
        price: "$60 - $110",
        materials: ["Acrylic", "Wool"]
      },
      {
        name: "Black Faux Fur Jacket",
        description: "A luxurious black faux fur jacket, perfect for evening or formal wear.",
        price: "$100 - $180",
        materials: ["Faux Fur", "Polyester"]
      },
      {
        name: "Beige Wool Blend Coat",
        description: "A sophisticated beige coat with a clean, tailored fit.",
        price: "$130 - $220",
        materials: ["Wool Blend", "Viscose"]
      },
      {
        name: "Camel Turtleneck Sweater",
        description: "A simple yet elegant camel sweater with a comfortable turtleneck.",
        price: "$50 - $90",
        materials: ["Knitted Fabric", "Acrylic"]
      },
      {
        name: "Green Quilted Parka",
        description: "A practical green parka with quilted texture and a warm lining.",
        price: "$90 - $150",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Chic Beige Two-Piece Suit",
        description: "A tailored beige blazer and pants set for professional or formal occasions.",
        price: "$180 - $300",
        materials: ["Linen", "Cotton"]
      },
      {
        name: "Black Cropped Leather Jacket",
        description: "A bold black cropped leather jacket for an edgy yet chic look.",
        price: "$150 - $250",
        materials: ["Genuine Leather", "Polyester"]
      },
      {
        name: "Soft Pink Knit Sweater",
        description: "A warm and cozy pink sweater with a subtle knit pattern.",
        price: "$50 - $90",
        materials: ["Cotton", "Acrylic"]
      },
      {
        name: "Gray Wool Overcoat",
        description: "A formal gray overcoat designed for elegance and warmth.",
        price: "$150 - $300",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "White Teddy Coat",
        description: "A fluffy white teddy coat offering comfort and warmth in colder months.",
        price: "$90 - $180",
        materials: ["Faux Shearling", "Polyester"]
      },
      {
        name: "Beige Wrap Dress",
        description: "A lightweight beige wrap dress with a tie-waist design for casual outings.",
        price: "$60 - $120",
        materials: ["Cotton Blend", "Viscose"]
      },
      {
        name: "Olive Green Utility Jacket",
        description: "A military-style olive jacket featuring utility pockets and a relaxed fit.",
        price: "$80 - $140",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Classic Black Peacoat",
        description: "A double-breasted black peacoat for a timeless winter wardrobe.",
        price: "$120 - $200",
        materials: ["Wool", "Acrylic"]
      },
      {
        name: "White Fluffy Sweater",
        description: "A soft and fluffy white sweater for a cozy and casual winter look.",
        price: "$50 - $90",
        materials: ["Fleece", "Acrylic"]
      },
      {
        name: "Black Cropped Blazer",
        description: "A modern cropped black blazer suitable for formal or casual styling.",
        price: "$100 - $150",
        materials: ["Polyester", "Cotton"]
      },
      {
        name: "Neutral Puffer Jacket",
        description: "A neutral-toned puffer jacket designed for warmth and minimalistic aesthetics.",
        price: "$90 - $150",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Tan Longline Coat",
        description: "A long tan coat for layering and adding elegance to any outfit.",
        price: "$130 - $220",
        materials: ["Wool Blend", "Polyester"]
      },
      {
        name: "Chunky Gray Knit Sweater",
        description: "A chunky-knit gray sweater with oversized sleeves for cozy styling.",
        price: "$50 - $100",
        materials: ["Knitted Fabric", "Wool"]
      },
      {
        name: "Black Parka with Faux Fur Hood",
        description: "A black parka featuring a detachable faux fur-lined hood for a versatile winter look.",
        price: "$120 - $200",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "White Ribbed Maxi Dress",
        description: "A long white ribbed dress for a sleek and minimalistic silhouette.",
        price: "$50 - $100",
        materials: ["Knitted Fabric", "Viscose"]
      },
      {
        name: "Camel Cape Coat",
        description: "A stylish camel-colored cape coat with an open design for layering.",
        price: "$150 - $250",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Dusty Pink Turtleneck",
        description: "A turtleneck sweater in dusty pink, ideal for subtle pops of color in winter.",
        price: "$50 - $90",
        materials: ["Acrylic", "Wool"]
      },
      {
        name: "Black Satin Maxi Dress",
        description: "A flowing black satin dress for formal evening occasions.",
        price: "$120 - $250",
        materials: ["Satin", "Polyester"]
      },
      {
        name: "White Quilted Winter Coat",
        description: "A long white quilted coat for stylish warmth during snowy days.",
        price: "$150 - $300",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Casual Olive Knit Dress",
        description: "A relaxed olive-green dress with a ribbed knit texture for casual wear.",
        price: "$60 - $120",
        materials: ["Cotton Blend", "Polyester"]
      },
      {
        name: "Brown Oversized Turtleneck Sweater",
        description: "A chunky brown turtleneck sweater, perfect for layering in cooler months.",
        price: "$60 - $110",
        materials: ["Wool Blend", "Acrylic"]
      },
      {
        name: "Camel Open-Front Coat",
        description: "A camel-colored coat with an open-front design, ideal for layering.",
        price: "$120 - $200",
        materials: ["Wool Blend", "Viscose"]
      },
      {
        name: "Minimalist Beige Poncho",
        description: "A cozy beige poncho with a soft texture and flowing silhouette.",
        price: "$80 - $140",
        materials: ["Fleece", "Acrylic"]
      },
      {
        name: "Black Midi Skirt and Top Set",
        description: "A fitted black midi skirt with a matching cropped top for a chic monochrome look.",
        price: "$100 - $180",
        materials: ["Knitted Fabric", "Polyester"]
      },
      {
        name: "Black Wool Overcoat",
        description: "A classic black wool overcoat, perfect for layering during winter.",
        price: "$150 - $250",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Beige Trench Coat",
        description: "A timeless beige trench coat, offering a sophisticated and versatile look.",
        price: "$130 - $220",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Gray Tweed Jacket",
        description: "A tailored gray tweed jacket with a traditional houndstooth pattern.",
        price: "$90 - $160",
        materials: ["Wool Blend", "Acrylic"]
      },
      {
        name: "Black Leather Jacket",
        description: "A sleek black leather jacket that combines edgy and chic style.",
        price: "$150 - $250",
        materials: ["Genuine Leather", "Polyester"]
      },
      {
        name: "Plaid Wool Blazer",
        description: "A stylish plaid wool blazer with a fitted cut, ideal for a formal look.",
        price: "$120 - $200",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Red Faux Fur Coat",
        description: "A bold red faux fur coat, perfect for a statement winter look.",
        price: "$140 - $220",
        materials: ["Faux Fur", "Polyester"]
      },
      {
        name: "Camel Knit Cardigan",
        description: "A cozy camel-colored knit cardigan for a casual yet warm outfit.",
        price: "$60 - $100",
        materials: ["Acrylic", "Wool"]
      },
      {
        name: "White Cable-Knit Sweater",
        description: "A simple white sweater featuring intricate cable-knit design.",
        price: "$50 - $90",
        materials: ["Cotton", "Acrylic"]
      },
      {
        name: "Navy Double-Breasted Blazer",
        description: "A navy blue double-breasted blazer, perfect for formal occasions.",
        price: "$120 - $200",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Pink Faux Fur Jacket",
        description: "A playful pink faux fur jacket that adds a pop of color and texture.",
        price: "$130 - $220",
        materials: ["Faux Fur", "Polyester"]
      },
      {
        name: "Olive Green Puffer Jacket",
        description: "An olive green puffer jacket designed for warmth and a trendy look.",
        price: "$90 - $150",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Black Wool Turtleneck Sweater",
        description: "A cozy black wool turtleneck sweater for cold-weather layering.",
        price: "$70 - $120",
        materials: ["Wool", "Acrylic"]
      },
      {
        name: "Gray Wool Blend Coat",
        description: "A stylish gray wool blend coat with a sleek, tailored fit.",
        price: "$150 - $250",
        materials: ["Wool Blend", "Polyester"]
      },
      {
        name: "Burgundy Faux Leather Jacket",
        description: "A trendy burgundy faux leather jacket with a modern zip-up design.",
        price: "$100 - $180",
        materials: ["Faux Leather", "Polyester"]
      },
      {
        name: "Beige Faux Fur Vest",
        description: "A beige faux fur vest that adds warmth and texture to any outfit.",
        price: "$80 - $140",
        materials: ["Faux Fur", "Polyester"]
      },
      {
        name: "Black Midi Skirt",
        description: "A classic black midi skirt that can be dressed up or down.",
        price: "$40 - $70",
        materials: ["Polyester", "Spandex"]
      },
      {
        name: "White Leather Crossbody Bag",
        description: "A sleek white leather crossbody bag with adjustable strap.",
        price: "$60 - $120",
        materials: ["Genuine Leather"]
      },
      {
        name: "Plaid Wool Scarf",
        description: "A warm plaid wool scarf to complement any winter outfit.",
        price: "$30 - $60",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Black Ankle Boots",
        description: "Classic black ankle boots with a modern heel, ideal for everyday wear.",
        price: "$80 - $150",
        materials: ["Genuine Leather", "Rubber"]
      },
      {
        name: "Red Wool Beret",
        description: "A stylish red wool beret that adds a touch of flair to winter outfits.",
        price: "$30 - $50",
        materials: ["Wool"]
      },
      {
        name: "Camel Double-Breasted Coat",
        description: "A warm camel-colored double-breasted coat with a chic design.",
        price: "$150 - $250",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Brown Leather Gloves",
        description: "Elegant brown leather gloves that provide warmth and style.",
        price: "$40 - $80",
        materials: ["Genuine Leather"]
      },
      {
        name: "Gray Wool Trousers",
        description: "Tailored gray wool trousers for a refined professional look.",
        price: "$90 - $150",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Green Military Jacket",
        description: "A rugged green military-style jacket with functional pockets.",
        price: "$80 - $140",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Patterned Knit Scarf",
        description: "A patterned knit scarf, perfect for adding style to cold-weather outfits.",
        price: "$25 - $50",
        materials: ["Acrylic", "Polyester"]
      },
      {
        name: "Black Wool Overcoat",
        description: "A classic black wool overcoat, offering a sleek and warm layer for winter.",
        price: "$180 - $300",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Light Brown Cashmere Sweater",
        description: "A soft, light brown cashmere sweater ideal for layering or wearing alone.",
        price: "$150 - $250",
        materials: ["Cashmere"]
      },
      {
        name: "Plaid Wool Blazer",
        description: "A tailored plaid wool blazer, perfect for a smart, casual look.",
        price: "$120 - $200",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Navy Puffer Jacket",
        description: "A sleek navy puffer jacket, offering warmth and comfort without sacrificing style.",
        price: "$100 - $180",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Beige Trench Coat",
        description: "A timeless beige trench coat with a double-breasted style for formal or casual outfits.",
        price: "$140 - $220",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Grey Tweed Jacket",
        description: "A sophisticated grey tweed jacket with a textured finish, perfect for chilly days.",
        price: "$130 - $190",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Red Faux Fur Coat",
        description: "A bold red faux fur coat that brings warmth and style with a touch of luxury.",
        price: "$150 - $240",
        materials: ["Faux Fur", "Polyester"]
      },
      {
        name: "Camel Wool Blend Coat",
        description: "A timeless camel wool blend coat that pairs perfectly with any winter wardrobe.",
        price: "$160 - $250",
        materials: ["Wool Blend", "Polyester"]
      },
      {
        name: "White Cable Knit Sweater",
        description: "A soft white cable-knit sweater, perfect for layering or wearing on its own.",
        price: "$60 - $110",
        materials: ["Cotton", "Acrylic"]
      },
      {
        name: "Black Leather Jacket",
        description: "A versatile black leather jacket, perfect for adding an edgy touch to any outfit.",
        price: "$150 - $250",
        materials: ["Genuine Leather", "Polyester"]
      },
      {
        name: "Gray Wool Scarf",
        description: "A cozy gray wool scarf, perfect for keeping warm in style during the colder months.",
        price: "$30 - $60",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Beige Wool Skirt",
        description: "A flattering beige wool skirt that pairs well with various tops and shoes.",
        price: "$70 - $120",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Black Ankle Boots",
        description: "Sleek black ankle boots with a modern heel for versatile wear throughout the seasons.",
        price: "$80 - $150",
        materials: ["Genuine Leather", "Rubber"]
      },
      {
        name: "Burgundy Midi Skirt",
        description: "A chic burgundy midi skirt, perfect for both casual and formal occasions.",
        price: "$60 - $100",
        materials: ["Polyester", "Spandex"]
      },
      {
        name: "Olive Green Jacket",
        description: "A military-inspired olive green jacket, perfect for casual or urban looks.",
        price: "$100 - $160",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Black Knit Beanie",
        description: "A classic black knit beanie to keep you warm and stylish during the winter months.",
        price: "$20 - $40",
        materials: ["Acrylic", "Polyester"]
      },
      {
        name: "White Faux Leather Bag",
        description: "A sleek white faux leather handbag, adding a touch of elegance to any look.",
        price: "$60 - $120",
        materials: ["Faux Leather"]
      },
      {
        name: "Gray Wool Trousers",
        description: "Tailored gray wool trousers that offer a refined and professional look.",
        price: "$90 - $160",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Brown Leather Gloves",
        description: "Soft brown leather gloves that offer both warmth and sophistication.",
        price: "$40 - $80",
        materials: ["Genuine Leather"]
      },
      {
        name: "Plaid Shirt Jacket",
        description: "A cozy plaid shirt jacket that blends casual comfort with stylish design.",
        price: "$60 - $100",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Camel Wool Scarf",
        description: "A soft camel-colored wool scarf, perfect for layering and staying warm.",
        price: "$30 - $50",
        materials: ["Wool"]
      },
      {
        name: "Denim Jacket with Shearling Collar",
        description: "A rugged denim jacket featuring a warm shearling collar, perfect for casual wear.",
        price: "$85 - $130",
        materials: ["Denim", "Shearling"]
      },
      {
        name: "Cropped Black Leather Jacket",
        description: "A bold cropped black leather jacket, perfect for layering over stylish outfits.",
        price: "$120 - $200",
        materials: ["Genuine Leather", "Polyester"]
      },
      {
        name: "Plaid Shirt Dress",
        description: "A classic plaid shirt dress that blends comfort and style for any occasion.",
        price: "$60 - $100",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Rust Wool Blend Coat",
        description: "A sophisticated rust wool blend coat for winter, providing both warmth and elegance.",
        price: "$180 - $250",
        materials: ["Wool Blend", "Polyester"]
      },
      {
        name: "Olive Green Utility Jacket",
        description: "A stylish olive green utility jacket with multiple pockets and a relaxed fit.",
        price: "$90 - $150",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Striped Knit Sweater",
        description: "A colorful striped knit sweater, perfect for layering and adding a playful touch.",
        price: "$50 - $80",
        materials: ["Acrylic", "Polyester"]
      },
      {
        name: "Black Faux Fur Vest",
        description: "A chic black faux fur vest that adds a luxurious layer to your fall wardrobe.",
        price: "$75 - $130",
        materials: ["Faux Fur", "Polyester"]
      },
      {
        name: "Checked Wool Skirt",
        description: "A high-waisted checked wool skirt that pairs perfectly with tights and boots.",
        price: "$60 - $110",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Camel Trench Coat",
        description: "A classic camel trench coat with double-breasted buttons and a flattering silhouette.",
        price: "$140 - $220",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Black Stretch Skinny Jeans",
        description: "Versatile black stretch skinny jeans that fit like a glove and pair well with any top.",
        price: "$40 - $80",
        materials: ["Cotton", "Spandex"]
      },
      {
        name: "Floral Midi Skirt",
        description: "A feminine floral midi skirt, ideal for pairing with a blouse or sweater.",
        price: "$55 - $100",
        materials: ["Polyester", "Spandex"]
      },
      {
        name: "Light Grey Blazer",
        description: "A smart light grey blazer, perfect for both work and casual wear.",
        price: "$100 - $160",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "White Cable Knit Sweater",
        description: "A cozy white cable-knit sweater, perfect for layering or wearing on its own.",
        price: "$60 - $100",
        materials: ["Cotton", "Acrylic"]
      },
      {
        name: "Chunky Black Boots",
        description: "Bold chunky black boots with a thick sole, ideal for adding edge to any outfit.",
        price: "$80 - $150",
        materials: ["Leather", "Rubber"]
      },
      {
        name: "Brown Leather Crossbody Bag",
        description: "A classic brown leather crossbody bag, versatile and stylish for everyday use.",
        price: "$60 - $120",
        materials: ["Leather"]
      },
      {
        name: "Camel Wool Scarf",
        description: "A cozy camel wool scarf, perfect for layering and staying warm in winter.",
        price: "$30 - $60",
        materials: ["Wool"]
      },
      {
        name: "Plaid Wool Blazer",
        description: "A stylish plaid wool blazer with a fitted cut, perfect for both work and casual outings.",
        price: "$120 - $180",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Green Utility Pants",
        description: "Durable green utility pants with a relaxed fit, perfect for casual looks.",
        price: "$60 - $100",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Leopard Print Coat",
        description: "A statement leopard print coat that adds a touch of wild style to any winter outfit.",
        price: "$150 - $230",
        materials: ["Polyester", "Faux Fur"]
      },
      {
        name: "Black Quilted Puffer Jacket",
        description: "A stylish black quilted puffer jacket that keeps you warm while maintaining a sleek look.",
        price: "$120 - $180",
        materials: ["Polyester", "Down Fill"]
      },
      {
        name: "Gray Wool Overcoat",
        description: "A long gray wool overcoat with a minimalist design, perfect for both professional and casual wear.",
        price: "$150 - $250",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Black High-Waisted Leather Skirt",
        description: "A bold black high-waisted leather skirt, ideal for edgy yet chic looks.",
        price: "$90 - $140",
        materials: ["Genuine Leather"]
      },
      {
        name: "Blue Denim Button-Down Dress",
        description: "A classic blue denim button-down dress that’s versatile and flattering for all body types.",
        price: "$65 - $110",
        materials: ["Denim", "Cotton"]
      },
      {
        name: "Plaid Flannel Shirt",
        description: "A cozy plaid flannel shirt that pairs perfectly with jeans for a casual, laid-back look.",
        price: "$40 - $70",
        materials: ["Cotton"]
      },
      {
        name: "Burgundy Wool Knit Sweater",
        description: "A rich burgundy wool knit sweater that adds a pop of color and warmth to your wardrobe.",
        price: "$50 - $90",
        materials: ["Wool", "Acrylic"]
      },
      {
        name: "Black Faux Leather Moto Jacket",
        description: "A stylish black faux leather moto jacket with an asymmetrical zipper for a rugged look.",
        price: "$100 - $160",
        materials: ["Faux Leather"]
      },
      {
        name: "Charcoal Grey Sweatpants",
        description: "Comfortable and relaxed charcoal grey sweatpants, perfect for lounging or casual outings.",
        price: "$40 - $60",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Camel Turtleneck Sweater",
        description: "A warm and stylish camel turtleneck sweater that can be worn on its own or layered.",
        price: "$60 - $100",
        materials: ["Acrylic", "Wool"]
      },
      {
        name: "Beige Wool Blend Blazer",
        description: "A sophisticated beige wool blend blazer, ideal for creating a polished look at work or social events.",
        price: "$130 - $180",
        materials: ["Wool Blend", "Polyester"]
      },
      {
        name: "Floral Print Maxi Skirt",
        description: "A feminine floral print maxi skirt that’s perfect for spring or summer days.",
        price: "$50 - $85",
        materials: ["Polyester", "Spandex"]
      },
      {
        name: "White V-Neck T-Shirt",
        description: "A simple white v-neck t-shirt, a wardrobe essential for layering or wearing on its own.",
        price: "$20 - $35",
        materials: ["Cotton"]
      },
      {
        name: "Brown Suede Ankle Boots",
        description: "A pair of classic brown suede ankle boots, perfect for adding a touch of sophistication to any outfit.",
        price: "$80 - $120",
        materials: ["Suede", "Rubber Sole"]
      },
      {
        name: "Ribbed Knit Cardigan",
        description: "A cozy ribbed knit cardigan in soft neutral tones, ideal for layering during cooler months.",
        price: "$45 - $75",
        materials: ["Acrylic", "Cotton"]
      },
      {
        name: "Dark Denim Wide-Leg Pants",
        description: "Comfortable dark denim wide-leg pants that pair well with both casual and semi-formal outfits.",
        price: "$65 - $100",
        materials: ["Denim"]
      },
      {
        name: "Classic Navy Peacoat",
        description: "A timeless navy peacoat with double-breasted buttons, perfect for winter weather.",
        price: "$120 - $200",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Beige Knit Sweater Dress",
        description: "A cozy beige knit sweater dress, ideal for layering with tights and boots for colder weather.",
        price: "$80 - $130",
        materials: ["Acrylic", "Polyester"]
      },
      {
        name: "Plaid Wrap Skirt",
        description: "A stylish plaid wrap skirt with a flattering cut, perfect for autumn or winter outfits.",
        price: "$45 - $70",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Gray Wool Knit Sweater",
        description: "A cozy gray wool knit sweater, perfect for layering in chilly weather.",
        price: "$60 - $110",
        materials: ["Wool", "Acrylic"]
      },
      {
        name: "Black Corduroy Jacket",
        description: "A casual black corduroy jacket with a button-up closure for a vintage-inspired look.",
        price: "$80 - $140",
        materials: ["Corduroy"]
      },
      {
        name: "Plaid Shirt Dress",
        description: "A comfortable plaid shirt dress with a relaxed fit, great for casual outings.",
        price: "$50 - $85",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Olive Green Bomber Jacket",
        description: "An olive green bomber jacket with a zipper closure, perfect for a sporty, casual look.",
        price: "$95 - $160",
        materials: ["Polyester", "Nylon"]
      },
      {
        name: "Beige Linen Blazer",
        description: "A light beige linen blazer that’s perfect for adding a touch of class to any outfit.",
        price: "$120 - $180",
        materials: ["Linen", "Cotton"]
      },
      {
        name: "White Crop Top with Ruffle Sleeves",
        description: "A stylish white crop top with ruffled sleeves, offering a playful and feminine vibe.",
        price: "$30 - $55",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Black High-Waisted Pants",
        description: "Chic black high-waisted pants that are perfect for both office wear and casual looks.",
        price: "$60 - $100",
        materials: ["Polyester", "Spandex"]
      },
      {
        name: "Distressed Blue Jeans",
        description: "A pair of distressed blue jeans with a modern, relaxed fit and worn-in details.",
        price: "$45 - $80",
        materials: ["Denim"]
      },
      {
        name: "Striped Boat Neck Top",
        description: "A casual striped boat neck top that pairs well with jeans or skirts for a nautical-inspired look.",
        price: "$40 - $70",
        materials: ["Cotton"]
      },
      {
        name: "Leather Ankle Boots",
        description: "Stylish leather ankle boots with a sleek design, perfect for fall and winter wardrobes.",
        price: "$120 - $180",
        materials: ["Genuine Leather"]
      },
      {
        name: "Camel Wool Scarf",
        description: "A cozy camel wool scarf that adds warmth and elegance to any winter outfit.",
        price: "$40 - $65",
        materials: ["Wool"]
      },
      {
        name: "Red Plaid Shirt",
        description: "A classic red plaid shirt that adds a casual, rugged vibe to any ensemble.",
        price: "$35 - $60",
        materials: ["Cotton"]
      },
      {
        name: "Denim Jacket",
        description: "A timeless denim jacket with a slightly distressed finish for a laid-back, versatile look.",
        price: "$70 - $120",
        materials: ["Denim"]
      },
      {
        name: "Gray Sweatshirt Dress",
        description: "A comfortable and casual gray sweatshirt dress that’s perfect for everyday wear.",
        price: "$50 - $85",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Black Skinny Jeans",
        description: "Classic black skinny jeans that offer a sleek, fitted look and go with almost anything.",
        price: "$45 - $75",
        materials: ["Cotton", "Spandex"]
      },
      {
        name: "White Sleeveless Blouse",
        description: "A light and airy white sleeveless blouse, perfect for warmer weather or layering.",
        price: "$40 - $70",
        materials: ["Cotton"]
      },
      {
        name: "Khaki Utility Pants",
        description: "A pair of khaki utility pants with pockets and a relaxed fit, perfect for a casual weekend look.",
        price: "$60 - $90",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Navy Wool Peacoat",
        description: "A navy wool peacoat with double-breasted buttons, ideal for cold weather.",
        price: "$150 - $220",
        materials: ["Wool"]
      },
      {
        name: "Tan Faux Fur Coat",
        description: "A luxurious tan faux fur coat, adding warmth and elegance to any winter outfit.",
        price: "$100 - $160",
        materials: ["Faux Fur"]
      }
  ];
  


const Athdescriptions = [
    {
        name: "Chic Windbreaker Set", 
        description: "An urban-style outfit featuring a dark green windbreaker with matching shorts, paired with high-top sneakers for a sporty yet casual look.", 
        price: "$50 - $80", 
        materials: ["Polyester", "Spandex", "Cotton"]
        },
        {
        name: "Casual Polo Co-Ord", 
        description: "A sleek and modern short-sleeve gray polo shirt paired with tailored matching shorts, perfect for an effortless streetwear look.", 
        price: "$60 - $90", 
        materials: ["Cotton", "Polyester"]
        },
        {
        name: "Athleisure Tank & Shorts", 
        description: "A versatile black tank top with gray relaxed-fit shorts, ideal for casual outings or workout sessions.", 
        price: "$40 - $70", 
        materials: ["Cotton", "Elastane"]
        },
        {
        name: "Beige Polo Summer Set", 
        description: "A minimalist beige polo shirt paired with relaxed-fit shorts, offering a refined yet comfortable summer vibe.", 
        price: "$50 - $80", 
        materials: ["Cotton", "Linen"]
        },
        {
        name: "Sport Luxe Tracksuit", 
        description: "A black and blue zip-up tracksuit featuring a sleek color block design, paired with comfortable joggers for a sporty yet polished look.", 
        price: "$70 - $100", 
        materials: ["Polyester", "Nylon"]
        },
        {
        name: "Classic Sport Tracksuit", 
        description: "A bold black and red tracksuit with signature stripe detailing, designed for a sporty and dynamic look.", 
        price: "$70 - $100", 
        materials: ["Polyester", "Elastane"]
      },
      {
        name: "Olive Relaxed Fit Set", 
        description: "A comfortable olive-green tracksuit with a crew neck sweatshirt and matching joggers, ideal for casual wear.", 
        price: "$60 - $90", 
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Casual Gray Co-Ord", 
        description: "A light gray unisex two-piece outfit with an oversized top and wide-leg pants, offering a modern and relaxed silhouette.", 
        price: "$50 - $80", 
        materials: ["Polyester", "Rayon"]
      },
      {
        name: "Neutral Lounge Set", 
        description: "A beige two-piece set with a boxy top and loose trousers, providing ultimate comfort and a minimalist aesthetic.", 
        price: "$50 - $80", 
        materials: ["Cotton", "Linen"]
      },
      {
        name: "Streetwear Travel Fit", 
        description: "A sleek all-black outfit featuring a zip-up hoodie and slim-fit joggers, perfect for on-the-go style.", 
        price: "$80 - $120", 
        materials: ["Cotton", "Polyester", "Spandex"]
      },
      {
        name: "Monochrome Jogger Set", 
        description: "A relaxed-fit dark gray sweatshirt paired with light gray joggers, styled with a baseball cap for a casual and sporty vibe.", 
        price: "$50 - $80", 
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Urban Hoodie Fit", 
        description: "A light gray hoodie paired with slim-fit black joggers and white sneakers, perfect for a modern streetwear look.", 
        price: "$60 - $90", 
        materials: ["Cotton", "Fleece"]
      },
      {
        name: "Travel Comfort Set", 
        description: "A beige matching hoodie and jogger set, styled with a baseball cap and sneakers, ideal for traveling in style and comfort.", 
        price: "$70 - $100", 
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Sporty Hooded Outfit", 
        description: "A cream-colored hoodie paired with black leggings and white high-top sneakers, great for a casual day outdoors.", 
        price: "$50 - $80", 
        materials: ["Cotton", "Spandex"]
      },
      {
        name: "Coffee Run Layered Look", 
        description: "A cozy layered outfit featuring a gray hoodie, black quilted vest, and slim-fit joggers, paired with a beanie and white sneakers for a chic casual look.", 
        price: "$60 - $90", 
        materials: ["Polyester", "Cotton", "Fleece"]
      },
      {
        name: "Urban Edge Casual",
        description: "A sporty, layered outfit featuring a black leather jacket, beige hoodie, black leggings, and chunky white sneakers, topped off with a black beanie for a stylish city vibe.",
        price: "$70 - $110",
        materials: ["Faux Leather", "Cotton", "Spandex", "Mesh"]
      },
      {
        name: "Minimalist Streetwear",
        description: "A simple yet trendy combination of a gray oversized zip-up hoodie, light gray leggings, and white sneakers. Paired with a baseball cap for a sporty and relaxed finish.",
        price: "$50 - $80",
        materials: ["Polyester", "Cotton", "Elastane"]
      },
      {
        name: "Sophisticated Athleisure",
        description: "A sleek look with a black sweater layered over the shoulders, black leggings, and statement white sneakers. The outfit is perfect for a casual outing or a city stroll.",
        price: "$60 - $100",
        materials: ["Wool Blend", "Cotton", "Spandex"]
      },
      {
        name: "Chic Gym Run",
        description: "An active yet chic outfit featuring a light-gray hoodie, charcoal leggings, and chunky white sneakers. Finished with a white baseball cap for a sporty vibe.",
        price: "$55 - $85",
        materials: ["Fleece", "Polyester", "Rubber"]
      },
      {
        name: "Athletic Cool",
        description: "A relaxed sporty outfit with a gray zip-up jacket, black Adidas track pants, and black-and-white trainers. Paired with a high bun and sunglasses for a trendy on-the-go look.",
        price: "$65 - $95",
        materials: ["Polyester", "Elastane", "Synthetic"]
      },
      {
        name: "Sporty Chic",
        description: "A sleek outfit featuring a cropped green hoodie, black joggers, and white high-top sneakers. Accessorized with a black cap for a casual sporty vibe.",
        price: "$60 - $90",
        materials: ["Cotton", "Polyester", "Canvas"]
      },
      {
        name: "Monochrome Minimalist",
        description: "An all-black ensemble with a cropped sweatshirt, tapered joggers, and white sneakers. Perfect for a cozy yet stylish athleisure look.",
        price: "$50 - $80",
        materials: ["Fleece", "Cotton", "Rubber"]
      },
      {
        name: "Athletic Gray",
        description: "A fitted gray long-sleeve top paired with black joggers and sleek black sneakers. Ideal for both workouts and casual errands.",
        price: "$70 - $100",
        materials: ["Polyester", "Spandex", "Mesh"]
      },
      {
        name: "Casual Cool",
        description: "A relaxed look featuring a gray hoodie, gray sweatpants, and white sneakers, layered with a navy bomber jacket for added style.",
        price: "$65 - $95",
        materials: ["Cotton", "Polyester", "Elastane"]
      },
      {
        name: "City Sophistication",
        description: "A refined outfit featuring a teal sweater, black slim-fit pants, and white sneakers. A versatile style for urban outings.",
        price: "$80 - $120",
        materials: ["Wool", "Cotton", "Leather"]
      },
      {
        name: "Summer Athleisure",
        description: "A casual summer outfit with a white oversized t-shirt, black shorts, and white sneakers. Simple, breathable, and stylish.",
        price: "$40 - $70",
        materials: ["Cotton", "Elastane", "Rubber"]
      },
      {
        name: "Edgy Luxe",
        description: "A bold black outfit featuring a cropped top, faux-leather leggings, and chunky sneakers, layered with a leather jacket for a chic urban vibe.",
        price: "$90 - $130",
        materials: ["Faux Leather", "Polyester", "Rubber"]
      },
      {
        name: "Coffee Date Casual",
        description: "A sophisticated trench coat layered over a gray hoodie, paired with black leggings and chunky sneakers. Completed with a baseball cap for a casual-chic vibe.",
        price: "$100 - $150",
        materials: ["Cotton", "Wool", "Synthetic"]
      },
      {
        name: "Trendy Layers",
        description: "A modern streetwear look with a gray oversized hoodie, black leggings, and chunky sneakers, accessorized with a mini handbag and a cap.",
        price: "$70 - $110",
        materials: ["Cotton", "Fleece", "Rubber"]
      },
      {
        name: "Black-on-Black Elegance",
        description: "A sleek black outfit featuring a leather jacket, black leggings, and chunky sneakers. The perfect combination for a night out in the city.",
        price: "$90 - $140",
        materials: ["Faux Leather", "Polyester", "Mesh"]
      }
];
const Minimdescriptions = [
    {
        name: "Black-on-Black Elegance",
        description: "A sleek black outfit featuring a leather jacket, black leggings, and chunky sneakers. The perfect combination for a night out in the city.",
        price: "$90 - $140",
        materials: ["Faux Leather", "Polyester", "Mesh"]
      },
      {
        name: "Red and Black Striped Sport Jacket",
        description: "A vibrant sport jacket featuring bold red and black stripes, perfect for an active yet stylish look.",
        price: "$60 - $100",
        materials: ["Polyester", "Spandex"]
      },
      {
        name: "Olive Green Casual Tracksuit",
        description: "A relaxed-fit olive-green tracksuit, ideal for both lounging and casual outings.",
        price: "$50 - $90",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Gray Oversized Lounge Set",
        description: "A comfy oversized two-piece set in a soft gray tone, great for cozy days indoors.",
        price: "$50 - $80",
        materials: ["Fleece", "Polyester"]
      },
      {
        name: "Beige Minimalist Two-Piece",
        description: "A neutral beige outfit with clean lines and a minimalist design for effortless style.",
        price: "$50 - $85",
        materials: ["Cotton", "Linen"]
      },
      {
        name: "Black Travel Hoodie and Joggers",
        description: "A sleek all-black travel outfit with a lightweight hoodie and joggers, perfect for on-the-go comfort.",
        price: "$70 - $120",
        materials: ["Cotton", "Elastane"]
      },
      {
        name: "White Relaxed Hoodie",
        description: "A cozy white hoodie with a relaxed fit, ideal for layering during cooler days.",
        price: "$40 - $70",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Classic Navy Track Jacket",
        description: "A versatile navy track jacket with stripe detailing, blending comfort with athletic style.",
        price: "$60 - $90",
        materials: ["Polyester", "Nylon"]
      },
      {
        name: "Sporty Beige Hooded Set",
        description: "A sporty hooded set in beige, designed for ultimate comfort and understated fashion.",
        price: "$55 - $85",
        materials: ["Cotton", "Fleece"]
      },
      {
        name: "Slim-Fit Gray Joggers",
        description: "Streamlined joggers in a sleek gray tone, designed for both fitness and casual wear.",
        price: "$40 - $60",
        materials: ["Polyester", "Spandex"]
      },
      {
        name: "Layered Black Puffer Vest",
        description: "A chic black puffer vest layered over a hoodie for a cozy, urban-inspired look.",
        price: "$60 - $90",
        materials: ["Polyester", "Down"]
      },
      {
        name: "Casual Gray Sweatshirt",
        description: "A simple yet stylish gray sweatshirt, perfect for lounging or casual outings.",
        price: "$30 - $60",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Active Streetwear Hoodie",
        description: "A sporty gray hoodie with a modern, slim-fit design ideal for athleisure styling.",
        price: "$40 - $80",
        materials: ["Cotton", "Elastane"]
      },
      {
        name: "Travel Comfort Tracksuit",
        description: "A matching neutral-toned tracksuit designed for travel and relaxation with added style.",
        price: "$50 - $90",
        materials: ["Fleece", "Polyester"]
      },
      {
        name: "Relaxed White Hoodie",
        description: "A cozy white hoodie made for comfort and minimalistic style, great for layering.",
        price: "$40 - $70",
        materials: ["Cotton", "Fleece"]
      },
      {
        name: "Layered Knit and Vest Combo",
        description: "A chic black knit sweater layered with a quilted vest, perfect for outdoor coffee runs.",
        price: "$70 - $120",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Gray Ribbed Sweater",
        description: "A warm ribbed sweater in dark gray with a high neckline for cool-weather comfort.",
        price: "$50 - $80",
        materials: ["Cotton", "Wool Blend"]
      },
      {
        name: "Effortless Beige Two-Piece Set",
        description: "A relaxed beige top and pants set designed for a chic yet comfortable everyday look.",
        price: "$60 - $110",
        materials: ["Linen", "Cotton"]
      },
      {
        name: "Light Gray Utility Joggers",
        description: "Utility-inspired jogger pants with a sleek design and side pockets, perfect for casual wear.",
        price: "$40 - $70",
        materials: ["Polyester", "Cotton"]
      },
      {
        name: "Beige Monochrome Co-Ord",
        description: "A matching monochrome set in beige tones, blending style with effortless ease.",
        price: "$50 - $100",
        materials: ["Cotton Blend", "Elastane"]
      },
      {
        name: "Black Bomber Jacket with Details",
        description: "A sharp black bomber jacket paired with slim-fit black jeans, perfect for urban explorers.",
        price: "$90 - $140",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Beige Knit Cardigan",
        description: "A soft beige cardigan with oversized sleeves, perfect for layering during cool weather.",
        price: "$50 - $90",
        materials: ["Wool", "Acrylic Blend"]
      },
      {
        name: "Light Gray Sweater Dress",
        description: "A cozy gray sweater dress with a relaxed fit, ideal for a casual yet stylish look.",
        price: "$60 - $100",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Black Quilted Puffer Coat",
        description: "A versatile black puffer coat designed for warmth and a sleek winter style.",
        price: "$90 - $150",
        materials: ["Nylon", "Down"]
      },
      {
        name: "Neutral-Tone Hoodie",
        description: "A minimalistic beige hoodie with a soft interior for everyday comfort.",
        price: "$40 - $70",
        materials: ["Cotton", "Fleece"]
      },
      {
        name: "Sporty Olive Tracksuit",
        description: "A modern olive-green tracksuit designed for athleisure styling with a sporty edge.",
        price: "$70 - $120",
        materials: ["Polyester", "Elastane"]
      },
      {
        name: "Chic Beige Blazer",
        description: "A tailored beige blazer for formal or business casual attire.",
        price: "$100 - $180",
        materials: ["Linen", "Polyester"]
      },
      {
        name: "Cozy White Turtleneck",
        description: "A snug white turtleneck sweater, perfect for layering or a minimalist look.",
        price: "$50 - $90",
        materials: ["Wool Blend", "Acrylic"]
      },
      {
        name: "Classic Navy Peacoat",
        description: "A timeless navy-blue peacoat for a sophisticated winter wardrobe.",
        price: "$120 - $200",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Relaxed Knit Lounge Set",
        description: "A beige knit top and bottom set for a cozy and chic loungewear option.",
        price: "$60 - $100",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Black Leather Biker Jacket",
        description: "A bold black leather jacket featuring silver zippers, perfect for edgy styling.",
        price: "$150 - $250",
        materials: ["Genuine Leather", "Polyester Lining"]
      },
      {
        name: "Camel-Colored Wool Coat",
        description: "A long, tailored wool coat in camel color, exuding elegance and warmth.",
        price: "$130 - $220",
        materials: ["Wool", "Viscose"]
      }
];

const Maximdescriptions = [
    {
        name: "Lightweight Denim Jacket",
        description: "A casual blue denim jacket, ideal for layering in transitional seasons.",
        price: "$60 - $110",
        materials: ["Denim", "Cotton"]
      },
      {
        name: "Soft Gray Lounge Set",
        description: "A matching light-gray lounge set, ideal for cozy days at home or errands.",
        price: "$50 - $90",
        materials: ["Cotton Blend", "Fleece"]
      },
      {
        name: "Neutral Ribbed Midi Dress",
        description: "A neutral-toned ribbed midi dress for a sleek, minimalistic look.",
        price: "$50 - $100",
        materials: ["Knitted Fabric", "Polyester"]
      },
      {
        name: "Warm White Cable-Knit Sweater",
        description: "A cozy white cable-knit sweater with intricate patterns, ideal for cold weather.",
        price: "$60 - $110",
        materials: ["Wool", "Acrylic"]
      },
      {
        name: "Black Winter Trench Coat",
        description: "A long black trench coat for a polished and sophisticated winter look.",
        price: "$120 - $200",
        materials: ["Wool Blend", "Polyester"]
      },
      {
        name: "Oversized Taupe Hoodie",
        description: "A relaxed taupe hoodie perfect for layering or casual outings.",
        price: "$40 - $70",
        materials: ["Cotton", "Fleece"]
      },
      {
        name: "Khaki Utility Jacket",
        description: "A lightweight khaki jacket with multiple pockets, great for functional style.",
        price: "$80 - $140",
        materials: ["Cotton", "Nylon"]
      },
      {
        name: "Cropped Black Cardigan",
        description: "A sleek black cropped cardigan, perfect for layering with casual outfits.",
        price: "$40 - $70",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Light Beige Puffer Vest",
        description: "A stylish beige puffer vest for added warmth and layering versatility.",
        price: "$60 - $110",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Neutral Maxi Coat",
        description: "A chic neutral-toned maxi coat designed for elegance in colder seasons.",
        price: "$150 - $250",
        materials: ["Wool", "Polyester"]
      },
      {
        name: "Soft Cream Lounge Pants",
        description: "Comfortable cream-colored pants designed for lounging or casual styling.",
        price: "$40 - $80",
        materials: ["Fleece", "Cotton"]
      },
      {
        name: "Tailored Gray Suit Set",
        description: "A modern gray suit set for formal or office wear, designed with a slim fit.",
        price: "$180 - $300",
        materials: ["Linen", "Viscose"]
      },
      {
        name: "Black Cropped Puffer Jacket",
        description: "A trendy cropped puffer jacket in black, offering warmth with modern aesthetics.",
        price: "$90 - $150",
        materials: ["Polyester", "Nylon"]
      },
      {
        name: "Beige High-Neck Knit Sweater",
        description: "A cozy high-neck beige sweater with a relaxed fit, perfect for layering.",
        price: "$60 - $100",
        materials: ["Wool", "Acrylic"]
      },
      {
        name: "Black Turtleneck and Pants Set",
        description: "A sleek black turtleneck paired with matching fitted pants for an elegant monochrome look.",
        price: "$80 - $140",
        materials: ["Knitted Fabric", "Polyester"]
      },
      {
        name: "Casual Olive Parka",
        description: "A practical olive parka featuring a hood and a relaxed silhouette.",
        price: "$100 - $180",
        materials: ["Cotton Blend", "Nylon"]
      },
      {
        name: "Classic Beige Trench Coat",
        description: "A long beige trench coat for a timeless and sophisticated style.",
        price: "$120 - $200",
        materials: ["Cotton", "Polyester"]
      },
      {
        name: "Navy Lounge Tracksuit",
        description: "A relaxed-fit navy tracksuit for a cozy and sporty aesthetic.",
        price: "$70 - $120",
        materials: ["Fleece", "Cotton"]
      },
      {
        name: "Black Padded Winter Coat",
        description: "A long padded winter coat in black for maximum warmth and style.",
        price: "$130 - $220",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Plaid Oversized Coat",
        description: "A statement plaid coat with an oversized fit, perfect for layering.",
        price: "$120 - $200",
        materials: ["Wool Blend", "Polyester"]
      },
      {
        name: "White Cable-Knit Sweater",
        description: "A cozy white sweater with intricate cable-knit details for cold seasons.",
        price: "$60 - $110",
        materials: ["Acrylic", "Wool"]
      },
      {
        name: "Black Faux Fur Jacket",
        description: "A luxurious black faux fur jacket, perfect for evening or formal wear.",
        price: "$100 - $180",
        materials: ["Faux Fur", "Polyester"]
      },
      {
        name: "Beige Wool Blend Coat",
        description: "A sophisticated beige coat with a clean, tailored fit.",
        price: "$130 - $220",
        materials: ["Wool Blend", "Viscose"]
      },
      {
        name: "Camel Turtleneck Sweater",
        description: "A simple yet elegant camel sweater with a comfortable turtleneck.",
        price: "$50 - $90",
        materials: ["Knitted Fabric", "Acrylic"]
      },
      {
        name: "Green Quilted Parka",
        description: "A practical green parka with quilted texture and a warm lining.",
        price: "$90 - $150",
        materials: ["Nylon", "Polyester"]
      },
      {
        name: "Chic Beige Two-Piece Suit",
        description: "A tailored beige blazer and pants set for professional or formal occasions.",
        price: "$180 - $300",
        materials: ["Linen", "Cotton"]
      },
      {
        name: "Black Cropped Leather Jacket",
        description: "A bold black cropped leather jacket for an edgy yet chic look.",
        price: "$150 - $250",
        materials: ["Genuine Leather", "Polyester"]
      },
      {
        name: "Soft Pink Knit Sweater",
        description: "A warm and cozy pink sweater with a subtle knit pattern.",
        price: "$50 - $90",
        materials: ["Cotton", "Acrylic"]
      },
      {
        name: "Gray Wool Overcoat",
        description: "A formal gray overcoat designed for elegance and warmth.",
        price: "$150 - $300",
        materials: ["Wool", "Polyester"]
      }
];

const Streetdescriptions = [
    { name: "Chic Weekend", description: "A chic outfit with a sweater, jeans, and stylish ankle boots.", price: "$70", materials: "Cotton, Wool" },
    { name: "Casual Elegance", description: "A blend of casual and chic with a loose shirt and skinny jeans.", price: "$55", materials: "Cotton, Polyester" },
    { name: "Spring Freshness", description: "A bright and light spring look with a floral blouse and skirt.", price: "$50", materials: "Cotton, Silk" },
    { name: "Sophisticated Style", description: "A sophisticated style featuring a blazer and tailored pants.", price: "$120", materials: "Wool, Polyester" },
    { name: "Cozy Sweater Look", description: "A cozy sweater, perfect for chilly days with a stylish twist.", price: "$45", materials: "Wool, Acrylic" },
    { name: "Urban Casual", description: "An urban street style look with a denim jacket and casual pants.", price: "$60", materials: "Denim, Cotton" },
    { name: "Bohemian Chic", description: "A boho-inspired look with a flowy dress and fringe bag.", price: "$65", materials: "Cotton, Leather" },
    { name: "Athleisure Vibes", description: "Comfort and style combined in this athleisure outfit with leggings and a hoodie.", price: "$50", materials: "Polyester, Spandex" },
    { name: "Classy Dinner Look", description: "A classy outfit with a black dress and elegant heels for a dinner party.", price: "$100", materials: "Silk, Leather" },
    { name: "Street Style Edge", description: "An edgy street style with a leather jacket and black jeans.", price: "$85", materials: "Leather, Denim" },
    { name: "Trendy Chic", description: "A trendy outfit with a cropped jacket and high-waisted trousers.", price: "$75", materials: "Cotton, Polyester" },
    { name: "Cozy and Casual", description: "A casual outfit with a comfy sweater and denim jeans.", price: "$50", materials: "Wool, Denim" },
    { name: "Evening Glamour", description: "A glamorous evening look with a velvet dress and metallic accessories.", price: "$130", materials: "Velvet, Silk" },
    { name: "Weekend Getaway", description: "Perfect for a weekend getaway, featuring a relaxed top and joggers.", price: "$40", materials: "Cotton, Polyester" },
    { name: "Casual Day Out", description: "A relaxed, easygoing look with a simple t-shirt and jeans.", price: "$45", materials: "Cotton, Polyester" },
    { name: "Winter Warmth", description: "A cozy winter look with a thick knitted sweater and scarf.", price: "$70", materials: "Wool, Cashmere" },
    { name: "Professional Power Suit", description: "A sharp, professional suit perfect for meetings or work.", price: "$150", materials: "Wool, Polyester" },
    { name: "Casual Friday", description: "A comfortable yet stylish look for casual Friday with a jacket and shirt.", price: "$60", materials: "Cotton, Linen" },
    { name: "Stylish Street Look", description: "An urban street look with a hoodie and a bomber jacket.", price: "$80", materials: "Cotton, Nylon" },
    { name: "Chic Summer Dress", description: "A lovely summer dress with a casual fit for a sunny day out.", price: "$55", materials: "Cotton, Silk" },
    { name: "Relaxed Comfort", description: "A comfortable yet chic outfit with a cardigan and slim pants.", price: "$50", materials: "Wool, Cotton" },
    { name: "Edgy and Cool", description: "A cool, edgy look featuring a leather jacket and boots.", price: "$90", materials: "Leather, Denim" },
    { name: "Casual Layers", description: "Layered casually with a hoodie and denim jacket for a relaxed vibe.", price: "$65", materials: "Cotton, Polyester" },
    { name: "Festive Look", description: "A festive outfit with a sparkly top and skirt, perfect for the holidays.", price: "$95", materials: "Sequins, Silk" },
    { name: "Timeless Elegance", description: "A timeless look with a classic dress and pearls.", price: "$120", materials: "Silk, Lace" },
    { name: "Sporty Look", description: "A sporty casual look with a graphic tee and sneakers.", price: "$45", materials: "Cotton, Polyester" },
    { name: "Relaxed Fit", description: "A relaxed fit with a simple tee and easygoing trousers.", price: "$50", materials: "Cotton, Linen" },
    { name: "Chic in Black", description: "A classic black outfit with a dress and heels for a night out.", price: "$100", materials: "Silk, Leather" },
    { name: "Cozy Layers", description: "A cozy layered outfit with a thick sweater and scarf for winter.", price: "$85", materials: "Wool, Cashmere" },
    { name: "Casual Yet Chic", description: "A casual yet chic outfit with a loose blouse and denim skirt.", price: "$60", materials: "Cotton, Denim" }
];

const Cottagedescriptions = [
    { name: "Cozy Fall Look", description: "A comfortable yet chic look with a sweater, plaid scarf, and boots.", price: "$60", materials: "Wool, Cotton" },
    { name: "Winter Elegance", description: "A stylish winter outfit with a long coat and knitted accessories.", price: "$100", materials: "Wool, Cashmere" },
    { name: "Casual Streetwear", description: "A laid-back street style look with a hoodie and sneakers.", price: "$45", materials: "Cotton, Polyester" },
    { name: "Luxe Winter Coat", description: "A high-end winter coat paired with a scarf and gloves for the cold season.", price: "$130", materials: "Wool, Leather" },
    { name: "Weekend Casual", description: "An easygoing weekend outfit with a graphic t-shirt and relaxed jeans.", price: "$40", materials: "Cotton, Denim" },
    { name: "Chic Urban Style", description: "A modern look with a leather jacket and ripped jeans.", price: "$85", materials: "Leather, Denim" },
    { name: "Boho Vibes", description: "A bohemian-inspired look with a flowy blouse and wide-leg pants.", price: "$55", materials: "Cotton, Linen" },
    { name: "Sporty Chic", description: "A sporty outfit with a fitted jacket, leggings, and sneakers for an active day.", price: "$60", materials: "Polyester, Spandex" },
    { name: "Classy Evening Dress", description: "An elegant evening dress for formal events, perfect for cocktail parties.", price: "$140", materials: "Silk, Lace" },
    { name: "Casual Chic", description: "A stylish casual outfit with a tailored jacket and skinny jeans.", price: "$75", materials: "Cotton, Polyester" },
    { name: "Urban Cool", description: "A sleek, fashionable look with a bomber jacket and black jeans.", price: "$90", materials: "Leather, Denim" },
    { name: "Formal Power Suit", description: "A sharp suit for work or formal occasions, with a tailored blazer and trousers.", price: "$120", materials: "Wool, Polyester" },
    { name: "Preppy Look", description: "A neat and smart preppy outfit with a collared shirt and cardigan.", price: "$50", materials: "Cotton, Wool" },
    { name: "Casual Beach Look", description: "A laid-back beach outfit with a tank top and cargo shorts.", price: "$35", materials: "Cotton, Linen" },
    { name: "Spring Layers", description: "A spring look with a light jacket, jeans, and a soft scarf.", price: "$65", materials: "Cotton, Polyester" },
    { name: "Sleek Workwear", description: "A professional and sleek work outfit with a blazer and pencil skirt.", price: "$90", materials: "Polyester, Wool" },
    { name: "Weekend Getaway", description: "A relaxed weekend getaway look with a striped t-shirt and denim skirt.", price: "$50", materials: "Cotton, Denim" },
    { name: "Cozy Knitwear", description: "A warm knit sweater with matching pants for a cozy winter day.", price: "$70", materials: "Wool, Cashmere" },
    { name: "Summer Vibes", description: "A breezy and light summer outfit with a floral dress and sandals.", price: "$45", materials: "Cotton, Polyester" },
    { name: "Evening Glam", description: "A glamorous evening look with a velvet dress and statement accessories.", price: "$110", materials: "Velvet, Silk" },
    { name: "Relaxed Fit", description: "A comfortable relaxed fit with a loose shirt and trousers.", price: "$50", materials: "Cotton, Linen" },
    { name: "City Style", description: "A smart city style look with a coat, boots, and gloves.", price: "$80", materials: "Wool, Leather" },
    { name: "Rooftop Dinner Look", description: "A chic dinner outfit with a high-waisted skirt and satin top.", price: "$95", materials: "Satin, Polyester" },
    { name: "Cozy Layers", description: "A warm layered outfit with a sweater, scarf, and trench coat.", price: "$85", materials: "Wool, Cashmere" },
    { name: "Winter Wonderland", description: "A festive winter look with a fluffy sweater and snow boots.", price: "$75", materials: "Wool, Fur" },
    { name: "Street Style Cool", description: "An edgy look with a graphic tee, jacket, and sneakers.", price: "$60", materials: "Cotton, Denim" },
    { name: "Sophisticated Office Look", description: "A professional office look with a tailored blazer and pencil skirt.", price: "$95", materials: "Wool, Polyester" },
    { name: "Sporty Vibes", description: "A casual sporty outfit with a hoodie, joggers, and running shoes.", price: "$50", materials: "Cotton, Polyester" },
    { name: "Summer Nights", description: "A chic summer night look with a sleeveless dress and strappy sandals.", price: "$70", materials: "Cotton, Silk" },
    { name: "Elegant Dinner Party", description: "A glamorous dress for an elegant dinner party, complete with accessories.", price: "$120", materials: "Satin, Lace" }
];

const Y2Kdescriptions = [
    { name: "Casual Summer Look", description: "A light and breezy outfit with a white top paired with denim shorts, perfect for a summer day out.", price: "$40", materials: "Cotton, Denim" },
    { name: "Chic Office Outfit", description: "A professional yet stylish ensemble with a tailored blazer and high-waisted trousers.", price: "$75", materials: "Wool, Polyester" },
    { name: "Edgy Street Style", description: "A trendy street style outfit with a leather jacket, skinny jeans, and combat boots.", price: "$120", materials: "Leather, Denim" },
    { name: "Elegant Evening Dress", description: "A sophisticated long gown for formal events with intricate lace detailing.", price: "$150", materials: "Silk, Lace" },
    { name: "Weekend Casual", description: "A laid-back look with a graphic t-shirt and jogger pants for a comfortable weekend.", price: "$35", materials: "Cotton, Polyester" },
    { name: "Retro Vibes", description: "Vintage-inspired outfit with a polka-dot dress and wide-brimmed hat.", price: "$80", materials: "Cotton, Polyester" },
    { name: "Boho Chic", description: "A relaxed bohemian outfit with a flowy dress and layered jewelry.", price: "$65", materials: "Cotton, Silk" },
    { name: "Cozy Winter Look", description: "Perfect for winter with a thick knitted sweater and boots.", price: "$90", materials: "Wool, Leather" },
    { name: "Casual Layered Look", description: "A casual and layered outfit with a hoodie and oversized jacket.", price: "$55", materials: "Cotton, Polyester" },
    { name: "Modern Minimalist", description: "A simple yet stylish outfit with a monochrome t-shirt and trousers.", price: "$50", materials: "Cotton, Polyester" },
    { name: "Sporty Chic", description: "A sporty outfit with a fitted jacket, leggings, and sneakers for an active day out.", price: "$60", materials: "Polyester, Spandex" },
    { name: "Elegant Maxi Dress", description: "A flowy, elegant maxi dress for evening events, paired with delicate accessories.", price: "$95", materials: "Silk, Cotton" },
    { name: "Casual Denim Look", description: "A simple yet classic look with a denim jacket and jeans.", price: "$55", materials: "Denim, Cotton" },
    { name: "Autumn Layers", description: "A cozy fall outfit with a knit sweater, scarf, and boots.", price: "$70", materials: "Wool, Cashmere" },
    { name: "Floral Prints", description: "A feminine outfit with a floral print dress, ideal for warm weather.", price: "$45", materials: "Cotton, Silk" },
    { name: "Athleisure Look", description: "Comfortable athleisure look with a hoodie, leggings, and sneakers.", price: "$50", materials: "Cotton, Spandex" },
    { name: "Classy Cocktail Dress", description: "An elegant cocktail dress perfect for any formal event.", price: "$130", materials: "Satin, Lace" },
    { name: "Weekend Getaway", description: "A stylish outfit with a maxi skirt and lightweight sweater, perfect for a weekend trip.", price: "$60", materials: "Cotton, Linen" },
    { name: "Urban Cool", description: "An urban street style look with a leather jacket and black skinny jeans.", price: "$100", materials: "Leather, Denim" },
    { name: "Summer Vibes", description: "A breezy summer look with a floral blouse and white pants.", price: "$40", materials: "Cotton, Linen" },
    { name: "Tropical Getaway", description: "A fun tropical outfit with a bright patterned shirt and shorts.", price: "$50", materials: "Cotton, Polyester" },
    { name: "Casual Chic", description: "A chic casual outfit with a turtleneck sweater and stylish trousers.", price: "$65", materials: "Wool, Cotton" },
    { name: "Night Out Look", description: "A sleek, fashionable night out look with a mini skirt and fitted top.", price: "$85", materials: "Polyester, Silk" },
    { name: "Winter Wonderland", description: "A cozy winter outfit featuring a puffy coat, leggings, and warm boots.", price: "$110", materials: "Wool, Down" },
    { name: "Preppy Look", description: "A preppy, neat look with a collared shirt and tailored shorts.", price: "$50", materials: "Cotton, Linen" },
    { name: "Luxe Loungewear", description: "Comfortable loungewear outfit with a silk robe and matching pants.", price: "$80", materials: "Silk, Satin" },
    { name: "Festive Cheer", description: "A festive outfit for holidays with a red dress and sparkly accessories.", price: "$95", materials: "Silk, Sequins" },
    { name: "Sophisticated Workwear", description: "A sophisticated outfit for work with a blazer and pencil skirt.", price: "$85", materials: "Wool, Polyester" },
    { name: "Comfy Casual", description: "An everyday comfortable look with a hoodie and sweatpants.", price: "$40", materials: "Cotton, Polyester" },
    { name: "Funky Street Style", description: "A bold street style with a colorful jacket, oversized pants, and chunky sneakers.", price: "$90", materials: "Polyester, Leather" },
    { name: "Bohemian Festival Look", description: "A relaxed festival look with a crochet top and floral skirt.", price: "$65", materials: "Cotton, Crochet" }
];

const Echodescriptions = [
    {name: "Black Leather Jacket", description: "A stylish black leather jacket with sleek stitching.", price: "$120", materials: ["Leather", "Polyester"]},
    {name: "Beige Knitted Sweater", description: "A comfy, oversized knitted sweater in beige.", price: "$50", materials: ["Wool", "Cotton"]},
    {name: "Dark Navy Suit", description: "A formal, tailored suit in dark navy.", price: "$200", materials: ["Wool", "Polyester"]},
    {name: "Minimalist T-shirt", description: "Casual t-shirt with a minimalist logo design.", price: "$25", materials: ["Cotton"]},
    {name: "Slim Fit Denim Jeans", description: "A pair of slim-fit dark denim jeans.", price: "$45", materials: ["Denim"]},
    {name: "Camel Wool Coat", description: "A chic and sophisticated wool coat in camel.", price: "$150", materials: ["Wool", "Polyester"]},
    {name: "Olive Green Bomber Jacket", description: "A trendy bomber jacket in olive green.", price: "$85", materials: ["Nylon", "Cotton"]},
    {name: "Black Sneakers", description: "A sleek, modern pair of black sneakers.", price: "$60", materials: ["Leather", "Rubber"]},
    {name: "Grey Wool Scarf", description: "A soft, cozy wool scarf in grey.", price: "$30", materials: ["Wool"]},
    {name: "Plaid Flannel Shirt", description: "A comfortable, casual flannel shirt with a plaid pattern.", price: "$40", materials: ["Cotton", "Polyester"]},
    {name: "Red A-line Dress", description: "A flattering red A-line dress for casual or formal wear.", price: "$75", materials: ["Cotton", "Spandex"]},
    {name: "Classic White Sneakers", description: "Timeless white sneakers with minimalistic design.", price: "$50", materials: ["Leather", "Rubber"]},
    {name: "Denim Jacket", description: "A timeless denim jacket with classic pockets.", price: "$55", materials: ["Denim", "Cotton"]},
    {name: "Khaki Chinos", description: "Comfortable and versatile khaki chinos.", price: "$40", materials: ["Cotton", "Spandex"]},
    {name: "Stripe Button-Down Shirt", description: "A formal stripe button-down shirt.", price: "$60", materials: ["Cotton"]},
    {name: "Black Slip-on Shoes", description: "Simple and elegant black slip-on shoes.", price: "$50", materials: ["Leather"]},
    {name: "Cashmere Sweater", description: "Luxuriously soft cashmere sweater in navy.", price: "$100", materials: ["Cashmere"]},
    {name: "Patterned Skirt", description: "A flattering skirt with a stylish pattern.", price: "$45", materials: ["Cotton", "Polyester"]},
    {name: "Leather Gloves", description: "Stylish leather gloves for colder weather.", price: "$35", materials: ["Leather", "Cashmere"]},
    {name: "Linen Pants", description: "Breathable linen pants for warmer weather.", price: "$50", materials: ["Linen"]},
    {name: "Tartan Scarf", description: "A cozy tartan scarf in classic red and green.", price: "$25", materials: ["Wool"]},
    {name: "Black Faux Fur Coat", description: "A chic faux fur coat in black.", price: "$130", materials: ["Acrylic", "Polyester"]},
    {name: "Grey Pullover Hoodie", description: "Comfy grey hoodie for casual outings.", price: "$40", materials: ["Cotton", "Polyester"]},
    {name: "Biker Shorts", description: "Athletic biker shorts for active wear.", price: "$20", materials: ["Spandex", "Polyester"]},
    {name: "Military Green Pants", description: "Durable military green pants for outdoor wear.", price: "$55", materials: ["Cotton", "Spandex"]},
    {name: "Leather Backpack", description: "Stylish leather backpack for everyday use.", price: "$80", materials: ["Leather"]},
    {name: "Dark Red Cardigan", description: "Cozy dark red cardigan to add warmth to your wardrobe.", price: "$45", materials: ["Wool", "Acrylic"]},
    {name: "Burgundy Coat", description: "Elegant burgundy coat for cold weather.", price: "$120", materials: ["Wool", "Polyester"]},
    {name: "Plaid Wool Hat", description: "Stylish plaid wool hat for a chic look.", price: "$30", materials: ["Wool"]},
    {name: "White Ruffle Dress", description: "A white dress with delicate ruffle details.", price: "$65", materials: ["Cotton", "Polyester"]},
    {name: "Sleek Black Skirt", description: "A form-fitting black skirt for work or play.", price: "$40", materials: ["Polyester", "Spandex"]}
];

const Genderdescriptions = [
    { name: "Floral Satin Dress", description: "A beautiful floral satin dress, ideal for a summer evening out or a wedding guest look.", price: "$80 - $150", materials: ["Satin"] },
    { name: "Camel Wool Coat", description: "A warm, stylish camel wool coat perfect for chilly autumn or winter days.", price: "$150 - $250", materials: ["Wool"] },
    { name: "Denim Jacket", description: "A classic blue denim jacket for a casual and relaxed vibe.", price: "$60 - $100", materials: ["Denim"] },
    { name: "Black Leather Skirt", description: "A sleek black leather skirt that brings edgy sophistication to your outfit.", price: "$50 - $90", materials: ["Genuine Leather"] },
    { name: "White Blouse with Bow", description: "A chic white blouse with a bow tie at the collar, perfect for both work and casual settings.", price: "$40 - $70", materials: ["Cotton"] },
    { name: "Black Turtleneck Sweater", description: "A classic black turtleneck sweater, ideal for layering during the colder months.", price: "$50 - $80", materials: ["Wool", "Acrylic"] },
    { name: "Checkered Wool Pants", description: "Stylish checkered wool pants for a formal yet fashionable look.", price: "$60 - $120", materials: ["Wool"] },
    { name: "Pink Cardigan", description: "A soft pink cardigan perfect for adding a touch of color and comfort to your outfit.", price: "$30 - $50", materials: ["Cotton"] },
    { name: "Red Slip Dress", description: "A bold red slip dress that will make a statement at any party or event.", price: "$90 - $150", materials: ["Satin"] },
    { name: "Plaid Scarf", description: "A cozy plaid scarf, ideal for winter months, to add warmth and style.", price: "$20 - $40", materials: ["Wool"] },
    { name: "Brown Faux Fur Coat", description: "A trendy brown faux fur coat to stay warm while looking glamorous.", price: "$100 - $180", materials: ["Faux Fur"] },
    { name: "Leopard Print Blouse", description: "A fierce leopard print blouse to add a wild touch to your wardrobe.", price: "$40 - $60", materials: ["Polyester"] },
    { name: "Skinny Black Jeans", description: "A pair of slimming black skinny jeans that are a versatile addition to any wardrobe.", price: "$30 - $60", materials: ["Denim"] },
    { name: "V-neck Sweater", description: "A cozy V-neck sweater for a laid-back yet stylish outfit.", price: "$40 - $80", materials: ["Cotton", "Wool"] },
    { name: "White High-Waisted Skirt", description: "A high-waisted white skirt perfect for pairing with summer blouses or tank tops.", price: "$40 - $70", materials: ["Cotton"] },
    { name: "Green Bomber Jacket", description: "A sleek green bomber jacket for a casual, sporty look.", price: "$70 - $120", materials: ["Polyester"] },
    { name: "Long Sleeve Knit Dress", description: "A cozy long-sleeve knit dress, perfect for a chic, comfortable winter outfit.", price: "$50 - $90", materials: ["Wool"] },
    { name: "Striped Shirt Dress", description: "A playful striped shirt dress for an easy-going yet stylish day out.", price: "$60 - $110", materials: ["Cotton"] },
    { name: "Black Heeled Boots", description: "Elegant black heeled boots, versatile for both day and night outings.", price: "$70 - $130", materials: ["Leather"] },
    { name: "Navy Blue Blazer", description: "A classic navy blue blazer, perfect for office wear or elevating a casual outfit.", price: "$80 - $150", materials: ["Wool", "Polyester"] },
    { name: "Gray Skater Skirt", description: "A flattering gray skater skirt that adds volume and movement to any look.", price: "$40 - $60", materials: ["Polyester"] },
    { name: "White Sneakers", description: "A pair of sleek white sneakers for an easy, casual look.", price: "$50 - $80", materials: ["Canvas"] },
    { name: "Blue Button-Up Shirt", description: "A classic blue button-up shirt, perfect for both casual and professional settings.", price: "$40 - $70", materials: ["Cotton"] },
    { name: "Orange Knit Sweater", description: "A bright and cozy orange knit sweater to add some color to your winter wardrobe.", price: "$40 - $60", materials: ["Acrylic"] },
    { name: "Polka Dot Dress", description: "A playful polka dot dress with a retro-inspired silhouette, perfect for summer parties.", price: "$60 - $100", materials: ["Cotton"] },
    { name: "Black Palazzo Pants", description: "Elegant black palazzo pants that offer comfort and style for any occasion.", price: "$50 - $90", materials: ["Polyester"] },
    { name: "Striped Crop Top", description: "A fun striped crop top, perfect for pairing with high-waisted pants or skirts.", price: "$30 - $50", materials: ["Cotton"] },
    { name: "Purple Velvet Blazer", description: "A luxurious purple velvet blazer for a sophisticated, eye-catching look.", price: "$90 - $150", materials: ["Velvet"] },
    { name: "White Lace Top", description: "A delicate white lace top, perfect for layering over a camisole or bralette.", price: "$40 - $70", materials: ["Lace"] },
    { name: "Black Leather Boots", description: "Timeless black leather boots that work for both casual and semi-formal occasions.", price: "$80 - $130", materials: ["Leather"] },
    { name: "Tan Ankle Boots", description: "Stylish tan ankle boots that complement any fall or winter outfit.", price: "$60 - $100", materials: ["Suede"] },
    { name: "Floral A-Line Skirt", description: "A feminine floral A-line skirt perfect for the warmer seasons.", price: "$40 - $70", materials: ["Cotton"] },
    { name: "Light Blue Skinny Jeans", description: "A pair of light blue skinny jeans that offer a relaxed yet polished look.", price: "$30 - $60", materials: ["Denim"] },
    { name: "Black Faux Fur Vest", description: "A chic black faux fur vest to add warmth and style to your outfit.", price: "$50 - $90", materials: ["Faux Fur"] }
];

const Vintagedescriptions = [
    { name: "Floral Dress", description: "A beautiful floral dress perfect for a casual outing.", price: "$80 - $120", materials: ["Cotton", "Polyester"] },
    { name: "Boho Chic Gown", description: "A flowing boho-style gown with a relaxed fit.", price: "$150 - $200", materials: ["Cotton", "Linen"] },
    { name: "Plaid Blazer", description: "A tailored plaid blazer for a polished look.", price: "$120 - $180", materials: ["Wool", "Polyester"] },
    { name: "Leather Jacket", description: "A sleek black leather jacket to complete your edgy look.", price: "$180 - $250", materials: ["Genuine Leather", "Polyester"] },
    { name: "Cashmere Sweater", description: "A soft and warm cashmere sweater, perfect for cold weather.", price: "$100 - $150", materials: ["Cashmere"] },
    { name: "Casual Plaid Shirt", description: "A relaxed plaid shirt for everyday comfort.", price: "$40 - $60", materials: ["Cotton", "Polyester"] },
    { name: "Striped Button-Down Shirt", description: "A crisp striped shirt ideal for professional settings.", price: "$50 - $80", materials: ["Cotton"] },
    { name: "Sleek Black Dress", description: "A simple yet chic black dress for any occasion.", price: "$90 - $140", materials: ["Polyester", "Spandex"] },
    { name: "Trench Coat", description: "A classic beige trench coat for a sophisticated look.", price: "$120 - $180", materials: ["Cotton", "Polyester"] },
    { name: "Puffer Jacket", description: "A stylish puffer jacket designed to keep you warm during the winter months.", price: "$150 - $250", materials: ["Nylon", "Polyester"] },
    { name: "Cozy Knit Cardigan", description: "A thick knit cardigan, perfect for layering in cooler weather.", price: "$50 - $70", materials: ["Acrylic", "Cotton"] },
    { name: "Black Skinny Jeans", description: "Slim-fitting black jeans for a versatile, everyday look.", price: "$60 - $90", materials: ["Cotton", "Spandex"] },
    { name: "Chic White Blouse", description: "A timeless white blouse that pairs well with any outfit.", price: "$50 - $80", materials: ["Cotton", "Polyester"] },
    { name: "High-Waisted Shorts", description: "Casual high-waisted shorts for a laid-back look.", price: "$30 - $50", materials: ["Denim", "Cotton"] },
    { name: "Denim Skirt", description: "A classic denim skirt for a casual summer outfit.", price: "$40 - $60", materials: ["Denim", "Cotton"] },
    { name: "Soft Wool Scarf", description: "A soft wool scarf to add warmth and style to your winter wardrobe.", price: "$40 - $60", materials: ["Wool"] },
    { name: "Maxi Dress", description: "A long and elegant maxi dress for formal occasions.", price: "$100 - $150", materials: ["Polyester", "Cotton"] },
    { name: "Plaid Midi Skirt", description: "A stylish plaid skirt for a preppy look.", price: "$50 - $80", materials: ["Cotton", "Wool"] },
    { name: "Floral Print Kimono", description: "A light and airy floral kimono perfect for the spring season.", price: "$40 - $60", materials: ["Cotton", "Linen"] },
    { name: "Chiffon Dress", description: "A delicate chiffon dress ideal for a formal event.", price: "$70 - $120", materials: ["Chiffon", "Polyester"] },
    { name: "Button-Down Shirt Dress", description: "A casual shirt dress with a comfortable fit.", price: "$60 - $90", materials: ["Cotton", "Polyester"] },
    { name: "Silk Blouse", description: "An elegant silk blouse suitable for both work and evening wear.", price: "$120 - $150", materials: ["Silk"] },
    { name: "Ripped Denim Jeans", description: "Casual ripped jeans for a laid-back, trendy look.", price: "$50 - $80", materials: ["Denim", "Cotton"] },
    { name: "Leather Ankle Boots", description: "Stylish black leather ankle boots for a chic look.", price: "$90 - $130", materials: ["Genuine Leather", "Rubber"] },
    { name: "Winter Wool Coat", description: "A thick wool coat to keep you warm during the coldest months.", price: "$200 - $250", materials: ["Wool", "Cashmere"] },
    { name: "Pleated Skirt", description: "A pleated skirt for a polished, feminine look.", price: "$60 - $100", materials: ["Polyester", "Cotton"] },
    { name: "Tulle Skirt", description: "A delicate tulle skirt perfect for formal events or photo shoots.", price: "$50 - $90", materials: ["Tulle", "Polyester"] },
    { name: "Graphic Tee", description: "A fun graphic tee that makes a bold fashion statement.", price: "$30 - $50", materials: ["Cotton", "Polyester"] },
    { name: "Flannel Shirt", description: "A cozy flannel shirt that pairs well with jeans or leggings.", price: "$40 - $70", materials: ["Cotton"] },
    { name: "Sweater Dress", description: "A cozy sweater dress for colder days.", price: "$70 - $120", materials: ["Acrylic", "Polyester"] },
    { name: "Casual Sneakers", description: "Comfortable sneakers for everyday wear.", price: "$50 - $80", materials: ["Canvas", "Rubber"] },
    { name: "Knit Hat", description: "A knitted hat to keep your head warm during winter.", price: "$20 - $30", materials: ["Acrylic", "Wool"] },
    { name: "Summer Romper", description: "A fun and breezy romper for sunny days.", price: "$40 - $70", materials: ["Cotton", "Polyester"] },
    { name: "Strappy Sandals", description: "Elegant sandals perfect for summer evenings.", price: "$40 - $60", materials: ["Leather", "Rubber"] },
    { name: "Corduroy Jacket", description: "A stylish corduroy jacket with a vintage vibe.", price: "$70 - $100", materials: ["Cotton", "Polyester"] }
];

const Acaddescriptions = [
    { name: "Floral Summer Dress", description: "A light and breezy floral dress perfect for the summer.", price: "$80", materials: ["Cotton", "Polyester"] },
  { name: "Casual Denim Jacket", description: "A stylish denim jacket for a laid-back look.", price: "$120", materials: ["Denim", "Cotton"] },
  { name: "Winter Wool Coat", description: "A warm wool coat ideal for colder weather.", price: "$180", materials: ["Wool", "Polyester"] },
  { name: "Striped Knit Sweater", description: "A cozy striped knit sweater perfect for layering.", price: "$60", materials: ["Cotton", "Acrylic"] },
  { name: "Bohemian Maxi Skirt", description: "A flowy, boho-style maxi skirt for a relaxed, free-spirited look.", price: "$50", materials: ["Cotton", "Linen"] },
  { name: "Chic Black Dress", description: "A classic black dress that works for various occasions.", price: "$95", materials: ["Polyester", "Spandex"] },
  { name: "Puffer Jacket", description: "A puffer jacket for warmth and style during the winter months.", price: "$150", materials: ["Nylon", "Polyester"] },
  { name: "Leather Ankle Boots", description: "Black leather ankle boots for a sleek and stylish look.", price: "$130", materials: ["Genuine Leather", "Rubber"] },
  { name: "Silk Blouse", description: "An elegant silk blouse perfect for formal or semi-formal events.", price: "$110", materials: ["Silk"] },
  { name: "Plaid Wool Skirt", description: "A classic plaid wool skirt for a chic and cozy style.", price: "$70", materials: ["Wool", "Polyester"] },
  { name: "Striped Button-Down Shirt", description: "A striped button-down shirt for a polished, professional look.", price: "$45", materials: ["Cotton", "Polyester"] },
  { name: "Flannel Shirt", description: "A cozy flannel shirt for casual wear during the colder months.", price: "$40", materials: ["Cotton"] },
  { name: "Summer Romper", description: "A casual romper perfect for warm weather and beach outings.", price: "$60", materials: ["Cotton", "Polyester"] },
  { name: "High-Waisted Shorts", description: "Casual high-waisted shorts for a relaxed, summery look.", price: "$35", materials: ["Denim", "Cotton"] },
  { name: "Chiffon Evening Gown", description: "A delicate chiffon gown for formal evening events.", price: "$180", materials: ["Chiffon", "Silk"] },
  { name: "Maxi Dress", description: "A long, flowing maxi dress for a bohemian style.", price: "$130", materials: ["Cotton", "Polyester"] },
  { name: "Cable Knit Sweater", description: "A cozy cable-knit sweater perfect for colder days.", price: "$80", materials: ["Acrylic", "Cotton"] },
  { name: "Denim Skirt", description: "A classic denim skirt for a casual, comfortable style.", price: "$45", materials: ["Denim"] },
  { name: "Tulle Skirt", description: "A voluminous tulle skirt ideal for formal or dressy occasions.", price: "$60", materials: ["Tulle", "Polyester"] },
  { name: "Graphic T-shirt", description: "A bold graphic tee with fun artwork.", price: "$30", materials: ["Cotton", "Polyester"] },
  { name: "Casual Blazer", description: "A smart casual blazer for work or evening outings.", price: "$100", materials: ["Wool", "Polyester"] },
  { name: "Floral Print Kimono", description: "A light and airy kimono with a floral print, perfect for layering.", price: "$50", materials: ["Cotton", "Polyester"] },
  { name: "Peacoat", description: "A classic peacoat for warmth and style during winter.", price: "$140", materials: ["Wool", "Polyester"] },
  { name: "Black Leather Pants", description: "Sleek black leather pants for an edgy look.", price: "$120", materials: ["Genuine Leather"] },
  { name: "Sporty Tracksuit", description: "A comfortable tracksuit for casual or sporty occasions.", price: "$80", materials: ["Polyester", "Spandex"] },
  { name: "Belted Trench Coat", description: "A stylish belted trench coat for a chic look.", price: "$150", materials: ["Cotton", "Polyester"] },
  { name: "Wool Scarf", description: "A soft wool scarf for warmth during the winter season.", price: "$35", materials: ["Wool"] },
  { name: "Plaid Shirt Dress", description: "A relaxed plaid shirt dress for a casual yet trendy style.", price: "$55", materials: ["Cotton", "Polyester"] },
  { name: "Faux Fur Vest", description: "A stylish faux fur vest for a luxurious winter look.", price: "$100", materials: ["Faux Fur"] },
  { name: "Pleated Skirt", description: "A pleated skirt that can be dressed up or down for various occasions.", price: "$60", materials: ["Polyester", "Cotton"] },
  { name: "Sundress", description: "A breezy sundress perfect for hot weather and casual outings.", price: "$45", materials: ["Cotton", "Polyester"] },
  { name: "Leather Backpack", description: "A chic leather backpack for carrying essentials in style.", price: "$120", materials: ["Genuine Leather"] },
  { name: "Linen Summer Shirt", description: "A cool and breathable linen shirt for summer days.", price: "$40", materials: ["Linen"] }
];
const productsArray = [
    {
        productId: 1,
        productName: 'Mobile',
        productDescription: 'A high-performance mobile phone with the latest features and advanced technology for seamless communication and entertainment.',
        productPrice: 199,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/t/u/-original-imagxhd5xtjuwnqz.jpeg?q=70&crop=false'
    },
    {
        productId: 2,
        productName: 'Laptop',
        productDescription: 'A powerful and lightweight laptop designed for productivity and entertainment, featuring a sleek design and impressive performance.',
        productPrice: 799,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/computer/v/v/b/xl30-thin-and-light-laptop-infinix-original-imagzmncgyrcsxa9.jpeg?q=70&crop=false'
    },
    {
        productId: 3,
        productName: 'Headphones',
        productDescription: 'Premium-quality headphones offering immersive audio and comfort for an exceptional listening experience wherever you go.',
        productPrice: 49,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/v/r/k/buds-pro-cmf-by-nothing-original-imagtnz6hhz7fyb3.jpeg?q=70&crop=false'
    },
    {
        productId: 4,
        productName: 'Camera',
        productDescription: 'Capture stunning moments with this high-resolution camera equipped with advanced features, perfect for photography enthusiasts.',
        productPrice: 299,
        productImageUrl: 'https://rukminim2.flixcart.com/image/312/312/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70'
    },
    {
        productId: 5,
        productName: 'Smartwatch ',
        productDescription: 'Stay connected and monitor your health with this feature-rich smartwatch, offering fitness tracking and smart notifications on the go.',
        productPrice: 129,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/l5ld8y80/smartwatch/r/q/t/-original-imagg8dksgct9hxg.jpeg?q=70&crop=false'
    },
    {
        productId: 6,
        productName: 'Tablet',
        productDescription: 'A versatile tablet for work and entertainment, featuring a large display, powerful performance, and a sleek design for on-the-go use.',
        productPrice: 179,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/kyag87k0/tablet/4/n/o/g70-lte-moto-original-imagak3huz7jweyz.jpeg?q=70&crop=false'
    },
    {
        productId: 7,
        productName: 'TV',
        productDescription: 'Experience cinematic entertainment at home with this high-definition TV, delivering stunning visuals and immersive sound for an unparalleled viewing experience.',
        productPrice: 699,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/television/c/z/u/32stv-xelectron-original-imagp7vfdfzr4ca2.jpeg?q=70&crop=false'
    },
    {
        productId: 8,
        productName: 'Gaming Console',
        productDescription: 'Elevate your gaming experience with this powerful gaming console, offering cutting-edge graphics and a vast library of games for endless entertainment.',
        productPrice: 399,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/gamingconsole/z/b/w/-original-imagtk7vfbzqbjg6.jpeg?q=70&crop=false'
    },
    {
        productId: 9,
        productName: 'Refrigerator',
        productDescription: 'Keep your food fresh and organized with this spacious and energy-efficient refrigerator, featuring advanced cooling technology and modern design.',
        productPrice: 899,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/refrigerator-new/9/j/y/-original-imagt76kk4e2gq3j.jpeg?q=70&crop=false'
    },
    {
        productId: 10,
        productName: 'Vacuum Cleaner ',
        productDescription: 'Effortlessly clean your home with this powerful and efficient vacuum cleaner, designed to tackle dirt and dust on various surfaces with ease.',
        productPrice: 69,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/k186fm80/vacuum-cleaner/m/h/h/onshoppy-handheld-car-rtable-w-original-imafktrhbrry4rvd.jpeg?q=70&crop=false'
    },
    {
        productId: 11,
        productName: 'Coffee Maker',
        productDescription: 'Brew the perfect cup of coffee at home with this stylish and easy-to-use coffee maker, offering convenience and delicious flavors every morning.',
        productPrice: 49,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/coffee-maker/s/l/v/finero-next-coffee-machine-espresso-americano-maker-machine-original-imaguh4b7zwha8qc.jpeg?q=70&crop=false'
    },
    {
        productId: 12,
        productName: 'Bluetooth Speaker',
        productDescription: 'Enjoy high-quality audio anywhere with this portable Bluetooth speaker, delivering rich sound and stylish design for your music on the go.',
        productPrice: 29,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/l27wtjk0/speaker/i/4/e/-original-imagdhhg2f7zjbt7.jpeg?q=70&crop=false'
    },
    {
        productId: 13,
        productName: 'Desk Chair',
        productDescription: 'Create a comfortable and ergonomic workspace with this adjustable desk chair, providing support and style for long hours of work or study.',
        productPrice: 129,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/office-study-chair/b/u/p/-original-imagztbyyazvfhgb.jpeg?q=70&crop=false'
    },
    {
        productId: 14,
        productName: 'Printer',
        productDescription: 'Efficiently print documents and photos with this reliable printer, offering fast and high-quality printing for your home or office needs.',
        productPrice: 149,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/printer/m/m/g/-original-imags7q22zyzxggw.jpeg?q=70&crop=false'
    },
    {
        productId: 15,
        productName: 'External Hard Drive',
        productDescription: 'Expand your storage capacity with this external hard drive, providing secure and portable storage for your important files and media.',
        productPrice: 79,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/kpvivm80/external-hard-drive/hdd/k/v/3/expansion-desktop-stkp4000400-seagate-original-imag4ymfv88pkzf5.jpeg?q=70&crop=false'
    },
    {
        productId: 16,
        productName: 'Wireless Mouse',
        productDescription: 'Enhance your computer setup with this wireless mouse, offering precision and comfort for smooth navigation and productivity.',
        productPrice: 19,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/kw9krrk0/mouse/v/p/h/toad-13-portronics-original-imag8zbqqkgmb9d6.jpeg?q=70&crop=false'
    },
    {
        productId: 17,
        productName: 'Water Bottle',
        productDescription: 'Stay hydrated on the go with this durable and stylish water bottle, designed for convenience and eco-friendly hydration wherever you are.',
        productPrice: 9,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/bottle/s/q/e/750-flip-bot-stainless-steel-sipper-rubber-finish-water-bottle-original-imagqg394cazwzrk.jpeg?q=70&crop=false'
    },
    {
        productId: 18,
        productName: 'Backpack',
        productDescription: 'Carry your essentials in style with this versatile backpack, featuring multiple compartments and a comfortable design for your daily adventures.',
        productPrice: 39,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/h/n/s/-original-imaghdu5bhpe7ag9.jpeg?q=70&crop=false'
    },
    {
        productId: 19,
        productName: 'Sunglasses',
        productDescription: 'Protect your eyes in style with these fashionable sunglasses, offering UV protection and a trendy design for a cool and comfortable look.',
        productPrice: 29,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/l/r/z/-original-imagrmktnuj2s5bh.jpeg?q=70&crop=false'
    },
    {
        productId: 20,
        productName: 'Exercise Mat',
        productDescription: 'Achieve your fitness goals with this premium exercise mat, providing comfort and support for a variety of workouts in the comfort of your home.',
        productPrice: 14,
        productImageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/sport-mat/2/6/r/6mm-superior-quality-yoga-mat-with-strap-eco-friendly-6mm-60-original-imagwbdegrwqhvar.jpeg?q=70&crop=false'
    }
];

export default productsArray;
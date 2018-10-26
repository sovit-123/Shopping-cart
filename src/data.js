const sizes = [
    'XS', 'S', 'M', 'L', 'XL'
];

const images = [] 
for(let i = 0; i < 9; i++) {
    images[i] = [];
    images[i] = `${i + 1}.jpg`
}

export {
    sizes,
    images
}


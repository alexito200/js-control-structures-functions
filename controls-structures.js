let loggedIn = true;
const cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']

if (loggedIn == true) {
    cart.forEach(item => console.log(item));
} else {
    console.log('Please log in to view your cart.')
}

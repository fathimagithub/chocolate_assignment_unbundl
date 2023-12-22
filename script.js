const product = [
    {
        id: 0,
        image: 'dairymilk-removebg-preview.png',
        title: ' Cadbury Dairy Milk',
        price: 100,
    },
    {
        id: 1,
        image: 'snickers-chocolate-removebg-preview.png',
        title: 'Snickers',
        price: 40,
    },
    {
        id: 2,
        image: 'NUTS-270x295-removebg-preview.png',
        title: 'Munch',
        price: 20,
    },
    {
        id: 3,
        image: 'cadbury-Perk-removebg-preview.png',
        title: 'Cadbury Perk',
        price: 20,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` + 
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a){
    let j = 0 ,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else if(cart.length<=8){
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
                var {image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "$ "+total+".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowing' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++) + ")'></i></div>"
                );
        }).join('');
    }
    else{
        document.getElementById('cartItem').innerHTML = "Your cart is exceed the limit. You can select only upto 8 elements.Refresh the page and reselct.. ";
        document.getElementById("count").innerHTML=8;
    }
}

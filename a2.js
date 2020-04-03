/******************************************************************************** 
* BTI225 – Assignment 02 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students. 
* 
* Name: Priya Khatri Student ID: 110149176 Date: 2020-02-11 
* 
********************************************************************************/

/***** ALL DATA    *****/
var allData = [
    {type:"customer", data:{customerId: 1, firstName: "Dave", lastName: "Bennett", email: "dbennett@gmail.com"}},
    {type:"customer", data:{customerId: 2, firstName: "John", lastName: "Stevens", email: "jstevens22@hotmail.com"}},
    {type:"customer", data:{customerId: 3, firstName: "Sarah", lastName: "Pym", email: "spym99@hotmail.com"}},
    {type:"customer", data:{customerId: 4, firstName: "Steven", lastName: "Edwards", email: "steven2231@hotmail.com",}},
   
    {type:"order", data:{orderId: 101,  customerId:1,  orderDate: null}},
    {type:"order", data:{orderId: 102,  customerId:1,  orderDate: null}},
    {type:"order", data:{orderId: 103,  customerId:2,  orderDate: null}},
    {type:"order", data:{orderId: 104,  customerId:2,  orderDate: null}},
    {type:"order", data:{orderId: 105,  customerId:1,  orderDate: null}},
    {type:"order", data:{orderId: 106,  customerId:1,  orderDate: null}},
    {type:"order", data:{orderId: 107,  customerId:3,  orderDate: null}},
    {type:"order", data:{orderId: 108,  customerId:3,  orderDate: null}},
    {type:"order", data:{orderId: 109,  customerId:3,  orderDate: null}},
    {type:"order", data:{orderId: 110,  customerId:4,  orderDate: null}},

    {type:"product", data:{productId:100001, orderId:105, amount:2, price:102.50}},
    {type:"product", data:{productId:100002, orderId:101, amount:5, price:22.45}}, 
    {type:"product", data:{productId:100003, orderId:104, amount:1, price:892.55}}, 
    {type:"product", data:{productId:100004, orderId:104, amount:6, price:23.32}},
    {type:"product", data:{productId:100005, orderId:102, amount:2, price:90.67}},
    {type:"product", data:{productId:100006, orderId:106, amount:1, price:342.39}},
    {type:"product", data:{productId:100007, orderId:109, amount:12, price:7.32}},
    {type:"product", data:{productId:100008, orderId:102, amount:4, price:12.12}},
    {type:"product", data:{productId:100009, orderId:103, amount:3, price:56.32}},
    {type:"product", data:{productId:100010, orderId:107, amount:2, price:152.38}},
    {type:"product", data:{productId:100011, orderId:108, amount:5, price:66.32}},
    {type:"product", data:{productId:100012, orderId:110, amount:3, price:96.92}},
    {type:"product", data:{productId:100013, orderId:108, amount:1, price:532.78}},
    {type:"product", data:{productId:100014, orderId:102, amount:6, price:36.32}},
    {type:"product", data:{productId:100015, orderId:109, amount:3, price:56.32}},
    {type:"product", data:{productId:100016, orderId:108, amount:1, price:366.32}}
];




 /*  Write your OrderDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

//defining properties
var orderDB = {
    customer: [],
    orders: [],
    products: [],
// 1) constructArrays(allData) - Define Method
    constructArrays: function(allData){
        allData.forEach(constArr => {
            if(constArr.type=="customer") this.addCustomer(constArr.data);
            else if(constArr.type=="order") this.addOrder(constArr.data);
            else if (constArr.type=="product") this.addProduct(constArr.data);  
        });
    },

//2) addCustomer (customer) - Define Method
addCustomer: function(customer){
    customers.push(customer);
},

//3) addOrder (order) - Define Method
addOrder: function(order){
    order.orderDate= new Date();
    this.orders.push(order);
},

//4) addProduct (product) - Define Method
addProduct: function(product){
    this.products.push(product);
},

//5) displayCustomerById(custId) - Define Method
displayCustomerById: function(custId){
    console.log("============Display Customer By Id: " + customerId +"============\n")
    /*this.customers.forEach(customer => {
        if(customer.custId==customerId){
            console.log("Customer: " + customer.customerId + ", First Name: " 
            + customer.firstName + ", Last Name: " + customer.lastName +
            ", E-mail: "+ customer.email +".");
        } 
    });*/
    var result;
    this.customers.forEach(custId => {
        if(this.customer.customerId==custId) result = customer;
    });
    return result;
},

//6) displayAllCustomers - Define Method
displayAllCustomers: function(){
    console.log("============Display All Customers============\n")
    this.customer.forEach(custId => {
        console.log("Customer: "+custId.customerId + " " +
        custId.first_name+" "+custId.last_name+" "+ custId.email+" \n");
    });
},

//7) displayAllOrders()
displayAllOrders: function (){
    console.log("============Display All Orders============\n");
    this.order.forEach(order => {
        console.log("OrderId " + order + " was placed by customer " + order.custId
        + " on the day of " + order.orderDate + ".\n");
    });
},

//8) displayAllProducts()
displayAllProducts: function(){
    console.log("============Display All Products============\n");
    this.product.forEach(product => {
        console.log("Product Id: " + product.productId + ", Order ID: "
        + product.orderId + ", Amount: " + product.amount + ", Price: "
        + product.price);
    });
},

//9) displaySales()
displaySales: function(){
    console.log("============Display All Cuctomers' Order Info============\n");
    totalProd = product.amount * product.price;
    console.log("Customer " + custId.firstName + custID.lastName + "placed "
    + product.amount + "orders. Total cost is $" + totalProd + ".");
},

//10) removeOrderById(orderId)
removeOrderById: function(orderId){
        var commonUse=0;
        var savedIndex=-1;
        this.customers.forEach(custID => {
            if(custID.orderId==order_id) commonUse++;
        });
        if(commonUse==0) {
            for (var i =0;i < this.orders.length;i++) {
                const orderID = this.order[i];
                if(orderID.order_id==order_id) savedIndex=i
                {
                    //console.log("OrderID" + orderID + "is not found");
                }
            }
            if(savedIndex!=-1) this.orders.splice(savedIndex,1)
            {
                console.log("OrderID" + orderID + "is not found");
            }
        }
    },
};


/*** End of your OrderDB Object  ***/
/*** TEST DATA ***/
console.log("Display Arrays of Objects");
orderDB.constructArrays(allData);
console.log(orderDB.customers);
console.log(orderDB.orders);
console.log(orderDB.products);
orderDB.displayCustomerById(1);
orderDB.displayAllCustomers();
orderDB.displayAllOrders();
orderDB.displayAllProducts();
orderDB.displaySales();
orderDB.removeOrderById(177);
console.log("==== Remove Order ID 101  ===");
orderDB.removeOrderById(101);
orderDB.displayAllOrders();
orderDB.displayAllProducts();
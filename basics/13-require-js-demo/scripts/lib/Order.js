// Order.js
define(["Customer"], // Required Scripts (Customer)
    function (Customer) { // Get Required objects in order.js
        function Order(id, custName) {
            this.id = id;
            this.customer = new Customer(custName);
        }

        return Order; // Return the object that Requires
                      // constructor to allow you to call
    }
);
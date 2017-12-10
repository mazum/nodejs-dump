// Order.js
(function (ns) { // Get Required objects in order

    //Define the new object and add it to the namespace
    ns.Order = function (id, custName) {
        this.id = id,
        this.customer = new ns.Customer(custName)
    };

}(window.WilderMinds = window.WilderMinds || {}));
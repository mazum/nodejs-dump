// Customer.js
define( [], // Required Scripts (None)
    function () {
        function Customer(name) {
            this.name = name;
        }

        return Customer; // Return the object that Requires
                         // constructor to allow you to call
    }
);
// main.js
$(function () {
    var o = new WilderMinds.Order(1, "A Customer");
    alert(o.id);
    alert(o.customer.name);
});

function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
var myAdd = function myAdd(x, y) {
    return x + y;
};
console.log(myAdd(5, 4));
var myFullName = function buildName(firstName, lastName) {
    return firstName + " " + lastName;
};
var myCallName = function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else if (firstName) {
        return firstName;
    }
};
console.log(myCallName("Rinaldi"));
var myLastName = function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Rizqi Fauzi"; }
    return firstName + " " + lastName;
};
console.log(myLastName("Rinaldi", "LrvL"));
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (value) {
    console.log(value);
});
console.log(arr.map(function (value) { return (value * 2); }));
var arr1 = [1, 2, 3, 4, 5];
arr1.unshift(11);
console.log(arr1);
var arr2 = [1, 2, 3, 4, 5];
arr2.push(6);
console.log(arr2);
function vehicle(name, payTax) {
    return "Halo ".concat(name, ", ").concat(payTax(false), " membayar pajak ");
}
function callback(cek) {
    if (!cek) {
        return "belum";
    }
    return "sudah";
}
console.log(vehicle("Kyy", callback));

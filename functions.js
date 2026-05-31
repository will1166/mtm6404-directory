// 2. list function to generate an HTML string list of clients from an array
const list = (clientArray) => {
    // map() iterates through each client and return an array of list items strings
    return clientArray.map(client => `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
  ${client.name}
  <strong>$ ${client.balance}</strong>
</li>`).join(""); // convert to a string
};

 // 3. order function to sort an array of clients based on a specific property
const order = (clientArray, property) => {
    // sort() compares two elements
    return clientArray.sort((a, b) => {
        if (a[property] < b[property]) return -1; // a before b
        if (a[property] > b[property]) return 1; // b before a
        return 0; // keeps original order if values are equal
    });
};
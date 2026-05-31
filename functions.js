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

// 4. total function with total sum of the balances from every client
const total = clientArray => {
    // reduce() to calculate the sum of all client balances
    return clientArray.reduce((accumulator, client)=> {
        return accumulator + client.balance;
    }, 0);
};

// 5. info function to return an object containing the desired client information
const info = chosenIndex => {
    // find() loops the clients array and returns the matching object
    return clients.find(client => chosenIndex === client.index);
};

// 6. search function to return an array of clients that include the query in their name
const search = query => {
    // Convert search to lowercase
    const lowerCaseQuery = query.toLowerCase();

    // filter() returns only what contains that item
    return clients.filter(client => {
        // Convert the client's names to lowercase and check
        return client.name.toLowerCase().includes(lowerCaseQuery);
    });
};
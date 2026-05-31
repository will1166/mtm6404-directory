// 2. list function
const list = (clientArray) => {
    return clientArray.map(client => `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
  ${client.name}
  <strong>$ ${client.balance}</strong>
</li>`).join("");
};
 
// 3.
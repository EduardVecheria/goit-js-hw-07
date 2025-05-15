const nameInput = document.querySelector(`#name-input`)
const output = document.querySelector(`#name-output`) 

const handler = event => {
    const value = event.target.value.trim();
    output.textContent = value === "" ? "Anonymous" : value;
  };
  
  nameInput.addEventListener("input", handler);
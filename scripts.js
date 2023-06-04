function handleSelect(event) {
    event.preventDefault();
    const travelSelection = document.getElementById("travel").value;
    const socialSelection = document.getElementById("social").value;
    const mathSelection = document.getElementById("math").value;
    const dataSelection = document.getElementById("data").value;
    const readSelection = document.getElementById("read").value;


    let result;
  if (travelSelection === "Yes" && socialSelection === 'No' && mathSelection === 'No' && dataSelection === 'Yes' && readSelection === 'No') {
    result = 'Ruby';
  } else if (travelSelection === 'No' && socialSelection === 'No' && mathSelection === 'No' && dataSelection === 'Yes' && readSelection === 'No') {
    result = 'Java'
  } else if (travelSelection === 'No' && socialSelection === 'Yes' && mathSelection === 'No' && dataSelection === 'Yes' && readSelection === 'No') {
    result = 'Javascript';
  } else {
    result = 'Python';
  }

  document.getElementById("output").innerText = result;
  }
  
  window.addEventListener("load", function() {
    document.getElementById("select-form").addEventListener("submit", handleSelect);
  });
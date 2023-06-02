function handleSelect(event) {
    event.preventDefault();
    const summerSelection = document.getElementById("summer").value;
    const kidsSelection = document.getElementById("kids").value;
    const orangesSelection = document.getElementById("oranges").value;

    let result;
  if (summerSelection === "Yes" && kidsSelection === 'No' && orangesSelection === 'No') {
    result = 'Ruby';
  } else if (summerSelection === 'No' && kidsSelection === 'No' && orangesSelection === 'No') {
    result = 'Java'
  } else if (summerSelection === 'No' && kidsSelection === 'Yes' && orangesSelection === 'No') {
    result = 'Javascript';
  } else if (summerSelection === 'No' && kidsSelection === 'No' && orangesSelection === 'Yes') {
    result = 'Python'
  } else if (summerSelection === 'Yes' && kidsSelection === 'Yes' && orangesSelection === 'Yes') {
    result = 'Go'
  } else {
    result = 'Swift';
  }

  document.getElementById("output").innerText = result;
  }
  
  window.addEventListener("load", function() {
    document.getElementById("select-form").addEventListener("submit", handleSelect);
  });
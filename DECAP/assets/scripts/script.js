function tabContent(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
};

function search() {
    const input = document.getElementById('input');
    const filter = input.value.toLowerCase();
    const tables = document.querySelectorAll('.tabcontent table');
  
    tables.forEach(table => {
      const rows = table.getElementsByTagName('tr');
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        let isVisible = false;
        const cells = row.getElementsByTagName('td');
        for (const cell of cells) {
          if (cell.textContent.toLowerCase().includes(filter)) {
            isVisible = true;
            break;
          }
        }
        row.style.display = isVisible ? '' : 'none';
      }
    });
  }


var dropdown = document.getElementsByClassName("dropdown-btn");
for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });
}

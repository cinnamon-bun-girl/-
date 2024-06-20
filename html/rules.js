function expandit(id){
  const obj = document.getElementById(id);
  // if (obj.style.display=="none") obj.style.display="";
  // else obj.style.display="none";
  obj.classList.add('active');
  const texts = document.querySelectorAll('.text');
  const filteredTexts = Array.from(texts).filter((text) => {
    return text.id !== id; // нашли все текста, которые не выбраны (должны быть скрыты)
  });

  filteredTexts.forEach((text) => {
    text.classList.remove('active');
  });
}

// document.querySelector('.input_form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const giftDoor = document.querySelector('.gift'); // создается переменная, которая содержит ссылку на элемент соответствующий селектору '.gift'
//   const inputForm = document.querySelector('.input_form'); // аналогично
//   const infaFields = document.querySelector('.infa'); // аналогично
//   const thanks = document.querySelector('.thanks'); // аналогично

//   giftDoor.style.display = 'none'; // скрываем элемент
//   inputForm.style.display = 'none'; // скрываем элемент
//   infaFields.style.display = 'none'; // скрываем элемент
//   thanks.style.display = 'flex'; // показываем элемент
// })
   const length = 12;

    const uppercaseLetters = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    const lowercaseLetters = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    const numbers = [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    const symbols = [
      '#', '$', '%', '&'
    ];  

    const input = document.getElementById('input');
    const button = document.getElementsByClassName('generate')[0];

const fire = () => {
      let n = document.getElementsByTagName('i')[0].outerHTML = '<i class="fa-regular fa-paste"></i>'
      let password = '';
      password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
      password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
      password += symbols[Math.floor(Math.random() * symbols.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      while (password.length < length) {
        password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
      }

      input.value = password;
     
      const passCopy = () => {
        input.select()
        document.execCommand('copy')
        let n = document.getElementsByTagName('i')[0]
        n.outerHTML = '<i class="fa-solid fa-check"></i>'
      }
      
        document.getElementById('buttons').addEventListener('click', passCopy)

    }

    button.addEventListener('click', fire);
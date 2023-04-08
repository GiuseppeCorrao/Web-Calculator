let calculation = localStorage.getItem('calc') ||
      '';
      document.querySelector('.js-calc-display').innerHTML = calculation;

      function updateCalculation(value) {
        calculation += value;
        document.querySelector('.js-calc-display').innerHTML = calculation;
        
      }
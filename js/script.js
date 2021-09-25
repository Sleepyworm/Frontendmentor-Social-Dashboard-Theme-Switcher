const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const  setColorMode = () => {
    console.log("setColorMode");
    console.log(localStorage.getItem("colorMode"));

    if (localStorage.getItem("colorMode") == "dark"){
        setDarkMode();
        darkButton.click();
    } else if(localStorage.getItem("colorMode") == "light") {
        setLightMode();
        lightButton.click();
    }
};

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
    localStorage.setItem('colorMode', 'dark');
  };
  
const setLightMode = () => {
    document.querySelector('body').classList = 'light';
    localStorage.setItem('colorMode', 'light');
  };
const colorModeFromLocalStorage = () => {
    return localStorage.getItem('colorMode');
  };

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
    radioButtons.forEach(button => {
    button.addEventListener('click', (event) => {
    darkButton.checked ? setDarkMode() : setLightMode();
  });
});

  
  const colorModeFromPreferences = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
                ? 'dark'
                : 'light' // If preference is set or does not match anything (light is default)
  };
  

const loadAndUpdateColor = () => {
    // local storage has precendence over the prefers-color-scheme
    const color = colorModeFromLocalStorage() || colorModeFromPreferences();
    color == 'dark' ? darkButton.click() : lightButton.click();
  };

window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        event.matches ? darkButton.click() : lightButton.click();
      });
      
// Load the right color on startup - localStorage has precedence
loadAndUpdateColor();
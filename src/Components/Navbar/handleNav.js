
const handleNav = (selectedNav) => {
    const navs = document.querySelectorAll('.space__navbar-nav');

    for (let i = 0; i < navs.length; i++) {
      navs[i].classList.remove('selected__nav')
    }
    selectedNav.classList.add('selected__nav');

}

export default handleNav
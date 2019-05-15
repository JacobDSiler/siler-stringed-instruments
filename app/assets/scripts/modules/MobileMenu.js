import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $(".nav-menu");
    this.menuIcon = $(".nav-menu__content-icon");
    this.menuContent = $(".nav-menu__content");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("nav-menu__content--is-visible");
    this.siteHeader.toggleClass("nav-menu--is-expanded");
    this.menuIcon.toggleClass("nav-menu__content-icon--close-x");
  }
}

export default MobileMenu;

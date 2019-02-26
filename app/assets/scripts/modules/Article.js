import $ from 'jquery';

class Article {
  constructor() {
    this.openArticleButton = $(".open-article");
    this.article = $(".article");
    //Setting the story references.
    this.articleFirst = $(".article__story__one");
    this.articleSecond = $(".article__story__two");
    this.articleThird = $(".article__story__three");
    ///////////////////////////////////////////////
    this.articleFirstClick = $(".story--one");
    this.articleSecondClick = $(".story--two");
    this.articleThirdClick = $(".story--three");
    ///////////////////////////////////////////////
    this.closeArticleButton = $(".article__close");
    this.events();
  }

  events() {
    // clicking an open article button
    //this.openArticleButton.click(this.openArticle.bind(this));

    // clicking the x close article button
    this.closeArticleButton.click(this.closeArticle.bind(this));

    //Setting the article click behaviors.
    this.articleFirstClick.click(this.setArticleOne.bind(this));
    this.articleSecondClick.click(this.setArticleTwo.bind(this));
    this.articleThirdClick.click(this.setArticleThree.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeArticle();
    }
  }

  setArticleOne() {
    //alert("One : was clicked.");
    this.articleFirst.addClass("article__story__one--visible");
    this.openArticle();
  }

  setArticleTwo() {
    //alert("Two : was clicked.");
    this.articleSecond.addClass("article__story__two--visible");
    this.openArticle();
  }

  setArticleThree() {
    //alert("Three : was clicked.");
    this.articleThird.addClass("article__story__three--visible");
    this.openArticle();
  }

  openArticle() {
    this.article.addClass("article--open");
    return false;
  }

  closeArticle() {
    this.article.removeClass("article--open");
    this.articleFirst.removeClass("article__story__one--visible");
    this.articleSecond.removeClass("article__story__two--visible");
    this.articleThird.removeClass("article__story__three--visible");
  }
}

export default Article;

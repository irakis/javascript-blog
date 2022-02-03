{
  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

    console.log('Link was clicked!');
    console.log("jaki argument dostała function?:", event);

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add("active")

    console.log("clickedElement:", clickedElement);

    /* [DONE]remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll(".post.active");

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove("active");
    }

    /* [DONE]get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute("href")

    /* [DONE]find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log("czy znalazł artyk href:", targetArticle)

    /* [DONE]add class 'active' to the correct article */

    targetArticle.classList.add("active")

    console.log("zmienił klasę?:", targetArticle);
}


  const optArticleSelector = '.post';
    optTitleSelector = '.post-title';
    optTitleListSelector = '.titles';
{   
  function generateTitleLinks() {

    const tilteList = document.querySelector(optTitleSelector);

    function clearMesseges() {
      tilteList.innterHTML = "";
    }

    const articles = document.querySelectorAll(optArticleSelector)
    let html = '';

    for (article of articles){
      
      const articleId = article.getAttribute("id");

      console.log("pobrał id artykułu?", articleId)

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      console.log("zrobił linki html?; ",linkHTML);
  
      let html = '';
      for (let article of articles) {
        html = html + linkHTML;
      }
      console.log("jaki jest html po pętli:",html);
      tilteList.innerHTML = 'html'
    }
      const links = document.querySelectorAll('.titles a');

      console.log("co to jest links? ", links);

      for (let link of links) {
        link.addEventListener('click', titleClickHandler);
      }
    }
  }
generateTitleLinks();
}
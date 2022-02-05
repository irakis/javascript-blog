{
  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

    console.log('Link was clicked!');
    console.log('jaki argument dostała function?:', event);

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active');

    console.log('clickedElement:', clickedElement);

    /* [DONE]remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [DONE]get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');

    /* [DONE]find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log('czy znalazł artyk href:', targetArticle);

    /* [DONE]add class 'active' to the correct article */

    targetArticle.classList.add('active');

    console.log('zmienił klasę?:', targetArticle);
  };

  const generateTitleLinks = function () {

    const titleList = document.querySelector(optTitleListSelector);

    titleList.innterHTML = '';

    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';

    for (const article of articles) {

      const articleId = article.getAttribute('id');

      console.log('pobrał id artykułu?', articleId);

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      console.log('zrobił linki html?; ', linkHTML);

      html = html + linkHTML;

      console.log('jaki jest html po pętli:', html);

    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    console.log('co to jest links? ', links);

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',

  generateTitleLinks();
}

  const generateTags = function() {

    /*[DONE] find all articles */

    const listAllArticles = document.querySelectorAll(optArticleSelector);

    console.log('znajdź wszystkie art.:', listAllArticles);

    /*[DONE] START LOOP: for every article: */
    /*[DONE] find tags wrapper */

    for (const article of listAllArticles) {

      const tagsWrapper = article.querySelector(optArticleTagsSelector);

      console.log('jest tag wrappera? :', tagsWrapper);

      /*[DONE] make html variable with empty string */

      let html = '';

      console.log('czysty html?', html);

      /*[DONE] get tags from data-tags attribute */

      const articleTags = article.getAttribute('data-tags');

      console.log('czy znalazł tagi?; ', articleTags);

      /*[DONE] split tags into array */

      const articleTagsArray = articleTags.split(' ');

      /*[DONE] START LOOP: for each tag */

      console.log('zrobił tablicę? ', articleTagsArray);

      for (let tag of articleTagsArray) {

        /*[DONE] generate HTML of the link */

        console.log('jaki znalazł tag?', tag);

        /*[DONE] add generated code to html variable */

        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

        html = linkHTML;

        console.log('zapisał do zmiennej link?', html);

        /*[DONE] END LOOP: for each tag */
      }

      /*[DONE] insert HTML of all the links into the tags wrapper */

      tagsWrapper.innerHTML = html;

      /*[DONE] END LOOP: for every article: */
    }
  }
  generateTags();

  const tagClickHandler = function (event) {
    event.preventDefault();

    console.log('drugie klikinęcie.')

    /*[DONE] prevent default action for this event */

    const clickedElement = this;

    /*[DONE] make new constant named "clickedElement" and give it the value of "this" */

    const href = clickedElement.getAttribute('href');

    console.log('pobiera href? :', href);

    /*[DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const tag = href.getAttribute('data-tags');

    console.log('zrobił extrakcje tagu z href?: ', tag);

    /* make a new constant "tag" and extract tag from the "href" constant */

    /* find all tag links with class active */

    /* START LOOP: for each active tag link */

    /* remove class active */

    /* END LOOP: for each active tag link */

    /* find all tag links with "href" attribute equal to the "href" constant */

    /* START LOOP: for each found tag link */

    /* add class active */

    /* END LOOP: for each found tag link */

    /* execute function "generateTitleLinks" with article selector as argument */
  };

  const addClickListenersToTags = function () {
    /* find all links to tags */

    /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

    /* END LOOP: for each link */
  };

  addClickListenersToTags();

}
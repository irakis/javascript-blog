
'use strict'
{
  const titleClickHandler = function (event) {
    event.preventDefault();

    const clickedElement = this;

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
  }

  const generateTitleLinks = function(customSelector = '') {

    const titleList = document.querySelector(optTitleListSelector);

    titleList.innterHTML = '';

    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    console.log('złaczone selektory ', optArticleSelector + customSelector);

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
    optArticleTagsSelector = '.post-tags .list';

  generateTitleLinks();

  const generateTags = function () {

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

      console.log('zapisał link we wrapp?: ', html);

      /*[DONE] END LOOP: for every article: */
    }
  }

  generateTags();

  const tagClickHandler = function (event) {
    event.preventDefault();

    /*[DONE] prevent default action for this event */

    const clickedElement = this;

    /*[DONE] make new constant named "clickedElement" and give it the value of "this" */

    const href = clickedElement.getAttribute('href');

    /*[DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    console.log('pobrał artybut href? ', href);

    /*[DONE] make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');

    console.log('ekstrakcja tagu z linku', tag);

    const tagActiveLinks = document.querySelectAll('a.active[href^="#tag-"]');

    /* [DONE]find all tag links with class active */

    console.log('wybrał aktywne linki zaczyn. od tag?: ', tagActiveLinks);

    for (let tagActiveLink of tagActiveLinks) {

      /* [DONE]START LOOP: for each active tag link */

      tagActiveLink.classList.remove('active');

      /*[DONE] remove class active */
    }

    /* END LOOP: for each active tag link */

    const tagsEqualToClicked = document.querySelector('a[href="' + href + '"]');

    console.log('linki art. z tym samym tagiem: ', tagsEqualToClicked);

    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

    for (let tagEqualTo of tagsEqualToClicked) {

      /*[DONE] START LOOP: for each found tag link */

      tagEqualTo.classList.add('active');

      /*[DONE] add class active */

    }

    /*[DONE] END LOOP: for each found tag link */

    /*[done] execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  const addClickListenersToTags = function() {

    /* find all links to tags */

    const tagActiveLinks = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */
    for (let tagLink of tagActiveLinks) {

       /* add tagClickHandler as event listener for that link */

      tagLink.addEventListener('click', tagClickHandler);
    
    }
    /* END LOOP: for each link */
  }

  addClickListenersToTags();

}
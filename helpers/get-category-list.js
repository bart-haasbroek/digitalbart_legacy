export function getCategoryList(arr) {
  return arr.reduce((catList, article) => {
    // if current article has no categories, return
    if (!article["categories"]) {
      return catList;
    }
    // if catList is empty fill list with the article categories
    if (catList.length === 0) {
      catList = [...article.categories];
    } else {
      // if list is not empty, check current article.categories for new articles which are not in the list
      const newCategories = article.categories.filter((category) => {
        return (
          catList.findIndex(
            (catFromList) => catFromList.slug === category.slug
          ) === -1
        );
      });
      catList = [...catList, ...newCategories];
    }
    return catList;
  }, []);
}

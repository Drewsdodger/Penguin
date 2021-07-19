// search index for Quick 'n Easy Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "untitled page theres nothing here right now reccomend things to drewsdodger2 gmail com nbsp accepted reccomends categories content downloads comics animation music etc as long you made it we will check links cool usefull websites hints and tips be credited with your email or if want called something else just say when the site is ready have hope can enjoy become popular msn in also there somethings that used future dont mind them welcome penguin tech software ", "");
   return this;
}

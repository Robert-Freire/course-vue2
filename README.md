# eccbc-qa-client

> ECCBC QA Client App

## Build Setup

``` bash
#install environment
install node
npm install gulp-cli -g

# install dependencies
npm install

# to enable use of certificate
gulp trust-dev-cert

# every time that switch the branch
gulp clean

# serve with hot reload at localhost:8080
gulp serve

# build for production environment on developmet mode (point to localhost)
gulp package-solution           => the files are generated in sharepoint, upload the package to point to localhost
gulp serve --nobrowser          => some changes may not be applied on the fly, rerun after the change to ensure

# build for production with minification
gulp bundle --ship               => the files are generated in temp/deploy
gulp package-solution --ship     => the files are generated in sharepoint
upload file service-worker.js to https://equatorialbottling.sharepoint.com/sites/appcatalog/SitePages/Forms/ByAuthor.aspx?InitialTabId=Ribbon%2ERead&VisibilityContext=WSSTabPersistence

For detailed explanation on how things work, checkout the [guide] (http://www.qipoint.com/blog/sharepoint-framework-spfx-part-3-deploying-and-shipping-your-client-side-web-part-with-office-365-cdn/)

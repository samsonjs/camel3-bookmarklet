(function() {
  var urlPrefix = 'http://ca.camelcamelcamel.com/search?sq=';
  var amazonURL = window.location.href;
  var url = urlPrefix + encodeURIComponent(amazonURL);
  window.location = url;
}());

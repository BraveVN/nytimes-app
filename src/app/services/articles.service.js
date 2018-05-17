module.exports = [
  'AppConstants',
  '$http',
  '$q',
  // '$log',
  function (
    AppConstants,
    $http,
    $q,
    // $log
  ) {
    const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
    this.get = () => {
      let request = {
        url: url,
        method: 'GET',
        params: {
          'api-key': AppConstants.apiKey
        }
      };

      return $http(request).then(res => res);
    };
  }
];

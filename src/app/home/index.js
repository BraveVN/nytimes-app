module.exports = {
  template: require('./home.html'),
  controller: ['AppConstants', '$log', 'Articles', '$q', function (AppConstants, $log, Articles, $q) {
    var $ctrl = this;

    $ctrl.$onInit = () => {
      $ctrl.constantApi = AppConstants.apiKey;

      getData();
    }

    function getData () {
      Articles.get().then(res => {
          if (res.data.status == 'OK') {
            $ctrl.articles = res.data.response.docs;
          }
        }
      )
    }
  }],
  controllerAs: '$ctrl'
};

app.config([
  '$routeProvider', '$locationProvider', function ($routeProdiver, $locationProvider) {
    $routeProdiver
      .when('/home', {
        templateUrl: './app/components/home/home.view.html',
        controller: 'HomeController'
      })
      .when('/product', {
        templateUrl: './app/components/product/product.view.html',
        controller: 'ProductController'
      })
      .when('/profile', {
        templateUrl: './app/components/profile/profile.view.html',
        controller: 'ProfileController'
      })
      .when('/settings', {
        templateUrl: './app/components/settings/settings.view.html',
        controller: 'SettingsController'
      })
      .when('/login', {
        templateUrl: './app/components/login/login.view.html',
        controller: 'LoginController'
      })
      .when('/registration', {
        templateUrl: './app/components/registration/registration.view.html',
        controller: 'RegistrationController'
      })
        .when('/cart', {
            templateUrl: './app/components/cart/cart.view.html',
            controller: 'CartController'
          })
      .otherwise({
        redirectTo: "/home"
      });
  }
]);
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./accountview.html','<ion-view view-title="This is an account page">\n  <ion-content class="padding">\n    <p>We must include only components here</p>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./auth.login.view.html','<ion-view view-title="This is the login page">\n  <ion-content class="padding">\n    <email-login></email-login>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./auth.register.view.html','<ion-view view-title="This is the register page">\n  <ion-content class="padding">\n    <register></register>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./mainview.html','<ion-view view-title="This is a main page loading a main component">\n  <ion-content class="padding">\n    <main></main>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./menu.html','<ion-side-menus enable-menu-with-back-views="false">\n\n  <!-- CONTENT -->\n  <ion-side-menu-content>\n\n    <!-- header bar -->\n    <!-- the nav bar will be updated as we navigate between views -->\n    <ion-nav-bar class="bar-assertive">\n      <!-- back button, shown if applicable -->\n      <ion-nav-back-button>\n      </ion-nav-back-button>\n      <!-- nav button, shown if applicable -->\n      <ion-nav-buttons side="left">\n        <button class="button button-icon button-clear ion-navicon" menu-toggle="left">\n        </button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n\n    <!-- ROUTING INJECTED HERE: pageContent -->\n    <ion-nav-view name="pageContent"></ion-nav-view>\n\n  </ion-side-menu-content>\n\n  <!-- SIDEMENU -->\n  <ion-side-menu side="left">\n\n    <!-- menu header -->\n    <ion-header-bar class="bar-assertive">\n      <h1 class="title">Nav</h1>\n    </ion-header-bar>\n\n    <!-- menu content -->\n    <ion-content>\n      <ion-list>\n        <ion-item menu-close ui-sref="app.main">\n          Home\n        </ion-item>\n        <ion-item menu-close ui-sref="app.account">\n          Account\n        </ion-item>\n        <ion-item menu-close ui-sref="app.login">\n          Login\n        </ion-item>\n      </ion-list>\n    </ion-content>\n\n  </ion-side-menu>\n\n</ion-side-menus>\n');
$templateCache.put('./tabs.html','<ion-tabs class="tabs-icon-top tabs-assertive">\n\n  <!-- List Tab -->\n  <ion-tab title="Home" icon-off="ion-ios-pulse" icon-on="ion-ios-pulse-strong"\n    ui-sref="app.main">\n    <ion-nav-view name="tab-list"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Debug Tab -->\n  <ion-tab title="Account" icon-off="ion-ios-gear-outline" icon-on="ion-ios-gear"\n    ui-sref="app.account">\n    <ion-nav-view name="tab-debug"></ion-nav-view>\n  </ion-tab>\n\n</ion-tabs>\n');
$templateCache.put('./counter.html','<div class="list">\n  <div class="item item-input-inset">\n    <button type="button" ng-click="$ctrl.decrement();">-</button>\n    <label class="item-input-wrapper">\n      <input type="text" ng-model="$ctrl.count" disabled />\n    </label>\n    <button type="button" ng-click="$ctrl.increment();">+</button>\n  </div>\n</div>\n');
$templateCache.put('./auth-form.html','<form name="authForm" novalidate ng-submit="$ctrl.submitForm();" class="list">\n  <label class="item item-input">\n    <span class="input-label">Username</span>\n    <input\n      type="email"\n      name="email"\n      required="required"\n      placeholder="Enter your email"\n      ng-model="$ctrl.user.email">\n  </label>\n  <label class="item item-input">\n    <span class="input-label">Password</span>\n    <input\n      type="password"\n      name="password"\n      required="required"\n      placeholder="Enter your password"\n      ng-model="$ctrl.user.password">\n  </label>\n  <div class="auth-button">\n    <button type="submit" class="button button-block button-assertive" ng-disabled="authForm.$invalid">\n      {{ $ctrl.button }}\n    </button>\n  </div>\n  <div ng-if="$ctrl.message">\n    {{ $ctrl.message }}\n  </div>\n</form>\n');
$templateCache.put('./email-login.html','<div class="auth">\n  <h1>Login</h1>\n  <auth-form\n    user="$ctrl.user"\n    message="{{ $ctrl.error }}"\n    button="Login"\n    on-submit="$ctrl.loginUser($event);">\n  </auth-form>\n</div>\n\n<div class="auth__info">\n  <a ui-sref="auth.login">\n    Log in via Social Plats\n  </a>\n</div>\n\n<div class="auth__info">\n  <a ui-sref="app.register">\n    Don\'t have an account? Create one here.\n  </a>\n</div>\n');
$templateCache.put('./facebook-login.html','<form name="authForm" novalidate ng-submit="$ctrl.submitForm();">\n  <div class="auth-button">\n    <button type="submit" >\n      Facebook Login\n    </button>\n  </div>\n  <div ng-if="$ctrl.message">\n    {{ $ctrl.message }}\n  </div>\n</form>\n');
$templateCache.put('./login.html','<div class="auth">\n  <h1>Login</h1>\n  <facebook-login\n  user="$ctrl.user"\n  on-submit="$ctrl.loginUser($event);">\n  </facebook-login>\n</div>\n\n<div class="auth__info">\n  <a ui-sref="auth.email">\n    Log in via email\n  </a>\n</div>\n\n<div class="auth__info">\n  <a ui-sref="auth.register">\n    Don\'t have an account? Create one here.\n  </a>\n</div>\n\n\n');
$templateCache.put('./register.html','<div class="auth">\n  <h1>Register</h1>\n  <auth-form\n    user="$ctrl.user"\n    message="{{ $ctrl.error }}"\n    button="Create user"\n    on-submit="$ctrl.createUser($event);">\n  </auth-form>\n</div>\n<div class="auth__info">\n  <a ui-sref="app.login">\n    Already have an account? Login here.\n  </a>\n</div>\n');
$templateCache.put('./main.html','<p>Main component sample</p>\n');}]);
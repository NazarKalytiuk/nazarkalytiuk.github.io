"use strict";
var router_1 = require('@angular/router');
var login_1 = require('../login/login');
var appRoutes = [
    {
        path: 'login',
        component: login_1.LoginComponent
    },
    {
        path: '',
        component: login_1.LoginComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
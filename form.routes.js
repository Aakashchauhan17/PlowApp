"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var form_component_1 = require("~/app/form/form.component");
exports.routes = [
    { path: '', component: form_component_1.formComponent }
];
var formRoutingModule = /** @class */ (function () {
    function formRoutingModule() {
    }
    formRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(exports.routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], formRoutingModule);
    return formRoutingModule;
}());
exports.formRoutingModule = formRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3JtLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsNERBQXVEO0FBRTFDLFFBQUEsTUFBTSxHQUFXO0lBQzFCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUMsOEJBQWEsRUFBQztDQUN2QyxDQUFDO0FBT0Y7SUFBQTtJQUErQixDQUFDO0lBQW5CLGlCQUFpQjtRQUw3QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsY0FBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FFdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFFO0lBQUQsd0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7Zm9ybUNvbXBvbmVudH0gZnJvbSAnfi9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudCdcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDpmb3JtQ29tcG9uZW50fVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG5cbn0pXG5leHBvcnQgY2xhc3MgZm9ybVJvdXRpbmdNb2R1bGV7fSJdfQ==
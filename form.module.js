"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var form_routes_1 = require("~/app/form/form.routes");
var form_component_1 = require("~/app/form/form.component");
var nativescript_drawingpad_1 = require("nativescript-drawingpad");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("DrawingPad", function () { return require("nativescript-drawingpad").DrawingPad; });
var formModule = /** @class */ (function () {
    function formModule() {
    }
    formModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                form_routes_1.formRoutingModule
            ],
            declarations: [form_component_1.formComponent],
            providers: [
                nativescript_drawingpad_1.DrawingPad
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], formModule);
    return formModule;
}());
exports.formModule = formModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEwRDtBQUMxRCxzREFBdUU7QUFDdkUsc0RBQXlEO0FBQ3pELDREQUF3RDtBQUN4RCxtRUFBbUQ7QUFDbkQsMEVBQXdFO0FBQ3hFLGtDQUFlLENBQUMsWUFBWSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQyxVQUFVLEVBQTdDLENBQTZDLENBQUMsQ0FBQztBQWVuRjtJQUFBO0lBRUEsQ0FBQztJQUZZLFVBQVU7UUFadEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFDO2dCQUNKLGlDQUF3QjtnQkFDeEIsK0JBQWlCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUM3QixTQUFTLEVBQUU7Z0JBQ1Asb0NBQVU7YUFDYjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBRTlCLENBQUM7T0FDVyxVQUFVLENBRXRCO0lBQUQsaUJBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Zm9ybVJvdXRpbmdNb2R1bGV9IGZyb20gJ34vYXBwL2Zvcm0vZm9ybS5yb3V0ZXMnO1xuaW1wb3J0IHtmb3JtQ29tcG9uZW50fSBmcm9tICd+L2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50JztcbmltcG9ydCB7RHJhd2luZ1BhZH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcmF3aW5ncGFkXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xucmVnaXN0ZXJFbGVtZW50KFwiRHJhd2luZ1BhZFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRyYXdpbmdwYWRcIikuRHJhd2luZ1BhZCk7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOltcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBmb3JtUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbZm9ybUNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERyYXdpbmdQYWRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxuXG59KVxuZXhwb3J0IGNsYXNzIGZvcm1Nb2R1bGV7XG5cbn0iXX0=
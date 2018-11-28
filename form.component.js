"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_directions_1 = require("nativescript-directions");
var http_1 = require("@angular/http");
var ImageSource = require("image-source");
var imagepicker = require("nativescript-imagepicker");
// Kinvey.init({
//     appKey: 'kid_Hkw1LWwCQ',
//     appSecret: '7ad50ce60ef740b4a1acf7b3efd82339'
// });
var formComponent = /** @class */ (function () {
    function formComponent(http) {
        this.http = http;
        this.imageAssets = [];
        this.isSingleMode = true;
        this.thumbSize = 80;
        this.previewSize = 300;
        this.directions = new nativescript_directions_1.Directions();
    }
    formComponent.prototype.onSelectMultipleTap = function () {
        this.isSingleMode = false;
        var context = imagepicker.create({
            mode: "multiple"
        });
        this.startSelection(context);
    };
    formComponent.prototype.onSelectSingleTap = function () {
        this.isSingleMode = true;
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    formComponent.prototype.startSelection = function (context) {
        var that = this;
        context
            .authorize()
            .then(function () {
            that.imageAssets = [];
            that.imageSrc = null;
            return context.present();
        })
            .then(function (selection) {
            console.log("Selection done: " + JSON.stringify(selection));
            that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;
            // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
            selection.forEach(function (element) {
                element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
                element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
            });
            that.imageAssets = selection;
        }).catch(function (e) {
            console.log(e);
        });
    };
    // onImage(){
    //     console.log("Image Tapped");
    // }
    formComponent.prototype.onImage = function () {
        this.directions.navigate({
            to: {
                address: "950 Mason st, San Francisco, CA"
            },
        }).then(function () {
            console.log("Current location to address directions launched!");
        }, function (err) {
            alert(err);
        });
    };
    formComponent.prototype.ngOnInit = function () {
    };
    formComponent.prototype.ngAfterViewInit = function () {
        this.pad = this.drawingPad.nativeElement;
    };
    formComponent.prototype.send = function () {
        var _this = this;
        this.pad.getDrawing().then(function (data) {
            var image = ImageSource.fromNativeSource(data);
            var headers = new http_1.Headers({ "Content-Type": "application/json" });
            var options = new http_1.RequestOptions({ headers: headers });
            var body = {
                "signature": image.toBase64String("png", 70)
            };
            _this.http.post("http://example.com", JSON.stringify(body), options)
                .subscribe(function (result) {
                // Uploaded signature as a base64 string
            }, function (error) {
                console.dir(error);
            });
        }, function (error) {
            console.dir(error);
        });
    };
    formComponent.prototype.reset = function () {
        this.pad.clearDrawing();
    };
    __decorate([
        core_1.ViewChild("signature"),
        __metadata("design:type", core_1.ElementRef)
    ], formComponent.prototype, "drawingPad", void 0);
    formComponent = __decorate([
        core_1.Component({
            selector: "form",
            moduleId: module.id,
            templateUrl: "./form.component.html",
            styleUrls: ['./form.component.css'],
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], formComponent);
    return formComponent;
}());
exports.formComponent = formComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RixtRUFBcUQ7QUFDckQsc0NBQThEO0FBQzlELDBDQUE0QztBQUU1QyxzREFBd0Q7QUFFeEQsZ0JBQWdCO0FBQ2hCLCtCQUErQjtBQUMvQixvREFBb0Q7QUFDcEQsTUFBTTtBQVFOO0lBdURDLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQWpEM0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQStDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG9DQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBOUNNLDJDQUFtQixHQUExQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxFQUFFLFVBQVU7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0seUNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUM3QixJQUFJLEVBQUUsUUFBUTtTQUNqQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxzQ0FBYyxHQUF0QixVQUF1QixPQUFPO1FBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixPQUFPO2FBQ04sU0FBUyxFQUFFO2FBQ1gsSUFB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LENBQUM7UUFDWCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBdkdHO1FBREMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQ0osaUJBQVU7cURBQUM7SUFIckIsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDakMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0F3RHlCLFdBQUk7T0F2RGxCLGFBQWEsQ0E2R3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTdHRCxJQTZHQztBQTdHWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIEluamVjdGFibGUsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEaXJlY3Rpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kaXJlY3Rpb25zXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XG5pbXBvcnQgeyBmcm9tRmlsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xuaW1wb3J0IHsgS2ludmV5LCBDYWNoZVN0b3JlLCBOZXR3b3JrU3RvcmUsIFN5bmNTdG9yZX0gZnJvbSAna2ludmV5LW5hdGl2ZXNjcmlwdC1zZGsnO1xuLy8gS2ludmV5LmluaXQoe1xuLy8gICAgIGFwcEtleTogJ2tpZF9Ia3cxTFd3Q1EnLFxuLy8gICAgIGFwcFNlY3JldDogJzdhZDUwY2U2MGVmNzQwYjRhMWFjZjdiM2VmZDgyMzM5J1xuLy8gfSk7XG4gXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiZm9ybVwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2Zvcm0uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9mb3JtLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgZm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb25zOiBEaXJlY3Rpb25zO1xuICAgIEBWaWV3Q2hpbGQoXCJzaWduYXR1cmVcIilcbiAgICBwdWJsaWMgZHJhd2luZ1BhZDogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgcGFkOiBhbnk7XG4gICAgaW1hZ2VBc3NldHMgPSBbXTtcbiAgICBpbWFnZVNyYzogYW55O1xuICAgIGlzU2luZ2xlTW9kZTogYm9vbGVhbiA9IHRydWU7XG4gICAgdGh1bWJTaXplOiBudW1iZXIgPSA4MDtcbiAgICBwcmV2aWV3U2l6ZTogbnVtYmVyID0gMzAwO1xuXG4gICAgcHVibGljIG9uU2VsZWN0TXVsdGlwbGVUYXAoKSB7XG4gICAgICAgIHRoaXMuaXNTaW5nbGVNb2RlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kZTogXCJtdWx0aXBsZVwiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNlbGVjdFNpbmdsZVRhcCgpIHtcbiAgICAgICAgdGhpcy5pc1NpbmdsZU1vZGUgPSB0cnVlO1xuXG4gICAgICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZGU6IFwic2luZ2xlXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgICAgICBjb250ZXh0XG4gICAgICAgIC5hdXRob3JpemUoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LmltYWdlQXNzZXRzID0gW107XG4gICAgICAgICAgICB0aGF0LmltYWdlU3JjID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3Rpb24gZG9uZTogXCIgKyBKU09OLnN0cmluZ2lmeShzZWxlY3Rpb24pKTtcbiAgICAgICAgICAgIHRoYXQuaW1hZ2VTcmMgPSB0aGF0LmlzU2luZ2xlTW9kZSAmJiBzZWxlY3Rpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGlvblswXSA6IG51bGw7XG5cbiAgICAgICAgICAgIC8vIHNldCB0aGUgaW1hZ2VzIHRvIGJlIGxvYWRlZCBmcm9tIHRoZSBhc3NldHMgd2l0aCBvcHRpbWFsIHNpemVzIChvcHRpbWl6ZSBtZW1vcnkgdXNhZ2UpXG4gICAgICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy53aWR0aCA9IHRoYXQuaXNTaW5nbGVNb2RlID8gdGhhdC5wcmV2aWV3U2l6ZSA6IHRoYXQudGh1bWJTaXplO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy5oZWlnaHQgPSB0aGF0LmlzU2luZ2xlTW9kZSA/IHRoYXQucHJldmlld1NpemUgOiB0aGF0LnRodW1iU2l6ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGF0LmltYWdlQXNzZXRzID0gc2VsZWN0aW9uO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBuZXcgRGlyZWN0aW9ucygpOyAgXG4gICAgfVxuICAgIC8vIG9uSW1hZ2UoKXtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJJbWFnZSBUYXBwZWRcIik7XG4gICAgICAgXG4gICAgLy8gfVxuICAgIG9uSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5uYXZpZ2F0ZSh7XG4gICAgICAgICAgdG86IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiOTUwIE1hc29uIHN0LCBTYW4gRnJhbmNpc2NvLCBDQVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgLy8gICB0eXBlOiBcInRyYW5zaXRcIlxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgbG9jYXRpb24gdG8gYWRkcmVzcyBkaXJlY3Rpb25zIGxhdW5jaGVkIVwiKTtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxufVxucHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnBhZCA9IHRoaXMuZHJhd2luZ1BhZC5uYXRpdmVFbGVtZW50O1xufVxuXG5wdWJsaWMgc2VuZCgpIHtcbiAgICB0aGlzLnBhZC5nZXREcmF3aW5nKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgbGV0IGltYWdlID0gSW1hZ2VTb3VyY2UuZnJvbU5hdGl2ZVNvdXJjZShkYXRhKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgICAgIGxldCBib2R5ID0ge1xuICAgICAgICAgICAgXCJzaWduYXR1cmVcIjogaW1hZ2UudG9CYXNlNjRTdHJpbmcoXCJwbmdcIiwgNzApXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovL2V4YW1wbGUuY29tXCIsIEpTT04uc3RyaW5naWZ5KGJvZHkpLCBvcHRpb25zKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFVwbG9hZGVkIHNpZ25hdHVyZSBhcyBhIGJhc2U2NCBzdHJpbmdcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICB9KTtcbn1cblxucHVibGljIHJlc2V0KCkge1xuICAgIHRoaXMucGFkLmNsZWFyRHJhd2luZygpO1xufVxuIFxuICAgICAgIFxufSJdfQ==
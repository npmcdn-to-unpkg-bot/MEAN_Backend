/**
 * Created by Mathieu on 23/08/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_model_1 = require('./user.model');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.saveUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/user', body, { headers: headers })
            .map(function (data) {
            var datas = JSON.stringify(data);
            var body = JSON.parse(datas)._body;
            user.id = JSON.parse(body).id;
        });
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete('http://localhost:3000/users/delete/' + id)
            .map(function (data) { return data.json(); });
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('http://localhost:3000/users')
            .map(function (data) {
            var extracted = data.json();
            var users = [];
            var user;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var data_1 = _a[_i];
                user = new user_model_1.User(data_1.mail, data_1.name, data_1.password, data_1._id);
                users.push(user);
            }
            return users;
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFFSCxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsMkJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUU3QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBR2pCO0lBQ0kscUJBQW9CLElBQVc7UUFBWCxTQUFJLEdBQUosSUFBSSxDQUFPO0lBQUksQ0FBQztJQUVwQyw4QkFBUSxHQUFSLFVBQVMsSUFBVztRQUNoQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFHLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUVuRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFHLE9BQU8sRUFBQyxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFFTCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLEVBQVc7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFDQUFxQyxHQUFHLEVBQUUsQ0FBQzthQUM5RCxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7YUFDOUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixJQUFNLEtBQUssR0FBWSxFQUFFLENBQUM7WUFFMUIsSUFBSSxJQUFNLENBQUE7WUFDTixHQUFHLENBQUMsQ0FBYSxVQUFjLEVBQWQsS0FBQSxTQUFTLENBQUMsSUFBSSxFQUFkLGNBQWMsRUFBZCxJQUFjLENBQUM7Z0JBQTNCLElBQUksTUFBSSxTQUFBO2dCQUNULElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsTUFBSSxDQUFDLElBQUksRUFBRSxNQUFJLENBQUMsSUFBSSxFQUFFLE1BQUksQ0FBQyxRQUFRLEVBQUUsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCO1lBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFuQ0w7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQW9DYixrQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksbUJBQVcsY0FtQ3ZCLENBQUEiLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IE1hdGhpZXUgb24gMjMvMDgvMjAxNi5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vdXNlci5tb2RlbCc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwIDogSHR0cCkgeyB9XG5cbiAgICBzYXZlVXNlcih1c2VyIDogVXNlcikgOiBPYnNlcnZhYmxlIHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcicsIGJvZHksIHtoZWFkZXJzIDogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKGRhdGEgPT4ge1xuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFzID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBKU09OLnBhcnNlKGRhdGFzKS5fYm9keTtcbiAgICAgICAgICAgICAgICB1c2VyLmlkID0gSlNPTi5wYXJzZShib2R5KS5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZVVzZXIoaWQgOiBzdHJpbmcpIDogT2JzZXJ2YWJsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvZGVsZXRlLycgKyBpZClcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiBkYXRhLmpzb24oKSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMnKVxuICAgICAgICAgICAgLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRyYWN0ZWQgPSBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA6IFVzZXJbXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgOlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXRhIG9mIGV4dHJhY3RlZC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyID0gbmV3IFVzZXIoZGF0YS5tYWlsLCBkYXRhLm5hbWUsIGRhdGEucGFzc3dvcmQsIGRhdGEuX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzLnB1c2godXNlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

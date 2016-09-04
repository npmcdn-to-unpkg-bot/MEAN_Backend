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
var user_service_1 = require("./user.service");
var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.showSuccessUser = false;
        this.showErrorUser = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return console.error(error); });
    };
    UserComponent.prototype.deleteUser = function (id, index) {
        this.users.splice(index, 1);
        this.userService.deleteUser(id)
            .subscribe(function () { return console.log("Deleted"); }, function (error) { return console.log("Error"); });
    };
    UserComponent.prototype.onAddUser = function () {
        /*const rnd = Math.ceil(Math.random() * 100);
        const user = new User(rnd + ' is an awesome number !');

        this.users.push(user);

        this.userService.saveUser(user)
            .subscribe(
                () => this.showSuccessUser = true,
                error => this.showErrorUser = true
            );
            */
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users',
            templateUrl: 'user.template.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFRN0M7SUFLSSx1QkFBb0IsV0FBeUI7UUFBekIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFKN0MsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUNwQixvQkFBZSxHQUFhLEtBQUssQ0FBQztRQUNsQyxrQkFBYSxHQUFhLEtBQUssQ0FBQztJQUVrQixDQUFDO0lBRW5ELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO2FBQ3RCLFNBQVMsQ0FDTixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixFQUMzQixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEVBQUUsRUFBRSxLQUFLO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDMUIsU0FBUyxDQUNOLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUF0QixDQUFzQixFQUM1QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUVJOzs7Ozs7Ozs7O2NBVU07SUFDVixDQUFDO0lBNUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDM0IsQ0FBQzs7cUJBQUE7SUF5Q0Ysb0JBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBeENZLHFCQUFhLGdCQXdDekIsQ0FBQSIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAndXNlcnMnLFxuICAgIHRlbXBsYXRlVXJsOiAndXNlci50ZW1wbGF0ZS5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVXNlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdXNlcnMgOiBVc2VyW10gPSBbXTtcbiAgICBzaG93U3VjY2Vzc1VzZXIgOiBCb29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0Vycm9yVXNlciA6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2UgOiBVc2VyU2VydmljZSApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICB1c2VycyA9PiB0aGlzLnVzZXJzID0gdXNlcnMsXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZGVsZXRlVXNlcihpZCwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy51c2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZGVsZXRlVXNlcihpZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJEZWxldGVkXCIpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3JcIilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgb25BZGRVc2VyKCkge1xuXG4gICAgICAgIC8qY29uc3Qgcm5kID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIocm5kICsgJyBpcyBhbiBhd2Vzb21lIG51bWJlciAhJyk7XG5cbiAgICAgICAgdGhpcy51c2Vycy5wdXNoKHVzZXIpO1xuXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2Uuc2F2ZVVzZXIodXNlcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5zaG93U3VjY2Vzc1VzZXIgPSB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuc2hvd0Vycm9yVXNlciA9IHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAqL1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
var message_model_1 = require('./message.model');
var message_service_1 = require("./message.service");
var MessageComponent = (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
        this.showSuccessMessage = false;
        this.showErrorMessage = false;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; }, function (error) { return console.error(error); });
    };
    MessageComponent.prototype.deleteMessage = function (id, index) {
        this.messages.splice(index, 1);
        this.messageService.deleteMessage(id)
            .subscribe(function () { return console.log("Deleted"); }, function (error) { return console.log("Error"); });
    };
    MessageComponent.prototype.onAddMessage = function () {
        var _this = this;
        var rnd = Math.ceil(Math.random() * 100);
        var message = new message_model_1.Message(rnd + ' is an awesome number !');
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return _this.showSuccessMessage = true; }, function (error) { return _this.showErrorMessage = true; });
    };
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'messages',
            templateUrl: 'message.template.html',
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsOEJBQXdCLGlCQUFpQixDQUFDLENBQUE7QUFDMUMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFRbkQ7SUFLSSwwQkFBb0IsY0FBK0I7UUFBL0IsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBSm5ELGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLHFCQUFnQixHQUFhLEtBQUssQ0FBQztJQUVxQixDQUFDO0lBRXpELG1DQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFO2FBQzVCLFNBQVMsQ0FDTixVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBRUQsd0NBQWEsR0FBYixVQUFjLEVBQUUsRUFBRSxLQUFLO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7YUFDaEMsU0FBUyxDQUNOLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUF0QixDQUFzQixFQUM1QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUFBLGlCQVlDO1FBVkcsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBTSxPQUFPLEdBQUcsSUFBSSx1QkFBTyxDQUFDLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUNuQyxTQUFTLENBQ04sY0FBTSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEVBQTlCLENBQThCLEVBQ3BDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksRUFBNUIsQ0FBNEIsQ0FDeEMsQ0FBQztJQUNWLENBQUM7SUEzQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM5QixDQUFDOzt3QkFBQTtJQXdDRix1QkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUF2Q1ksd0JBQWdCLG1CQXVDNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL21lc3NhZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbWVzc2FnZXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnbWVzc2FnZS50ZW1wbGF0ZS5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbWVzc2FnZXMgOiBNZXNzYWdlW10gPSBbXTtcbiAgICBzaG93U3VjY2Vzc01lc3NhZ2UgOiBCb29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0Vycm9yTWVzc2FnZSA6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVzc2FnZVNlcnZpY2UgOiBNZXNzYWdlU2VydmljZSApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBtZXNzYWdlcyA9PiB0aGlzLm1lc3NhZ2VzID0gbWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZGVsZXRlTWVzc2FnZShpZCwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZGVsZXRlTWVzc2FnZShpZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJEZWxldGVkXCIpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3JcIilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgb25BZGRNZXNzYWdlKCkge1xuXG4gICAgICAgIGNvbnN0IHJuZCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJuZCArICcgaXMgYW4gYXdlc29tZSBudW1iZXIgIScpO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNhdmVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc2hvd1N1Y2Nlc3NNZXNzYWdlID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLnNob3dFcnJvck1lc3NhZ2UgPSB0cnVlXG4gICAgICAgICAgICApO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

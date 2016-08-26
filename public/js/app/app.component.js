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
var AppComponent = (function () {
    function AppComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
        this.showSuccessMessage = false;
        this.showErrorMessage = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.deleteMessage = function (id, index) {
        this.messages.splice(index, 1);
        this.messageService.deleteMessage(id)
            .subscribe(function () { return console.log("Deleted"); }, function (error) { return console.log("Error"); });
    };
    AppComponent.prototype.onAddMessage = function () {
        var _this = this;
        var rnd = Math.ceil(Math.random() * 100);
        var message = new message_model_1.Message(rnd + ' is an awesome number !');
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return _this.showSuccessMessage = true; }, function (error) { return _this.showErrorMessage = true; });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCw4QkFBd0IsaUJBQWlCLENBQUMsQ0FBQTtBQUMxQyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQVFuRDtJQUtJLHNCQUFvQixjQUErQjtRQUEvQixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFKbkQsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQix1QkFBa0IsR0FBYSxLQUFLLENBQUM7UUFDckMscUJBQWdCLEdBQWEsS0FBSyxDQUFDO0lBRXFCLENBQUM7SUFFekQsK0JBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUU7YUFDNUIsU0FBUyxDQUNOLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLEVBQ3BDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQztJQUNWLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsRUFBRSxFQUFFLEtBQUs7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQzthQUNoQyxTQUFTLENBQ04sY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQXRCLENBQXNCLEVBQzVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQztJQUNWLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQUEsaUJBWUM7UUFWRyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFNLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsR0FBRyxHQUFHLHlCQUF5QixDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ25DLFNBQVMsQ0FDTixjQUFNLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksRUFBOUIsQ0FBOEIsRUFDcEMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxFQUE1QixDQUE0QixDQUN4QyxDQUFDO0lBQ1YsQ0FBQztJQTNDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG1CQUFtQjtZQUNoQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzlCLENBQUM7O29CQUFBO0lBd0NGLG1CQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXZDWSxvQkFBWSxlQXVDeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG1lc3NhZ2VzIDogTWVzc2FnZVtdID0gW107XG4gICAgc2hvd1N1Y2Nlc3NNZXNzYWdlIDogQm9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dFcnJvck1lc3NhZ2UgOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlIDogTWVzc2FnZVNlcnZpY2UgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgPT4gdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGRlbGV0ZU1lc3NhZ2UoaWQsIGluZGV4KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmRlbGV0ZU1lc3NhZ2UoaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiRGVsZXRlZFwiKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVycm9yXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQWRkTWVzc2FnZSgpIHtcblxuICAgICAgICBjb25zdCBybmQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShybmQgKyAnIGlzIGFuIGF3ZXNvbWUgbnVtYmVyICEnKTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zYXZlTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNob3dTdWNjZXNzTWVzc2FnZSA9IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5zaG93RXJyb3JNZXNzYWdlID0gdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

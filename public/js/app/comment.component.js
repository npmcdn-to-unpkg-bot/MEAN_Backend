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
var comment_model_1 = require('./comment.model');
var comment_service_1 = require("./comment.service");
var CommentComponent = (function () {
    function CommentComponent(commentService) {
        this.commentService = commentService;
        this.comments = [];
        this.showSuccessComment = false;
        this.showErrorComment = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentService.getComments()
            .subscribe(function (comments) { return _this.comments = comments; }, function (error) { return console.error(error); });
    };
    CommentComponent.prototype.deleteComment = function (id, index) {
        this.comments.splice(index, 1);
        this.commentService.deleteComment(id)
            .subscribe(function () { return console.log("Deleted"); }, function (error) { return console.log("Error"); });
    };
    CommentComponent.prototype.onAddComment = function () {
        var _this = this;
        var rnd = Math.ceil(Math.random() * 100);
        var comment = new comment_model_1.Comment(rnd + ' is an awesome number !');
        this.comments.push(comment);
        this.commentService.saveComment(comment)
            .subscribe(function () { return _this.showSuccessComment = true; }, function (error) { return _this.showErrorComment = true; });
    };
    CommentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'comments',
            templateUrl: 'comment.template.html',
            providers: [comment_service_1.CommentService]
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsOEJBQXdCLGlCQUFpQixDQUFDLENBQUE7QUFDMUMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFRbkQ7SUFLSSwwQkFBb0IsY0FBK0I7UUFBL0IsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBSm5ELGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLHFCQUFnQixHQUFhLEtBQUssQ0FBQztJQUVxQixDQUFDO0lBRXpELG1DQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFO2FBQzVCLFNBQVMsQ0FDTixVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBRUQsd0NBQWEsR0FBYixVQUFjLEVBQUUsRUFBRSxLQUFLO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7YUFDaEMsU0FBUyxDQUNOLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUF0QixDQUFzQixFQUM1QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUFBLGlCQVlDO1FBVkcsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBTSxPQUFPLEdBQUcsSUFBSSx1QkFBTyxDQUFDLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUNuQyxTQUFTLENBQ04sY0FBTSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEVBQTlCLENBQThCLEVBQ3BDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksRUFBNUIsQ0FBNEIsQ0FDeEMsQ0FBQztJQUNWLENBQUM7SUEzQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM5QixDQUFDOzt3QkFBQTtJQXdDRix1QkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUF2Q1ksd0JBQWdCLG1CQXVDNUIsQ0FBQSIsImZpbGUiOiJjb21tZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4vY29tbWVudC5tb2RlbCc7XG5pbXBvcnQgeyBDb21tZW50U2VydmljZSB9IGZyb20gXCIuL2NvbW1lbnQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnY29tbWVudHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnY29tbWVudC50ZW1wbGF0ZS5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtDb21tZW50U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29tbWVudHMgOiBDb21tZW50W10gPSBbXTtcbiAgICBzaG93U3VjY2Vzc0NvbW1lbnQgOiBCb29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0Vycm9yQ29tbWVudCA6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWVudFNlcnZpY2UgOiBDb21tZW50U2VydmljZSApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UuZ2V0Q29tbWVudHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBjb21tZW50cyA9PiB0aGlzLmNvbW1lbnRzID0gY29tbWVudHMsXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZGVsZXRlQ29tbWVudChpZCwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jb21tZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UuZGVsZXRlQ29tbWVudChpZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJEZWxldGVkXCIpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3JcIilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgb25BZGRDb21tZW50KCkge1xuXG4gICAgICAgIGNvbnN0IHJuZCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IG5ldyBDb21tZW50KHJuZCArICcgaXMgYW4gYXdlc29tZSBudW1iZXIgIScpO1xuXG4gICAgICAgIHRoaXMuY29tbWVudHMucHVzaChjb21tZW50KTtcblxuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlLnNhdmVDb21tZW50KGNvbW1lbnQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc2hvd1N1Y2Nlc3NDb21tZW50ID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLnNob3dFcnJvckNvbW1lbnQgPSB0cnVlXG4gICAgICAgICAgICApO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

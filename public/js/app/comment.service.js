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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.saveMessage = function (comment) {
        var body = JSON.stringify(comment);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/comment', body, { headers: headers })
            .map(function (data) {
            var datas = JSON.stringify(data);
            var body = JSON.parse(datas)._body;
            comment.id = JSON.parse(body).id;
        });
    };
    CommentService.prototype.deleteMessage = function (id) {
        return this.http.delete('http://localhost:3000/comments/delete/' + id)
            .map(function (data) { return data.json(); });
    };
    CommentService.prototype.getMessages = function () {
        return this.http.get('http://localhost:3000/comments')
            .map(function (data) {
            var extracted = data.json();
            var comments = [];
            var comment;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var data_1 = _a[_i];
                comment = new Message(data_1.content, data_1._id);
                comments.push(comment);
            }
            return comments;
        });
    };
    CommentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CommentService);
    return CommentService;
}());
exports.CommentService = CommentService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFFSCxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0MscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBRTdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFHakI7SUFDSSx3QkFBb0IsSUFBVztRQUFYLFNBQUksR0FBSixJQUFJLENBQU87SUFBSSxDQUFDO0lBRXBDLG9DQUFXLEdBQVgsVUFBWSxPQUFpQjtRQUN6QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFHLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUVuRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFHLE9BQU8sRUFBQyxDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFFTCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEVBQVc7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHdDQUF3QyxHQUFHLEVBQUUsQ0FBQzthQUNqRSxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7YUFDakQsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixJQUFNLFFBQVEsR0FBZSxFQUFFLENBQUM7WUFFaEMsSUFBSSxPQUFTLENBQUE7WUFDVCxHQUFHLENBQUMsQ0FBYSxVQUFjLEVBQWQsS0FBQSxTQUFTLENBQUMsSUFBSSxFQUFkLGNBQWMsRUFBZCxJQUFjLENBQUM7Z0JBQTNCLElBQUksTUFBSSxTQUFBO2dCQUNULE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFJLENBQUMsT0FBTyxFQUFFLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtZQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBbkNMO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFvQ2IscUJBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLHNCQUFjLGlCQW1DMUIsQ0FBQSIsImZpbGUiOiJjb21tZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTWF0aGlldSBvbiAyMy8wOC8yMDE2LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi9jb21tZW50Lm1vZGVsJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAgJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbW1lbnRTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHAgOiBIdHRwKSB7IH1cblxuICAgIHNhdmVNZXNzYWdlKGNvbW1lbnQgOiBDb21tZW50KSA6IE9ic2VydmFibGUge1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY29tbWVudCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbid9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb21tZW50JywgYm9keSwge2hlYWRlcnMgOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiB7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IEpTT04ucGFyc2UoZGF0YXMpLl9ib2R5O1xuICAgICAgICAgICAgICAgIGNvbW1lbnQuaWQgPSBKU09OLnBhcnNlKGJvZHkpLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlTWVzc2FnZShpZCA6IHN0cmluZykgOiBPYnNlcnZhYmxlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb21tZW50cy9kZWxldGUvJyArIGlkKVxuICAgICAgICAgICAgLm1hcChkYXRhID0+IGRhdGEuanNvbigpKTtcbiAgICB9XG5cbiAgICBnZXRNZXNzYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb21tZW50cycpXG4gICAgICAgICAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZCA9IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRzIDogTWVzc2FnZVtdID0gW107XG5cbiAgICAgICAgICAgICAgICBsZXQgY29tbWVudCA6XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGRhdGEgb2YgZXh0cmFjdGVkLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQgPSBuZXcgTWVzc2FnZShkYXRhLmNvbnRlbnQsIGRhdGEuX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29tbWVudHM7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

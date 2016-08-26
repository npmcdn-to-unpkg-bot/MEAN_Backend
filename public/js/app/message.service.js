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
var message_model_1 = require('./message.model');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.saveMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/message', body, { headers: headers })
            .map(function (data) {
            var datas = JSON.stringify(data);
            var body = JSON.parse(datas)._body;
            message.id = JSON.parse(body).id;
        });
    };
    MessageService.prototype.deleteMessage = function (id) {
        return this.http.delete('http://localhost:3000/messages/delete/' + id)
            .map(function (data) { return data.json(); });
    };
    MessageService.prototype.getMessages = function () {
        return this.http.get('http://localhost:3000/messages')
            .map(function (data) {
            var extracted = data.json();
            var messages = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var data_1 = _a[_i];
                message = new message_model_1.Message(data_1.content, data_1._id);
                messages.push(message);
            }
            return messages;
        });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFFSCxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsOEJBQXNCLGlCQUFpQixDQUFDLENBQUE7QUFDeEMscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBRTdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFHakI7SUFDSSx3QkFBb0IsSUFBVztRQUFYLFNBQUksR0FBSixJQUFJLENBQU87SUFBSSxDQUFDO0lBRXBDLG9DQUFXLEdBQVgsVUFBWSxPQUFpQjtRQUN6QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFHLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUVuRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFHLE9BQU8sRUFBQyxDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFFTCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEVBQVc7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHdDQUF3QyxHQUFHLEVBQUUsQ0FBQzthQUNqRSxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7YUFDakQsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixJQUFNLFFBQVEsR0FBZSxFQUFFLENBQUM7WUFFaEMsSUFBSSxPQUFTLENBQUE7WUFDVCxHQUFHLENBQUMsQ0FBYSxVQUFjLEVBQWQsS0FBQSxTQUFTLENBQUMsSUFBSSxFQUFkLGNBQWMsRUFBZCxJQUFjLENBQUM7Z0JBQTNCLElBQUksTUFBSSxTQUFBO2dCQUNULE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsTUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUI7WUFDTCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQW5DTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBb0NiLHFCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtBQW5DWSxzQkFBYyxpQkFtQzFCLENBQUEiLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IE1hdGhpZXUgb24gMjMvMDgvMjAxNi5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwIDogSHR0cCkgeyB9XG5cbiAgICBzYXZlTWVzc2FnZShtZXNzYWdlIDogTWVzc2FnZSkgOiBPYnNlcnZhYmxlIHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZScsIGJvZHksIHtoZWFkZXJzIDogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKGRhdGEgPT4ge1xuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFzID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBKU09OLnBhcnNlKGRhdGFzKS5fYm9keTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmlkID0gSlNPTi5wYXJzZShib2R5KS5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZU1lc3NhZ2UoaWQgOiBzdHJpbmcpIDogT2JzZXJ2YWJsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZXMvZGVsZXRlLycgKyBpZClcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiBkYXRhLmpzb24oKSk7XG4gICAgfVxuXG4gICAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZXMnKVxuICAgICAgICAgICAgLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRyYWN0ZWQgPSBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgOlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXRhIG9mIGV4dHJhY3RlZC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoZGF0YS5jb250ZW50LCBkYXRhLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

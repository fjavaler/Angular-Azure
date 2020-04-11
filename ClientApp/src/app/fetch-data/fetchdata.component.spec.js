"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_data_component_1 = require("./fetch-data.component");
var http_1 = require("@angular/common/http");
var testing_1 = require("@angular/core/testing");
var MockHttp = /** @class */ (function () {
    function MockHttp() {
    }
    MockHttp.prototype.get = function (url) {
        return { subscribe: function () { } };
    };
    return MockHttp;
}());
exports.MockHttp = MockHttp;
var mockHttp;
var fixture;
describe('fetchdata', function () {
    beforeEach(function () {
        mockHttp = new MockHttp();
        spyOn(mockHttp, 'get').and.returnValue({ subscribe: function () { } });
        testing_1.TestBed.configureTestingModule({
            declarations: [fetch_data_component_1.FetchDataComponent],
            providers: [
                { provide: http_1.HttpClient, useValue: mockHttp },
                { provide: 'BASE_URL', useValue: '' },
            ],
        });
        fixture = testing_1.TestBed.createComponent(fetch_data_component_1.FetchDataComponent);
        fixture.detectChanges();
    });
    it('should call http.get', function () {
        expect(mockHttp.get).toHaveBeenCalled();
    });
});
//# sourceMappingURL=fetchdata.component.spec.js.map
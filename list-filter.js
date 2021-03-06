import { Pipe } from '@angular/core';
var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe() {
    }
    ListFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    ListFilterPipe.prototype.applyFilter = function (item, filter) {
        var found = false;
        for (var prop in item) {
            if (filter.itemName) {
                if (item[prop].toString().toLowerCase().indexOf(filter.itemName.toLowerCase()) >= 0) {
                    found = true;
                }
            }
            else
                found = true;
        }
        return found;
    };
    ListFilterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'listFilter',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    ListFilterPipe.ctorParameters = function () { return []; };
    return ListFilterPipe;
}());
export { ListFilterPipe };
//# sourceMappingURL=list-filter.js.map
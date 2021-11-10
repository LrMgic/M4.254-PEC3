var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { v4 as uuidv4 } from 'uuid';
var TodoDTO = /** @class */ (function () {
    function TodoDTO(text, complete) {
        if (complete === void 0) { complete = false; }
        this.id = uuidv4();
        this.text = text;
        this.complete = complete;
    }
    return TodoDTO;
}());
export { TodoDTO };
var TodoChild = /** @class */ (function (_super) {
    __extends(TodoChild, _super);
    function TodoChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TodoChild.prototype.filter = function (arg0) {
        throw new Error("Method not implemented.");
    };
    TodoChild.prototype.map = function (arg0) {
        throw new Error("Method not implemented.");
    };
    TodoChild.prototype.push = function (arg0) {
        throw new Error("Method not implemented.");
    };
    return TodoChild;
}(TodoDTO));
export { TodoChild };

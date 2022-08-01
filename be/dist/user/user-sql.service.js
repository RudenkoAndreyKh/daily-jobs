"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSqlService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../db");
const convert_object_keys_1 = require("../utils/convert-object-keys");
let UserSqlService = class UserSqlService {
    async createUser(user) {
        const query = `
                INSERT INTO users(name, surname, full_name, login, password, birth_date) 
                    VALUES($<name>, $<surname>, $<fullName>, $<login>, $<password>, $<birthDate>)
                    RETURNING id, name, surname, full_name, birth_date;
            `;
        const result = await db_1.default.oneOrNone(query, user);
        result.birth_date = String(result.birth_date);
        if (!result || !result['id']) {
            return null;
        }
        return (0, convert_object_keys_1.default)(result);
    }
};
UserSqlService = __decorate([
    (0, common_1.Injectable)()
], UserSqlService);
exports.UserSqlService = UserSqlService;
//# sourceMappingURL=user-sql.service.js.map
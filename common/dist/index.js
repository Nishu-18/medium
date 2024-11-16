"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlog = exports.updateBlogInput = exports.signinBody = exports.signupBody = void 0;
const zod_1 = require("zod");
exports.signupBody = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().optional()
});
exports.signinBody = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
exports.updateBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    id: zod_1.z.string()
});
exports.createBlog = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string()
});

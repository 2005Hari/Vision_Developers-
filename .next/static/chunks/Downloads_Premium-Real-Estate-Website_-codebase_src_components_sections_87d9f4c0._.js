(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Navigation = ()=>{
    _s();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleScroll = {
                "Navigation.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 10);
                }
            }["Navigation.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    const closeMobileMenu = ()=>{
        setIsMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-pure-white shadow-lg' : 'bg-transparent'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:hidden flex items-start justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: closeMobileMenu,
                                className: "group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo1.png",
                                    alt: "Site Logo",
                                    width: 480,
                                    height: 144,
                                    className: "h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex flex-none justify-center items-start pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo1.png",
                                    alt: "Site Logo",
                                    width: 520,
                                    height: 156,
                                    className: "h-32 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:brightness-110",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center space-x-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about-us",
                                    className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium",
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/our-services",
                                    className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium",
                                    children: "Our Services"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/3d-walkthrough",
                                    className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium",
                                    children: "3D Walkthrough"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/tools",
                                    className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium",
                                    children: "Tools"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/house-land-search",
                                    className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium",
                                    children: "House & Land Search"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/new-home-designs-search",
                                    className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium",
                                    children: "New Home Designs"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact-us",
                                    className: "bg-urban-gold text-pure-white px-6 py-3 rounded-md hover:bg-urban-gold/90 transition-colors duration-300 font-medium",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                className: "text-jet-black hover:text-urban-gold transition-colors duration-300",
                                children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden bg-pure-white shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8 py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: closeMobileMenu,
                                className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium py-2",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about-us",
                                onClick: closeMobileMenu,
                                className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium py-2",
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/our-services",
                                onClick: closeMobileMenu,
                                className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium py-2",
                                children: "Our Services"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/3d-walkthrough",
                                onClick: closeMobileMenu,
                                className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium py-2",
                                children: "3D Walkthrough"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tools",
                                onClick: closeMobileMenu,
                                className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium py-2",
                                children: "Tools"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/house-land-search",
                                onClick: closeMobileMenu,
                                className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium py-2",
                                children: "House & Land Search"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/new-home-designs-search",
                                onClick: closeMobileMenu,
                                className: "text-jet-black hover:text-urban-gold transition-colors duration-300 font-medium py-2",
                                children: "New Home Designs"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact-us",
                                onClick: closeMobileMenu,
                                className: "bg-urban-gold text-pure-white px-6 py-3 rounded-md hover:bg-urban-gold/90 transition-colors duration-300 font-medium text-center",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Navigation.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
_s(Navigation, "9gS8f+QtQE+kyIRIeyB0R7XQtYQ=");
_c = Navigation;
const __TURBOPACK__default__export__ = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Hero = ()=>{
    _s();
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const backgroundImages = [
        '/image21.jpg',
        '/image4.jpg',
        '/image13.jpg',
        '/image9.jpg'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const interval = setInterval({
                "Hero.useEffect.interval": ()=>{
                    setIsTransitioning(true);
                    setTimeout({
                        "Hero.useEffect.interval": ()=>{
                            setCurrentImageIndex({
                                "Hero.useEffect.interval": (prevIndex)=>(prevIndex + 1) % backgroundImages.length
                            }["Hero.useEffect.interval"]);
                            setIsTransitioning(false);
                        }
                    }["Hero.useEffect.interval"], 500);
                }
            }["Hero.useEffect.interval"], 3000);
            return ({
                "Hero.useEffect": ()=>clearInterval(interval)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen w-full flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: backgroundImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: image,
                            alt: `Luxury Home Background ${index + 1}`,
                            fill: true,
                            className: "object-cover object-center min-w-full min-h-full",
                            priority: index === 0,
                            sizes: "100vw"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, image, false, {
                        fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-base-green/60 z-10"
            }, void 0, false, {
                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex flex-col items-center justify-center text-center text-pure-white px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[min(90vw,750px)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/find-your-dream-home-4.png",
                            alt: "Find Your Dream Home",
                            width: 1026,
                            height: 89,
                            sizes: "(max-width: 768px) 90vw, 750px",
                            style: {
                                width: '100%',
                                height: 'auto'
                            },
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 sm:mt-16 flex flex-col sm:flex-row items-center gap-8 sm:gap-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/new-home-designs-search",
                                className: "font-extrabold text-base md:text-lg text-pure-white uppercase tracking-[0.3em] hover:text-stone-beige transition-colors duration-300 ease-in-out transform-gpu hover:-translate-y-0.5",
                                children: "Home Designs"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact-us",
                                className: "font-extrabold text-base md:text-lg text-pure-white uppercase tracking-[0.3em] hover:text-stone-beige transition-colors duration-300 ease-in-out transform-gpu hover:-translate-y-0.5",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Hero.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
_s(Hero, "eZE5WC7lHIFmYRdtEQU5UmIO/yo=");
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Downloads/Premium-Real-Estate-Website_-codebase/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
"use client";
;
;
const Contact = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-20 bg-cover bg-center",
        style: {
            backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/image-29.jpeg?')"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-white/50"
            }, void 0, false, {
                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto max-w-6xl px-4 lg:px-8 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-warm-beige p-8 md:p-12 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-8 text-lg leading-relaxed",
                                    children: "Whether you're looking to build or develop in South Australia, Fortune Living makes it easy. Please feel free to contact us with any questions!"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-6 text-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-5 h-5 mr-4 mt-1 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://maps.app.goo.gl/FaEz8gXSHy3K1eif8",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "hover:underline",
                                                    children: "6/483 North East Road, Hillcrest SA 5086"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-5 h-5 mr-4 mt-1 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:0883375555",
                                                    className: "hover:underline",
                                                    children: "08 8337 5555"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-5 h-5 mr-4 mt-1 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:0410005551",
                                                    className: "hover:underline",
                                                    children: "0410 005 551"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "w-5 h-5 mr-4 mt-1 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:info@fortuneliving.com.au",
                                                    className: "hover:underline",
                                                    children: "info@fortuneliving.com.au"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-8 md:p-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold uppercase mb-6 text-primary-dark tracking-wider",
                                    children: "contact us today"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Name",
                                            className: "w-full bg-light-grey border-none p-4 rounded-none placeholder:text-medium-grey focus:ring-warm-beige focus:ring-1 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Email",
                                            className: "w-full bg-light-grey border-none p-4 rounded-none placeholder:text-medium-grey focus:ring-warm-beige focus:ring-1 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            placeholder: "Phone",
                                            className: "w-full bg-light-grey border-none p-4 rounded-none placeholder:text-medium-grey focus:ring-warm-beige focus:ring-1 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Suburb",
                                            className: "w-full bg-light-grey border-none p-4 rounded-none placeholder:text-medium-grey focus:ring-warm-beige focus:ring-1 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Message",
                                            rows: 5,
                                            className: "sm:col-span-2 w-full bg-light-grey border-none p-4 rounded-none placeholder:text-medium-grey focus:ring-warm-beige focus:ring-1 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Premium$2d$Real$2d$Estate$2d$Website_$2d$codebase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "sm:col-span-2 w-full bg-warm-beige text-white font-bold py-4 text-lg uppercase tracking-wider hover:bg-primary-dark transition-colors duration-300 rounded-none ",
                                            children: "Send"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Premium-Real-Estate-Website_-codebase/src/components/sections/Contact.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=Downloads_Premium-Real-Estate-Website_-codebase_src_components_sections_87d9f4c0._.js.map
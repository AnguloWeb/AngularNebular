"use strict";
(self["webpackChunknebularProject"] = self["webpackChunknebularProject"] || []).push([["src_app_pages_main_main_module_ts"],{

/***/ 440:
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 1672);




class MainComponent {
    constructor(fb) {
        this.fb = fb;
        this.form = fb.group({
            name: fb.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]),
            lastName: fb.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]),
            email: fb.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]),
            age: fb.control(null),
            description: fb.control(null),
        });
    }
    ngOnInit() {
    }
    send(test) {
        console.log(this.form?.value, test);
        alert(`Bienvenido ${this.form?.value.name}`);
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 14, vars: 2, consts: [[1, "container"], [1, "container__card"], [1, "container__card--body", 3, "formGroup"], ["type", "text", "nbInput", "", "placeholder", "Nombre", "fullWidth", "", "formControlName", "name"], ["type", "text", "nbInput", "", "placeholder", "Apellido", "fullWidth", "", "formControlName", "lastName"], ["type", "text", "nbInput", "", "placeholder", "Correo", "fullWidth", "", "formControlName", "email"], ["type", "number", "nbInput", "", "placeholder", "Edad", "fullWidth", "", "formControlName", "age"], ["name", "description", "id", "description", "cols", "30", "rows", "10", "nbInput", "", "fullWidth", "", "placeholder", "Descripci\u00F3n", "formControlName", "description"], ["nbButton", "", "status", "success", 3, "disabled", "click"], ["icon", "cloud-upload-outline"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "nb-card", 1)(2, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Datos personales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nb-card-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3)(6, "input", 4)(7, "input", 5)(8, "input", 6)(9, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nb-card-footer")(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_Template_button_click_11_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "nb-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Enviar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbIconComponent], styles: [".container__card--body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 1rem;\n  row-gap: 2rem;\n}\n.container__card--body[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFEWjtBQUdZO0VBQ0ksbUJBQUE7QUFEaEIiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgJl9fY2FyZCB7XHJcbiAgICAgICAgJi0tYm9keSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDFyZW07XHJcbiAgICAgICAgICAgIHJvdy1nYXA6IDJyZW07XHJcblxyXG4gICAgICAgICAgICAjZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9582:
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainModule": () => (/* binding */ MainModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component */ 440);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 1672);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/eva-icons */ 1992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [
    { path: '', component: _main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent }
];
class MainModule {
}
MainModule.ɵfac = function MainModule_Factory(t) { return new (t || MainModule)(); };
MainModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__.NbEvaIconsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbIconModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__.NbEvaIconsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_main_main_module_ts.js.map
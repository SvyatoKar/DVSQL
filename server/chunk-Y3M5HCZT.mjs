import './polyfills.server.mjs';
import{A,B as ge,C as me,D as _e,E as q,F as ve,H as ye,M as Ve,O as Ce,P as R,Q as _,R as Ee,S as z,U as De,V as Me,W as be,Z as Ae,a as se,b as oe,c as ae,d as le,da as Fe,e as W,ea as Se,f as B,g as v,h as ue,i as U,j as y,k as de,l as ce,m as $,n as O,o as m,p as d,q as K,r as x,s as b,t as he,u as fe,v as pe,w as a,x as l,y as V,z as u}from"./chunk-OZHB6LNY.mjs";import{a as h,b as p}from"./chunk-5XUXGTUW.mjs";var Pe=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(d(K),d($))},e.\u0275dir=y({type:e});let t=e;return t})(),et=(()=>{let e=class e extends Pe{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=ce(e)))(s||e)}})(),e.\u0275dir=y({type:e,features:[b]});let t=e;return t})(),Ge=new v("");var tt={provide:Ge,useExisting:W(()=>H),multi:!0};function it(){let t=z()?z().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var nt=new v(""),H=(()=>{let e=class e extends Pe{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!it())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(d(K),d($),d(nt,8))},e.\u0275dir=y({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&V("input",function(f){return s._handleInput(f.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(f){return s._compositionEnd(f.target.value)})},features:[q([tt]),b]});let t=e;return t})();var rt=new v(""),st=new v("");function ke(t){return t!=null}function He(t){return ye(t)?oe(t):t}function Le(t){let e={};return t.forEach(i=>{e=i!=null?h(h({},e),i):e}),Object.keys(e).length===0?null:e}function je(t,e){return e.map(i=>i(t))}function ot(t){return!t.validate}function We(t){return t.map(e=>ot(e)?e:i=>e.validate(i))}function at(t){if(!t)return null;let e=t.filter(ke);return e.length==0?null:function(i){return Le(je(i,e))}}function Be(t){return t!=null?at(We(t)):null}function lt(t){if(!t)return null;let e=t.filter(ke);return e.length==0?null:function(i){let n=je(i,e).map(He);return le(n).pipe(ae(Le))}}function Ue(t){return t!=null?lt(We(t)):null}function we(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ut(t){return t._rawValidators}function dt(t){return t._rawAsyncValidators}function Z(t){return t?Array.isArray(t)?t:[t]:[]}function P(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ie(t,e){let i=Z(e);return Z(t).forEach(r=>{P(i,r)||i.push(r)}),i}function Ne(t,e){return Z(e).filter(i=>!P(t,i))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Be(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},Q=class extends G{get formDirective(){return null}get path(){return null}},N=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Y=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ei=p(h({},ct),{"[class.ng-submitted]":"isSubmitted"}),$e=(()=>{let e=class e extends Y{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(d(N,2))},e.\u0275dir=y({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&pe("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[b]});let t=e;return t})();var F="VALID",T="INVALID",C="PENDING",S="DISABLED",D=class{},k=class extends D{constructor(e,i){super(),this.value=e,this.source=i}},w=class extends D{constructor(e,i){super(),this.pristine=e,this.source=i}},I=class extends D{constructor(e,i){super(),this.touched=e,this.source=i}},E=class extends D{constructor(e,i){super(),this.status=e,this.source=i}};function ht(t){return(L(t)?t.validators:t)||null}function ft(t){return Array.isArray(t)?Be(t):t||null}function pt(t,e){return(L(e)?e.asyncValidators:t)||null}function gt(t){return Array.isArray(t)?Ue(t):t||null}function L(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var X=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=R(()=>this.statusReactive()),this.statusReactive=x(void 0),this._pristine=R(()=>this.pristineReactive()),this.pristineReactive=x(!0),this._touched=R(()=>this.touchedReactive()),this.touchedReactive=x(!1),this._events=new se,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return _(this.statusReactive)}set status(e){_(()=>this.statusReactive.set(e))}get valid(){return this.status===F}get invalid(){return this.status===T}get pending(){return this.status==C}get disabled(){return this.status===S}get enabled(){return this.status!==S}get pristine(){return _(this.pristineReactive)}set pristine(e){_(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return _(this.touchedReactive)}set touched(e){_(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ie(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ie(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ne(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}hasValidator(e){return P(this._rawValidators,e)}hasAsyncValidator(e){return P(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(p(h({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new I(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new I(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(p(h({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new w(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new w(!0,n))}markAsPending(e={}){this.status=C;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new E(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(p(h({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(r=>{r.disable(p(h({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new k(this.value,n)),this._events.next(new E(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(h({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(n=>{n.enable(p(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(p(h({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===C)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new k(this.value,i)),this._events.next(new E(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(p(h({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=He(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new E(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(T)?T:F}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new w(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new I(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ft(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=gt(this._rawAsyncValidators)}};var Ke=new v("CallSetDisabledState",{providedIn:"root",factory:()=>J}),J="always";function mt(t,e){return[...e.path,t]}function _t(t,e,i=J){yt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Vt(t,e),Et(t,e),Ct(t,e),vt(t,e)}function Oe(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function vt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function yt(t,e){let i=ut(t);e.validator!==null?t.setValidators(we(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=dt(t);e.asyncValidator!==null?t.setAsyncValidators(we(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Oe(e._rawValidators,r),Oe(e._rawAsyncValidators,r)}function Vt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&qe(t,e)})}function Ct(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&qe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function qe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Et(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Dt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function Mt(t){return Object.getPrototypeOf(t.constructor)===et}function bt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===H?i=s:Mt(s)?n=s:r=s}),r||n||i||null}function xe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Re(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var At=class extends X{constructor(e=null,i,n){super(ht(i),pt(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Re(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){xe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){xe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Re(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ft={provide:N,useExisting:W(()=>ee)},Te=Promise.resolve(),ee=(()=>{let e=class e extends N{constructor(n,r,s,c,f,j){super(),this._changeDetectorRef=f,this.callSetDisabledState=j,this.control=new At,this._registered=!1,this.name="",this.update=new O,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=bt(this,c)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Dt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){_t(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Te.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&Ce(r);Te.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?mt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(d(Q,9),d(rt,10),d(st,10),d(Ge,10),d(Ve,8),d(Ke,8))},e.\u0275dir=y({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[q([Ft]),b,de]});let t=e;return t})();var St=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=U({type:e}),e.\u0275inj=B({});let t=e;return t})();var ze=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Ke,useValue:n.callSetDisabledState??J}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=U({type:e}),e.\u0275inj=B({imports:[St]});let t=e;return t})();function It(t,e){if(t&1&&(a(0,"tr")(1,"td"),u(2),l(),a(3,"td"),u(4),l()()),t&2){let i=e.$implicit;m(2),A(i.vtNr),m(2),A(i.docId)}}var Ze=(()=>{let e=class e{constructor(){this.title="Willkommen im SQL-Generator",this.userText="",this.SQLtext="",this.tableData=[]}processText(){let n=this.userText.split(`
`),r=new Set,s=new Set,c=new Map;for(let g of n){let M=g.trim();if(!M)continue;let te=M.match(/\b\d{16}\b/),ie=M.match(/\b\d{1,13}\b/);if(te&&ie){let ne=te[0],re=ie[0].padStart(13,"0");r.add(re),s.add(ne),c.set(re,ne)}}let f=Array.from(r),j=Array.from(s),o=f.map(g=>`'${g}'`).join(", "),Xe=j.map(g=>`'${g}'`).join(", ");this.SQLtext=`DELETE FROM VSMADM.SLA WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SAB WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SBP WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SPA WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SPOSGOZ WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SPOSHUK WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SPOSGOAE WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SPOSPZN WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SPOSGBH WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SPOSPRUEF WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SABZ WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SDIAG WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SPAFLG WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SLOCK WHERE PVG_BKEY IN (${o});
DELETE FROM VSMADM.SPATXT WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.TKS011 WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW01 WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW01R WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW02 WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW02R WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW03 WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW03R WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW04 WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW04R WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW05 WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW05R WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW06 WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW06R WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW07 WHERE KV_VTG_NR IN (${o});
DELETE FROM VSMADM.SKW07R WHERE KV_VTG_NR IN (${o});
UPDATE VSMADM.POK SET PK_SCANN_USER = '', PK_VGNR = 0, PK_STATUS_CD = '1', PK_VG_NAME = 'LOCR', PK_CLASS_CD = 30, FASEL_KEY = 0, FASEL_TXT = '', FASEL_KEY1 = 0, PK_AKT_USER = '793DUNKL' WHERE DOC_ID IN (${Xe});
    `.replace(/^\s+/gm,"").trim(),this.tableData=Array.from(c.entries()).map(([g,M])=>({vtNr:g,docId:M}))}cleanText(){this.userText="",this.SQLtext="",this.tableData=[]}copyText(){let n=document.createElement("textarea");n.value=this.SQLtext,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),alert("Text in die Zwischenablage kopiert!")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=ue({type:e,selectors:[["app-root"]],standalone:!0,features:[ve],decls:40,vars:4,consts:[[1,"d-flex","justify-content-center"],[1,"col-md-6"],[1,"p-5","bg-body-tertiary","border","rounded-3","text-center","mt-4"],[1,"text-primary"],[1,"container","mt-4"],[1,"row"],[1,"col-md-4"],[1,"p-3","bg-light","border","rounded-3","fixed-height"],["rows","10","placeholder","Bitte geben Sie die DocID und die Vertragsnummern ein...",1,"form-control",3,"ngModelChange","ngModel"],[1,"button-container"],[1,"btn","btn-primary","mt-3",3,"click"],[1,"btn","btn-primary","ms-2","mt-3",3,"click"],[1,"p-3","bg-light","border","rounded-3","scrollable-content","fixed-height"],[1,"table","table-striped","table-sm"],[4,"ngFor","ngForOf"],[1,"p-3","bg-light","border","rounded-3","sql-code","fixed-height"],[1,"btn-container"],[1,"btn","btn-primary",3,"click"]],template:function(r,s){r&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),u(4),l()()()(),a(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"h3"),u(10,"Text eingeben"),l(),a(11,"textarea",8),_e("ngModelChange",function(f){return me(s.userText,f)||(s.userText=f),f}),u(12,"        "),l(),a(13,"div",9)(14,"button",10),V("click",function(){return s.processText()}),u(15,"Generieren"),l(),a(16,"button",11),V("click",function(){return s.cleanText()}),u(17,"Clean"),l()()()(),a(18,"div",6)(19,"div",12)(20,"h3"),u(21,"Tabelle"),l(),a(22,"table",13)(23,"thead")(24,"tr")(25,"th"),u(26,"VtNr"),l(),a(27,"th"),u(28,"DocId"),l()()(),a(29,"tbody"),he(30,It,5,2,"tr",14),l()()()(),a(31,"div",6)(32,"div",15)(33,"h3"),u(34,"SQL-Code"),l(),a(35,"pre"),u(36),l(),a(37,"div",16)(38,"button",17),V("click",function(){return s.copyText()}),u(39,"Copy"),l()()()()()()),r&2&&(m(4),A(s.title),m(7),ge("ngModel",s.userText),m(19),fe("ngForOf",s.tableData),m(6),A(s.SQLtext))},dependencies:[Me,De,ze,H,$e,ee],styles:[".table[_ngcontent-%COMP%]{font-size:.875rem}pre[_ngcontent-%COMP%]{white-space:pre-wrap;background-color:#f8f9fa;border:1px solid #ddd;padding:10px;border-radius:4px;font-size:.875rem}.scrollable-content[_ngcontent-%COMP%]{max-height:400px;overflow-y:auto}.sql-code[_ngcontent-%COMP%]{font-family:monospace;white-space:pre-wrap;background-color:#f8f9fa;border:1px solid #ddd;padding:10px;border-radius:4px;max-height:400px;overflow-y:auto}.fixed-height[_ngcontent-%COMP%]{height:400px;display:flex;flex-direction:column;overflow-y:auto;position:relative}.btn-container[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;transform:translate(-50%);width:100%;background-color:#f8f9fa;padding:10px}"]});let t=e;return t})();var Qe={providers:[Fe([])],imports:[Se]};var Nt={providers:[Ae()]},Ye=Ee(Qe,Nt);var Ot=()=>be(Ze,Ye),_i=Ot;export{_i as a};

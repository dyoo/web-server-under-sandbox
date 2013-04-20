
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/wescheme/lang/semantics.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _419=function(M){return(_393)(M);};

var _395=function(M){if(--M.cbt<0){throw _395;}
};

var _405=function(M){if(--M.cbt<0){throw _405;}
M.e.length-=(M.a-1);
return(_406)(M);};

var _406=function(M){if(--M.cbt<0){throw _406;}
if((M.installedModules["whalesong/lang/whalesong.rkt"]!==void(0)&&M.modules["whalesong/lang/whalesong.rkt"]!==undefined)!==false){return(_407)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/whalesong.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_407);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_407)(M);}};

var _399=function(M){if(--M.cbt<0){throw _399;}
M.e.length-=(M.a-1);
return(_400)(M);};

var _397=function(M){M.modules["whalesong/wescheme/lang/semantics.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/whalesong.rkt"]!==void(0)&&M.modules["whalesong/lang/whalesong.rkt"]!==undefined)!==false){return(_398)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/whalesong.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_398);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_398)(M);}};

var _403=function(M){if(--M.cbt<0){throw _403;}
if((M.installedModules["whalesong/world.rkt"]!==void(0)&&M.modules["whalesong/world.rkt"]!==undefined)!==false){return(_404)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/world.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_404);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_404)(M);}};

var _400=function(M){if(--M.cbt<0){throw _400;}
if((M.installedModules["whalesong/image.rkt"]!==void(0)&&M.modules["whalesong/image.rkt"]!==undefined)!==false){return(_401)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_401);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_401)(M);}};

var _394=function(M){if(--M.cbt<0){throw _394;}
M.e.length-=(M.a-1);
return(_395)(M);};

var _402=function(M){if(--M.cbt<0){throw _402;}
M.e.length-=(M.a-1);
return(_403)(M);};

var _410=function(M){if(--M.cbt<0){throw _410;}
M.e.length-=(M.a-1);
return(_411)(M);};

var _409=function(M){if(--M.cbt<0){throw _409;}
M.e.push([[M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix,M.modules["whalesong/lang/check-expect/check-expect.rkt"].getPrefixOffset("run-tests"),{moduleName:"whalesong/lang/check-expect/check-expect.rkt",name:"run-tests"}],[M.modules["collects/racket/private/modbeg.rkt"].prefix,M.modules["collects/racket/private/modbeg.rkt"].getPrefixOffset("print-values"),{moduleName:"collects/racket/private/modbeg.rkt",name:"print-values"}]]);M.e[M.e.length-1].names=["run-tests","print-values"];
M.modules["whalesong/wescheme/lang/semantics.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_411,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1][1][0][M.e[M.e.length-1][1][1]];
M.p=M.e[M.e.length-1][0][0][M.e[M.e.length-1][0][1]];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_415,M.p));
return((M.p).label)(M);};

var _415=function(M){if(--M.cbt<0){throw _415;}
M.a=1;
return(_416)(M);};

var _411=function(M){if(--M.cbt<0){throw _411;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("*", M.primitives["*"]);ns.set("+", M.primitives["+"]);ns.set("-", M.primitives["-"]);ns.set("/", M.primitives["/"]);ns.set("<", M.primitives["<"]);ns.set("<=", M.primitives["<="]);ns.set("=", M.primitives["="]);ns.set(">", M.primitives[">"]);ns.set(">=", M.primitives[">="]);ns.set("abort-current-continuation", M.primitives["abort-current-continuation"]);ns.set("above", M.modules["whalesong/image/private/main.rkt"].getExports().get("above14.27"));ns.set("above/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("above/align15.29"));ns.set("abs", M.primitives["abs"]);ns.set("acos", M.primitives["acos"]);ns.set("add-between", M.modules["whalesong/lang/list.rkt"].getExports().get("add-between"));ns.set("add-line", M.modules["whalesong/image/private/main.rkt"].getExports().get("add-line27.53"));ns.set("add1", M.primitives["add1"]);ns.set("andmap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("andmap2"));ns.set("angle", M.primitives["angle"]);ns.set("angle?", M.modules["whalesong/image/private/main.rkt"].getExports().get("angle?51.101"));ns.set("append", M.primitives["append"]);ns.set("append*", M.modules["whalesong/lang/list.rkt"].getExports().get("append*"));ns.set("append-map", M.modules["whalesong/lang/list.rkt"].getExports().get("append-map"));ns.set("apply", M.primitives["apply"]);ns.set("argmax", M.modules["whalesong/lang/list.rkt"].getExports().get("argmax"));ns.set("argmin", M.modules["whalesong/lang/list.rkt"].getExports().get("argmin"));ns.set("asin", M.primitives["asin"]);ns.set("assf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assf"));ns.set("assoc", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assoc"));ns.set("assq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assq"));ns.set("assv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assv"));ns.set("atan", M.primitives["atan"]);ns.set("beside", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside12.23"));ns.set("beside/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside/align13.25"));ns.set("big-bang", M.modules["whalesong/world/main.rkt"].getExports().get("big-bang1.1"));ns.set("bitmap/url", M.modules["whalesong/image/private/main.rkt"].getExports().get("bitmap/url3.5"));ns.set("boolean=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("boolean=?"));ns.set("boolean?", M.primitives["boolean?"]);ns.set("box", M.primitives["box"]);ns.set("box?", M.primitives["box?"]);ns.set("build-list", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-list"));ns.set("build-string", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-string"));ns.set("build-vector", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-vector"));ns.set("byte?", M.primitives["byte?"]);ns.set("caaaar", M.primitives["caaaar"]);ns.set("caaadr", M.primitives["caaadr"]);ns.set("caaar", M.primitives["caaar"]);ns.set("caadar", M.primitives["caadar"]);ns.set("caaddr", M.primitives["caaddr"]);ns.set("caadr", M.primitives["caadr"]);ns.set("caar", M.primitives["caar"]);ns.set("cadaar", M.primitives["cadaar"]);ns.set("cadadr", M.primitives["cadadr"]);ns.set("cadar", M.primitives["cadar"]);ns.set("caddar", M.primitives["caddar"]);ns.set("cadddr", M.primitives["cadddr"]);ns.set("caddr", M.primitives["caddr"]);ns.set("cadr", M.primitives["cadr"]);ns.set("call-with-continuation-prompt", M.primitives["call-with-continuation-prompt"]);ns.set("call-with-current-continuation", M.primitives["call-with-current-continuation"]);ns.set("call-with-escape-continuation", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call-with-escape-continuation"));ns.set("call-with-values", M.primitives["call-with-values"]);ns.set("call/cc", M.primitives["call/cc"]);ns.set("call/ec", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call/ec"));ns.set("car", M.primitives["car"]);ns.set("cdaaar", M.primitives["cdaaar"]);ns.set("cdaadr", M.primitives["cdaadr"]);ns.set("cdaar", M.primitives["cdaar"]);ns.set("cdadar", M.primitives["cdadar"]);ns.set("cdaddr", M.primitives["cdaddr"]);ns.set("cdadr", M.primitives["cdadr"]);ns.set("cdar", M.primitives["cdar"]);ns.set("cddaar", M.primitives["cddaar"]);ns.set("cddadr", M.primitives["cddadr"]);ns.set("cddar", M.primitives["cddar"]);ns.set("cdddar", M.primitives["cdddar"]);ns.set("cddddr", M.primitives["cddddr"]);ns.set("cdddr", M.primitives["cdddr"]);ns.set("cddr", M.primitives["cddr"]);ns.set("cdr", M.primitives["cdr"]);ns.set("ceiling", M.primitives["ceiling"]);ns.set("char->integer", M.primitives["char->integer"]);ns.set("char-alphabetic?", M.primitives["char-alphabetic?"]);ns.set("char-ci<=?", M.primitives["char-ci<=?"]);ns.set("char-ci<?", M.primitives["char-ci<?"]);ns.set("char-ci=?", M.primitives["char-ci=?"]);ns.set("char-ci>=?", M.primitives["char-ci>=?"]);ns.set("char-ci>?", M.primitives["char-ci>?"]);ns.set("char-downcase", M.primitives["char-downcase"]);ns.set("char-lower-case?", M.primitives["char-lower-case?"]);ns.set("char-numeric?", M.primitives["char-numeric?"]);ns.set("char-upcase", M.primitives["char-upcase"]);ns.set("char-upper-case?", M.primitives["char-upper-case?"]);ns.set("char-whitespace?", M.primitives["char-whitespace?"]);ns.set("char<=?", M.primitives["char<=?"]);ns.set("char<?", M.primitives["char<?"]);ns.set("char=?", M.primitives["char=?"]);ns.set("char>=?", M.primitives["char>=?"]);ns.set("char>?", M.primitives["char>?"]);ns.set("char?", M.primitives["char?"]);ns.set("circle", M.modules["whalesong/image/private/main.rkt"].getExports().get("circle29.57"));ns.set("color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("color-alpha", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-alpha"));ns.set("color-blue", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-blue"));ns.set("color-green", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-green"));ns.set("color-list->bitmap", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->bitmap43.85"));ns.set("color-list->image", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->image42.83"));ns.set("color-red", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-red"));ns.set("color?", M.modules["whalesong/image/private/color.rkt"].getExports().get("color?"));ns.set("complex?", M.primitives["complex?"]);ns.set("compose", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose"));ns.set("compose1", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose1"));ns.set("conjugate", M.primitives["conjugate"]);ns.set("cons", M.primitives["cons"]);ns.set("cons?", M.modules["whalesong/lang/list.rkt"].getExports().get("cons?"));ns.set("continuation-mark-set->list", M.primitives["continuation-mark-set->list"]);ns.set("continuation-prompt-available?", M.primitives["continuation-prompt-available?"]);ns.set("continuation-prompt-tag?", M.primitives["continuation-prompt-tag?"]);ns.set("cos", M.primitives["cos"]);ns.set("cosh", M.primitives["cosh"]);ns.set("count", M.modules["whalesong/lang/list.rkt"].getExports().get("count"));ns.set("crop", M.modules["whalesong/image/private/main.rkt"].getExports().get("crop25.49"));ns.set("current-continuation-marks", M.primitives["current-continuation-marks"]);ns.set("current-inexact-milliseconds", M.primitives["current-inexact-milliseconds"]);ns.set("current-output-port", M.primitives["current-output-port"]);ns.set("current-print", M.primitives["current-print"]);ns.set("current-print-mode", M.primitives["current-print-mode"]);ns.set("current-seconds", M.primitives["current-seconds"]);ns.set("default-continuation-prompt-tag", M.primitives["default-continuation-prompt-tag"]);ns.set("denominator", M.primitives["denominator"]);ns.set("display", M.primitives["display"]);ns.set("displayln", M.primitives["displayln"]);ns.set("drop", M.modules["whalesong/lang/list.rkt"].getExports().get("drop"));ns.set("drop-right", M.modules["whalesong/lang/list.rkt"].getExports().get("drop-right"));ns.set("e", M.primitives["e"]);ns.set("eighth", M.modules["whalesong/lang/list.rkt"].getExports().get("eighth"));ns.set("ellipse", M.modules["whalesong/image/private/main.rkt"].getExports().get("ellipse33.65"));ns.set("empty", M.modules["whalesong/lang/list.rkt"].getExports().get("empty"));ns.set("empty-scene", M.modules["whalesong/image/private/main.rkt"].getExports().get("empty-scene16.31"));ns.set("empty?", M.modules["whalesong/lang/list.rkt"].getExports().get("empty?"));ns.set("eof", M.primitives["eof"]);ns.set("eof-object?", M.primitives["eof-object?"]);ns.set("eq?", M.primitives["eq?"]);ns.set("equal-hash-code", M.primitives["equal-hash-code"]);ns.set("equal?", M.primitives["equal?"]);ns.set("eqv?", M.primitives["eqv?"]);ns.set("error", M.primitives["error"]);ns.set("even?", M.primitives["even?"]);ns.set("exact->inexact", M.primitives["exact->inexact"]);ns.set("exact-integer?", M.primitives["exact-integer?"]);ns.set("exact-nonnegative-integer?", M.primitives["exact-nonnegative-integer?"]);ns.set("exact?", M.primitives["exact?"]);ns.set("exn-continuation-marks", M.primitives["exn-continuation-marks"]);ns.set("exn-message", M.primitives["exn-message"]);ns.set("exp", M.primitives["exp"]);ns.set("expt", M.primitives["expt"]);ns.set("false", M.modules["whalesong/lang/bool.rkt"].getExports().get("false"));ns.set("false?", M.modules["whalesong/lang/bool.rkt"].getExports().get("false?"));ns.set("fifth", M.modules["whalesong/lang/list.rkt"].getExports().get("fifth"));ns.set("filter", M.modules["whalesong/lang/private/list.rkt"].getExports().get("filter"));ns.set("filter-map", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-map"));ns.set("filter-not", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-not"));ns.set("findf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("findf"));ns.set("first", M.modules["whalesong/lang/list.rkt"].getExports().get("first"));ns.set("flatten", M.modules["whalesong/lang/list.rkt"].getExports().get("flatten"));ns.set("flip-horizontal", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-horizontal22.43"));ns.set("flip-vertical", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-vertical23.45"));ns.set("floor", M.primitives["floor"]);ns.set("foldl", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldl"));ns.set("foldr", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldr"));ns.set("for-each", M.modules["whalesong/lang/private/map.rkt"].getExports().get("for-each2"));ns.set("format", M.primitives["format"]);ns.set("fourth", M.modules["whalesong/lang/list.rkt"].getExports().get("fourth"));ns.set("fprintf", M.primitives["fprintf"]);ns.set("frame", M.modules["whalesong/image/private/main.rkt"].getExports().get("frame24.47"));ns.set("gcd", M.primitives["gcd"]);ns.set("gensym", M.primitives["gensym"]);ns.set("hash", M.primitives["hash"]);ns.set("hash-copy", M.primitives["hash-copy"]);ns.set("hash-count", M.primitives["hash-count"]);ns.set("hash-eq?", M.primitives["hash-eq?"]);ns.set("hash-equal?", M.primitives["hash-equal?"]);ns.set("hash-eqv?", M.primitives["hash-eqv?"]);ns.set("hash-for-each", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-for-each"));ns.set("hash-has-key?", M.primitives["hash-has-key?"]);ns.set("hash-keys", M.primitives["hash-keys"]);ns.set("hash-map", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-map"));ns.set("hash-ref", M.primitives["hash-ref"]);ns.set("hash-remove", M.primitives["hash-remove"]);ns.set("hash-remove!", M.primitives["hash-remove!"]);ns.set("hash-set", M.primitives["hash-set"]);ns.set("hash-set!", M.primitives["hash-set!"]);ns.set("hash-values", M.primitives["hash-values"]);ns.set("hash?", M.primitives["hash?"]);ns.set("hasheq", M.primitives["hasheq"]);ns.set("hasheqv", M.primitives["hasheqv"]);ns.set("imag-part", M.primitives["imag-part"]);ns.set("image->color-list", M.modules["whalesong/image/private/main.rkt"].getExports().get("image->color-list41.81"));ns.set("image-baseline", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-baseline46.91"));ns.set("image-color?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-color?47.93"));ns.set("image-height", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-height45.89"));ns.set("image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-url4.7"));ns.set("image-width", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-width44.87"));ns.set("image?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image?54.107"));ns.set("inexact->exact", M.primitives["inexact->exact"]);ns.set("inexact?", M.primitives["inexact?"]);ns.set("integer->char", M.primitives["integer->char"]);ns.set("integer-sqrt", M.primitives["integer-sqrt"]);ns.set("integer?", M.primitives["integer?"]);ns.set("isosceles-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("isosceles-triangle36.71"));ns.set("key=?", M.modules["whalesong/world/main.rkt"].getExports().get("key=?5.9"));ns.set("last", M.modules["whalesong/lang/list.rkt"].getExports().get("last"));ns.set("last-pair", M.modules["whalesong/lang/list.rkt"].getExports().get("last-pair"));ns.set("lcm", M.primitives["lcm"]);ns.set("length", M.primitives["length"]);ns.set("line", M.modules["whalesong/image/private/main.rkt"].getExports().get("line26.51"));ns.set("list", M.primitives["list"]);ns.set("list*", M.primitives["list*"]);ns.set("list->string", M.primitives["list->string"]);ns.set("list->vector", M.primitives["list->vector"]);ns.set("list-ref", M.primitives["list-ref"]);ns.set("list?", M.primitives["list?"]);ns.set("log", M.primitives["log"]);ns.set("magnitude", M.primitives["magnitude"]);ns.set("make-color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("make-continuation-prompt-tag", M.primitives["make-continuation-prompt-tag"]);ns.set("make-exn", M.primitives["make-exn"]);ns.set("make-exn:fail", M.primitives["make-exn:fail"]);ns.set("make-exn:fail:contract", M.primitives["make-exn:fail:contract"]);ns.set("make-exn:fail:contract:arity", M.primitives["make-exn:fail:contract:arity"]);ns.set("make-exn:fail:contract:divide-by-zero", M.primitives["make-exn:fail:contract:divide-by-zero"]);ns.set("make-exn:fail:contract:variable", M.primitives["make-exn:fail:contract:variable"]);ns.set("make-hash", M.primitives["make-hash"]);ns.set("make-hasheq", M.primitives["make-hasheq"]);ns.set("make-hasheqv", M.primitives["make-hasheqv"]);ns.set("make-immutable-hash", M.primitives["make-immutable-hash"]);ns.set("make-immutable-hasheq", M.primitives["make-immutable-hasheq"]);ns.set("make-immutable-hasheqv", M.primitives["make-immutable-hasheqv"]);ns.set("make-list", M.modules["whalesong/lang/list.rkt"].getExports().get("make-list"));ns.set("make-placeholder", M.primitives["make-placeholder"]);ns.set("make-polar", M.primitives["make-polar"]);ns.set("make-posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("make-posn"));ns.set("make-reader-graph", M.primitives["make-reader-graph"]);ns.set("make-rectangular", M.primitives["make-rectangular"]);ns.set("make-srcloc", M.primitives["make-srcloc"]);ns.set("make-string", M.primitives["make-string"]);ns.set("make-struct-field-accessor", M.primitives["make-struct-field-accessor"]);ns.set("make-struct-field-mutator", M.primitives["make-struct-field-mutator"]);ns.set("make-struct-type", M.primitives["make-struct-type"]);ns.set("make-vector", M.primitives["make-vector"]);ns.set("map", M.modules["whalesong/lang/private/map.rkt"].getExports().get("map2"));ns.set("max", M.primitives["max"]);ns.set("member", M.primitives["member"]);ns.set("memf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("memf"));ns.set("memq", M.primitives["memq"]);ns.set("memv", M.primitives["memv"]);ns.set("min", M.primitives["min"]);ns.set("mode?", M.modules["whalesong/image/private/main.rkt"].getExports().get("mode?48.95"));ns.set("modulo", M.primitives["modulo"]);ns.set("name->color", M.modules["whalesong/image/private/main.rkt"].getExports().get("name->color55.109"));ns.set("negative?", M.primitives["negative?"]);ns.set("newline", M.primitives["newline"]);ns.set("ninth", M.modules["whalesong/lang/list.rkt"].getExports().get("ninth"));ns.set("not", M.primitives["not"]);ns.set("null", M.primitives["null"]);ns.set("null?", M.primitives["null?"]);ns.set("number->string", M.primitives["number->string"]);ns.set("number?", M.primitives["number?"]);ns.set("numerator", M.primitives["numerator"]);ns.set("odd?", M.primitives["odd?"]);ns.set("on-key", M.modules["whalesong/world/main.rkt"].getExports().get("on-key3.5"));ns.set("on-mouse", M.modules["whalesong/world/main.rkt"].getExports().get("on-mouse4.7"));ns.set("on-tick", M.modules["whalesong/world/main.rkt"].getExports().get("on-tick2.3"));ns.set("open-image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("open-image-url5.9"));ns.set("ormap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("ormap2"));ns.set("overlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay6.11"));ns.set("overlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/align8.15"));ns.set("overlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/xy7.13"));ns.set("pair?", M.primitives["pair?"]);ns.set("partition", M.modules["whalesong/lang/list.rkt"].getExports().get("partition"));ns.set("pi", M.primitives["pi"]);ns.set("place-image", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image17.33"));ns.set("place-image/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image/align18.35"));ns.set("placeholder-set!", M.primitives["placeholder-set!"]);ns.set("positive?", M.primitives["positive?"]);ns.set("posn-x", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-x"));ns.set("posn-y", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-y"));ns.set("posn?", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn?"));ns.set("printf", M.primitives["printf"]);ns.set("procedure-arity", M.primitives["procedure-arity"]);ns.set("procedure-arity-includes?", M.primitives["procedure-arity-includes?"]);ns.set("procedure-rename", M.primitives["procedure-rename"]);ns.set("procedure?", M.primitives["procedure?"]);ns.set("prop:exn:srclocs", M.primitives["prop:exn:srclocs"]);ns.set("quotient", M.primitives["quotient"]);ns.set("radial-star", M.modules["whalesong/image/private/main.rkt"].getExports().get("radial-star38.75"));ns.set("raise", M.primitives["raise"]);ns.set("raise-mismatch-error", M.primitives["raise-mismatch-error"]);ns.set("raise-type-error", M.primitives["raise-type-error"]);ns.set("random", M.primitives["random"]);ns.set("rational?", M.primitives["rational?"]);ns.set("read-byte", M.primitives["read-byte"]);ns.set("real-part", M.primitives["real-part"]);ns.set("real?", M.primitives["real?"]);ns.set("rectangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("rectangle31.61"));ns.set("regular-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("regular-polygon32.63"));ns.set("remainder", M.primitives["remainder"]);ns.set("remove", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove"));ns.set("remove*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove*"));ns.set("remq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq"));ns.set("remq*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq*"));ns.set("remv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv"));ns.set("remv*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv*"));ns.set("rest", M.modules["whalesong/lang/list.rkt"].getExports().get("rest"));ns.set("reverse", M.primitives["reverse"]);ns.set("rhombus", M.modules["whalesong/image/private/main.rkt"].getExports().get("rhombus40.79"));ns.set("right-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("right-triangle35.69"));ns.set("rotate", M.modules["whalesong/image/private/main.rkt"].getExports().get("rotate19.37"));ns.set("round", M.primitives["round"]);ns.set("scale", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale20.39"));ns.set("scale/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale/xy21.41"));ns.set("scene+line", M.modules["whalesong/image/private/main.rkt"].getExports().get("scene+line28.55"));ns.set("second", M.modules["whalesong/lang/list.rkt"].getExports().get("second"));ns.set("set-box!", M.primitives["set-box!"]);ns.set("set-car!", M.primitives["set-car!"]);ns.set("set-cdr!", M.primitives["set-cdr!"]);ns.set("set-posn-x!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-x!"));ns.set("set-posn-y!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-y!"));ns.set("seventh", M.modules["whalesong/lang/list.rkt"].getExports().get("seventh"));ns.set("sgn", M.primitives["sgn"]);ns.set("side-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("side-count?52.103"));ns.set("sin", M.primitives["sin"]);ns.set("sinh", M.primitives["sinh"]);ns.set("sixth", M.modules["whalesong/lang/list.rkt"].getExports().get("sixth"));ns.set("split-at", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at"));ns.set("split-at-right", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at-right"));ns.set("sqr", M.primitives["sqr"]);ns.set("sqrt", M.primitives["sqrt"]);ns.set("square", M.modules["whalesong/image/private/main.rkt"].getExports().get("square30.59"));ns.set("srcloc-column", M.primitives["srcloc-column"]);ns.set("srcloc-line", M.primitives["srcloc-line"]);ns.set("srcloc-position", M.primitives["srcloc-position"]);ns.set("srcloc-source", M.primitives["srcloc-source"]);ns.set("srcloc-span", M.primitives["srcloc-span"]);ns.set("srcloc?", M.primitives["srcloc?"]);ns.set("star", M.modules["whalesong/image/private/main.rkt"].getExports().get("star37.73"));ns.set("star-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("star-polygon39.77"));ns.set("step-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("step-count?53.105"));ns.set("stop-when", M.modules["whalesong/world/main.rkt"].getExports().get("stop-when7.13"));ns.set("string", M.primitives["string"]);ns.set("string->list", M.primitives["string->list"]);ns.set("string->number", M.primitives["string->number"]);ns.set("string->symbol", M.primitives["string->symbol"]);ns.set("string-append", M.primitives["string-append"]);ns.set("string-ci<=?", M.primitives["string-ci<=?"]);ns.set("string-ci<?", M.primitives["string-ci<?"]);ns.set("string-ci=?", M.primitives["string-ci=?"]);ns.set("string-ci>=?", M.primitives["string-ci>=?"]);ns.set("string-ci>?", M.primitives["string-ci>?"]);ns.set("string-copy", M.primitives["string-copy"]);ns.set("string-length", M.primitives["string-length"]);ns.set("string-ref", M.primitives["string-ref"]);ns.set("string-set!", M.primitives["string-set!"]);ns.set("string<=?", M.primitives["string<=?"]);ns.set("string<?", M.primitives["string<?"]);ns.set("string=?", M.primitives["string=?"]);ns.set("string>=?", M.primitives["string>=?"]);ns.set("string>?", M.primitives["string>?"]);ns.set("string?", M.primitives["string?"]);ns.set("struct-type?", M.primitives["struct-type?"]);ns.set("struct:color", M.modules["whalesong/image/private/color.rkt"].getExports().get("struct:color"));ns.set("struct:exn:fail", M.primitives["struct:exn:fail"]);ns.set("struct:posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("struct:posn"));ns.set("struct?", M.primitives["struct?"]);ns.set("sub1", M.primitives["sub1"]);ns.set("substring", M.primitives["substring"]);ns.set("symbol->string", M.primitives["symbol->string"]);ns.set("symbol=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("symbol=?"));ns.set("symbol?", M.primitives["symbol?"]);ns.set("take", M.modules["whalesong/lang/list.rkt"].getExports().get("take"));ns.set("take-right", M.modules["whalesong/lang/list.rkt"].getExports().get("take-right"));ns.set("tan", M.primitives["tan"]);ns.set("tenth", M.modules["whalesong/lang/list.rkt"].getExports().get("tenth"));ns.set("text", M.modules["whalesong/image/private/main.rkt"].getExports().get("text1.1"));ns.set("text/font", M.modules["whalesong/image/private/main.rkt"].getExports().get("text/font2.3"));ns.set("third", M.modules["whalesong/lang/list.rkt"].getExports().get("third"));ns.set("to-draw", M.modules["whalesong/world/main.rkt"].getExports().get("to-draw6.11"));ns.set("triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("triangle34.67"));ns.set("true", M.modules["whalesong/lang/bool.rkt"].getExports().get("true"));ns.set("truncate", M.primitives["truncate"]);ns.set("unbox", M.primitives["unbox"]);ns.set("underlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay9.17"));ns.set("underlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/align11.21"));ns.set("underlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/xy10.19"));ns.set("values", M.primitives["values"]);ns.set("vector", M.primitives["vector"]);ns.set("vector->list", M.primitives["vector->list"]);ns.set("vector-length", M.primitives["vector-length"]);ns.set("vector-ref", M.primitives["vector-ref"]);ns.set("vector-set!", M.primitives["vector-set!"]);ns.set("vector?", M.primitives["vector?"]);ns.set("void", M.primitives["void"]);ns.set("void?", M.primitives["void?"]);ns.set("write", M.primitives["write"]);ns.set("write-byte", M.primitives["write-byte"]);ns.set("x-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("x-place?49.97"));ns.set("y-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("y-place?50.99"));ns.set("zero?", M.primitives["zero?"]);}(M.modules["whalesong/wescheme/lang/semantics.rkt"],M.modules["whalesong/wescheme/lang/semantics.rkt"].getExports(),M.modules["whalesong/wescheme/lang/semantics.rkt"].getExternalExports(),M.modules["whalesong/wescheme/lang/semantics.rkt"].prefix));
return(M.p)(M);};

var _408=function(M){if(--M.cbt<0){throw _408;}
M.e.length-=(M.a-1);
return(_409)(M);};

var _416=function(M){if(--M.cbt<0){throw _416;}
if(M.a===0){return(_413)(M);}else{M.e.push(M.v);
return(_413)(M);}};

var _398=function(M){if(M.modules["whalesong/lang/whalesong.rkt"].isInvoked!==false){return(_400)(M);}else{M.c.push(new RT.CallFrame(_400,M.p));
return(M.modules["whalesong/lang/whalesong.rkt"].label)(M);}};

var _393=function(M){M.c.push(new RT.CallFrame(_395,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/wescheme/lang/semantics.rkt"]=function(){return new RT.ModuleRecord("semantics",_397);}
return(_396)(M);};

var _404=function(M){if(M.modules["whalesong/world.rkt"].isInvoked!==false){return(_406)(M);}else{M.c.push(new RT.CallFrame(_406,M.p));
return(M.modules["whalesong/world.rkt"].label)(M);}};

var _401=function(M){if(M.modules["whalesong/image.rkt"].isInvoked!==false){return(_403)(M);}else{M.c.push(new RT.CallFrame(_403,M.p));
return(M.modules["whalesong/image.rkt"].label)(M);}};

var _396=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _413=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _407=function(M){if(M.modules["whalesong/lang/whalesong.rkt"].isInvoked!==false){return(_409)(M);}else{M.c.push(new RT.CallFrame(_409,M.p));
return(M.modules["whalesong/lang/whalesong.rkt"].label)(M);}};

_400.mvr=_399;
_403.mvr=_402;
_406.mvr=_405;
_409.mvr=_408;
_415.mvr=_416;
_411.mvr=_410;
_395.mvr=_394;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_419(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/wescheme/lang/semantics.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/wescheme/lang/semantics.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/world.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _422=function(M){if(--M.cbt<0){throw _422;}
};

var _427=function(M){if(--M.cbt<0){throw _427;}
if((M.installedModules["whalesong/world/main.rkt"]!==void(0)&&M.modules["whalesong/world/main.rkt"]!==undefined)!==false){return(_428)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/world/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_428);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_428)(M);}};

var _424=function(M){M.modules["whalesong/world.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_425)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_425);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_425)(M);}};

var _431=function(M){return(_420)(M);};

var _426=function(M){if(--M.cbt<0){throw _426;}
M.e.length-=(M.a-1);
return(_427)(M);};

var _421=function(M){if(--M.cbt<0){throw _421;}
M.e.length-=(M.a-1);
return(_422)(M);};

var _429=function(M){if(--M.cbt<0){throw _429;}
M.e.length-=(M.a-1);
return(_430)(M);};

var _430=function(M){if(--M.cbt<0){throw _430;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/world.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("big-bang", M.modules["whalesong/world/main.rkt"].getExports().get("big-bang1.1"));ns.set("key=?", M.modules["whalesong/world/main.rkt"].getExports().get("key=?5.9"));ns.set("on-key", M.modules["whalesong/world/main.rkt"].getExports().get("on-key3.5"));ns.set("on-mouse", M.modules["whalesong/world/main.rkt"].getExports().get("on-mouse4.7"));ns.set("on-tick", M.modules["whalesong/world/main.rkt"].getExports().get("on-tick2.3"));ns.set("stop-when", M.modules["whalesong/world/main.rkt"].getExports().get("stop-when7.13"));ns.set("to-draw", M.modules["whalesong/world/main.rkt"].getExports().get("to-draw6.11"));}(M.modules["whalesong/world.rkt"],M.modules["whalesong/world.rkt"].getExports(),M.modules["whalesong/world.rkt"].getExternalExports(),M.modules["whalesong/world.rkt"].prefix));
return(M.p)(M);};

var _425=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_427)(M);}else{M.c.push(new RT.CallFrame(_427,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _420=function(M){M.c.push(new RT.CallFrame(_422,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/world.rkt"]=function(){return new RT.ModuleRecord("world",_424);}
return(_423)(M);};

var _428=function(M){if(M.modules["whalesong/world/main.rkt"].isInvoked!==false){return(_430)(M);}else{M.c.push(new RT.CallFrame(_430,M.p));
return(M.modules["whalesong/world/main.rkt"].label)(M);}};

var _423=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

_427.mvr=_426;
_430.mvr=_429;
_422.mvr=_421;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_431(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/world.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/world.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/base.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _465=function(M){return(_439)(M);};

var _441=function(M){if(--M.cbt<0){throw _441;}
};

var _457=function(M){if(--M.cbt<0){throw _457;}
M.e.length-=(M.a-1);
return(_458)(M);};

var _454=function(M){if(--M.cbt<0){throw _454;}
M.e.length-=(M.a-1);
return(_455)(M);};

var _451=function(M){if(--M.cbt<0){throw _451;}
M.e.length-=(M.a-1);
return(_452)(M);};

var _445=function(M){if(--M.cbt<0){throw _445;}
M.e.length-=(M.a-1);
return(_446)(M);};

var _443=function(M){M.modules["whalesong/lang/base.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/private/list.rkt"]!==void(0)&&M.modules["whalesong/lang/private/list.rkt"]!==undefined)!==false){return(_444)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/list.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_444);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_444)(M);}};

var _440=function(M){if(--M.cbt<0){throw _440;}
M.e.length-=(M.a-1);
return(_441)(M);};

var _459=function(M){if(M.modules["whalesong/lang/private/qq-and-or.rkt"].isInvoked!==false){return(_461)(M);}else{M.c.push(new RT.CallFrame(_461,M.p));
return(M.modules["whalesong/lang/private/qq-and-or.rkt"].label)(M);}};

var _456=function(M){if(M.modules["whalesong/lang/list.rkt"].isInvoked!==false){return(_458)(M);}else{M.c.push(new RT.CallFrame(_458,M.p));
return(M.modules["whalesong/lang/list.rkt"].label)(M);}};

var _453=function(M){if(M.modules["whalesong/lang/private/call-ec.rkt"].isInvoked!==false){return(_455)(M);}else{M.c.push(new RT.CallFrame(_455,M.p));
return(M.modules["whalesong/lang/private/call-ec.rkt"].label)(M);}};

var _447=function(M){if(M.modules["whalesong/lang/private/map.rkt"].isInvoked!==false){return(_449)(M);}else{M.c.push(new RT.CallFrame(_449,M.p));
return(M.modules["whalesong/lang/private/map.rkt"].label)(M);}};

var _458=function(M){if(--M.cbt<0){throw _458;}
if((M.installedModules["whalesong/lang/private/qq-and-or.rkt"]!==void(0)&&M.modules["whalesong/lang/private/qq-and-or.rkt"]!==undefined)!==false){return(_459)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/qq-and-or.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_459);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_459)(M);}};

var _450=function(M){if(M.modules["whalesong/lang/private/hash.rkt"].isInvoked!==false){return(_452)(M);}else{M.c.push(new RT.CallFrame(_452,M.p));
return(M.modules["whalesong/lang/private/hash.rkt"].label)(M);}};

var _461=function(M){if(--M.cbt<0){throw _461;}
if((M.installedModules["collects/racket/private/modbeg.rkt"]!==void(0)&&M.modules["collects/racket/private/modbeg.rkt"]!==undefined)!==false){return(_462)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "collects/racket/private/modbeg.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_462);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_462)(M);}};

var _446=function(M){if(--M.cbt<0){throw _446;}
if((M.installedModules["whalesong/lang/private/map.rkt"]!==void(0)&&M.modules["whalesong/lang/private/map.rkt"]!==undefined)!==false){return(_447)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/map.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_447);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_447)(M);}};

var _464=function(M){if(--M.cbt<0){throw _464;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/lang/base.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("*", M.primitives["*"]);ns.set("+", M.primitives["+"]);ns.set("-", M.primitives["-"]);ns.set("/", M.primitives["/"]);ns.set("<", M.primitives["<"]);ns.set("<=", M.primitives["<="]);ns.set("=", M.primitives["="]);ns.set(">", M.primitives[">"]);ns.set(">=", M.primitives[">="]);ns.set("abort-current-continuation", M.primitives["abort-current-continuation"]);ns.set("abs", M.primitives["abs"]);ns.set("acos", M.primitives["acos"]);ns.set("add-between", M.modules["whalesong/lang/list.rkt"].getExports().get("add-between"));ns.set("add1", M.primitives["add1"]);ns.set("andmap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("andmap2"));ns.set("angle", M.primitives["angle"]);ns.set("append", M.primitives["append"]);ns.set("append*", M.modules["whalesong/lang/list.rkt"].getExports().get("append*"));ns.set("append-map", M.modules["whalesong/lang/list.rkt"].getExports().get("append-map"));ns.set("apply", M.primitives["apply"]);ns.set("argmax", M.modules["whalesong/lang/list.rkt"].getExports().get("argmax"));ns.set("argmin", M.modules["whalesong/lang/list.rkt"].getExports().get("argmin"));ns.set("asin", M.primitives["asin"]);ns.set("assf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assf"));ns.set("assoc", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assoc"));ns.set("assq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assq"));ns.set("assv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assv"));ns.set("atan", M.primitives["atan"]);ns.set("boolean?", M.primitives["boolean?"]);ns.set("box", M.primitives["box"]);ns.set("box?", M.primitives["box?"]);ns.set("build-list", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-list"));ns.set("build-string", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-string"));ns.set("build-vector", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-vector"));ns.set("byte?", M.primitives["byte?"]);ns.set("caaaar", M.primitives["caaaar"]);ns.set("caaadr", M.primitives["caaadr"]);ns.set("caaar", M.primitives["caaar"]);ns.set("caadar", M.primitives["caadar"]);ns.set("caaddr", M.primitives["caaddr"]);ns.set("caadr", M.primitives["caadr"]);ns.set("caar", M.primitives["caar"]);ns.set("cadaar", M.primitives["cadaar"]);ns.set("cadadr", M.primitives["cadadr"]);ns.set("cadar", M.primitives["cadar"]);ns.set("caddar", M.primitives["caddar"]);ns.set("cadddr", M.primitives["cadddr"]);ns.set("caddr", M.primitives["caddr"]);ns.set("cadr", M.primitives["cadr"]);ns.set("call-with-continuation-prompt", M.primitives["call-with-continuation-prompt"]);ns.set("call-with-current-continuation", M.primitives["call-with-current-continuation"]);ns.set("call-with-escape-continuation", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call-with-escape-continuation"));ns.set("call-with-values", M.primitives["call-with-values"]);ns.set("call/cc", M.primitives["call/cc"]);ns.set("call/ec", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call/ec"));ns.set("car", M.primitives["car"]);ns.set("cdaaar", M.primitives["cdaaar"]);ns.set("cdaadr", M.primitives["cdaadr"]);ns.set("cdaar", M.primitives["cdaar"]);ns.set("cdadar", M.primitives["cdadar"]);ns.set("cdaddr", M.primitives["cdaddr"]);ns.set("cdadr", M.primitives["cdadr"]);ns.set("cdar", M.primitives["cdar"]);ns.set("cddaar", M.primitives["cddaar"]);ns.set("cddadr", M.primitives["cddadr"]);ns.set("cddar", M.primitives["cddar"]);ns.set("cdddar", M.primitives["cdddar"]);ns.set("cddddr", M.primitives["cddddr"]);ns.set("cdddr", M.primitives["cdddr"]);ns.set("cddr", M.primitives["cddr"]);ns.set("cdr", M.primitives["cdr"]);ns.set("ceiling", M.primitives["ceiling"]);ns.set("char->integer", M.primitives["char->integer"]);ns.set("char-alphabetic?", M.primitives["char-alphabetic?"]);ns.set("char-ci<=?", M.primitives["char-ci<=?"]);ns.set("char-ci<?", M.primitives["char-ci<?"]);ns.set("char-ci=?", M.primitives["char-ci=?"]);ns.set("char-ci>=?", M.primitives["char-ci>=?"]);ns.set("char-ci>?", M.primitives["char-ci>?"]);ns.set("char-downcase", M.primitives["char-downcase"]);ns.set("char-lower-case?", M.primitives["char-lower-case?"]);ns.set("char-numeric?", M.primitives["char-numeric?"]);ns.set("char-upcase", M.primitives["char-upcase"]);ns.set("char-upper-case?", M.primitives["char-upper-case?"]);ns.set("char-whitespace?", M.primitives["char-whitespace?"]);ns.set("char<=?", M.primitives["char<=?"]);ns.set("char<?", M.primitives["char<?"]);ns.set("char=?", M.primitives["char=?"]);ns.set("char>=?", M.primitives["char>=?"]);ns.set("char>?", M.primitives["char>?"]);ns.set("char?", M.primitives["char?"]);ns.set("complex?", M.primitives["complex?"]);ns.set("compose", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose"));ns.set("compose1", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose1"));ns.set("conjugate", M.primitives["conjugate"]);ns.set("cons", M.primitives["cons"]);ns.set("cons?", M.modules["whalesong/lang/list.rkt"].getExports().get("cons?"));ns.set("continuation-mark-set->list", M.primitives["continuation-mark-set->list"]);ns.set("continuation-prompt-available?", M.primitives["continuation-prompt-available?"]);ns.set("continuation-prompt-tag?", M.primitives["continuation-prompt-tag?"]);ns.set("cos", M.primitives["cos"]);ns.set("cosh", M.primitives["cosh"]);ns.set("count", M.modules["whalesong/lang/list.rkt"].getExports().get("count"));ns.set("current-continuation-marks", M.primitives["current-continuation-marks"]);ns.set("current-inexact-milliseconds", M.primitives["current-inexact-milliseconds"]);ns.set("current-output-port", M.primitives["current-output-port"]);ns.set("current-print", M.primitives["current-print"]);ns.set("current-print-mode", M.primitives["current-print-mode"]);ns.set("current-seconds", M.primitives["current-seconds"]);ns.set("default-continuation-prompt-tag", M.primitives["default-continuation-prompt-tag"]);ns.set("denominator", M.primitives["denominator"]);ns.set("display", M.primitives["display"]);ns.set("displayln", M.primitives["displayln"]);ns.set("drop", M.modules["whalesong/lang/list.rkt"].getExports().get("drop"));ns.set("drop-right", M.modules["whalesong/lang/list.rkt"].getExports().get("drop-right"));ns.set("e", M.primitives["e"]);ns.set("eighth", M.modules["whalesong/lang/list.rkt"].getExports().get("eighth"));ns.set("empty", M.modules["whalesong/lang/list.rkt"].getExports().get("empty"));ns.set("empty?", M.modules["whalesong/lang/list.rkt"].getExports().get("empty?"));ns.set("eof", M.primitives["eof"]);ns.set("eof-object?", M.primitives["eof-object?"]);ns.set("eq?", M.primitives["eq?"]);ns.set("equal-hash-code", M.primitives["equal-hash-code"]);ns.set("equal?", M.primitives["equal?"]);ns.set("eqv?", M.primitives["eqv?"]);ns.set("error", M.primitives["error"]);ns.set("even?", M.primitives["even?"]);ns.set("exact->inexact", M.primitives["exact->inexact"]);ns.set("exact-integer?", M.primitives["exact-integer?"]);ns.set("exact-nonnegative-integer?", M.primitives["exact-nonnegative-integer?"]);ns.set("exact?", M.primitives["exact?"]);ns.set("exn-continuation-marks", M.primitives["exn-continuation-marks"]);ns.set("exn-message", M.primitives["exn-message"]);ns.set("exp", M.primitives["exp"]);ns.set("expt", M.primitives["expt"]);ns.set("fifth", M.modules["whalesong/lang/list.rkt"].getExports().get("fifth"));ns.set("filter", M.modules["whalesong/lang/private/list.rkt"].getExports().get("filter"));ns.set("filter-map", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-map"));ns.set("filter-not", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-not"));ns.set("findf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("findf"));ns.set("first", M.modules["whalesong/lang/list.rkt"].getExports().get("first"));ns.set("flatten", M.modules["whalesong/lang/list.rkt"].getExports().get("flatten"));ns.set("floor", M.primitives["floor"]);ns.set("foldl", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldl"));ns.set("foldr", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldr"));ns.set("for-each", M.modules["whalesong/lang/private/map.rkt"].getExports().get("for-each2"));ns.set("format", M.primitives["format"]);ns.set("fourth", M.modules["whalesong/lang/list.rkt"].getExports().get("fourth"));ns.set("fprintf", M.primitives["fprintf"]);ns.set("gcd", M.primitives["gcd"]);ns.set("gensym", M.primitives["gensym"]);ns.set("hash", M.primitives["hash"]);ns.set("hash-copy", M.primitives["hash-copy"]);ns.set("hash-count", M.primitives["hash-count"]);ns.set("hash-eq?", M.primitives["hash-eq?"]);ns.set("hash-equal?", M.primitives["hash-equal?"]);ns.set("hash-eqv?", M.primitives["hash-eqv?"]);ns.set("hash-for-each", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-for-each"));ns.set("hash-has-key?", M.primitives["hash-has-key?"]);ns.set("hash-keys", M.primitives["hash-keys"]);ns.set("hash-map", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-map"));ns.set("hash-ref", M.primitives["hash-ref"]);ns.set("hash-remove", M.primitives["hash-remove"]);ns.set("hash-remove!", M.primitives["hash-remove!"]);ns.set("hash-set", M.primitives["hash-set"]);ns.set("hash-set!", M.primitives["hash-set!"]);ns.set("hash-values", M.primitives["hash-values"]);ns.set("hash?", M.primitives["hash?"]);ns.set("hasheq", M.primitives["hasheq"]);ns.set("hasheqv", M.primitives["hasheqv"]);ns.set("imag-part", M.primitives["imag-part"]);ns.set("inexact->exact", M.primitives["inexact->exact"]);ns.set("inexact?", M.primitives["inexact?"]);ns.set("integer->char", M.primitives["integer->char"]);ns.set("integer-sqrt", M.primitives["integer-sqrt"]);ns.set("integer?", M.primitives["integer?"]);ns.set("last", M.modules["whalesong/lang/list.rkt"].getExports().get("last"));ns.set("last-pair", M.modules["whalesong/lang/list.rkt"].getExports().get("last-pair"));ns.set("lcm", M.primitives["lcm"]);ns.set("length", M.primitives["length"]);ns.set("list", M.primitives["list"]);ns.set("list*", M.primitives["list*"]);ns.set("list->string", M.primitives["list->string"]);ns.set("list->vector", M.primitives["list->vector"]);ns.set("list-ref", M.primitives["list-ref"]);ns.set("list?", M.primitives["list?"]);ns.set("log", M.primitives["log"]);ns.set("magnitude", M.primitives["magnitude"]);ns.set("make-continuation-prompt-tag", M.primitives["make-continuation-prompt-tag"]);ns.set("make-exn", M.primitives["make-exn"]);ns.set("make-exn:fail", M.primitives["make-exn:fail"]);ns.set("make-exn:fail:contract", M.primitives["make-exn:fail:contract"]);ns.set("make-exn:fail:contract:arity", M.primitives["make-exn:fail:contract:arity"]);ns.set("make-exn:fail:contract:divide-by-zero", M.primitives["make-exn:fail:contract:divide-by-zero"]);ns.set("make-exn:fail:contract:variable", M.primitives["make-exn:fail:contract:variable"]);ns.set("make-hash", M.primitives["make-hash"]);ns.set("make-hasheq", M.primitives["make-hasheq"]);ns.set("make-hasheqv", M.primitives["make-hasheqv"]);ns.set("make-immutable-hash", M.primitives["make-immutable-hash"]);ns.set("make-immutable-hasheq", M.primitives["make-immutable-hasheq"]);ns.set("make-immutable-hasheqv", M.primitives["make-immutable-hasheqv"]);ns.set("make-list", M.modules["whalesong/lang/list.rkt"].getExports().get("make-list"));ns.set("make-placeholder", M.primitives["make-placeholder"]);ns.set("make-polar", M.primitives["make-polar"]);ns.set("make-reader-graph", M.primitives["make-reader-graph"]);ns.set("make-rectangular", M.primitives["make-rectangular"]);ns.set("make-srcloc", M.primitives["make-srcloc"]);ns.set("make-string", M.primitives["make-string"]);ns.set("make-struct-field-accessor", M.primitives["make-struct-field-accessor"]);ns.set("make-struct-field-mutator", M.primitives["make-struct-field-mutator"]);ns.set("make-struct-type", M.primitives["make-struct-type"]);ns.set("make-vector", M.primitives["make-vector"]);ns.set("map", M.modules["whalesong/lang/private/map.rkt"].getExports().get("map2"));ns.set("max", M.primitives["max"]);ns.set("member", M.primitives["member"]);ns.set("memf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("memf"));ns.set("memq", M.primitives["memq"]);ns.set("memv", M.primitives["memv"]);ns.set("min", M.primitives["min"]);ns.set("modulo", M.primitives["modulo"]);ns.set("negative?", M.primitives["negative?"]);ns.set("newline", M.primitives["newline"]);ns.set("ninth", M.modules["whalesong/lang/list.rkt"].getExports().get("ninth"));ns.set("not", M.primitives["not"]);ns.set("null", M.primitives["null"]);ns.set("null?", M.primitives["null?"]);ns.set("number->string", M.primitives["number->string"]);ns.set("number?", M.primitives["number?"]);ns.set("numerator", M.primitives["numerator"]);ns.set("odd?", M.primitives["odd?"]);ns.set("ormap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("ormap2"));ns.set("pair?", M.primitives["pair?"]);ns.set("partition", M.modules["whalesong/lang/list.rkt"].getExports().get("partition"));ns.set("pi", M.primitives["pi"]);ns.set("placeholder-set!", M.primitives["placeholder-set!"]);ns.set("positive?", M.primitives["positive?"]);ns.set("printf", M.primitives["printf"]);ns.set("procedure-arity", M.primitives["procedure-arity"]);ns.set("procedure-arity-includes?", M.primitives["procedure-arity-includes?"]);ns.set("procedure-rename", M.primitives["procedure-rename"]);ns.set("procedure?", M.primitives["procedure?"]);ns.set("prop:exn:srclocs", M.primitives["prop:exn:srclocs"]);ns.set("quotient", M.primitives["quotient"]);ns.set("raise", M.primitives["raise"]);ns.set("raise-mismatch-error", M.primitives["raise-mismatch-error"]);ns.set("raise-type-error", M.primitives["raise-type-error"]);ns.set("random", M.primitives["random"]);ns.set("rational?", M.primitives["rational?"]);ns.set("read-byte", M.primitives["read-byte"]);ns.set("real-part", M.primitives["real-part"]);ns.set("real?", M.primitives["real?"]);ns.set("remainder", M.primitives["remainder"]);ns.set("remove", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove"));ns.set("remove*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove*"));ns.set("remq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq"));ns.set("remq*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq*"));ns.set("remv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv"));ns.set("remv*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv*"));ns.set("rest", M.modules["whalesong/lang/list.rkt"].getExports().get("rest"));ns.set("reverse", M.primitives["reverse"]);ns.set("round", M.primitives["round"]);ns.set("second", M.modules["whalesong/lang/list.rkt"].getExports().get("second"));ns.set("set-box!", M.primitives["set-box!"]);ns.set("set-car!", M.primitives["set-car!"]);ns.set("set-cdr!", M.primitives["set-cdr!"]);ns.set("seventh", M.modules["whalesong/lang/list.rkt"].getExports().get("seventh"));ns.set("sgn", M.primitives["sgn"]);ns.set("sin", M.primitives["sin"]);ns.set("sinh", M.primitives["sinh"]);ns.set("sixth", M.modules["whalesong/lang/list.rkt"].getExports().get("sixth"));ns.set("split-at", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at"));ns.set("split-at-right", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at-right"));ns.set("sqr", M.primitives["sqr"]);ns.set("sqrt", M.primitives["sqrt"]);ns.set("srcloc-column", M.primitives["srcloc-column"]);ns.set("srcloc-line", M.primitives["srcloc-line"]);ns.set("srcloc-position", M.primitives["srcloc-position"]);ns.set("srcloc-source", M.primitives["srcloc-source"]);ns.set("srcloc-span", M.primitives["srcloc-span"]);ns.set("srcloc?", M.primitives["srcloc?"]);ns.set("string", M.primitives["string"]);ns.set("string->list", M.primitives["string->list"]);ns.set("string->number", M.primitives["string->number"]);ns.set("string->symbol", M.primitives["string->symbol"]);ns.set("string-append", M.primitives["string-append"]);ns.set("string-ci<=?", M.primitives["string-ci<=?"]);ns.set("string-ci<?", M.primitives["string-ci<?"]);ns.set("string-ci=?", M.primitives["string-ci=?"]);ns.set("string-ci>=?", M.primitives["string-ci>=?"]);ns.set("string-ci>?", M.primitives["string-ci>?"]);ns.set("string-copy", M.primitives["string-copy"]);ns.set("string-length", M.primitives["string-length"]);ns.set("string-ref", M.primitives["string-ref"]);ns.set("string-set!", M.primitives["string-set!"]);ns.set("string<=?", M.primitives["string<=?"]);ns.set("string<?", M.primitives["string<?"]);ns.set("string=?", M.primitives["string=?"]);ns.set("string>=?", M.primitives["string>=?"]);ns.set("string>?", M.primitives["string>?"]);ns.set("string?", M.primitives["string?"]);ns.set("struct-type?", M.primitives["struct-type?"]);ns.set("struct:exn:fail", M.primitives["struct:exn:fail"]);ns.set("struct?", M.primitives["struct?"]);ns.set("sub1", M.primitives["sub1"]);ns.set("substring", M.primitives["substring"]);ns.set("symbol->string", M.primitives["symbol->string"]);ns.set("symbol?", M.primitives["symbol?"]);ns.set("take", M.modules["whalesong/lang/list.rkt"].getExports().get("take"));ns.set("take-right", M.modules["whalesong/lang/list.rkt"].getExports().get("take-right"));ns.set("tan", M.primitives["tan"]);ns.set("tenth", M.modules["whalesong/lang/list.rkt"].getExports().get("tenth"));ns.set("third", M.modules["whalesong/lang/list.rkt"].getExports().get("third"));ns.set("truncate", M.primitives["truncate"]);ns.set("unbox", M.primitives["unbox"]);ns.set("values", M.primitives["values"]);ns.set("vector", M.primitives["vector"]);ns.set("vector->list", M.primitives["vector->list"]);ns.set("vector-length", M.primitives["vector-length"]);ns.set("vector-ref", M.primitives["vector-ref"]);ns.set("vector-set!", M.primitives["vector-set!"]);ns.set("vector?", M.primitives["vector?"]);ns.set("void", M.primitives["void"]);ns.set("void?", M.primitives["void?"]);ns.set("write", M.primitives["write"]);ns.set("write-byte", M.primitives["write-byte"]);ns.set("zero?", M.primitives["zero?"]);}(M.modules["whalesong/lang/base.rkt"],M.modules["whalesong/lang/base.rkt"].getExports(),M.modules["whalesong/lang/base.rkt"].getExternalExports(),M.modules["whalesong/lang/base.rkt"].prefix));
return(M.p)(M);};

var _460=function(M){if(--M.cbt<0){throw _460;}
M.e.length-=(M.a-1);
return(_461)(M);};

var _455=function(M){if(--M.cbt<0){throw _455;}
if((M.installedModules["whalesong/lang/list.rkt"]!==void(0)&&M.modules["whalesong/lang/list.rkt"]!==undefined)!==false){return(_456)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/list.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_456);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_456)(M);}};

var _463=function(M){if(--M.cbt<0){throw _463;}
M.e.length-=(M.a-1);
return(_464)(M);};

var _448=function(M){if(--M.cbt<0){throw _448;}
M.e.length-=(M.a-1);
return(_449)(M);};

var _442=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _452=function(M){if(--M.cbt<0){throw _452;}
if((M.installedModules["whalesong/lang/private/call-ec.rkt"]!==void(0)&&M.modules["whalesong/lang/private/call-ec.rkt"]!==undefined)!==false){return(_453)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/call-ec.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_453);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_453)(M);}};

var _449=function(M){if(--M.cbt<0){throw _449;}
if((M.installedModules["whalesong/lang/private/hash.rkt"]!==void(0)&&M.modules["whalesong/lang/private/hash.rkt"]!==undefined)!==false){return(_450)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/hash.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_450);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_450)(M);}};

var _444=function(M){if(M.modules["whalesong/lang/private/list.rkt"].isInvoked!==false){return(_446)(M);}else{M.c.push(new RT.CallFrame(_446,M.p));
return(M.modules["whalesong/lang/private/list.rkt"].label)(M);}};

var _462=function(M){if(M.modules["collects/racket/private/modbeg.rkt"].isInvoked!==false){return(_464)(M);}else{M.c.push(new RT.CallFrame(_464,M.p));
return(M.modules["collects/racket/private/modbeg.rkt"].label)(M);}};

var _439=function(M){M.c.push(new RT.CallFrame(_441,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/base.rkt"]=function(){return new RT.ModuleRecord("base",_443);}
return(_442)(M);};

_446.mvr=_445;
_449.mvr=_448;
_452.mvr=_451;
_455.mvr=_454;
_458.mvr=_457;
_461.mvr=_460;
_464.mvr=_463;
_441.mvr=_440;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_465(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/base.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/base.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/qq-and-or.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _477=function(M){if(--M.cbt<0){throw _477;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["whalesong/lang/private/qq-and-or.rkt"],M.modules["whalesong/lang/private/qq-and-or.rkt"].getExports(),M.modules["whalesong/lang/private/qq-and-or.rkt"].getExternalExports(),M.modules["whalesong/lang/private/qq-and-or.rkt"].prefix));
return(M.p)(M);};

var _466=function(M){if(--M.cbt<0){throw _466;}

//"lambda body for #(struct:LamPositionalName qq-append whalesong/lang/private/qq-and-or.rkt 149 4 10310 107)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_470)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["append"];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _474=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _470=function(M){M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4091;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=M.e[M.e.length-4];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _478=function(M){return(_467)(M);};

var _476=function(M){if(--M.cbt<0){throw _476;}
M.e.length-=(M.a-1);
return(_477)(M);};

var _468=function(M){if(--M.cbt<0){throw _468;}
M.e.length-=(M.a-1);
return(_469)(M);};

var _467=function(M){M.c.push(new RT.CallFrame(_469,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/qq-and-or.rkt"]=function(){return new RT.ModuleRecord("qq-and-or",_475);}
return(_474)(M);};

var _469=function(M){if(--M.cbt<0){throw _469;}
};

var _475=function(M){M.modules["whalesong/lang/private/qq-and-or.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("qq-append")||M.primitives["qq-append"]]);M.e[M.e.length-1].names=["qq-append"];
M.modules["whalesong/lang/private/qq-and-or.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_477,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=_466_c;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

_477.mvr=_476;
_469.mvr=_468;
var sym4091=RT.makeSymbol("unquote-splicing");var _466_c=new RT.Closure(_466,2,void(0),"qq-append");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_478(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/qq-and-or.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/qq-and-or.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/local/racket/collects/racket/private/modbeg.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _482=function(M){if(--M.cbt<0){throw _482;}
};

var _484=function(M){if(--M.cbt<0){throw _484;}
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["values"];
M.e[M.e.length-2]=M.e[M.e.length-3];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,1);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _483=function(M){if(--M.cbt<0){throw _483;}
M.e.length-=(M.a-1);
return(_484)(M);};

var _491=function(M){return(_480)(M);};

var _488=function(M){M.modules["collects/racket/private/modbeg.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("print-values")||M.primitives["print-values"]]);M.e[M.e.length-1].names=["print-values"];
M.modules["collects/racket/private/modbeg.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_490,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=_479_c;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _481=function(M){if(--M.cbt<0){throw _481;}
M.e.length-=(M.a-1);
return(_482)(M);};

var _490=function(M){if(--M.cbt<0){throw _490;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["collects/racket/private/modbeg.rkt"],M.modules["collects/racket/private/modbeg.rkt"].getExports(),M.modules["collects/racket/private/modbeg.rkt"].getExternalExports(),M.modules["collects/racket/private/modbeg.rkt"].prefix));
return(M.p)(M);};

var _489=function(M){if(--M.cbt<0){throw _489;}
M.e.length-=(M.a-1);
return(_490)(M);};

var _479=function(M){if(--M.cbt<0){throw _479;}

//"lambda body for #(struct:LamPositionalName print-values collects/racket/private/modbeg.rkt 10 4 214 72)"

M.unspliceRestFromStack(0,M.a);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["for-each"];
M.a=0;
M.v=M.primitives["current-print"]._i(M);
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_484,M.p));
return((M.p).label)(M);};

var _487=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _480=function(M){M.c.push(new RT.CallFrame(_482,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["collects/racket/private/modbeg.rkt"]=function(){return new RT.ModuleRecord("modbeg",_488);}
return(_487)(M);};

_484.mvr=_483;
_490.mvr=_489;
_482.mvr=_481;
var _479_c=new RT.Closure(_479,(RT.makeArityAtLeast(0)),void(0),"print-values");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_491(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/local/racket/collects/racket/private/modbeg.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/local/racket/collects/racket/private/modbeg.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/call-ec.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _501=function(M){M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _522=function(M){return(_496)(M);};

var _498=function(M){if(--M.cbt<0){throw _498;}
};

var _497=function(M){if(--M.cbt<0){throw _497;}
M.e.length-=(M.a-1);
return(_498)(M);};

var _495=function(M){if(--M.cbt<0){throw _495;}

//"lambda body for #(struct:LamPositionalName ...vate/call-ec.rkt:19:43 whalesong/lang/private/call-ec.rkt 19 43 562 76)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["values"];
M.e[M.e.length-2]=M.e[M.e.length-3];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,1);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _494=function(M){if(--M.cbt<0){throw _494;}

//"lambda body for #(struct:LamPositionalName ...vate/call-ec.rkt:15:11 whalesong/lang/private/call-ec.rkt 15 11 330 310)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.v=M.primitives["continuation-prompt-available?"]._i(M);
M.e.pop();
if(M.v===false){return(_508)(M);}else{M.v=RT.VOID;
return(_509)(M);}};

var _492=function(M){if(--M.cbt<0){throw _492;}

//"lambda body for #(struct:LamPositionalName call-with-escape-continuation whalesong/lang/private/call-ec.rkt 11 0 175 474)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e.push(sym4120);
M.a=1;
M.v=M.primitives["make-continuation-prompt-tag"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["call-with-continuation-prompt"];
M.v=new RT.Closure(_493,0,[M.e[M.e.length-4],M.e[M.e.length-5],M.e[M.e.length-3]],"...vate/call-ec.rkt:14:3");
M.a=1;
if(M.a===0){return(_500)(M);}else{M.e.push(M.v);
return(_500)(M);}};

var _521=function(M){if(--M.cbt<0){throw _521;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("call-with-escape-continuation", prefix[selfMod.getPrefixOffset("call-with-escape-continuation")]);extNs.set("call-with-escape-continuation", prefix[selfMod.getPrefixOffset("call-with-escape-continuation")]);ns.set("call/ec", prefix[selfMod.getPrefixOffset("call/ec")]);extNs.set("call/ec", prefix[selfMod.getPrefixOffset("call/ec")]);}(M.modules["whalesong/lang/private/call-ec.rkt"],M.modules["whalesong/lang/private/call-ec.rkt"].getExports(),M.modules["whalesong/lang/private/call-ec.rkt"].getExternalExports(),M.modules["whalesong/lang/private/call-ec.rkt"].prefix));
return(M.p)(M);};

var _520=function(M){if(--M.cbt<0){throw _520;}
M.e.length-=(M.a-1);
return(_521)(M);};

var _517=function(M){M.modules["whalesong/lang/private/call-ec.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("call-with-escape-continuation")||M.primitives["call-with-escape-continuation"],M.primitives["make-continuation-prompt-tag"],M.primitives["error"],M.params.currentNamespace.get("call/ec")||M.primitives["call/ec"],M.primitives["procedure-rename"]]);M.e[M.e.length-1].names=["call-with-escape-continuation","make-continuation-prompt-tag","error","call/ec","procedure-rename"];
M.modules["whalesong/lang/private/call-ec.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_519,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_492,1,[M.e[M.e.length-1]],"call-with-escape-continuation");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _496=function(M){M.c.push(new RT.CallFrame(_498,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/call-ec.rkt"]=function(){return new RT.ModuleRecord("call-ec",_517);}
return(_516)(M);};

var _519=function(M){if(--M.cbt<0){throw _519;}
M.c.push(new RT.CallFrame(_521,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-3][0];
M.e[M.e.length-2]=sym4121;
M.v=M.primitives["procedure-rename"]._i(M);
M.e.length-=2;
M.e[M.e.length-1][3]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _493=function(M){if(--M.cbt<0){throw _493;}

//"lambda body for #(struct:LamPositionalName ...vate/call-ec.rkt:14:3 whalesong/lang/private/call-ec.rkt 14 3 308 334)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1],M.p.closedVals[2]);
M.e.push(M.e[M.e.length-2]);
M.v=new RT.Closure(_494,(RT.makeArityAtLeast(0)),[M.e[M.e.length-4],M.e[M.e.length-2]],"...vate/call-ec.rkt:15:11");
M.a=1;
if(M.a===0){return(_504)(M);}else{M.e.push(M.v);
return(_504)(M);}};

var _508=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym4122;
M.e[M.e.length-2]="escape continuation used out of context";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=2;
return(_509)(M);};

var _518=function(M){if(--M.cbt<0){throw _518;}
M.e.length-=(M.a-1);
return(_519)(M);};

var _516=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _509=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["abort-current-continuation"];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.v=new RT.Closure(_495,0,[M.e[M.e.length-5]],"...vate/call-ec.rkt:19:43");
M.a=1;
if(M.a===0){return(_510)(M);}else{M.e.push(M.v);
return(_510)(M);}};

var _504=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-2];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_505)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_505)(M);}};

var _511=function(M){M.v=M.v;
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _510=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-5];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_511)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_511)(M);}};

var _505=function(M){M.v=M.v;
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _500=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-5];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_501)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_501)(M);}};

_519.mvr=_518;
_521.mvr=_520;
_498.mvr=_497;
var sym4121=RT.makeSymbol("call/ec");
var sym4122=RT.makeSymbol("call-with-escape-continuation");
var sym4120=RT.makeSymbol("escape");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_522(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/call-ec.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/call-ec.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/map.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _577=function(M){M.v=false;
return(_574)(M);};

var _568=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _564=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-3]);
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_567,M.p));
return((M.p).label)(M);};

var _557=function(M){M.v=false;
return(_556)(M);};

var _550=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_551)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_526)(M);}};

var _547=function(M){M.c.push(new RT.CallFrame(_549,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/map.rkt"]=function(){return new RT.ModuleRecord("map",_769);}
return(_768)(M);};

var _781=function(M){if(--M.cbt<0){throw _781;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("andmap2", prefix[selfMod.getPrefixOffset("andmap2")]);extNs.set("andmap", prefix[selfMod.getPrefixOffset("andmap2")]);ns.set("for-each2", prefix[selfMod.getPrefixOffset("for-each2")]);extNs.set("for-each", prefix[selfMod.getPrefixOffset("for-each2")]);ns.set("map2", prefix[selfMod.getPrefixOffset("map2")]);extNs.set("map", prefix[selfMod.getPrefixOffset("map2")]);ns.set("ormap2", prefix[selfMod.getPrefixOffset("ormap2")]);extNs.set("ormap", prefix[selfMod.getPrefixOffset("ormap2")]);}(M.modules["whalesong/lang/private/map.rkt"],M.modules["whalesong/lang/private/map.rkt"].getExports(),M.modules["whalesong/lang/private/map.rkt"].getExternalExports(),M.modules["whalesong/lang/private/map.rkt"].prefix));
return(M.p)(M);};

var _777=function(M){if(--M.cbt<0){throw _777;}
M.c.push(new RT.CallFrame(_779,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_536,2,[M.e[M.e.length-4]],".../private/map.rkt:66:11");
M.e[M.e.length-2]=new RT.Closure(_538,3,[M.e[M.e.length-4]],".../private/map.rkt:77:11");
M.e[M.e.length-3]=new RT.Closure(_540,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:91:11");
M.v=new RT.Closure(_535,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"andmap");
M.e.length-=3;
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _759=function(M){if(--M.cbt<0){throw _759;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_761)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _682=function(M){if(--M.cbt<0){throw _682;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_684,M.p));
return((M.p).label)(M);};

var _667=function(M){if(--M.cbt<0){throw _667;}
if(M.v===false){return(_664)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_537_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_537)(M);}};

var _602=function(M){if(--M.cbt<0){throw _602;}
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][12];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _582=function(M){if(--M.cbt<0){throw _582;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_584,M.p));
return((M.p).label)(M);};

var _774=function(M){if(--M.cbt<0){throw _774;}
M.e.length-=(M.a-1);
return(_775)(M);};

var _548=function(M){if(--M.cbt<0){throw _548;}
M.e.length-=(M.a-1);
return(_549)(M);};

var _761=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_545_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_545)(M);};

var _747=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_545_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_545)(M);};


var _737=function(M){M.v=false;
return(_736)(M);};

var _728=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_543_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_543)(M);};

var _721=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-2]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_726,M.p));
return((M.p).label)(M);};

var _712=function(M){M.v=false;
return(_711)(M);};

var _544=function(M){if(--M.cbt<0){throw _544;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:108:11 whalesong/lang/private/map.rkt 108 11 3671 559)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_735)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_737)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_739)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_741)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_744,M.p));
return((M.p).label)(M);}}}}};


var _685=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_539_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_539)(M);};

var _674=function(M){if(M.v===false){return(_671)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_685)(M);}else{M.v=true;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _675=function(M){M.v=false;
return(_674)(M);};

var _664=function(M){M.v=false;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _647=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _649=function(M){M.v=false;
return(_650)(M);};

var _538=function(M){if(--M.cbt<0){throw _538;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:77:11 whalesong/lang/private/map.rkt 77 11 2576 562)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_673)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_675)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_677)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_679)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_682,M.p));
return((M.p).label)(M);}}}}};

var _624=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["for-each"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _628=function(M){M.v=false;
return(_627)(M);};

var _617=function(M){if(M.v===false){return(_614)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][12];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _534=function(M){if(--M.cbt<0){throw _534;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:60:11 whalesong/lang/private/map.rkt 60 11 2047 36)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["for-each"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _531=function(M){if(--M.cbt<0){throw _531;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_611)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_532)(M);}};

var _601=function(M){if(--M.cbt<0){throw _601;}
M.e.length-=(M.a-1);
return(_602)(M);};



var _575=function(M){M.v=false;
return(_574)(M);};


var _553=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _555=function(M){M.v=false;
return(_556)(M);};

var _523=function(M){if(--M.cbt<0){throw _523;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_550)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_524)(M);}};

var _536=function(M){if(--M.cbt<0){throw _536;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:66:11 whalesong/lang/private/map.rkt 66 11 2168 396)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_649)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_651)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_650)(M);}}};

var _532=function(M){if(--M.cbt<0){throw _532;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:39:11 whalesong/lang/private/map.rkt 39 11 1232 319)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_616)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_618)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_617)(M);}}};

var _782=function(M){return(_547)(M);};

var _771=function(M){if(--M.cbt<0){throw _771;}
M.c.push(new RT.CallFrame(_773,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_529,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _549=function(M){if(--M.cbt<0){throw _549;}
};

var _699=function(M){if(--M.cbt<0){throw _699;}
if(M.v===false){return(_696)(M);}else{M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_539_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_539)(M);}};

var _635=function(M){if(--M.cbt<0){throw _635;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_637,M.p));
return((M.p).label)(M);};

var _593=function(M){if(--M.cbt<0){throw _593;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_527_c;
M.a=3;
M.c.push(new RT.CallFrame(_596,M.p));
return(_527)(M);};

var _567=function(M){if(--M.cbt<0){throw _567;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_525_c;
M.a=2;
M.c.push(new RT.CallFrame(_570,M.p));
return(_525)(M);};

var _772=function(M){if(--M.cbt<0){throw _772;}
M.e.length-=(M.a-1);
return(_773)(M);};

var _769=function(M){M.modules["whalesong/lang/private/map.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("map2")||M.primitives["map2"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["map"],M.primitives["length"],M.params.currentNamespace.get("for-each2")||M.primitives["for-each2"],M.primitives["void"],M.primitives["for-each"],M.params.currentNamespace.get("andmap2")||M.primitives["andmap2"],M.primitives["andmap"],M.params.currentNamespace.get("ormap2")||M.primitives["ormap2"],M.primitives["ormap"],false,false]);M.e[M.e.length-1].names=["map2","procedure?","procedure-arity-includes?","map","length","for-each2","void","for-each","andmap2","andmap","ormap2","ormap",false,false];
M.modules["whalesong/lang/private/map.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_771,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_524,2,[M.e[M.e.length-4]],".../private/map.rkt:12:11");
M.e[M.e.length-2]=new RT.Closure(_526,3,[M.e[M.e.length-4]],".../private/map.rkt:21:11");
M.e[M.e.length-3]=new RT.Closure(_528,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:33:11");
M.v=new RT.Closure(_523,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"map");
M.e.length-=3;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _545=function(M){if(--M.cbt<0){throw _545;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 116 20 3959 236)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_754)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _736=function(M){if(M.v===false){return(_733)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_747)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _735=function(M){M.v=false;
return(_736)(M);};


var _543=function(M){if(--M.cbt<0){throw _543;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 103 20 3466 162)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_721)(M);}else{M.e.push(M.e[M.e.length-1]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _710=function(M){M.v=false;
return(_711)(M);};

var _546=function(M){if(--M.cbt<0){throw _546;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:122:11 whalesong/lang/private/map.rkt 122 11 4242 33)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["ormap"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _541=function(M){if(--M.cbt<0){throw _541;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_705)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_542)(M);}};

var _539=function(M){if(--M.cbt<0){throw _539;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 85 20 2864 238)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_692)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};


var _673=function(M){M.v=false;
return(_674)(M);};


var _537=function(M){if(--M.cbt<0){throw _537;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 72 20 2369 163)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_660)(M);}else{M.e.push(M.e[M.e.length-1]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _540=function(M){if(--M.cbt<0){throw _540;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:91:11 whalesong/lang/private/map.rkt 91 11 3150 34)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["andmap"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _535=function(M){if(--M.cbt<0){throw _535;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_644)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_536)(M);}};


var _626=function(M){M.v=false;
return(_627)(M);};

var _616=function(M){M.v=false;
return(_617)(M);};

var _533=function(M){if(--M.cbt<0){throw _533;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:48:11 whalesong/lang/private/map.rkt 48 11 1563 472)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_626)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_628)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_630)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_632)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_635,M.p));
return((M.p).label)(M);}}}}};

var _530=function(M){if(--M.cbt<0){throw _530;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 54 16 1793 205)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_605)(M);}else{M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _529=function(M){if(--M.cbt<0){throw _529;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 43 16 1376 142)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_599)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _527=function(M){if(--M.cbt<0){throw _527;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 27 16 872 201)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_590)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};



var _525=function(M){if(--M.cbt<0){throw _525;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 16 16 463 139)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_564)(M);}else{M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _528=function(M){if(--M.cbt<0){throw _528;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:33:11 whalesong/lang/private/map.rkt 33 11 1117 31)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["map"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _526=function(M){if(--M.cbt<0){throw _526;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:21:11 whalesong/lang/private/map.rkt 21 11 642 463)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_573)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_575)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_577)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_579)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_582,M.p));
return((M.p).label)(M);}}}}};

var _542=function(M){if(--M.cbt<0){throw _542;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:97:11 whalesong/lang/private/map.rkt 97 11 3265 394)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_710)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_712)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_711)(M);}}};

var _524=function(M){if(--M.cbt<0){throw _524;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:12:11 whalesong/lang/private/map.rkt 12 11 319 311)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_555)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_557)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_556)(M);}}};

var _773=function(M){if(--M.cbt<0){throw _773;}
M.c.push(new RT.CallFrame(_775,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_530,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _744=function(M){if(--M.cbt<0){throw _744;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_746,M.p));
return((M.p).label)(M);};

var _684=function(M){if(--M.cbt<0){throw _684;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_674)(M);};

var _608=function(M){if(--M.cbt<0){throw _608;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][13];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _596=function(M){if(--M.cbt<0){throw _596;}
M.e[M.e.length-2]=M.v;
return(_594)(M);};

var _570=function(M){if(--M.cbt<0){throw _570;}
M.e[M.e.length-2]=M.v;
return(_568)(M);};

var _776=function(M){if(--M.cbt<0){throw _776;}
M.e.length-=(M.a-1);
return(_777)(M);};

var _768=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _741=function(M){M.v=false;
return(_736)(M);};

var _708=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["ormap"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _706=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_542)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_546)(M);}};

var _671=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _679=function(M){M.v=false;
return(_674)(M);};

var _650=function(M){if(M.v===false){return(_647)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_653)(M);}else{M.v=true;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _645=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_536)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_540)(M);}};

var _627=function(M){if(M.v===false){return(_624)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][13];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _632=function(M){M.v=false;
return(_627)(M);};

var _614=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["for-each"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _612=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_532)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_534)(M);}};

var _605=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-6]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_608,M.p));
return((M.p).label)(M);};

var _599=function(M){M.e.push(M.e[M.e.length-2]);
M.v=RT.checkedCar(M, M.e[M.e.length-4]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_602,M.p));
return((M.p).label)(M);};

var _571=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _579=function(M){M.v=false;
return(_574)(M);};

var _573=function(M){M.v=false;
return(_574)(M);};

var _556=function(M){if(M.v===false){return(_553)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_525_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_525)(M);}};

var _551=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_524)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_528)(M);}};

var _779=function(M){if(--M.cbt<0){throw _779;}
M.c.push(new RT.CallFrame(_781,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_542,2,[M.e[M.e.length-4]],".../private/map.rkt:97:11");
M.e[M.e.length-2]=new RT.Closure(_544,3,[M.e[M.e.length-4]],".../private/map.rkt:108:11");
M.e[M.e.length-3]=new RT.Closure(_546,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:122:11");
M.v=new RT.Closure(_541,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"ormap");
M.e.length-=3;
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _775=function(M){if(--M.cbt<0){throw _775;}
M.c.push(new RT.CallFrame(_777,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_532,2,[M.e[M.e.length-4]],".../private/map.rkt:39:11");
M.e[M.e.length-2]=new RT.Closure(_533,3,[M.e[M.e.length-4]],".../private/map.rkt:48:11");
M.e[M.e.length-3]=new RT.Closure(_534,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:60:11");
M.v=new RT.Closure(_531,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"for-each");
M.e.length-=3;
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _746=function(M){if(--M.cbt<0){throw _746;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_736)(M);};

var _726=function(M){if(--M.cbt<0){throw _726;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_728)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _637=function(M){if(--M.cbt<0){throw _637;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_627)(M);};

var _584=function(M){if(--M.cbt<0){throw _584;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_574)(M);};

var _780=function(M){if(--M.cbt<0){throw _780;}
M.e.length-=(M.a-1);
return(_781)(M);};

var _778=function(M){if(--M.cbt<0){throw _778;}
M.e.length-=(M.a-1);
return(_779)(M);};

var _770=function(M){if(--M.cbt<0){throw _770;}
M.e.length-=(M.a-1);
return(_771)(M);};

var _754=function(M){M.e.push(void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-6]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_759,M.p));
return((M.p).label)(M);};

var _733=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["ormap"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _739=function(M){M.v=false;
return(_736)(M);};

var _714=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_543_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_543)(M);};

var _711=function(M){if(M.v===false){return(_708)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_714)(M);}else{M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _705=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_706)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_544)(M);}};

var _696=function(M){M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _692=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_699,M.p));
return((M.p).label)(M);};


var _677=function(M){M.v=false;
return(_674)(M);};

var _660=function(M){M.e.push(M.e[M.e.length-1]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_667,M.p));
return((M.p).label)(M);};

var _653=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_537_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_537)(M);};

var _651=function(M){M.v=false;
return(_650)(M);};

var _644=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_645)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_538)(M);}};


var _630=function(M){M.v=false;
return(_627)(M);};

var _618=function(M){M.v=false;
return(_617)(M);};

var _611=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_612)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_533)(M);}};

var _607=function(M){if(--M.cbt<0){throw _607;}
M.e.length-=(M.a-1);
return(_608)(M);};

var _594=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _590=function(M){M.e.push(void(0),void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.v=RT.checkedCar(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_593,M.p));
return((M.p).label)(M);};

var _574=function(M){if(M.v===false){return(_571)(M);}else{M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_527_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_527)(M);}};

_602.mvr=_601;
_608.mvr=_607;
_771.mvr=_770;
_773.mvr=_772;
_775.mvr=_774;
_777.mvr=_776;
_779.mvr=_778;
_781.mvr=_780;
_549.mvr=_548;
var _527_c=new RT.Closure(_527,3,void(0),"loop");
var _543_c=new RT.Closure(_543,2,void(0),"loop");
var _545_c=new RT.Closure(_545,3,void(0),"loop");
var _525_c=new RT.Closure(_525,2,void(0),"loop");
var _539_c=new RT.Closure(_539,3,void(0),"loop");
var _537_c=new RT.Closure(_537,2,void(0),"loop");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_782(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/map.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/map.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/list.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _861=function(M){M.v=false;
return(_862)(M);};

var _847=function(M){if(--M.cbt<0){throw _847;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:318:15 whalesong/lang/list.rkt 318 15 11384 32)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1270,M.p));
return((M.p).label)(M);};

var _1051=function(M){M.e.pop();
M.p=_821_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_821)(M);};

var _1034=function(M){M.e.pop();
M.p=_819_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_819)(M);};

var _1192=function(M){M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1187=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][67];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1190,M.p));
return((M.p).label)(M);};

var _1174=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-2]);
M.v=RT.checkedCar(M, M.e[M.e.length-4]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1177,M.p));
return((M.p).label)(M);};

var _1159=function(M){M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym4182;
M.e[M.e.length-2]="all lists must have same size";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1154=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_838_c;
M.a=2;
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return(_838)(M);};

var _1147=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_1154)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1157,M.p));
return((M.p).label)(M);}};

var _1148=function(M){M.v=false;
return(_1149)(M);};

var _1138=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4182;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="procedure (arity ~a)";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1145,M.p));
return((M.p).label)(M);};

var _1128=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-5][66];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1135,M.p));
return((M.p).label)(M);};

var _1117=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-5][65];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1120,M.p));
return((M.p).label)(M);};

var _1115=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_1117)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _831=function(M){if(--M.cbt<0){throw _831;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 169 2 5055 168)"

M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_1099)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1084=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 5]).racketArity,M.a)){return(_825)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 5];
return(_829)(M);}};

var _1082=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_1083)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_827)(M);}};

var _1075=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][22];
M.e[M.e.length-1]=sym4183;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1078,M.p));
return((M.p).label)(M);};

var _1064=function(M){M.v=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["values"];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-4];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1048=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][21];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1050,M.p));
return((M.p).label)(M);};

var _1031=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][21];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1033,M.p));
return((M.p).label)(M);};

var _1021=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4184;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1022)(M);};

var _1011=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][22];
M.e[M.e.length-1]=sym4185;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1004=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][62];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _994=function(M){M.a=3;
M.v=M.primitives["format"]._i(M);
M.e.length-=3;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _993=function(M){M.e[M.e.length-3]=" (not a proper list)";
return(_994)(M);};

var _984=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][61];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=RT.NULL;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _979=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][61];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedSub1(M, M.e[M.e.length-6]);
M.v=RT.makePair(M.e[M.e.length-5],M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _975=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4186;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _963=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4187;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _949=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4188;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _945=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][60];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _929=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4189;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _919=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4190;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _905=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][56];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _895=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _889=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4191;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _879=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4192;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _869=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4193;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _865=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1263=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][68];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=RT.NULL;
M.e[M.e.length-4]=RT.NULL;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1191=function(M){M.v=M.e[M.e.length-9];
return(_1192)(M);};

var _839=function(M){if(--M.cbt<0){throw _839;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 283 8 9903 176)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1187)(M);}else{M.v=M.e[M.e.length-5];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1179=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=_838_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_838)(M);};

var _1162=function(M){M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1164,M.p));
return((M.p).label)(M);};

var _837=function(M){if(--M.cbt<0){throw _837;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:256:18 whalesong/lang/list.rkt 256 18 8870 31)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1173,M.p));
return((M.p).label)(M);};

var _1146=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4182;
M.e[M.e.length-2]="proper list";
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["ormap"];
M.e[M.e.length-1]=_836_c;
M.v=RT.makePair(M.e[M.e.length-8],M.e[M.e.length-9]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1153,M.p));
return((M.p).label)(M);};

var _1139=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_1148)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.primitives["list?"];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1151,M.p));
return((M.p).label)(M);}};

var _1141=function(M){if(M.v===false){return(_1138)(M);}else{M.v=RT.VOID;
return(_1139)(M);}};

var _835=function(M){if(--M.cbt<0){throw _835;}

//"lambda body for #(struct:LamPositionalName filter-map whalesong/lang/list.rkt 246 0 8442 922)"

M.unspliceRestFromStack(2,(M.a-2));
M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1140)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1143,M.p));
return((M.p).label)(M);}};

var _1346=function(M){if(--M.cbt<0){throw _1346;}
M.c.push(new RT.CallFrame(_1348,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_790,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][55]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1121=function(M){M.e.push(void(0));
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-3]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCar(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1124,M.p));
return((M.p).label)(M);};

var _1113=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4194;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1109=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][65];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1112,M.p));
return((M.p).label)(M);};

var _1101=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _830=function(M){if(--M.cbt<0){throw _830;}

//"lambda body for #(struct:LamPositionalName flatten whalesong/lang/list.rkt 168 0 5025 199)"

M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=RT.NULL;
M.p=_831_c;
M.a=2;
M.e.splice(M.e.length-3,1);
M.c[M.c.length-1].p=M.p;
return(_831)(M);};

var _1083=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_1084)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_828)(M);}};

var _1081=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1082)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_826)(M);}};

var _1071=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][64];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][21];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1073,M.p));
return((M.p).label)(M);};

var _1061=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1059=function(M){M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1052=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][22];
M.e[M.e.length-1]=sym4195;
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1055,M.p));
return((M.p).label)(M);};

var _1047=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4195;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1048)(M);};

var _1035=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][22];
M.e[M.e.length-1]=sym4196;
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1038,M.p));
return((M.p).label)(M);};

var _1030=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4196;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1031)(M);};

var _1022=function(M){M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][21];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1024,M.p));
return((M.p).label)(M);};

var _1018=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][63];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.e[M.e.length-5]=RT.NULL;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1007=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_1011)(M);}else{M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-5]=M.e[M.e.length-6][63];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(M.e[M.e.length-9]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e[M.e.length-4]=RT.checkedSub1(M, M.e[M.e.length-10]);
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-13];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1003=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4197;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1004)(M);};

var _997=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][22];
M.e[M.e.length-1]=sym4197;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _989=function(M){M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _983=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4198;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_984)(M);};

var _809=function(M){if(--M.cbt<0){throw _809;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 93 2 2076 74)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-3]);
if(M.v===false){return(_979)(M);}else{M.v=M.e[M.e.length-4];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _978=function(M){if(M.v===false){return(_975)(M);}else{M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _966=function(M){if(M.v===false){return(_963)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_805_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_805)(M);}};

var _1331=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _943=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4188;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=10;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _935=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][59];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _925=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][58];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _915=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][57];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _909=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4199;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _903=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4199;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=6;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _893=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4200;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=5;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1289=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4201;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1290)(M);};

var _1284=function(M){M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _873=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4192;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=3;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _863=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4193;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=2;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1262=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4202;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1263)(M);};

var _1199=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4203;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="procedure (arity ~a)";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1206,M.p));
return((M.p).label)(M);};

var _840=function(M){if(--M.cbt<0){throw _840;}

//"lambda body for #(struct:LamPositionalName count whalesong/lang/list.rkt 272 0 9446 787)"

M.unspliceRestFromStack(2,(M.a-2));
M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1201)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1204,M.p));
return((M.p).label)(M);}};

var _1432=function(M){if(--M.cbt<0){throw _1432;}
M.c.push(new RT.CallFrame(_1434,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_851,2,[M.e[M.e.length-1]],"filter-not");
M.e[M.e.length-1][47]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1181=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1412=function(M){if(--M.cbt<0){throw _1412;}
M.c.push(new RT.CallFrame(_1414,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_832,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][65]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1170=function(M){M.v=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1161=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-3];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_1162)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_1162)(M);}};

var _1388=function(M){if(--M.cbt<0){throw _1388;}
M.c.push(new RT.CallFrame(_1390,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_812,3,[M.e[M.e.length-1]],"too-large");
M.e[M.e.length-1][22]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1149=function(M){if(M.v===false){return(_1146)(M);}else{M.v=RT.VOID;
return(_1147)(M);}};

var _1372=function(M){if(--M.cbt<0){throw _1372;}
M.c.push(new RT.CallFrame(_1374,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_804,1,[M.e[M.e.length-1]],"last");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1140=function(M){M.v=false;
return(_1141)(M);};

var _1356=function(M){if(--M.cbt<0){throw _1356;}
M.c.push(new RT.CallFrame(_1358,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_795,1,[M.e[M.e.length-1]],"seventh");
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _834=function(M){if(--M.cbt<0){throw _834;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 257 8 8914 241)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1121)(M);}else{M.v=RT.NULL;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _858=function(M){if(--M.cbt<0){throw _858;}
};

var _1103=function(M){M.p=_831_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_831)(M);};

var _1099=function(M){M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1101)(M);}else{M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.p=_831_c;
M.a=2;
M.c.push(new RT.CallFrame(_1105,M.p));
return(_831)(M);}};

var _829=function(M){if(--M.cbt<0){throw _829;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:166:15 whalesong/lang/list.rkt 166 15 4983 38)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["apply"];
M.e[M.e.length-2]=M.primitives["append"];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _827=function(M){if(--M.cbt<0){throw _827;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:164:15 whalesong/lang/list.rkt 164 15 4873 36)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _824=function(M){if(--M.cbt<0){throw _824;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1081)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_825)(M);}};

var _1070=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4183;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1071)(M);};

var _823=function(M){if(--M.cbt<0){throw _823;}

//"lambda body for #(struct:LamPositionalName split-at-right whalesong/lang/list.rkt 150 0 4278 453)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_1070)(M);}else{M.v=RT.VOID;
return(_1071)(M);}};

var _821=function(M){while(true){if(--M.cbt<0){throw _821;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 143 2 4028 247)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_1059)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-3]);
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_821_c;
M.a=2;
M.c.push(new RT.CallFrame(_1063,M.p));
}}};


var _1042=function(M){M.v=M.e[M.e.length-1];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _819=function(M){if(--M.cbt<0){throw _819;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 133 2 3657 230)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_1042)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_819_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_819)(M);}};

var _818=function(M){if(--M.cbt<0){throw _818;}

//"lambda body for #(struct:LamPositionalName take-right whalesong/lang/list.rkt 130 0 3512 376)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_1030)(M);}else{M.v=RT.VOID;
return(_1031)(M);}};

var _1026=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][22];
M.e[M.e.length-1]=sym4184;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1017=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4185;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1018)(M);};

var _816=function(M){if(--M.cbt<0){throw _816;}

//"lambda body for #(struct:LamPositionalName split-at whalesong/lang/list.rkt 114 0 2812 362)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_1017)(M);}else{M.v=RT.VOID;
return(_1018)(M);}};


var _995=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_997)(M);}else{M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-7][62];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-11]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1000,M.p));
return((M.p).label)(M);}};

var _987=function(M){M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_989)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][21];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _811=function(M){if(--M.cbt<0){throw _811;}

//"lambda body for #(struct:LamPositionalName drop* whalesong/lang/list.rkt 97 0 2175 146)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-3]);
if(M.v===false){return(_987)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _808=function(M){if(--M.cbt<0){throw _808;}

//"lambda body for #(struct:LamPositionalName empty? whalesong/lang/list.rkt 87 15 1899 22)"

M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _977=function(M){M.v=false;
return(_978)(M);};

var _970=function(M){M.v=RT.checkedCar(M, M.e[M.e.length-1]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _965=function(M){M.v=false;
return(_966)(M);};

var _958=function(M){M.v=M.e[M.e.length-1];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _953=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4204;
M.e[M.e.length-2]="pair";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _939=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4205;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _933=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4205;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=9;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _923=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4189;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=8;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1313=function(M){M.v=RT.isList(M.e[M.e.length-5]);
if(M.v===false){return(_1318)(M);}else{M.v=RT.isPair(M.e[M.e.length-5]);
return(_1319)(M);}};

var _913=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4190;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=7;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _899=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4200;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1294=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][69];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=RT.NULL;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1292=function(M){if(M.v===false){return(_1289)(M);}else{M.v=RT.VOID;
return(_1290)(M);}};

var _1283=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_1284)(M);};

var _850=function(M){if(--M.cbt<0){throw _850;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 332 2 11989 144)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1281)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["reverse"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1267=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_847)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_849)(M);}};

var _1259=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_1262)(M);}else{M.v=RT.VOID;
return(_1263)(M);}};

var _1258=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4202;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1259)(M);};

var _1202=function(M){if(M.v===false){return(_1199)(M);}else{M.v=RT.VOID;
return(_1200)(M);}};

var _1440=function(M){if(--M.cbt<0){throw _1440;}
M.c.push(new RT.CallFrame(_1442,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_855,2,[M.e[M.e.length-1]],"argmax");
M.e[M.e.length-1][51]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1430=function(M){if(--M.cbt<0){throw _1430;}
M.c.push(new RT.CallFrame(_1432,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_850,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][69]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1422=function(M){if(--M.cbt<0){throw _1422;}
M.c.push(new RT.CallFrame(_1424,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_840,(RT.makeArityAtLeast(2)),[M.e[M.e.length-1]],"count");
M.e[M.e.length-1][44]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1410=function(M){if(--M.cbt<0){throw _1410;}
M.c.push(new RT.CallFrame(_1412,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=_830_c;
M.e[M.e.length-1][33]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1406=function(M){if(--M.cbt<0){throw _1406;}
M.c.push(new RT.CallFrame(_1408,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_823,2,[M.e[M.e.length-1]],"split-at-right");
M.e[M.e.length-1][30]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1398=function(M){if(--M.cbt<0){throw _1398;}
M.c.push(new RT.CallFrame(_1400,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_817,2,[M.e[M.e.length-1]],"drop");
M.e[M.e.length-1][27]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1386=function(M){if(--M.cbt<0){throw _1386;}
M.c.push(new RT.CallFrame(_1388,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_811,2,[M.e[M.e.length-1]],"drop*");
M.e[M.e.length-1][21]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1382=function(M){if(--M.cbt<0){throw _1382;}
M.c.push(new RT.CallFrame(_1384,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_809,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][61]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1370=function(M){if(--M.cbt<0){throw _1370;}
M.c.push(new RT.CallFrame(_1372,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_802,1,[M.e[M.e.length-1]],"last-pair");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1366=function(M){if(--M.cbt<0){throw _1366;}
M.c.push(new RT.CallFrame(_1368,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_800,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][60]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1360=function(M){if(--M.cbt<0){throw _1360;}
M.c.push(new RT.CallFrame(_1362,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_797,1,[M.e[M.e.length-1]],"eighth");
M.e[M.e.length-1][9]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1352=function(M){if(--M.cbt<0){throw _1352;}
M.c.push(new RT.CallFrame(_1354,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_793,1,[M.e[M.e.length-1]],"sixth");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1342=function(M){if(--M.cbt<0){throw _1342;}
M.c.push(new RT.CallFrame(_1344,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_788,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][54]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _833=function(M){if(--M.cbt<0){throw _833;}

//"lambda body for #(struct:LamPositionalName add-between whalesong/lang/list.rkt 176 0 5304 349)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_1113)(M);}else{M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_1115)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1307=function(M){if(--M.cbt<0){throw _1307;}
if(M.v===false){return(_1304)(M);}else{M.v=M.e[M.e.length-7];
M.v=M.e[M.e.length-6];
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-8][70];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=RT.checkedCar(M, M.e[M.e.length-14]);
M.e[M.e.length-5]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-14]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1253=function(M){if(--M.cbt<0){throw _1253;}
if(M.v===false){return(_1250)(M);}else{M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-7][68];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=RT.makePair(M.e[M.e.length-6],M.e[M.e.length-10]);
M.v=M.e[M.e.length-11];
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1225=function(M){if(--M.cbt<0){throw _1225;}
if(M.v===false){return(_1220)(M);}else{M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][67];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.e[M.e.length-4]=0;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1206=function(M){if(--M.cbt<0){throw _1206;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1200)(M);};

var _1183=function(M){if(--M.cbt<0){throw _1183;}
M.e[M.e.length-2]=M.v;
return(_1181)(M);};

var _1153=function(M){if(--M.cbt<0){throw _1153;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1147)(M);};

var _1143=function(M){if(--M.cbt<0){throw _1143;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1141)(M);};

var _1126=function(M){if(--M.cbt<0){throw _1126;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_1128)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-7][66];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-9]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1131,M.p));
return((M.p).label)(M);}};

var _1078=function(M){if(--M.cbt<0){throw _1078;}
M.e[M.e.length-3]=M.v;
return(_1074)(M);};

var _1063=function(M){if(--M.cbt<0){throw _1063;}
M.e[M.e.length-2]=M.v;
return(_1061)(M);};

var _1024=function(M){if(--M.cbt<0){throw _1024;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_1026)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1441=function(M){if(--M.cbt<0){throw _1441;}
M.e.length-=(M.a-1);
return(_1442)(M);};

var _1433=function(M){if(--M.cbt<0){throw _1433;}
M.e.length-=(M.a-1);
return(_1434)(M);};

var _1425=function(M){if(--M.cbt<0){throw _1425;}
M.e.length-=(M.a-1);
return(_1426)(M);};

var _1415=function(M){if(--M.cbt<0){throw _1415;}
M.e.length-=(M.a-1);
return(_1416)(M);};

var _1407=function(M){if(--M.cbt<0){throw _1407;}
M.e.length-=(M.a-1);
return(_1408)(M);};

var _1395=function(M){if(--M.cbt<0){throw _1395;}
M.e.length-=(M.a-1);
return(_1396)(M);};

var _1389=function(M){if(--M.cbt<0){throw _1389;}
M.e.length-=(M.a-1);
return(_1390)(M);};

var _1381=function(M){if(--M.cbt<0){throw _1381;}
M.e.length-=(M.a-1);
return(_1382)(M);};

var _1373=function(M){if(--M.cbt<0){throw _1373;}
M.e.length-=(M.a-1);
return(_1374)(M);};

var _1369=function(M){if(--M.cbt<0){throw _1369;}
M.e.length-=(M.a-1);
return(_1370)(M);};

var _1355=function(M){if(--M.cbt<0){throw _1355;}
M.e.length-=(M.a-1);
return(_1356)(M);};

var _1353=function(M){if(--M.cbt<0){throw _1353;}
M.e.length-=(M.a-1);
return(_1354)(M);};

var _1343=function(M){if(--M.cbt<0){throw _1343;}
M.e.length-=(M.a-1);
return(_1344)(M);};

var _802=function(M){if(--M.cbt<0){throw _802;}

//"lambda body for #(struct:LamPositionalName last-pair whalesong/lang/list.rkt 65 0 1362 173)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_953)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_803_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_803)(M);}};

var _857=function(M){if(--M.cbt<0){throw _857;}
M.e.length-=(M.a-1);
return(_858)(M);};

var _1324=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-8][70];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=RT.checkedCar(M, M.e[M.e.length-12]);
M.e[M.e.length-5]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-12]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1317=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1321,M.p));
return((M.p).label)(M);};

var _1312=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1313)(M);};

var _1304=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-8][70];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.v=RT.checkedCdr(M, M.e[M.e.length-14]);
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1297=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1300,M.p));
return((M.p).label)(M);};

var _1293=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4201;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1294)(M);};

var _1291=function(M){M.v=false;
return(_1292)(M);};

var _875=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _786=function(M){if(--M.cbt<0){throw _786;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_873)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_875)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1266=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1267)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_848)(M);}};

var _783=function(M){if(--M.cbt<0){throw _783;}

//"lambda body for #(struct:LamPositionalName first whalesong/lang/list.rkt 39 0 613 112)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_861)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_862)(M);}};

var _1261=function(M){if(M.v===false){return(_1258)(M);}else{M.v=RT.VOID;
return(_1259)(M);}};

var _1235=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-4]);
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1240,M.p));
return((M.p).label)(M);};

var _1223=function(M){M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1225,M.p));
return((M.p).label)(M);};

var _1215=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=0;
M.p=_843_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_843)(M);};

var _1208=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_1215)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1218,M.p));
return((M.p).label)(M);}};

var _1209=function(M){M.v=false;
return(_1210)(M);};

var _1201=function(M){M.v=false;
return(_1202)(M);};

var _1438=function(M){if(--M.cbt<0){throw _1438;}
M.c.push(new RT.CallFrame(_1440,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_854,2,[M.e[M.e.length-1]],"argmin");
M.e[M.e.length-1][50]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1428=function(M){if(--M.cbt<0){throw _1428;}
M.c.push(new RT.CallFrame(_1430,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_847,2,[M.e[M.e.length-4]],"...ng/lang/list.rkt:318:15");
M.e[M.e.length-2]=new RT.Closure(_848,3,[M.e[M.e.length-4]],"...ng/lang/list.rkt:319:15");
M.e[M.e.length-3]=new RT.Closure(_849,(RT.makeArityAtLeast(2)),[M.e[M.e.length-4]],"...ng/lang/list.rkt:320:15");
M.v=new RT.Closure(_846,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(2)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"append-map");
M.e.length-=3;
M.e[M.e.length-1][46]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1420=function(M){if(--M.cbt<0){throw _1420;}
M.c.push(new RT.CallFrame(_1422,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_839,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][67]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1416=function(M){if(--M.cbt<0){throw _1416;}
M.c.push(new RT.CallFrame(_1418,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_834,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][66]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1404=function(M){if(--M.cbt<0){throw _1404;}
M.c.push(new RT.CallFrame(_1406,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_822,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][64]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1396=function(M){if(--M.cbt<0){throw _1396;}
M.c.push(new RT.CallFrame(_1398,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_816,2,[M.e[M.e.length-1]],"split-at");
M.e[M.e.length-1][25]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1392=function(M){if(--M.cbt<0){throw _1392;}
M.c.push(new RT.CallFrame(_1394,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_814,2,[M.e[M.e.length-1]],"take");
M.e[M.e.length-1][24]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1380=function(M){if(--M.cbt<0){throw _1380;}
M.c.push(new RT.CallFrame(_1382,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=RT.NULL;
M.e[M.e.length-1][17]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1364=function(M){if(--M.cbt<0){throw _1364;}
M.c.push(new RT.CallFrame(_1366,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_799,1,[M.e[M.e.length-1]],"ninth");
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1354=function(M){if(--M.cbt<0){throw _1354;}
M.c.push(new RT.CallFrame(_1356,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_794,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][57]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1340=function(M){if(--M.cbt<0){throw _1340;}
M.c.push(new RT.CallFrame(_1342,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_787,1,[M.e[M.e.length-1]],"third");
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1336=function(M){if(--M.cbt<0){throw _1336;}
M.c.push(new RT.CallFrame(_1338,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_785,1,[M.e[M.e.length-1]],"second");
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1286=function(M){if(--M.cbt<0){throw _1286;}
if(M.v===false){return(_1283)(M);}else{M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-7];
return(_1284)(M);}};

var _1274=function(M){if(--M.cbt<0){throw _1274;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1218=function(M){if(--M.cbt<0){throw _1218;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["andmap"];
M.v=new RT.Closure(_842,1,[M.e[M.e.length-4],M.e[M.e.length-3]],"...ng/lang/list.rkt:282:18");
M.a=1;
if(M.a===0){return(_1222)(M);}else{M.e.push(M.v);
return(_1222)(M);}};

var _1204=function(M){if(--M.cbt<0){throw _1204;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1202)(M);};

var _1194=function(M){if(--M.cbt<0){throw _1194;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1196,M.p));
return((M.p).label)(M);};

var _1173=function(M){if(--M.cbt<0){throw _1173;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1135=function(M){if(--M.cbt<0){throw _1135;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1131=function(M){if(--M.cbt<0){throw _1131;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1133,M.p));
return((M.p).label)(M);};

var _1112=function(M){if(--M.cbt<0){throw _1112;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["list*"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1050=function(M){if(--M.cbt<0){throw _1050;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_1052)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_1051)(M);}};

var _1033=function(M){if(--M.cbt<0){throw _1033;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_1035)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_1034)(M);}};

var _1439=function(M){if(--M.cbt<0){throw _1439;}
M.e.length-=(M.a-1);
return(_1440)(M);};

var _1431=function(M){if(--M.cbt<0){throw _1431;}
M.e.length-=(M.a-1);
return(_1432)(M);};

var _1419=function(M){if(--M.cbt<0){throw _1419;}
M.e.length-=(M.a-1);
return(_1420)(M);};

var _1413=function(M){if(--M.cbt<0){throw _1413;}
M.e.length-=(M.a-1);
return(_1414)(M);};

var _1405=function(M){if(--M.cbt<0){throw _1405;}
M.e.length-=(M.a-1);
return(_1406)(M);};

var _1401=function(M){if(--M.cbt<0){throw _1401;}
M.e.length-=(M.a-1);
return(_1402)(M);};

var _1387=function(M){if(--M.cbt<0){throw _1387;}
M.e.length-=(M.a-1);
return(_1388)(M);};

var _1379=function(M){if(--M.cbt<0){throw _1379;}
M.e.length-=(M.a-1);
return(_1380)(M);};

var _1371=function(M){if(--M.cbt<0){throw _1371;}
M.e.length-=(M.a-1);
return(_1372)(M);};

var _1367=function(M){if(--M.cbt<0){throw _1367;}
M.e.length-=(M.a-1);
return(_1368)(M);};

var _1361=function(M){if(--M.cbt<0){throw _1361;}
M.e.length-=(M.a-1);
return(_1362)(M);};

var _1349=function(M){if(--M.cbt<0){throw _1349;}
M.e.length-=(M.a-1);
return(_1350)(M);};

var _1341=function(M){if(--M.cbt<0){throw _1341;}
M.e.length-=(M.a-1);
return(_1342)(M);};

var _1337=function(M){if(--M.cbt<0){throw _1337;}
M.e.length-=(M.a-1);
return(_1338)(M);};

var _855=function(M){if(--M.cbt<0){throw _855;}

//"lambda body for #(struct:LamPositionalName argmax whalesong/lang/list.rkt 367 0 13235 46)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][48];
M.e[M.e.length-1]=M.primitives[">"];
M.e[M.e.length-2]=sym4206;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1323=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]="procedure that returns real numbers";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-10];
M.e[M.e.length-5]=M.e[M.e.length-11];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1324)(M);};

var _1316=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1317)(M);};

var _1315=function(M){if(M.v===false){return(_1312)(M);}else{M.v=RT.VOID;
return(_1313)(M);}};

var _853=function(M){if(--M.cbt<0){throw _853;}

//"lambda body for #(struct:LamPositionalName mk-min whalesong/lang/list.rkt 341 0 12292 894)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1314)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1315)(M);}};

var _1303=function(M){M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1307,M.p));
return((M.p).label)(M);};

var _1290=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_1293)(M);}else{M.v=RT.VOID;
return(_1294)(M);}};

var _885=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][54];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1281=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][69];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-6]);
M.e.push(M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1286,M.p));
return((M.p).label)(M);};


var _859=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4207;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _856=function(M){M.c.push(new RT.CallFrame(_858,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/list.rkt"]=function(){return new RT.ModuleRecord("list",_1332);}
return(_1331)(M);};

var _1260=function(M){M.v=false;
return(_1261)(M);};

var _1074=function(M){M.e.pop();
M.v=RT.NULL;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1244=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-4]);
M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1253,M.p));
return((M.p).label)(M);};

var _1237=function(M){M.e[M.e.length-3]=M.e[M.e.length-6];
return(_1238)(M);};

var _1222=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-3];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_1223)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_1223)(M);}};

var _842=function(M){if(--M.cbt<0){throw _842;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:282:18 whalesong/lang/list.rkt 282 18 9859 31)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1234,M.p));
return((M.p).label)(M);};

var _1207=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4203;
M.e[M.e.length-2]="proper list";
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["ormap"];
M.e[M.e.length-1]=_841_c;
M.v=RT.makePair(M.e[M.e.length-8],M.e[M.e.length-9]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1214,M.p));
return((M.p).label)(M);};

var _1200=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_1209)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.primitives["list?"];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1212,M.p));
return((M.p).label)(M);}};

var _1442=function(M){if(--M.cbt<0){throw _1442;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("add-between", prefix[selfMod.getPrefixOffset("add-between")]);extNs.set("add-between", prefix[selfMod.getPrefixOffset("add-between")]);ns.set("append*", prefix[selfMod.getPrefixOffset("append*")]);extNs.set("append*", prefix[selfMod.getPrefixOffset("append*")]);ns.set("append-map", prefix[selfMod.getPrefixOffset("append-map")]);extNs.set("append-map", prefix[selfMod.getPrefixOffset("append-map")]);ns.set("argmax", prefix[selfMod.getPrefixOffset("argmax")]);extNs.set("argmax", prefix[selfMod.getPrefixOffset("argmax")]);ns.set("argmin", prefix[selfMod.getPrefixOffset("argmin")]);extNs.set("argmin", prefix[selfMod.getPrefixOffset("argmin")]);ns.set("cons?", prefix[selfMod.getPrefixOffset("cons?")]);extNs.set("cons?", prefix[selfMod.getPrefixOffset("cons?")]);ns.set("count", prefix[selfMod.getPrefixOffset("count")]);extNs.set("count", prefix[selfMod.getPrefixOffset("count")]);ns.set("drop", prefix[selfMod.getPrefixOffset("drop")]);extNs.set("drop", prefix[selfMod.getPrefixOffset("drop")]);ns.set("drop-right", prefix[selfMod.getPrefixOffset("drop-right")]);extNs.set("drop-right", prefix[selfMod.getPrefixOffset("drop-right")]);ns.set("eighth", prefix[selfMod.getPrefixOffset("eighth")]);extNs.set("eighth", prefix[selfMod.getPrefixOffset("eighth")]);ns.set("empty", prefix[selfMod.getPrefixOffset("empty")]);extNs.set("empty", prefix[selfMod.getPrefixOffset("empty")]);ns.set("empty?", prefix[selfMod.getPrefixOffset("empty?")]);extNs.set("empty?", prefix[selfMod.getPrefixOffset("empty?")]);ns.set("fifth", prefix[selfMod.getPrefixOffset("fifth")]);extNs.set("fifth", prefix[selfMod.getPrefixOffset("fifth")]);ns.set("filter-map", prefix[selfMod.getPrefixOffset("filter-map")]);extNs.set("filter-map", prefix[selfMod.getPrefixOffset("filter-map")]);ns.set("filter-not", prefix[selfMod.getPrefixOffset("filter-not")]);extNs.set("filter-not", prefix[selfMod.getPrefixOffset("filter-not")]);ns.set("first", prefix[selfMod.getPrefixOffset("first")]);extNs.set("first", prefix[selfMod.getPrefixOffset("first")]);ns.set("flatten", prefix[selfMod.getPrefixOffset("flatten")]);extNs.set("flatten", prefix[selfMod.getPrefixOffset("flatten")]);ns.set("fourth", prefix[selfMod.getPrefixOffset("fourth")]);extNs.set("fourth", prefix[selfMod.getPrefixOffset("fourth")]);ns.set("last", prefix[selfMod.getPrefixOffset("last")]);extNs.set("last", prefix[selfMod.getPrefixOffset("last")]);ns.set("last-pair", prefix[selfMod.getPrefixOffset("last-pair")]);extNs.set("last-pair", prefix[selfMod.getPrefixOffset("last-pair")]);ns.set("make-list", prefix[selfMod.getPrefixOffset("make-list")]);extNs.set("make-list", prefix[selfMod.getPrefixOffset("make-list")]);ns.set("ninth", prefix[selfMod.getPrefixOffset("ninth")]);extNs.set("ninth", prefix[selfMod.getPrefixOffset("ninth")]);ns.set("partition", prefix[selfMod.getPrefixOffset("partition")]);extNs.set("partition", prefix[selfMod.getPrefixOffset("partition")]);ns.set("rest", prefix[selfMod.getPrefixOffset("rest")]);extNs.set("rest", prefix[selfMod.getPrefixOffset("rest")]);ns.set("second", prefix[selfMod.getPrefixOffset("second")]);extNs.set("second", prefix[selfMod.getPrefixOffset("second")]);ns.set("seventh", prefix[selfMod.getPrefixOffset("seventh")]);extNs.set("seventh", prefix[selfMod.getPrefixOffset("seventh")]);ns.set("sixth", prefix[selfMod.getPrefixOffset("sixth")]);extNs.set("sixth", prefix[selfMod.getPrefixOffset("sixth")]);ns.set("split-at", prefix[selfMod.getPrefixOffset("split-at")]);extNs.set("split-at", prefix[selfMod.getPrefixOffset("split-at")]);ns.set("split-at-right", prefix[selfMod.getPrefixOffset("split-at-right")]);extNs.set("split-at-right", prefix[selfMod.getPrefixOffset("split-at-right")]);ns.set("take", prefix[selfMod.getPrefixOffset("take")]);extNs.set("take", prefix[selfMod.getPrefixOffset("take")]);ns.set("take-right", prefix[selfMod.getPrefixOffset("take-right")]);extNs.set("take-right", prefix[selfMod.getPrefixOffset("take-right")]);ns.set("tenth", prefix[selfMod.getPrefixOffset("tenth")]);extNs.set("tenth", prefix[selfMod.getPrefixOffset("tenth")]);ns.set("third", prefix[selfMod.getPrefixOffset("third")]);extNs.set("third", prefix[selfMod.getPrefixOffset("third")]);}(M.modules["whalesong/lang/list.rkt"],M.modules["whalesong/lang/list.rkt"].getExports(),M.modules["whalesong/lang/list.rkt"].getExternalExports(),M.modules["whalesong/lang/list.rkt"].prefix));
return(M.p)(M);};

var _1436=function(M){if(--M.cbt<0){throw _1436;}
M.c.push(new RT.CallFrame(_1438,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_853,4,[M.e[M.e.length-1]],"mk-min");
M.e[M.e.length-1][48]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1426=function(M){if(--M.cbt<0){throw _1426;}
M.c.push(new RT.CallFrame(_1428,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_845,2,[M.e[M.e.length-1]],"partition");
M.e[M.e.length-1][45]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1418=function(M){if(--M.cbt<0){throw _1418;}
M.c.push(new RT.CallFrame(_1420,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_835,(RT.makeArityAtLeast(2)),[M.e[M.e.length-1]],"filter-map");
M.e[M.e.length-1][36]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1402=function(M){if(--M.cbt<0){throw _1402;}
M.c.push(new RT.CallFrame(_1404,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_820,2,[M.e[M.e.length-1]],"drop-right");
M.e[M.e.length-1][29]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1394=function(M){if(--M.cbt<0){throw _1394;}
M.c.push(new RT.CallFrame(_1396,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_815,5,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][63]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1378=function(M){if(--M.cbt<0){throw _1378;}
M.c.push(new RT.CallFrame(_1380,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=_808_c;
M.e[M.e.length-1][16]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1376=function(M){if(--M.cbt<0){throw _1376;}
M.c.push(new RT.CallFrame(_1378,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=_807_c;
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1362=function(M){if(--M.cbt<0){throw _1362;}
M.c.push(new RT.CallFrame(_1364,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_798,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][59]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1358=function(M){if(--M.cbt<0){throw _1358;}
M.c.push(new RT.CallFrame(_1360,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_796,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][58]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1350=function(M){if(--M.cbt<0){throw _1350;}
M.c.push(new RT.CallFrame(_1352,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_792,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][56]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1338=function(M){if(--M.cbt<0){throw _1338;}
M.c.push(new RT.CallFrame(_1340,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_786,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][53]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1334=function(M){if(--M.cbt<0){throw _1334;}
M.c.push(new RT.CallFrame(_1336,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_784,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][52]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1300=function(M){if(--M.cbt<0){throw _1300;}
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-1]);
M.v=M.primitives["real?"]._i(M);
M.e.pop();
if(M.v===false){return(_1302)(M);}else{M.v=RT.VOID;
return(_1303)(M);}};

var _1270=function(M){if(--M.cbt<0){throw _1270;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1234=function(M){if(--M.cbt<0){throw _1234;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1212=function(M){if(--M.cbt<0){throw _1212;}
return(_1210)(M);};

var _1190=function(M){if(--M.cbt<0){throw _1190;}
M.e[M.e.length-3]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-3]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-13];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1194,M.p));
return((M.p).label)(M);};

var _1157=function(M){if(--M.cbt<0){throw _1157;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["andmap"];
M.v=new RT.Closure(_837,1,[M.e[M.e.length-4],M.e[M.e.length-3]],"...ng/lang/list.rkt:256:18");
M.a=1;
if(M.a===0){return(_1161)(M);}else{M.e.push(M.v);
return(_1161)(M);}};

var _1145=function(M){if(--M.cbt<0){throw _1145;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1139)(M);};

var _1124=function(M){if(--M.cbt<0){throw _1124;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1126,M.p));
return((M.p).label)(M);};

var _1120=function(M){if(--M.cbt<0){throw _1120;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1073=function(M){if(--M.cbt<0){throw _1073;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_1075)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_1074)(M);}};

var _1038=function(M){if(--M.cbt<0){throw _1038;}
M.e[M.e.length-3]=M.v;
return(_1034)(M);};

var _1437=function(M){if(--M.cbt<0){throw _1437;}
M.e.length-=(M.a-1);
return(_1438)(M);};

var _1429=function(M){if(--M.cbt<0){throw _1429;}
M.e.length-=(M.a-1);
return(_1430)(M);};

var _1423=function(M){if(--M.cbt<0){throw _1423;}
M.e.length-=(M.a-1);
return(_1424)(M);};

var _1411=function(M){if(--M.cbt<0){throw _1411;}
M.e.length-=(M.a-1);
return(_1412)(M);};

var _1403=function(M){if(--M.cbt<0){throw _1403;}
M.e.length-=(M.a-1);
return(_1404)(M);};

var _1399=function(M){if(--M.cbt<0){throw _1399;}
M.e.length-=(M.a-1);
return(_1400)(M);};

var _1393=function(M){if(--M.cbt<0){throw _1393;}
M.e.length-=(M.a-1);
return(_1394)(M);};

var _1385=function(M){if(--M.cbt<0){throw _1385;}
M.e.length-=(M.a-1);
return(_1386)(M);};

var _1377=function(M){if(--M.cbt<0){throw _1377;}
M.e.length-=(M.a-1);
return(_1378)(M);};

var _1365=function(M){if(--M.cbt<0){throw _1365;}
M.e.length-=(M.a-1);
return(_1366)(M);};

var _1359=function(M){if(--M.cbt<0){throw _1359;}
M.e.length-=(M.a-1);
return(_1360)(M);};

var _1347=function(M){if(--M.cbt<0){throw _1347;}
M.e.length-=(M.a-1);
return(_1348)(M);};

var _1339=function(M){if(--M.cbt<0){throw _1339;}
M.e.length-=(M.a-1);
return(_1340)(M);};

var _1335=function(M){if(--M.cbt<0){throw _1335;}
M.e.length-=(M.a-1);
return(_1336)(M);};

var _854=function(M){if(--M.cbt<0){throw _854;}

//"lambda body for #(struct:LamPositionalName argmin whalesong/lang/list.rkt 366 0 13188 46)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][48];
M.e[M.e.length-1]=M.primitives["<"];
M.e[M.e.length-2]=sym4208;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _799=function(M){if(--M.cbt<0){throw _799;}

//"lambda body for #(struct:LamPositionalName ninth whalesong/lang/list.rkt 62 0 1306 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_939)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][59];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=9;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1319=function(M){if(M.v===false){return(_1316)(M);}else{M.v=RT.VOID;
return(_1317)(M);}};

var _1314=function(M){M.v=false;
return(_1315)(M);};

var _794=function(M){if(--M.cbt<0){throw _794;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_913)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_915)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1302=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]="procedure that returns real numbers";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-10];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1303)(M);};

var _852=function(M){if(--M.cbt<0){throw _852;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 351 4 12715 469)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-7]===RT.NULL);
if(M.v===false){return(_1297)(M);}else{M.v=M.e[M.e.length-5];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _883=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4191;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=4;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _788=function(M){if(--M.cbt<0){throw _788;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_883)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_885)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};


var _849=function(M){if(--M.cbt<0){throw _849;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:320:15 whalesong/lang/list.rkt 320 15 11488 46)"

M.unspliceRestFromStack(2,(M.a-2));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["map"];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.e[M.e.length-4]=M.e[M.e.length-10];
M.a=4;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1278,M.p));
return((M.p).label)(M);};

var _862=function(M){if(M.v===false){return(_859)(M);}else{M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _825=function(M){if(--M.cbt<0){throw _825;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:162:15 whalesong/lang/list.rkt 162 15 4764 24)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1250=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-7][68];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.v=RT.makePair(M.e[M.e.length-6],M.e[M.e.length-11]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1238=function(M){M.p=_843_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_843)(M);};


var _1231=function(M){M.v=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1220=function(M){M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym4203;
M.e[M.e.length-2]="all lists must have same size";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1210=function(M){if(M.v===false){return(_1207)(M);}else{M.v=RT.VOID;
return(_1208)(M);}};


var _1443=function(M){return(_856)(M);};

var _1434=function(M){if(--M.cbt<0){throw _1434;}
M.c.push(new RT.CallFrame(_1436,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_852,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][70]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1424=function(M){if(--M.cbt<0){throw _1424;}
M.c.push(new RT.CallFrame(_1426,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_844,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][68]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1414=function(M){if(--M.cbt<0){throw _1414;}
M.c.push(new RT.CallFrame(_1416,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_833,2,[M.e[M.e.length-1]],"add-between");
M.e[M.e.length-1][34]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1408=function(M){if(--M.cbt<0){throw _1408;}
M.c.push(new RT.CallFrame(_1410,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_825,1,[M.e[M.e.length-6]],"...ng/lang/list.rkt:162:15");
M.e[M.e.length-2]=new RT.Closure(_826,2,[M.e[M.e.length-6]],"...ng/lang/list.rkt:163:15");
M.e[M.e.length-3]=new RT.Closure(_827,3,[M.e[M.e.length-6]],"...ng/lang/list.rkt:164:15");
M.e[M.e.length-4]=new RT.Closure(_828,4,[M.e[M.e.length-6]],"...ng/lang/list.rkt:165:15");
M.e[M.e.length-5]=new RT.Closure(_829,(RT.makeArityAtLeast(1)),[M.e[M.e.length-6]],"...ng/lang/list.rkt:166:15");
M.v=new RT.Closure(_824,RT.makePair(1,RT.makePair(2,RT.makePair(3,RT.makePair(4,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))))),[M.e[M.e.length-5],M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"append*");
M.e.length-=5;
M.e[M.e.length-1][31]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1400=function(M){if(--M.cbt<0){throw _1400;}
M.c.push(new RT.CallFrame(_1402,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_818,2,[M.e[M.e.length-1]],"take-right");
M.e[M.e.length-1][28]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1390=function(M){if(--M.cbt<0){throw _1390;}
M.c.push(new RT.CallFrame(_1392,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_813,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][62]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1384=function(M){if(--M.cbt<0){throw _1384;}
M.c.push(new RT.CallFrame(_1386,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_810,2,[M.e[M.e.length-1]],"make-list");
M.e[M.e.length-1][18]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1374=function(M){if(--M.cbt<0){throw _1374;}
M.c.push(new RT.CallFrame(_1376,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_806,1,[M.e[M.e.length-1]],"rest");
M.e[M.e.length-1][14]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1368=function(M){if(--M.cbt<0){throw _1368;}
M.c.push(new RT.CallFrame(_1370,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_801,1,[M.e[M.e.length-1]],"tenth");
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1348=function(M){if(--M.cbt<0){throw _1348;}
M.c.push(new RT.CallFrame(_1350,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_791,1,[M.e[M.e.length-1]],"fifth");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1344=function(M){if(--M.cbt<0){throw _1344;}
M.c.push(new RT.CallFrame(_1346,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_789,1,[M.e[M.e.length-1]],"fourth");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1321=function(M){if(--M.cbt<0){throw _1321;}
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-1]);
M.v=M.primitives["real?"]._i(M);
M.e.pop();
if(M.v===false){return(_1323)(M);}else{M.v=RT.VOID;
return(_1324)(M);}};

var _1278=function(M){if(--M.cbt<0){throw _1278;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1240=function(M){if(--M.cbt<0){throw _1240;}
if(M.v===false){return(_1237)(M);}else{M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-6]);
return(_1238)(M);}};

var _1214=function(M){if(--M.cbt<0){throw _1214;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1208)(M);};

var _1196=function(M){if(--M.cbt<0){throw _1196;}
if(M.v===false){return(_1191)(M);}else{M.v=RT.checkedAdd1(M, M.e[M.e.length-9]);
return(_1192)(M);}};

var _1177=function(M){if(--M.cbt<0){throw _1177;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_1179)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_838_c;
M.a=2;
M.c.push(new RT.CallFrame(_1183,M.p));
return(_838)(M);}};

var _1164=function(M){if(--M.cbt<0){throw _1164;}
if(M.v===false){return(_1159)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][66];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1151=function(M){if(--M.cbt<0){throw _1151;}
return(_1149)(M);};

var _1133=function(M){if(--M.cbt<0){throw _1133;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1105=function(M){if(--M.cbt<0){throw _1105;}
M.e[M.e.length-2]=M.v;
return(_1103)(M);};

var _1055=function(M){if(--M.cbt<0){throw _1055;}
M.e[M.e.length-3]=M.v;
return(_1051)(M);};

var _1000=function(M){if(--M.cbt<0){throw _1000;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1435=function(M){if(--M.cbt<0){throw _1435;}
M.e.length-=(M.a-1);
return(_1436)(M);};

var _1427=function(M){if(--M.cbt<0){throw _1427;}
M.e.length-=(M.a-1);
return(_1428)(M);};

var _1421=function(M){if(--M.cbt<0){throw _1421;}
M.e.length-=(M.a-1);
return(_1422)(M);};

var _1417=function(M){if(--M.cbt<0){throw _1417;}
M.e.length-=(M.a-1);
return(_1418)(M);};

var _1409=function(M){if(--M.cbt<0){throw _1409;}
M.e.length-=(M.a-1);
return(_1410)(M);};

var _1397=function(M){if(--M.cbt<0){throw _1397;}
M.e.length-=(M.a-1);
return(_1398)(M);};

var _1391=function(M){if(--M.cbt<0){throw _1391;}
M.e.length-=(M.a-1);
return(_1392)(M);};

var _1383=function(M){if(--M.cbt<0){throw _1383;}
M.e.length-=(M.a-1);
return(_1384)(M);};

var _1375=function(M){if(--M.cbt<0){throw _1375;}
M.e.length-=(M.a-1);
return(_1376)(M);};

var _1363=function(M){if(--M.cbt<0){throw _1363;}
M.e.length-=(M.a-1);
return(_1364)(M);};

var _1357=function(M){if(--M.cbt<0){throw _1357;}
M.e.length-=(M.a-1);
return(_1358)(M);};

var _1351=function(M){if(--M.cbt<0){throw _1351;}
M.e.length-=(M.a-1);
return(_1352)(M);};

var _1345=function(M){if(--M.cbt<0){throw _1345;}
M.e.length-=(M.a-1);
return(_1346)(M);};

var _1333=function(M){if(--M.cbt<0){throw _1333;}
M.e.length-=(M.a-1);
return(_1334)(M);};

var _1332=function(M){M.modules["whalesong/lang/list.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("first")||M.primitives["first"],M.primitives["raise-type-error"],M.params.currentNamespace.get("second")||M.primitives["second"],M.primitives["format"],M.params.currentNamespace.get("third")||M.primitives["third"],M.params.currentNamespace.get("fourth")||M.primitives["fourth"],M.params.currentNamespace.get("fifth")||M.primitives["fifth"],M.params.currentNamespace.get("sixth")||M.primitives["sixth"],M.params.currentNamespace.get("seventh")||M.primitives["seventh"],M.params.currentNamespace.get("eighth")||M.primitives["eighth"],M.params.currentNamespace.get("ninth")||M.primitives["ninth"],M.params.currentNamespace.get("tenth")||M.primitives["tenth"],M.params.currentNamespace.get("last-pair")||M.primitives["last-pair"],M.params.currentNamespace.get("last")||M.primitives["last"],M.params.currentNamespace.get("rest")||M.primitives["rest"],M.params.currentNamespace.get("cons?")||M.primitives["cons?"],M.params.currentNamespace.get("empty?")||M.primitives["empty?"],M.params.currentNamespace.get("empty")||M.primitives["empty"],M.params.currentNamespace.get("make-list")||M.primitives["make-list"],M.primitives["exact-nonnegative-integer?"],M.primitives["zero?"],M.params.currentNamespace.get("drop*")||M.primitives["drop*"],M.params.currentNamespace.get("too-large")||M.primitives["too-large"],M.primitives["raise-mismatch-error"],M.params.currentNamespace.get("take")||M.primitives["take"],M.params.currentNamespace.get("split-at")||M.primitives["split-at"],M.primitives["reverse"],M.params.currentNamespace.get("drop")||M.primitives["drop"],M.params.currentNamespace.get("take-right")||M.primitives["take-right"],M.params.currentNamespace.get("drop-right")||M.primitives["drop-right"],M.params.currentNamespace.get("split-at-right")||M.primitives["split-at-right"],M.params.currentNamespace.get("append*")||M.primitives["append*"],M.primitives["append"],M.params.currentNamespace.get("flatten")||M.primitives["flatten"],M.params.currentNamespace.get("add-between")||M.primitives["add-between"],M.primitives["list*"],M.params.currentNamespace.get("filter-map")||M.primitives["filter-map"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["length"],M.primitives["andmap"],M.primitives["ormap"],M.primitives["map"],M.primitives["error"],M.params.currentNamespace.get("count")||M.primitives["count"],M.params.currentNamespace.get("partition")||M.primitives["partition"],M.params.currentNamespace.get("append-map")||M.primitives["append-map"],M.params.currentNamespace.get("filter-not")||M.primitives["filter-not"],M.params.currentNamespace.get("mk-min")||M.primitives["mk-min"],M.primitives["real?"],M.params.currentNamespace.get("argmin")||M.primitives["argmin"],M.params.currentNamespace.get("argmax")||M.primitives["argmax"],false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);M.e[M.e.length-1].names=["first","raise-type-error","second","format","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","last-pair","last","rest","cons?","empty?","empty","make-list","exact-nonnegative-integer?","zero?","drop*","too-large","raise-mismatch-error","take","split-at","reverse","drop","take-right","drop-right","split-at-right","append*","append","flatten","add-between","list*","filter-map","procedure?","procedure-arity-includes?","length","andmap","ormap","map","error","count","partition","append-map","filter-not","mk-min","real?","argmin","argmax",false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
M.modules["whalesong/lang/list.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_1334,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_783,1,[M.e[M.e.length-1]],"first");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1318=function(M){M.v=false;
return(_1319)(M);};

var _796=function(M){if(--M.cbt<0){throw _796;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_923)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_925)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};



var _791=function(M){if(--M.cbt<0){throw _791;}

//"lambda body for #(struct:LamPositionalName fifth whalesong/lang/list.rkt 58 0 1198 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_899)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=5;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _851=function(M){if(--M.cbt<0){throw _851;}

//"lambda body for #(struct:LamPositionalName filter-not whalesong/lang/list.rkt 324 0 11634 500)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1291)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1292)(M);}};



var _848=function(M){if(--M.cbt<0){throw _848;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:319:15 whalesong/lang/list.rkt 319 15 11432 40)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1274,M.p));
return((M.p).label)(M);};

var _846=function(M){if(--M.cbt<0){throw _846;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1266)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_847)(M);}};

var _845=function(M){if(--M.cbt<0){throw _845;}

//"lambda body for #(struct:LamPositionalName partition whalesong/lang/list.rkt 307 0 10913 435)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1260)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1261)(M);}};


var _844=function(M){if(--M.cbt<0){throw _844;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 311 2 11151 196)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1244)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["values"];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};


var _843=function(M){if(--M.cbt<0){throw _843;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 289 4 10141 90)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_1235)(M);}else{M.v=M.e[M.e.length-3];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};



var _841=function(M){if(--M.cbt<0){throw _841;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:279:12 whalesong/lang/list.rkt 279 12 9744 36)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_1231)(M);}else{M.v=false;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};







var _838=function(M){if(--M.cbt<0){throw _838;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 265 4 9222 140)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_1174)(M);}else{M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};



var _836=function(M){if(--M.cbt<0){throw _836;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:253:12 whalesong/lang/list.rkt 253 12 8755 36)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_1170)(M);}else{M.v=false;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};







var _832=function(M){if(--M.cbt<0){throw _832;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 181 20 5502 147)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1109)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _828=function(M){if(--M.cbt<0){throw _828;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:165:15 whalesong/lang/list.rkt 165 15 4925 42)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _826=function(M){if(--M.cbt<0){throw _826;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:163:15 whalesong/lang/list.rkt 163 15 4827 30)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};



var _822=function(M){if(--M.cbt<0){throw _822;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 153 2 4424 306)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_1064)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][64];
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};



var _820=function(M){if(--M.cbt<0){throw _820;}

//"lambda body for #(struct:LamPositionalName drop-right whalesong/lang/list.rkt 140 0 3890 386)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_1047)(M);}else{M.v=RT.VOID;
return(_1048)(M);}};




var _817=function(M){if(--M.cbt<0){throw _817;}

//"lambda body for #(struct:LamPositionalName drop whalesong/lang/list.rkt 122 0 3176 253)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_1021)(M);}else{M.v=RT.VOID;
return(_1022)(M);}};

var _815=function(M){if(--M.cbt<0){throw _815;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 117 2 2958 215)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-5]);
if(M.v===false){return(_1007)(M);}else{M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["values"];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-6];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _814=function(M){if(--M.cbt<0){throw _814;}

//"lambda body for #(struct:LamPositionalName take whalesong/lang/list.rkt 106 0 2498 312)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_1003)(M);}else{M.v=RT.VOID;
return(_1004)(M);}};

var _813=function(M){if(--M.cbt<0){throw _813;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 109 2 2636 173)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-5]);
if(M.v===false){return(_995)(M);}else{M.v=RT.NULL;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _812=function(M){if(--M.cbt<0){throw _812;}

//"lambda body for #(struct:LamPositionalName too-large whalesong/lang/list.rkt 99 0 2322 174)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]="index ~e too large for list~a: ";
M.e[M.e.length-2]=M.e[M.e.length-10];
M.v=RT.isList(M.e[M.e.length-9]);
if(M.v===false){return(_993)(M);}else{M.e[M.e.length-3]="";
return(_994)(M);}};

var _810=function(M){if(--M.cbt<0){throw _810;}

//"lambda body for #(struct:LamPositionalName make-list whalesong/lang/list.rkt 90 0 1943 208)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_983)(M);}else{M.v=RT.VOID;
return(_984)(M);}};

var _807=function(M){if(--M.cbt<0){throw _807;}

//"lambda body for #(struct:LamPositionalName cons? whalesong/lang/list.rkt 86 14 1860 22)"

M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _806=function(M){if(--M.cbt<0){throw _806;}

//"lambda body for #(struct:LamPositionalName rest whalesong/lang/list.rkt 81 0 1734 110)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_977)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_978)(M);}};

var _805=function(M){if(--M.cbt<0){throw _805;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 75 4 1590 92)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_970)(M);}else{M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_805_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_805)(M);}};

var _804=function(M){if(--M.cbt<0){throw _804;}

//"lambda body for #(struct:LamPositionalName last whalesong/lang/list.rkt 73 0 1537 195)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_965)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_966)(M);}};

var _803=function(M){if(--M.cbt<0){throw _803;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 67 4 1404 86)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_958)(M);}else{M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_803_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_803)(M);}};

var _801=function(M){if(--M.cbt<0){throw _801;}

//"lambda body for #(struct:LamPositionalName tenth whalesong/lang/list.rkt 63 0 1333 27)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_949)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][60];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=10;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _800=function(M){if(--M.cbt<0){throw _800;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_943)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_945)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _798=function(M){if(--M.cbt<0){throw _798;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_933)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_935)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _797=function(M){if(--M.cbt<0){throw _797;}

//"lambda body for #(struct:LamPositionalName eighth whalesong/lang/list.rkt 61 0 1279 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_929)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][58];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=8;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _795=function(M){if(--M.cbt<0){throw _795;}

//"lambda body for #(struct:LamPositionalName seventh whalesong/lang/list.rkt 60 0 1252 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_919)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][57];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=7;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _793=function(M){if(--M.cbt<0){throw _793;}

//"lambda body for #(struct:LamPositionalName sixth whalesong/lang/list.rkt 59 0 1225 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_909)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][56];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=6;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _792=function(M){if(--M.cbt<0){throw _792;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_903)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_905)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _790=function(M){if(--M.cbt<0){throw _790;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_893)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_895)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _789=function(M){if(--M.cbt<0){throw _789;}

//"lambda body for #(struct:LamPositionalName fourth whalesong/lang/list.rkt 57 0 1171 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_889)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][54];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=4;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _787=function(M){if(--M.cbt<0){throw _787;}

//"lambda body for #(struct:LamPositionalName third whalesong/lang/list.rkt 56 0 1144 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_879)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=3;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _785=function(M){if(--M.cbt<0){throw _785;}

//"lambda body for #(struct:LamPositionalName second whalesong/lang/list.rkt 55 0 1117 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_869)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=2;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _784=function(M){if(--M.cbt<0){throw _784;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_863)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_865)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

_1334.mvr=_1333;
_1336.mvr=_1335;
_1338.mvr=_1337;
_1340.mvr=_1339;
_1342.mvr=_1341;
_1344.mvr=_1343;
_1346.mvr=_1345;
_1348.mvr=_1347;
_1350.mvr=_1349;
_1352.mvr=_1351;
_1354.mvr=_1353;
_1356.mvr=_1355;
_1358.mvr=_1357;
_1360.mvr=_1359;
_1362.mvr=_1361;
_1364.mvr=_1363;
_1366.mvr=_1365;
_1368.mvr=_1367;
_1370.mvr=_1369;
_1372.mvr=_1371;
_1374.mvr=_1373;
_1376.mvr=_1375;
_1378.mvr=_1377;
_1380.mvr=_1379;
_1382.mvr=_1381;
_1384.mvr=_1383;
_1386.mvr=_1385;
_1388.mvr=_1387;
_1390.mvr=_1389;
_1392.mvr=_1391;
_1394.mvr=_1393;
_1396.mvr=_1395;
_1398.mvr=_1397;
_1400.mvr=_1399;
_1402.mvr=_1401;
_1404.mvr=_1403;
_1406.mvr=_1405;
_1408.mvr=_1407;
_1410.mvr=_1409;
_1412.mvr=_1411;
_1414.mvr=_1413;
_1416.mvr=_1415;
_1418.mvr=_1417;
_1420.mvr=_1419;
_1422.mvr=_1421;
_1424.mvr=_1423;
_1426.mvr=_1425;
_1428.mvr=_1427;
_1430.mvr=_1429;
_1432.mvr=_1431;
_1434.mvr=_1433;
_1436.mvr=_1435;
_1438.mvr=_1437;
_1440.mvr=_1439;
_1442.mvr=_1441;
_858.mvr=_857;
var sym4202=RT.makeSymbol("partition");
var sym4200=RT.makeSymbol("fifth");
var sym4204=RT.makeSymbol("last-pair");
var sym4198=RT.makeSymbol("make-list");
var sym4199=RT.makeSymbol("sixth");
var sym4203=RT.makeSymbol("count");
var sym4196=RT.makeSymbol("take-right");
var sym4190=RT.makeSymbol("seventh");
var sym4188=RT.makeSymbol("tenth");
var sym4195=RT.makeSymbol("drop-right");
var sym4191=RT.makeSymbol("fourth");
var sym4189=RT.makeSymbol("eighth");
var sym4186=RT.makeSymbol("rest");
var sym4207=RT.makeSymbol("first");
var sym4205=RT.makeSymbol("ninth");
var sym4192=RT.makeSymbol("third");
var sym4206=RT.makeSymbol("argmax");
var sym4193=RT.makeSymbol("second");
var sym4208=RT.makeSymbol("argmin");
var sym4197=RT.makeSymbol("take");
var sym4185=RT.makeSymbol("split-at");
var sym4183=RT.makeSymbol("split-at-right");
var sym4184=RT.makeSymbol("drop");
var sym4194=RT.makeSymbol("add-between");
var sym4182=RT.makeSymbol("filter-map");
var sym4201=RT.makeSymbol("filter-not");
var sym4187=RT.makeSymbol("last");var _805_c=new RT.Closure(_805,2,void(0),"loop");
var _838_c=new RT.Closure(_838,2,void(0),"loop");
var _821_c=new RT.Closure(_821,2,void(0),"loop");
var _830_c=new RT.Closure(_830,1,void(0),"flatten");
var _836_c=new RT.Closure(_836,1,void(0),"...ng/lang/list.rkt:253:12");
var _819_c=new RT.Closure(_819,2,void(0),"loop");
var _807_c=new RT.Closure(_807,1,void(0),"cons?");
var _843_c=new RT.Closure(_843,3,void(0),"loop");
var _803_c=new RT.Closure(_803,2,void(0),"loop");
var _841_c=new RT.Closure(_841,1,void(0),"...ng/lang/list.rkt:279:12");
var _831_c=new RT.Closure(_831,2,void(0),"loop");
var _808_c=new RT.Closure(_808,1,void(0),"empty?");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1443(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/list.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/list.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/list.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2199=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2195=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1715=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym4273;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2162=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym4274;
M.e[M.e.length-3]="procedure";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2165,M.p));
return((M.p).label)(M);};

var _1696=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_1741)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2119=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2106=function(M){M.e[M.e.length-2]=new RT.Closure(_1505,(RT.makeArityAtLeast(0)),[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:388:34");
return(_2101)(M);};

var _1645=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_1690)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2093=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1630=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4275;
M.e[M.e.length-2]="not a proper list: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1623=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][45];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1624=function(M){M.v=false;
return(_1625)(M);};

var _2062=function(M){M.v=false;
return(_2063)(M);};

var _1573=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_1452_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_1452)(M);};

var _1570=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1571)(M);};

var _1561=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym4276;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1547=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1552,M.p));
return((M.p).label)(M);};

var _2198=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1525,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_1526,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_1527,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_1524,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_2199)(M);};

var _2194=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1520,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_1521,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_1522,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_1519,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_2195)(M);};

var _1741=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym4273;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1717=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1722,M.p));
return((M.p).label)(M);};

var _1703=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1708,M.p));
return((M.p).label)(M);};

var _2148=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_1510)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_1512)(M);}};

var _2126=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1652=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1657,M.p));
return((M.p).label)(M);};

var _2104=function(M){M.e[M.e.length-2]=new RT.Closure(_1503,(RT.makeArityAtLeast(0)),[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:385:34");
return(_2101)(M);};

var _1640=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][46];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1642=function(M){if(M.v===false){return(_1639)(M);}else{M.v=RT.VOID;
return(_1640)(M);}};

var _1628=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_1630)(M);}else{M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1636,M.p));
return((M.p).label)(M);}};

var _1622=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4277;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1623)(M);};

var _2067=function(M){M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2070,M.p));
return((M.p).label)(M);};

var _2061=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-3]);
M.a=1;
M.v=M.primitives["make-string"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][57];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=0;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2059=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2062)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2063)(M);}};

var _1598=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1455)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1456)(M);}};

var _1583=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-7]);
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1591,M.p));
return((M.p).label)(M);};

var _1572=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1573)(M);};

var _2024=function(M){M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1560=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4276;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1561)(M);};

var _2010=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_1488_c;
M.a=3;
M.c.push(new RT.CallFrame(_2014,M.p));
return(_1488)(M);};

var _1549=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_1445_c;
M.a=3;
M.c.push(new RT.CallFrame(_1555,M.p));
return(_1445)(M);};

var _1543=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_1445_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_1445)(M);};

var _1768=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1773,M.p));
return((M.p).label)(M);};

var _1766=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym4278;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1752=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym4278;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1747=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_1792)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1727=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][48];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2168=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym4274;
M.e[M.e.length-3]="procedure (arity 1)";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2171,M.p));
return((M.p).label)(M);};

var _2163=function(M){M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_2166)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2168)(M);}else{M.v=RT.VOID;
return(_2169)(M);}}};

var _2147=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2148)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1511)(M);}};

var _2132=function(M){M.e.push(void(0));
M.e.push(void(0));
M.e[M.e.length-1]=RT.makePair(M.e[M.e.length-4],M.e[M.e.length-5]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-4][60];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-3]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1664=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym4279;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1659=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_1684)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2102=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2106)(M);}else{M.e[M.e.length-2]=new RT.Closure(_1504,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:387:34");
return(_2101)(M);}};

var _1639=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4275;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1640)(M);};

var _1641=function(M){M.v=false;
return(_1642)(M);};

var _2076=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][58];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1625=function(M){if(M.v===false){return(_1622)(M);}else{M.v=RT.VOID;
return(_1623)(M);}};

var _1616=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][45];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2060=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4280;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2061)(M);};

var _2058=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4280;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2059)(M);};

var _2052=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-8];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2055,M.p));
return((M.p).label)(M);};

var _2046=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-3]);
M.a=1;
M.v=M.primitives["make-vector"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][56];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=0;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2044=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2047)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2048)(M);}};

var _1577=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-4]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-7];
M.p=_1453_c;
M.a=5;
M.e.splice(M.e.length-9,4);
M.c[M.c.length-1].p=M.p;
return(_1453)(M);};

var _1571=function(M){M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_1572)(M);}else{M.v=M.e[M.e.length-2];
M.v=RT.VOID;
return(_1573)(M);}};

var _2023=function(M){M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-7];
return(_2024)(M);};

var _1563=function(M){if(M.v===false){return(_1560)(M);}else{M.v=RT.VOID;
return(_1561)(M);}};

var _1553=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2003=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1487)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1489)(M);}};

var _1542=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1543)(M);};

var _1539=function(M){M.c.push(new RT.CallFrame(_1541,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/list.rkt"]=function(){return new RT.ModuleRecord("list",_2294);}
return(_2293)(M);};

var _1975=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1482)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1484)(M);}};

var _1952=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="given procedure does not accept 2 arguments: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2101=function(M){M.e.pop();
M.v=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1942=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]="procedure";
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=M.e[M.e.length-11];
M.e[M.e.length-6]=M.e[M.e.length-12];
M.e[M.e.length-7]=M.e[M.e.length-13];
M.e[M.e.length-8]=M.e[M.e.length-14];
M.a=8;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1945,M.p));
return((M.p).label)(M);};

var _1933=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e[M.e.length-1]=M.primitives["length"];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1939,M.p));
return((M.p).label)(M);};

var _1932=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e[M.e.length-3]="list";
M.e[M.e.length-4]=M.e[M.e.length-16];
M.e[M.e.length-5]=M.e[M.e.length-12];
M.e[M.e.length-6]=M.e[M.e.length-13];
M.e[M.e.length-7]=M.e[M.e.length-14];
M.e[M.e.length-8]=M.e[M.e.length-15];
M.a=8;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1935,M.p));
return((M.p).label)(M);};

var _2387=function(M){if(--M.cbt<0){throw _2387;}
M.c.push(new RT.CallFrame(_2389,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0));
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1530,1,[M.e[M.e.length-6]],"...private/list.rkt:394:12");
M.e[M.e.length-2]=new RT.Closure(_1531,2,[M.e[M.e.length-6]],"...private/list.rkt:396:12");
M.e[M.e.length-3]=_1532_c;
M.e[M.e.length-4]=new RT.Closure(_1533,(RT.makeArityAtLeast(1)),[M.e[M.e.length-6]],"...private/list.rkt:404:12");
M.e[M.e.length-5]=new RT.Closure(_1529,RT.makePair(1,RT.makePair(2,RT.makePair(0,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL)))),[M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"compose1");
M.e.length-=4;
M.e.push(void(0));
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1535,1,[M.e[M.e.length-7]],"...private/list.rkt:394:12");
M.e[M.e.length-2]=new RT.Closure(_1536,2,[M.e[M.e.length-7]],"...private/list.rkt:396:12");
M.e[M.e.length-3]=_1537_c;
M.e[M.e.length-4]=new RT.Closure(_1538,(RT.makeArityAtLeast(1)),[M.e[M.e.length-7]],"...private/list.rkt:404:12");
M.e[M.e.length-5]=new RT.Closure(_1534,RT.makePair(1,RT.makePair(2,RT.makePair(0,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL)))),[M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"compose");
M.e.length-=4;
M.e.push(void(0),void(0));
M.p=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-3];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2393,M.p));
return((M.p).label)(M);};

var _1761=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_1786)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1754=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1759,M.p));
return((M.p).label)(M);};

var _2191=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_2198)(M);}else{M.e[M.e.length-1]=new RT.Closure(_1523,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_2199)(M);}};

var _2174=function(M){M.v=M.e[M.e.length-6];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2166=function(M){M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][62];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-11]);
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_1514_c;
M.a=2;
M.c.push(new RT.CallFrame(_2176,M.p));
return(_1514)(M);};

var _1710=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_1735)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1701=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym4273;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1690=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym4279;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2141=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2140=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1510,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_1511,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_1512,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_1509,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_2141)(M);};

var _1666=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1671,M.p));
return((M.p).label)(M);};

var _2213=function(M){if(--M.cbt<0){throw _2213;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1650=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym4279;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2099=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][60];
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2102)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2104)(M);}else{M.e[M.e.length-2]=new RT.Closure(_1502,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:384:34");
return(_2101)(M);}}};

var _2084=function(M){M.e[M.e.length-2]=new RT.Closure(_1500,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:372:28");
return(_2083)(M);};

var _2075=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4281;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2076)(M);};

var _2077=function(M){M.v=false;
return(_2078)(M);};


var _2063=function(M){if(M.v===false){return(_2060)(M);}else{M.v=RT.VOID;
return(_2061)(M);}};

var _1603=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym4282;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1604=function(M){M.v=false;
return(_1605)(M);};

var _2045=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4283;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2046)(M);};

var _2043=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4283;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2044)(M);};

var _2034=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=RT.NULL;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2030=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2033)(M);}else{M.v=RT.VOID;
return(_2034)(M);}};


var _2021=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-6]);
M.e.push(M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2026,M.p));
return((M.p).label)(M);};

var _1556=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1447)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1448)(M);}};

var _2005=function(M){if(--M.cbt<0){throw _2005;}
M.e.length-=(M.a-1);
return(_2006)(M);};

var _1993=function(M){M.v=M.e[M.e.length-3];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2391=function(M){M.e.splice(M.e.length-2,1);
M.e.splice(M.e.length-2,1);
M.e[M.e.length-2][42]=M.v;
M.e[M.e.length-2][43]=M.e[M.e.length-1];
M.e.pop();
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1982=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-8]);
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1985,M.p));
return((M.p).label)(M);};

var _2248=function(M){if(--M.cbt<0){throw _2248;}
if(M.a===0){return(_2245)(M);}else{M.e.push(M.v);
return(_2245)(M);}};

var _1965=function(M){M.v=M.e[M.e.length-3];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1959=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(void(0),void(0));
M.e[M.e.length-1]="given procedure does not accept ~a arguments: ";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-14];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1964,M.p));
return((M.p).label)(M);};

var _1950=function(M){M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1955,M.p));
return((M.p).label)(M);};

var _1947=function(M){M.v=(M.e[M.e.length-6]===RT.NULL);
if(M.v===false){return(_1950)(M);}else{M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1952)(M);}else{M.v=RT.VOID;
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2083=function(M){M.e.pop();
M.v=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1936=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]="given list does not have the same size as the first list: ";
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=3;
return(_1937)(M);};

var _1930=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-8]);
M.v=RT.isList(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_1932)(M);}else{M.v=RT.VOID;
return(_1933)(M);}};

var _1915=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][51];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1910=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym4284;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1881=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym4284;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1859=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_1910)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1854=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][50];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1855=function(M){M.v=false;
return(_1856)(M);};

var _2263=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2264)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1531)(M);}};

var _2251=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym4285;
M.e[M.e.length-3]="procedure";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2254,M.p));
return((M.p).label)(M);};

var _2238=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+4),4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1796=function(M){M.v=(M.e[M.e.length-5]===RT.NULL);
if(M.v===false){return(_1845)(M);}else{M.v=false;
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2385=function(M){if(--M.cbt<0){throw _2385;}
M.c.push(new RT.CallFrame(_2387,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1528,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][65]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2379=function(M){if(--M.cbt<0){throw _2379;}
M.c.push(new RT.CallFrame(_2381,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1507,2,[M.e[M.e.length-1]],"simple-compose");
M.e[M.e.length-1][62]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2371=function(M){if(--M.cbt<0){throw _2371;}
M.c.push(new RT.CallFrame(_2373,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1497,2,[M.e[M.e.length-1]],"build-list");
M.e[M.e.length-1][40]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2363=function(M){if(--M.cbt<0){throw _2363;}
M.c.push(new RT.CallFrame(_2365,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1493,2,[M.e[M.e.length-1]],"build-vector");
M.e[M.e.length-1][33]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2182=function(M){M.e.push(void(0),void(0),void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2187,M.p));
return((M.p).label)(M);};

var _2347=function(M){if(--M.cbt<0){throw _2347;}
M.c.push(new RT.CallFrame(_2349,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1479,5,[M.e[M.e.length-1]],"check-fold");
M.e[M.e.length-1][25]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2169=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][63];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-4]=M.v;
M.e[M.e.length-5]=RT.checkedAdd1(M, M.e[M.e.length-12]);
M.v=RT.makePair(M.e[M.e.length-10],M.e[M.e.length-13]);
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-13,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2331=function(M){if(--M.cbt<0){throw _2331;}
M.c.push(new RT.CallFrame(_2333,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1468,2,[M.e[M.e.length-1]],"assv");
M.e[M.e.length-1][19]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2323=function(M){if(--M.cbt<0){throw _2323;}
M.c.push(new RT.CallFrame(_2325,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1464,3,[M.e[M.e.length-1]],"bad-item");
M.e[M.e.length-1][17]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2315=function(M){if(--M.cbt<0){throw _2315;}
M.c.push(new RT.CallFrame(_2317,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1460,2,[M.e[M.e.length-1]],"memf");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2307=function(M){if(--M.cbt<0){throw _2307;}
M.c.push(new RT.CallFrame(_2309,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1455,2,[M.e[M.e.length-3]],"...private/list.rkt:98:4");
M.e[M.e.length-2]=new RT.Closure(_1456,3,[M.e[M.e.length-3]],"...private/list.rkt:99:4");
M.v=new RT.Closure(_1454,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"remove*");
M.e.length-=2;
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1676=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][47];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2247=function(M){if(--M.cbt<0){throw _2247;}
M.a=1;
return(_2248)(M);};

var _2209=function(M){if(--M.cbt<0){throw _2209;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2187=function(M){if(--M.cbt<0){throw _2187;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_1516_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_1516)(M);};

var _2159=function(M){if(--M.cbt<0){throw _2159;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2081=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][59];
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2084)(M);}else{M.e[M.e.length-2]=new RT.Closure(_1499,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:371:28");
return(_2083)(M);}};

var _2078=function(M){if(M.v===false){return(_2075)(M);}else{M.v=RT.VOID;
return(_2076)(M);}};

var _2074=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2077)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2078)(M);}};

var _2014=function(M){if(--M.cbt<0){throw _2014;}
return(_2012)(M);};

var _1614=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4277;
M.e[M.e.length-2]="not a proper list: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1602=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4282;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1603)(M);};


var _2048=function(M){if(M.v===false){return(_2045)(M);}else{M.v=RT.VOID;
return(_2046)(M);}};

var _1585=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2033=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4286;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2034)(M);};

var _2029=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4286;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2030)(M);};

var _1824=function(M){if(--M.cbt<0){throw _1824;}
if(M.v===false){return(_1819)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2012=function(M){M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _1757=function(M){if(--M.cbt<0){throw _1757;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1754)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _1989=function(M){if(--M.cbt<0){throw _1989;}
M.e.length-=(M.a-1);
return(_1990)(M);};

var _1977=function(M){if(--M.cbt<0){throw _1977;}
M.e.length-=(M.a-1);
return(_1978)(M);};


var _2392=function(M){if(--M.cbt<0){throw _2392;}
if((M.a-2)===0){return(_2391)(M);}else{RT.si_context_expected(2)(M);
}};

var _2388=function(M){if(--M.cbt<0){throw _2388;}
M.e.length-=(M.a-1);
return(_2389)(M);};

var _2380=function(M){if(--M.cbt<0){throw _2380;}
M.e.length-=(M.a-1);
return(_2381)(M);};

var _1946=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]="list";
M.e[M.e.length-4]=2;
M.e[M.e.length-5]=M.e[M.e.length-11];
M.e[M.e.length-6]=M.e[M.e.length-12];
M.e[M.e.length-7]=M.e[M.e.length-13];
M.e[M.e.length-8]=M.e[M.e.length-14];
M.a=8;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1949,M.p));
return((M.p).label)(M);};

var _1937=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-7]=M.e[M.e.length-8][52];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.e.push(M.e[M.e.length-14]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-6]=M.v;
M.v=RT.checkedAdd1(M, M.e[M.e.length-15]);
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-15,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2356=function(M){if(--M.cbt<0){throw _2356;}
M.e.length-=(M.a-1);
return(_2357)(M);};

var _1927=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1923=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-3]);
M.v=RT.checkedCar(M, M.e[M.e.length-6]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1926,M.p));
return((M.p).label)(M);};

var _1914=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4284;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1915)(M);};

var _1917=function(M){if(M.v===false){return(_1914)(M);}else{M.v=RT.VOID;
return(_1915)(M);}};

var _1883=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1891,M.p));
return((M.p).label)(M);};

var _2293=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2288=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][64];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2281=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_1535)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_1538)(M);}};

var _1853=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4278;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1854)(M);};

var _1849=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1472)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1473)(M);}};

var _2255=function(M){M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][64];
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-5][61];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-11]);
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2260,M.p));
return((M.p).label)(M);};

var _1812=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_1839)(M);}else{M.v=false;
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2228=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_1525)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_1527)(M);}};

var _2221=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2383=function(M){if(--M.cbt<0){throw _2383;}
M.c.push(new RT.CallFrame(_2385,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1517,2,[M.e[M.e.length-1]],"simple-compose");
M.e[M.e.length-1][64]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2377=function(M){if(--M.cbt<0){throw _2377;}
M.c.push(new RT.CallFrame(_2379,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1506,2,[M.e[M.e.length-1]],"pipeline*");
M.e[M.e.length-1][61]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2369=function(M){if(--M.cbt<0){throw _2369;}
M.c.push(new RT.CallFrame(_2371,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1496,3,[M.e[M.e.length-1]],"recr");
M.e[M.e.length-1][58]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2361=function(M){if(--M.cbt<0){throw _2361;}
M.c.push(new RT.CallFrame(_2363,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1492,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][56]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2355=function(M){if(--M.cbt<0){throw _2355;}
M.c.push(new RT.CallFrame(_2357,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1487,3,[M.e[M.e.length-3]],"...private/list.rkt:252:4");
M.e[M.e.length-2]=new RT.Closure(_1489,(RT.makeArityAtLeast(3)),[M.e[M.e.length-3]],"...private/list.rkt:258:4");
M.v=new RT.Closure(_1486,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(3)),RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"foldr");
M.e.length-=2;
M.e[M.e.length-1][30]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2345=function(M){if(--M.cbt<0){throw _2345;}
M.c.push(new RT.CallFrame(_2347,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1478,7,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][52]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2339=function(M){if(--M.cbt<0){throw _2339;}
M.c.push(new RT.CallFrame(_2341,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1474,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][51]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2329=function(M){if(--M.cbt<0){throw _2329;}
M.c.push(new RT.CallFrame(_2331,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1467,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][48]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2321=function(M){if(--M.cbt<0){throw _2321;}
M.c.push(new RT.CallFrame(_2323,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1463,2,[M.e[M.e.length-1]],"bad-list");
M.e[M.e.length-1][16]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2313=function(M){if(--M.cbt<0){throw _2313;}
M.c.push(new RT.CallFrame(_2315,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1459,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][45]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2305=function(M){if(--M.cbt<0){throw _2305;}
M.c.push(new RT.CallFrame(_2307,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1451,4,[M.e[M.e.length-1]],"do-remove*");
M.e[M.e.length-1][9]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2299=function(M){if(--M.cbt<0){throw _2299;}
M.c.push(new RT.CallFrame(_2301,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1447,2,[M.e[M.e.length-3]],"...private/list.rkt:68:4");
M.e[M.e.length-2]=new RT.Closure(_1448,3,[M.e[M.e.length-3]],"...private/list.rkt:69:4");
M.v=new RT.Closure(_1446,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"remove");
M.e.length-=2;
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2240=function(M){if(--M.cbt<0){throw _2240;}
M.a=1;
return(_2241)(M);};

var _2202=function(M){if(--M.cbt<0){throw _2202;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2176=function(M){if(--M.cbt<0){throw _2176;}
M.e[M.e.length-1]=M.v;
return(_2174)(M);};

var _2155=function(M){if(--M.cbt<0){throw _2155;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2128=function(M){if(--M.cbt<0){throw _2128;}
M.a=1;
return(_2129)(M);};

var _1633=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-5][46];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2073=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4281;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2074)(M);};

var _2006=function(M){if(--M.cbt<0){throw _2006;}
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_1488_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_1488)(M);};

var _1612=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_1614)(M);}else{M.e.push(M.e[M.e.length-2]);
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1619,M.p));
return((M.p).label)(M);}};

var _1605=function(M){if(M.v===false){return(_1602)(M);}else{M.v=RT.VOID;
return(_1603)(M);}};

var _1962=function(M){if(--M.cbt<0){throw _1962;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd(M, 2,M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1959)(M);}else{M.v=RT.VOID;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2047=function(M){M.v=false;
return(_2048)(M);};


var _2037=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-8];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2040,M.p));
return((M.p).label)(M);};

var _2032=function(M){if(M.v===false){return(_2029)(M);}else{M.v=RT.VOID;
return(_2030)(M);}};

var _1449=function(M){if(--M.cbt<0){throw _1449;}

//"lambda body for #(struct:LamPositionalName remq whalesong/lang/private/list.rkt 75 0 2227 59)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym4287;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eq?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2017=function(M){if(--M.cbt<0){throw _2017;}
M.e.length-=(M.a-1);
return(_2018)(M);};

var _1771=function(M){if(--M.cbt<0){throw _1771;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1768)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};




var _1648=function(M){if(--M.cbt<0){throw _1648;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1650)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1655,M.p));
return((M.p).label)(M);}};

var _1587=function(M){if(--M.cbt<0){throw _1587;}
M.e[M.e.length-2]=M.v;
return(_1585)(M);};

var _2234=function(M){if(--M.cbt<0){throw _2234;}
if(M.a===0){return(_2231)(M);}else{M.e.push(M.v);
return(_2231)(M);}};

var _2386=function(M){if(--M.cbt<0){throw _2386;}
M.e.length-=(M.a-1);
return(_2387)(M);};

var _2378=function(M){if(--M.cbt<0){throw _2378;}
M.e.length-=(M.a-1);
return(_2379)(M);};

var _2372=function(M){if(--M.cbt<0){throw _2372;}
M.e.length-=(M.a-1);
return(_2373)(M);};

var _1943=function(M){M.v=RT.isList(M.e[M.e.length-5]);
if(M.v===false){return(_1946)(M);}else{M.v=RT.VOID;
return(_1947)(M);}};

var _2354=function(M){if(--M.cbt<0){throw _2354;}
M.e.length-=(M.a-1);
return(_2355)(M);};

var _2348=function(M){if(--M.cbt<0){throw _2348;}
M.e.length-=(M.a-1);
return(_2349)(M);};

var _2340=function(M){if(--M.cbt<0){throw _2340;}
M.e.length-=(M.a-1);
return(_2341)(M);};

var _2332=function(M){if(--M.cbt<0){throw _2332;}
M.e.length-=(M.a-1);
return(_2333)(M);};

var _1916=function(M){M.v=false;
return(_1917)(M);};

var _1896=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][51];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2300=function(M){if(--M.cbt<0){throw _2300;}
M.e.length-=(M.a-1);
return(_2301)(M);};

var _2295=function(M){if(M.modules["whalesong/lang/unsafe/ops.rkt"].isInvoked!==false){return(_2297)(M);}else{M.c.push(new RT.CallFrame(_2297,M.p));
return(M.modules["whalesong/lang/unsafe/ops.rkt"].label)(M);}};

var _2287=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4285;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2288)(M);};

var _1864=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym4284;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1856=function(M){if(M.v===false){return(_1853)(M);}else{M.v=RT.VOID;
return(_1854)(M);}};

var _2274=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][62];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2267=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4274;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1819=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1826,M.p));
return((M.p).label)(M);};

var _1817=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym4278;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1803=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1810,M.p));
return((M.p).label)(M);};

var _2227=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2228)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1526)(M);}};

var _1792=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym4278;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2393=RT.si_context_expected(2);

var _2381=function(M){if(--M.cbt<0){throw _2381;}
M.c.push(new RT.CallFrame(_2383,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1513,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][63]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2375=function(M){if(--M.cbt<0){throw _2375;}
M.c.push(new RT.CallFrame(_2377,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1501,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][60]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2367=function(M){if(--M.cbt<0){throw _2367;}
M.c.push(new RT.CallFrame(_2369,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1495,2,[M.e[M.e.length-1]],"build-string");
M.e[M.e.length-1][37]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2359=function(M){if(--M.cbt<0){throw _2359;}
M.c.push(new RT.CallFrame(_2361,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1491,2,[M.e[M.e.length-1]],"filter");
M.e[M.e.length-1][31]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2353=function(M){if(--M.cbt<0){throw _2353;}
M.c.push(new RT.CallFrame(_2355,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1485,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][54]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2343=function(M){if(--M.cbt<0){throw _2343;}
M.c.push(new RT.CallFrame(_2345,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=_1476_c;
M.e[M.e.length-1][24]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2337=function(M){if(--M.cbt<0){throw _2337;}
M.c.push(new RT.CallFrame(_2339,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1472,2,[M.e[M.e.length-3]],"...private/list.rkt:186:13");
M.e[M.e.length-2]=new RT.Closure(_1473,3,[M.e[M.e.length-3]],"...private/list.rkt:187:13");
M.v=new RT.Closure(_1471,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"assoc");
M.e.length-=2;
M.e[M.e.length-1][20]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2327=function(M){if(--M.cbt<0){throw _2327;}
M.c.push(new RT.CallFrame(_2329,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1466,2,[M.e[M.e.length-1]],"assq");
M.e[M.e.length-1][18]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2319=function(M){if(--M.cbt<0){throw _2319;}
M.c.push(new RT.CallFrame(_2321,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1462,2,[M.e[M.e.length-1]],"findf");
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2311=function(M){if(--M.cbt<0){throw _2311;}
M.c.push(new RT.CallFrame(_2313,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1458,2,[M.e[M.e.length-1]],"remv*");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2303=function(M){if(--M.cbt<0){throw _2303;}
M.c.push(new RT.CallFrame(_2305,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1450,2,[M.e[M.e.length-1]],"remv");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2260=function(M){if(--M.cbt<0){throw _2260;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-6];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2233=function(M){if(--M.cbt<0){throw _2233;}
M.a=1;
return(_2234)(M);};


var _2171=function(M){if(--M.cbt<0){throw _2171;}
return(_2169)(M);};

var _2151=function(M){if(--M.cbt<0){throw _2151;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2121=function(M){if(--M.cbt<0){throw _2121;}
M.a=1;
return(_2122)(M);};

var _2095=function(M){if(--M.cbt<0){throw _2095;}
M.a=1;
return(_2096)(M);};

var _2055=function(M){if(--M.cbt<0){throw _2055;}
M.e[M.e.length-3]=M.v;
M.v=M.primitives["string-set!"]._i(M);
M.e.length-=3;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][57];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.v=RT.checkedAdd1(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2000=function(M){if(--M.cbt<0){throw _2000;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1996=function(M){if(--M.cbt<0){throw _1996;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1998,M.p));
return((M.p).label)(M);};

var _1972=function(M){if(--M.cbt<0){throw _1972;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1958=function(M){if(--M.cbt<0){throw _1958;}
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1962,M.p));
return((M.p).label)(M);};

var _1945=function(M){if(--M.cbt<0){throw _1945;}
return(_1943)(M);};

var _1926=function(M){if(--M.cbt<0){throw _1926;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_1477_c;
M.a=3;
M.c.push(new RT.CallFrame(_1929,M.p));
return(_1477)(M);};

var _1874=function(M){if(--M.cbt<0){throw _1874;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1876)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1879,M.p));
return((M.p).label)(M);}};

var _1829=function(M){if(--M.cbt<0){throw _1829;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_1831)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym4278;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-13,11);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1822=function(M){if(--M.cbt<0){throw _1822;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1824,M.p));
return((M.p).label)(M);};

var _1799=function(M){if(--M.cbt<0){throw _1799;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1801)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1806,M.p));
return((M.p).label)(M);}};

var _1759=function(M){if(--M.cbt<0){throw _1759;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1761)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1764,M.p));
return((M.p).label)(M);}};

var _1750=function(M){if(--M.cbt<0){throw _1750;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1752)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1757,M.p));
return((M.p).label)(M);}};

var _1708=function(M){if(--M.cbt<0){throw _1708;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1710)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1713,M.p));
return((M.p).label)(M);}};

var _1671=function(M){if(--M.cbt<0){throw _1671;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1674,M.p));
return((M.p).label)(M);};

var _1535=function(M){if(--M.cbt<0){throw _1535;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:394:12 whalesong/lang/private/list.rkt 394 12 14590 81)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2283)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1484=function(M){if(--M.cbt<0){throw _1484;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:243:4 whalesong/lang/private/list.rkt 243 4 8170 259)"

M.unspliceRestFromStack(3,(M.a-3));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym4288;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1990,M.p));
return((M.p).label)(M);};


var _2384=function(M){if(--M.cbt<0){throw _2384;}
M.e.length-=(M.a-1);
return(_2385)(M);};

var _2376=function(M){if(--M.cbt<0){throw _2376;}
M.e.length-=(M.a-1);
return(_2377)(M);};

var _2370=function(M){if(--M.cbt<0){throw _2370;}
M.e.length-=(M.a-1);
return(_2371)(M);};

var _2364=function(M){if(--M.cbt<0){throw _2364;}
M.e.length-=(M.a-1);
return(_2365)(M);};

var _2352=function(M){if(--M.cbt<0){throw _2352;}
M.e.length-=(M.a-1);
return(_2353)(M);};

var _2346=function(M){if(--M.cbt<0){throw _2346;}
M.e.length-=(M.a-1);
return(_2347)(M);};

var _2338=function(M){if(--M.cbt<0){throw _2338;}
M.e.length-=(M.a-1);
return(_2339)(M);};

var _2330=function(M){if(--M.cbt<0){throw _2330;}
M.e.length-=(M.a-1);
return(_2331)(M);};

var _2324=function(M){if(--M.cbt<0){throw _2324;}
M.e.length-=(M.a-1);
return(_2325)(M);};

var _2316=function(M){if(--M.cbt<0){throw _2316;}
M.e.length-=(M.a-1);
return(_2317)(M);};

var _2308=function(M){if(--M.cbt<0){throw _2308;}
M.e.length-=(M.a-1);
return(_2309)(M);};

var _2298=function(M){if(--M.cbt<0){throw _2298;}
M.e.length-=(M.a-1);
return(_2299)(M);};

var _1876=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_1904)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2286=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2287)(M);}else{M.v=RT.VOID;
return(_2288)(M);}};

var _2283=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4285;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2280=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2281)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_1537)(M);}};

var _2273=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4274;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=4;
return(_2274)(M);};

var _1845=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym4278;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2265=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_1530)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_1533)(M);}};


var _2252=function(M){M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_2255)(M);}else{M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][65];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-4]=M.v;
M.e[M.e.length-5]=RT.checkedAdd1(M, M.e[M.e.length-12]);
M.v=RT.makePair(M.e[M.e.length-10],M.e[M.e.length-13]);
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-13,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2231=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1801=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym4278;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2206=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_1520)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_1522)(M);}};

var _2389=function(M){if(--M.cbt<0){throw _2389;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("assf", prefix[selfMod.getPrefixOffset("assf")]);extNs.set("assf", prefix[selfMod.getPrefixOffset("assf")]);ns.set("assoc", prefix[selfMod.getPrefixOffset("assoc")]);extNs.set("assoc", prefix[selfMod.getPrefixOffset("assoc")]);ns.set("assq", prefix[selfMod.getPrefixOffset("assq")]);extNs.set("assq", prefix[selfMod.getPrefixOffset("assq")]);ns.set("assv", prefix[selfMod.getPrefixOffset("assv")]);extNs.set("assv", prefix[selfMod.getPrefixOffset("assv")]);ns.set("build-list", prefix[selfMod.getPrefixOffset("build-list")]);extNs.set("build-list", prefix[selfMod.getPrefixOffset("build-list")]);ns.set("build-string", prefix[selfMod.getPrefixOffset("build-string")]);extNs.set("build-string", prefix[selfMod.getPrefixOffset("build-string")]);ns.set("build-vector", prefix[selfMod.getPrefixOffset("build-vector")]);extNs.set("build-vector", prefix[selfMod.getPrefixOffset("build-vector")]);ns.set("compose", prefix[selfMod.getPrefixOffset("compose")]);extNs.set("compose", prefix[selfMod.getPrefixOffset("compose")]);ns.set("compose1", prefix[selfMod.getPrefixOffset("compose1")]);extNs.set("compose1", prefix[selfMod.getPrefixOffset("compose1")]);ns.set("filter", prefix[selfMod.getPrefixOffset("filter")]);extNs.set("filter", prefix[selfMod.getPrefixOffset("filter")]);ns.set("findf", prefix[selfMod.getPrefixOffset("findf")]);extNs.set("findf", prefix[selfMod.getPrefixOffset("findf")]);ns.set("foldl", prefix[selfMod.getPrefixOffset("foldl")]);extNs.set("foldl", prefix[selfMod.getPrefixOffset("foldl")]);ns.set("foldr", prefix[selfMod.getPrefixOffset("foldr")]);extNs.set("foldr", prefix[selfMod.getPrefixOffset("foldr")]);ns.set("memf", prefix[selfMod.getPrefixOffset("memf")]);extNs.set("memf", prefix[selfMod.getPrefixOffset("memf")]);ns.set("remove", prefix[selfMod.getPrefixOffset("remove")]);extNs.set("remove", prefix[selfMod.getPrefixOffset("remove")]);ns.set("remove*", prefix[selfMod.getPrefixOffset("remove*")]);extNs.set("remove*", prefix[selfMod.getPrefixOffset("remove*")]);ns.set("remq", prefix[selfMod.getPrefixOffset("remq")]);extNs.set("remq", prefix[selfMod.getPrefixOffset("remq")]);ns.set("remq*", prefix[selfMod.getPrefixOffset("remq*")]);extNs.set("remq*", prefix[selfMod.getPrefixOffset("remq*")]);ns.set("remv", prefix[selfMod.getPrefixOffset("remv")]);extNs.set("remv", prefix[selfMod.getPrefixOffset("remv")]);ns.set("remv*", prefix[selfMod.getPrefixOffset("remv*")]);extNs.set("remv*", prefix[selfMod.getPrefixOffset("remv*")]);}(M.modules["whalesong/lang/private/list.rkt"],M.modules["whalesong/lang/private/list.rkt"].getExports(),M.modules["whalesong/lang/private/list.rkt"].getExternalExports(),M.modules["whalesong/lang/private/list.rkt"].prefix));
return(M.p)(M);};


var _2373=function(M){if(--M.cbt<0){throw _2373;}
M.c.push(new RT.CallFrame(_2375,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1498,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][59]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2365=function(M){if(--M.cbt<0){throw _2365;}
M.c.push(new RT.CallFrame(_2367,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1494,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][57]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2357=function(M){if(--M.cbt<0){throw _2357;}
M.c.push(new RT.CallFrame(_2359,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1490,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][55]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2351=function(M){if(--M.cbt<0){throw _2351;}
M.c.push(new RT.CallFrame(_2353,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1482,3,[M.e[M.e.length-3]],"...private/list.rkt:239:4");
M.e[M.e.length-2]=new RT.Closure(_1484,(RT.makeArityAtLeast(3)),[M.e[M.e.length-3]],"...private/list.rkt:243:4");
M.v=new RT.Closure(_1481,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(3)),RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"foldl");
M.e.length-=2;
M.e[M.e.length-1][28]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2341=function(M){if(--M.cbt<0){throw _2341;}
M.c.push(new RT.CallFrame(_2343,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1475,2,[M.e[M.e.length-1]],"assf");
M.e[M.e.length-1][21]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2335=function(M){if(--M.cbt<0){throw _2335;}
M.c.push(new RT.CallFrame(_2337,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1470,5,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][50]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2325=function(M){if(--M.cbt<0){throw _2325;}
M.c.push(new RT.CallFrame(_2327,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1465,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][47]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2317=function(M){if(--M.cbt<0){throw _2317;}
M.c.push(new RT.CallFrame(_2319,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1461,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][46]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2309=function(M){if(--M.cbt<0){throw _2309;}
M.c.push(new RT.CallFrame(_2311,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1457,2,[M.e[M.e.length-1]],"remq*");
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2301=function(M){if(--M.cbt<0){throw _2301;}
M.c.push(new RT.CallFrame(_2303,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1449,2,[M.e[M.e.length-1]],"remq");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2254=function(M){if(--M.cbt<0){throw _2254;}
return(_2252)(M);};

var _2223=function(M){if(--M.cbt<0){throw _2223;}
M.a=1;
return(_2224)(M);};

var _2217=function(M){if(--M.cbt<0){throw _2217;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2165=function(M){if(--M.cbt<0){throw _2165;}
return(_2163)(M);};

var _2144=function(M){if(--M.cbt<0){throw _2144;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2115=function(M){if(--M.cbt<0){throw _2115;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2089=function(M){if(--M.cbt<0){throw _2089;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2040=function(M){if(--M.cbt<0){throw _2040;}
M.e[M.e.length-3]=M.v;
M.v=RT.checkedVectorSet(M, M.e[M.e.length-1],M.e[M.e.length-2],M.e[M.e.length-3]);
M.e.length-=3;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][56];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.v=RT.checkedAdd1(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1998=function(M){if(--M.cbt<0){throw _1998;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2000,M.p));
return((M.p).label)(M);};

var _1990=function(M){if(--M.cbt<0){throw _1990;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.v=RT.makePair(M.e[M.e.length-7],M.e[M.e.length-8]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1970=function(M){if(--M.cbt<0){throw _1970;}
M.e[M.e.length-2]=M.v;
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1972,M.p));
return((M.p).label)(M);};

var _1955=function(M){if(--M.cbt<0){throw _1955;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][52];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.e[M.e.length-6]=M.e[M.e.length-14];
M.e[M.e.length-7]=3;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1958,M.p));
return((M.p).label)(M);};

var _1939=function(M){if(--M.cbt<0){throw _1939;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_1936)(M);}else{M.v=RT.VOID;
return(_1937)(M);}};

var _1894=function(M){if(--M.cbt<0){throw _1894;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_1896)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym4284;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1872=function(M){if(--M.cbt<0){throw _1872;}
M.e.pop();
if(M.v===false){return(_1866)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1826=function(M){if(--M.cbt<0){throw _1826;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1829,M.p));
return((M.p).label)(M);};

var _1450=function(M){if(--M.cbt<0){throw _1450;}

//"lambda body for #(struct:LamPositionalName remv whalesong/lang/private/list.rkt 78 0 2288 60)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym4289;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eqv?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1808=function(M){if(--M.cbt<0){throw _1808;}
if(M.v===false){return(_1803)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1764=function(M){if(--M.cbt<0){throw _1764;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1766)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1771,M.p));
return((M.p).label)(M);}};

var _1486=function(M){if(--M.cbt<0){throw _1486;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2003)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1487)(M);}};

var _1720=function(M){if(--M.cbt<0){throw _1720;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1717)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1669=function(M){if(--M.cbt<0){throw _1669;}
M.e[M.e.length-2]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_1666)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1662=function(M){if(--M.cbt<0){throw _1662;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1664)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1669,M.p));
return((M.p).label)(M);}};

var _1636=function(M){if(--M.cbt<0){throw _1636;}
if(M.v===false){return(_1633)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _2382=function(M){if(--M.cbt<0){throw _2382;}
M.e.length-=(M.a-1);
return(_2383)(M);};

var _2374=function(M){if(--M.cbt<0){throw _2374;}
M.e.length-=(M.a-1);
return(_2375)(M);};

var _2368=function(M){if(--M.cbt<0){throw _2368;}
M.e.length-=(M.a-1);
return(_2369)(M);};

var _2362=function(M){if(--M.cbt<0){throw _2362;}
M.e.length-=(M.a-1);
return(_2363)(M);};

var _2350=function(M){if(--M.cbt<0){throw _2350;}
M.e.length-=(M.a-1);
return(_2351)(M);};

var _2344=function(M){if(--M.cbt<0){throw _2344;}
M.e.length-=(M.a-1);
return(_2345)(M);};

var _2336=function(M){if(--M.cbt<0){throw _2336;}
M.e.length-=(M.a-1);
return(_2337)(M);};

var _2328=function(M){if(--M.cbt<0){throw _2328;}
M.e.length-=(M.a-1);
return(_2329)(M);};

var _2322=function(M){if(--M.cbt<0){throw _2322;}
M.e.length-=(M.a-1);
return(_2323)(M);};

var _2314=function(M){if(--M.cbt<0){throw _2314;}
M.e.length-=(M.a-1);
return(_2315)(M);};

var _2306=function(M){if(--M.cbt<0){throw _2306;}
M.e.length-=(M.a-1);
return(_2307)(M);};

var _2297=function(M){if(--M.cbt<0){throw _2297;}
M.e.push([M.params.currentNamespace.get("do-remove")||M.primitives["do-remove"],M.primitives["raise-type-error"],M.params.currentNamespace.get("remove")||M.primitives["remove"],M.primitives["equal?"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.params.currentNamespace.get("remq")||M.primitives["remq"],M.params.currentNamespace.get("remv")||M.primitives["remv"],M.primitives["eqv?"],M.params.currentNamespace.get("do-remove*")||M.primitives["do-remove*"],M.params.currentNamespace.get("remove*")||M.primitives["remove*"],M.params.currentNamespace.get("remq*")||M.primitives["remq*"],M.params.currentNamespace.get("remv*")||M.primitives["remv*"],M.params.currentNamespace.get("memf")||M.primitives["memf"],M.primitives["raise-mismatch-error"],M.params.currentNamespace.get("findf")||M.primitives["findf"],M.params.currentNamespace.get("bad-list")||M.primitives["bad-list"],M.params.currentNamespace.get("bad-item")||M.primitives["bad-item"],M.params.currentNamespace.get("assq")||M.primitives["assq"],M.params.currentNamespace.get("assv")||M.primitives["assv"],M.params.currentNamespace.get("assoc")||M.primitives["assoc"],M.params.currentNamespace.get("assf")||M.primitives["assf"],[M.modules["whalesong/lang/unsafe/ops.rkt"].prefix,M.modules["whalesong/lang/unsafe/ops.rkt"].getPrefixOffset("unsafe-car1.1"),{moduleName:"whalesong/lang/unsafe/ops.rkt",name:"unsafe-car1.1"}],[M.modules["whalesong/lang/unsafe/ops.rkt"].prefix,M.modules["whalesong/lang/unsafe/ops.rkt"].getPrefixOffset("unsafe-cdr2.3"),{moduleName:"whalesong/lang/unsafe/ops.rkt",name:"unsafe-cdr2.3"}],M.params.currentNamespace.get("mapadd")||M.primitives["mapadd"],M.params.currentNamespace.get("check-fold")||M.primitives["check-fold"],M.primitives["length"],M.primitives["format"],M.params.currentNamespace.get("foldl")||M.primitives["foldl"],M.primitives["map"],M.params.currentNamespace.get("foldr")||M.primitives["foldr"],M.params.currentNamespace.get("filter")||M.primitives["filter"],M.primitives["reverse"],M.params.currentNamespace.get("build-vector")||M.primitives["build-vector"],M.primitives["exact-nonnegative-integer?"],M.primitives["make-vector"],M.primitives["vector-set!"],M.params.currentNamespace.get("build-string")||M.primitives["build-string"],M.primitives["make-string"],M.primitives["string-set!"],M.params.currentNamespace.get("build-list")||M.primitives["build-list"],M.primitives["zero?"],M.params.currentNamespace.get("compose1")||M.primitives["compose1"],M.params.currentNamespace.get("compose")||M.primitives["compose"],M.primitives["procedure-arity"],false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);M.e[M.e.length-1].names=["do-remove","raise-type-error","remove","equal?","procedure?","procedure-arity-includes?","remq","remv","eqv?","do-remove*","remove*","remq*","remv*","memf","raise-mismatch-error","findf","bad-list","bad-item","assq","assv","assoc","assf","unsafe-car1.1","unsafe-cdr2.3","mapadd","check-fold","length","format","foldl","map","foldr","filter","reverse","build-vector","exact-nonnegative-integer?","make-vector","vector-set!","build-string","make-string","string-set!","build-list","zero?","compose1","compose","procedure-arity",false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
M.modules["whalesong/lang/private/list.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2299,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1444,4,[M.e[M.e.length-1]],"do-remove");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2294=function(M){M.modules["whalesong/lang/private/list.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/unsafe/ops.rkt"]!==void(0)&&M.modules["whalesong/lang/unsafe/ops.rkt"]!==undefined)!==false){return(_2295)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/unsafe/ops.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2295);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2295)(M);}};

var _2285=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4285;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2286)(M);};


var _2279=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2280)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1536)(M);}};

var _2272=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2273)(M);}else{M.v=RT.VOID;
return(_2274)(M);}};

var _2270=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2271)(M);}else{M.v=RT.VOID;
return(_2272)(M);}};

var _2264=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2265)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_1532)(M);}};


var _2253=function(M){if(--M.cbt<0){throw _2253;}
M.e.length-=(M.a-1);
return(_2252)(M);};

var _2245=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2205=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2206)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1521)(M);}};

var _1524=function(M){if(--M.cbt<0){throw _1524;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2227)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1525)(M);}};





var _2349=function(M){if(--M.cbt<0){throw _2349;}
M.c.push(new RT.CallFrame(_2351,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1480,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][53]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2333=function(M){if(--M.cbt<0){throw _2333;}
M.c.push(new RT.CallFrame(_2335,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_1469,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][49]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};




var _1512=function(M){if(--M.cbt<0){throw _1512;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:333:18 whalesong/lang/private/list.rkt 333 18 11664 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2159,M.p));
return((M.p).label)(M);};






var _2111=function(M){if(--M.cbt<0){throw _2111;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2072=function(M){if(--M.cbt<0){throw _2072;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2026=function(M){if(--M.cbt<0){throw _2026;}
if(M.v===false){return(_2023)(M);}else{M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_2024)(M);}};


var _1985=function(M){if(--M.cbt<0){throw _1985;}
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_1483_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_1483)(M);};

var _1968=function(M){if(--M.cbt<0){throw _1968;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1970,M.p));
return((M.p).label)(M);};

var _1949=function(M){if(--M.cbt<0){throw _1949;}
return(_1947)(M);};

var _1935=function(M){if(--M.cbt<0){throw _1935;}
return(_1933)(M);};

var _1891=function(M){if(--M.cbt<0){throw _1891;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1894,M.p));
return((M.p).label)(M);};

var _1886=function(M){if(--M.cbt<0){throw _1886;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-7];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1889,M.p));
return((M.p).label)(M);};

var _1869=function(M){if(--M.cbt<0){throw _1869;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1872,M.p));
return((M.p).label)(M);};

var _1815=function(M){if(--M.cbt<0){throw _1815;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1817)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1822,M.p));
return((M.p).label)(M);}};

var _1776=function(M){if(--M.cbt<0){throw _1776;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_1778)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym4278;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1446=function(M){if(--M.cbt<0){throw _1446;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1556)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1447)(M);}};

var _1725=function(M){if(--M.cbt<0){throw _1725;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_1727)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym4273;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1706=function(M){if(--M.cbt<0){throw _1706;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1703)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1699=function(M){if(--M.cbt<0){throw _1699;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1701)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1706,M.p));
return((M.p).label)(M);}};

var _1657=function(M){if(--M.cbt<0){throw _1657;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1659)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1662,M.p));
return((M.p).label)(M);}};

var _1619=function(M){if(--M.cbt<0){throw _1619;}
if(M.v===false){return(_1616)(M);}else{M.v=M.e[M.e.length-4];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1555=function(M){if(--M.cbt<0){throw _1555;}
M.e[M.e.length-2]=M.v;
return(_1553)(M);};

var _2224=function(M){if(--M.cbt<0){throw _2224;}
if(M.a===0){return(_2221)(M);}else{M.e.push(M.v);
return(_2221)(M);}};

var _2129=function(M){if(--M.cbt<0){throw _2129;}
if(M.a===0){return(_2126)(M);}else{M.e.push(M.v);
return(_2126)(M);}};

var _2366=function(M){if(--M.cbt<0){throw _2366;}
M.e.length-=(M.a-1);
return(_2367)(M);};

var _2360=function(M){if(--M.cbt<0){throw _2360;}
M.e.length-=(M.a-1);
return(_2361)(M);};


var _2342=function(M){if(--M.cbt<0){throw _2342;}
M.e.length-=(M.a-1);
return(_2343)(M);};

var _2334=function(M){if(--M.cbt<0){throw _2334;}
M.e.length-=(M.a-1);
return(_2335)(M);};

var _2326=function(M){if(--M.cbt<0){throw _2326;}
M.e.length-=(M.a-1);
return(_2327)(M);};

var _2320=function(M){if(--M.cbt<0){throw _2320;}
M.e.length-=(M.a-1);
return(_2321)(M);};

var _2312=function(M){if(--M.cbt<0){throw _2312;}
M.e.length-=(M.a-1);
return(_2313)(M);};

var _2304=function(M){if(--M.cbt<0){throw _2304;}
M.e.length-=(M.a-1);
return(_2305)(M);};

var _2296=function(M){if(--M.cbt<0){throw _2296;}
M.e.length-=(M.a-1);
return(_2297)(M);};


var _1866=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1874,M.p));
return((M.p).label)(M);};

var _1538=function(M){if(--M.cbt<0){throw _1538;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:404:12 whalesong/lang/private/list.rkt 404 12 14994 416)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][65];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=0;
M.e[M.e.length-6]=RT.NULL;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1536=function(M){if(--M.cbt<0){throw _1536;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:396:12 whalesong/lang/private/list.rkt 396 12 14684 273)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2285)(M);}else{M.v=RT.VOID;
return(_2286)(M);}};

var _2271=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4274;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2272)(M);};

var _2269=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym4274;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2270)(M);};

var _1531=function(M){if(--M.cbt<0){throw _1531;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:396:12 whalesong/lang/private/list.rkt 396 12 14684 273)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2269)(M);}else{M.v=RT.VOID;
return(_2270)(M);}};






var _2395=function(M){return(_1539)(M);};

var _1523=function(M){if(--M.cbt<0){throw _1523;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2223,M.p));
return((M.p).label)(M);};

var _1519=function(M){if(--M.cbt<0){throw _1519;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2205)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1520)(M);}};

var _1518=function(M){if(--M.cbt<0){throw _1518;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2202,M.p));
return((M.p).label)(M);};

var _1517=function(M){if(--M.cbt<0){throw _1517;}

//"lambda body for #(struct:LamPositionalName simple-compose whalesong/lang/private/list.rkt 415 8 15566 144)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2191)(M);}else{M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_2194)(M);}else{M.e[M.e.length-1]=new RT.Closure(_1518,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_2195)(M);}}};

var _1515=function(M){if(--M.cbt<0){throw _1515;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:355:6 whalesong/lang/private/list.rkt 355 6 12697 159)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.p=_1516_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_1516)(M);};

var _2170=function(M){if(--M.cbt<0){throw _2170;}
M.e.length-=(M.a-1);
return(_2169)(M);};

var _2164=function(M){if(--M.cbt<0){throw _2164;}
M.e.length-=(M.a-1);
return(_2163)(M);};



var _1466=function(M){if(--M.cbt<0){throw _1466;}

//"lambda body for #(struct:LamPositionalName assq whalesong/lang/private/list.rkt 179 11 5636 54)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][47];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1508=function(M){if(--M.cbt<0){throw _1508;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2144,M.p));
return((M.p).label)(M);};

var _1541=function(M){if(--M.cbt<0){throw _1541;}
};


var _1504=function(M){if(--M.cbt<0){throw _1504;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:387:34 whalesong/lang/private/list.rkt 387 34 14265 29)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-2];
M.e.push(void(0));
M.p=M.e[M.e.length-2];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2121,M.p));
return((M.p).label)(M);};

var _1502=function(M){if(--M.cbt<0){throw _1502;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:384:34 whalesong/lang/private/list.rkt 384 34 14075 24)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-2]);
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2111,M.p));
return((M.p).label)(M);};

var _1464=function(M){if(--M.cbt<0){throw _1464;}

//"lambda body for #(struct:LamPositionalName bad-item whalesong/lang/private/list.rkt 142 0 4192 200)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]="non-pair found in list: ";
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=" in ";
M.e[M.e.length-5]=M.e[M.e.length-9];
M.p=M.primitives["raise-mismatch-error"];
RT.raiseArityMismatchError(M,M.p,5);
return(_1465)(M);};

var _1499=function(M){if(--M.cbt<0){throw _1499;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:371:28 whalesong/lang/private/list.rkt 371 28 13383 24)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2089,M.p));
return((M.p).label)(M);};

var _2070=function(M){if(--M.cbt<0){throw _2070;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][58];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=RT.checkedAdd1(M, M.e[M.e.length-8]);
M.v=RT.checkedSub1(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2072,M.p));
return((M.p).label)(M);};

var _2018=function(M){if(--M.cbt<0){throw _2018;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][54];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.v=RT.makePair(M.e[M.e.length-7],M.e[M.e.length-8]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1496=function(M){if(--M.cbt<0){throw _1496;}

//"lambda body for #(struct:LamPositionalName recr whalesong/lang/private/list.rkt 311 2 10711 131)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-4]);
if(M.v===false){return(_2067)(M);}else{M.v=RT.NULL;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1978=function(M){if(--M.cbt<0){throw _1978;}
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_1483_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_1483)(M);};

var _1964=function(M){if(--M.cbt<0){throw _1964;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd(M, 2,M.e[M.e.length-1]);
M.e.pop();
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-7];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=10;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1456=function(M){if(--M.cbt<0){throw _1456;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:99:4 whalesong/lang/private/list.rkt 99 4 2905 211)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1604)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1605)(M);}};

var _1929=function(M){if(--M.cbt<0){throw _1929;}
M.e[M.e.length-2]=M.v;
return(_1927)(M);};

var _1889=function(M){if(--M.cbt<0){throw _1889;}
M.e.pop();
if(M.v===false){return(_1883)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1879=function(M){if(--M.cbt<0){throw _1879;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1881)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][22][0][M.e[M.e.length-6][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1886,M.p));
return((M.p).label)(M);}};

var _1862=function(M){if(--M.cbt<0){throw _1862;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1864)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][22][0][M.e[M.e.length-4][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1869,M.p));
return((M.p).label)(M);}};

var _1810=function(M){if(--M.cbt<0){throw _1810;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1812)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1815,M.p));
return((M.p).label)(M);}};

var _1806=function(M){if(--M.cbt<0){throw _1806;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1808,M.p));
return((M.p).label)(M);};

var _1773=function(M){if(--M.cbt<0){throw _1773;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1776,M.p));
return((M.p).label)(M);};

var _1722=function(M){if(--M.cbt<0){throw _1722;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1725,M.p));
return((M.p).label)(M);};

var _1713=function(M){if(--M.cbt<0){throw _1713;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1715)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1720,M.p));
return((M.p).label)(M);}};

var _1674=function(M){if(--M.cbt<0){throw _1674;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_1676)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym4279;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1655=function(M){if(--M.cbt<0){throw _1655;}
M.e[M.e.length-2]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_1652)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1591=function(M){if(--M.cbt<0){throw _1591;}
if(M.v===false){return(_1588)(M);}else{M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=_1452_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_1452)(M);}};

var _1552=function(M){if(--M.cbt<0){throw _1552;}
if(M.v===false){return(_1549)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _1957=function(M){if(--M.cbt<0){throw _1957;}
M.e.length-=(M.a-1);
return(_1958)(M);};

var _1948=function(M){if(--M.cbt<0){throw _1948;}
M.e.length-=(M.a-1);
return(_1947)(M);};

var _2358=function(M){if(--M.cbt<0){throw _2358;}
M.e.length-=(M.a-1);
return(_2359)(M);};

var _1934=function(M){if(--M.cbt<0){throw _1934;}
M.e.length-=(M.a-1);
return(_1933)(M);};

var _1478=function(M){if(--M.cbt<0){throw _1478;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 222 8 7238 446)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-7]===RT.NULL);
if(M.v===false){return(_1930)(M);}else{M.v=RT.VOID;
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _1477=function(M){if(--M.cbt<0){throw _1477;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 207 2 6721 99)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1923)(M);}else{M.v=RT.makePair(M.e[M.e.length-2],RT.NULL);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2318=function(M){if(--M.cbt<0){throw _2318;}
M.e.length-=(M.a-1);
return(_2319)(M);};

var _2310=function(M){if(--M.cbt<0){throw _2310;}
M.e.length-=(M.a-1);
return(_2311)(M);};

var _2302=function(M){if(--M.cbt<0){throw _2302;}
M.e.length-=(M.a-1);
return(_2303)(M);};


var _1540=function(M){if(--M.cbt<0){throw _1540;}
M.e.length-=(M.a-1);
return(_1541)(M);};


var _1537=function(M){if(--M.cbt<0){throw _1537;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:403:12 whalesong/lang/private/list.rkt 403 12 14970 11)"

M.v=M.primitives["values"];
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1534=function(M){if(--M.cbt<0){throw _1534;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2279)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1535)(M);}};

var _1471=function(M){if(--M.cbt<0){throw _1471;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1849)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1472)(M);}};

var _1533=function(M){if(--M.cbt<0){throw _1533;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:404:12 whalesong/lang/private/list.rkt 404 12 14994 416)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][63];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=0;
M.e[M.e.length-6]=RT.NULL;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1532=function(M){if(--M.cbt<0){throw _1532;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:403:12 whalesong/lang/private/list.rkt 403 12 14970 11)"

M.v=M.primitives["values"];
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1529=function(M){if(--M.cbt<0){throw _1529;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2263)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1530)(M);}};

var _1528=function(M){if(--M.cbt<0){throw _1528;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 405 13 15019 390)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2251)(M);}else{M.v=RT.VOID;
return(_2252)(M);}};




var _1527=function(M){if(--M.cbt<0){throw _1527;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:333:18 whalesong/lang/private/list.rkt 333 18 11664 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2247,M.p));
return((M.p).label)(M);};

var _1526=function(M){if(--M.cbt<0){throw _1526;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:332:18 whalesong/lang/private/list.rkt 332 18 11622 23)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2240,M.p));
return((M.p).label)(M);};

var _1522=function(M){if(--M.cbt<0){throw _1522;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:333:18 whalesong/lang/private/list.rkt 333 18 11664 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2217,M.p));
return((M.p).label)(M);};

var _1521=function(M){if(--M.cbt<0){throw _1521;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:332:18 whalesong/lang/private/list.rkt 332 18 11622 23)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2213,M.p));
return((M.p).label)(M);};

var _1468=function(M){if(--M.cbt<0){throw _1468;}

//"lambda body for #(struct:LamPositionalName assv whalesong/lang/private/list.rkt 182 11 5719 55)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][48];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1516=function(M){if(--M.cbt<0){throw _1516;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 356 8 12717 138)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2182)(M);}else{M.v=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1514=function(M){if(--M.cbt<0){throw _1514;}

//"lambda body for #(struct:LamPositionalName pipeline1 whalesong/lang/private/list.rkt 349 4 12469 388)"

M.v=new RT.Closure(_1515,1,[M.e[M.e.length-2],M.e[M.e.length-1]],"...private/list.rkt:355:6");
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1513=function(M){if(--M.cbt<0){throw _1513;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 405 13 15019 390)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2162)(M);}else{M.v=RT.VOID;
return(_2163)(M);}};


var _1509=function(M){if(--M.cbt<0){throw _1509;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2147)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1510)(M);}};

var _1511=function(M){if(--M.cbt<0){throw _1511;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:332:18 whalesong/lang/private/list.rkt 332 18 11622 23)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2155,M.p));
return((M.p).label)(M);};

var _1507=function(M){if(--M.cbt<0){throw _1507;}

//"lambda body for #(struct:LamPositionalName simple-compose whalesong/lang/private/list.rkt 413 8 15468 43)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_2140)(M);}else{M.e[M.e.length-1]=new RT.Closure(_1508,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_2141)(M);}};

var _1506=function(M){if(--M.cbt<0){throw _1506;}

//"lambda body for #(struct:LamPositionalName pipeline* whalesong/lang/private/list.rkt 360 4 12862 1546)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2132)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][59];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1505=function(M){if(--M.cbt<0){throw _1505;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:388:34 whalesong/lang/private/list.rkt 388 34 14329 35)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-2];
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2128,M.p));
return((M.p).label)(M);};

var _1503=function(M){if(--M.cbt<0){throw _1503;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:385:34 whalesong/lang/private/list.rkt 385 34 14134 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-2]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2115,M.p));
return((M.p).label)(M);};

var _1501=function(M){if(--M.cbt<0){throw _1501;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 378 12 13773 632)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2099)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1500=function(M){if(--M.cbt<0){throw _1500;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:372:28 whalesong/lang/private/list.rkt 372 28 13436 29)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2095,M.p));
return((M.p).label)(M);};

var _1498=function(M){if(--M.cbt<0){throw _1498;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 366 10 13169 335)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2081)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1497=function(M){if(--M.cbt<0){throw _1497;}

//"lambda body for #(struct:LamPositionalName build-list whalesong/lang/private/list.rkt 305 0 10431 412)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2073)(M);}else{M.v=RT.VOID;
return(_2074)(M);}};


var _1459=function(M){if(--M.cbt<0){throw _1459;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 114 2 3366 239)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_1612)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1495=function(M){if(--M.cbt<0){throw _1495;}

//"lambda body for #(struct:LamPositionalName build-string whalesong/lang/private/list.rkt 293 0 9995 434)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2058)(M);}else{M.v=RT.VOID;
return(_2059)(M);}};

var _1494=function(M){if(--M.cbt<0){throw _1494;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 300 4 10314 113)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedNumEquals(M, M.e[M.e.length-5],M.e[M.e.length-3]);
if(M.v===false){return(_2052)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1588=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-5]=M.v;
M.p=_1453_c;
M.a=5;
M.e.splice(M.e.length-10,5);
M.c[M.c.length-1].p=M.p;
return(_1453)(M);};

var _1493=function(M){if(--M.cbt<0){throw _1493;}

//"lambda body for #(struct:LamPositionalName build-vector whalesong/lang/private/list.rkt 281 0 9559 434)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2043)(M);}else{M.v=RT.VOID;
return(_2044)(M);}};

var _1492=function(M){if(--M.cbt<0){throw _1492;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 288 4 9878 113)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedNumEquals(M, M.e[M.e.length-5],M.e[M.e.length-3]);
if(M.v===false){return(_2037)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2031=function(M){M.v=false;
return(_2032)(M);};

var _1491=function(M){if(--M.cbt<0){throw _1491;}

//"lambda body for #(struct:LamPositionalName filter whalesong/lang/private/list.rkt 265 0 8885 481)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2031)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2032)(M);}};

var _1490=function(M){if(--M.cbt<0){throw _1490;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 273 2 9217 148)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2021)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["reverse"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1488=function(M){if(--M.cbt<0){throw _1488;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 254 5 8522 111)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2010)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1489=function(M){if(--M.cbt<0){throw _1489;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:258:4 whalesong/lang/private/list.rkt 258 4 8639 242)"

M.unspliceRestFromStack(3,(M.a-3));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym4290;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2018,M.p));
return((M.p).label)(M);};


var _1485=function(M){if(--M.cbt<0){throw _1485;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 260 5 8698 182)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_1993)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][24];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-9][54];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-14];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1996,M.p));
return((M.p).label)(M);}};

var _1483=function(M){if(--M.cbt<0){throw _1483;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 241 5 8075 89)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1982)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1481=function(M){if(--M.cbt<0){throw _1481;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1975)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1482)(M);}};

var _1480=function(M){if(--M.cbt<0){throw _1480;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 245 5 8229 199)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_1965)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][24];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1968,M.p));
return((M.p).label)(M);}};



var _1944=function(M){if(--M.cbt<0){throw _1944;}
M.e.length-=(M.a-1);
return(_1943)(M);};

var _1479=function(M){if(--M.cbt<0){throw _1479;}

//"lambda body for #(struct:LamPositionalName check-fold whalesong/lang/private/list.rkt 213 0 6824 1160)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1942)(M);}else{M.v=RT.VOID;
return(_1943)(M);}};

var _1482=function(M){if(--M.cbt<0){throw _1482;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:239:4 whalesong/lang/private/list.rkt 239 4 8019 146)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym4288;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=RT.NULL;
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1978,M.p));
return((M.p).label)(M);};

var _1455=function(M){if(--M.cbt<0){throw _1455;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:98:4 whalesong/lang/private/list.rkt 98 4 2860 40)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym4282;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["equal?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _1476=function(M){if(--M.cbt<0){throw _1476;}

//"lambda body for #(struct:LamPositionalName mapadd whalesong/lang/private/list.rkt 206 0 6693 128)"

M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.p=_1477_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_1477)(M);};

var _1475=function(M){if(--M.cbt<0){throw _1475;}

//"lambda body for #(struct:LamPositionalName assf whalesong/lang/private/list.rkt 193 11 6170 211)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1916)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1917)(M);}};

var _1904=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym4284;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};






var _1474=function(M){if(--M.cbt<0){throw _1474;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 196 13 6336 44)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_1859)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1862,M.p));
return((M.p).label)(M);}};

var _1473=function(M){if(--M.cbt<0){throw _1473;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:187:13 whalesong/lang/private/list.rkt 187 13 5882 258)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1855)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1856)(M);}};

var _1839=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym4278;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1831=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][50];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.e[M.e.length-2]=M.e[M.e.length-13];
M.e[M.e.length-3]=M.e[M.e.length-14];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.e[M.e.length-5]=M.e[M.e.length-7];
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-16,11);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};




var _1470=function(M){if(--M.cbt<0){throw _1470;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 191 14 6106 33)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_1796)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1799,M.p));
return((M.p).label)(M);}};

var _1786=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym4278;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1778=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][49];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};




var _1469=function(M){if(--M.cbt<0){throw _1469;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 186 20 5837 30)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_1747)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1750,M.p));
return((M.p).label)(M);}};

var _1735=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym4273;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};





var _1467=function(M){if(--M.cbt<0){throw _1467;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 183 13 5746 27)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_1696)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1699,M.p));
return((M.p).label)(M);}};

var _1684=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym4279;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};




var _1465=function(M){if(--M.cbt<0){throw _1465;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 180 13 5663 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_1645)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1648,M.p));
return((M.p).label)(M);}};

var _1463=function(M){if(--M.cbt<0){throw _1463;}

//"lambda body for #(struct:LamPositionalName bad-list whalesong/lang/private/list.rkt 138 0 4055 136)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="not a proper list: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1462=function(M){if(--M.cbt<0){throw _1462;}

//"lambda body for #(struct:LamPositionalName findf whalesong/lang/private/list.rkt 123 0 3608 445)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1641)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1642)(M);}};


var _1461=function(M){if(--M.cbt<0){throw _1461;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 126 2 3751 301)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_1628)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1460=function(M){if(--M.cbt<0){throw _1460;}

//"lambda body for #(struct:LamPositionalName memf whalesong/lang/private/list.rkt 111 0 3225 381)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1624)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1625)(M);}};

var _1458=function(M){if(--M.cbt<0){throw _1458;}

//"lambda body for #(struct:LamPositionalName remv* whalesong/lang/private/list.rkt 108 0 3172 51)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym4291;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eqv?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1457=function(M){if(--M.cbt<0){throw _1457;}

//"lambda body for #(struct:LamPositionalName remq* whalesong/lang/private/list.rkt 105 0 3120 50)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym4292;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eq?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1454=function(M){if(--M.cbt<0){throw _1454;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1598)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1455)(M);}};



var _1453=function(M){if(--M.cbt<0){throw _1453;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 90 13 2602 216)"

M.v=(M.e[M.e.length-5]===RT.NULL);
if(M.v===false){return(_1583)(M);}else{M.v=M.e[M.e.length-5];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_1452_c;
M.a=3;
M.c.push(new RT.CallFrame(_1587,M.p));
return(_1452)(M);}};

var _1452=function(M){if(--M.cbt<0){throw _1452;}

//"lambda body for #(struct:LamPositionalName rloop whalesong/lang/private/list.rkt 86 2 2502 320)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1577)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1451=function(M){if(--M.cbt<0){throw _1451;}

//"lambda body for #(struct:LamPositionalName do-remove* whalesong/lang/private/list.rkt 81 0 2350 473)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_1570)(M);}else{M.v=RT.VOID;
return(_1571)(M);}};

var _1562=function(M){M.v=false;
return(_1563)(M);};

var _1448=function(M){if(--M.cbt<0){throw _1448;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:69:4 whalesong/lang/private/list.rkt 69 4 2003 220)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1562)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1563)(M);}};


var _1445=function(M){if(--M.cbt<0){throw _1445;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 61 2 1755 156)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1547)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1444=function(M){if(--M.cbt<0){throw _1444;}

//"lambda body for #(struct:LamPositionalName do-remove whalesong/lang/private/list.rkt 58 0 1649 263)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_1542)(M);}else{M.v=M.e[M.e.length-2];
M.v=RT.VOID;
return(_1543)(M);}};

var _1530=function(M){if(--M.cbt<0){throw _1530;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:394:12 whalesong/lang/private/list.rkt 394 12 14590 81)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2267)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2241=function(M){if(--M.cbt<0){throw _2241;}
if(M.a===0){return(_2238)(M);}else{M.e.push(M.v);
return(_2238)(M);}};

var _1525=function(M){if(--M.cbt<0){throw _1525;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2233,M.p));
return((M.p).label)(M);};

var _1520=function(M){if(--M.cbt<0){throw _1520;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2209,M.p));
return((M.p).label)(M);};

var _1510=function(M){if(--M.cbt<0){throw _1510;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2151,M.p));
return((M.p).label)(M);};

var _2122=function(M){if(--M.cbt<0){throw _2122;}
if(M.a===0){return(_2119)(M);}else{M.e.push(M.v);
return(_2119)(M);}};

var _2096=function(M){if(--M.cbt<0){throw _2096;}
if(M.a===0){return(_2093)(M);}else{M.e.push(M.v);
return(_2093)(M);}};

var _1487=function(M){if(--M.cbt<0){throw _1487;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:252:4 whalesong/lang/private/list.rkt 252 4 8466 168)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym4290;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=RT.NULL;
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2006,M.p));
return((M.p).label)(M);};

var _1472=function(M){if(--M.cbt<0){throw _1472;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:186:13 whalesong/lang/private/list.rkt 186 13 5830 38)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][49];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1447=function(M){if(--M.cbt<0){throw _1447;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:68:4 whalesong/lang/private/list.rkt 68 4 1948 50)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym4276;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["equal?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

_1935.mvr=_1934;
_1945.mvr=_1944;
_1949.mvr=_1948;
_1958.mvr=_1957;
_1978.mvr=_1977;
_1990.mvr=_1989;
_2006.mvr=_2005;
_2018.mvr=_2017;
_2095.mvr=_2096;
_2121.mvr=_2122;
_2128.mvr=_2129;
_2165.mvr=_2164;
_2171.mvr=_2170;
_2223.mvr=_2224;
_2233.mvr=_2234;
_2240.mvr=_2241;
_2247.mvr=_2248;
_2254.mvr=_2253;
_2297.mvr=_2296;
_2299.mvr=_2298;
_2301.mvr=_2300;
_2303.mvr=_2302;
_2305.mvr=_2304;
_2307.mvr=_2306;
_2309.mvr=_2308;
_2311.mvr=_2310;
_2313.mvr=_2312;
_2315.mvr=_2314;
_2317.mvr=_2316;
_2319.mvr=_2318;
_2321.mvr=_2320;
_2323.mvr=_2322;
_2325.mvr=_2324;
_2327.mvr=_2326;
_2329.mvr=_2328;
_2331.mvr=_2330;
_2333.mvr=_2332;
_2335.mvr=_2334;
_2337.mvr=_2336;
_2339.mvr=_2338;
_2341.mvr=_2340;
_2343.mvr=_2342;
_2345.mvr=_2344;
_2347.mvr=_2346;
_2349.mvr=_2348;
_2351.mvr=_2350;
_2353.mvr=_2352;
_2355.mvr=_2354;
_2357.mvr=_2356;
_2359.mvr=_2358;
_2361.mvr=_2360;
_2363.mvr=_2362;
_2365.mvr=_2364;
_2367.mvr=_2366;
_2369.mvr=_2368;
_2371.mvr=_2370;
_2373.mvr=_2372;
_2375.mvr=_2374;
_2377.mvr=_2376;
_2379.mvr=_2378;
_2381.mvr=_2380;
_2383.mvr=_2382;
_2385.mvr=_2384;
_2387.mvr=_2386;
_2393.mvr=_2392;
_2389.mvr=_2388;
_1541.mvr=_1540;
var sym4287=RT.makeSymbol("remq");
var sym4289=RT.makeSymbol("remv");
var sym4290=RT.makeSymbol("foldr");
var sym4278=RT.makeSymbol("assoc");
var sym4291=RT.makeSymbol("remv*");
var sym4273=RT.makeSymbol("assv");
var sym4292=RT.makeSymbol("remq*");
var sym4279=RT.makeSymbol("assq");
var sym4282=RT.makeSymbol("remove*");
var sym4275=RT.makeSymbol("findf");
var sym4284=RT.makeSymbol("assf");
var sym4283=RT.makeSymbol("build-vector");
var sym4274=RT.makeSymbol("compose1");
var sym4286=RT.makeSymbol("filter");
var sym4276=RT.makeSymbol("remove");
var sym4277=RT.makeSymbol("memf");
var sym4288=RT.makeSymbol("foldl");
var sym4280=RT.makeSymbol("build-string");
var sym4285=RT.makeSymbol("compose");
var sym4281=RT.makeSymbol("build-list");var _1445_c=new RT.Closure(_1445,3,void(0),"loop");
var _1488_c=new RT.Closure(_1488,3,void(0),"loop");
var _1477_c=new RT.Closure(_1477,3,void(0),"loop");
var _1483_c=new RT.Closure(_1483,3,void(0),"loop");
var _1516_c=new RT.Closure(_1516,3,void(0),"loop");
var _1537_c=new RT.Closure(_1537,0,void(0),"...private/list.rkt:403:12");
var _1453_c=new RT.Closure(_1453,5,void(0),"loop");
var _1452_c=new RT.Closure(_1452,3,void(0),"rloop");
var _1514_c=new RT.Closure(_1514,2,void(0),"pipeline1");
var _1532_c=new RT.Closure(_1532,0,void(0),"...private/list.rkt:403:12");
var _1476_c=new RT.Closure(_1476,3,void(0),"mapadd");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2395(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/list.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/list.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <UninterpretedSource /Users/dyoo/work/whalesong/whalesong/lang/unsafe/ops.rkt>
(function(M) {
"use strict";
 
M.installedModules["whalesong/lang/unsafe/ops.rkt"] = function() {
    return new plt.runtime.ModuleRecord("whalesong/lang/unsafe/ops.rkt",
        function(M) {
            
             if(--M.cbt<0) { throw arguments.callee; }
             var modrec = M.modules["whalesong/lang/unsafe/ops.rkt"];
             var ns = modrec.getExports();
             var extNs = modrec.getExternalExports();
             modrec.prefix=[void(0),void(0)];modrec.prefix.names=["unsafe-car1.1","unsafe-cdr2.3"];modrec.prefix.internalNames=["unsafe-car","unsafe-cdr"];
             var exports = {};
             modrec.isInvoked = true;
             (function(MACHINE, EXPORTS){
EXPORTS['unsafe-car'] =
    plt.baselib.functions.makePrimitiveProcedure(
        'unsafe-car',
        1,
        function(MACHINE) {
            return MACHINE.e[MACHINE.e.length - 1].first;
        });


EXPORTS['unsafe-cdr'] = 
    plt.baselib.functions.makePrimitiveProcedure(
        'unsafe-cdr',
        1,
        function(MACHINE) {
            return MACHINE.e[MACHINE.e.length - 1].rest;
        });
})(M, exports);
             ns.set("unsafe-car1.1",exports["unsafe-car"]);
extNs.set("unsafe-car",exports["unsafe-car"]);
modrec.prefix[0]=exports["unsafe-car"];
ns.set("unsafe-cdr2.3",exports["unsafe-cdr"]);
extNs.set("unsafe-cdr",exports["unsafe-cdr"]);
modrec.prefix[1]=exports["unsafe-cdr"];

             modrec.privateExports = exports;
             return M.c.pop().label(M);
        });
   }
 }(plt.runtime.currentMachine));
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/hash.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2445=function(M){if(--M.cbt<0){throw _2445;}
M.e.length-=(M.a-1);
return(_2446)(M);};

var _2444=function(M){if(--M.cbt<0){throw _2444;}
M.c.push(new RT.CallFrame(_2446,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2401,2,[M.e[M.e.length-1]],"hash-for-each");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2426=function(M){if(--M.cbt<0){throw _2426;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2428,M.p));
return((M.p).label)(M);};

var _2443=function(M){if(--M.cbt<0){throw _2443;}
M.e.length-=(M.a-1);
return(_2444)(M);};

var _2442=function(M){if(--M.cbt<0){throw _2442;}
M.c.push(new RT.CallFrame(_2444,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2400,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2422=function(M){if(--M.cbt<0){throw _2422;}
M.e[M.e.length-2]=M.v;
return(_2420)(M);};

var _2427=function(M){if(--M.cbt<0){throw _2427;}
M.e.length-=(M.a-1);
return(_2428)(M);};

var _2440=function(M){M.modules["whalesong/lang/private/hash.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("hash-map")||M.primitives["hash-map"],M.primitives["raise-type-error"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["hash-keys"],M.params.currentNamespace.get("hash-for-each")||M.primitives["hash-for-each"],M.primitives["void"],false]);M.e[M.e.length-1].names=["hash-map","raise-type-error","procedure?","procedure-arity-includes?","hash-keys","hash-for-each","void",false];
M.modules["whalesong/lang/private/hash.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2442,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2398,2,[M.e[M.e.length-1]],"hash-map");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2414=function(M){M.e.push(void(0),void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["hash-ref"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-9]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2417,M.p));
return((M.p).label)(M);};

var _2446=function(M){if(--M.cbt<0){throw _2446;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("hash-for-each", prefix[selfMod.getPrefixOffset("hash-for-each")]);extNs.set("hash-for-each", prefix[selfMod.getPrefixOffset("hash-for-each")]);ns.set("hash-map", prefix[selfMod.getPrefixOffset("hash-map")]);extNs.set("hash-map", prefix[selfMod.getPrefixOffset("hash-map")]);}(M.modules["whalesong/lang/private/hash.rkt"],M.modules["whalesong/lang/private/hash.rkt"].getExports(),M.modules["whalesong/lang/private/hash.rkt"].getExternalExports(),M.modules["whalesong/lang/private/hash.rkt"].prefix));
return(M.p)(M);};

var _2428=function(M){if(--M.cbt<0){throw _2428;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][7];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2431=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4349;
M.e[M.e.length-2]="hash";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2432)(M);};

var _2439=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2432=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2435)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2436)(M);}};

var _2423=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["hash-ref"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2426,M.p));
return((M.p).label)(M);};


var _2435=function(M){M.v=false;
return(_2436)(M);};

var _2409=function(M){M.v=false;
return(_2410)(M);};

var _2420=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2436=function(M){if(M.v===false){return(_2433)(M);}else{M.v=RT.VOID;
return(_2434)(M);}};

var _2410=function(M){if(M.v===false){return(_2407)(M);}else{M.v=RT.VOID;
return(_2408)(M);}};

var _2402=function(M){M.c.push(new RT.CallFrame(_2404,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/hash.rkt"]=function(){return new RT.ModuleRecord("hash",_2440);}
return(_2439)(M);};

var _2407=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4350;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2408)(M);};

var _2433=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4349;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2434)(M);};

var _2408=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["hash-keys"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_2399_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_2399)(M);};

var _2434=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][7];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["hash-keys"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2405=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym4350;
M.e[M.e.length-2]="hash";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2406)(M);};

var _2406=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2409)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2410)(M);}};

var _2447=function(M){return(_2402)(M);};

var _2404=function(M){if(--M.cbt<0){throw _2404;}
};

var _2417=function(M){if(--M.cbt<0){throw _2417;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2419,M.p));
return((M.p).label)(M);};

var _2441=function(M){if(--M.cbt<0){throw _2441;}
M.e.length-=(M.a-1);
return(_2442)(M);};

var _2403=function(M){if(--M.cbt<0){throw _2403;}
M.e.length-=(M.a-1);
return(_2404)(M);};

var _2419=function(M){if(--M.cbt<0){throw _2419;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_2399_c;
M.a=3;
M.c.push(new RT.CallFrame(_2422,M.p));
return(_2399)(M);};


var _2400=function(M){if(--M.cbt<0){throw _2400;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/hash.rkt 22 2 694 173)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_2423)(M);}else{M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2399=function(M){if(--M.cbt<0){throw _2399;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/hash.rkt 10 2 288 163)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2414)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2401=function(M){if(--M.cbt<0){throw _2401;}

//"lambda body for #(struct:LamPositionalName hash-for-each whalesong/lang/private/hash.rkt 17 0 455 413)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["hash?"]._i(M);
M.e.pop();
if(M.v===false){return(_2431)(M);}else{M.v=RT.VOID;
return(_2432)(M);}};

var _2398=function(M){if(--M.cbt<0){throw _2398;}

//"lambda body for #(struct:LamPositionalName hash-map whalesong/lang/private/hash.rkt 5 0 64 388)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["hash?"]._i(M);
M.e.pop();
if(M.v===false){return(_2405)(M);}else{M.v=RT.VOID;
return(_2406)(M);}};


_2428.mvr=_2427;
_2442.mvr=_2441;
_2444.mvr=_2443;
_2446.mvr=_2445;
_2404.mvr=_2403;
var sym4349=RT.makeSymbol("hash-for-each");
var sym4350=RT.makeSymbol("hash-map");var _2399_c=new RT.Closure(_2399,3,void(0),"loop");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2447(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/hash.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/hash.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <UninterpretedSource /Users/dyoo/work/whalesong/whalesong/world/main.rkt>
(function(M) {
"use strict";
 
M.installedModules["whalesong/world/main.rkt"] = function() {
    return new plt.runtime.ModuleRecord("whalesong/world/main.rkt",
        function(M) {
            
        var afterName3946 = function() { 
             if(--M.cbt<0) { throw arguments.callee; }
             var modrec = M.modules["whalesong/world/main.rkt"];
             var ns = modrec.getExports();
             var extNs = modrec.getExternalExports();
             modrec.prefix=[void(0),void(0),void(0),void(0),void(0),void(0),void(0)];modrec.prefix.names=["big-bang1.1","key=?5.9","on-key3.5","on-mouse4.7","on-tick2.3","stop-when7.13","to-draw6.11"];modrec.prefix.internalNames=["big-bang","key=?","on-key","on-mouse","on-tick","stop-when","to-draw"];
             var exports = {};
             modrec.isInvoked = true;
             (function(MACHINE, EXPORTS){/*global $,plt*/
var rawJsworld = {};

// Stuff here is copy-and-pasted from Chris King's JSWorld.
//
// dyoo: as I remember, most of this code had been revised from
// Chris's original code by Ethan Cechetti, who rewrote it to
// continuation passing style during summer 2010.

(function() {

    'use strict';

    /* Type signature notation
     * CPS(a b ... -> c) is used to denote
     *    a b ... (c -> void) -> void
     */

    var Jsworld = rawJsworld;

    var currentFocusedNode = false;

    var doNothing = function() {};





    // forEachK: CPS( array CPS(array -> void) (error -> void) -> void )
    // Iterates through an array and applies f to each element using CPS
    // If an error is thrown, it catches the error and calls f_error on it
    var forEachK = function(a, f, f_error, k) {
        var forEachHelp = function(i) {
            if( i >= a.length ) {
                if (k) {
                    return k();
                } else {
                    return;
                }
            }
            try {
                return f(a[i], function() { return forEachHelp(i+1); });
            } catch (e) {
                return Jsworld.shutdown({errorShutdown: e});
            }
        };
        return forEachHelp(0);
    };







    //
    // WORLD STUFFS
    //

    function InitialWorld() {}

    var world = new InitialWorld();
    var worldListeners = [];
    var eventDetachers = [];
    var runningBigBangs = [];

    var changingWorld = false;



    function clear_running_state() {
        var i;
        world = new InitialWorld();
        worldListeners = [];

        for (i = 0; i < eventDetachers.length; i++) {
                eventDetachers[i]();
        }
        eventDetachers = [];
        changingWorld = false;
    }



    // Close all world computations.
    Jsworld.shutdown = function(options) {
        while(runningBigBangs.length > 0) {
            var currentRecord = runningBigBangs.pop();
            if (currentRecord) { currentRecord.pause(); }
            if (options.cleanShutdown) {
                currentRecord.success(world);
            }
            if (options.errorShutdown) {
                currentRecord.fail(options.errorShutdown);
            }
        }
        clear_running_state();
    };



    function add_world_listener(listener) {
        worldListeners.push(listener);
    }


    function remove_world_listener(listener) {
        var i, index = -1;
        for (i = 0; i < worldListeners.length; i++) {
            if (worldListeners[i] === listener) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            worldListeners.splice(index, 1);
        }
    }


    // If we're in the middle of a change_world, delay.
    var DELAY_BEFORE_RETRY = 10;


    // change_world: CPS( CPS(world -> world) -> void )
    // Adjust the world, and notify all listeners.
    var change_world = function(updater, k) {

        // Check to see if we're in the middle of changing
        // the world already.  If so, put on the queue
        // and exit quickly.
        if (changingWorld) {
            setTimeout(
                function() {
                    change_world(updater, k);
                },
                DELAY_BEFORE_RETRY);
            return;
        }


        changingWorld = true;
        var originalWorld = world;

        var changeWorldHelp;
        changeWorldHelp = function() {
            forEachK(worldListeners,
                     function(listener, k2) {
                         listener(world, originalWorld, k2);
                     },
                     function(e) {
                         changingWorld = false;
                         world = originalWorld;
                         throw e; 
                     },
                     function() {
                         changingWorld = false;
                         k();
                     });
        };

        try {
            updater(world, function(newWorld) {
                world = newWorld;
                changeWorldHelp();
            });
        } catch(e) {
            changingWorld = false;
            world = originalWorld;
            return Jsworld.shutdown({errorShutdown: e});
        }
    };
    Jsworld.change_world = change_world;



    var map = function(a1, f) {
        var b = new Array(a1.length), i;
        for (i = 0; i < a1.length; i++) {
                b[i] = f(a1[i]);
        }
        return b;
    };

    var concat_map = function(a, f) {
        var b = [], i;
        for (i = 0; i < a.length; i++) {
                b = b.concat(f(a[i]));
        }
        return b;
    };


    function member(a, x) {
        var i;
        for (i = 0; i < a.length; i++) {
            if (a[i] === x) {
                return true;
            }
        }
        return false;
    }


    //
    // DOM UPDATING STUFFS
    //

    // tree(N): { node: N, children: [tree(N)] }
    // relation(N): { relation: 'parent', parent: N, child: N } | { relation: 'neighbor', left: N, right: N }
    // relations(N): [relation(N)]
    // nodes(N): [N]
    // css(N): [css_node(N)]
    // css_node(N): { node: N, attribs: attribs } | { className: string, attribs: attribs }
    // attrib: { attrib: string, values: [string] }
    // attribs: [attrib]

    // treeable(nodes(N), relations(N)) = bool
    /*function treeable(nodes, relations) {
    // for all neighbor relations between x and y
    for (var i = 0; i < relations.length; i++)
    if (relations[i].relation == 'neighbor') {
    var x = relations[i].left, y = relations[i].right;
 
    // there does not exist a neighbor relation between x and z!=y or z!=x and y
    for (var j = 0; j < relations.length; j++)
    if (relations[j].relation === 'neighbor')
    if (relations[j].left === x && relations[j].right !== y ||
    relations[j].left !== x && relations[j].right === y)
    return false;
    }
 
    // for all parent relations between x and y
    for (var i = 0; i < relations.length; i++)
    if (relations[i].relation == 'parent') {
    var x = relations[i].parent, y = relations[i].child;
 
    // there does not exist a parent relation between z!=x and y
    for (var j = 0; j < relations.length; j++)
    if (relations[j].relation == 'parent')
    if (relations[j].parent !== x && relations[j].child === y)
    return false;
    }
 
    // for all neighbor relations between x and y
    for (var i = 0; i < relations.length; i++)
    if (relations[i].relation == 'neighbor') {
    var x = relations[i].left, y = relations[i].right;
 
    // all parent relations between z and x or y share the same z
    for (var j = 0; j < relations.length; j++)
    if (relations[j].relation == 'parent')
    for (var k = 0; k < relations.length; k++)
    if (relations[k].relation == 'parent')
    if (relations[j].child === x && relations[k].child === y &&
    relations[j].parent !== relations[k].parent)
    return false;
    }
 
    return true;
    }*/


    // node_to_tree: dom -> dom-tree
    // Given a native dom node, produces the appropriate tree.
    function node_to_tree(domNode) {
        var result = [domNode], c;
        for (c = domNode.firstChild; c !== null; c = c.nextSibling) {
            result.push(node_to_tree(c));
        }
        return result;
    }
    Jsworld.node_to_tree = node_to_tree;



    // nodes(tree(N)) = nodes(N)
    function nodes(tree) {
        var ret, i;
        if (tree.node.jsworldOpaque === true) {
            return [tree.node];
        }

        ret = [tree.node];
        for (i = 0; i < tree.children.length; i++) {
            ret = ret.concat(nodes(tree.children[i]));
        }
        return ret;
    }


    // relations(tree(N)) = relations(N)
    function relations(tree) {
        var ret = [];
        var i;
        for (i = 0; i < tree.children.length; i++) {
            ret.push({ relation: 'parent',
                       parent: tree.node,
                       child: tree.children[i].node });
        }

        for (i = 0; i < tree.children.length - 1; i++) {
            ret.push({ relation: 'neighbor',
                       left: tree.children[i].node,
                       right: tree.children[i + 1].node });
        }

        if (! tree.node.jsworldOpaque) {
            for (i = 0; i < tree.children.length; i++) {
                ret = ret.concat(relations(tree.children[i]));
            }
        }

        return ret;
    }





    // Preorder traversal.
    var preorder = function(node, f) {
        f(node, function() {
            var child = node.firstChild;
            var nextSibling;
            while (child) {
                nextSibling = child.nextSibling;
                preorder(child, f);
                child = nextSibling;
            }
        });
    };


    // nodeEq: node node -> boolean
    // Returns true if the two nodes should be the same.
    var nodeEq = function(node1, node2) {
        return (node1 && node2 && node1 === node2);
    };


    // isMemq: X (arrayof X) -> boolean
    // Produces true if any of the elements of L are nodeEq to x.
    var isMemq = function(x, L) {
        var i;
        for (i = 0 ; i < L.length; i++) {
            if (nodeEq(x, L[i])) {
                return true;
            }
        }
        return false;
    };



    // If any node cares about the world, send it in.
    function refresh_node_values(nodes) {
        var i;
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].onWorldChange) {
                nodes[i].onWorldChange(world);
            }
        }
    }



    // update_dom(nodes(Node), relations(Node)) = void
    function update_dom(toplevelNode, nodes, relations) {
        var i, parent, child;
        // TODO: rewrite this to move stuff all in one go... possible? necessary?

        // move all children to their proper parents
        for (i = 0; i < relations.length; i++) {
            if (relations[i].relation === 'parent') {
                parent = relations[i].parent;
                child = relations[i].child;
                if (child.parentNode !== parent) {
                    parent.appendChild(child);
                }
            }
        }

        // arrange siblings in proper order
        // truly terrible... BUBBLE SORT
        var unsorted = true;
        while (unsorted) {
            unsorted = false;
            for (i = 0; i < relations.length; i++) {
                if (relations[i].relation === 'neighbor') {
                    var left = relations[i].left, right = relations[i].right;

                    if (! nodeEq(left.nextSibling, right)) {
                        left.parentNode.insertBefore(left, right);
                        unsorted = true;
                    }
                }
            }
        }

        // Finally, remove nodes that shouldn't be attached anymore.
        var nodesPlus = nodes.concat([toplevelNode]);
        preorder(toplevelNode, function(aNode, continueTraversalDown) {
            if (aNode.jsworldOpaque) {
                if (! isMemq(aNode, nodesPlus)) {
                    aNode.parentNode.removeChild(aNode);
                }
            } else {
                if (! isMemq(aNode, nodesPlus)) {
                    aNode.parentNode.removeChild(aNode);
                } else {
                    continueTraversalDown();
                }
            }
        });

        refresh_node_values(nodes);
    }



    // camelCase: string -> string
    function camelCase(name) {
        return name.replace(/\-(.)/g, function(m, l){return l.toUpperCase();});
    }


    function set_css_attribs(node, attribs) {
        var j;
        for (j = 0; j < attribs.length; j++){
            node.style[camelCase(attribs[j].attrib)] = attribs[j].values.join(" ");
        }
    }


    // isMatchingCssSelector: node css -> boolean
    // Returns true if the CSS selector matches.
    function isMatchingCssSelector(node, css) {
        if (css.id.match(/^\./)) {
            // Check to see if we match the class
            return (node.className && member(node.className.split(/\s+/),
                                             css.id.substring(1)));
        } else {
            return (node.id && node.id === css.id);
        }
    }


    var clearCss = function(node) {
        // FIXME: we should not be clearing the css
//      if ('style' in node)
//          node.style.cssText = "";
    };



    function update_css(nodes, css) {
        // clear CSS
        var i, j;
        for (i = 0; i < nodes.length; i++) {
            if ( !nodes[i].jsworldOpaque ) {
                    clearCss(nodes[i]);
            }
        }

        // set CSS
        for (i = 0; i < css.length; i++) {
            if (css[i].id) {
                for (j = 0; j < nodes.length; j++) {
                    if (isMatchingCssSelector(nodes[j], css[i])) {
                        set_css_attribs(nodes[j], css[i].attribs);
                    }
                }
            } else {
                set_css_attribs(css[i].node, css[i].attribs);
            }
        }
    }



    var sexp2tree;
    var sexp2css;
    var maintainingSelection;



    function do_redraw(world, oldWorld, toplevelNode, redraw_func, redraw_css_func, k) {
        if (oldWorld instanceof InitialWorld) {
            // Simple path
            redraw_func(world,
                function(drawn) {
                        var t = sexp2tree(drawn);
                        var ns = nodes(t);
                        // HACK: css before dom, due to excanvas hack.
                        redraw_css_func(world,
                                function(css) {
                                        update_css(ns, sexp2css(css));
                                        update_dom(toplevelNode, ns, relations(t));
                                        k();
                                });
                });
        } else {
            maintainingSelection(
                function(k2) {
                    redraw_func(
                        world,
                        function(newRedraw) {

                            redraw_css_func(
                                world,
                                function(newRedrawCss) {
                                    var t = sexp2tree(newRedraw);
                                    var ns = nodes(t);
                                    // Try to save the current selection and preserve it across
                                    // dom updates.

                                    // Kludge: update the CSS styles first.
                                    // This is a workaround an issue with excanvas: any style change
                                    // clears the content of the canvas, so we do this first before
                                    // attaching the dom element.
                                    update_css(ns, sexp2css(newRedrawCss));
                                    update_dom(toplevelNode, ns, relations(t));

                                    k2();
                                });
                        });
                }, k);
        }
    }



    var FocusedSelection;

    function hasCurrentFocusedSelection() {
        return currentFocusedNode !== undefined;
    }

    function getCurrentFocusedSelection() {
        return new FocusedSelection();
    }


    // maintainingSelection: (-> void) -> void
    // Calls the thunk f while trying to maintain the current focused selection.
    maintainingSelection = function(f, k) {
        var currentFocusedSelection;
        if (hasCurrentFocusedSelection()) {
            currentFocusedSelection = getCurrentFocusedSelection();
            f(function() {
                currentFocusedSelection.restore();
                k();
            });
        } else {
            f(function() { k(); });
        }
    };



    FocusedSelection = function() {
        this.focused = currentFocusedNode;
        this.selectionStart = currentFocusedNode.selectionStart;
        this.selectionEnd = currentFocusedNode.selectionEnd;
    };

    // Try to restore the focus.
    FocusedSelection.prototype.restore = function() {
        // FIXME: if we're scrolling through, what's visible
        // isn't restored yet.
        if (this.focused.parentNode) {
            this.focused.selectionStart = this.selectionStart;
            this.focused.selectionEnd = this.selectionEnd;
            this.focused.focus();
        } else if (this.focused.id) {
            var matching = document.getElementById(this.focused.id);
            if (matching) {
                matching.selectionStart = this.selectionStart;
                matching.selectionEnd = this.selectionEnd;
                matching.focus();
            }
        }
    };





    //////////////////////////////////////////////////////////////////////

    var bigBang, StopWhenHandler;

    function BigBangRecord(top, world, handlerCreators, handlers, attribs,
                           success, fail) {
        this.top = top;
        this.world = world;
        this.handlers = handlers;
        this.handlerCreators = handlerCreators;
        this.attribs = attribs;
        this.success = success;
        this.fail = fail;
    }

    BigBangRecord.prototype.restart = function() {
        bigBang(this.top, this.world, this.handlerCreators, this.attribs);
    };

    BigBangRecord.prototype.pause = function() {
        var i;
        for(i = 0 ; i < this.handlers.length; i++) {
            if (! (this.handlers[i] instanceof StopWhenHandler)) {
                this.handlers[i].onUnregister(this.top);
            }
        }
    };
    //////////////////////////////////////////////////////////////////////


    var copy_attribs;


    // Notes: bigBang maintains a stack of activation records; it should be possible
    // to call bigBang re-entrantly.
    // top: dom
    // init_world: any
    // handlerCreators: (Arrayof (-> handler))
    // k: any -> void
    bigBang = function(top, init_world, handlerCreators, attribs, succ, fail) {
        var i;
        // clear_running_state();

        // Construct a fresh set of the handlers.
        var handlers = map(handlerCreators, function(x) { return x();} );
        if (runningBigBangs.length > 0) {
            runningBigBangs[runningBigBangs.length - 1].pause();
        }

        // Create an activation record for this big-bang.
        var activationRecord =
            new BigBangRecord(top, init_world, handlerCreators, handlers, attribs, 
                              succ, fail);
        runningBigBangs.push(activationRecord);
        function keepRecordUpToDate(w, oldW, k2) {
            activationRecord.world = w;
            k2();
        }
        add_world_listener(keepRecordUpToDate);



        // Monitor for termination and register the other handlers.
        var stopWhen = new StopWhenHandler(function(w, k2) { k2(false); },
                                           function(w, k2) { k2(w); });
        for(i = 0 ; i < handlers.length; i++) {
            if (handlers[i] instanceof StopWhenHandler) {
                stopWhen = handlers[i];
            } else {
                handlers[i].onRegister(top);
            }
        }
        var watchForTermination = function(w, oldW, k2) {
            stopWhen.test(w,
                          function(stop) {
                              if (stop) {
                                  Jsworld.shutdown({cleanShutdown: true});
                              }
                              else { k2(); }
                          });
        };
        add_world_listener(watchForTermination);


        // Finally, begin the big-bang.
        copy_attribs(top, attribs);
        change_world(function(w, k2) { k2(init_world); }, doNothing);
    };
    Jsworld.bigBang = bigBang;





    // on_tick: number CPS(world -> world) -> handler
    var on_tick = function(delay, tick) {
        return function() {
            var scheduleTick, ticker;
            scheduleTick = function(t) {
                ticker.watchId = setTimeout(
                    function() {
                        ticker.watchId = undefined;
                        var startTime = (new Date()).valueOf();
                        change_world(tick,
                                     function() {
                                         var endTime = (new Date()).valueOf();
                                         scheduleTick(Math.max(delay - (endTime - startTime),
                                                               0));
                                     });
                    },
                    t);
            };

            ticker = {
                watchId: -1,
                onRegister: function (top) {
                    scheduleTick(delay);
                },

                onUnregister: function (top) {
                    if (ticker.watchId) {
                        clearTimeout(ticker.watchId);
                    }
                }
            };
            return ticker;
        };
    };
    Jsworld.on_tick = on_tick;

    var preventDefault, stopPropagation;
    var attachEvent, detachEvent;


    function on_key(press) {
        return function() {
            var wrappedPress = function(e) {
                preventDefault(e);
                stopPropagation(e);
                change_world(function(w, k) { press(w, e, k); }, doNothing);
            };
            return {
                onRegister: function(top) {
                    //http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribue
                    jQuery(top).attr('tabindex', 1);
                    jQuery(top).focus();
                    attachEvent(top, 'keydown', wrappedPress);
                },
                onUnregister: function(top) {
                    detachEvent(top, 'keydown', wrappedPress);
                }
            };
        };
    }
    Jsworld.on_key = on_key;




    // http://www.quirksmode.org/js/events_mouse.html
    // http://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
    function on_mouse(mouse) {
        return function() {
            var isButtonDown = false;
            var makeWrapped = function(type) {
                return function(e) {
                    preventDefault(e);
                    stopPropagation(e);
                    var x = e.pageX, y = e.pageY;
                    var currentElement = e.target;
                    do {
                        x -= currentElement.offsetLeft;
                        y -= currentElement.offsetTop;
                        currentElement = currentElement.offsetParent;
                    } while(currentElement);

                    if (type === 'button-down') {
                        isButtonDown = true;
                    } else if (type === 'button-up') {
                        isButtonDown = false;
                    }
                    if (type === 'move' && isButtonDown) {
                        change_world(function(w, k) {
                            mouse(w, x, y, 'drag', k);
                        }, doNothing);
                    } else {
                        change_world(function(w, k) {
                            mouse(w, x, y, type, k);
                        }, doNothing);
                    }
                };
            };
            var wrappedDown = makeWrapped('button-down');
            var wrappedUp = makeWrapped('button-up');
            // How do we do drag?
            var wrappedMove = makeWrapped('move');
            var wrappedEnter = makeWrapped('enter');
            var wrappedLeave = makeWrapped('leave');
            return {
                onRegister: function(top) {
                    attachEvent(top, 'mousedown', wrappedDown);
                    attachEvent(top, 'mouseup', wrappedUp);
                    attachEvent(top, 'mousemove', wrappedMove);
                    attachEvent(top, 'mouseenter', wrappedEnter);
                    attachEvent(top, 'mouseleave', wrappedLeave);
                },
                onUnregister: function(top) {
                    detachEvent(top, 'mousedown', wrappedDown);
                    detachEvent(top, 'mouseup', wrappedUp);
                    detachEvent(top, 'mousemove', wrappedMove);
                    detachEvent(top, 'mouseenter', wrappedEnter);
                    detachEvent(top, 'mouseleave', wrappedLeave);
                }
            };
        };
    }
    Jsworld.on_mouse = on_mouse;





    var checkDomSexp;


    //  on_draw: CPS(world -> (sexpof node)) CPS(world -> (sexpof css-style)) -> handler
    function on_draw(redraw, redraw_css) {
        var wrappedRedraw = function(w, k) {
            redraw(w, function(newDomTree) {
                checkDomSexp(newDomTree, newDomTree);
                k(newDomTree);
            });
        };

        return function() {
            var drawer = {
                _top: null,
                _listener: function(w, oldW, k2) {
                    do_redraw(w, oldW, drawer._top, wrappedRedraw, redraw_css, k2);
                },
                onRegister: function (top) {
                    drawer._top = top;
                    add_world_listener(drawer._listener);
                },

                onUnregister: function (top) {
                    remove_world_listener(drawer._listener);
                }
            };
            return drawer;
        };
    }
    Jsworld.on_draw = on_draw;



    StopWhenHandler = function(test, receiver) {
        this.test = test;
        this.receiver = receiver;
    };
    // stop_when: CPS(world -> boolean) CPS(world -> boolean) -> handler
    function stop_when(test, receiver) {
        return function() {
            if (receiver === undefined) {
                receiver = function(w, k) { k(w); };
            }
            return new StopWhenHandler(test, receiver);
        };
    }
    Jsworld.stop_when = stop_when;



    function on_world_change(f) {
        var listener = function(world, oldW, k) { f(world, k); };
        return function() {
            return {
                onRegister: function (top) {
                    add_world_listener(listener); },
                onUnregister: function (top) {
                    remove_world_listener(listener); }
            };
        };
    }
    Jsworld.on_world_change = on_world_change;





    // Compatibility for attaching events to nodes.
    attachEvent = function(node, eventName, fn) {
        if (node.addEventListener) {
            // Mozilla
            node.addEventListener(eventName, fn, false);
        } else {
            // IE
            node.attachEvent('on' + eventName, fn, false);
        }
    };

    detachEvent = function(node, eventName, fn) {
        if (node.addEventListener) {
            // Mozilla
            node.removeEventListener(eventName, fn, false);
        } else {
            // IE
            node.detachEvent('on' + eventName, fn, false);
        }
    };

    //
    // DOM CREATION STUFFS
    //

    // add_ev: node string CPS(world event -> world) -> void
    // Attaches a world-updating handler when the world is changed.
    function add_ev(node, event, f) {
        var eventHandler = function(e) { change_world(function(w, k) { f(w, e, k); },
                                                       doNothing); };
        attachEvent(node, event, eventHandler);
        eventDetachers.push(function() { detachEvent(node, event, eventHandler); });
    }

    // add_ev_after: node string CPS(world event -> world) -> void
    // Attaches a world-updating handler when the world is changed, but only
    // after the fired event has finished.
    function add_ev_after(node, event, f) {
        var eventHandler = function(e) {
                setTimeout(function() { change_world(function(w, k) { f(w, e, k); },
                                                     doNothing); },
                           0);
        };

        attachEvent(node, event, eventHandler);
        eventDetachers.push(function() { detachEvent(node, event, eventHandler); });
    }


    function addFocusTracking(node) {
        attachEvent(node, "focus", function(e) {
            currentFocusedNode = node; });
        attachEvent(node, "blur", function(e) {
            currentFocusedNode = undefined;
        });
        return node;
    }





    //
    // WORLD STUFFS
    //


    sexp2tree = function(sexp) {
        if(sexp.length === undefined) { return { node: sexp, children: [] }; }
        else { return { node: sexp[0], children: map(sexp.slice(1), sexp2tree) }; }
    };

    function sexp2attrib(sexp) {
        return { attrib: sexp[0], values: sexp.slice(1) };
    }

    function sexp2css_node(sexp) {
        var attribs = map(sexp.slice(1), sexp2attrib);
        if (typeof sexp[0] === 'string'){
            return [{ id: sexp[0], attribs: attribs }];
        } else if (sexp[0].length !== undefined){
            return map(sexp[0], function (id) { return { id: id, attribs: attribs }; });
        } else {
            return [{ node: sexp[0], attribs: attribs }];
        }
    }

    sexp2css = function(sexp) {
        return concat_map(sexp, sexp2css_node);
    };



    function isTextNode(n) {
        return (n.nodeType === 3);
    }


    function isElementNode(n) {
        return (n.nodeType === 1);
    }

    var JsworldDomError;

    var throwDomError = function(thing, topThing) {
        throw new JsworldDomError(
            plt.baselib.format.format(
                "Expected a non-empty array, received ~s within ~s",
                [thing, topThing]),
            thing);
    };

    // checkDomSexp: X X -> boolean
    // Checks to see if thing is a DOM-sexp.  If not,
    // throws an object that explains why not.
    checkDomSexp = function(thing, topThing) {
        var i;
        if (! thing instanceof Array) {
            throwDomError(thing, topThing);
        }
        if (thing.length === 0) {
            throwDomError(thing, topThing);
        }


        // Check that the first element is a Text or an element.
        if (isTextNode(thing[0])) {
            if (thing.length > 1) {
                throw new JsworldDomError(plt.baselib.format.format("Text node ~s can not have children",
                                                         [thing]),
                                          thing);
            }
        } else if (isElementNode(thing[0])) {
            for (i = 1; i < thing.length; i++) {
                checkDomSexp(thing[i], thing);
            }
        } else {
            if (window.console && window.console.log) { window.console.log(thing[0]); }

            throw new JsworldDomError(
                plt.baselib.format.format(
                    "expected a Text or an Element, received ~s within ~s",
                    [thing, topThing]),
                thing[0]);
        }
    };

    JsworldDomError = function(msg, elt) {
        this.msg = msg;
        this.elt = elt;
    };
    JsworldDomError.prototype.toString = function() {
        return "JsworldDomError: " + this.msg;
    };





    //
    // DOM CREATION STUFFS
    //


    copy_attribs = function(node, attribs) {
        var a;
        if (attribs) {
            for (a in attribs) {
                if (hasOwnProperty.call(attribs, a)) {
                    if (typeof attribs[a] === 'function') {
                        add_ev(node, a, attribs[a]);
                    } else {
                        node[a] = attribs[a];
                    }
                }
            }
        }
        return node;
    };


    //
    // NODE TYPES
    //

    function p(attribs) {
        return addFocusTracking(copy_attribs(document.createElement('p'), attribs));
    }
    Jsworld.p = p;

    function div(attribs) {
        return addFocusTracking(copy_attribs(document.createElement('div'), attribs));
    }
    Jsworld.div = div;

    // Used To Be: (world event -> world) (hashof X Y) -> domElement
    // Now: CPS(world event -> world) (hashof X Y) -> domElement
    function button(f, attribs) {
        var n = document.createElement('button');
        n.onclick = function(e) {return false;};
        add_ev(n, 'click', f);
        return addFocusTracking(copy_attribs(n, attribs));
    }
    Jsworld.button = button;




    preventDefault = function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    };

    stopPropagation = function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    };


    var stopClickPropagation = function(node) {
        attachEvent(node, "click",
                    function(e) {
                        stopPropagation(e);
                    });
        return node;
    };


    var text_input, checkbox_input;

    // input: string CPS(world -> world) 
    function input(aType, updateF, attribs) {
        aType = aType.toLowerCase();
        var dispatchTable = { text : text_input,
                              password: text_input,
                              checkbox: checkbox_input
                              //button: button_input,
                              //radio: radio_input 
        };

        if (dispatchTable[aType]) {
            return (dispatchTable[aType])(aType, updateF, attribs);
        }
        else {
            throw new Error("js-input: does not currently support type " + aType);
        }
    }
    Jsworld.input = input;




    text_input = function(type, updateF, attribs) {
        var n = document.createElement('input');
        n.type = type;

        var lastVal = n.value;
        var onEvent = function() {
            if (! n.parentNode) { return; }
            setTimeout(
                function() {
                    if (lastVal !== n.value) {
                        lastVal = n.value;
                        change_world(function (w, k) {
                            updateF(w, n.value, k);
                        }, doNothing);
                    }
                },
                0);
        };

        attachEvent(n, "keydown", onEvent);
        eventDetachers.push(function() {
            detachEvent(n, "keydown", onEvent); });

        attachEvent(n, "change", onEvent);
        eventDetachers.push(function() {
            detachEvent(n, "change", onEvent); });

        return stopClickPropagation(
            addFocusTracking(copy_attribs(n, attribs)));
    };


    checkbox_input = function(type, updateF, attribs) {
        var n = document.createElement('input');
        n.type = type;
        var onCheck = function(w, e, k) {
            updateF(w, n.checked, k);
        };
        // This established the widget->world direction
        add_ev_after(n, 'change', onCheck);

        attachEvent(n, 'click', function(e) {
            stopPropagation(e);
        });

        return copy_attribs(n, attribs);
    };


    // var button_input = function(type, updateF, attribs) {
    //     var n = document.createElement('button');
    //     add_ev(n, 'click', function(w, e, k) { updateF(w, n.value, k); });
    //     return addFocusTracking(copy_attribs(n, attribs));
    // };




    function text(s, attribs) {
        var result = document.createElement("div");
        result.appendChild(document.createTextNode(String(s)));
        result.jsworldOpaque = true;
        return result;
    }
    Jsworld.text = text;

    var option;

    function select(attribs, opts, f){
        var n = document.createElement('select'), i;
        for(i = 0; i < opts.length; i++) {
            n.add(option({value: opts[i]}), null);
        }
        n.jsworldOpaque = true;
        add_ev(n, 'change', f);
        var result = addFocusTracking(copy_attribs(n, attribs));
        return result;
    }
    Jsworld.select = select;

    option = function(attribs){
        var node = document.createElement("option");
        node.text = attribs.value;
        node.value = attribs.value;
        return node;
    };



    function textarea(attribs){
        return addFocusTracking(copy_attribs(document.createElement('textarea'), attribs));
    }
    Jsworld.textarea = textarea;

    function h1(attribs){
        return addFocusTracking(copy_attribs(document.createElement('h1'), attribs));
    }
    Jsworld.h1 = h1;

    function canvas(attribs){
        return addFocusTracking(copy_attribs(document.createElement('canvas'), attribs));
    }
    Jsworld.canvas = canvas;


    function img(src, attribs) {
        var n = document.createElement('img');
        n.src = src;
        return addFocusTracking(copy_attribs(n, attribs));
    }
    Jsworld.img = img;



    function raw_node(node, attribs) {
        return addFocusTracking(copy_attribs(node, attribs));
    }
    Jsworld.raw_node = raw_node;



}());

var imageLibrary = MACHINE.modules['whalesong/image/private/main.rkt'].privateExports;
var isImage = imageLibrary.isImage;




var PAUSE = plt.runtime.PAUSE;
var EMPTY = plt.baselib.lists.EMPTY;
var isString = plt.baselib.strings.isString;
var isBoolean = function(x) { return x === true || x === false; }
var isSymbol = plt.baselib.symbols.isSymbol;
var makePair = plt.baselib.lists.makePair;
var makeList = plt.baselib.lists.makeList;
var makeRational = plt.baselib.numbers.makeRational;



var finalizeClosureCall = plt.baselib.functions.finalizeClosureCall;





//////////////////////////////////////////////////////////////////////

var bigBang = function(MACHINE, initW, handlers) {
    var outerToplevelNode = jQuery('<span/>').css('padding', '0px').get(0);
    MACHINE.params.currentOutputPort.writeDomNode(MACHINE, outerToplevelNode);
    var toplevelNode = jQuery('<span/>').css('padding', '0px').appendTo(outerToplevelNode).get(0);

    var configs = [];
    var isOutputConfigSeen = false;

    for (var i = 0 ; i < handlers.length; i++) {
        if (isWorldConfigOption(handlers[i])) {
            configs.push(handlers[i].toRawHandler(MACHINE, toplevelNode));
        }
        else {
            configs.push(handlers[i]);
        }
        if (isOutputConfig(handlers[i])) { isOutputConfigSeen = true; }
    }
    
    // If we haven't seen an onDraw function, use the default one.
    if (! isOutputConfigSeen) { 
        configs.push(new DefaultDrawingOutput().toRawHandler(MACHINE, toplevelNode));
    }


    PAUSE(function(restart) {
	var bigBangController = rawJsworld.bigBang(
	    toplevelNode,
	    initW,
	    configs,
	    {},
	    function(finalWorldValue) {
		restart(function(MACHINE) {
		    finalizeClosureCall(
			MACHINE, 
			finalWorldValue);
		});

	    },
            function(err) {
                restart(function(MACHINE) {
                    plt.baselib.exceptions.raise(MACHINE, err);
                });
            });

    });
};





//////////////////////////////////////////////////////////////////////

// Every world configuration function (on-tick, stop-when, ...)
// produces a WorldConfigOption instance.
var WorldConfigOption = function(name) {
    this.name = name;	    
};

WorldConfigOption.prototype.configure = function(config) {
    throw new Error('unimplemented WorldConfigOption');
};


WorldConfigOption.prototype.toDomNode = function(params) {  
    var span = document.createElement('span');
    span.appendChild(document.createTextNode("(" + this.name + " ...)"));
    return span;
};

WorldConfigOption.prototype.toWrittenString = function(cache) {
    return "(" + this.name + " ...)";
};

WorldConfigOption.prototype.toDisplayedString = function(cache) {
    return "(" + this.name + " ...)";
};

var isWorldConfigOption = plt.baselib.makeClassPredicate(WorldConfigOption);

//////////////////////////////////////////////////////////////////////




// adaptWorldFunction: Racket-function -> World-CPS
// Takes a racket function and converts it to the CPS-style function
// that our world implementation expects.
var adaptWorldFunction = function(worldFunction) {
    return function() {
        // Consumes any number of arguments.
        var success = arguments[arguments.length - 1];
        plt.baselib.functions.internalCallDuringPause.apply(
            null,
            [MACHINE,
             worldFunction,
             function(v) {
                 success(v);
             },
             function(err) {
                return rawJsworld.shutdown({errorShutdown: err});
             }].concat([].slice.call(arguments, 0, arguments.length - 1)));
    };
};






//////////////////////////////////////////////////////////////////////

// OnTick: racket-function javascript-float -> handler
var OnTick = function(handler, aDelay) {
    WorldConfigOption.call(this, 'on-tick');
    this.handler = handler;
    this.delay = aDelay;
};

OnTick.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
OnTick.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.on_tick(this.delay, worldFunction);
};


//////////////////////////////////////////////////////////////////////
var OnKey = function(handler) {
    WorldConfigOption.call(this, 'on-key');
    this.handler = handler;
}

OnKey.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
OnKey.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.on_key(
        function(w, e, success) {
            worldFunction(w, getKeyCodeName(e), success);
        });
};


var getKeyCodeName = function(e) {
    var code = e.charCode || e.keyCode;
    var keyname;
    switch(code) {
    case 16: keyname = "shift"; break;
    case 17: keyname = "control"; break;
    case 19: keyname = "pause"; break;
    case 27: keyname = "escape"; break;
    case 33: keyname = "prior"; break;
    case 34: keyname = "next"; break;
    case 35: keyname = "end"; break;
    case 36: keyname = "home"; break;
    case 37: keyname = "left"; break;
    case 38: keyname = "up"; break;
    case 39: keyname = "right"; break;
    case 40: keyname = "down"; break;
    case 42: keyname = "print"; break;
    case 45: keyname = "insert"; break;
    case 46: keyname = String.fromCharCode(127); break;
    case 106: keyname = "*"; break;
    case 107: keyname = "+"; break;
    case 109: keyname = "-"; break;
    case 110: keyname = "."; break;
    case 111: keyname = "/"; break;
    case 144: keyname = "numlock"; break;
    case 145: keyname = "scroll"; break;
    case 186: keyname = ";"; break;
    case 187: keyname = "="; break;
    case 188: keyname = ","; break;
    case 189: keyname = "-"; break;
    case 190: keyname = "."; break;
    case 191: keyname = "/"; break;
    case 192: keyname = "`"; break;
    case 219: keyname = "["; break;
    case 220: keyname = "\\"; break;
    case 221: keyname = "]"; break;
    case 222: keyname = "'"; break;
    default: 
        if (code >= 96 && code <= 105) {
	    keyname = (code - 96).toString();
        } else if (code >= 112 && code <= 123) {
	    keyname = "f" + (code - 111);
	} else {
	    keyname = String.fromCharCode(code).toLowerCase();
	}
	break;
    }
    return keyname;
}
//////////////////////////////////////////////////////////////////////





var OnMouse = function(handler) {
    WorldConfigOption.call(this, 'on-mouse');
    this.handler = handler;
}

OnMouse.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
OnMouse.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.on_mouse(
        function(w, x, y, type, success) {
            worldFunction(w, x, y, type, success);
        });
};








var OutputConfig = function() {}
OutputConfig.prototype = plt.baselib.heir(WorldConfigOption.prototype);
var isOutputConfig = plt.baselib.makeClassPredicate(OutputConfig);





// // ToDraw

var ToDraw = function(handler) {
    WorldConfigOption.call(this, 'to-draw');
    this.handler = handler;
};

ToDraw.prototype = plt.baselib.heir(OutputConfig.prototype);
 
ToDraw.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var reusableCanvas;
    var reusableCanvasNode;
    var adaptedWorldFunction = adaptWorldFunction(this.handler);

    var worldFunction = function(world, success) {

        adaptedWorldFunction(
            world,
            function(v) {
                // fixme: once jsworld supports fail continuations, use them
                // to check the status of the scene object and make sure it's an
                // image.

                
                if (isImage(v) ) {
		    var width = v.getWidth();
		    var height = v.getHeight();

		    if (! reusableCanvas) {
			reusableCanvas = imageLibrary.makeCanvas(width, height);
			// Note: the canvas object may itself manage objects,
			// as in the case of an excanvas.  In that case, we must make
			// sure jsworld doesn't try to disrupt its contents!
			reusableCanvas.jsworldOpaque = true;
			reusableCanvasNode = rawJsworld.node_to_tree(reusableCanvas);
		    }
		    if (reusableCanvas.width !== width) { 
                        reusableCanvas.width = width; 
                    }
		    if (reusableCanvas.height !== height) { 
                        reusableCanvas.height = height;
                    }
		    var ctx = reusableCanvas.getContext("2d");
		    v.render(ctx, 0, 0);
		    success([toplevelNode, reusableCanvasNode]);
		} else {
		    success([toplevelNode, rawJsworld.node_to_tree(plt.baselib.format.toDomNode(v, MACHINE.params['print-mode']))]);
		}
            });
    };

    var cssFunction = function(w, k) { 
        if (reusableCanvas) {
 	    k([[reusableCanvas, 
                ["padding", "0px"],
 		["width", reusableCanvas.width + "px"],
 		["height", reusableCanvas.height + "px"]]]);
        } else {
            k([]); 
        }
    }

    return rawJsworld.on_draw(worldFunction, cssFunction);
};







var DefaultDrawingOutput = function() {
    WorldConfigOption.call(this, 'to-draw');
};

DefaultDrawingOutput.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
DefaultDrawingOutput.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = function(world, success) {
        success([toplevelNode,
                 rawJsworld.node_to_tree(plt.baselib.format.toDomNode(world,
                                                                      MACHINE.params['print-mode']))]);
        //k(rawJsworld.node_to_tree(plt.baselib.format.toDomNode(world)));
    };
    var cssFunction = function(w, success) { success([]); }
    return rawJsworld.on_draw(worldFunction, cssFunction);
};




//////////////////////////////////////////////////////////////////////



var StopWhen = function(handler) {
    WorldConfigOption.call(this, 'stop-when');
    this.handler = handler;
};

StopWhen.prototype = plt.baselib.heir(WorldConfigOption.prototype);

StopWhen.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.stop_when(worldFunction);
};

var PAUSE = plt.runtime.PAUSE;
var makeClosure = plt.baselib.functions.makeClosure;
var makeRational = plt.baselib.numbers.makeRational;
var makePrimitiveProcedure = plt.baselib.functions.makePrimitiveProcedure;


var checkNonNegativeReal = plt.baselib.check.checkNonNegativeReal;
var checkString = plt.baselib.check.checkString;

var checkProcedure = plt.baselib.check.checkProcedure;

// More specific function checkers, based on arity.
var checkProcedure1 = plt.baselib.check.makeCheckArgumentType(
    function(x) { return (plt.baselib.functions.isProcedure(x) &&
                          plt.baselib.arity.isArityMatching(x.racketArity, 1)); },
    'procedure that consumes a world argument');


var checkProcedureWithKey = plt.baselib.check.makeCheckArgumentType(
    function(x) { return (plt.baselib.functions.isProcedure(x) &&
                          plt.baselib.arity.isArityMatching(x.racketArity, 2)); },
    'procedure that consumes a world argument and a key');

var checkProcedureWithMouse = plt.baselib.check.makeCheckArgumentType(
    function(x) { return (plt.baselib.functions.isProcedure(x) &&
                          plt.baselib.arity.isArityMatching(x.racketArity, 4)); },
    'procedure that consumes a world argument, an x and y coordinate, and a mouse event');



var checkHandler = plt.baselib.check.makeCheckArgumentType(
    isWorldConfigOption,
    "world configuration handler");




// The default tick delay is 28 times a second.
var DEFAULT_TICK_DELAY = 1/28;



EXPORTS['big-bang'] = 
    makeClosure(
        'big-bang',
        plt.baselib.arity.makeArityAtLeast(1),
        function(MACHINE) {
            var initialWorldValue = MACHINE.e[MACHINE.e.length - 1];
	    var handlers = [];
	    for (var i = 1; i < MACHINE.a; i++) {
		handlers.push(checkHandler(MACHINE, 'big-bang', i));
	    }
	    bigBang(MACHINE, initialWorldValue, handlers);
        });



EXPORTS['on-tick'] = 
    makePrimitiveProcedure(
        'on-tick',
        plt.baselib.lists.makeList(1, 2),
        function(MACHINE) {
	    if (MACHINE.a === 1) {
		var f = checkProcedure1(MACHINE, "on-tick", 0);
		return new OnTick(f, Math.floor(DEFAULT_TICK_DELAY * 1000));
	    } else if (MACHINE.a === 2) {
		var f = checkProcedure1(MACHINE, "on-tick", 0);
		var delay = checkNonNegativeReal(MACHINE, "on-tick", 1);
		return new OnTick(f, Math.floor(jsnums.toFixnum(delay) * 1000));
	    }
        });



EXPORTS['to-draw'] =
    makePrimitiveProcedure(
        'to-draw',
        1,
        function(MACHINE) {
            var f = checkProcedure1(MACHINE, "on-tick", 0);
            return new ToDraw(f);
        });




EXPORTS['stop-when'] =
    makePrimitiveProcedure(
        'stop-when',
        1,
        function(MACHINE) {
            var f = checkProcedure1(MACHINE, "on-tick", 0);
            return new StopWhen(f);
        });


EXPORTS['on-key'] =
    makePrimitiveProcedure(
        'on-key',
        1,
        function(MACHINE) {
            var f = checkProcedureWithKey(MACHINE, "on-key", 0);
            return new OnKey(f);
        });

EXPORTS['on-mouse'] =
    makePrimitiveProcedure(
        'on-mouse',
        1,
        function(MACHINE) {
            var f = checkProcedureWithMouse(MACHINE, "on-key", 0);
            return new OnMouse(f);
        });



EXPORTS['key=?'] =
    makePrimitiveProcedure(
        'on-key',
        2,
        function(MACHINE) {
            var k1 = checkString(MACHINE, "key=?", 0);
            var k2 = checkString(MACHINE, "key=?", 1);
            return k1.toString().toLowerCase() === k2.toString().toLowerCase();
        });

})(M, exports);
             ns.set("big-bang1.1",exports["big-bang"]);
extNs.set("big-bang",exports["big-bang"]);
modrec.prefix[0]=exports["big-bang"];
ns.set("key=?5.9",exports["key=?"]);
extNs.set("key=?",exports["key=?"]);
modrec.prefix[1]=exports["key=?"];
ns.set("on-key3.5",exports["on-key"]);
extNs.set("on-key",exports["on-key"]);
modrec.prefix[2]=exports["on-key"];
ns.set("on-mouse4.7",exports["on-mouse"]);
extNs.set("on-mouse",exports["on-mouse"]);
modrec.prefix[3]=exports["on-mouse"];
ns.set("on-tick2.3",exports["on-tick"]);
extNs.set("on-tick",exports["on-tick"]);
modrec.prefix[4]=exports["on-tick"];
ns.set("stop-when7.13",exports["stop-when"]);
extNs.set("stop-when",exports["stop-when"]);
modrec.prefix[5]=exports["stop-when"];
ns.set("to-draw6.11",exports["to-draw"]);
extNs.set("to-draw",exports["to-draw"]);
modrec.prefix[6]=exports["to-draw"];

             modrec.privateExports = exports;
             return M.c.pop().label(M); };
        plt.runtime.PAUSE(function(restart) {
             var modName = "whalesong/image.rkt";
             plt.runtime.currentModuleLoader(M,
                                             modName,
                                             function() {
                                                restart(function(M) {
                                                    M.modules[modName] = M.installedModules[modName]();
                                                    if (! M.modules[modName].isInvoked) {
                                                        M.modules[modName].internalInvoke(M,
                                                                                     afterName3946,
                                                                                      M.params.currentErrorHandler);
                                                    } else {
                                                        afterName3946();
                                                    }
                                                })
                                             },
                                             function() {
                                                alert('Could not load ' + modName);
                                             })
       });     
        });
   }
 }(plt.runtime.currentMachine));
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/image.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2458=function(M){if(--M.cbt<0){throw _2458;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/image.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("above", M.modules["whalesong/image/private/main.rkt"].getExports().get("above14.27"));ns.set("above/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("above/align15.29"));ns.set("add-line", M.modules["whalesong/image/private/main.rkt"].getExports().get("add-line27.53"));ns.set("angle?", M.modules["whalesong/image/private/main.rkt"].getExports().get("angle?51.101"));ns.set("beside", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside12.23"));ns.set("beside/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside/align13.25"));ns.set("bitmap/url", M.modules["whalesong/image/private/main.rkt"].getExports().get("bitmap/url3.5"));ns.set("circle", M.modules["whalesong/image/private/main.rkt"].getExports().get("circle29.57"));ns.set("color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("color-alpha", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-alpha"));ns.set("color-blue", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-blue"));ns.set("color-green", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-green"));ns.set("color-list->bitmap", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->bitmap43.85"));ns.set("color-list->image", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->image42.83"));ns.set("color-red", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-red"));ns.set("color?", M.modules["whalesong/image/private/color.rkt"].getExports().get("color?"));ns.set("crop", M.modules["whalesong/image/private/main.rkt"].getExports().get("crop25.49"));ns.set("ellipse", M.modules["whalesong/image/private/main.rkt"].getExports().get("ellipse33.65"));ns.set("empty-scene", M.modules["whalesong/image/private/main.rkt"].getExports().get("empty-scene16.31"));ns.set("flip-horizontal", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-horizontal22.43"));ns.set("flip-vertical", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-vertical23.45"));ns.set("frame", M.modules["whalesong/image/private/main.rkt"].getExports().get("frame24.47"));ns.set("image->color-list", M.modules["whalesong/image/private/main.rkt"].getExports().get("image->color-list41.81"));ns.set("image-baseline", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-baseline46.91"));ns.set("image-color?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-color?47.93"));ns.set("image-height", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-height45.89"));ns.set("image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-url4.7"));ns.set("image-width", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-width44.87"));ns.set("image?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image?54.107"));ns.set("isosceles-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("isosceles-triangle36.71"));ns.set("line", M.modules["whalesong/image/private/main.rkt"].getExports().get("line26.51"));ns.set("make-color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("mode?", M.modules["whalesong/image/private/main.rkt"].getExports().get("mode?48.95"));ns.set("name->color", M.modules["whalesong/image/private/main.rkt"].getExports().get("name->color55.109"));ns.set("open-image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("open-image-url5.9"));ns.set("overlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay6.11"));ns.set("overlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/align8.15"));ns.set("overlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/xy7.13"));ns.set("place-image", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image17.33"));ns.set("place-image/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image/align18.35"));ns.set("radial-star", M.modules["whalesong/image/private/main.rkt"].getExports().get("radial-star38.75"));ns.set("rectangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("rectangle31.61"));ns.set("regular-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("regular-polygon32.63"));ns.set("rhombus", M.modules["whalesong/image/private/main.rkt"].getExports().get("rhombus40.79"));ns.set("right-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("right-triangle35.69"));ns.set("rotate", M.modules["whalesong/image/private/main.rkt"].getExports().get("rotate19.37"));ns.set("scale", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale20.39"));ns.set("scale/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale/xy21.41"));ns.set("scene+line", M.modules["whalesong/image/private/main.rkt"].getExports().get("scene+line28.55"));ns.set("side-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("side-count?52.103"));ns.set("square", M.modules["whalesong/image/private/main.rkt"].getExports().get("square30.59"));ns.set("star", M.modules["whalesong/image/private/main.rkt"].getExports().get("star37.73"));ns.set("star-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("star-polygon39.77"));ns.set("step-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("step-count?53.105"));ns.set("struct:color", M.modules["whalesong/image/private/color.rkt"].getExports().get("struct:color"));ns.set("text", M.modules["whalesong/image/private/main.rkt"].getExports().get("text1.1"));ns.set("text/font", M.modules["whalesong/image/private/main.rkt"].getExports().get("text/font2.3"));ns.set("triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("triangle34.67"));ns.set("underlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay9.17"));ns.set("underlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/align11.21"));ns.set("underlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/xy10.19"));ns.set("x-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("x-place?49.97"));ns.set("y-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("y-place?50.99"));}(M.modules["whalesong/image.rkt"],M.modules["whalesong/image.rkt"].getExports(),M.modules["whalesong/image.rkt"].getExternalExports(),M.modules["whalesong/image.rkt"].prefix));
return(M.p)(M);};

var _2453=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_2455)(M);}else{M.c.push(new RT.CallFrame(_2455,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _2448=function(M){M.c.push(new RT.CallFrame(_2450,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image.rkt"]=function(){return new RT.ModuleRecord("image",_2452);}
return(_2451)(M);};

var _2456=function(M){if(M.modules["whalesong/image/main.rkt"].isInvoked!==false){return(_2458)(M);}else{M.c.push(new RT.CallFrame(_2458,M.p));
return(M.modules["whalesong/image/main.rkt"].label)(M);}};

var _2451=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2450=function(M){if(--M.cbt<0){throw _2450;}
};

var _2454=function(M){if(--M.cbt<0){throw _2454;}
M.e.length-=(M.a-1);
return(_2455)(M);};

var _2455=function(M){if(--M.cbt<0){throw _2455;}
if((M.installedModules["whalesong/image/main.rkt"]!==void(0)&&M.modules["whalesong/image/main.rkt"]!==undefined)!==false){return(_2456)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2456);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2456)(M);}};

var _2449=function(M){if(--M.cbt<0){throw _2449;}
M.e.length-=(M.a-1);
return(_2450)(M);};

var _2457=function(M){if(--M.cbt<0){throw _2457;}
M.e.length-=(M.a-1);
return(_2458)(M);};

var _2452=function(M){M.modules["whalesong/image.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_2453)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2453);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2453)(M);}};

var _2459=function(M){return(_2448)(M);};

_2455.mvr=_2454;
_2458.mvr=_2457;
_2450.mvr=_2449;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2459(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/image/main.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2474=function(M){return(_2460)(M);};

var _2460=function(M){M.c.push(new RT.CallFrame(_2462,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image/main.rkt"]=function(){return new RT.ModuleRecord("main",_2464);}
return(_2463)(M);};

var _2472=function(M){if(--M.cbt<0){throw _2472;}
M.e.length-=(M.a-1);
return(_2473)(M);};

var _2473=function(M){if(--M.cbt<0){throw _2473;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/image/main.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("above", M.modules["whalesong/image/private/main.rkt"].getExports().get("above14.27"));ns.set("above/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("above/align15.29"));ns.set("add-line", M.modules["whalesong/image/private/main.rkt"].getExports().get("add-line27.53"));ns.set("angle?", M.modules["whalesong/image/private/main.rkt"].getExports().get("angle?51.101"));ns.set("beside", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside12.23"));ns.set("beside/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside/align13.25"));ns.set("bitmap/url", M.modules["whalesong/image/private/main.rkt"].getExports().get("bitmap/url3.5"));ns.set("circle", M.modules["whalesong/image/private/main.rkt"].getExports().get("circle29.57"));ns.set("color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("color-alpha", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-alpha"));ns.set("color-blue", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-blue"));ns.set("color-green", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-green"));ns.set("color-list->bitmap", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->bitmap43.85"));ns.set("color-list->image", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->image42.83"));ns.set("color-red", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-red"));ns.set("color?", M.modules["whalesong/image/private/color.rkt"].getExports().get("color?"));ns.set("crop", M.modules["whalesong/image/private/main.rkt"].getExports().get("crop25.49"));ns.set("ellipse", M.modules["whalesong/image/private/main.rkt"].getExports().get("ellipse33.65"));ns.set("empty-scene", M.modules["whalesong/image/private/main.rkt"].getExports().get("empty-scene16.31"));ns.set("flip-horizontal", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-horizontal22.43"));ns.set("flip-vertical", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-vertical23.45"));ns.set("frame", M.modules["whalesong/image/private/main.rkt"].getExports().get("frame24.47"));ns.set("image->color-list", M.modules["whalesong/image/private/main.rkt"].getExports().get("image->color-list41.81"));ns.set("image-baseline", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-baseline46.91"));ns.set("image-color?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-color?47.93"));ns.set("image-height", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-height45.89"));ns.set("image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-url4.7"));ns.set("image-width", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-width44.87"));ns.set("image?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image?54.107"));ns.set("isosceles-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("isosceles-triangle36.71"));ns.set("line", M.modules["whalesong/image/private/main.rkt"].getExports().get("line26.51"));ns.set("make-color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("mode?", M.modules["whalesong/image/private/main.rkt"].getExports().get("mode?48.95"));ns.set("name->color", M.modules["whalesong/image/private/main.rkt"].getExports().get("name->color55.109"));ns.set("open-image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("open-image-url5.9"));ns.set("overlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay6.11"));ns.set("overlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/align8.15"));ns.set("overlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/xy7.13"));ns.set("place-image", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image17.33"));ns.set("place-image/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image/align18.35"));ns.set("radial-star", M.modules["whalesong/image/private/main.rkt"].getExports().get("radial-star38.75"));ns.set("rectangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("rectangle31.61"));ns.set("regular-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("regular-polygon32.63"));ns.set("rhombus", M.modules["whalesong/image/private/main.rkt"].getExports().get("rhombus40.79"));ns.set("right-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("right-triangle35.69"));ns.set("rotate", M.modules["whalesong/image/private/main.rkt"].getExports().get("rotate19.37"));ns.set("scale", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale20.39"));ns.set("scale/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale/xy21.41"));ns.set("scene+line", M.modules["whalesong/image/private/main.rkt"].getExports().get("scene+line28.55"));ns.set("side-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("side-count?52.103"));ns.set("square", M.modules["whalesong/image/private/main.rkt"].getExports().get("square30.59"));ns.set("star", M.modules["whalesong/image/private/main.rkt"].getExports().get("star37.73"));ns.set("star-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("star-polygon39.77"));ns.set("step-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("step-count?53.105"));ns.set("struct:color", M.modules["whalesong/image/private/color.rkt"].getExports().get("struct:color"));ns.set("text", M.modules["whalesong/image/private/main.rkt"].getExports().get("text1.1"));ns.set("text/font", M.modules["whalesong/image/private/main.rkt"].getExports().get("text/font2.3"));ns.set("triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("triangle34.67"));ns.set("underlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay9.17"));ns.set("underlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/align11.21"));ns.set("underlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/xy10.19"));ns.set("x-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("x-place?49.97"));ns.set("y-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("y-place?50.99"));}(M.modules["whalesong/image/main.rkt"],M.modules["whalesong/image/main.rkt"].getExports(),M.modules["whalesong/image/main.rkt"].getExternalExports(),M.modules["whalesong/image/main.rkt"].prefix));
return(M.p)(M);};

var _2467=function(M){if(--M.cbt<0){throw _2467;}
if((M.installedModules["whalesong/image/private/main.rkt"]!==void(0)&&M.modules["whalesong/image/private/main.rkt"]!==undefined)!==false){return(_2468)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/private/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2468);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2468)(M);}};

var _2462=function(M){if(--M.cbt<0){throw _2462;}
};

var _2470=function(M){if(--M.cbt<0){throw _2470;}
if((M.installedModules["whalesong/image/private/color.rkt"]!==void(0)&&M.modules["whalesong/image/private/color.rkt"]!==undefined)!==false){return(_2471)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/private/color.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2471);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2471)(M);}};

var _2466=function(M){if(--M.cbt<0){throw _2466;}
M.e.length-=(M.a-1);
return(_2467)(M);};

var _2463=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2469=function(M){if(--M.cbt<0){throw _2469;}
M.e.length-=(M.a-1);
return(_2470)(M);};

var _2468=function(M){if(M.modules["whalesong/image/private/main.rkt"].isInvoked!==false){return(_2470)(M);}else{M.c.push(new RT.CallFrame(_2470,M.p));
return(M.modules["whalesong/image/private/main.rkt"].label)(M);}};

var _2464=function(M){M.modules["whalesong/image/main.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_2465)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2465);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2465)(M);}};

var _2471=function(M){if(M.modules["whalesong/image/private/color.rkt"].isInvoked!==false){return(_2473)(M);}else{M.c.push(new RT.CallFrame(_2473,M.p));
return(M.modules["whalesong/image/private/color.rkt"].label)(M);}};

var _2465=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_2467)(M);}else{M.c.push(new RT.CallFrame(_2467,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _2461=function(M){if(--M.cbt<0){throw _2461;}
M.e.length-=(M.a-1);
return(_2462)(M);};

_2467.mvr=_2466;
_2470.mvr=_2469;
_2473.mvr=_2472;
_2462.mvr=_2461;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2474(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image/main.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image/main.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <UninterpretedSource /Users/dyoo/work/whalesong/whalesong/image/private/main.rkt>
(function(M) {
"use strict";
 
M.installedModules["whalesong/image/private/main.rkt"] = function() {
    return new plt.runtime.ModuleRecord("whalesong/image/private/main.rkt",
        function(M) {
            
        var afterName4455 = function() { 
             if(--M.cbt<0) { throw arguments.callee; }
             var modrec = M.modules["whalesong/image/private/main.rkt"];
             var ns = modrec.getExports();
             var extNs = modrec.getExternalExports();
             modrec.prefix=[void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0)];modrec.prefix.names=["above14.27","above/align15.29","add-line27.53","angle?51.101","beside12.23","beside/align13.25","bitmap/url3.5","circle29.57","color-list->bitmap43.85","color-list->image42.83","crop25.49","ellipse33.65","empty-scene16.31","flip-horizontal22.43","flip-vertical23.45","frame24.47","image->color-list41.81","image-baseline46.91","image-color?47.93","image-height45.89","image-url4.7","image-width44.87","image?54.107","isosceles-triangle36.71","line26.51","mode?48.95","name->color55.109","open-image-url5.9","overlay6.11","overlay/align8.15","overlay/xy7.13","place-image17.33","place-image/align18.35","radial-star38.75","rectangle31.61","regular-polygon32.63","rhombus40.79","right-triangle35.69","rotate19.37","scale20.39","scale/xy21.41","scene+line28.55","side-count?52.103","square30.59","star37.73","star-polygon39.77","step-count?53.105","text1.1","text/font2.3","triangle34.67","underlay9.17","underlay/align11.21","underlay/xy10.19","x-place?49.97","y-place?50.99"];modrec.prefix.internalNames=["above","above/align","add-line","angle?","beside","beside/align","bitmap/url","circle","color-list->bitmap","color-list->image","crop","ellipse","empty-scene","flip-horizontal","flip-vertical","frame","image->color-list","image-baseline","image-color?","image-height","image-url","image-width","image?","isosceles-triangle","line","mode?","name->color","open-image-url","overlay","overlay/align","overlay/xy","place-image","place-image/align","radial-star","rectangle","regular-polygon","rhombus","right-triangle","rotate","scale","scale/xy","scene+line","side-count?","square","star","star-polygon","step-count?","text","text/font","triangle","underlay","underlay/align","underlay/xy","x-place?","y-place?"];
             var exports = {};
             modrec.isInvoked = true;
             (function(MACHINE, EXPORTS){// This might want to live in the Racket world rather than in
// JavaScript land...


var colorNamespace = MACHINE.modules['whalesong/image/private/color.rkt'].getExternalExports();
var colorStruct = colorNamespace.get('struct:color');
var makeColor = function(r,g,b,a) { return colorStruct.constructor([r,g,b,a]); };



// Color database
var ColorDb = function() {
    this.colors = {};
};


ColorDb.prototype.put = function(name, color) {
    this.colors[name] = color;
};

ColorDb.prototype.get = function(name) {
    return this.colors[name.toString().toUpperCase()];
};


// FIXME: update toString to handle the primitive field values.

var colorDb = new ColorDb();
colorDb.put("ORANGE", makeColor(255, 165, 0));
colorDb.put("RED", makeColor(255, 0, 0));
colorDb.put("ORANGERED", makeColor(255, 69, 0));
colorDb.put("TOMATO", makeColor(255, 99, 71));
colorDb.put("DARKRED", makeColor(139, 0, 0));
colorDb.put("RED", makeColor(255, 0, 0));
colorDb.put("FIREBRICK", makeColor(178, 34, 34));
colorDb.put("CRIMSON", makeColor(220, 20, 60));
colorDb.put("DEEPPINK", makeColor(255, 20, 147));
colorDb.put("MAROON", makeColor(176, 48, 96));
colorDb.put("INDIAN RED", makeColor(205, 92, 92));
colorDb.put("INDIANRED", makeColor(205, 92, 92));
colorDb.put("MEDIUM VIOLET RED", makeColor(199, 21, 133));
colorDb.put("MEDIUMVIOLETRED", makeColor(199, 21, 133));
colorDb.put("VIOLET RED", makeColor(208, 32, 144));
colorDb.put("VIOLETRED", makeColor(208, 32, 144));
colorDb.put("LIGHTCORAL", makeColor(240, 128, 128));
colorDb.put("HOTPINK", makeColor(255, 105, 180));
colorDb.put("PALEVIOLETRED", makeColor(219, 112, 147));
colorDb.put("LIGHTPINK", makeColor(255, 182, 193));
colorDb.put("ROSYBROWN", makeColor(188, 143, 143));
colorDb.put("PINK", makeColor(255, 192, 203));
colorDb.put("ORCHID", makeColor(218, 112, 214));
colorDb.put("LAVENDERBLUSH", makeColor(255, 240, 245));
colorDb.put("SNOW", makeColor(255, 250, 250));
colorDb.put("CHOCOLATE", makeColor(210, 105, 30));
colorDb.put("SADDLEBROWN", makeColor(139, 69, 19));
colorDb.put("BROWN", makeColor(132, 60, 36));
colorDb.put("DARKORANGE", makeColor(255, 140, 0));
colorDb.put("CORAL", makeColor(255, 127, 80));
colorDb.put("SIENNA", makeColor(160, 82, 45));
colorDb.put("ORANGE", makeColor(255, 165, 0));
colorDb.put("SALMON", makeColor(250, 128, 114));
colorDb.put("PERU", makeColor(205, 133, 63));
colorDb.put("DARKGOLDENROD", makeColor(184, 134, 11));
colorDb.put("GOLDENROD", makeColor(218, 165, 32));
colorDb.put("SANDYBROWN", makeColor(244, 164, 96));
colorDb.put("LIGHTSALMON", makeColor(255, 160, 122));
colorDb.put("DARKSALMON", makeColor(233, 150, 122));
colorDb.put("GOLD", makeColor(255, 215, 0));
colorDb.put("YELLOW", makeColor(255, 255, 0));
colorDb.put("OLIVE", makeColor(128, 128, 0));
colorDb.put("BURLYWOOD", makeColor(222, 184, 135));
colorDb.put("TAN", makeColor(210, 180, 140));
colorDb.put("NAVAJOWHITE", makeColor(255, 222, 173));
colorDb.put("PEACHPUFF", makeColor(255, 218, 185));
colorDb.put("KHAKI", makeColor(240, 230, 140));
colorDb.put("DARKKHAKI", makeColor(189, 183, 107));
colorDb.put("MOCCASIN", makeColor(255, 228, 181));
colorDb.put("WHEAT", makeColor(245, 222, 179));
colorDb.put("BISQUE", makeColor(255, 228, 196));
colorDb.put("PALEGOLDENROD", makeColor(238, 232, 170));
colorDb.put("BLANCHEDALMOND", makeColor(255, 235, 205));
colorDb.put("MEDIUM GOLDENROD", makeColor(234, 234, 173));
colorDb.put("MEDIUMGOLDENROD", makeColor(234, 234, 173));
colorDb.put("PAPAYAWHIP", makeColor(255, 239, 213));
colorDb.put("MISTYROSE", makeColor(255, 228, 225));
colorDb.put("LEMONCHIFFON", makeColor(255, 250, 205));
colorDb.put("ANTIQUEWHITE", makeColor(250, 235, 215));
colorDb.put("CORNSILK", makeColor(255, 248, 220));
colorDb.put("LIGHTGOLDENRODYELLOW", makeColor(250, 250, 210));
colorDb.put("OLDLACE", makeColor(253, 245, 230));
colorDb.put("LINEN", makeColor(250, 240, 230));
colorDb.put("LIGHTYELLOW", makeColor(255, 255, 224));
colorDb.put("SEASHELL", makeColor(255, 245, 238));
colorDb.put("BEIGE", makeColor(245, 245, 220));
colorDb.put("FLORALWHITE", makeColor(255, 250, 240));
colorDb.put("IVORY", makeColor(255, 255, 240));
colorDb.put("GREEN", makeColor(0, 255, 0));
colorDb.put("LAWNGREEN", makeColor(124, 252, 0));
colorDb.put("CHARTREUSE", makeColor(127, 255, 0));
colorDb.put("GREEN YELLOW", makeColor(173, 255, 47));
colorDb.put("GREENYELLOW", makeColor(173, 255, 47));
colorDb.put("YELLOW GREEN", makeColor(154, 205, 50));
colorDb.put("YELLOWGREEN", makeColor(154, 205, 50));
colorDb.put("MEDIUM FOREST GREEN", makeColor(107, 142, 35));
colorDb.put("OLIVEDRAB", makeColor(107, 142, 35));
colorDb.put("MEDIUMFORESTGREEN", makeColor(107, 142, 35));
colorDb.put("DARK OLIVE GREEN", makeColor(85, 107, 47));
colorDb.put("DARKOLIVEGREEN", makeColor(85, 107, 47));
colorDb.put("DARKSEAGREEN", makeColor(143, 188, 139));
colorDb.put("LIME", makeColor(0, 255, 0));
colorDb.put("DARK GREEN", makeColor(0, 100, 0));
colorDb.put("DARKGREEN", makeColor(0, 100, 0));
colorDb.put("LIME GREEN", makeColor(50, 205, 50));
colorDb.put("LIMEGREEN", makeColor(50, 205, 50));
colorDb.put("FOREST GREEN", makeColor(34, 139, 34));
colorDb.put("FORESTGREEN", makeColor(34, 139, 34));
colorDb.put("SPRING GREEN", makeColor(0, 255, 127));
colorDb.put("SPRINGGREEN", makeColor(0, 255, 127));
colorDb.put("MEDIUM SPRING GREEN", makeColor(0, 250, 154));
colorDb.put("MEDIUMSPRINGGREEN", makeColor(0, 250, 154));
colorDb.put("SEA GREEN", makeColor(46, 139, 87));
colorDb.put("SEAGREEN", makeColor(46, 139, 87));
colorDb.put("MEDIUM SEA GREEN", makeColor(60, 179, 113));
colorDb.put("MEDIUMSEAGREEN", makeColor(60, 179, 113));
colorDb.put("AQUAMARINE", makeColor(112, 216, 144));
colorDb.put("LIGHTGREEN", makeColor(144, 238, 144));
colorDb.put("PALE GREEN", makeColor(152, 251, 152));
colorDb.put("PALEGREEN", makeColor(152, 251, 152));
colorDb.put("MEDIUM AQUAMARINE", makeColor(102, 205, 170));
colorDb.put("MEDIUMAQUAMARINE", makeColor(102, 205, 170));
colorDb.put("TURQUOISE", makeColor(64, 224, 208));
colorDb.put("LIGHTSEAGREEN", makeColor(32, 178, 170));
colorDb.put("MEDIUM TURQUOISE", makeColor(72, 209, 204));
colorDb.put("MEDIUMTURQUOISE", makeColor(72, 209, 204));
colorDb.put("HONEYDEW", makeColor(240, 255, 240));
colorDb.put("MINTCREAM", makeColor(245, 255, 250));
colorDb.put("ROYALBLUE", makeColor(65, 105, 225));
colorDb.put("DODGERBLUE", makeColor(30, 144, 255));
colorDb.put("DEEPSKYBLUE", makeColor(0, 191, 255));
colorDb.put("CORNFLOWERBLUE", makeColor(100, 149, 237));
colorDb.put("STEEL BLUE", makeColor(70, 130, 180));
colorDb.put("STEELBLUE", makeColor(70, 130, 180));
colorDb.put("LIGHTSKYBLUE", makeColor(135, 206, 250));
colorDb.put("DARK TURQUOISE", makeColor(0, 206, 209));
colorDb.put("DARKTURQUOISE", makeColor(0, 206, 209));
colorDb.put("CYAN", makeColor(0, 255, 255));
colorDb.put("AQUA", makeColor(0, 255, 255));
colorDb.put("DARKCYAN", makeColor(0, 139, 139));
colorDb.put("TEAL", makeColor(0, 128, 128));
colorDb.put("SKY BLUE", makeColor(135, 206, 235));
colorDb.put("SKYBLUE", makeColor(135, 206, 235));
colorDb.put("CADET BLUE", makeColor(96, 160, 160));
colorDb.put("CADETBLUE", makeColor(95, 158, 160));
colorDb.put("DARK SLATE GRAY", makeColor(47, 79, 79));
colorDb.put("DARKSLATEGRAY", makeColor(47, 79, 79));
colorDb.put("LIGHTSLATEGRAY", makeColor(119, 136, 153));
colorDb.put("SLATEGRAY", makeColor(112, 128, 144));
colorDb.put("LIGHT STEEL BLUE", makeColor(176, 196, 222));
colorDb.put("LIGHTSTEELBLUE", makeColor(176, 196, 222));
colorDb.put("LIGHT BLUE", makeColor(173, 216, 230));
colorDb.put("LIGHTBLUE", makeColor(173, 216, 230));
colorDb.put("POWDERBLUE", makeColor(176, 224, 230));
colorDb.put("PALETURQUOISE", makeColor(175, 238, 238));
colorDb.put("LIGHTCYAN", makeColor(224, 255, 255));
colorDb.put("ALICEBLUE", makeColor(240, 248, 255));
colorDb.put("AZURE", makeColor(240, 255, 255));
colorDb.put("MEDIUM BLUE", makeColor(0, 0, 205));
colorDb.put("MEDIUMBLUE", makeColor(0, 0, 205));
colorDb.put("DARKBLUE", makeColor(0, 0, 139));
colorDb.put("MIDNIGHT BLUE", makeColor(25, 25, 112));
colorDb.put("MIDNIGHTBLUE", makeColor(25, 25, 112));
colorDb.put("NAVY", makeColor(36, 36, 140));
colorDb.put("BLUE", makeColor(0, 0, 255));
colorDb.put("INDIGO", makeColor(75, 0, 130));
colorDb.put("BLUE VIOLET", makeColor(138, 43, 226));
colorDb.put("BLUEVIOLET", makeColor(138, 43, 226));
colorDb.put("MEDIUM SLATE BLUE", makeColor(123, 104, 238));
colorDb.put("MEDIUMSLATEBLUE", makeColor(123, 104, 238));
colorDb.put("SLATE BLUE", makeColor(106, 90, 205));
colorDb.put("SLATEBLUE", makeColor(106, 90, 205));
colorDb.put("PURPLE", makeColor(160, 32, 240));
colorDb.put("DARK SLATE BLUE", makeColor(72, 61, 139));
colorDb.put("DARKSLATEBLUE", makeColor(72, 61, 139));
colorDb.put("DARKVIOLET", makeColor(148, 0, 211));
colorDb.put("DARK ORCHID", makeColor(153, 50, 204));
colorDb.put("DARKORCHID", makeColor(153, 50, 204));
colorDb.put("MEDIUMPURPLE", makeColor(147, 112, 219));
colorDb.put("CORNFLOWER BLUE", makeColor(68, 64, 108));
colorDb.put("MEDIUM ORCHID", makeColor(186, 85, 211));
colorDb.put("MEDIUMORCHID", makeColor(186, 85, 211));
colorDb.put("MAGENTA", makeColor(255, 0, 255));
colorDb.put("FUCHSIA", makeColor(255, 0, 255));
colorDb.put("DARKMAGENTA", makeColor(139, 0, 139));
colorDb.put("VIOLET", makeColor(238, 130, 238));
colorDb.put("PLUM", makeColor(221, 160, 221));
colorDb.put("LAVENDER", makeColor(230, 230, 250));
colorDb.put("THISTLE", makeColor(216, 191, 216));
colorDb.put("GHOSTWHITE", makeColor(248, 248, 255));
colorDb.put("WHITE", makeColor(255, 255, 255));
colorDb.put("WHITESMOKE", makeColor(245, 245, 245));
colorDb.put("GAINSBORO", makeColor(220, 220, 220));
colorDb.put("LIGHT GRAY", makeColor(211, 211, 211));
colorDb.put("LIGHTGRAY", makeColor(211, 211, 211));
colorDb.put("SILVER", makeColor(192, 192, 192));
colorDb.put("GRAY", makeColor(190, 190, 190));
colorDb.put("DARK GRAY", makeColor(169, 169, 169));
colorDb.put("DARKGRAY", makeColor(169, 169, 169));
colorDb.put("DIM GRAY", makeColor(105, 105, 105));
colorDb.put("DIMGRAY", makeColor(105, 105, 105));
colorDb.put("BLACK", makeColor(0, 0, 0));



EXPORTS['_colorDb'] = colorDb;

// Basic implementation of the image library.
//
// This should mimic the implementation of 2htdp/image.


//////////////////////////////////////////////////////////////////////
var colorNamespace = MACHINE.modules['whalesong/image/private/color.rkt'].getExternalExports();
var colorStruct = colorNamespace.get('struct:color');
var makeColor = function(r,g,b,a) { return colorStruct.constructor([r,g,b,a]); };
var isColor = colorStruct.predicate;
var colorRed = function(c) { return colorStruct.accessor(c, 0); };
var colorGreen = function(c) { return colorStruct.accessor(c, 1); };
var colorBlue = function(c) { return colorStruct.accessor(c, 2); };
var colorAlpha = function(c) { return colorStruct.accessor(c, 3); };
//////////////////////////////////////////////////////////////////////

var heir = plt.baselib.heir;
var clone = plt.baselib.clone;




var isAngle = function(x) {
    return plt.baselib.numbers.isReal(x) &&
        jsnums.greaterThanOrEqual(x, 0) &&
        jsnums.lessThan(x, 360);
};




// Produces true if the value is a color or a color string.
// On the Racket side of things, this is exposed as image-color?.
var isColorOrColorString = function(thing) {
    return (isColor(thing) ||
	    ((plt.baselib.strings.isString(thing) ||
              plt.baselib.symbols.isSymbol(thing)) &&
	     typeof(colorDb.get(thing)) != 'undefined'));
}






var colorString = function(aColor) {
    return ("rgb(" + 
	    colorRed(aColor) + "," +
	    colorGreen(aColor) + ", " + 
	    colorBlue(aColor) + ")");
};






var isSideCount = function(x) {
    return plt.baselib.numbers.isInteger(x) && jsnums.greaterThanOrEqual(x, 3);
};

var isStepCount = function(x) {
    return plt.baselib.numbers.isInteger(x) && jsnums.greaterThanOrEqual(x, 1);
};


var isPointsCount = function(x) {
    return plt.baselib.numbers.isNatural(x) && jsnums.greaterThanOrEqual(x, 2); 
};





// Produces true if thing is an image-like object.
var isImage = function(thing) {
    if (typeof(thing.getHeight) !== 'function')
        return false;
    if (typeof(thing.getWidth) !== 'function')
        return false;
    if (typeof(thing.getBaseline) !== 'function')
        return false;
    if (typeof(thing.updatePinhole) !== 'function')
        return false;
    if (typeof(thing.render) !== 'function')
        return false;
    return true;
};



// Base class for all images.
var BaseImage = function(pinholeX, pinholeY) {
    this.pinholeX = pinholeX;
    this.pinholeY = pinholeY;
};



BaseImage.prototype.updatePinhole = function(x, y) {
    var aCopy = clone(this);
    aCopy.pinholeX = x;
    aCopy.pinholeY = y;
    return aCopy;
};

BaseImage.prototype.getHeight = function(){
    return this.height;
};

BaseImage.prototype.getWidth = function(){
    return this.width;
};

BaseImage.prototype.getBaseline = function(){
    return this.height;
};


// render: context fixnum fixnum: -> void
// Render the image, where the upper-left corner of the image is drawn at
// (x, y).
// NOTE: the rendering should be oblivous to the pinhole.
BaseImage.prototype.render = function(ctx, x, y) {
    throw new Error('BaseImage.render unimplemented!');
};


// makeCanvas: number number -> canvas
// Constructs a canvas object of a particular width and height.
var makeCanvas = function(width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    jQuery(canvas).css('width', canvas.width + "px");
    jQuery(canvas).css('height', canvas.height + "px");
    jQuery(canvas).css('padding', '0px');

    // KLUDGE: IE compatibility uses /js/excanvas.js, and dynamic
    // elements must be marked this way.
    if (window.G_vmlCanvasManager) {
	canvas = window.G_vmlCanvasManager.initElement(canvas);
    }
    return canvas;
};



var withIeHack = function(canvas, f) {
    // 	canvas.style.display = 'none';
    // 	document.body.appendChild(canvas);
    // 	try {
    var result = f(canvas);
    // 	} catch(e) {
    // 	    document.body.removeChild(canvas);
    // 	    canvas.style.display = '';
    // 	    throw e;
    // 	}
    // 	document.body.removeChild(canvas);
    // 	canvas.style.display = '';
    return result;
};



// Images are expected to define a render() method, which is used
// here to draw to the canvas.
BaseImage.prototype.toDomNode = function(params) {
    var that = this;
    var width = that.getWidth();
    var height = that.getHeight();
    var canvas = makeCanvas(width, height);
    var ctx;

    // // Try best effort to render to screen at this point.
    // try {
    //     ctx = canvas.getContext("2d");
    //     that.render(ctx, 0, 0);
    // } catch (e) {
    // }
    // KLUDGE: on IE, the canvas rendering functions depend on a
    // context where the canvas is attached to the DOM tree.
    // We initialize an afterAttach hook; the client's responsible
    // for calling this after the dom node is attached to the
    // document.
    var onAfterAttach = function(event) {
        // jQuery(canvas).unbind('afterAttach', onAfterAttach);
	var ctx = this.getContext("2d");
	that.render(ctx, 0, 0);
    };
    jQuery(canvas).bind('afterAttach', onAfterAttach);

    // Canvases lose their drawn content on cloning.  data may help us to preserve it.
    jQuery(canvas).data('toRender', onAfterAttach);

    return canvas;
};




BaseImage.prototype.toWrittenString = function(cache) { return "<image>"; }
BaseImage.prototype.toDisplayedString = function(cache) { return "<image>"; }

BaseImage.prototype.equals = function(other, aUnionFind) {
    return (this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY);
};




// isScene: any -> boolean
// Produces true when x is a scene.
var isScene = function(x) {
    return ((x != undefined) && (x != null) && (x instanceof SceneImage));
};


//////////////////////////////////////////////////////////////////////
// SceneImage: primitive-number primitive-number (listof image) -> Scene
var SceneImage = function(width, height, children, withBorder) {
    BaseImage.call(this, Math.floor(width/2), Math.floor(height/2));
    this.width = width;
    this.height = height;
    this.children = children; // arrayof [image, number, number]
    this.withBorder = withBorder;
}
SceneImage.prototype = heir(BaseImage.prototype);


// add: image primitive-number primitive-number -> Scene
SceneImage.prototype.add = function(anImage, x, y) {
    return new SceneImage(this.width, 
			  this.height,
			  this.children.concat([[anImage, 
						 x - anImage.pinholeX, 
						 y - anImage.pinholeY]]),
			  this.withBorder);
};

// render: 2d-context primitive-number primitive-number -> void
SceneImage.prototype.render = function(ctx, x, y) {
    var i;
    var childImage, childX, childY;
    // Clear the scene.
    ctx.clearRect(x, y, this.width, this.height);
    // Then ask every object to render itself.
    for(i = 0; i < this.children.length; i++) {
	childImage = this.children[i][0];
	childX = this.children[i][1];
	childY = this.children[i][2];
	ctx.save();
	childImage.render(ctx, childX + x, childY + y);
	ctx.restore();


    }
    // Finally, draw the black border if withBorder is true
    if (this.withBorder) {
	ctx.strokeStyle = 'black';
	ctx.strokeRect(x, y, this.width, this.height);
    }
};

SceneImage.prototype.equals = function(other, aUnionFind) {
    if (!(other instanceof SceneImage)) {
	return false;
    } 

    if (this.pinholeX != other.pinholeX ||
	this.pinholeY != other.pinholeY ||
	this.width != other.width ||
	this.height != other.height ||
	this.children.length != other.children.length) {
	return false;
    }

    for (var i = 0; i < this.children.length; i++) {
	var rec1 = this.children[i];
	var rec2 = other.children[i];
	if (rec1[1] !== rec2[1] ||
	    rec1[2] !== rec2[2] ||
	    !plt.baselib.equality.equals(rec1[0], 
			                 rec2[0],
			                 aUnionFind)) {
	    return false;
 	}
    }
    return true;
};


//////////////////////////////////////////////////////////////////////
// FileImage: string node -> Image
var FileImage = function(src, rawImage) {
    BaseImage.call(this, 0, 0);
    var self = this;
    this.src = src;
    this.isLoaded = false;

    // animationHack: see installHackToSupportAnimatedGifs() for details.
    this.animationHackImg = undefined;

    if (rawImage && rawImage.complete) { 
	this.img = rawImage;
	this.isLoaded = true;
	this.pinholeX = self.img.width / 2;
	this.pinholeY = self.img.height / 2;
    } else {
	// fixme: we may want to do something blocking here for
	// onload, since we don't know at this time what the file size
	// should be, nor will drawImage do the right thing until the
	// file is loaded.
	this.img = new Image();
	this.img.onload = function() {
	    self.isLoaded = true;
	    self.pinholeX = self.img.width / 2;
	    self.pinholeY = self.img.height / 2;
	};
	this.img.onerror = function(e) {
	    self.img.onerror = "";
	    self.img.src = "http://www.wescheme.org/images/broken.png";
	}
	this.img.src = src;
    }
}
FileImage.prototype = heir(BaseImage.prototype);


var imageCache = {};
FileImage.makeInstance = function(path, rawImage) {
    if (! (path in imageCache)) {
	imageCache[path] = new FileImage(path, rawImage);
    } 
    return imageCache[path];
};

FileImage.installInstance = function(path, rawImage) {
    imageCache[path] = new FileImage(path, rawImage);
};

FileImage.installBrokenImage = function(path) {
    imageCache[path] = new TextImage("Unable to load " + path, 10, colorDb.get("red"),
				     "normal", "Optimer","","",false);
};



FileImage.prototype.render = function(ctx, x, y) {
    this.installHackToSupportAnimatedGifs();
    ctx.drawImage(this.animationHackImg, x, y);
};


// The following is a hack that we use to allow animated gifs to show
// as animating on the canvas.
FileImage.prototype.installHackToSupportAnimatedGifs = function() {
    if (this.animationHackImg) { return; }
    this.animationHackImg = this.img.cloneNode(true);
    document.body.appendChild(this.animationHackImg);
    this.animationHackImg.width = 0;
    this.animationHackImg.height = 0;
};


FileImage.prototype.getWidth = function() {
    return this.img.width;
};


FileImage.prototype.getHeight = function() {
    return this.img.height;
};

// Override toDomNode: we don't need a full-fledged canvas here.
FileImage.prototype.toDomNode = function(params) {
    return this.img.cloneNode(true);
};

FileImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof FileImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.src == other.src);
};

//////////////////////////////////////////////////////////////////////
// VideoImage: String Node -> Video
var VideoImage = function(src, rawVideo) {
    BaseImage.call(this, 0, 0);
    var self = this;
    this.src = src;
    if (rawVideo) { 
	this.video			= rawVideo;
	this.width			= self.video.videoWidth;
	this.height			= self.video.videoHeight;
	this.pinholeX		= self.width / 2;
	this.pinholeY		= self.height / 2;
	this.video.volume	= 1;
	this.video.poster	= "http://www.wescheme.org/images/broken.png";
	this.video.autoplay	= true;
	this.video.autobuffer=true;
	this.video.loop		= true;
	this.video.play();
    } else {
	// fixme: we may want to do something blocking here for
	// onload, since we don't know at this time what the file size
	// should be, nor will drawImage do the right thing until the
	// file is loaded.
	this.video = document.createElement('video');
	this.video.src = src;
	this.video.addEventListener('canplay', function() {
	    this.width			= self.video.videoWidth;
	    this.height			= self.video.videoHeight;
	    this.pinholeX		= self.width / 2;
	    this.pinholeY		= self.height / 2;
	    this.video.poster	= "http://www.wescheme.org/images/broken.png";
	    this.video.autoplay	= true;
	    this.video.autobuffer=true;
	    this.video.loop		= true;
	    this.video.play();
	});
	this.video.addEventListener('error', function(e) {
	    self.video.onerror = "";
	    self.video.poster = "http://www.wescheme.org/images/broken.png";
	});
    }
}
VideoImage.prototype = heir(BaseImage.prototype);


var videos = {};
VideoImage.makeInstance = function(path, rawVideo) {
    if (! (path in VideoImage)) {
	videos[path] = new VideoImage(path, rawVideo);
    } 
    return videos[path];
};

VideoImage.prototype.render = function(ctx, x, y) {
    ctx.drawImage(this.video, x, y);
};

VideoImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof VideoImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.src == other.src);
};


//////////////////////////////////////////////////////////////////////
// OverlayImage: image image placeX placeY -> image
// Creates an image that overlays img1 on top of the
// other image. 
var OverlayImage = function(img1, img2, placeX, placeY) {
    // calculate centers using width/height, so we are scene/image agnostic
    var c1x = img1.getWidth()/2;
    var c1y = img1.getHeight()/2;
    var c2x = img2.getWidth()/2;
    var c2y = img2.getHeight()/2;

    // calculate absolute offset of 2nd image's *CENTER*
    // convert relative X,Y to center offsets, 
    // if placeX and placeY are UL corner offsets, convert to center offsets
    if	(placeX == "left"  )	var xOffset = img2.getWidth()-(c1x+c2x);
    else if (placeX == "right" )	var xOffset = img1.getWidth()-(c1x+c2x);
    else if (placeX == "beside")	var xOffset = c1x+c2x;
    else if (placeX == "middle")	var xOffset = 0;
    else if (placeX == "center")	var xOffset = 0;
    else				var xOffset = placeX - (c1x-c2x);

    if	(placeY == "bottom")	var yOffset = img1.getHeight()-(c1y+c2y);
    else if (placeY == "top")	var yOffset = img2.getHeight()-(c1y+c2y); 
    else if (placeY == "above" )	var yOffset = c1y+c2y;
    else if (placeY == "middle")	var yOffset = 0;
    else if	(placeY == "center")	var yOffset = 0;
    else if (placeY == "baseline")	var yOffset= img1.getBaseline()-img2.getBaseline();
    else				var yOffset = placeY - (c1y-c2y);

    // Correct offsets when dealing with Scenes instead of images,
    // by adding the center values
    if(isScene(img1)){xOffset =+c1x; yOffset =+c1y;}
    if(isScene(img2)){xOffset =+c2x; yOffset =+c2y;}
    
    // The *center* of the 2nd image, once overlaid, changes by the original difference in centers, 
    // plus the size of the offsets. Calculate this delta for X and Y.
    var deltaX	= c1x - c2x + xOffset; 
    var deltaY	= c1y - c2y + yOffset;

    // Each edge of the new, combined image may be grown or shrunk, depending on deltaX or deltaY
    var left	= Math.min(0, deltaX);
    var top		= Math.min(0, deltaY);
    var right	= Math.max(deltaX + img2.getWidth(),  img1.getWidth());
    var bottom	= Math.max(deltaY + img2.getHeight(), img1.getHeight());
    
    // Calculate the new width, height and center based on edge lengths
    this.width = right - left;
    this.height = bottom - top;
    BaseImage.call(this, 
		   Math.floor((right-left) / 2),
		   Math.floor((bottom-top) / 2));

    // store the overlaid images, and the offsets for each
    this.img1 = img1;
    this.img2 = img2;
    this.img1Dx = -left;
    this.img1Dy = -top;
    this.img2Dx = deltaX - left;	
    this.img2Dy = deltaY - top;
};


OverlayImage.prototype = heir(BaseImage.prototype);


OverlayImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    this.img2.render(ctx, x + this.img2Dx, y + this.img2Dy);
    this.img1.render(ctx, x + this.img1Dx, y + this.img1Dy);
    ctx.restore();
};

OverlayImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof OverlayImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.img1Dx == other.img1Dx &&
	     this.img1Dy == other.img1Dy &&
	     this.img2Dx == other.img2Dx &&
	     this.img2Dy == other.img2Dy &&
	     plt.baselib.equality.equals(this.img1, other.img1, aUnionFind) &&
	     plt.baselib.equality.equals(this.img2, other.img2, aUnionFind) );
};


//////////////////////////////////////////////////////////////////////
// rotate: angle image -> image
// Rotates image by angle degrees in a counter-clockwise direction.
// based on http://stackoverflow.com/questions/3276467/adjusting-div-width-and-height-after-rotated
var RotateImage = function(angle, img) {
    var sin   = Math.sin(angle * Math.PI / 180),
        cos = Math.cos(angle * Math.PI / 180);
    var width = img.getWidth();
    var height = img.getHeight();

    // (w,0) rotation
    var x1 = (cos * width),
        y1 = (sin * width);
    
    // (0,h) rotation
    var x2 = (-sin * height),
        y2 = ( cos * height);
    
    // (w,h) rotation
    var x3 = (cos * width - sin * height),
        y3 = (sin * width + cos * height);
    
    var minX = Math.min(0, x1, x2, x3),
        maxX = Math.max(0, x1, x2, x3),
        minY = Math.min(0, y1, y2, y3),
        maxY = Math.max(0, y1, y2, y3);
    
    var rotatedWidth  = maxX - minX,
        rotatedHeight = maxY - minY;
    
    // resize the image
    BaseImage.call(this, 
		   Math.floor(rotatedWidth / 2),
		   Math.floor(rotatedHeight / 2));
    this.img	= img;
    this.width	= Math.floor(rotatedWidth);
    this.height = Math.floor(rotatedHeight);
    this.angle	= angle;
    this.translateX = Math.floor(-minX);
    this.translateY = Math.floor(-minY);
};

RotateImage.prototype = heir(BaseImage.prototype);


// translate the canvas using the calculated values, then draw at the rotated (x,y) offset.
RotateImage.prototype.render = function(ctx, x, y) {
    // calculate the new x and y offsets, by rotating the radius formed by the hypoteneuse
    var sin	= Math.sin(this.angle * Math.PI / 180),
    cos	= Math.cos(this.angle * Math.PI / 180),
    r	= Math.sqrt(x*x + y*y);
    ctx.save();
    ctx.translate(x + this.translateX, y + this.translateY);
    ctx.rotate(this.angle * Math.PI / 180);
    this.img.render(ctx, 0, 0);
    ctx.restore();
};


RotateImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof RotateImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.angle == other.angle &&
	     this.translateX == other.translateX &&
	     this.translateY == other.translateY &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// ScaleImage: factor factor image -> image
// Scale an image
var ScaleImage = function(xFactor, yFactor, img) {
    
    // resize the image
    BaseImage.call(this, 
		   Math.floor((img.getWidth() * xFactor) / 2),
		   Math.floor((img.getHeight() * yFactor) / 2));
    
    this.img	= img;
    this.width	= Math.floor(img.getWidth() * xFactor);
    this.height = Math.floor(img.getHeight() * yFactor);
    this.xFactor = xFactor;
    this.yFactor = yFactor;
};

ScaleImage.prototype = heir(BaseImage.prototype);


// scale the context, and pass it to the image's render function
ScaleImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    ctx.scale(this.xFactor, this.yFactor);
    this.img.render(ctx, x / this.xFactor, y / this.yFactor);
    ctx.restore();
};


ScaleImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof ScaleImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.xFactor == other.xFactor &&
	     this.yFactor == other.yFactor &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// CropImage: startX startY width height image -> image
// Crop an image
var CropImage = function(x, y, width, height, img) {
    
    BaseImage.call(this, 
		   Math.floor(width / 2),
		   Math.floor(height / 2));
    
    this.x		= x;
    this.y		= y;
    this.width	= width;
    this.height = height;
    this.img	= img;
};

CropImage.prototype = heir(BaseImage.prototype);


CropImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    ctx.translate(-this.x, -this.y);
    this.img.render(ctx, x, y);
    ctx.restore();
};

CropImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof CropImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.x == other.x &&
	     this.y == other.y &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// FrameImage: factor factor image -> image
// Stick a frame around the image
var FrameImage = function(img) {
    
    BaseImage.call(this, 
		   Math.floor(img.getWidth()/ 2),
		   Math.floor(img.getHeight()/ 2));
    
    this.img	= img;
    this.width	= img.getWidth();
    this.height = img.getHeight();
};

FrameImage.prototype = heir(BaseImage.prototype);


// scale the context, and pass it to the image's render function
FrameImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    this.img.render(ctx, x, y);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, this.width, this.height);
    ctx.closePath();
    ctx.restore();
};

FrameImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof FrameImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// FlipImage: image string -> image
// Flip an image either horizontally or vertically
var FlipImage = function(img, direction) {
    this.img	= img;
    this.width	= img.getWidth();
    this.height = img.getHeight();
    this.direction = direction;
    BaseImage.call(this, 
		   img.pinholeX,
		   img.pinholeY);
};

FlipImage.prototype = heir(BaseImage.prototype);


FlipImage.prototype.render = function(ctx, x, y) {
    // when flipping an image of dimension M and offset by N across an axis, 
    // we need to translate the canvas by M+2N in the opposite direction
    ctx.save();
    if(this.direction == "horizontal"){
	ctx.scale(-1, 1);
	ctx.translate(-(this.width+2*x), 0);
	this.img.render(ctx, x, y);
    }
    if (this.direction == "vertical"){
	ctx.scale(1, -1);
	ctx.translate(0, -(this.height+2*y));
	this.img.render(ctx, x, y);
    }
    ctx.restore();
};


FlipImage.prototype.getWidth = function() {
    return this.width;
};

FlipImage.prototype.getHeight = function() {
    return this.height;
};

FlipImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof FlipImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.direction == other.direction &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};





//////////////////////////////////////////////////////////////////////
// RectangleImage: Number Number Mode Color -> Image
var RectangleImage = function(width, height, style, color) {
    BaseImage.call(this, width/2, height/2);
    this.width = width;
    this.height = height;
    this.style = style;
    this.color = color;
};
RectangleImage.prototype = heir(BaseImage.prototype);


RectangleImage.prototype.render = function(ctx, x, y) {
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.save();
	ctx.beginPath();
	ctx.strokeStyle = colorString(this.color);
	ctx.strokeRect(x, y, this.width, this.height);
	ctx.closePath();
	ctx.restore();
    } else {
	ctx.save();
	ctx.beginPath();

	ctx.fillStyle = colorString(this.color);
	ctx.fillRect(x, y, this.width, this.height);

	ctx.closePath();
	ctx.restore();
    }
};

RectangleImage.prototype.getWidth = function() {
    return this.width;
};


RectangleImage.prototype.getHeight = function() {
    return this.height;
};

RectangleImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof RectangleImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.width == other.width &&
	    this.height == other.height &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


//////////////////////////////////////////////////////////////////////
// RhombusImage: Number Number Mode Color -> Image
var RhombusImage = function(side, angle, style, color) {
    // sin(angle/2-in-radians) * side = half of base
    this.width = Math.sin(angle/2 * Math.PI / 180) * side * 2;
    // cos(angle/2-in-radians) * side = half of height
    this.height = Math.abs(Math.cos(angle/2 * Math.PI / 180)) * side * 2;
    BaseImage.call(this, this.width/2, this.height/2);
    this.side = side;
    this.angle = angle;
    this.style = style;
    this.color = color;
};
RhombusImage.prototype = heir(BaseImage.prototype);


RhombusImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    ctx.beginPath();
    // if angle < 180 start at the top of the canvas, otherwise start at the bottom
    ctx.moveTo(x+this.getWidth()/2, y);
    ctx.lineTo(x+this.getWidth(), y+this.getHeight()/2);
    ctx.lineTo(x+this.getWidth()/2, y+this.getHeight());
    ctx.lineTo(x, y+this.getHeight()/2);
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

RhombusImage.prototype.getWidth = function() {
    return this.width;
};


RhombusImage.prototype.getHeight = function() {
    return this.height;
};

RhombusImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof RhombusImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.side == other.side &&
	    this.angle == other.angle &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


//////////////////////////////////////////////////////////////////////


var ImageDataImage = function(imageData) {
    BaseImage.call(this, 0, 0);
    this.imageData = imageData;
    this.width = imageData.width;
    this.height = imageData.height;
};

ImageDataImage.prototype = heir(BaseImage.prototype);

ImageDataImage.prototype.render = function(ctx, x, y) {
    ctx.putImageData(this.imageData, x, y);
};

ImageDataImage.prototype.getWidth = function() {
    return this.width;
};


ImageDataImage.prototype.getHeight = function() {
    return this.height;
};

ImageDataImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof ImageDataImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY);
};




//////////////////////////////////////////////////////////////////////
// PolygonImage: Number Count Step Mode Color -> Image
//
// See http://www.algebra.com/algebra/homework/Polygons/Inscribed-and-circumscribed-polygons.lesson
// the polygon is inscribed in a circle, whose radius is length/2sin(pi/count)
// another circle is inscribed in the polygon, whose radius is length/2tan(pi/count)
// rotate a 3/4 quarter turn plus half the angle length to keep bottom base level
var PolygonImage = function(length, count, step, style, color) {
    this.aVertices = [];
    var xMax = 0;
    var yMax = 0;
    var xMin = 0;
    var yMin = 0;
    
    this.outerRadius = Math.floor(length/(2*Math.sin(Math.PI/count)));
    this.innerRadius = Math.floor(length/(2*Math.tan(Math.PI/count)));
    var adjust = (3*Math.PI/2)+Math.PI/count;
    
    // rotate around outer circle, storing x,y pairs as vertices
    // keep track of mins and maxs
    var radians = 0;
    for(var i = 0; i < count; i++) {
	// rotate to the next vertex (skipping by this.step)
	radians = radians + (step*2*Math.PI/count);
	
	var v = {	x: this.outerRadius*Math.cos(radians-adjust),
			y: this.outerRadius*Math.sin(radians-adjust) };
	if(v.x < xMin) xMin = v.x;
	if(v.x > xMax) xMax = v.y;
	if(v.y < yMin) yMin = v.x;
	if(v.y > yMax) yMax = v.y;
	this.aVertices.push(v);		
    }
    // HACK: try to work around handling of non-integer coordinates in CANVAS
    // by ensuring that the boundaries of the canvas are outside of the vertices
    for(var i=0; i<this.aVertices.length; i++){
	if(this.aVertices[i].x < xMin) xMin = this.aVertices[i].x-1;
	if(this.aVertices[i].x > xMax) xMax = this.aVertices[i].x+1;
	if(this.aVertices[i].y < yMin) yMin = this.aVertices[i].y-1;
	if(this.aVertices[i].y > yMax) yMax = this.aVertices[i].y+1;
    }
    
    this.width	= Math.floor(xMax-xMin);
    this.height	= Math.floor(yMax-yMin);
    this.length	= length;
    this.count	= count;
    this.step	= step;
    this.style	= style;
    this.color	= color;
    BaseImage.call(this, Math.floor(this.width/2), Math.floor(this.height/2));
};
PolygonImage.prototype = heir(BaseImage.prototype);


// shift all vertices by an offset to put the center of the polygon at the 
// center of the canvas. Even-sided polygons highest points are in line with
// the innerRadius. Odd-sides polygons highest vertex is on the outerRadius
PolygonImage.prototype.render = function(ctx, x, y) {
    var xOffset = x+Math.round(this.width/2);
    var yOffset = y+((this.count % 2)? this.outerRadius : this.innerRadius);
    
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(xOffset+this.aVertices[0].x, yOffset+this.aVertices[0].y);
    for(var i=1; i<this.aVertices.length; i++){
	ctx.lineTo(xOffset+this.aVertices[i].x, yOffset+this.aVertices[i].y);
    }
    ctx.lineTo(xOffset+this.aVertices[0].x, yOffset+this.aVertices[0].y);
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

PolygonImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof PolygonImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.length == other.length &&
	    this.step == other.step &&
	    this.count == other.count &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


var maybeQuote = function(s) {
    if (/ /.test(s)) {
	return "\"" + s + "\"";
    }
    return s;
}

//////////////////////////////////////////////////////////////////////
// TextImage: String Number Color String String String String any/c -> Image
//////////////////////////////////////////////////////////////////////
// TextImage: String Number Color String String String String any/c -> Image
var TextImage = function(msg, size, color, face, family, style, weight, underline) {	
    var metrics;
    this.msg	= msg;
    this.size	= size;
    this.color	= color;
    this.face	= face;
    this.family = family;
    this.style	= (style == "slant")? "oblique" : style;  // Racket's "slant" -> CSS's "oblique"
    this.weight	= (weight== "light")? "lighter" : weight; // Racket's "light" -> CSS's "lighter"
    this.underline	= underline;
    // example: "bold italic 20px 'Times', sans-serif". 
    // Default weight is "normal", face is "Optimer"
    var canvas	= makeCanvas(0, 0);
    var ctx		= canvas.getContext("2d");
    
    this.font = (this.weight + " " +
		 this.style + " " +
		 this.size + "px " +
		 maybeQuote(this.face) + " " +
		 maybeQuote(this.family));
    try {
	ctx.font	= this.font;
    } catch (e) {
	this.fallbackOnFont();
	ctx.font	= this.font;
    }
    
    // Defensive: on IE, this can break.
    try {
	metrics	= ctx.measureText(msg);
	this.width	= metrics.width;
	this.height	= Number(this.size); 
    } catch(e) {
	this.fallbackOnFont();
    }
    BaseImage.call(this, Math.round(this.width/2), 0);// weird pinhole settings needed for "baseline" alignment
}


TextImage.prototype = heir(BaseImage.prototype);

TextImage.prototype.fallbackOnFont = function() {
    // Defensive: if the browser doesn't support certain features, we
    // reduce to a smaller feature set and try again.
    this.font	= this.size + "px " + maybeQuote(this.family);    
    var canvas	= makeCanvas(0, 0);
    var ctx	= canvas.getContext("2d");
    ctx.font	= this.font;
    var metrics	= ctx.measureText(this.msg);
    this.width	= metrics.width;
    // KLUDGE: I don't know how to get at the height.
    this.height	= Number(this.size);//ctx.measureText("m").width + 20;
};


TextImage.prototype.render = function(ctx, x, y) {
    ctx.save();

    ctx.textAlign	= 'left';
    ctx.textBaseline= 'top';
    ctx.fillStyle	= colorString(this.color);
    ctx.font		= this.font;
    try { 
	ctx.fillText(this.msg, x, y); 
    } catch (e) {
	this.fallbackOnFont();
	ctx.font		= this.font;	
	ctx.fillText(this.msg, x, y); 
    }
    if(this.underline){
	ctx.beginPath();
	ctx.moveTo(x, y+this.size);
	// we use this.size, as it is more accurate for underlining than this.height
	ctx.lineTo(x+this.width, y+this.size);
	ctx.closePath();
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    ctx.restore();
};


TextImage.prototype.getBaseline = function() {
    return this.size;
};

TextImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof TextImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.msg	== other.msg &&
	    this.size	== other.size &&
	    this.face	== other.face &&
	    this.family == other.family &&
	    this.style	== other.style &&
	    this.weight == other.weight &&
	    this.underline == other.underline &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind) &&
	    this.font == other.font);
};


//////////////////////////////////////////////////////////////////////
// StarImage: fixnum fixnum fixnum color -> image
var StarImage = function(points, outer, inner, style, color) {
    BaseImage.call(this,
		   Math.max(outer, inner),
		   Math.max(outer, inner));
    this.points	= points;
    this.outer	= outer;
    this.inner	= inner;
    this.style	= style;
    this.color	= color;
    this.radius	= Math.max(this.inner, this.outer);
    this.width	= this.radius*2;
    this.height	= this.radius*2;
};

StarImage.prototype = heir(BaseImage.prototype);

var oneDegreeAsRadian = Math.PI / 180;

// render: context fixnum fixnum -> void
// Draws a star on the given context.
// Most of this code here adapted from the Canvas tutorial at:
// http://developer.apple.com/safari/articles/makinggraphicswithcanvas.html
StarImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    ctx.beginPath();
    for( var pt = 0; pt < (this.points * 2) + 1; pt++ ) {
	var rads = ( ( 360 / (2 * this.points) ) * pt ) * oneDegreeAsRadian - 0.5;
	var radius = ( pt % 2 == 1 ) ? this.outer : this.inner;
	ctx.lineTo(x + this.radius + ( Math.sin( rads ) * radius ), 
		   y + this.radius + ( Math.cos( rads ) * radius ) );
    }
    ctx.closePath();
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    } else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

StarImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof StarImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.points == other.points &&
	    this.outer == other.outer &&
	    this.inner == other.inner &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};



/////////////////////////////////////////////////////////////////////
//TriangleImage: Number Number Mode Color -> Image
var TriangleImage = function(side, angle, style, color) {
    // sin(angle/2-in-radians) * side = half of base
    this.width = Math.sin(angle/2 * Math.PI / 180) * side * 2;
    // cos(angle/2-in-radians) * side = height of altitude
    this.height = Math.floor(Math.abs(Math.cos(angle/2 * Math.PI / 180)) * side);
    
    BaseImage.call(this, Math.floor(this.width/2), Math.floor(this.height/2));
    this.side = side;
    this.angle = angle;
    this.style = style;
    this.color = color;
}
TriangleImage.prototype = heir(BaseImage.prototype);


TriangleImage.prototype.render = function(ctx, x, y) {
    var width = this.getWidth();
    var height = this.getHeight();
    ctx.save();
    ctx.beginPath();
    // if angle < 180 start at the top of the canvas, otherwise start at the bottom
    if(this.angle < 180){
	ctx.moveTo(x+width/2, y);
	ctx.lineTo(x, y+height);
	ctx.lineTo(x+width, y+height);		
    } else {
	ctx.moveTo(x+width/2, y+height);
	ctx.lineTo(x, y);
	ctx.lineTo(x+width, y);				
    }
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

TriangleImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof TriangleImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.side == other.side &&
	    this.angle == other.angle &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};

/////////////////////////////////////////////////////////////////////
//RightTriangleImage: Number Number Mode Color -> Image
var RightTriangleImage = function(side1, side2, style, color) {
    this.width = side1;
    this.height = side2;
    
    BaseImage.call(this, Math.floor(this.width/2), Math.floor(this.height/2));
    this.side1 = side1;
    this.side2 = side2;
    this.style = style;
    this.color = color;
}
RightTriangleImage.prototype = heir(BaseImage.prototype);


RightTriangleImage.prototype.render = function(ctx, x, y) {
    var width = this.getWidth();
    var height = this.getHeight();
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y+this.side2);
    ctx.lineTo(x+this.side1, y+this.side2);
    ctx.lineTo(x, y);
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

RightTriangleImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof RightTriangleImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.side1 == other.side1 &&
	    this.side2 == other.side2 &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};

//////////////////////////////////////////////////////////////////////
//Ellipse : Number Number Mode Color -> Image
var EllipseImage = function(width, height, style, color) {
    BaseImage.call(this, Math.floor(width/2), Math.floor(height/2));
    this.width = width;
    this.height = height;
    this.style = style;
    this.color = color;
};

EllipseImage.prototype = heir(BaseImage.prototype);


EllipseImage.prototype.render = function(ctx, aX, aY) {
    ctx.save();
    ctx.beginPath();

    // Most of this code is taken from:
    // http://webreflection.blogspot.com/2009/01/ellipse-and-circle-for-canvas-2d.html
    var hB = (this.width / 2) * .5522848,
    vB = (this.height / 2) * .5522848,
    eX = aX + this.width,
    eY = aY + this.height,
    mX = aX + this.width / 2,
    mY = aY + this.height / 2;
    ctx.moveTo(aX, mY);
    ctx.bezierCurveTo(aX, mY - vB, mX - hB, aY, mX, aY);
    ctx.bezierCurveTo(mX + hB, aY, eX, mY - vB, eX, mY);
    ctx.bezierCurveTo(eX, mY + vB, mX + hB, eY, mX, eY);
    ctx.bezierCurveTo(mX - hB, eY, aX, mY + vB, aX, mY);
    ctx.closePath();
    if (this.style.toString().toLowerCase() == "outline") {
 	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
 	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }


    ctx.restore();
};

EllipseImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof EllipseImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.width == other.width &&
	    this.height == other.height &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


//////////////////////////////////////////////////////////////////////
//Line: Number Number Color Boolean -> Image
var LineImage = function(x, y, color, normalPinhole) {
    if (x >= 0) {
	if (y >= 0) {
	    BaseImage.call(this, 0, 0);
	} else {
	    BaseImage.call(this, 0, -y);
	}
    } else {
	if (y >= 0) {
	    BaseImage.call(this, -x, 0);
	} else {
	    BaseImage.call(this, -x, -y);
	}
    }
    
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = Math.abs(x) + 1;
    this.height = Math.abs(y) + 1;
    
    // put the pinhle in the center of the image
    if(normalPinhole){
 	this.pinholeX = this.width/2;
 	this.pinholeY = this.height/2;
    }
}

LineImage.prototype = heir(BaseImage.prototype);


LineImage.prototype.render = function(ctx, xstart, ystart) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = colorString(this.color);
    if (this.x >= 0) {
	if (this.y >= 0) {
	    ctx.moveTo(xstart, ystart);
	    ctx.lineTo((xstart + this.x),
		       (ystart + this.y));
	} else {
	    ctx.moveTo(xstart, ystart + (-this.y));
	    ctx.lineTo(xstart + this.x, ystart);
	}
    } else {
	if (this.y >= 0) {
	    ctx.moveTo(xstart + (-this.x), ystart);
	    ctx.lineTo(xstart,
		       (ystart + this.y));		
	} else {
	    ctx.moveTo(xstart + (-this.x), ystart + (-this.y));
	    ctx.lineTo(xstart, ystart);
	}
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
};


LineImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof LineImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.x == other.x &&
	    this.y == other.y &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};








var imageToColorList = function(img) {
    var width = img.getWidth(),
    height = img.getHeight(),
    canvas = makeCanvas(width, height),
    ctx = canvas.getContext("2d"),
    imageData,
    data,
    i,
    r, g, b, a;
    img.render(ctx, 0, 0);
    imageData = ctx.getImageData(0, 0, width, height);
    data = imageData.data;
    var colors = [];
    for (i = 0 ; i < data.length; i += 4) {
	r = data[i];
	g = data[i+1];
	b = data[i+2];
	a = data[i+3];
	colors.push(makeColor(r, g, b, a));
    }
    return plt.baselib.lists.arrayToList(colors);
}


var colorListToImage = function(listOfColors,
                                width,
                                height,
                                pinholeX,
                                pinholeY) {
    var canvas = makeCanvas(jsnums.toFixnum(width),
			    jsnums.toFixnum(height)),
    ctx = canvas.getContext("2d"),
    imageData = ctx.createImageData(jsnums.toFixnum(width),
				    jsnums.toFixnum(height)),
    data = imageData.data,
    aColor, i = 0;
    while (listOfColors !== plt.baselib.lists.EMPTY) {
	aColor = listOfColors.first;
	data[i] = jsnums.toFixnum(colorRed(aColor));
	data[i+1] = jsnums.toFixnum(colorGreen(aColor));
	data[i+2] = jsnums.toFixnum(colorBlue(aColor));
	data[i+3] = jsnums.toFixnum(colorAlpha(aColor));

	i += 4;
	listOfColors = listOfColors.rest;
    };

    return makeImageDataImage(imageData);
};













var makeSceneImage = function(width, height, children, withBorder) {
    return new SceneImage(width, height, children, withBorder);
};
var makeCircleImage = function(radius, style, color) {
    return new EllipseImage(2*radius, 2*radius, style, color);
};
var makeStarImage = function(points, outer, inner, style, color) {
    return new StarImage(points, outer, inner, style, color);
};
var makeRectangleImage = function(width, height, style, color) {
    return new RectangleImage(width, height, style, color);
};
var makeRhombusImage = function(side, angle, style, color) {
    return new RhombusImage(side, angle, style, color);
};
var makePolygonImage = function(length, count, step, style, color) {
    return new PolygonImage(length, count, step, style, color);
};
var makeSquareImage = function(length, style, color) {
    return new RectangleImage(length, length, style, color);
};
var makeRightTriangleImage = function(side1, side2, style, color) {
    return new RightTriangleImage(side1, side2, style, color);
};
var makeTriangleImage = function(side, angle, style, color) {
    return new TriangleImage(side, angle, style, color);
};
var makeEllipseImage = function(width, height, style, color) {
    return new EllipseImage(width, height, style, color);
};
var makeLineImage = function(x, y, color, normalPinhole) {
    return new LineImage(x, y, color, normalPinhole);
};
var makeOverlayImage = function(img1, img2, X, Y) {
    return new OverlayImage(img1, img2, X, Y);
};
var makeRotateImage = function(angle, img) {
    return new RotateImage(angle, img);
};
var makeScaleImage = function(xFactor, yFactor, img) {
    return new ScaleImage(xFactor, yFactor, img);
};
var makeCropImage = function(x, y, width, height, img) {
    return new CropImage(x, y, width, height, img);
};
var makeFrameImage = function(img) {
    return new FrameImage(img);
};
var makeFlipImage = function(img, direction) {
    return new FlipImage(img, direction);
};
var makeTextImage = function(msg, size, color, face, family, style, weight, underline) {
    return new TextImage(msg, size, color, face, family, style, weight, underline);
};
var makeImageDataImage = function(imageData) {
    return new ImageDataImage(imageData);
};
var makeFileImage = function(path, rawImage) {
    return FileImage.makeInstance(path, rawImage);
};
var makeVideoImage = function(path, rawVideo) {
    return VideoImage.makeInstance(path, rawVideo);
};


var isSceneImage = function(x) { return x instanceof SceneImage; };
var isCircleImage = function(x) { return x instanceof EllipseImage && 
                                  x.width === x.height; };
var isStarImage	= function(x) { return x instanceof StarImage; };
var isRectangleImage=function(x) { return x instanceof RectangleImage; };
var isPolygonImage = function(x) { return x instanceof PolygonImage; };
var isRhombusImage = function(x) { return x instanceof RhombusImage; };
var isSquareImage	= function(x) { return x instanceof SquareImage; };
var isTriangleImage= function(x) { return x instanceof TriangleImage; };
var isRightTriangleImage = function(x) { return x instanceof RightTriangleImage; };
var isEllipseImage = function(x) { return x instanceof EllipseImage; };
var isLineImage	= function(x) { return x instanceof LineImage; };
var isOverlayImage = function(x) { return x instanceof OverlayImage; };
var isRotateImage	= function(x) { return x instanceof RotateImage; };
var isScaleImage	= function(x) { return x instanceof ScaleImage; };
var isCropImage	= function(x) { return x instanceof CropImage; };
var isFrameImage	= function(x) { return x instanceof FrameImage; };
var isFlipImage	= function(x) { return x instanceof FlipImage; };
var isTextImage	= function(x) { return x instanceof TextImage; };
var isFileImage	= function(x) { return x instanceof FileImage; };
var isFileVideo	= function(x) { return x instanceof FileVideo; };




///////////////////////////////////////////////////////////////
// Exports

// These functions are available for direct access without the typechecks
// of the Racket-exposed functions.


EXPORTS.makeCanvas = makeCanvas;



EXPORTS.BaseImage = BaseImage;
EXPORTS.SceneImage = SceneImage;
EXPORTS.FileImage = FileImage;
EXPORTS.VideoImage = VideoImage;
EXPORTS.OverlayImage = OverlayImage;
EXPORTS.RotateImage = RotateImage;
EXPORTS.ScaleImage = ScaleImage;
EXPORTS.CropImage = CropImage;
EXPORTS.FrameImage = FrameImage;
EXPORTS.FlipImage = FlipImage;
EXPORTS.RectangleImage = RectangleImage;
EXPORTS.RhombusImage = RhombusImage;
EXPORTS.ImageDataImage = ImageDataImage;
EXPORTS.PolygonImage = PolygonImage;
EXPORTS.TextImage = TextImage;
EXPORTS.StarImage = StarImage;
EXPORTS.TriangleImage = TriangleImage;
EXPORTS.RightTriangleImage = RightTriangleImage;
EXPORTS.EllipseImage = EllipseImage;
EXPORTS.LineImage = LineImage;
EXPORTS.StarImage = StarImage;



EXPORTS.colorDb = colorDb;

EXPORTS.makeSceneImage = makeSceneImage;
EXPORTS.makeCircleImage = makeCircleImage;
EXPORTS.makeStarImage = makeStarImage;
EXPORTS.makeRectangleImage = makeRectangleImage;
EXPORTS.makeRhombusImage = makeRhombusImage;
EXPORTS.makePolygonImage = makePolygonImage;
EXPORTS.makeSquareImage = makeSquareImage;
EXPORTS.makeRightTriangleImage = makeRightTriangleImage;
EXPORTS.makeTriangleImage = makeTriangleImage;
EXPORTS.makeEllipseImage = makeEllipseImage;
EXPORTS.makeLineImage = makeLineImage;
EXPORTS.makeOverlayImage = makeOverlayImage;
EXPORTS.makeRotateImage = makeRotateImage;
EXPORTS.makeScaleImage = makeScaleImage;
EXPORTS.makeCropImage = makeCropImage;
EXPORTS.makeFrameImage = makeFrameImage;
EXPORTS.makeFlipImage = makeFlipImage;
EXPORTS.makeTextImage = makeTextImage;
EXPORTS.makeImageDataImage = makeImageDataImage;
EXPORTS.makeFileImage = makeFileImage;
EXPORTS.makeVideoImage = makeVideoImage;

EXPORTS.imageToColorList = imageToColorList;
EXPORTS.colorListToImage = colorListToImage;


EXPORTS.isImage = isImage;
EXPORTS.isScene = isScene;
EXPORTS.isColorOrColorString = isColorOrColorString;
EXPORTS.isAngle = isAngle;
EXPORTS.isSideCount = isSideCount;
EXPORTS.isStepCount = isStepCount;
EXPORTS.isPointsCount = isPointsCount;


EXPORTS.isSceneImage = isSceneImage;
EXPORTS.isCircleImage = isCircleImage;
EXPORTS.isStarImage = isStarImage;
EXPORTS.isRectangleImage = isRectangleImage;
EXPORTS.isPolygonImage = isPolygonImage;
EXPORTS.isRhombusImage = isRhombusImage;
EXPORTS.isSquareImage = isSquareImage;
EXPORTS.isTriangleImage = isTriangleImage;
EXPORTS.isRightTriangleImage = isRightTriangleImage;
EXPORTS.isEllipseImage = isEllipseImage;
EXPORTS.isLineImage = isLineImage;
EXPORTS.isOverlayImage = isOverlayImage;
EXPORTS.isRotateImage = isRotateImage;
EXPORTS.isScaleImage = isScaleImage;
EXPORTS.isCropImage = isCropImage;
EXPORTS.isFrameImage = isFrameImage;
EXPORTS.isFlipImage = isFlipImage;
EXPORTS.isTextImage = isTextImage;
EXPORTS.isFileImage = isFileImage;
EXPORTS.isFileVideo = isFileVideo;



EXPORTS.makeColor = makeColor;
EXPORTS.isColor = isColor;
EXPORTS.colorRed = colorRed;
EXPORTS.colorGreen = colorGreen;
EXPORTS.colorBlue = colorBlue;
EXPORTS.colorAlpha = colorAlpha;


var makePrimitiveProcedure = plt.baselib.functions.makePrimitiveProcedure;
var makeClosure = plt.baselib.functions.makeClosure;
var finalizeClosureCall = plt.baselib.functions.finalizeClosureCall;
var PAUSE = plt.runtime.PAUSE;

var checkSymbolOrString = plt.baselib.check.checkSymbolOrString;

var isString = plt.baselib.strings.isString;
var isSymbol = plt.baselib.symbols.isSymbol;


var isFontFamily = function(x){
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "default" ||
	     x.toString().toLowerCase() == "decorative" ||
	     x.toString().toLowerCase() == "roman" ||
	     x.toString().toLowerCase() == "script" ||
	     x.toString().toLowerCase() == "swiss" ||
	     x.toString().toLowerCase() == "modern" ||
	     x.toString().toLowerCase() == "symbol" ||
	     x.toString().toLowerCase() == "system"))
	|| (x === false);		// false is also acceptable
};
var isFontStyle = function(x){
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "normal" ||
	     x.toString().toLowerCase() == "italic" ||
	     x.toString().toLowerCase() == "slant"))
	|| (x === false);		// false is also acceptable
};
var isFontWeight = function(x){
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "normal" ||
	     x.toString().toLowerCase() == "bold" ||
	     x.toString().toLowerCase() == "light"))
	|| (x === false);		// false is also acceptable
};
var isMode = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "solid" ||
	     x.toString().toLowerCase() == "outline"));
};

var isPlaceX = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "left"  ||
	     x.toString().toLowerCase() == "right" ||
	     x.toString().toLowerCase() == "center" ||
	     x.toString().toLowerCase() == "middle"));
};

var isPlaceY = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "top"	  ||
	     x.toString().toLowerCase() == "bottom"   ||
	     x.toString().toLowerCase() == "baseline" ||
	     x.toString().toLowerCase() == "center"   ||
	     x.toString().toLowerCase() == "middle"));
};

var isStyle = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "solid" ||
	     x.toString().toLowerCase() == "outline"));
};






var checkString = plt.baselib.check.checkString;
var checkStringOrFalse = plt.baselib.check.makeCheckArgumentType(
    function(x) { return plt.baselib.strings.isString(x) || x === false; },
    "string or false");

var checkByte = plt.baselib.check.checkByte;
var checkReal = plt.baselib.check.checkReal;
var checkBoolean = plt.baselib.check.checkBoolean;

var checkNatural = plt.baselib.check.checkNatural;

var checkPositiveInteger = plt.baselib.check.makeCheckArgumentType(
    function(x) { return plt.baselib.numbers.isInteger(x) &&
		  plt.baselib.numbers.greaterThan(x, 0);},
    "positive integer");

var checkNonNegativeReal = plt.baselib.check.checkNonNegativeReal;


var _checkColor = plt.baselib.check.makeCheckArgumentType(
    isColorOrColorString,
    'color');

var checkColor = function(MACHINE, functionName, position) {
    var aColor = _checkColor(MACHINE, functionName, position);
    if (colorDb.get(aColor)) {
	aColor = colorDb.get(aColor);
    }
    return aColor;
};

var checkImage = plt.baselib.check.makeCheckArgumentType(
    isImage,
    'image');

var checkImageOrScene = plt.baselib.check.makeCheckArgumentType(
    function(x) { return isImage(x) || isScene(x); },
    'image or scene');

var checkFontFamily = plt.baselib.check.makeCheckArgumentType(
    isFontFamily,
    'font family');

var checkFontStyle = plt.baselib.check.makeCheckArgumentType(
    isFontStyle,
    'font style');

var checkFontWeight = plt.baselib.check.makeCheckArgumentType(
    isFontWeight,
    'font weight');

var checkPlaceX = plt.baselib.check.makeCheckArgumentType(
    isPlaceX,
    'x-place');

var checkPlaceY = plt.baselib.check.makeCheckArgumentType(
    isPlaceY,
    'y-place');


var checkAngle = plt.baselib.check.makeCheckArgumentType(
    isAngle,
    "finite real number between 0 and 360");


var checkMode = plt.baselib.check.makeCheckArgumentType(
    isMode,
    'solid or outline');


var checkSideCount = plt.baselib.check.makeCheckArgumentType(
    isSideCount,
    "positive integer greater than or equal to 3");


var checkStepCount = plt.baselib.check.makeCheckArgumentType(
    isStepCount,
    "positive integer greater than or equal to 1");


var checkPointsCount = plt.baselib.check.makeCheckArgumentType(
    isPointsCount,
    "positive integer greater than or equal to 2");


var checkListofColor = plt.baselib.check.makeCheckListofArgumentType(
    isColor,
    'color');





//////////////////////////////////////////////////////////////////////


EXPORTS['image-color?'] =
    makePrimitiveProcedure(
        'image-color?',
        1,
        function(MACHINE) {
            var elt = MACHINE.e[MACHINE.e.length - 1];
            return (isColorOrColorString(elt));
        });



EXPORTS['mode?'] = 
    makePrimitiveProcedure(
        'mode?',
        1,
        function(MACHINE) {
            return isMode(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['x-place?'] = 
    makePrimitiveProcedure(
        'x-place?',
        1,
        function(MACHINE) {
            return isPlaceX(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['y-place?'] = 
    makePrimitiveProcedure(
        'y-place?',
        1,
        function(MACHINE) {
            return isPlaceY(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['angle?'] = 
    makePrimitiveProcedure(
        'angle?',
        1,
        function(MACHINE) {
            return isAngle(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['side-count?'] = 
    makePrimitiveProcedure(
        'side-count?',
        1,
        function(MACHINE) {
            return isSideCount(MACHINE.e[MACHINE.e.length - 1]);
        });


EXPORTS['step-count?'] = 
    makePrimitiveProcedure(
        'step-count?',
            1,
        function(MACHINE) {
            return isStepCount(MACHINE.e[MACHINE.e.length - 1]);
        });


EXPORTS['image?'] = 
    makePrimitiveProcedure(
        'image?',
            1,
        function(MACHINE) {
            return isImage(MACHINE.e[MACHINE.e.length - 1]);
        });



EXPORTS['text'] =
    makePrimitiveProcedure(
        'text',
        3,
        function(MACHINE) {
	    var aString = checkString(MACHINE,'text', 0);
	    // Unlike 2htdp, we'll allow this to be a positive integer
	    var aSize = checkPositiveInteger(MACHINE, 'text', 1); 
	    var aColor = checkColor(MACHINE, 'text', 2);
	    return makeTextImage(aString.toString(), 
                                 jsnums.toFixnum(aSize),
                                 aColor,
				 "normal",
                                 "Optimer",
                                 "",
                                 "",
                                 false);
        });


EXPORTS['text/font'] = 
    makePrimitiveProcedure(
        'text/font',
        8,
        function(MACHINE) {
            var aString = checkString(MACHINE, "text/font", 0);
	    var aSize = checkByte(MACHINE, "text/font", 1);
	    var aColor = checkColor(MACHINE, "text/font", 2);
	    var aFace = checkStringOrFalse(MACHINE, "text/font", 3);
	    var aFamily = checkFontFamily(MACHINE, "text/font", 4);
	    var aStyle = checkFontStyle(MACHINE, "text/font", 5);
	    var aWeight = checkFontWeight(MACHINE, "text/font", 6);
	    var aUnderline = checkBoolean(MACHINE, "text/font", 7);
	    return makeTextImage(aString.toString(),
                                 jsnums.toFixnum(aSize),
                                 aColor,
				 aFace.toString(),
                                 aFamily.toString(),
                                 aStyle.toString(),
				 aWeight.toString(),
                                 aUnderline);
        });


EXPORTS['bitmap/url'] = 
    makeClosure(
        'bitmap/url',
        1,
        function(MACHINE) {
            var url = checkString(MACHINE, 'bitmap/url', 0);
            PAUSE(
                function(restart) {
                    var rawImage = new Image();
                    rawImage.onload = function() {
                        restart(function(MACHINE) {
                            finalizeClosureCall(
                                MACHINE, 
                                makeFileImage(url.toString(),
                                              rawImage));
                        });
                    };
                    rawImage.onerror = function(e) {
                        restart(function(MACHINE) {
                            plt.baselib.exceptions.raiseFailure(
                                MACHINE, 
                                plt.baselib.format.format(
                                    "unable to load ~a: ~a",
                                    [url,
                                     e.message]));
                        });
                    }
                    rawImage.src = url.toString();
                }
            );
        });

EXPORTS['open-image-url'] = 
    plt.baselib.functions.renameProcedure(EXPORTS['bitmap/url'],
                                          'open-image-url');

EXPORTS['image-url'] = 
    plt.baselib.functions.renameProcedure(EXPORTS['bitmap/url'],
                                          'image-url');




EXPORTS['overlay'] = 
    makePrimitiveProcedure(
        'overlay',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "overlay", 0);
	    var img2 = checkImage(MACHINE, "overlay", 1);
            var restImages = [];
	    for (var i = 2; i < MACHINE.a; i++) {
		restImages.push(checkImage(MACHINE, "overlay", i));
	    }
            
	    var img = makeOverlayImage(img1, img2, "middle", "middle");
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(img, restImages[i], "middle", "middle");
	    }
	    return img;
        });



EXPORTS['overlay/xy'] = 
    makePrimitiveProcedure(
        'overlay/xy',
        4,
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "overlay/xy", 0);
	    var deltaX = checkReal(MACHINE, "overlay/xy", 1);
	    var deltaY = checkReal(MACHINE, "overlay/xy", 2);
	    var img2 = checkImage(MACHINE, "overlay/xy", 3);
	    return makeOverlayImage(img1.updatePinhole(0, 0),
				    img2.updatePinhole(0, 0),
				    jsnums.toFixnum(deltaX),
				    jsnums.toFixnum(deltaY));
        });



 EXPORTS['overlay/align'] = 
     makePrimitiveProcedure(
         'overlay/align',
         plt.baselib.arity.makeArityAtLeast(4),
         function(MACHINE) {
	     var placeX = checkPlaceX(MACHINE, "overlay/align", 0);
	     var placeY = checkPlaceY(MACHINE, "overlay/align", 1);
	     var img1 = checkImage(MACHINE, "overlay/align", 2);
	     var img2 = checkImage(MACHINE, "overlay/align", 3);
             var restImages = [];
	     for (var i = 4; i < MACHINE.a; i++) {
                 restImages.push(checkImage(MACHINE, "overlay/align", i));
             }
	     var img = makeOverlayImage(img1,
					img2,
					placeX.toString(),
					placeY.toString());
	     for (var i = 0; i < restImages.length; i++)
		 img = makeOverlayImage(img,
					restImages[i], 
					placeX.toString(), 
					placeY.toString());
	     return img;
         });





EXPORTS['underlay'] = 
    makePrimitiveProcedure(
        'underlay',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "underlay", 0);
	    var img2 = checkImage(MACHINE, "underlay", 1);
	    var restImages = [];
	    for (var i = 2; i < MACHINE.a; i++) {
		restImages.push(checkImage(MACHINE, "underlay", i));
	    }

	    var img = makeOverlayImage(img2, img1, 0, 0);
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(restImages[i], img, 0, 0);
	    }
	    return img;
        });


EXPORTS['underlay/xy'] = 
    makePrimitiveProcedure(
        'underlay/xy',
        4,
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "underlay/xy", 0);
	    var deltaX = checkReal(MACHINE, "underlay/xy", 1);
	    var deltaY = checkReal(MACHINE, "underlay/xy", 2);
	    var img2 = checkImage(MACHINE, "underlay/xy", 3);
	    return makeOverlayImage(img2.updatePinhole(0, 0), 
				    img1.updatePinhole(0, 0),
				    -(jsnums.toFixnum(deltaX)),
				    -(jsnums.toFixnum(deltaY)));
        });

EXPORTS['underlay/align'] = 
    makePrimitiveProcedure(
        'underlay/align',
        plt.baselib.arity.makeArityAtLeast(4),
        function(MACHINE) {
	    var placeX = checkPlaceX(MACHINE, "underlay/align", 0);
	    var placeY = checkPlaceY(MACHINE, "underlay/align", 1);
	    var img1 = checkImage(MACHINE, "underlay/align", 2);
	    var img2 = checkImage(MACHINE, "underlay/align", 3);
            var restImages = [];
            for (var i = 4; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "underlay/align", i));
            }
	    
	    var img = makeOverlayImage(img2,
				       img1,
				       placeX.toString(),
				       placeY.toString());
	    
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(restImages[i], 
				       img,
				       placeX.toString(), 
				       placeY.toString());
            }
	    return img;
        });



EXPORTS['beside'] = 
    makePrimitiveProcedure(
        'beside',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "beside", 0);
	    var img2 = checkImage(MACHINE, "beside", 1);
            var restImages = [];
	    for (var i = 2; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "beside", i));
            }
	    
	    var img = makeOverlayImage(img1,
				       img2,
				       "beside",
				       "middle");
	    
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(img, restImages[i], "beside", "middle");
            }

            return img;
	});


EXPORTS['beside/align'] = 
    makePrimitiveProcedure(
        'beside/align',
        plt.baselib.arity.makeArityAtLeast(3),
        function(MACHINE) {
	    var placeY = checkPlaceY(MACHINE, "beside/align", 0);
	    var img1 = checkImage(MACHINE, "beside/align", 1);
	    var img2 = checkImage(MACHINE, "beside/align", 2);
            var restImages = [];
            for (var i = 3; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "beside/align", i));
            }

	    var img = makeOverlayImage(img1,
				       img2,
				       "beside",
				       placeY.toString());
	    
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(img,
				       restImages[i], 
				       "beside",
				       placeY.toString());
            }
	    
	    return img;

        });

EXPORTS['above'] = 
    makePrimitiveProcedure(
        'above',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "above", 0);
	    var img2 = checkImage(MACHINE, "above", 1);
	    var restImages = [];
            for (var i = 2; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "above", i));
            }
	    
	    var img = makeOverlayImage(img1,
				       img2,
				       "middle",
				       "above");
	    
	    for (var i = 0; i < restImages.length; i++)
		img = makeOverlayImage(img,
				       restImages[i], 
				       "middle",
				       "above");
            return img;
	    
        });

EXPORTS['above/align'] = 
    makePrimitiveProcedure(
        'above/align',
        plt.baselib.arity.makeArityAtLeast(3),
        function(MACHINE) {
	    var placeX = checkPlaceX(MACHINE, "above/align", 0);
	    var img1 = checkImage(MACHINE, "above/align", 1);
	    var img2 = checkImage(MACHINE, "above/align", 2);
            var restImages = [];
            for (var i = 3; i < MACHINE.a; i++) {
	        restImages.push(checkImage(MACHINE, "above/align", i));
            }

	    
	    var img = makeOverlayImage(img1,
				       img2,
				       placeX.toString(),
				       "above");
	    
	    for (var i = 0; i < restImages.length; i++)
		img = makeOverlayImage(img,
				       restImages[i], 
				       placeX.toString(),
				       "above");
	    
	    return img;
        });




EXPORTS['empty-scene'] =
    makePrimitiveProcedure(
        'empty-scene',
	2,
	function(MACHINE) {
	    var width = checkNonNegativeReal(MACHINE, 'empty-scene', 0);
	    var height = checkNonNegativeReal(MACHINE, 'empty-scene', 1);
	    return makeSceneImage(jsnums.toFixnum(width), 
                                  jsnums.toFixnum(height),
                                  [],
                                  true);
	});



EXPORTS['place-image'] = 
    makePrimitiveProcedure(
        'place-image',
        4,
        function(MACHINE) {
	    var picture = checkImage(MACHINE, "place-image", 0);
	    var x = checkReal(MACHINE, "place-image", 1);
	    var y = checkReal(MACHINE, "place-image", 2);
            var background = checkImageOrScene(MACHINE, "place-image", 3);
	    if (isScene(background)) {
		return background.add(picture, jsnums.toFixnum(x), jsnums.toFixnum(y));
	    } else {
		var newScene = makeSceneImage(background.getWidth(),
					      background.getHeight(),
					      [], 
					      false);
		newScene = newScene.add(background.updatePinhole(0, 0), 0, 0);
		newScene = newScene.add(picture, jsnums.toFixnum(x), jsnums.toFixnum(y));
		return newScene;
	    }

        });



EXPORTS['place-image/align'] = 
    makePrimitiveProcedure(
        'place-image/align',
        6,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "place-image/align", 0);
	    var x = checkReal(MACHINE, "place-image/align", 1);
	    var y = checkReal(MACHINE, "place-image/align", 2);
	    var placeX = checkPlaceX(MACHINE, "place-image/align", 3);
	    var placeY = checkPlaceY(MACHINE, "place-image/align", 4);
	    var background = checkImageOrScene(MACHINE, "place-image/align", 5);
	    
	    // calculate x and y based on placeX and placeY
	    if (placeX == "left") x = x + img.pinholeX;
	    else if (placeX == "right") x = x - img.pinholeX;
	    if (placeY == "top") y = y + img.pinholeY;
	    else if (placeY == "bottom") y = y - img.pinholeY;

	    if (isScene(background)) {
		return background.add(img, jsnums.toFixnum(x), jsnums.toFixnum(y));
	    } else {
		var newScene = makeSceneImage(background.getWidth(),
					      background.getHeight(),
					      [], 
					      false);
		newScene = newScene.add(background.updatePinhole(0, 0), 0, 0);
		newScene = newScene.add(img, jsnums.toFixnum(x), jsnums.toFixnum(y));
		return newScene;
            }
        });







EXPORTS['rotate'] = 
    makePrimitiveProcedure(
        'rotate',
        2,
        function(MACHINE) {
	    var angle = checkAngle(MACHINE, "rotate", 0);
	    var img = checkImage(MACHINE, "rotate", 1);
	    return makeRotateImage(jsnums.toFixnum(-angle), img);
        });



EXPORTS['scale'] = 
    makePrimitiveProcedure(
        'scale',
        2,
        function(MACHINE) {
	    var factor = checkReal(MACHINE, "scale", 0);
	    var img = checkImage(MACHINE, "image", 1);
	    
	    return makeScaleImage(jsnums.toFixnum(factor),
				  jsnums.toFixnum(factor),
				  img);
        });


EXPORTS['scale/xy'] = 
    makePrimitiveProcedure(
        'scale/xy',
        3,
        function(MACHINE) {
	    var xFactor = checkReal(MACHINE, "scale/xy", 0);
	    var yFactor = checkReal(MACHINE, "scale/xy", 1);
	    var img = checkImage(MACHINE, "scale/xy", 2);
	    return makeScaleImage(jsnums.toFixnum(xFactor), 
				  jsnums.toFixnum(yFactor),
				  img);
	    
        });


EXPORTS['flip-horizontal'] = 
    makePrimitiveProcedure(
        'flip-horizontal',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "flip-horizontal", 0);
	    return makeFlipImage(img, "horizontal");
        });


EXPORTS['flip-vertical'] = 
    makePrimitiveProcedure(
        'flip-vertical',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "flip-vertical", 0);
	    return makeFlipImage(img, "vertical");
        });


EXPORTS['frame'] = 
    makePrimitiveProcedure(
        'frame',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "frame", 0);
	    return makeFrameImage(img);            
        });


EXPORTS['crop'] = 
    makePrimitiveProcedure(
        'crop',
        5,
        function(MACHINE) {
            var x = checkReal(MACHINE, "crop", 0);
	    var y = checkReal(MACHINE, "crop", 1);
	    var width = checkNonNegativeReal(MACHINE, "crop", 2);
	    var height = checkNonNegativeReal(MACHINE, "crop", 3);
	    var img = checkImage(MACHINE, "crop", 4);
	    return makeCropImage(jsnums.toFixnum(x),
				 jsnums.toFixnum(y),
				 jsnums.toFixnum(width),
				 jsnums.toFixnum(height),
				 img);
        });



EXPORTS['line'] = 
    makePrimitiveProcedure(
        'line',
        3,
        function(MACHINE) {
	    var x = checkReal(MACHINE, 'line', 0);
	    var y = checkReal(MACHINE, 'line', 1);
	    var c = checkColor(MACHINE, 'line', 2);
	    return makeLineImage(jsnums.toFixnum(x),
				 jsnums.toFixnum(y),
				 c,
				 true);
        });




EXPORTS['add-line'] = 
    makePrimitiveProcedure(
        'add-line',
        6,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "add-line", 0);
	    var x1 = checkReal(MACHINE, "add-line", 1);
	    var y1 = checkReal(MACHINE, "add-line", 2);
	    var x2 = checkReal(MACHINE, "add-line", 3);
	    var y2 = checkReal(MACHINE, "add-line", 4);
	    var c = checkColor(MACHINE, "add-line", 5);
	    var line = makeLineImage(jsnums.toFixnum(x2-x1),
				     jsnums.toFixnum(y2-y1),
				     c,
				     true);
	    return makeOverlayImage(line, img, x1, y1);
        });



EXPORTS['scene+line'] = 
    makePrimitiveProcedure(
        'scene+line',
        6,
        function(MACHINE) {
            var img = checkImage(MACHINE, "scene+line", 0);
	    var x1 = checkReal(MACHINE, "scene+line", 1);
	    var y1 = checkReal(MACHINE, "scene+line", 2);
	    var x2 = checkReal(MACHINE, "scene+line", 3);
	    var y2 = checkReal(MACHINE,	"scene+line", 4);
	    var c = checkColor(MACHINE, "scene+line", 5);
	    // make a scene containing the image
	    var newScene = makeSceneImage(jsnums.toFixnum(img.getWidth()), 
					  jsnums.toFixnum(img.getHeight()), 
					  [],
					  true);
	    newScene = newScene.add(img.updatePinhole(0, 0), 0, 0);
	    // make an image containing the line
	    var line = makeLineImage(jsnums.toFixnum(x2-x1),
				     jsnums.toFixnum(y2-y1),
				     c,
				     false);
	    // add the line to scene, offset by the original amount
	    return newScene.add(line, jsnums.toFixnum(x1), jsnums.toFixnum(y1));
        });


EXPORTS['circle'] = 
    makePrimitiveProcedure(
        'circle',
        3,
        function(MACHINE) {
            var aRadius = checkNonNegativeReal(MACHINE, "circle", 0);
	    var aMode = checkMode(MACHINE, "circle", 1);
	    var aColor = checkColor(MACHINE, "circle", 2);
	    return makeCircleImage(jsnums.toFixnum(aRadius), aMode.toString(), aColor);
        });


EXPORTS['square'] = 
    makePrimitiveProcedure(
        'square',
        3,
        function(MACHINE) {
	    var l = checkNonNegativeReal(MACHINE, "square", 0);
	    var s = checkMode(MACHINE, "square", 1);
	    var c = checkColor(MACHINE, "square", 2);
	    return makeSquareImage(jsnums.toFixnum(l), s.toString(), c);
        });


EXPORTS['rectangle'] = 
    makePrimitiveProcedure(
        'rectangle',
        4,
        function(MACHINE) {
	    var w = checkNonNegativeReal(MACHINE, "rectangle", 0);
	    var h = checkNonNegativeReal(MACHINE, "rectangle", 1);
	    var s = checkMode(MACHINE, "rectangle", 2);
	    var c = checkColor(MACHINE, "rectangle", 3);
	    return makeRectangleImage(jsnums.toFixnum(w),
				      jsnums.toFixnum(h),
				      s.toString(), 
                                      c);
        });


EXPORTS['regular-polygon'] = 
    makePrimitiveProcedure(
        'regular-polygon',
        4,
        function(MACHINE) {
	    var length = checkNonNegativeReal(MACHINE, "regular-polygon", 0);
	    var count = checkSideCount(MACHINE, "regular-polygon", 1);
	    var s = checkMode(MACHINE, "regular-polygon", 2);
	    var c = checkColor(MACHINE, "regular-polygon", 3);
	    return makePolygonImage(jsnums.toFixnum(length), 
				    jsnums.toFixnum(count), 
				    jsnums.toFixnum(1), 
				    s.toString(), 
				    c);            
        });


EXPORTS['ellipse'] = 
    makePrimitiveProcedure(
        'ellipse',
        4,
        function(MACHINE) {
            var w = checkNonNegativeReal(MACHINE, "ellipse", 0);
	    var h = checkNonNegativeReal(MACHINE, "ellipse", 1);
	    var s = checkMode(MACHINE, "ellipse", 2);
	    var c = checkColor(MACHINE, MACHINE, 3);
	    return makeEllipseImage(jsnums.toFixnum(w),
				    jsnums.toFixnum(h),
				    s.toString(),
				    c);
        });



EXPORTS['triangle'] = 
    makePrimitiveProcedure(
        'triangle',
        3,
        function(MACHINE) {
	    var s = checkNonNegativeReal(MACHINE, "triangle", 0);
	    var m = checkMode(MACHINE, "triangle", 1);
	    var c = checkColor(MACHINE, "triangle", 2);
	    return makeTriangleImage(jsnums.toFixnum(s), 
				     60, 
				     m.toString(),
				     c);
        });


EXPORTS['right-triangle'] = 
    makePrimitiveProcedure(
        'right-triangle',
        4,
        function(MACHINE) {
	    var side1 = checkNonNegativeReal(MACHINE, "right-triangle", 0);
	    var side2 = checkNonNegativeReal(MACHINE, "right-triangle", 1);
	    var s = checkMode(MACHINE, "right-triangle", 2);
	    var c = checkColor(MACHINE, "right-triangle", 3);
	    return makeRightTriangleImage(jsnums.toFixnum(side1), 
                                          jsnums.toFixnum(side2),
                                          s.toString(),
                                          c);
        });


EXPORTS['isosceles-triangle'] = 
    makePrimitiveProcedure(
        'isosceles-triangle',
        4,
        function(MACHINE) {
	    var side = checkNonNegativeReal(MACHINE, "isosceles-triangle", 0);
	    var angle = checkAngle(MACHINE, "isosceles-triangle", 1);
	    var s = checkMode(MACHINE, "isosceles-triangle", 2);
	    var c = checkColor(MACHINE, "isosceles-triangle", 3);
	    return makeTriangleImage(jsnums.toFixnum(side), 
                                     jsnums.toFixnum(angle), 
                                     s.toString(),
                                     c);
        });


EXPORTS['star'] = 
    makePrimitiveProcedure(
        'star',
        plt.baselib.lists.makeList(3, 5),
        function(MACHINE) {
            if (MACHINE.a === 3) {
                var sideLength = checkNonNegativeReal(MACHINE, "star", 0);
		var mode = checkMode(MACHINE, "star", 1);
		var color = checkColor(MACHINE, "star", 2);
		return makePolygonImage(jsnums.toFixnum(sideLength), 
					jsnums.toFixnum(5), 
					jsnums.toFixnum(2), 
					mode.toString(), 
					color);
            } else if (MACHINE.a === 5) {
		var n = checkSideCount(MACHINE, "star", 0);
		var outer = checkNonNegativeReal(MACHINE, "star", 1);
		var inner = checkNonNegativeReal(MACHINE, "star", 2);
		var m = checkMode(MACHINE, "star", 3);
		var c = checkColor(MACHINE, "star", 4);
		return makeStarImage(jsnums.toFixnum(n),
				     jsnums.toFixnum(outer),
				     jsnums.toFixnum(inner),
				     m.toString(),
				     c);
            }
        });

EXPORTS['radial-star'] = 
    makePrimitiveProcedure(
        'radial-star',
        5,
        function(MACHINE) {
            var aPoints = checkPointsCount(MACHINE, 'radial-star', 0);
	    var anOuter = checkNonNegativeReal(MACHINE, 'radial-star', 1);
	    var anInner = checkNonNegativeReal(MACHINE, 'radial-star', 2);
	    var aStyle = checkMode(MACHINE, "radial-star", 3);
	    var aColor = checkColor(MACHINE, "radial-star", 4);
	    return makeStarImage(jsnums.toFixnum(aPoints),
				 jsnums.toFixnum(anOuter),
				 jsnums.toFixnum(anInner),
				 aStyle.toString(),
				 aColor);
        });



EXPORTS['star-polygon'] = 
    makePrimitiveProcedure(
        'star-polygon',
        5,
        function(MACHINE) {
            var length = checkNonNegativeReal(MACHINE, "star-polygon", 0);
	    var count = checkNonNegativeReal(MACHINE, "star-polygon", 1);
	    var step = checkStepCount(MACHINE, "star-polygon", 2);
	    var s = checkMode(MACHINE, "star-polygon", 3);
	    var c = checkColor(MACHINE, "star-polygon", 4);
	    return makePolygonImage(jsnums.toFixnum(length), 
				    jsnums.toFixnum(count), 
				    jsnums.toFixnum(step), 
				    s.toString(), 
				    c);
        });


EXPORTS['rhombus'] = 
    makePrimitiveProcedure(
        'rhombus',
        4,
        function(MACHINE) {
            var l = checkNonNegativeReal(MACHINE, "rhombus", 0);
	    var a = checkNonNegativeReal(MACHINE, "rhombus", 1);
	    var s = checkMode(MACHINE, "rhombus", 2);
	    var c = checkColor(MACHINE, "rhombus", 3);
	    return makeRhombusImage(jsnums.toFixnum(l),
                                    jsnums.toFixnum(a),
                                    s.toString(),
                                    c);
	    
        });


EXPORTS['image->color-list'] = 
    makePrimitiveProcedure(
        'image->color-list',
        1,
        function(MACHINE) {
            var img = checkImage(MACHINE, 'image->color-list', 0);
            return imageToColorList(img);
        });



EXPORTS['color-list->image'] = 
    makePrimitiveProcedure(
        'color-list->image',
        5,
        function(MACHINE) {
            var listOfColors = checkListofColor(MACHINE, 'color-list->image', 0);
	    var width = checkNatural(MACHINE, 'color-list->image', 1);
	    var height = checkNatural(MACHINE, 'color-list->image', 2);
	    var pinholeX = checkNatural(MACHINE, 'color-list->image', 3);
	    var pinholeY = checkNatural(MACHINE, 'color-list->image', 4);

            return colorListToImage(listOfColors,
                                    width,
                                    height,
                                    pinholeX,
                                    pinholeY);
        });

EXPORTS['color-list->bitmap'] = 
    makePrimitiveProcedure(
        'color-list->image',
        3,
        function(MACHINE) {
            var listOfColors = checkListofColor(MACHINE, 'color-list->image', 0);
	    var width = checkNatural(MACHINE, 'color-list->image', 1);
	    var height = checkNatural(MACHINE, 'color-list->image', 2);
            return colorListToImage(listOfColors,
                                    width,
                                    height,
                                    0,
                                    0);
        });


EXPORTS['image-width'] = 
    makePrimitiveProcedure(
        'image-width',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, 'image-width', 0);
	    return img.getWidth();
        });

EXPORTS['image-height'] = 
    makePrimitiveProcedure(
        'image-height',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, 'image-height', 0);
	    return img.getHeight();
        });

EXPORTS['image-baseline'] = 
    makePrimitiveProcedure(
        'image-baseline',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, 'image-baseline', 0);
	    return img.getBaseline();
        });


EXPORTS['name->color'] = 
    makePrimitiveProcedure(
        'name->color',
        1,
        function(MACHINE) {
            var name = checkSymbolOrString(MACHINE, 'name->color', 0);
            var result = colorDb.get('' + name) || false;
            return result;
        });})(M, exports);
             ns.set("above14.27",exports["above"]);
extNs.set("above",exports["above"]);
modrec.prefix[0]=exports["above"];
ns.set("above/align15.29",exports["above/align"]);
extNs.set("above/align",exports["above/align"]);
modrec.prefix[1]=exports["above/align"];
ns.set("add-line27.53",exports["add-line"]);
extNs.set("add-line",exports["add-line"]);
modrec.prefix[2]=exports["add-line"];
ns.set("angle?51.101",exports["angle?"]);
extNs.set("angle?",exports["angle?"]);
modrec.prefix[3]=exports["angle?"];
ns.set("beside12.23",exports["beside"]);
extNs.set("beside",exports["beside"]);
modrec.prefix[4]=exports["beside"];
ns.set("beside/align13.25",exports["beside/align"]);
extNs.set("beside/align",exports["beside/align"]);
modrec.prefix[5]=exports["beside/align"];
ns.set("bitmap/url3.5",exports["bitmap/url"]);
extNs.set("bitmap/url",exports["bitmap/url"]);
modrec.prefix[6]=exports["bitmap/url"];
ns.set("circle29.57",exports["circle"]);
extNs.set("circle",exports["circle"]);
modrec.prefix[7]=exports["circle"];
ns.set("color-list->bitmap43.85",exports["color-list->bitmap"]);
extNs.set("color-list->bitmap",exports["color-list->bitmap"]);
modrec.prefix[8]=exports["color-list->bitmap"];
ns.set("color-list->image42.83",exports["color-list->image"]);
extNs.set("color-list->image",exports["color-list->image"]);
modrec.prefix[9]=exports["color-list->image"];
ns.set("crop25.49",exports["crop"]);
extNs.set("crop",exports["crop"]);
modrec.prefix[10]=exports["crop"];
ns.set("ellipse33.65",exports["ellipse"]);
extNs.set("ellipse",exports["ellipse"]);
modrec.prefix[11]=exports["ellipse"];
ns.set("empty-scene16.31",exports["empty-scene"]);
extNs.set("empty-scene",exports["empty-scene"]);
modrec.prefix[12]=exports["empty-scene"];
ns.set("flip-horizontal22.43",exports["flip-horizontal"]);
extNs.set("flip-horizontal",exports["flip-horizontal"]);
modrec.prefix[13]=exports["flip-horizontal"];
ns.set("flip-vertical23.45",exports["flip-vertical"]);
extNs.set("flip-vertical",exports["flip-vertical"]);
modrec.prefix[14]=exports["flip-vertical"];
ns.set("frame24.47",exports["frame"]);
extNs.set("frame",exports["frame"]);
modrec.prefix[15]=exports["frame"];
ns.set("image->color-list41.81",exports["image->color-list"]);
extNs.set("image->color-list",exports["image->color-list"]);
modrec.prefix[16]=exports["image->color-list"];
ns.set("image-baseline46.91",exports["image-baseline"]);
extNs.set("image-baseline",exports["image-baseline"]);
modrec.prefix[17]=exports["image-baseline"];
ns.set("image-color?47.93",exports["image-color?"]);
extNs.set("image-color?",exports["image-color?"]);
modrec.prefix[18]=exports["image-color?"];
ns.set("image-height45.89",exports["image-height"]);
extNs.set("image-height",exports["image-height"]);
modrec.prefix[19]=exports["image-height"];
ns.set("image-url4.7",exports["image-url"]);
extNs.set("image-url",exports["image-url"]);
modrec.prefix[20]=exports["image-url"];
ns.set("image-width44.87",exports["image-width"]);
extNs.set("image-width",exports["image-width"]);
modrec.prefix[21]=exports["image-width"];
ns.set("image?54.107",exports["image?"]);
extNs.set("image?",exports["image?"]);
modrec.prefix[22]=exports["image?"];
ns.set("isosceles-triangle36.71",exports["isosceles-triangle"]);
extNs.set("isosceles-triangle",exports["isosceles-triangle"]);
modrec.prefix[23]=exports["isosceles-triangle"];
ns.set("line26.51",exports["line"]);
extNs.set("line",exports["line"]);
modrec.prefix[24]=exports["line"];
ns.set("mode?48.95",exports["mode?"]);
extNs.set("mode?",exports["mode?"]);
modrec.prefix[25]=exports["mode?"];
ns.set("name->color55.109",exports["name->color"]);
extNs.set("name->color",exports["name->color"]);
modrec.prefix[26]=exports["name->color"];
ns.set("open-image-url5.9",exports["open-image-url"]);
extNs.set("open-image-url",exports["open-image-url"]);
modrec.prefix[27]=exports["open-image-url"];
ns.set("overlay6.11",exports["overlay"]);
extNs.set("overlay",exports["overlay"]);
modrec.prefix[28]=exports["overlay"];
ns.set("overlay/align8.15",exports["overlay/align"]);
extNs.set("overlay/align",exports["overlay/align"]);
modrec.prefix[29]=exports["overlay/align"];
ns.set("overlay/xy7.13",exports["overlay/xy"]);
extNs.set("overlay/xy",exports["overlay/xy"]);
modrec.prefix[30]=exports["overlay/xy"];
ns.set("place-image17.33",exports["place-image"]);
extNs.set("place-image",exports["place-image"]);
modrec.prefix[31]=exports["place-image"];
ns.set("place-image/align18.35",exports["place-image/align"]);
extNs.set("place-image/align",exports["place-image/align"]);
modrec.prefix[32]=exports["place-image/align"];
ns.set("radial-star38.75",exports["radial-star"]);
extNs.set("radial-star",exports["radial-star"]);
modrec.prefix[33]=exports["radial-star"];
ns.set("rectangle31.61",exports["rectangle"]);
extNs.set("rectangle",exports["rectangle"]);
modrec.prefix[34]=exports["rectangle"];
ns.set("regular-polygon32.63",exports["regular-polygon"]);
extNs.set("regular-polygon",exports["regular-polygon"]);
modrec.prefix[35]=exports["regular-polygon"];
ns.set("rhombus40.79",exports["rhombus"]);
extNs.set("rhombus",exports["rhombus"]);
modrec.prefix[36]=exports["rhombus"];
ns.set("right-triangle35.69",exports["right-triangle"]);
extNs.set("right-triangle",exports["right-triangle"]);
modrec.prefix[37]=exports["right-triangle"];
ns.set("rotate19.37",exports["rotate"]);
extNs.set("rotate",exports["rotate"]);
modrec.prefix[38]=exports["rotate"];
ns.set("scale20.39",exports["scale"]);
extNs.set("scale",exports["scale"]);
modrec.prefix[39]=exports["scale"];
ns.set("scale/xy21.41",exports["scale/xy"]);
extNs.set("scale/xy",exports["scale/xy"]);
modrec.prefix[40]=exports["scale/xy"];
ns.set("scene+line28.55",exports["scene+line"]);
extNs.set("scene+line",exports["scene+line"]);
modrec.prefix[41]=exports["scene+line"];
ns.set("side-count?52.103",exports["side-count?"]);
extNs.set("side-count?",exports["side-count?"]);
modrec.prefix[42]=exports["side-count?"];
ns.set("square30.59",exports["square"]);
extNs.set("square",exports["square"]);
modrec.prefix[43]=exports["square"];
ns.set("star37.73",exports["star"]);
extNs.set("star",exports["star"]);
modrec.prefix[44]=exports["star"];
ns.set("star-polygon39.77",exports["star-polygon"]);
extNs.set("star-polygon",exports["star-polygon"]);
modrec.prefix[45]=exports["star-polygon"];
ns.set("step-count?53.105",exports["step-count?"]);
extNs.set("step-count?",exports["step-count?"]);
modrec.prefix[46]=exports["step-count?"];
ns.set("text1.1",exports["text"]);
extNs.set("text",exports["text"]);
modrec.prefix[47]=exports["text"];
ns.set("text/font2.3",exports["text/font"]);
extNs.set("text/font",exports["text/font"]);
modrec.prefix[48]=exports["text/font"];
ns.set("triangle34.67",exports["triangle"]);
extNs.set("triangle",exports["triangle"]);
modrec.prefix[49]=exports["triangle"];
ns.set("underlay9.17",exports["underlay"]);
extNs.set("underlay",exports["underlay"]);
modrec.prefix[50]=exports["underlay"];
ns.set("underlay/align11.21",exports["underlay/align"]);
extNs.set("underlay/align",exports["underlay/align"]);
modrec.prefix[51]=exports["underlay/align"];
ns.set("underlay/xy10.19",exports["underlay/xy"]);
extNs.set("underlay/xy",exports["underlay/xy"]);
modrec.prefix[52]=exports["underlay/xy"];
ns.set("x-place?49.97",exports["x-place?"]);
extNs.set("x-place?",exports["x-place?"]);
modrec.prefix[53]=exports["x-place?"];
ns.set("y-place?50.99",exports["y-place?"]);
extNs.set("y-place?",exports["y-place?"]);
modrec.prefix[54]=exports["y-place?"];

             modrec.privateExports = exports;
             return M.c.pop().label(M); };
        plt.runtime.PAUSE(function(restart) {
             var modName = "whalesong/image/private/color.rkt";
             plt.runtime.currentModuleLoader(M,
                                             modName,
                                             function() {
                                                restart(function(M) {
                                                    M.modules[modName] = M.installedModules[modName]();
                                                    if (! M.modules[modName].isInvoked) {
                                                        M.modules[modName].internalInvoke(M,
                                                                                     afterName4455,
                                                                                      M.params.currentErrorHandler);
                                                    } else {
                                                        afterName4455();
                                                    }
                                                })
                                             },
                                             function() {
                                                alert('Could not load ' + modName);
                                             })
       });     
        });
   }
 }(plt.runtime.currentMachine));
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/image/private/color.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2559=function(M){return(_2533)(M);};

var _2548=function(M){if(--M.cbt<0){throw _2548;}
M.c.push(new RT.CallFrame(_2558,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_2531,3,[M.e[M.e.length-3]],"...rivate/color.rkt:12:4");
M.e[M.e.length-2]=new RT.Closure(_2532,4,[M.e[M.e.length-3]],"...rivate/color.rkt:14:4");
M.v=new RT.Closure(_2530,RT.makePair(3,RT.makePair(4,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"-color");
M.e.length-=2;
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2551=function(M){if(--M.cbt<0){throw _2551;}
if((M.a-5)===0){return(_2553)(M);}else{RT.si_context_expected(5)(M);
}};

var _2547=function(M){if(--M.cbt<0){throw _2547;}
M.e.length-=(M.a-1);
return(_2548)(M);};

var _2543=function(M){M.modules["whalesong/image/private/color.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_2544)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2544);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2544)(M);}};

var _2530=function(M){if(--M.cbt<0){throw _2530;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2536)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_2531)(M);}};

var _2546=function(M){if(--M.cbt<0){throw _2546;}
M.e.push([M.params.currentNamespace.get("struct:color")||M.primitives["struct:color"],M.params.currentNamespace.get("make-color")||M.primitives["make-color"],M.params.currentNamespace.get("color?")||M.primitives["color?"],M.params.currentNamespace.get("color-red")||M.primitives["color-red"],M.params.currentNamespace.get("color-green")||M.primitives["color-green"],M.params.currentNamespace.get("color-blue")||M.primitives["color-blue"],M.params.currentNamespace.get("color-alpha")||M.primitives["color-alpha"],M.params.currentNamespace.get("-color")||M.primitives["-color"]]);M.e[M.e.length-1].names=["struct:color","make-color","color?","color-red","color-green","color-blue","color-alpha","-color"];
M.modules["whalesong/image/private/color.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2548,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym4552;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=4;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.a=0;
M.v=M.primitives["current-inspector"]._i(M);
M.e[M.e.length-7]=M.v;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.makePair(0,RT.makePair(1,RT.makePair(2,RT.makePair(3,RT.NULL))));
M.e[M.e.length-10]=false;
M.v=sym4552;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2552,M.p));
return((M.p).label)(M);};

var _2534=function(M){if(--M.cbt<0){throw _2534;}
M.e.length-=(M.a-1);
return(_2535)(M);};

var _2554=function(M){if(--M.cbt<0){throw _2554;}
if((M.a-7)===0){return(_2550)(M);}else{RT.si_context_expected(7)(M);
}};

var _2531=function(M){if(--M.cbt<0){throw _2531;}

//"lambda body for #(struct:LamPositionalName ...rivate/color.rkt:12:4 whalesong/image/private/color.rkt 12 4 292 32)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][1];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=255;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2532=function(M){if(--M.cbt<0){throw _2532;}

//"lambda body for #(struct:LamPositionalName ...rivate/color.rkt:14:4 whalesong/image/private/color.rkt 14 4 329 32)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][1];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2533=function(M){M.c.push(new RT.CallFrame(_2535,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image/private/color.rkt"]=function(){return new RT.ModuleRecord("color",_2543);}
return(_2542)(M);};

var _2545=function(M){if(--M.cbt<0){throw _2545;}
M.e.length-=(M.a-1);
return(_2546)(M);};

var _2535=function(M){if(--M.cbt<0){throw _2535;}
};

var _2553=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.v=M.e[M.e.length-5];
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-7]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym4553;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym4554;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym4555;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=3;
M.e[M.e.length-3]=sym4556;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2555,M.p));
return((M.p).label)(M);};

var _2555=RT.si_context_expected(7);

var _2552=RT.si_context_expected(5);

var _2536=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2531)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_2532)(M);}};

var _2558=function(M){if(--M.cbt<0){throw _2558;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("-color", prefix[selfMod.getPrefixOffset("-color")]);extNs.set("color", prefix[selfMod.getPrefixOffset("-color")]);ns.set("color-alpha", prefix[selfMod.getPrefixOffset("color-alpha")]);extNs.set("color-alpha", prefix[selfMod.getPrefixOffset("color-alpha")]);ns.set("color-blue", prefix[selfMod.getPrefixOffset("color-blue")]);extNs.set("color-blue", prefix[selfMod.getPrefixOffset("color-blue")]);ns.set("color-green", prefix[selfMod.getPrefixOffset("color-green")]);extNs.set("color-green", prefix[selfMod.getPrefixOffset("color-green")]);ns.set("color-red", prefix[selfMod.getPrefixOffset("color-red")]);extNs.set("color-red", prefix[selfMod.getPrefixOffset("color-red")]);ns.set("color?", prefix[selfMod.getPrefixOffset("color?")]);extNs.set("color?", prefix[selfMod.getPrefixOffset("color?")]);ns.set("-color", prefix[selfMod.getPrefixOffset("-color")]);extNs.set("make-color", prefix[selfMod.getPrefixOffset("-color")]);ns.set("struct:color", prefix[selfMod.getPrefixOffset("struct:color")]);extNs.set("struct:color", prefix[selfMod.getPrefixOffset("struct:color")]);}(M.modules["whalesong/image/private/color.rkt"],M.modules["whalesong/image/private/color.rkt"].getExports(),M.modules["whalesong/image/private/color.rkt"].getExternalExports(),M.modules["whalesong/image/private/color.rkt"].prefix));
return(M.p)(M);};

var _2557=function(M){if(--M.cbt<0){throw _2557;}
M.e.length-=(M.a-1);
return(_2558)(M);};

var _2550=function(M){M.e.splice(M.e.length-11,5);
M.e[M.e.length-7][0]=M.v;
M.e[M.e.length-7][1]=M.e[M.e.length-1];
M.e[M.e.length-7][2]=M.e[M.e.length-2];
M.e[M.e.length-7][3]=M.e[M.e.length-3];
M.e[M.e.length-7][4]=M.e[M.e.length-4];
M.e[M.e.length-7][5]=M.e[M.e.length-5];
M.e[M.e.length-7][6]=M.e[M.e.length-6];
M.e.length-=6;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2544=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_2546)(M);}else{M.c.push(new RT.CallFrame(_2546,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _2542=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

_2546.mvr=_2545;
_2552.mvr=_2551;
_2555.mvr=_2554;
_2548.mvr=_2547;
_2558.mvr=_2557;
_2535.mvr=_2534;
var sym4552=RT.makeSymbol("color");
var sym4555=RT.makeSymbol("blue");
var sym4553=RT.makeSymbol("red");
var sym4556=RT.makeSymbol("alpha");
var sym4554=RT.makeSymbol("green");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2559(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image/private/color.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image/private/color.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/whalesong.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2586=function(M){return(_2560)(M);};

var _2582=function(M){if(--M.cbt<0){throw _2582;}
if((M.installedModules["whalesong/lang/posn.rkt"]!==void(0)&&M.modules["whalesong/lang/posn.rkt"]!==undefined)!==false){return(_2583)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/posn.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2583);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2583)(M);}};

var _2575=function(M){if(--M.cbt<0){throw _2575;}
M.e.length-=(M.a-1);
return(_2576)(M);};

var _2562=function(M){if(--M.cbt<0){throw _2562;}
};

var _2569=function(M){if(--M.cbt<0){throw _2569;}
M.e.length-=(M.a-1);
return(_2570)(M);};

var _2566=function(M){if(--M.cbt<0){throw _2566;}
M.e.length-=(M.a-1);
return(_2567)(M);};

var _2564=function(M){M.modules["whalesong/lang/whalesong.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_2565)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2565);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2565)(M);}};

var _2570=function(M){if(--M.cbt<0){throw _2570;}
if((M.installedModules["whalesong/lang/private/shared.rkt"]!==void(0)&&M.modules["whalesong/lang/private/shared.rkt"]!==undefined)!==false){return(_2571)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/shared.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2571);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2571)(M);}};

var _2567=function(M){if(--M.cbt<0){throw _2567;}
if((M.installedModules["whalesong/lang/private/traced-app.rkt"]!==void(0)&&M.modules["whalesong/lang/private/traced-app.rkt"]!==undefined)!==false){return(_2568)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/traced-app.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2568);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2568)(M);}};

var _2561=function(M){if(--M.cbt<0){throw _2561;}
M.e.length-=(M.a-1);
return(_2562)(M);};

var _2581=function(M){if(--M.cbt<0){throw _2581;}
M.e.length-=(M.a-1);
return(_2582)(M);};

var _2563=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2560=function(M){M.c.push(new RT.CallFrame(_2562,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/whalesong.rkt"]=function(){return new RT.ModuleRecord("whalesong",_2564);}
return(_2563)(M);};

var _2580=function(M){if(M.modules["whalesong/lang/bool.rkt"].isInvoked!==false){return(_2582)(M);}else{M.c.push(new RT.CallFrame(_2582,M.p));
return(M.modules["whalesong/lang/bool.rkt"].label)(M);}};

var _2577=function(M){if(M.modules["whalesong/lang/check-expect/check-expect.rkt"].isInvoked!==false){return(_2579)(M);}else{M.c.push(new RT.CallFrame(_2579,M.p));
return(M.modules["whalesong/lang/check-expect/check-expect.rkt"].label)(M);}};

var _2574=function(M){if(M.modules["whalesong/lang/private/call-ec.rkt"].isInvoked!==false){return(_2576)(M);}else{M.c.push(new RT.CallFrame(_2576,M.p));
return(M.modules["whalesong/lang/private/call-ec.rkt"].label)(M);}};

var _2571=function(M){if(M.modules["whalesong/lang/private/shared.rkt"].isInvoked!==false){return(_2573)(M);}else{M.c.push(new RT.CallFrame(_2573,M.p));
return(M.modules["whalesong/lang/private/shared.rkt"].label)(M);}};

var _2579=function(M){if(--M.cbt<0){throw _2579;}
if((M.installedModules["whalesong/lang/bool.rkt"]!==void(0)&&M.modules["whalesong/lang/bool.rkt"]!==undefined)!==false){return(_2580)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/bool.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2580);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2580)(M);}};

var _2585=function(M){if(--M.cbt<0){throw _2585;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/lang/whalesong.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("*", M.primitives["*"]);ns.set("+", M.primitives["+"]);ns.set("-", M.primitives["-"]);ns.set("/", M.primitives["/"]);ns.set("<", M.primitives["<"]);ns.set("<=", M.primitives["<="]);ns.set("=", M.primitives["="]);ns.set(">", M.primitives[">"]);ns.set(">=", M.primitives[">="]);ns.set("abort-current-continuation", M.primitives["abort-current-continuation"]);ns.set("abs", M.primitives["abs"]);ns.set("acos", M.primitives["acos"]);ns.set("add-between", M.modules["whalesong/lang/list.rkt"].getExports().get("add-between"));ns.set("add1", M.primitives["add1"]);ns.set("andmap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("andmap2"));ns.set("angle", M.primitives["angle"]);ns.set("append", M.primitives["append"]);ns.set("append*", M.modules["whalesong/lang/list.rkt"].getExports().get("append*"));ns.set("append-map", M.modules["whalesong/lang/list.rkt"].getExports().get("append-map"));ns.set("apply", M.primitives["apply"]);ns.set("argmax", M.modules["whalesong/lang/list.rkt"].getExports().get("argmax"));ns.set("argmin", M.modules["whalesong/lang/list.rkt"].getExports().get("argmin"));ns.set("asin", M.primitives["asin"]);ns.set("assf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assf"));ns.set("assoc", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assoc"));ns.set("assq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assq"));ns.set("assv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assv"));ns.set("atan", M.primitives["atan"]);ns.set("boolean=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("boolean=?"));ns.set("boolean?", M.primitives["boolean?"]);ns.set("box", M.primitives["box"]);ns.set("box?", M.primitives["box?"]);ns.set("build-list", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-list"));ns.set("build-string", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-string"));ns.set("build-vector", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-vector"));ns.set("byte?", M.primitives["byte?"]);ns.set("caaaar", M.primitives["caaaar"]);ns.set("caaadr", M.primitives["caaadr"]);ns.set("caaar", M.primitives["caaar"]);ns.set("caadar", M.primitives["caadar"]);ns.set("caaddr", M.primitives["caaddr"]);ns.set("caadr", M.primitives["caadr"]);ns.set("caar", M.primitives["caar"]);ns.set("cadaar", M.primitives["cadaar"]);ns.set("cadadr", M.primitives["cadadr"]);ns.set("cadar", M.primitives["cadar"]);ns.set("caddar", M.primitives["caddar"]);ns.set("cadddr", M.primitives["cadddr"]);ns.set("caddr", M.primitives["caddr"]);ns.set("cadr", M.primitives["cadr"]);ns.set("call-with-continuation-prompt", M.primitives["call-with-continuation-prompt"]);ns.set("call-with-current-continuation", M.primitives["call-with-current-continuation"]);ns.set("call-with-escape-continuation", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call-with-escape-continuation"));ns.set("call-with-values", M.primitives["call-with-values"]);ns.set("call/cc", M.primitives["call/cc"]);ns.set("call/ec", M.modules["whalesong/lang/private/call-ec.rkt"].getExports().get("call/ec"));ns.set("car", M.primitives["car"]);ns.set("cdaaar", M.primitives["cdaaar"]);ns.set("cdaadr", M.primitives["cdaadr"]);ns.set("cdaar", M.primitives["cdaar"]);ns.set("cdadar", M.primitives["cdadar"]);ns.set("cdaddr", M.primitives["cdaddr"]);ns.set("cdadr", M.primitives["cdadr"]);ns.set("cdar", M.primitives["cdar"]);ns.set("cddaar", M.primitives["cddaar"]);ns.set("cddadr", M.primitives["cddadr"]);ns.set("cddar", M.primitives["cddar"]);ns.set("cdddar", M.primitives["cdddar"]);ns.set("cddddr", M.primitives["cddddr"]);ns.set("cdddr", M.primitives["cdddr"]);ns.set("cddr", M.primitives["cddr"]);ns.set("cdr", M.primitives["cdr"]);ns.set("ceiling", M.primitives["ceiling"]);ns.set("char->integer", M.primitives["char->integer"]);ns.set("char-alphabetic?", M.primitives["char-alphabetic?"]);ns.set("char-ci<=?", M.primitives["char-ci<=?"]);ns.set("char-ci<?", M.primitives["char-ci<?"]);ns.set("char-ci=?", M.primitives["char-ci=?"]);ns.set("char-ci>=?", M.primitives["char-ci>=?"]);ns.set("char-ci>?", M.primitives["char-ci>?"]);ns.set("char-downcase", M.primitives["char-downcase"]);ns.set("char-lower-case?", M.primitives["char-lower-case?"]);ns.set("char-numeric?", M.primitives["char-numeric?"]);ns.set("char-upcase", M.primitives["char-upcase"]);ns.set("char-upper-case?", M.primitives["char-upper-case?"]);ns.set("char-whitespace?", M.primitives["char-whitespace?"]);ns.set("char<=?", M.primitives["char<=?"]);ns.set("char<?", M.primitives["char<?"]);ns.set("char=?", M.primitives["char=?"]);ns.set("char>=?", M.primitives["char>=?"]);ns.set("char>?", M.primitives["char>?"]);ns.set("char?", M.primitives["char?"]);ns.set("complex?", M.primitives["complex?"]);ns.set("compose", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose"));ns.set("compose1", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose1"));ns.set("conjugate", M.primitives["conjugate"]);ns.set("cons", M.primitives["cons"]);ns.set("cons?", M.modules["whalesong/lang/list.rkt"].getExports().get("cons?"));ns.set("continuation-mark-set->list", M.primitives["continuation-mark-set->list"]);ns.set("continuation-prompt-available?", M.primitives["continuation-prompt-available?"]);ns.set("continuation-prompt-tag?", M.primitives["continuation-prompt-tag?"]);ns.set("cos", M.primitives["cos"]);ns.set("cosh", M.primitives["cosh"]);ns.set("count", M.modules["whalesong/lang/list.rkt"].getExports().get("count"));ns.set("current-continuation-marks", M.primitives["current-continuation-marks"]);ns.set("current-inexact-milliseconds", M.primitives["current-inexact-milliseconds"]);ns.set("current-output-port", M.primitives["current-output-port"]);ns.set("current-print", M.primitives["current-print"]);ns.set("current-print-mode", M.primitives["current-print-mode"]);ns.set("current-seconds", M.primitives["current-seconds"]);ns.set("default-continuation-prompt-tag", M.primitives["default-continuation-prompt-tag"]);ns.set("denominator", M.primitives["denominator"]);ns.set("display", M.primitives["display"]);ns.set("displayln", M.primitives["displayln"]);ns.set("drop", M.modules["whalesong/lang/list.rkt"].getExports().get("drop"));ns.set("drop-right", M.modules["whalesong/lang/list.rkt"].getExports().get("drop-right"));ns.set("e", M.primitives["e"]);ns.set("eighth", M.modules["whalesong/lang/list.rkt"].getExports().get("eighth"));ns.set("empty", M.modules["whalesong/lang/list.rkt"].getExports().get("empty"));ns.set("empty?", M.modules["whalesong/lang/list.rkt"].getExports().get("empty?"));ns.set("eof", M.primitives["eof"]);ns.set("eof-object?", M.primitives["eof-object?"]);ns.set("eq?", M.primitives["eq?"]);ns.set("equal-hash-code", M.primitives["equal-hash-code"]);ns.set("equal?", M.primitives["equal?"]);ns.set("eqv?", M.primitives["eqv?"]);ns.set("error", M.primitives["error"]);ns.set("even?", M.primitives["even?"]);ns.set("exact->inexact", M.primitives["exact->inexact"]);ns.set("exact-integer?", M.primitives["exact-integer?"]);ns.set("exact-nonnegative-integer?", M.primitives["exact-nonnegative-integer?"]);ns.set("exact?", M.primitives["exact?"]);ns.set("exn-continuation-marks", M.primitives["exn-continuation-marks"]);ns.set("exn-message", M.primitives["exn-message"]);ns.set("exp", M.primitives["exp"]);ns.set("expt", M.primitives["expt"]);ns.set("false", M.modules["whalesong/lang/bool.rkt"].getExports().get("false"));ns.set("false?", M.modules["whalesong/lang/bool.rkt"].getExports().get("false?"));ns.set("fifth", M.modules["whalesong/lang/list.rkt"].getExports().get("fifth"));ns.set("filter", M.modules["whalesong/lang/private/list.rkt"].getExports().get("filter"));ns.set("filter-map", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-map"));ns.set("filter-not", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-not"));ns.set("findf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("findf"));ns.set("first", M.modules["whalesong/lang/list.rkt"].getExports().get("first"));ns.set("flatten", M.modules["whalesong/lang/list.rkt"].getExports().get("flatten"));ns.set("floor", M.primitives["floor"]);ns.set("foldl", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldl"));ns.set("foldr", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldr"));ns.set("for-each", M.modules["whalesong/lang/private/map.rkt"].getExports().get("for-each2"));ns.set("format", M.primitives["format"]);ns.set("fourth", M.modules["whalesong/lang/list.rkt"].getExports().get("fourth"));ns.set("fprintf", M.primitives["fprintf"]);ns.set("gcd", M.primitives["gcd"]);ns.set("gensym", M.primitives["gensym"]);ns.set("hash", M.primitives["hash"]);ns.set("hash-copy", M.primitives["hash-copy"]);ns.set("hash-count", M.primitives["hash-count"]);ns.set("hash-eq?", M.primitives["hash-eq?"]);ns.set("hash-equal?", M.primitives["hash-equal?"]);ns.set("hash-eqv?", M.primitives["hash-eqv?"]);ns.set("hash-for-each", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-for-each"));ns.set("hash-has-key?", M.primitives["hash-has-key?"]);ns.set("hash-keys", M.primitives["hash-keys"]);ns.set("hash-map", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-map"));ns.set("hash-ref", M.primitives["hash-ref"]);ns.set("hash-remove", M.primitives["hash-remove"]);ns.set("hash-remove!", M.primitives["hash-remove!"]);ns.set("hash-set", M.primitives["hash-set"]);ns.set("hash-set!", M.primitives["hash-set!"]);ns.set("hash-values", M.primitives["hash-values"]);ns.set("hash?", M.primitives["hash?"]);ns.set("hasheq", M.primitives["hasheq"]);ns.set("hasheqv", M.primitives["hasheqv"]);ns.set("imag-part", M.primitives["imag-part"]);ns.set("inexact->exact", M.primitives["inexact->exact"]);ns.set("inexact?", M.primitives["inexact?"]);ns.set("integer->char", M.primitives["integer->char"]);ns.set("integer-sqrt", M.primitives["integer-sqrt"]);ns.set("integer?", M.primitives["integer?"]);ns.set("last", M.modules["whalesong/lang/list.rkt"].getExports().get("last"));ns.set("last-pair", M.modules["whalesong/lang/list.rkt"].getExports().get("last-pair"));ns.set("lcm", M.primitives["lcm"]);ns.set("length", M.primitives["length"]);ns.set("list", M.primitives["list"]);ns.set("list*", M.primitives["list*"]);ns.set("list->string", M.primitives["list->string"]);ns.set("list->vector", M.primitives["list->vector"]);ns.set("list-ref", M.primitives["list-ref"]);ns.set("list?", M.primitives["list?"]);ns.set("log", M.primitives["log"]);ns.set("magnitude", M.primitives["magnitude"]);ns.set("make-continuation-prompt-tag", M.primitives["make-continuation-prompt-tag"]);ns.set("make-exn", M.primitives["make-exn"]);ns.set("make-exn:fail", M.primitives["make-exn:fail"]);ns.set("make-exn:fail:contract", M.primitives["make-exn:fail:contract"]);ns.set("make-exn:fail:contract:arity", M.primitives["make-exn:fail:contract:arity"]);ns.set("make-exn:fail:contract:divide-by-zero", M.primitives["make-exn:fail:contract:divide-by-zero"]);ns.set("make-exn:fail:contract:variable", M.primitives["make-exn:fail:contract:variable"]);ns.set("make-hash", M.primitives["make-hash"]);ns.set("make-hasheq", M.primitives["make-hasheq"]);ns.set("make-hasheqv", M.primitives["make-hasheqv"]);ns.set("make-immutable-hash", M.primitives["make-immutable-hash"]);ns.set("make-immutable-hasheq", M.primitives["make-immutable-hasheq"]);ns.set("make-immutable-hasheqv", M.primitives["make-immutable-hasheqv"]);ns.set("make-list", M.modules["whalesong/lang/list.rkt"].getExports().get("make-list"));ns.set("make-placeholder", M.primitives["make-placeholder"]);ns.set("make-polar", M.primitives["make-polar"]);ns.set("make-posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("make-posn"));ns.set("make-reader-graph", M.primitives["make-reader-graph"]);ns.set("make-rectangular", M.primitives["make-rectangular"]);ns.set("make-srcloc", M.primitives["make-srcloc"]);ns.set("make-string", M.primitives["make-string"]);ns.set("make-struct-field-accessor", M.primitives["make-struct-field-accessor"]);ns.set("make-struct-field-mutator", M.primitives["make-struct-field-mutator"]);ns.set("make-struct-type", M.primitives["make-struct-type"]);ns.set("make-vector", M.primitives["make-vector"]);ns.set("map", M.modules["whalesong/lang/private/map.rkt"].getExports().get("map2"));ns.set("max", M.primitives["max"]);ns.set("member", M.primitives["member"]);ns.set("memf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("memf"));ns.set("memq", M.primitives["memq"]);ns.set("memv", M.primitives["memv"]);ns.set("min", M.primitives["min"]);ns.set("modulo", M.primitives["modulo"]);ns.set("negative?", M.primitives["negative?"]);ns.set("newline", M.primitives["newline"]);ns.set("ninth", M.modules["whalesong/lang/list.rkt"].getExports().get("ninth"));ns.set("not", M.primitives["not"]);ns.set("null", M.primitives["null"]);ns.set("null?", M.primitives["null?"]);ns.set("number->string", M.primitives["number->string"]);ns.set("number?", M.primitives["number?"]);ns.set("numerator", M.primitives["numerator"]);ns.set("odd?", M.primitives["odd?"]);ns.set("ormap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("ormap2"));ns.set("pair?", M.primitives["pair?"]);ns.set("partition", M.modules["whalesong/lang/list.rkt"].getExports().get("partition"));ns.set("pi", M.primitives["pi"]);ns.set("placeholder-set!", M.primitives["placeholder-set!"]);ns.set("positive?", M.primitives["positive?"]);ns.set("posn-x", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-x"));ns.set("posn-y", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-y"));ns.set("posn?", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn?"));ns.set("printf", M.primitives["printf"]);ns.set("procedure-arity", M.primitives["procedure-arity"]);ns.set("procedure-arity-includes?", M.primitives["procedure-arity-includes?"]);ns.set("procedure-rename", M.primitives["procedure-rename"]);ns.set("procedure?", M.primitives["procedure?"]);ns.set("prop:exn:srclocs", M.primitives["prop:exn:srclocs"]);ns.set("quotient", M.primitives["quotient"]);ns.set("raise", M.primitives["raise"]);ns.set("raise-mismatch-error", M.primitives["raise-mismatch-error"]);ns.set("raise-type-error", M.primitives["raise-type-error"]);ns.set("random", M.primitives["random"]);ns.set("rational?", M.primitives["rational?"]);ns.set("read-byte", M.primitives["read-byte"]);ns.set("real-part", M.primitives["real-part"]);ns.set("real?", M.primitives["real?"]);ns.set("remainder", M.primitives["remainder"]);ns.set("remove", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove"));ns.set("remove*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove*"));ns.set("remq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq"));ns.set("remq*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq*"));ns.set("remv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv"));ns.set("remv*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv*"));ns.set("rest", M.modules["whalesong/lang/list.rkt"].getExports().get("rest"));ns.set("reverse", M.primitives["reverse"]);ns.set("round", M.primitives["round"]);ns.set("second", M.modules["whalesong/lang/list.rkt"].getExports().get("second"));ns.set("set-box!", M.primitives["set-box!"]);ns.set("set-car!", M.primitives["set-car!"]);ns.set("set-cdr!", M.primitives["set-cdr!"]);ns.set("set-posn-x!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-x!"));ns.set("set-posn-y!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-y!"));ns.set("seventh", M.modules["whalesong/lang/list.rkt"].getExports().get("seventh"));ns.set("sgn", M.primitives["sgn"]);ns.set("sin", M.primitives["sin"]);ns.set("sinh", M.primitives["sinh"]);ns.set("sixth", M.modules["whalesong/lang/list.rkt"].getExports().get("sixth"));ns.set("split-at", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at"));ns.set("split-at-right", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at-right"));ns.set("sqr", M.primitives["sqr"]);ns.set("sqrt", M.primitives["sqrt"]);ns.set("srcloc-column", M.primitives["srcloc-column"]);ns.set("srcloc-line", M.primitives["srcloc-line"]);ns.set("srcloc-position", M.primitives["srcloc-position"]);ns.set("srcloc-source", M.primitives["srcloc-source"]);ns.set("srcloc-span", M.primitives["srcloc-span"]);ns.set("srcloc?", M.primitives["srcloc?"]);ns.set("string", M.primitives["string"]);ns.set("string->list", M.primitives["string->list"]);ns.set("string->number", M.primitives["string->number"]);ns.set("string->symbol", M.primitives["string->symbol"]);ns.set("string-append", M.primitives["string-append"]);ns.set("string-ci<=?", M.primitives["string-ci<=?"]);ns.set("string-ci<?", M.primitives["string-ci<?"]);ns.set("string-ci=?", M.primitives["string-ci=?"]);ns.set("string-ci>=?", M.primitives["string-ci>=?"]);ns.set("string-ci>?", M.primitives["string-ci>?"]);ns.set("string-copy", M.primitives["string-copy"]);ns.set("string-length", M.primitives["string-length"]);ns.set("string-ref", M.primitives["string-ref"]);ns.set("string-set!", M.primitives["string-set!"]);ns.set("string<=?", M.primitives["string<=?"]);ns.set("string<?", M.primitives["string<?"]);ns.set("string=?", M.primitives["string=?"]);ns.set("string>=?", M.primitives["string>=?"]);ns.set("string>?", M.primitives["string>?"]);ns.set("string?", M.primitives["string?"]);ns.set("struct-type?", M.primitives["struct-type?"]);ns.set("struct:exn:fail", M.primitives["struct:exn:fail"]);ns.set("struct:posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("struct:posn"));ns.set("struct?", M.primitives["struct?"]);ns.set("sub1", M.primitives["sub1"]);ns.set("substring", M.primitives["substring"]);ns.set("symbol->string", M.primitives["symbol->string"]);ns.set("symbol=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("symbol=?"));ns.set("symbol?", M.primitives["symbol?"]);ns.set("take", M.modules["whalesong/lang/list.rkt"].getExports().get("take"));ns.set("take-right", M.modules["whalesong/lang/list.rkt"].getExports().get("take-right"));ns.set("tan", M.primitives["tan"]);ns.set("tenth", M.modules["whalesong/lang/list.rkt"].getExports().get("tenth"));ns.set("third", M.modules["whalesong/lang/list.rkt"].getExports().get("third"));ns.set("true", M.modules["whalesong/lang/bool.rkt"].getExports().get("true"));ns.set("truncate", M.primitives["truncate"]);ns.set("unbox", M.primitives["unbox"]);ns.set("values", M.primitives["values"]);ns.set("vector", M.primitives["vector"]);ns.set("vector->list", M.primitives["vector->list"]);ns.set("vector-length", M.primitives["vector-length"]);ns.set("vector-ref", M.primitives["vector-ref"]);ns.set("vector-set!", M.primitives["vector-set!"]);ns.set("vector?", M.primitives["vector?"]);ns.set("void", M.primitives["void"]);ns.set("void?", M.primitives["void?"]);ns.set("write", M.primitives["write"]);ns.set("write-byte", M.primitives["write-byte"]);ns.set("zero?", M.primitives["zero?"]);}(M.modules["whalesong/lang/whalesong.rkt"],M.modules["whalesong/lang/whalesong.rkt"].getExports(),M.modules["whalesong/lang/whalesong.rkt"].getExternalExports(),M.modules["whalesong/lang/whalesong.rkt"].prefix));
return(M.p)(M);};

var _2568=function(M){if(M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked!==false){return(_2570)(M);}else{M.c.push(new RT.CallFrame(_2570,M.p));
return(M.modules["whalesong/lang/private/traced-app.rkt"].label)(M);}};

var _2578=function(M){if(--M.cbt<0){throw _2578;}
M.e.length-=(M.a-1);
return(_2579)(M);};

var _2584=function(M){if(--M.cbt<0){throw _2584;}
M.e.length-=(M.a-1);
return(_2585)(M);};

var _2583=function(M){if(M.modules["whalesong/lang/posn.rkt"].isInvoked!==false){return(_2585)(M);}else{M.c.push(new RT.CallFrame(_2585,M.p));
return(M.modules["whalesong/lang/posn.rkt"].label)(M);}};

var _2565=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_2567)(M);}else{M.c.push(new RT.CallFrame(_2567,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _2576=function(M){if(--M.cbt<0){throw _2576;}
if((M.installedModules["whalesong/lang/check-expect/check-expect.rkt"]!==void(0)&&M.modules["whalesong/lang/check-expect/check-expect.rkt"]!==undefined)!==false){return(_2577)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/check-expect/check-expect.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2577);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2577)(M);}};

var _2572=function(M){if(--M.cbt<0){throw _2572;}
M.e.length-=(M.a-1);
return(_2573)(M);};

var _2573=function(M){if(--M.cbt<0){throw _2573;}
if((M.installedModules["whalesong/lang/private/call-ec.rkt"]!==void(0)&&M.modules["whalesong/lang/private/call-ec.rkt"]!==undefined)!==false){return(_2574)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/call-ec.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2574);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2574)(M);}};

_2567.mvr=_2566;
_2570.mvr=_2569;
_2573.mvr=_2572;
_2576.mvr=_2575;
_2579.mvr=_2578;
_2582.mvr=_2581;
_2585.mvr=_2584;
_2562.mvr=_2561;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2586(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/whalesong.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/whalesong.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/check-expect/check-expect.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2661=function(M){if(--M.cbt<0){throw _2661;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_2658)(M);}else{M.e.push("Running tests...\n");
M.a=1;
M.v=M.primitives["printf"]._i(M);
M.e.pop();
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][27];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=0;
M.e.push(void(0));
if (M.e[M.e.length-5][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-5].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-5][0];
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,1);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2646=function(M){if(--M.cbt<0){throw _2646;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2648)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][27];
M.e[M.e.length-1]=RT.checkedAdd1(M, M.e[M.e.length-7]);
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-7][21][0][M.e[M.e.length-7][21][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2651,M.p));
return((M.p).label)(M);}};

var _2637=function(M){if(--M.cbt<0){throw _2637;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["printf"]._i(M);
M.e.length-=2;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="~a failed.\n";
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][8];
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][6];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2639,M.p));
return((M.p).label)(M);};

var _2629=function(M){if(--M.cbt<0){throw _2629;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
return(_2623)(M);};

var _2598=function(M){if(--M.cbt<0){throw _2598;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2601,M.p));
return((M.p).label)(M);};

var _2674=function(M){if(--M.cbt<0){throw _2674;}
M.c.push(new RT.CallFrame(_2676,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2589,1,[M.e[M.e.length-1]],"accumulate-test!");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2651=function(M){if(--M.cbt<0){throw _2651;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2641=function(M){if(--M.cbt<0){throw _2641;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["printf"]._i(M);
M.e.length-=2;
return(_2618)(M);};

var _2633=function(M){if(--M.cbt<0){throw _2633;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["printf"]._i(M);
M.e.length-=2;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="~a passed.\n";
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][8];
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][6];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2635,M.p));
return((M.p).label)(M);};







var _2592=function(M){if(--M.cbt<0){throw _2592;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/check-expect/check-expect.rkt 197 4 6480 1294)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.p=M.e[M.e.length-2][17][0][M.e[M.e.length-2][17][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2616,M.p));
return((M.p).label)(M);};

var _2591=function(M){if(--M.cbt<0){throw _2591;}

//"lambda body for #(struct:LamPositionalName capitalize whalesong/lang/check-expect/check-expect.rkt 184 0 6148 189)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["string-length"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_2611)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.e.push(void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=0;
M.v=M.primitives["string-ref"]._i(M);
M.e.length-=2;
M.e[M.e.length-1]=M.v;
M.v=M.primitives["char-upcase"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.a=1;
M.v=M.primitives["string"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=1;
M.a=2;
M.v=M.primitives["substring"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["string-append"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};




var _2668=function(M){if(--M.cbt<0){throw _2668;}
M.e.push([M.params.currentNamespace.get("*tests*")||M.primitives["*tests*"],M.params.currentNamespace.get("check-expect*")||M.primitives["check-expect*"],M.primitives["equal?"],M.primitives["printf"],M.params.currentNamespace.get("display-location")||M.primitives["display-location"],M.params.currentNamespace.get("accumulate-test!")||M.primitives["accumulate-test!"],M.params.currentNamespace.get("test-suffixed")||M.primitives["test-suffixed"],M.primitives["format"],M.params.currentNamespace.get("capitalize")||M.primitives["capitalize"],M.primitives["string-length"],M.primitives["string-append"],M.primitives["string"],M.primitives["char-upcase"],M.primitives["string-ref"],M.primitives["substring"],M.params.currentNamespace.get("run-tests")||M.primitives["run-tests"],M.primitives["length"],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("empty?"),{moduleName:"whalesong/lang/list.rkt",name:"empty?"}],M.primitives["display"],M.primitives["newline"],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("first"),{moduleName:"whalesong/lang/list.rkt",name:"first"}],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("rest"),{moduleName:"whalesong/lang/list.rkt",name:"rest"}],M.primitives["reverse"],M.params.currentNamespace.get("struct:unexpected-no-error")||M.primitives["struct:unexpected-no-error"],M.params.currentNamespace.get("make-unexpected-no-error")||M.primitives["make-unexpected-no-error"],M.params.currentNamespace.get("unexpected-no-error?")||M.primitives["unexpected-no-error?"],M.params.currentNamespace.get("unexpected-no-error-result")||M.primitives["unexpected-no-error-result"],false]);M.e[M.e.length-1].names=["*tests*","check-expect*","equal?","printf","display-location","accumulate-test!","test-suffixed","format","capitalize","string-length","string-append","string","char-upcase","string-ref","substring","run-tests","length","empty?","display","newline","first","rest","reverse","struct:unexpected-no-error","make-unexpected-no-error","unexpected-no-error?","unexpected-no-error-result",false];
M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2670,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=RT.NULL;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2682=function(M){if(--M.cbt<0){throw _2682;}
M.c.push(new RT.CallFrame(_2684,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2593,0,[M.e[M.e.length-1]],"run-tests");
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2589=function(M){if(--M.cbt<0){throw _2589;}

//"lambda body for #(struct:LamPositionalName accumulate-test! whalesong/lang/check-expect/check-expect.rkt 171 0 5881 73)"

M.e.push(M.p.closedVals[0]);
M.e[M.e.length-1][0]=RT.makePair(M.e[M.e.length-2],M.e[M.e.length-1][0]);
M.v=RT.VOID;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _2624=function(M){M.v=(M.e[M.e.length-1]===2);
if(M.v===false){return(_2626)(M);}else{M.e[M.e.length-2]="Both tests passed!";
return(_2623)(M);}};

var _2622=function(M){if(--M.cbt<0){throw _2622;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===1);
if(M.v===false){return(_2624)(M);}else{M.e[M.e.length-2]="The test passed!";
return(_2623)(M);}};

var _2611=function(M){M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2685=function(M){if(--M.cbt<0){throw _2685;}
M.e.length-=(M.a-1);
return(_2686)(M);};

var _2677=function(M){if(--M.cbt<0){throw _2677;}
M.e.length-=(M.a-1);
return(_2678)(M);};

var _2671=function(M){if(--M.cbt<0){throw _2671;}
M.e.length-=(M.a-1);
return(_2672)(M);};

var _2617=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]="Ran ~a.\n";
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][6];
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-5][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-5].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-5][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2631,M.p));
return((M.p).label)(M);};

var _2690=RT.si_context_expected(5);

var _2609=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]="~a tests";
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2692=function(M){if(--M.cbt<0){throw _2692;}
if((M.a-4)===0){return(_2688)(M);}else{RT.si_context_expected(4)(M);
}};

var _2681=function(M){if(--M.cbt<0){throw _2681;}
M.e.length-=(M.a-1);
return(_2682)(M);};

var _2675=function(M){if(--M.cbt<0){throw _2675;}
M.e.length-=(M.a-1);
return(_2676)(M);};

var _2664=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2658=function(M){M.v=RT.VOID;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2691=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.v=M.e[M.e.length-5];
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-4]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym4930;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2693,M.p));
return((M.p).label)(M);};

var _2603=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]="check-expect: actual value ~s differs from ~s, the expected value\n";
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["printf"]._i(M);
M.e.length-=3;
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][4];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2606,M.p));
return((M.p).label)(M);};

var _2688=function(M){M.e.splice(M.e.length-8,5);
M.e[M.e.length-4][23]=M.v;
M.e[M.e.length-4][24]=M.e[M.e.length-1];
M.e[M.e.length-4][25]=M.e[M.e.length-2];
M.e[M.e.length-4][26]=M.e[M.e.length-3];
M.e.length-=3;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2686=function(M){if(--M.cbt<0){throw _2686;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("run-tests", prefix[selfMod.getPrefixOffset("run-tests")]);extNs.set("run-tests", prefix[selfMod.getPrefixOffset("run-tests")]);}(M.modules["whalesong/lang/check-expect/check-expect.rkt"],M.modules["whalesong/lang/check-expect/check-expect.rkt"].getExports(),M.modules["whalesong/lang/check-expect/check-expect.rkt"].getExternalExports(),M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix));
return(M.p)(M);};

var _2680=function(M){if(--M.cbt<0){throw _2680;}
M.c.push(new RT.CallFrame(_2682,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2592,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][27]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2672=function(M){if(--M.cbt<0){throw _2672;}
M.c.push(new RT.CallFrame(_2674,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2588,1,[M.e[M.e.length-1]],"display-location");
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2655=function(M){if(--M.cbt<0){throw _2655;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2643=function(M){if(--M.cbt<0){throw _2643;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-2];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2646,M.p));
return((M.p).label)(M);};

var _2635=function(M){if(--M.cbt<0){throw _2635;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2637,M.p));
return((M.p).label)(M);};

var _2616=function(M){if(--M.cbt<0){throw _2616;}
if(M.v===false){return(_2613)(M);}else{M.v=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2620,M.p));
return((M.p).label)(M);}};

var _2601=function(M){if(--M.cbt<0){throw _2601;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2603)(M);}else{M.v=true;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2676=function(M){if(--M.cbt<0){throw _2676;}
M.c.push(new RT.CallFrame(_2678,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2590,1,[M.e[M.e.length-1]],"test-suffixed");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2596=function(M){if(--M.cbt<0){throw _2596;}
};

var _2639=function(M){if(--M.cbt<0){throw _2639;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2641,M.p));
return((M.p).label)(M);};

var _2631=function(M){if(--M.cbt<0){throw _2631;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2633,M.p));
return((M.p).label)(M);};

var _2595=function(M){if(--M.cbt<0){throw _2595;}
M.e.length-=(M.a-1);
return(_2596)(M);};

var _2593=function(M){if(--M.cbt<0){throw _2593;}

//"lambda body for #(struct:LamPositionalName run-tests whalesong/lang/check-expect/check-expect.rkt 193 0 6362 1414)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2661,M.p));
return((M.p).label)(M);};




var _2667=function(M){if(--M.cbt<0){throw _2667;}
M.e.length-=(M.a-1);
return(_2668)(M);};


var _2606=function(M){if(--M.cbt<0){throw _2606;}
M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2588=function(M){if(--M.cbt<0){throw _2588;}

//"lambda body for #(struct:LamPositionalName display-location whalesong/lang/check-expect/check-expect.rkt 98 0 3161 171)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]="  at: ~s, line ~s, column ~s\n";
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["srcloc-source"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["srcloc-line"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["srcloc-column"]._i(M);
M.e.pop();
M.e[M.e.length-4]=M.v;
M.a=4;
M.v=M.primitives["printf"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2587=function(M){if(--M.cbt<0){throw _2587;}

//"lambda body for #(struct:LamPositionalName check-expect* whalesong/lang/check-expect/check-expect.rkt 79 0 2489 669)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-2];
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2598,M.p));
return((M.p).label)(M);};

var _2623=function(M){M.e.pop();
M.a=1;
M.v=M.primitives["display"]._i(M);
M.e.pop();
M.a=0;
M.v=M.primitives["newline"]._i(M);
return(_2618)(M);};

var _2620=function(M){if(--M.cbt<0){throw _2620;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_2617)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0));
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2622,M.p));
return((M.p).label)(M);}};

var _2684=function(M){if(--M.cbt<0){throw _2684;}
M.c.push(new RT.CallFrame(_2686,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym4931;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.a=0;
M.v=M.primitives["current-inspector"]._i(M);
M.e[M.e.length-7]=M.v;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.makePair(0,RT.NULL);
M.e[M.e.length-10]=false;
M.v=sym4931;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2690,M.p));
return((M.p).label)(M);};

var _2590=function(M){if(--M.cbt<0){throw _2590;}

//"lambda body for #(struct:LamPositionalName test-suffixed whalesong/lang/check-expect/check-expect.rkt 176 0 5996 115)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-2]===0);
if(M.v===false){return(_2607)(M);}else{M.v="zero tests";
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2605=function(M){if(--M.cbt<0){throw _2605;}
M.e.length-=(M.a-1);
return(_2606)(M);};

var _2669=function(M){if(--M.cbt<0){throw _2669;}
M.e.length-=(M.a-1);
return(_2670)(M);};

var _2626=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]="All ~a tests passed!";
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-6][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-6].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-6][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2629,M.p));
return((M.p).label)(M);};

var _2665=function(M){M.modules["whalesong/lang/check-expect/check-expect.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_2666)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2666);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2666)(M);}};

var _2607=function(M){M.v=(M.e[M.e.length-2]===1);
if(M.v===false){return(_2609)(M);}else{M.v="one test";
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2689=function(M){if(--M.cbt<0){throw _2689;}
if((M.a-5)===0){return(_2691)(M);}else{RT.si_context_expected(5)(M);
}};

var _2679=function(M){if(--M.cbt<0){throw _2679;}
M.e.length-=(M.a-1);
return(_2680)(M);};

var _2673=function(M){if(--M.cbt<0){throw _2673;}
M.e.length-=(M.a-1);
return(_2674)(M);};

var _2666=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_2668)(M);}else{M.c.push(new RT.CallFrame(_2668,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _2693=RT.si_context_expected(4);

var _2648=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][27];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=RT.checkedAdd1(M, M.e[M.e.length-8]);
M.e.push(void(0));
M.p=M.e[M.e.length-7][21][0][M.e[M.e.length-7][21][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2655,M.p));
return((M.p).label)(M);};

var _2683=function(M){if(--M.cbt<0){throw _2683;}
M.e.length-=(M.a-1);
return(_2684)(M);};

var _2618=function(M){M.e[M.e.length-1][0]=RT.NULL;
M.v=RT.VOID;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2613=function(M){M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][20][0][M.e[M.e.length-3][20][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2643,M.p));
return((M.p).label)(M);};

var _2594=function(M){M.c.push(new RT.CallFrame(_2596,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/check-expect/check-expect.rkt"]=function(){return new RT.ModuleRecord("check-expect",_2665);}
return(_2664)(M);};

var _2695=function(M){return(_2594)(M);};

var _2678=function(M){if(--M.cbt<0){throw _2678;}
M.c.push(new RT.CallFrame(_2680,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2591,1,[M.e[M.e.length-1]],"capitalize");
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2670=function(M){if(--M.cbt<0){throw _2670;}
M.c.push(new RT.CallFrame(_2672,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2587,4,[M.e[M.e.length-1]],"check-expect*");
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

_2606.mvr=_2605;
_2668.mvr=_2667;
_2670.mvr=_2669;
_2672.mvr=_2671;
_2674.mvr=_2673;
_2676.mvr=_2675;
_2678.mvr=_2677;
_2680.mvr=_2679;
_2682.mvr=_2681;
_2684.mvr=_2683;
_2690.mvr=_2689;
_2693.mvr=_2692;
_2686.mvr=_2685;
_2596.mvr=_2595;
var sym4931=RT.makeSymbol("unexpected-no-error");
var sym4930=RT.makeSymbol("result");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2695(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/check-expect/check-expect.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/check-expect/check-expect.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/posn.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2699=function(M){if(--M.cbt<0){throw _2699;}
};

var _2702=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2709=RT.si_context_expected(5);

var _2697=function(M){M.c.push(new RT.CallFrame(_2699,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/posn.rkt"]=function(){return new RT.ModuleRecord("posn",_2703);}
return(_2702)(M);};

var _2707=function(M){M.e.splice(M.e.length-11,5);
M.e[M.e.length-7][0]=M.v;
M.e[M.e.length-7][1]=M.e[M.e.length-1];
M.e[M.e.length-7][2]=M.e[M.e.length-2];
M.e[M.e.length-7][3]=M.e[M.e.length-3];
M.e[M.e.length-7][4]=M.e[M.e.length-4];
M.e[M.e.length-7][5]=M.e[M.e.length-5];
M.e[M.e.length-7][6]=M.e[M.e.length-6];
M.e.length-=6;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2716=function(M){return(_2697)(M);};

var _2712=RT.si_context_expected(7);

var _2714=function(M){if(--M.cbt<0){throw _2714;}
M.e.length-=(M.a-1);
return(_2715)(M);};

var _2708=function(M){if(--M.cbt<0){throw _2708;}
if((M.a-5)===0){return(_2710)(M);}else{RT.si_context_expected(5)(M);
}};

var _2705=function(M){if(--M.cbt<0){throw _2705;}
M.c.push(new RT.CallFrame(_2715,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2696,2,[M.e[M.e.length-1]],"make-posn");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2711=function(M){if(--M.cbt<0){throw _2711;}
if((M.a-7)===0){return(_2707)(M);}else{RT.si_context_expected(7)(M);
}};

var _2704=function(M){if(--M.cbt<0){throw _2704;}
M.e.length-=(M.a-1);
return(_2705)(M);};

var _2698=function(M){if(--M.cbt<0){throw _2698;}
M.e.length-=(M.a-1);
return(_2699)(M);};

var _2710=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-7]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym4971;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym4972;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym4971;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym4972;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2712,M.p));
return((M.p).label)(M);};

var _2703=function(M){M.modules["whalesong/lang/posn.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("struct:posn")||M.primitives["struct:posn"],M.params.currentNamespace.get("posn1.1")||M.primitives["posn1.1"],M.params.currentNamespace.get("posn?")||M.primitives["posn?"],M.params.currentNamespace.get("posn-x")||M.primitives["posn-x"],M.params.currentNamespace.get("posn-y")||M.primitives["posn-y"],M.params.currentNamespace.get("set-posn-x!")||M.primitives["set-posn-x!"],M.params.currentNamespace.get("set-posn-y!")||M.primitives["set-posn-y!"],M.params.currentNamespace.get("make-posn")||M.primitives["make-posn"]]);M.e[M.e.length-1].names=["struct:posn","posn1.1","posn?","posn-x","posn-y","set-posn-x!","set-posn-y!","make-posn"];
M.modules["whalesong/lang/posn.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2705,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym4973;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=2;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.e[M.e.length-7]=false;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.e[M.e.length-11]=sym4973;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2709,M.p));
return((M.p).label)(M);};

var _2696=function(M){if(--M.cbt<0){throw _2696;}

//"lambda body for #(struct:LamPositionalName make-posn whalesong/lang/posn.rkt 11 0 312 35)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][1];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2715=function(M){if(--M.cbt<0){throw _2715;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("make-posn", prefix[selfMod.getPrefixOffset("make-posn")]);extNs.set("make-posn", prefix[selfMod.getPrefixOffset("make-posn")]);ns.set("posn-x", prefix[selfMod.getPrefixOffset("posn-x")]);extNs.set("posn-x", prefix[selfMod.getPrefixOffset("posn-x")]);ns.set("posn-y", prefix[selfMod.getPrefixOffset("posn-y")]);extNs.set("posn-y", prefix[selfMod.getPrefixOffset("posn-y")]);ns.set("posn?", prefix[selfMod.getPrefixOffset("posn?")]);extNs.set("posn?", prefix[selfMod.getPrefixOffset("posn?")]);ns.set("set-posn-x!", prefix[selfMod.getPrefixOffset("set-posn-x!")]);extNs.set("set-posn-x!", prefix[selfMod.getPrefixOffset("set-posn-x!")]);ns.set("set-posn-y!", prefix[selfMod.getPrefixOffset("set-posn-y!")]);extNs.set("set-posn-y!", prefix[selfMod.getPrefixOffset("set-posn-y!")]);ns.set("struct:posn", prefix[selfMod.getPrefixOffset("struct:posn")]);extNs.set("struct:posn", prefix[selfMod.getPrefixOffset("struct:posn")]);}(M.modules["whalesong/lang/posn.rkt"],M.modules["whalesong/lang/posn.rkt"].getExports(),M.modules["whalesong/lang/posn.rkt"].getExternalExports(),M.modules["whalesong/lang/posn.rkt"].prefix));
return(M.p)(M);};

_2709.mvr=_2708;
_2712.mvr=_2711;
_2705.mvr=_2704;
_2715.mvr=_2714;
_2699.mvr=_2698;
var sym4972=RT.makeSymbol("y");
var sym4973=RT.makeSymbol("posn");
var sym4971=RT.makeSymbol("x");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2716(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/posn.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/posn.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/shared.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2720=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2726=function(M){if(--M.cbt<0){throw _2726;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["whalesong/lang/private/shared.rkt"],M.modules["whalesong/lang/private/shared.rkt"].getExports(),M.modules["whalesong/lang/private/shared.rkt"].getExternalExports(),M.modules["whalesong/lang/private/shared.rkt"].prefix));
return(M.p)(M);};

var _2722=function(M){if(M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked!==false){return(_2724)(M);}else{M.c.push(new RT.CallFrame(_2724,M.p));
return(M.modules["whalesong/lang/private/traced-app.rkt"].label)(M);}};

var _2717=function(M){M.c.push(new RT.CallFrame(_2719,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/shared.rkt"]=function(){return new RT.ModuleRecord("shared",_2721);}
return(_2720)(M);};

var _2729=function(M){return(_2717)(M);};

var _2719=function(M){if(--M.cbt<0){throw _2719;}
};

var _2724=function(M){if(--M.cbt<0){throw _2724;}
M.e.push([M.params.currentNamespace.get("undefined")||M.primitives["undefined"]]);M.e[M.e.length-1].names=["undefined"];
M.modules["whalesong/lang/private/shared.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2726,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([void(0)]);
M.v=RT.VOID;
M.v=M.e[M.e.length-1][0];
M.e.pop();
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2721=function(M){M.modules["whalesong/lang/private/shared.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/private/traced-app.rkt"]!==void(0)&&M.modules["whalesong/lang/private/traced-app.rkt"]!==undefined)!==false){return(_2722)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/traced-app.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2722);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2722)(M);}};

var _2725=function(M){if(--M.cbt<0){throw _2725;}
M.e.length-=(M.a-1);
return(_2726)(M);};

var _2723=function(M){if(--M.cbt<0){throw _2723;}
M.e.length-=(M.a-1);
return(_2724)(M);};

var _2718=function(M){if(--M.cbt<0){throw _2718;}
M.e.length-=(M.a-1);
return(_2719)(M);};

_2724.mvr=_2723;
_2726.mvr=_2725;
_2719.mvr=_2718;
M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2729(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/shared.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/shared.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/traced-app.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2736=function(M){if(--M.cbt<0){throw _2736;}
M.c.push(new RT.CallFrame(_2738,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(sym5190);
M.a=1;
M.v=M.primitives["gensym"]._i(M);
M.e.pop();
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2735=function(M){if(--M.cbt<0){throw _2735;}
M.e.length-=(M.a-1);
return(_2736)(M);};

var _2734=function(M){M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("traced-app-key")||M.primitives["traced-app-key"],M.params.currentNamespace.get("traced-callee-key")||M.primitives["traced-callee-key"]]);M.e[M.e.length-1].names=["traced-app-key","traced-callee-key"];
M.modules["whalesong/lang/private/traced-app.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2736,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push(sym5191);
M.a=1;
M.v=M.primitives["gensym"]._i(M);
M.e.pop();
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2739=function(M){return(_2730)(M);};

var _2732=function(M){if(--M.cbt<0){throw _2732;}
};

var _2731=function(M){if(--M.cbt<0){throw _2731;}
M.e.length-=(M.a-1);
return(_2732)(M);};

var _2738=function(M){if(--M.cbt<0){throw _2738;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("traced-app-key", prefix[selfMod.getPrefixOffset("traced-app-key")]);extNs.set("traced-app-key", prefix[selfMod.getPrefixOffset("traced-app-key")]);ns.set("traced-callee-key", prefix[selfMod.getPrefixOffset("traced-callee-key")]);extNs.set("traced-callee-key", prefix[selfMod.getPrefixOffset("traced-callee-key")]);}(M.modules["whalesong/lang/private/traced-app.rkt"],M.modules["whalesong/lang/private/traced-app.rkt"].getExports(),M.modules["whalesong/lang/private/traced-app.rkt"].getExternalExports(),M.modules["whalesong/lang/private/traced-app.rkt"].prefix));
return(M.p)(M);};

var _2737=function(M){if(--M.cbt<0){throw _2737;}
M.e.length-=(M.a-1);
return(_2738)(M);};

var _2730=function(M){M.c.push(new RT.CallFrame(_2732,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/traced-app.rkt"]=function(){return new RT.ModuleRecord("traced-app",_2734);}
return(_2733)(M);};

var _2733=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

_2736.mvr=_2735;
_2738.mvr=_2737;
_2732.mvr=_2731;
var sym5190=RT.makeSymbol("traced-callee-key");
var sym5191=RT.makeSymbol("traced-app-key");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2739(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/traced-app.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/traced-app.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/bool.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2756=function(M){M.e[M.e.length-3]=0;
return(_2757)(M);};

var _2752=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym5205;
M.e[M.e.length-2]="symbol";
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
if(M.v===false){return(_2756)(M);}else{M.e[M.e.length-3]=1;
return(_2757)(M);}};

var _2758=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2767=function(M){if(--M.cbt<0){throw _2767;}
M.c.push(new RT.CallFrame(_2769,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2742,2,[M.e[M.e.length-1]],"symbol=?");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2755=function(M){if(M.v===false){return(_2752)(M);}else{M.v=RT.VOID;
return(_2753)(M);}};

var _2746=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym5206;
M.e[M.e.length-2]="boolean";
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
if(M.v===false){return(_2750)(M);}else{M.e[M.e.length-3]=1;
return(_2751)(M);}};

var _2765=function(M){if(--M.cbt<0){throw _2765;}
M.c.push(new RT.CallFrame(_2767,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=new RT.Closure(_2741,2,[M.e[M.e.length-1]],"boolean=?");
M.e[M.e.length-1][3]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2754=function(M){M.v=false;
return(_2755)(M);};

var _2750=function(M){M.e[M.e.length-3]=0;
return(_2751)(M);};

var _2763=function(M){if(--M.cbt<0){throw _2763;}
M.c.push(new RT.CallFrame(_2765,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=_2740_c;
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2743=function(M){M.c.push(new RT.CallFrame(_2745,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/bool.rkt"]=function(){return new RT.ModuleRecord("bool",_2759);}
return(_2758)(M);};

var _2751=function(M){M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2747)(M);};

var _2757=function(M){M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2753)(M);};

var _2768=function(M){if(--M.cbt<0){throw _2768;}
M.e.length-=(M.a-1);
return(_2769)(M);};

var _2747=function(M){M.v=(M.e[M.e.length-2]===M.e[M.e.length-3]);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2753=function(M){M.v=(M.e[M.e.length-2]===M.e[M.e.length-3]);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2748=function(M){M.v=false;
return(_2749)(M);};

var _2749=function(M){if(M.v===false){return(_2746)(M);}else{M.v=RT.VOID;
return(_2747)(M);}};

var _2769=function(M){if(--M.cbt<0){throw _2769;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("boolean=?", prefix[selfMod.getPrefixOffset("boolean=?")]);extNs.set("boolean=?", prefix[selfMod.getPrefixOffset("boolean=?")]);ns.set("false", prefix[selfMod.getPrefixOffset("false")]);extNs.set("false", prefix[selfMod.getPrefixOffset("false")]);ns.set("false?", prefix[selfMod.getPrefixOffset("false?")]);extNs.set("false?", prefix[selfMod.getPrefixOffset("false?")]);ns.set("symbol=?", prefix[selfMod.getPrefixOffset("symbol=?")]);extNs.set("symbol=?", prefix[selfMod.getPrefixOffset("symbol=?")]);ns.set("true", prefix[selfMod.getPrefixOffset("true")]);extNs.set("true", prefix[selfMod.getPrefixOffset("true")]);}(M.modules["whalesong/lang/bool.rkt"],M.modules["whalesong/lang/bool.rkt"].getExports(),M.modules["whalesong/lang/bool.rkt"].getExternalExports(),M.modules["whalesong/lang/bool.rkt"].prefix));
return(M.p)(M);};

var _2761=function(M){if(--M.cbt<0){throw _2761;}
M.c.push(new RT.CallFrame(_2763,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=false;
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2766=function(M){if(--M.cbt<0){throw _2766;}
M.e.length-=(M.a-1);
return(_2767)(M);};

var _2759=function(M){M.modules["whalesong/lang/bool.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("true")||M.primitives["true"],M.params.currentNamespace.get("false")||M.primitives["false"],M.params.currentNamespace.get("false?")||M.primitives["false?"],M.params.currentNamespace.get("boolean=?")||M.primitives["boolean=?"],M.primitives["boolean?"],M.primitives["raise-type-error"],M.params.currentNamespace.get("symbol=?")||M.primitives["symbol=?"],M.primitives["symbol?"]]);M.e[M.e.length-1].names=["true","false","false?","boolean=?","boolean?","raise-type-error","symbol=?","symbol?"];
M.modules["whalesong/lang/bool.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.CallFrame(_2761,M.p)); M.addPrompt(RT.DEFAULT_CONTINUATION_PROMPT_TAG,false);
M.v=true;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2744=function(M){if(--M.cbt<0){throw _2744;}
M.e.length-=(M.a-1);
return(_2745)(M);};

var _2745=function(M){if(--M.cbt<0){throw _2745;}
};

var _2760=function(M){if(--M.cbt<0){throw _2760;}
M.e.length-=(M.a-1);
return(_2761)(M);};

var _2741=function(M){if(--M.cbt<0){throw _2741;}

//"lambda body for #(struct:LamPositionalName boolean=? whalesong/lang/bool.rkt 12 0 161 149)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
if(M.v===false){return(_2748)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
return(_2749)(M);}};

var _2742=function(M){if(--M.cbt<0){throw _2742;}

//"lambda body for #(struct:LamPositionalName symbol=? whalesong/lang/bool.rkt 17 0 312 143)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
if(M.v===false){return(_2754)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
return(_2755)(M);}};

var _2762=function(M){if(--M.cbt<0){throw _2762;}
M.e.length-=(M.a-1);
return(_2763)(M);};

var _2740=function(M){if(--M.cbt<0){throw _2740;}

//"lambda body for #(struct:LamPositionalName false? whalesong/lang/bool.rkt 10 0 129 30)"

M.v=(M.e[M.e.length-1]===false);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2764=function(M){if(--M.cbt<0){throw _2764;}
M.e.length-=(M.a-1);
return(_2765)(M);};

var _2770=function(M){return(_2743)(M);};

_2761.mvr=_2760;
_2763.mvr=_2762;
_2765.mvr=_2764;
_2767.mvr=_2766;
_2769.mvr=_2768;
_2745.mvr=_2744;
var sym5205=RT.makeSymbol("symbol=?");
var sym5206=RT.makeSymbol("boolean=?");var _2740_c=new RT.Closure(_2740,1,void(0),"false?");M.params.currentErrorHandler = fail;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2770(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/bool.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/bool.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
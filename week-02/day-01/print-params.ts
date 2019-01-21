'use strict';

let printParams = (...params:any []) => console.log(params.join(" "));

printParams(["these", "were", "different", "parameters"]);
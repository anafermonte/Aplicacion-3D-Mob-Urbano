/**
 * Copyright @ 2018 Esri.
 * All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.
 */
define(["esri/views/3d/webgl-engine/lib/Util"],function(r){var t=r.nextHighestPowerOfTwo,e=function(){function r(r,e){this.arrayType=null,r?this.arrayType=Float32Array:this.arrayType=Uint32Array,null==e?e=4096:e<65536&&(e=t(e)),this.array=new this.arrayType(e),this.size=0}return r.prototype.resize=function(r){this.size=r;var t,e;if(this.size>this.array.length){for(e=this.array.length||1;e<this.size;)e*=2;return t=new this.arrayType(e),t.set(this.array),this.array=t,!0}if(this.size<=this.array.length/2){e=this.array.length;for(var i=2*this.size;e>=i;)e/=2;return t=new this.arrayType(e),t.set(this.array.subarray(0,e)),this.array=t,!0}return!0},r.prototype.append=function(r){var t=this.size;this.resize(this.size+r.length),this.array.set(r,t)},r.prototype.whole=function(r){r.length!==this.size&&(this.array=new this.arrayType(r.length),this.size=r.length),this.array.set(r)},r.prototype.erase=function(r,t){for(var e=r;e<t;++e)this.array[e]=0},r.prototype.getArray=function(){return this.array},r.prototype.getSize=function(){return this.size},r.prototype.getArrayType=function(){return this.arrayType},r}();return e});
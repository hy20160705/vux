!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxTabItem=e():t.vuxTabItem=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var s=o[r]={exports:{},id:r,loaded:!1};return t[r].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(3)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{selected:{type:Boolean,required:!1,"default":!1},activeClass:String},watch:{selected:function(t){t&&this.tabClick()}},methods:{tabClick:function(){this.$parent.index=this.$el.getAttribute("data-index")}},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.selected?this.$parent.activeColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},function(t,e){t.exports="<div class=vux-tab-item :class=\"[selected ? activeClass : '', {'vux-tab-selected': selected}]\" :style=style @click=tabClick> <slot></slot> </div>"},function(t,e,o){var r,s;r=o(1),s=o(2),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}])});
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{588:function(t,e,a){"use strict";a.r(e);var s=a(23),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"update-to-0-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-to-0-12"}},[t._v("#")]),t._v(" Update to 0.12!")]),t._v(" "),a("p",[t._v("There are not a ton of changes in this release, so the migration\nwasn't too painful.")]),t._v(" "),a("h2",{attrs:{id:"multi-view-added"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-view-added"}},[t._v("#")]),t._v(" Multi view added")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("RenderPipelineDescriptor")]),t._v(" now includes a "),a("code",[t._v("multiview")]),t._v(" field that\nindicates the number of array textures if array textures are used\nas render attachments.")]),t._v(" "),a("h2",{attrs:{id:"no-more-block-attribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-more-block-attribute"}},[t._v("#")]),t._v(" No more block attribute")]),t._v(" "),a("p",[t._v("The WGSL spec has changed and the "),a("code",[t._v("block")]),t._v(" attribute is no longer a thing.\nThis means that structs in WGSL no longer need to be annotated to be used\nas uniform input. For example:")]),t._v(" "),a("div",{staticClass:"language-wgsl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[[block]]\nstruct Camera {\n    view_pos: vec4<f32>;\n    view_proj: mat4x4<f32>;\n};\n")])])]),a("p",[t._v("Can be simplified to just")]),t._v(" "),a("div",{staticClass:"language-wgsl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("struct Camera {\n    view_pos: vec4<f32>;\n    view_proj: mat4x4<f32>;\n};\n")])])]),a("h2",{attrs:{id:"more-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-validation"}},[t._v("#")]),t._v(" More validation")]),t._v(" "),a("p",[t._v("Wgpu now has a validation error where if your uniform doesn't match the\nalignment specified in the shader, the program will crash when you go to\ndraw:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("thread 'main' panicked at 'wgpu error: Validation Error\n\nCaused by:\n    In a RenderPass\n      note: encoder = `Render Encoder`\n    In a draw command, indexed:true indirect:false\n      note: render pipeline = `Render Pipeline`\n    Buffer is bound with size 28 where the shader expects 32 in group[1] compact index 0\n")])])]),a("p",[t._v("The only struct that I needed to change was the "),a("code",[t._v("LightUniform")]),t._v(" struct. All\nI needed to do was add a padding field:")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Debug, Copy, Clone, bytemuck::Pod, bytemuck::Zeroable)]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("LightUniform")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Due to uniforms requiring 16 byte (4 float) spacing, we need to use a padding field here")]),t._v("\n    _padding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Due to uniforms requiring 16 byte (4 float) spacing, we need to use a padding field here")]),t._v("\n    _padding2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("I updated the "),a("a",{attrs:{href:"../../intermediate/tutorial10-lighting"}},[t._v("lighting tutorial")]),t._v(" to reflect this change.")]),t._v(" "),a("h2",{attrs:{id:"misc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[t._v("#")]),t._v(" Misc")]),t._v(" "),a("p",[t._v("Due to the recent deploy to "),a("a",{attrs:{href:"https://docs.rs/anyhow/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("anyhow"),a("OutboundLink")],1),t._v(" that\nbreaks glob imports (aka. "),a("code",[t._v("use anyhow::*")]),t._v("), I had to switch qualified\nimports and uses (ie. "),a("code",[t._v("anyhow::Result")]),t._v("). This was mostly an issue on my\nbuild scripts for some of the showcase examples.")]),t._v(" "),a("p",[t._v("The main tutorial examples weren't affected, and the changes are minor, so\nif you're curious feel free to look at the repo.")])])}),[],!1,null,null,null);e.default=n.exports}}]);
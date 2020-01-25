(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./demo/with-hook/index.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/_@babel_runtime@7.8.3@@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("react"),c=n.n(a),i=n("./node_modules/_@mdx-js_react@1.5.5@@mdx-js/react/dist/esm.js"),u=n("./node_modules/_@babel_runtime@7.8.3@@babel/runtime/helpers/esm/slicedToArray.js"),s=n("./src/index.ts"),o=n("./node_modules/_@vue_reactivity@3.0.0-alpha.3@@vue/reactivity/dist/reactivity.esm-bundler.js"),l=Object(s.a)((function(){var e=Object(o.d)({message:"World"}),t=function(){return e.message="Hey"};return function(){var n=c.a.useState(0),r=Object(u.a)(n,2),a=r[0],i=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",null,c.a.createElement("h1",null,"Hello ",e.message),c.a.createElement("button",{onClick:t},"change")),c.a.createElement("section",null,c.a.createElement("h1",null,"Count is ",a),c.a.createElement("button",{onClick:function(){return i((function(e){return e+1}))}},"+")))}}));n.d(t,"default",(function(){return d}));var b={};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u548creact-hook\u914d\u5408\u4f7f\u7528"},"\u548cReact Hook\u914d\u5408\u4f7f\u7528"),Object(i.b)(l,{mdxType:"Index"}),Object(i.b)("h2",{id:"codes"},"Codes"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { setup } from '../../src';\nimport { reactive } from '@vue/reactivity';\n\nexport default setup(() => {\n  const data = reactive({ message: 'World' });\n  const change = () => (data.message = 'Hey');\n\n  return () => {\n    const [count, setCount] = React.useState(0);\n    const add = () => setCount(c => c + 1);\n    return (\n      <>\n        <section>\n          <h1>Hello {data.message}</h1>\n          <button onClick={change}>change</button>\n        </section>\n        <section>\n          <h1>Count is {count}</h1>\n          <button onClick={add}>+</button>\n        </section>\n      </>\n    );\n  };\n});\n\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"demo\\with-hook\\index.mdx"}}),d.isMDXComponent=!0},"./src/index.ts":function(e,t,n){"use strict";var r=n("./src/share.ts"),a=function(e){var t=e();return function(e){var n=Object(r.b)();return Object(r.a)((function(){return t(e)}),{scheduler:n,lazy:!0})()}};a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"setup",filename:"src\\setup.ts"}});n("./src/store.ts");n.d(t,"a",(function(){return a})),"undefined"!==typeof setup&&setup&&setup===Object(setup)&&Object.isExtensible(setup)&&Object.defineProperty(setup,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"setup",filename:"src\\index.ts"}}),"undefined"!==typeof createMutations&&createMutations&&createMutations===Object(createMutations)&&Object.isExtensible(createMutations)&&Object.defineProperty(createMutations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createMutations",filename:"src\\index.ts"}}),"undefined"!==typeof Provider&&Provider&&Provider===Object(Provider)&&Object.isExtensible(Provider)&&Object.defineProperty(Provider,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Provider",filename:"src\\index.ts"}}),"undefined"!==typeof useStore&&useStore&&useStore===Object(useStore)&&Object.isExtensible(useStore)&&Object.defineProperty(useStore,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useStore",filename:"src\\index.ts"}})},"./src/share.ts":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n("./node_modules/_@babel_runtime@7.8.3@@babel/runtime/helpers/esm/slicedToArray.js"),a=n("react"),c=n("./node_modules/_@vue_reactivity@3.0.0-alpha.3@@vue/reactivity/dist/reactivity.esm-bundler.js"),i=function(){var e=Object(a.useReducer)((function(e){return e+1}),0);return Object(r.a)(e,2)[1]};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src\\share.ts"}});var u=function(){var e=Object(a.useRef)();e.current||(e.current=c.b.apply(void 0,arguments));var t=function(){Object(c.g)(e.current)};return Object(a.useEffect)((function(){return t}),[]),e.current};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useEffection",filename:"src\\share.ts"}})},"./src/store.ts":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n("react"),a=n.n(r),c=n("./node_modules/_@vue_reactivity@3.0.0-alpha.3@@vue/reactivity/dist/reactivity.esm-bundler.js"),i=n("./src/share.ts"),u=a.a.createContext(null),s=function(e){var t=Object(i.b)(),n=function(){var e=Object(r.useContext)(u);if(!e)throw new Error("could not find store context value; please ensure the component is wrapped in a <Provider>");return e}();return Object(i.a)((function(){return e(n)}),{scheduler:t,lazy:!0})()};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useStore",filename:"src\\store.ts"}});var o=function(e){return Object.keys(e).reduce((function(t,n){var r=e[n];return t[n]=function(){Object(c.c)(),r.apply(void 0,arguments),Object(c.f)()},t}),{})};o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createMutations",filename:"src\\store.ts"}});var l=u.Provider;"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Provider",filename:"src\\store.ts"}})}}]);
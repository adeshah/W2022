(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{504:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("WeekHeader",{attrs:{number:10,title:"JWT Review"}}),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Assignment Reminder")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/deliverables/assignment3.html"}},[t._v("Assignment 3 - Authentication")]),t._v(" - is due "),s("strong",[t._v("before")]),t._v(" 06:00 pm on Monday, March 28th.")],1)]),t._v(" "),s("h2",{attrs:{id:"agenda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#agenda"}},[t._v("#")]),t._v(" Agenda")]),t._v(" "),s("ul",[s("li",[t._v("AMA (10 mins)")]),t._v(" "),s("li",[t._v("Quiz (10 mins)")]),t._v(" "),s("li",[t._v("A little more JWT (30 mins)")]),t._v(" "),s("li",[t._v("Re-exporting with ES Modules (5 mins)")]),t._v(" "),s("li",[t._v("Review Assignment 3 (5 mins)")]),t._v(" "),s("li",[s("em",[t._v("Lab Time")])])]),t._v(" "),s("h2",{attrs:{id:"jwt-review"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-review"}},[t._v("#")]),t._v(" JWT Review")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Is the payload data in a JWT securely encrypted?"),s("br"),t._v("\nNo. It is a simple hash that can be easily decoded and is not suitable for transmitting sensitive information. However, the token is cryptographically signed, so we can be sure that it has not been altered in any way.")])]),t._v(" "),s("li",[s("p",[t._v("Can a JWT be revoked?"),s("br"),t._v("\nNo. Once issued, a JWT cannot be revoked. It can be set with a short expiry time to limit the risk of a token being compromised.")])])]),t._v(" "),s("h2",{attrs:{id:"enhance-jwt-security"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enhance-jwt-security"}},[t._v("#")]),t._v(" Enhance JWT security")]),t._v(" "),s("h3",{attrs:{id:"set-an-expiry-limit-for-the-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-an-expiry-limit-for-the-token"}},[t._v("#")]),t._v(" Set an expiry limit for the token")]),t._v(" "),s("p",[t._v("Without setting an expiry time for the JWT, it will be valid indefinitely. This is a very bad idea! Since the JWT acts as an "),s("code",[t._v("id_token")]),t._v(" (see the "),s("a",{attrs:{href:"https://openid.net/connect/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenID Connect"),s("OutboundLink")],1),t._v(" specification), you should think of it as a permanently valid username/password combination. Therefore, it is highly recommended that you set a short TTL (time to live) for your tokens.")]),t._v(" "),s("h4",{attrs:{id:"token-expiration-exp-claim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token-expiration-exp-claim"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/auth0/node-jsonwebtoken#token-expiration-exp-claim",target:"_blank",rel:"noopener noreferrer"}},[t._v("Token Expiration (exp claim)"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The standard for JWT defines an "),s("code",[t._v("exp")]),t._v(" claim for expiration. The expiration is represented as a standard timestamp, meaning an integer value in seconds since 1970-01-01T00:00:00Z UTC.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("What is a claim?")]),t._v(" "),s("p",[t._v("A 'claim' is a key name in the JWT payload object.")])]),t._v(" "),s("p",[t._v("Suppose we want to set the token to expire in one hour. It can be set directly with a manual calculation as part of the payload.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("jwt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    exp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    uid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_id "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'this' is an instance of the User model class")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Remember")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Date.now()")]),t._v(" method returns the current time as a timestamp in milliseconds.")])]),t._v(" "),s("p",[t._v("Or, better yet, the expiration property can be set with a helper function in the "),s("code",[t._v("jsonwebtoken")]),t._v(" library by setting the relative future value in the options object – expressed as a string like '2h' or '1d'.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("jwt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// payload")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// secret encryption key")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("expiresIn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1h'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options object")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Read more about the JWT signing options in the official repo."),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/auth0/node-jsonwebtoken",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/auth0/node-jsonwebtoken"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"set-the-expected-algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-the-expected-algorithm"}},[t._v("#")]),t._v(" Set the expected algorithm")]),t._v(" "),s("p",[t._v("When the server is verifying a token received from the client, the server should explicitly declare the expected hashing algorithm and not rely on the "),s("code",[t._v("alg")]),t._v(" property in the header. You can find more background on this practice in the article, "),s("em",[s("a",{attrs:{href:"https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries",target:"_blank",rel:"noopener noreferrer"}},[t._v("Critical vulnerabilities in JSON Web Token libraries"),s("OutboundLink")],1)]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"set-the-algorithm-when-signing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-the-algorithm-when-signing"}},[t._v("#")]),t._v(" Set the algorithm when signing")]),t._v(" "),s("p",[t._v("The default algorithm used by the "),s("code",[t._v("jsonwebtoken")]),t._v(" library to sign the token is "),s("code",[t._v("HS256")]),t._v(". This is an implementation of the Hash-Based Message Authentication Codes (HMAC) algorithm family using a SHA256 hash function.")]),t._v(" "),s("p",[t._v("Even though this is the default, let's set that choice explicitly in the signing options object.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("jwt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// payload")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// secret encryption key")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("expiresIn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1h'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" algorithm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HS256'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options object")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Then while verifying the token when it is sent back to the server on an API request, you should explicitly set the verification options object to expect that same algorithm.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("jwt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("verify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("algorithms"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HS256'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Read more about the "),s("a",{attrs:{href:"https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback",target:"_blank",rel:"noopener noreferrer"}},[t._v("additional verification options"),s("OutboundLink")],1),t._v(" in the official docs.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Notice")]),t._v(" "),s("p",[t._v("The verification options object uses a pluralized key name, "),s("code",[t._v("algorithms")]),t._v(", which accepts an array of acceptable algorithms.")])]),t._v(" "),s("h3",{attrs:{id:"silently-refresh-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#silently-refresh-tokens"}},[t._v("#")]),t._v(" Silently refresh tokens")]),t._v(" "),s("p",[t._v("Short lived tokens provide better security against tokens intercepted in transit. If a token is exposed, it will expire quickly and limit the potential abuse. But forcing your users to provide their username/password repeatedly while using your application does not deliver a positive user experience.")]),t._v(" "),s("p",[t._v("One way to overcome this is to have the client application silently use the old token to request a new one. Typically this would be done via a POST request to the "),s("code",[t._v("/auth/tokens")]),t._v(" resource path, sending the current/expired token in the header and an empty body. A short grace period can optionally be allowed for expired tokens.")]),t._v(" "),s("p",[t._v("Once the client supplied token is verified, then a new token is generated and returned to the client. The client would then update it's application state and proceed with the user's requested action. The re-authentication process would be invisible to the user.")]),t._v(" "),s("p",[t._v("If the client implementation proactively requests a new token before the old token has expired, the old token is added to the revoked token list so that it can no longer be used for either authentication or token refresh.")]),t._v(" "),s("h3",{attrs:{id:"better-logout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#better-logout"}},[t._v("#")]),t._v(" Better logout")]),t._v(" "),s("p",[t._v("The simple implementation of client-side logout with a JWT is to clear it from active memory and the on-device cache, usually localStorage. A better implementation is to also send a RESTful API request to the server to register the user's explicit logout action.")]),t._v(" "),s("p",[t._v("The server would then record that token as revoked. The JWT verification logic would need to be augmented to check against this table of revoked tokens. Because JWT verification needs to happen on every API call, the revoked token list is typically implemented with an in-memory database like Redis. Redis also has a built-in feature to automatically remove keys from a datastore after a set expiry time. This ensures that expired keys do not clutter up the datastore and the look-up task remains fast.")]),t._v(" "),s("h2",{attrs:{id:"re-export-with-es-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#re-export-with-es-modules"}},[t._v("#")]),t._v(" Re-export with ES Modules")]),t._v(" "),s("p",[t._v("Sometimes it is useful to separate out sub-sets of certain modules into separate module files, but still make them available from a common module to make consuming them simpler. This is done by setting up the common module, or aggregator, to import the smaller modules and then re-export them.")]),t._v(" "),s("p",[t._v("Take the model modules from our example application. It might be useful to be able to import several models at once, or all of the models in a single object.")]),t._v(" "),s("h3",{attrs:{id:"create-a-new-aggregator-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-aggregator-module"}},[t._v("#")]),t._v(" Create a new aggregator module")]),t._v(" "),s("p",[t._v("Start by creating a new "),s("code",[t._v("index.js")]),t._v(" file in the "),s("code",[t._v("/models")]),t._v(" folder. There are "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export",target:"_blank",rel:"noopener noreferrer"}},[t._v("several syntax options available"),s("OutboundLink")],1),t._v(", but the simplest is the "),s("code",[t._v("export..from")]),t._v(" syntax.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /models/index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Car.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Person.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./User.js'")]),t._v("\n")])])]),s("h3",{attrs:{id:"import-from-this-new-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-from-this-new-module"}},[t._v("#")]),t._v(" Import from this new module")]),t._v(" "),s("p",[t._v("Elsewhere in your application when you need to import multiple model classes, you can do it as named imports.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./models/index.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cars "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Or import all of the models in a single object.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" models "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./models/index.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cars "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"for-next-week"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-next-week"}},[t._v("#")]),t._v(" For next week")]),t._v(" "),s("p",[t._v("Before next week's class, please read these additional online resources.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://philsturgeon.uk/api/2017/01/24/graphql-vs-rest-overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraphQL vs REST"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.runscope.com/posts/you-might-not-need-graphql",target:"_blank",rel:"noopener noreferrer"}},[t._v("You might not need GraphQL"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://philsturgeon.uk/api/2016/01/04/http-rest-api-file-uploads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP/REST API File Uploads"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Quiz")]),t._v(" "),s("p",[t._v("There will be a short quiz next class. The questions could come from any of the material referenced above.")])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);
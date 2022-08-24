"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},l),{},{components:n})):o.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,description:"How to test and mock App store iap receipts."},a="Testing and Mocking",s={unversionedId:"app-store/testing-and-mocking",id:"app-store/testing-and-mocking",title:"Testing and Mocking",description:"How to test and mock App store iap receipts.",source:"@site/docs/app-store/testing-and-mocking.mdx",sourceDirName:"app-store",slug:"/app-store/testing-and-mocking",permalink:"/laravel-iap-docs/docs/app-store/testing-and-mocking",draft:!1,editUrl:"https://github.com/imdhemy/laravel-iap-docs/blob/master/docs/app-store/testing-and-mocking.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"How to test and mock App store iap receipts."},sidebar:"tutorialSidebar",previous:{title:"Sell Subscriptions",permalink:"/laravel-iap-docs/docs/app-store/sell-subscriptions"},next:{title:"Google Play Billing",permalink:"/laravel-iap-docs/docs/category/google-play-billing"}},p={},c=[{value:"Testing with a Mock Receipt",id:"testing-with-a-mock-receipt",level:2},{value:"Testing with a Mock Notification",id:"testing-with-a-mock-notification",level:2},{value:"Mocking multiple responses",id:"mocking-multiple-responses",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-and-mocking"},"Testing and Mocking"),(0,r.kt)("p",null,"LIAP is build with testing and mocking in mind. This means that you can test your app without actually making a purchase.\nThe only thing you need to do is to mock the receipt or a server notification and then test your app."),(0,r.kt)("h2",{id:"testing-with-a-mock-receipt"},"Testing with a Mock Receipt"),(0,r.kt)("p",null,"Follow the steps below to mock a receipt and test your app."),(0,r.kt)("p",null,"Create an instance from ",(0,r.kt)("inlineCode",{parentName:"p"},"GuzzleHttp\\Psr7\\Response")," with the required ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/appstorereceipts/responsebody"},"response body"),"."),(0,r.kt)("p",null,"Let's create a mock response for a ",(0,r.kt)("inlineCode",{parentName:"p"},"sanbox")," receipt, with ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and some details on a\n",(0,r.kt)("inlineCode",{parentName:"p"},"latest_receipt_info")," array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace Tests\\Feature;\n\nuse GuzzleHttp\\Exception\\GuzzleException;\nuse GuzzleHttp\\Psr7\\Response;\nuse Imdhemy\\AppStore\\ClientFactory;\nuse Imdhemy\\AppStore\\Exceptions\\InvalidReceiptException;\nuse Imdhemy\\Purchases\\Facades\\Product;\nuse JsonException;\nuse Tests\\TestCase;\n\nclass ExampleTest extends TestCase\n{\n    /**\n     * A basic test example.\n     *\n     * @return void\n     * @throws GuzzleException\n     * @throws InvalidReceiptException|JsonException\n     */\n    public function test_example(): void\n    {\n        // Create the expected body\n        $responseBody = [\n            'environment' => 'Sandbox',\n            'status' => 0,\n            'latest_receipt_info' => [\n                [\n                    'product_id' => 'fake_product_id',\n                    'quantity' => '1',\n                    'transaction_id' => 'fake_transaction_id',\n                    // other fields omitted\n                ],\n            ],\n            // other fields omitted\n        ];\n\n        // Create the response instance. It requires to JSON encode the body.\n        $responseMock = new Response(200, [], json_encode($responseBody, JSON_THROW_ON_ERROR));\n\n        // Use the client factory to mock the response.\n        $client = ClientFactory::mock($responseMock);\n\n        // --------------------------------------------------------------\n        // The created client could be injected into a service\n        // --------------------------------------------------------------\n        // The part is up to you as a developer.\n        //\n        // Inside that service you can use the client as follows\n        $verifyResponse = Product::appStore($client)->receiptData('fake_receipt_data')->verifyReceipt();\n        // The returned response will contain the data from the response body you provided in the first line.\n    }\n}\n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Subscription")," Facade works the same way."),(0,r.kt)("h2",{id:"testing-with-a-mock-notification"},"Testing with a Mock Notification"),(0,r.kt)("p",null,"Once a service notification is received, it will trigger an ",(0,r.kt)("inlineCode",{parentName:"p"},"EventPurchaseEvent")," event. You can test this functionality\nthe same way you test events in Laravel."),(0,r.kt)("p",null,"You can find the notification attributes on ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/appstoreservernotifications/responsebodyv1"},"Apple's documentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace Tests\\Feature;\n\nuse Illuminate\\Support\\Facades\\Event;\nuse Imdhemy\\Purchases\\Events\\AppStore\\DidChangeRenewalStatus;\nuse Tests\\TestCase;\n\nclass ExampleTest extends TestCase\n{\n    /**\n     * A basic test example.\n     *\n     * @return void\n     */\n    public function test_example(): void\n    {\n        Event::fake();\n\n        $data = [\n            'unified_receipt' => [],\n            'notification_type' => 'DID_CHANGE_RENEWAL_STATUS',\n        ];\n\n        $uri = route('liap.serverNotifications') . '?provider=app-store';\n\n        $this->post($uri, $data);\n\n        Event::AssertDispatched(DidChangeRenewalStatus::class);\n    }\n}\n\n")),(0,r.kt)("h2",{id:"mocking-multiple-responses"},"Mocking multiple responses"),(0,r.kt)("p",null,"The client factory can be used to mock multiple responses."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"}," $client = ClientFactory::mockQueue([\n           $response1, // GuzzleHttp\\Psr7\\Response\n           $response2, // GuzzleHttp\\Psr7\\Response\n           $requestException, // GuzzleHttp\\Exception\\RequestException\n           // and so on...\n       ]);\n")),(0,r.kt)("p",null,"The responses will be returned in the order they are provided."),(0,r.kt)("p",null,"You can also mock an error response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use GuzzleHttp\\Exception\\RequestException;\n\n$client = ClientFactory::mockError(new RequestException($message, $request));\n")))}u.isMDXComponent=!0}}]);
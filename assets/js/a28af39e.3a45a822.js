"use strict";(self.webpackChunklaravel_in_app_purchase=self.webpackChunklaravel_in_app_purchase||[]).push([[28],{8581:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=i(7462),n=i(3366),r=(i(7294),i(3905)),o=["components"],p={},s="App Store IAP Manual",l={unversionedId:"appstore-iap/intro",id:"appstore-iap/intro",isDocsHomePage:!1,title:"App Store IAP Manual",description:"App Store IAP is a PHP package to handle App Store purchase verification and Server Notifications with expressive and elegant syntax. This package takes the pain out of development by allowing you to mock receipts and implement their business logic without actual iOS receipts!",source:"@site/docs/appstore-iap/intro.md",sourceDirName:"appstore-iap",slug:"/appstore-iap/intro",permalink:"/laravel-iap-docs/docs/appstore-iap/intro",editUrl:"https://github.com/imdhemy/laravel-iap-docs/edit/master/docs/appstore-iap/intro.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/laravel-iap-docs/docs/get-started/installation"},next:{title:"Google Play Billing Manual",permalink:"/laravel-iap-docs/docs/google-play-billing/intro"}},c=[{value:"Why App Store IAP",id:"why-app-store-iap",children:[{value:"Object Oriented Code",id:"object-oriented-code",children:[]},{value:"Server Notifications",id:"server-notifications",children:[]},{value:"Mock Receipts",id:"mock-receipts",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],d={toc:c};function u(e){var t=e.components,i=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app-store-iap-manual"},"App Store IAP Manual"),(0,r.kt)("p",null,"App Store IAP is a PHP package to handle App Store purchase verification and Server Notifications with expressive and elegant syntax. This package takes the pain out of development by allowing you to mock receipts and implement their business logic without actual iOS receipts!"),(0,r.kt)("h2",{id:"why-app-store-iap"},"Why App Store IAP"),(0,r.kt)("p",null,"There are a variety of PHP packages available to you when it comes to App Store receipt validation. However, we believe App Store IAP is the best choice to add this vital functionality to your PHP application."),(0,r.kt)("h3",{id:"object-oriented-code"},"Object Oriented Code"),(0,r.kt)("p",null,"The basic idea of receipt validation is sending an HTTP request to the App Store endpoint, and parse the response to know the receipt status. Other packages are using an HTTP client and deal with responses as a plain arrays, which makes it hard for the developer to understand the business behind the receipt validation and the responses. "),(0,r.kt)("p",null,"The expressive elegant syntax provided by App Store IAP solves this problem and makes the process a piece of cake."),(0,r.kt)("h3",{id:"server-notifications"},"Server Notifications"),(0,r.kt)("p",null,"Unlike other packages that was developed for the same purpose of receipt validation, App Store IAP helps you to parse and deal with the Server Notifications using a Parser Class that gives you the ability to trigger the proper events on your PHP app in respond to the subscription lifecycle notifications received from the App Store."),(0,r.kt)("h3",{id:"mock-receipts"},"Mock Receipts"),(0,r.kt)("p",null,"You can start developing your back-end functionality without real receipts at all. App store IAP gives you an easy way to mock all responses from the App store."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Use composer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"composer require imdhemy/appstore-iap\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Below is a simple example of receipt validation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="verify-receipt.php"',title:'"verify-receipt.php"'},"use Imdhemy\\AppStore\\ClientFactory;\nuse Imdhemy\\AppStore\\Receipts\\Verifier;\n\n// Create a client\n$client = ClientFactory::create();\n\n// Create a verifier instance\n// Pass the client, receipt data and the password to the verifier constructor\n// The receipt data is the data received after finishing the transaction on the mobile app.\n$verifier = new Verifier($client, $receiptData, $password);\n\n// Get the receipt response\n$receiptResponse = $verifier->verify();\n\n// Get receipt status\n$status = $receiptResponse->getStatus();\n\nif($status->isValid()) {\n    // Grant the user the entitelment\n    $receiptInfo = $receiptResponse->getLatestReceiptInfo()[0];\n    $productId = $receiptInfo->getProductId();\n    // ...\n}\n")),(0,r.kt)("p",null,"For a detailed usage and other features check the other documentation pages."))}u.isMDXComponent=!0}}]);
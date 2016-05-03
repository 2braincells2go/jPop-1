# jPop
### Popups when visitor scrolls downs
jPop is Popup jQuery plugin that helps you to make awesome popup. jPop renders when a visitor scrolls down.
<br>
After visitor scrolls down to 200px (As a default but you can change it). You can change its title,paragraph,Button text and class and input through initializing plugin.
####  [Demo](https://rawgit.com/iksdatoo/jpop/master/index.html)
<br>
#### Usage
<br>
#### Link Css file:

    <link rel="stylesheet" type="text/css" href="dist/css/plugin.css">
<br>
#### Template:

    
	<div class="popup gee-popup">
		<div class="popup-inner">
			<a class="close-button popup-close-button">
				&times;
			</a>
			<div class="popup-header">
				<h3 class="popup-title"></h3>
			</div>
			<p class="paragraph" ></p>
			<div class="user-content"></div>
			<button class="btn btn-info btn-block btn-lg" ></button>
		</div>
	</div>
#### Link js files:

    
		<script type="text/javascript" src="dist/js/plugin.js" ></script>
		

#### Call the plugin:
 

    
		<script type="text/javascript">
			$("html").jPopup({
				paragraph: "This is custom paragraph, You can change it",
				buttonText : "Click me",
				buttonClass : "btn btn-info btn-block btn-lg",
			});
		</script>
#### The default options:
| Option | Value  | 
|  ---   |  ---   |
|Popup Parent | gee-popup |
|Scroll Top Px | 200 |
|Popup Close Button | .popup-close-button |
|Heading | heading - You can change |
|Paragraph | You can paragraph it from options. You can also change the input into your own template |
|User Content | &lt;div class="input"&gt; &lt;input class="form-control" type="text" placeholder="Your Email" &gt; &lt;/div&gt; |
|Button Text | Click me |
|Button Class | btn btn-info btn-block btn-lg |
### Contributors
Ilyas Karim 
<br>
http://www.twitter.com/iksdatoo
<br>
http://www.facebook.com/iksdatu

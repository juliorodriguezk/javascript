function testFramework() {
	var myComponent = $COMPONENTFRAMEWORK.log({element : document.getElementById("test")});
	myComponent.setSize(1000, 200);
	myComponent.changeFont(20);
	myComponent.setColor('grey');
	myComponent.error("AAAAAAAAAAA AAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAA AAAAAAA AAAAAAAAAAAAA");
}
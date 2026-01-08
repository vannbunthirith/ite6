(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

(lib.knob = function() {
	this.initialize(img.knob);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,319);


(lib.knob3 = function() {
	this.initialize(img.knob3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,330);


(lib.knob4 = function() {
	this.initialize(img.knob4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,328);


(lib.knob5 = function() {
	this.initialize(img.knob5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,327);


(lib.knob6 = function() {
	this.initialize(img.knob6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,325);


(lib.knob_cover = function() {
	this.initialize(img.knob_cover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,403,240);


(lib.multimeter = function() {
	this.initialize(img.multimeter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,482);


(lib.screen_2 = function() {
	this.initialize(img.screen_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,144);


(lib.screen_3 = function() {
	this.initialize(img.screen_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,141);


(lib.screen_4 = function() {
	this.initialize(img.screen_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,365,140);


(lib.screen_5 = function() {
	this.initialize(img.screen_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,139);


(lib.screen_6 = function() {
	this.initialize(img.screen_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,141);


(lib.screen_7 = function() {
	this.initialize(img.screen_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,144);


(lib.s7_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D5D5D5"],[0,1],84.6,-41.2,-173.6,297.5).s().rr(-76.8,-138.15,153.6,276.3,6);
	this.shape.setTransform(76.8,138.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153.6,276.3);


(lib.rndGlow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0197D6").s().p("AggAhQgOgOAAgTQAAgSAOgOQAOgOASAAQATAAAOAOQAOAOAAASQAAATgOAOQgOAOgTAAQgSAAgOgOgAgfgfQgNAOABARQgBASANANQAOANARABQASgBANgNQANgNABgSQgBgRgNgOQgNgNgSABQgRgBgOANg");
	this.shape.setTransform(4.8,4.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.5,9.5);


(lib.recGlow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A1E3").s().p("Al7CvIAAldIL2AAIAAFdgAlnCbILOAAIAAk1IrOAAg");
	this.shape.setTransform(38,17.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,35);


(lib.KnobPNG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.knob();
	this.instance.setTransform(-14.2,40.2,0.189,0.189,-115.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.1,-40.1,80.4,80.3);


(lib.comGlow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A1E3").s().p("AhChKQgHgLgEgPQgIggAQgdQASgdAfgJQAfgJAdARQAdASAIAfQAKAhgSAdIgFAIIgCADIgWEQIhTABgAgSi6QgaAIgPAZQgNAWAIAfQAFAQAEAIIAVELIA/gBIAUkGIAGgMQAQgagIgdQgHgagYgOQgPgKgRAAQgIAAgKADg");
	this.shape.setTransform(8.2,20.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,40.8);


(lib.Screwdriver02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgLAGQgEgCAAgDQAAgCAFgCQAFgCAFAAQAHAAAEACQAFACAAACQAAADgEACg");
	this.shape.setTransform(66.3,9.6,1,1,0,0,0,0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgKAFQgFgDAAgCQAAgEAEgDIAXAAQAEADAAAEQAAACgFADQgFADgGAAQgGAAgEgDg");
	this.shape_1.setTransform(66.4,2.5,1,1,0,0,0,0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1).p("AE0AEIpFAAIgiAAIAAgHIAbAAIJMAA");
	this.shape_2.setTransform(30.9,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F3").s().p("AgmAEIAAgHIAbAAQAiACAQABQgRADgaABg");
	this.shape_3.setTransform(3.9,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C9C9C9").s().p("AjyACQgQgCgkgBIJNAAIgBADg");
	this.shape_4.setTransform(32.2,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A2A2A2").s().p("AkiABQAcgBAQAAIIZAAIAAABg");
	this.shape_5.setTransform(32.6,6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(1,1,1).p("AGJgbIAAABQAEAXgEAYQgCANgEANIgXANIoRAAIgWgLIgqAAIgVgIQgCgJgBgJQAAgCAAgDQgBgLAAgJQAAgSADgUIAUgLIAtAAQgEAOgBAOQgCAVACAVQAAACAAACQABANADANAi6gzIAagIIIQAAIAUAOAjngzQgDAXAAAXQAAANABAPQAAABAAABQACAMACAMAl3ApIgOgFQgDgLgBgKQgBgIAAgHIAAAAQAAgCAAgDQAAgBAAgCQABgHABgGQABgHACgIIAOgEQgCAIgBAJQgBAHAAAIQgBAJABAMQAAACAAACQABADAAADQAAABABABQAAAHACAJgAj6ApIh9AAAl3goIB8AA");
	this.shape_6.setTransform(100.6,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9F9EA1").s().p("AgEAIQgDgJgBgKIANACIABAGIAAACIADAOg");
	this.shape_7.setTransform(62.1,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6F6F6").s().p("AgFALIgBgOIAAgBIAAgFIACAAIALgDQgBALABAKIAAAEg");
	this.shape_8.setTransform(61.8,6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2B2B2").s().p("AgIARIAAgDIACgNIADgNIAMgEIgDAQQgBAGgBAIIgKADg");
	this.shape_9.setTransform(62.1,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFDFE").s().p("AAFAPIgNgFQgBgKAAgKIASgEIABAdg");
	this.shape_10.setTransform(76.1,6.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A8A9AD").s().p("AgIAHIgCgQIAAgFIANAFIAFACIAEAWg");
	this.shape_11.setTransform(76.4,9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A9AAAC").s().p("Ag7AIIgDgOIAAgBIB7AAIACAPg");
	this.shape_12.setTransform(69.1,9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C5C5CA").s().p("Ag9AgIgBgGIAAgEQgBgMABgKQAAgHABgHIADgRIB6AAQgDAUAAAQQAAALABALIAAAFg");
	this.shape_13.setTransform(68.9,5.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C0C0C4").s().p("AgIgMIATgLQgDAXgBAUIgRAEQAAgTACgRg");
	this.shape_14.setTransform(76.3,3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AAACAE").s().p("AgRAyIgEgXIAAgDIgCgcQABgXADgWIAqAAQgDANgBAOQgCAWACAUIAAAEQAAANADANg");
	this.shape_15.setTransform(79.5,5.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3366CC").s().p("AkCAeQgiggAggcIISAAQAOAdgPAgg");
	this.shape_16.setTransform(110.6,5.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BBD0EE").s().p("AENgeIAXAFQAEAXgEAYIgYAJQAPgggOgdgAkkAUQgCgVACgVIAfgIQggAcAiAgg");
	this.shape_17.setTransform(110.7,5.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8BAFE2").s().p("AkKA8IgWgLQgDgNgBgNIAAgEIAhAKIIQABIAYgJQgDANgDANIgYANgAkegzIAagIIIPAAIAVAOQADAJACAJIgBAAIgXgEIoRAAIggAIQACgPAEgNg");
	this.shape_18.setTransform(110.7,6);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,142.2,14.1);


(lib.Screwdriver01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AFLAUIp4AAIgeAAIAAgnIAmAAIJxAA");
	this.shape.setTransform(-48.2,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9C9C9").s().p("Ak8AMQAogKASgNII/AAIgBAXg");
	this.shape_1.setTransform(-46.7,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F3").s().p("AgqAUIAAgnIAmAAQAcAGATALQgSANglAJg");
	this.shape_2.setTransform(-77.1,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2A2A2").s().p("AkHAIQgTgIgegHIJxAAIAAAPg");
	this.shape_3.setTransform(-46.3,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(1,1,1).p("AkWgsQgCAJgBALQAAACAAADQgCAMABAKQAAAVADAWIiKAAIgQgFQgBgHgCgHQAAgBAAgBQgCgJAAgJQAAgEAAgDQAAgHABgIQABgKACgJQABgDAAgCIAQgFgAkAA6QgEgaAAgZQgBgPACgQQAAgCAAgBQACgNACgNIgXAJAjQg1QgDAOgCAPQAAACAAADQgCAWACAYQACAPAEAQIAdAIIJKAAIAXgPQAEgKACgLQAFgagFgbQgCgOgFgOIgagOIpMAAgAj/g1IAvAAAjPA6IgxAAIgXgMAmhAuQgEgSgBgSQgBgNACgPQAAgDABgEQABgJACgK");
	this.shape_4.setTransform(29.1,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2B2B2").s().p("AgEAOIgDgOIAAAAIgCgSIAOADQABAQAEASg");
	this.shape_5.setTransform(-13.8,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002F00").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFQAFAGABAGQgBAHgFAFQgFAFgHABQgGgBgGgFg");
	this.shape_6.setTransform(-9.5,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6F6F6").s().p("AgHAMIAAgIIABgPIAOgCQgCANABAOg");
	this.shape_7.setTransform(-14,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9F9EA1").s().p("AgFgDIABgFIAOgFIgEARIAAAHIgPADIAEgRg");
	this.shape_8.setTransform(-13.8,-2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C0C0C4").s().p("AgJAPQgCgUAAgVIATAEQAAAXAFAag");
	this.shape_9.setTransform(2,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3366CC").s().p("AkhAiQgkgfAkgkIJMAAQARAjgQAgg");
	this.shape_10.setTransform(40.2,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BBD0EE").s().p("AEqghIAbAJQAFAbgFAaIgaAFQAQgggRgjgAlFAZQgCgXACgXIAjgMQgkAkAkAfg");
	this.shape_11.setTransform(40.3,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8BAFE2").s().p("AkiBCIgcgIQgEgQgCgPIAiAJIJOAAIAZgGQgCALgDAKIgYAPgAlEgYIAEgdIAZgMIJMAAIAaAOQAEAOACAOIgagJIpNAAIgiANIAAgFg");
	this.shape_12.setTransform(40.2,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AAACAE").s().p("AgVA4QgEgZAAgaQgBgPACgQIAAgDIAEgaIAtAAIgFAdIAAAFQgCAWACAYQACAPAEAQg");
	this.shape_13.setTransform(5.6,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCFDFE").s().p("AgKAMQgBgMACgKIAOgFIAGAAQgCAPABAQg");
	this.shape_14.setTransform(1.9,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C5C5CA").s().p("AhBAkQgEgTgBgRQgBgNACgPIABgHICJAAIAAAGQgCALABANQAAASADAXgAgugWQgFAFAAAIQAAAHAFAEQAGAFAHABQAIgBAFgFQAFgEABgHQgBgIgFgFQgFgFgIAAIgBAAQgHAAgFAFg");
	this.shape_15.setTransform(-6.1,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A9AAAC").s().p("AhGAJIAEgRICIAAIgCARg");
	this.shape_16.setTransform(-6,-3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A8A9AD").s().p("AgLALIACgRIAWgKIgEAZIgGACIgPAGIABgGg");
	this.shape_17.setTransform(2.1,-3.3);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.4,-7.2,156.5,15.4);


(lib.FlatheadScrewdriver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.FlatheadScrew02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2A2A2").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape.setTransform(5.5,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#272727").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(8.5,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#535353").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(10.1,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0A0A0").s().p("AAgAEIAAgBIABAAIAAABgAgggCIAAgBIABAAIAAABg");
	this.shape_3.setTransform(5.4,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#989898").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(2.6,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#222222").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_5.setTransform(2.9,6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202020").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIABAAIAAABg");
	this.shape_6.setTransform(4.2,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1E1E").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIABAAIgBAAIAAABg");
	this.shape_7.setTransform(4.1,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0E0E0").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_8.setTransform(4.2,4.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EBEBEB").s().p("AABAJIAAgBIgBAAIAAAAIAAgBIgBAAIgBAAIAAAAIgBAAIAAgCIAAgBIABAAIABgEIAAAAIAAAAIABAAIAAgEIAAAAIAAgFIAAAAIAAABIAAACIAAABIACAAIAAABIAAACIAAAAIAAABIABAAIAAABIAAAAIAAABIAAABIABAAIAAABIgBAAIAAACIgBAAIAAACIABAAIAAABIgBAAIAAABg");
	this.shape_9.setTransform(2.6,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0F0F0F").s().p("AAAADIAAgBIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIAAAAIAAABIAAABIAAAAIABAAIAAABIAAABIAAABg");
	this.shape_10.setTransform(2.8,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B7B7B7").s().p("AAcAKIAAgCIABAAIAAACgAgcgIIAAgBIABAAIAAABg");
	this.shape_11.setTransform(5.5,6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEFEF").s().p("AAKANIgBAAIgBAAIAAgBIAAgBIABAAIgBgEIACAAIAAgBIgCAAIAAgCIACAAIAAgEIABAAIgBgCIACAAIAAgBIABAAIAAABIAAABIAAABIABAAIAAACIAAABIAAABIgBAAIAAAEIgBAAIAAACIgBgBIAAACIABAAIAAACIgBAAIgBABgAAAAIIAAgBIAAAAIAAAAIgBAAIgCAAIgCAAIAAgBIgBAAIgBAAIgBAAIAAgCIAAAAIAAgCIgBAAIAAgBIAAgBIgBAAIABgBIgCAAIAAgBIAAgBIAAAAIgBAAIAAgDIAAAAIAAgCIgBAAIAAgBIAAgCIACAAIACAAIACAAIABAAIAAgBIABAAIADAAIACgBIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAAAIAAABIABABIAAABIAAAAIABAAIAAACIAAABIAAABIAAABIABAAIAAABIAAABIAAABg");
	this.shape_12.setTransform(4.2,6.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C8C8C8").s().p("AAHAIIAAgBIABAAIAAABgAgGgBIgBAAIAAgCIAAgBIABAAIAAgBIABAAIAAgBIABgBIAAADIgBAAIAAABIABAAIAAABIgBAAIAAACIgBAAg");
	this.shape_13.setTransform(2.3,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5D5D5D").s().p("AACARIAAgBIABAAIAAABgAglADIAAgBIgCAAIgCABIAAgCIgBABIgCgBIAAgBIgDABIAAgBIAMAAIAAABIABABIgCAAIAAABgAAtAAIAAgDIACAAIAAADgAAvgFIAAgCIAAAAIABACgAgMgNIACAAIAAABIgCABgAgjgPIAAgBIABAAIAAABg");
	this.shape_14.setTransform(5.2,6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B2B2B").s().p("AAAADIAAAAIAAgBIAAAAIAAAAIABABgAAAgBIAAgBIAAAAIAAABg");
	this.shape_15.setTransform(9.8,5.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#313131").s().p("AATABIABAAIABgBIAAABIgBAAIgBABgAgTAAIgBAAIAAAAIABAAIAAgBIACAAIAAABg");
	this.shape_16.setTransform(6.3,6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#262626").s().p("AAgAEIAAgBIgCAAIAAgBIACAAIABAAIAAACgAgfgCIgBgBIACAAIgBABg");
	this.shape_17.setTransform(5,5.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DEDEDE").s().p("AgBANIgBgDIAAgGIABAAIAAgEIABAAIAAgCIAAgGIAAAAIAAgBIAAAAIAAgDIACAAIgBABIAAABIAAABIAAABIACAAIAAACIgCAAIAAABIgBAAIABAFIgBAAIAAADIAAAAIAAADIgBAAIAAAEIABAAIAAABIgBABIABABg");
	this.shape_18.setTransform(7.9,6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8F8F8F").s().p("AguALIAAgCIACAAIAAACgAAWAAIAAAAIABAAIAAAAgAAsgGIAAgBIACAAIAAABgAAugHIAAgDIABAAIAAADgAAugHg");
	this.shape_19.setTransform(4.8,5.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2E2E2").s().p("AgCALIAAgBIAAgHIABAAIAAgBIAAgEIABAAIAAgBIAAAAIAAgFIABgBIAAgBIABABIAAABIAAABIAAABIABAAIAAACIgBAAIAAABIgCAAIABADIgBAAIAAADIAAAAIAAACIAAAAIAAABIAAAAIAAAEIAAAAIAAABg");
	this.shape_20.setTransform(5.2,6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BCBCBC").s().p("AgGAMIACAAIAAACIgCAAgAgLAIIABAAIABgBIAAABgAAJAAIAAgFIABABIABgFIAAAAIAAABIABABIAAABIABAAIAAACIgBgBIAAABIgCABIAAADgAABAAIgBAAIABAAIAAAAgAgNgIIAAgBIABAAIAAABgAAMgNIACAAIAAAAIgCABg");
	this.shape_21.setTransform(4.1,6.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#151515").s().p("AABAHIABgBIAAgBIgBgDIgBAAIAAgBIAAgBIAAgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIgBAAIAAgBIABAAIAAgBIAAABIABAAIAAACIAAAAIAAABIABAAIAAACIADAAIgBAAIgBAAIAAAAIAAABIABAEIAAACg");
	this.shape_22.setTransform(8,4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DBDBDB").s().p("AgkATIABgBIABgBIAAACgAgggJIAAgBIABAAIAAABgAAkgQIAAgBIABAAIAAABgAAKgQIAAgCIACABIAAABg");
	this.shape_23.setTransform(5.8,6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#575757").s().p("ABLANIABAAIAAABIgBAAgAgTgKIAAgCIABAAIAAACgAhLgLIAAgCIABAAIAAACg");
	this.shape_24.setTransform(9.1,7.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#727272").s().p("ABOAPIgBgDIACAAIgBADgAhOAGIAAgBIACAAIgBABgAgdAFIAAgBIgBAAIAAgCIABAAIAAgBIABAAIAAABIACAAIAAgBIAGAAIAAABIACAAIAAgCIABAAIAAAFgAgHgBIABgBIABAAIAAABgAhKgMIAAgCIACAAIAAACg");
	this.shape_25.setTransform(9,6.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1D1D1").s().p("AA7ATIgBgBIACAAIAAABgAg7gRIAAgBIABAAIAAABg");
	this.shape_26.setTransform(11.2,6.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#949494").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_27.setTransform(16.8,7.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9C9C9C").s().p("AgMABIAAgBIABAAIAAABgAAMAAIAAAAIABAAIAAAAg");
	this.shape_28.setTransform(17.3,8.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2E2E2E").s().p("AARAQIACAAIAAABIgCAAgAgQgOIgBAAIAAgBIABAAIAAgBIABAAIAAACg");
	this.shape_29.setTransform(8.7,6.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B3B3B3").s().p("AAPAVIABgBIABAAIAAABgAgLAAIAAAAIAAAAIAAgCIgCAAIAAgCIAAgBIAAgBIAAgCIgBAAIAAgBIAAgCIAAgBIgBAAIgBgDIACAAIAAgCIABAAIAAgBIAAgBIABAAIABgBIABAAIABAAIAAABIABAAIAAABIABAAIAAABIAAAAIAAACIgBAAIAAABIABAAIAAABIgBAAIAAADIgBAAIAAAGIgBAAIAAAEg");
	this.shape_30.setTransform(8.6,6.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#898989").s().p("AARAPIgBgBIACAAIAAABgAApgCIAAgBIABAAIAAABgAgngJIAAAAIABAAIAAAAgAgogMIgBgCIACAAIAAACg");
	this.shape_31.setTransform(8.4,6.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AAUARIABAAIAAAAIgBABgAgUgQIAAgBIAAAAIABABg");
	this.shape_32.setTransform(11.7,6.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ACACAC").s().p("AA1AOIAAgBIABAAIAAABgAg0gHIAAgBIABAAIAAABgAgpgMIAAgBIABAAIAAABg");
	this.shape_33.setTransform(8.3,7.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDFDFD").s().p("AAAAFIAAgBIAAAAIAAABgAAAABIAAgBIAAgBIAAACgAAAgCIAAgCIABAAIAAACg");
	this.shape_34.setTransform(13.4,7.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6A6A6A").s().p("ABGAUIAAgBIACAAIAAABgAAxALIAAgFIABAAIAAAAIABAAIAAAAIADgBIAAABIADABIAAgCIADAAIAAABIADAAIAAADIgMAAIAAgBIAAAAIAAACIAEAAIAAABgAhGAKIAAgBIAAAAIAAABgAAtgBIAAgCIAAABIAAABgAgXgRIAAgCIABAAIAAACg");
	this.shape_35.setTransform(9.4,6.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#080808").s().p("AArALIgCAAIAAgBIAAgBIAAgBIgBAAIgDAAIgBAAIgFAAIAAgBIADAAIAGAAIAAgEIAAgCIgBAAIAAgBIAAAAIAAgFIgBAAIAAgCIAAgBIAAgBIgBgBIACAAIgBACIABACIABAAIAAAFIAAABIABAAIAAACIAAACIABAAIAAAEIABABIAAABIAAAAIABABgAgrgCIAAgCIAAgBIABgCIAAAAIABADIAAACg");
	this.shape_36.setTransform(8.8,7.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEFEFE").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAABg");
	this.shape_37.setTransform(13.7,5.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#979797").s().p("Ag7AHIAAgBIABAAIAAABgAA7gFIAAgBIABAAIAAABg");
	this.shape_38.setTransform(7.8,6.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E3E3E3").s().p("AABAPIgBAAIAAgCIAAAAIAAAAIAAgBIgBAAIAAgBIAAgBIgBAAIAAgBIgBAAIAAgDIAAgCIABABIAAgBIgBgFIACAAIAAgCIAAgBIABAAIgBgFIABAAIAAgFIABAAIAAACIgBAAIAAAEIABAAIABAAIAAADIAAAAIAAACIAAABIABAAIAAACIABAAIAAACIAAACIABAAIAAACIAAABIAAABIAAACIAAABIgCAAIABABIgCAAIAAABIAAACgAgBAEIAAADIABAAIAAgEgAAAACIAAAAIAAgCIAAAAg");
	this.shape_39.setTransform(13.6,7.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AA2AYIAAgBIABAAIAAABgABZAXIgBgBIABABIAAAAgAhYACIABAAIAAAAIgBABgAAagWIAAgBIACAAIgBABg");
	this.shape_40.setTransform(10.6,6.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#636363").s().p("AgGAVIAAgBIABgBIAAACgAg+APIAAgBIABAAIAAABgABWAEIACAAIAAAAIgCABgAgmAAIAAgBIABAAIAAABgAhPgGIAAgBIABAAIAAABgAhXgKIAAgBIACAAIAAABgAhCgNIAAgBIABAAIAAABgAAWgTIAAgBIABAAIAAABg");
	this.shape_41.setTransform(10.9,6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6F6F6F").s().p("AgQAXIABAAIAAABIgBABgAAQAAIAAgBIABAAIAAABgAAJgXIAAgBIABAAIAAABg");
	this.shape_42.setTransform(12.1,6.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DADADA").s().p("AA5AYIgBgBIABAAIAAABgAg7ANIAAgBIABAAIAAABgAA7gXIABAAIAAABIgBABg");
	this.shape_43.setTransform(6.8,5.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C1C1C1").s().p("AA8AYIAAgBIAAgCIAAAAIAAACIABABgAg8AHIAAgBIACAAIAAABgAAngWIAEAAIAAABIgEAAg");
	this.shape_44.setTransform(10.5,6.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#232323").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIABAAIAAAAIAAABg");
	this.shape_45.setTransform(12.6,6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B4B4B4").s().p("AAwAWIAAgCIABABIAAABgAAoAOIAAgBIABAAIAAABgAgsgCIAAgBIAAgBIAAgBIgBAAIAAgDIAAgBIAAAAIgBAAIAAgDIAAgBIAAgBIgCAAIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIACAAIAAgCIABAAIABAAIgBACIACgBIAAABIABAAIAAAEIgBAAIAAADIgBAAIAAADIgBAAIAAAHgAgGgHIAAgBIABAAIAAABgAAhgJIAAgBIABAAIAAABg");
	this.shape_46.setTransform(9.1,6.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7C7C7C").s().p("AArAOIAAgBIAFAAIgBABgAgvgBIAAgBIABAAIAAABgAASgLIAAgBIABAAIAAABg");
	this.shape_47.setTransform(10.6,6.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D2D2D2").s().p("AAkAEIACAAIABAAIAAABIgDAAgAhAAAIABABIAAAAIgBABgABAgDIAAgBIABAAIAAABg");
	this.shape_48.setTransform(8.5,4.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#030303").s().p("Ag8AJIAAgCIAAgBIABAAIAAABIAAABIAAABgAA8gCIAAgBIAAgBIAAgBIAAgCIABAAIAAADIAAABIAAABgAgtgHIAAgBIACAAIAAABg");
	this.shape_49.setTransform(6.3,5.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4F4F4F").s().p("AgoAMIAAgBIABAAIAAABgAAoAKIgBgCIABAAIABACgAgagDIAAgBIABAAIAAABgAAcgJIAAgCIABAAIAAACg");
	this.shape_50.setTransform(7,5.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AEAEAE").s().p("ABCAPIAAgCIACAAIgBACgAhIAJIAAgBIACAAIAAABgABIABIAAgBIABAAIAAABgAgKgNIAAgBIABAAIAAABg");
	this.shape_51.setTransform(12.2,7.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#616161").s().p("AgWAQIAAgBIABAAIAAACgAgBAAIAAAAIABAAIAAAAgAAygCIAAgBIAAgBIABAAIAAABIAAABgAAigMIABgBIABAAIAAABgAgygOIAAgCIABAAIAAACg");
	this.shape_52.setTransform(7.5,6.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D0D0D0").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_53.setTransform(10.9,4.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2D2D2D").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_54.setTransform(10.7,4.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#777777").s().p("AA4AWIAAgCIACAAIAAACgAg6AHIABAAIAAABIgBAAgAgHgUIAAAAIABAAIAAAAg");
	this.shape_55.setTransform(11.5,6.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#161616").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABABg");
	this.shape_56.setTransform(10.4,3.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A5A5A5").s().p("AApATIAAgBIABAAIAAACgAgNgIIAAgBIABAAIAAABgAgpgNIAAgFIAHAAIAFAAIABABIAAABIAAABIgCAAIAAgBIgEAAIABABIgCAAIAAgBIgBAAIAAABIgBAAIAAAAIgBAAIAAAAIgBAAIAAAAIgBAAIAAACg");
	this.shape_57.setTransform(15.3,6.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2A2A2A").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIABAAIgBAAg");
	this.shape_58.setTransform(12.4,4.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5B5B5B").s().p("Ag5ARIAAgBIACAAIAAABgAglgFIABgBIABAAIAAABgAA4gIIAAgDIABAAIAAACIAAABgAgOgJIAAgBIAEgBIAAACgAArgOIAAgBIACAAIAAABgAgKgPIAAgBIAAAAIAAABg");
	this.shape_59.setTransform(8,6.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1D1D1D").s().p("AAAAAIAAAAIAAAAIABAAIAAAAIgBAAg");
	this.shape_60.setTransform(12.4,4.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B2B2B2").s().p("Ag1AUIAAgBIABAAIAAABgAAxACIAAgBIAAgBIAAgBIgCABIABgDIAAgCIAAgBIgBAAIgBgCIABgCIAAgCIAAgCIAAgBIAAABIAAgCIABAAIAAgBIAAgBIABAAIAAgBIABAAIAAABIACAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAAFIgBAAIAAAGIgBAAIAAAFIgBAAIAAABg");
	this.shape_61.setTransform(7.8,5.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8B8B8B").s().p("AAUAVIAAgCIABAAIAAACgAgUgTIAAAAIABAAIgBAAg");
	this.shape_62.setTransform(14.8,6.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgBAMIAAgCIABAAIAAACgAAAAKIAAgBIgBAAIAAgBIABAAIAAABIAAAAIAAABgAAAAKgAAAADIAAgBIAAAAIAAABgAAAgHIAAgBIABAAIAAABgAABgJIAAgCIABABIAAABg");
	this.shape_63.setTransform(19.1,7.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A6A6A6").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_64.setTransform(19.5,5.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5E5E5E").s().p("AgMALIAAgCIACAAIgBACgABEgCIAAgCIACAAIAAACgAhFgDIAAgCIABgBIAAADgAgdgKIACAAIAAAAIgCABg");
	this.shape_65.setTransform(12.4,5.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E5E5E5").s().p("AAmATIAAgBIgBAAIAAgBIgCgBIABgBIgCAAIAAABIAAgBIAAAAIAAgCIACAAIAAgBIgCAAIABgBIgBAAIAAABIAAAAIAAABIAAAAIAAACIgBAAIAAgCIAAgBIAAgBIAAgFIABAAIAAgGIAAAAIAAgGIABAAIAAgFIABAAIAAgEIABgBIAAACIAAACIAAABIAAABIABAAIABACIgBAAIgBABIACAAIAAABIAAADIAAABIABgBIAAADIAAAAIAAABIAAACIABAAIABADIAAACIAAACIABAAIAAACIgBAAIAAABIgBABIgBAAIAAABIABACIgBAAIAAABIAAABgAAiAGIABAAIAAgBIgBAAgAAkgEIABAAIAAgCIgBAAgAglgFIAAgBIgBAAIAAABIgBAAIAAgBIgCAAIAAgDIAAgBIAAgBIAAgBIgBAAIAAgCIAAgBIAAgBIABAAIAAgCIACABIAAABIACAAIAAgBIABAAIAAABIABAAIAAgBIABAAIAAABIADAAIADgBIAAACIAAACIAAABIAAABIABAAIAAACIAAABIAAABIgBAAIAAACg");
	this.shape_66.setTransform(15.4,6.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A1A1A1").s().p("AAAAIIAAAAIAAAAIAAABgAAwAAIABAAIgMAAIAAgBIgBAAIAAgDIAMAAIAAgCIABAAIAAAEIABACIAAAAgAgxgHIAAgBIACAAIAAABg");
	this.shape_67.setTransform(13.1,6.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D9D9D9").s().p("AA2AZIAAgBIABAAIAAACgAgWASIAAgBIACAAIAAABgAg2gLIAAgDIANgBIAAACIAAABIABAAIAAABIgFAAIAAgBIgBAAIAAABIgGAAIAAgBIgBAAIAAABgAAqgVIAAgCIAAgCIABAAIAAAAIAAABIAAAAIAAADg");
	this.shape_68.setTransform(13.8,6.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#323232").s().p("AhCAOIgCAAIAAgBIABAAIAAgBIABAAIAAABIAAABgAgPAAIgBAAIACAAIgBAAgABEgMIAAAAIABgBIAAABg");
	this.shape_69.setTransform(11.2,5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CFCFCF").s().p("AAQAbIAAAAIAAAAIgBABgAAlAXIAAgBIABAAIAAABgAgFASIAAgBIADAAIAAABgAgdgLIAAgBIgBAAIAAABIgCAAIAAgBIgBAAIAAABIgCAAIAAgBIgBgBIAAACIgBAAIAAgDIABAAIAAABIABAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIAAABIACAAIgBgBIAEAAIAAACIACAAIAAABIgCAAIAAABgAAcgbIABABIABAAIgBABg");
	this.shape_70.setTransform(15,6.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#121212").s().p("AgGAaIgBAAIAAgBIgCAAIAAgBIACAAIABAAIAAABIABAAIAAABgAAHgWIAAgBIABgBIABAAIgBgBIACAAIAAABIAAABIgBAAIAAABg");
	this.shape_71.setTransform(17.1,6.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#060606").s().p("AAzAeIAAgBIgBgBIAAgBIABAAIABAAIAAgBIABAAIAAABIAAABIgBAAIAAACgAhGgOIAAgBIACAAIgBACgAgsgQIAAgBIACAAIAAABgABEgZIAAgBIAAgCIABABIAAgCIAAAAIAAACIACAAIAAABIgBAAIgBAAIAAABg");
	this.shape_72.setTransform(11.4,6.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C3C3C3").s().p("AAHAUIAAgEIABAAIAAgJIABAAIAAAEIAAABIAAACIAAABIABAAIAAABIgBAAIAAACIgBAAIAAABIAAABgAgpAPIgBgBIABAAIABACgAAigSIAEAAIAAgBIABAAIAAABIADAAIgBgBIABAAIAAACIABABIgIAAIAAADIgBAAg");
	this.shape_73.setTransform(15.9,6.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9E9E9E").s().p("AgbAXIgBgBIABAAIAAABgAAcgWIAAgBIABAAIAAABg");
	this.shape_74.setTransform(16.1,6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#939393").s().p("AgDAUIAAgBIABAAIAAABgAAGgQIgBgBIgKAAIAAgCIAKAAIAAABIABAAIAAACg");
	this.shape_75.setTransform(17.2,6.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A7A7A7").s().p("Ag6AGIAAgBIABAAIAAABgAAzADIAAgCIABAAIAAACgAA6gEIAAgBIABAAIAAABg");
	this.shape_76.setTransform(10.8,6.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6E6E6E").s().p("AA7ASIgBgBIABAAIAAABgAg6AQIAAgBIABAAIAAABgAA5ACIAAgCIABAAIAAACgAAFAAIALAAIAAAAIgLAAgAAegGIAAgCIABAAIAAACgAg3gJIAAgBIACAAIAAABgAg1gLIAAgDIAAAAIABADgAgKgQIAAgBIABAAIAAABgAgcgRIAAgBIABAAIAAABg");
	this.shape_77.setTransform(13.7,6.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#181818").s().p("AAMAQIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIgFABIAAgBIAAgBIAAACIgBAAIAAgCIgCAAIgCAAIgCAAIAAACIABABIgCAAIAAABIAAABIgBAAIAAABIgBAAIAAgBIAAgBIABAAIAAgBIAAgCIABAAIAAgBIAAgBIAAgDIAAgBIgBAAIAAgDIAAgBIAAgBIgBAAIAAgDIAAgBIgBgBIABgCIgBAAIAAgDIAAgBIAAgCIAAgBIABAAIAAADIAAABIAAACIABAAIAAADIAAADIABgBIAAACIAAACIABAAIAAAAIALgBIAAgBIgBgDIAAgCIgBAAIAAgEIAAgDIAAgBIACAAIAAADIAAABIgBADIACAAIgBAEIABABIAAABIAAAAIAAACIAAADIACAAIgBAFIAAABIAAABIACAAIAAACIABAAIAAABIABgBIAAABIABAAIAAACIACAAIAAABgAgHADIAAAFIACAAIAFAAIAAACIAFgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgDIgFABIAAgBIAAAAIAAABIAAAAIAAgBIgBAAIAAABIgDAAIAAgBIgDAAg");
	this.shape_78.setTransform(17.9,7.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B9B9B9").s().p("AgcARIAAgBIABAAIAAABgAhHAIIAAgBIABAAIAAABgAhUgBIgBgBIACABIAAAAgABPgDIABAAIAAAAIgBABgABSgGIAAgBIAAgBIACAAIAAABIACAAIAAABgAA0gQIAAAAIAAAAIAAABg");
	this.shape_79.setTransform(11.4,7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E4E4E4").s().p("AgDADIAAgBIgBAAIAAgCIAAAAIgBgCIAAAAIAAAAIgBgDIAMAAIAAABIAAABIAAACIABgBIAAACIAAABIAAACIAAACIgKAAg");
	this.shape_80.setTransform(17.3,5.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#787878").s().p("AgTAaIABAAIAAAAIgBABgAgxAZIgBgBIABAAIAAABgAAIAVIgBgBIACAAIAAABgAAggCIAAgCIABAAIABACgAgUgEIACAAIAAABIgBABgAgigDIAAgCIACABIgBABgAAygZIAAAAIABAAIAAABg");
	this.shape_81.setTransform(13.2,6.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#ECECEC").s().p("AAAAQIAAgCIAAABIAAgBIAAAAIgCAAIAAgBIgBAAIAAgBIAAgBIAAgDIACAAIgBgFIABAAIAAgGIABAAIAAgEIAAAAIAAgHIABgBIAAABIAAABIAAABIAAABIABAAIAAADIAAADIAAABIAAABIABAAIAAADIAAABIAAABIAAAJIgBAAIAAADIAAAAIAAACg");
	this.shape_82.setTransform(16.4,7.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AghAaIAAgCIgBAAIAAgBIABAAIABAAIAAABIACAAIAAACIgCAAgAAaAaIAAgBIAAgCIABAAIAAgBIAAgBIABAAIAAgCIAAgBIAAgBIgBAAIAAgCIAAgCIgBgCIAAgBIgBAAIAAgDIAAgBIAAgBIAAgCIAAABIAAgDIAAgBIAAAAIgBgBIABAAIAAABIAAABIAAABIAAAAIABAAIAAAEIAAABIAAACIACAAIgBACIAMAAIAAgBIABAAIAAABIABAAIAAgFIgBgBIAAgEIAAgBIAAgBIgCAAIAAgDIAAgBIAAgBIAAgBIgBAAIAAgCIAAgBIAAgCIAAgCIgBAAIAAgBIgFAAIgFAAIAAABIgDAAIAAABIAAADIAAADIABAAIAAADIAAABIAAABIAAABIAAAAIAAgCIgBgBIAAgCIAAAAIgBgEIAAgCIAAgBIgBAAIAAgEIgCAAIAAgBIgBgBIAAgBIABAAIABAAIABABIABABIAAABIAAABIABAAIAAABIACAAIAAgBIAGAAIAEAAIABAAIAAgBIAAgCIABAAIAAADIABAAIAAAFIAAABIACAAIAAAGIAAABIABAAIAAADIAAACIABAAIAAAGIAAACIABAAIABAEIAAADIAAAAIAAADIAAACIAAABIAAABIAAAAIAAgCIAAgBIgDAAIgGAAIgDAAIgDAAIAAABIgBAAIAAABIAAABIgCABIABABgAAdAPIAAAFIAGAAIAHAAIACAAIAAgBIgCAAIABgBIAAgDIAAgBIgCAAIAAgCIgHAAIAAABIgBAAIAAgBIgEAAgAgJAXIAAgBIAAgBIAAgBIgCAAIgBAAIAAgBIgEAAIgEAAIgEAAIAAABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAgBIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgEIAAgCIAAgBIgBAAIAAgBIAAgCIAAgBIAAgBIgBAAIAAgCIAAgCIAAgBIAAgBIABAAIAAABIAAABIAAADIABAAIAAACIAAABIAAABIAAAAIABADIABAAIAAgBIAMAAIAAgEIgBAAIAAgFIAAgCIABAAIAAACIAAACIABAAIAAAFIABACIAAAAIABADIAAADIAAABIAAAAIAAADIAAABgAgZARIABAAIAAABIAEAAIAKAAIAAgBIAAgCIgCAAIAAgCIgMAAIAAABIgBAAgAhBATIAAgBIgCgBIAAAAIgCAAIgBAAIgBAAIgDAAIAAgCIABAAIABAAIABAAIABAAIADAAIACAAIAAgBIAAgBIABAAIAAAFIAAABgAALgSIAAgBIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAAAIABgBIAAABIACAAIAAABIAAAAIAAABIAAAAIgCABIAAgCIgBAAIAAACIgBgBIAAACIgBAAIAAABgABKgUIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAAAIABgBIABAAIAAACIABAAIAAAAIACAAIAAABIAAACg");
	this.shape_83.setTransform(11.4,6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B6B6B6").s().p("AArAUIAAgBIABAAIAAACgAgUASIAAgBIABAAIAAABgABAgFIABgBIAAgHIACAAIgBgDIABAAIABACIAAADIABAAIAAACIgBAAIAAgBIgBAAIAAAGIgCAAIAAAEIgBAAgAhEAAIAAgBIACAAIAAABgAhCgFIAAAAIABAAIAAABgAAOgSIAAgCIACAAIAAACg");
	this.shape_84.setTransform(9.6,6.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A9A9A9").s().p("AAZAaIAAgBIACAAIAAABgAgUARIAAgCIABAAIAAACgAAiAFIAAgBIAAgCIABAAIAAgBIABAAIAAABIAJAAIAAgBIABAAIAAABIAAABIABAAIAAABIgBAAIAAABgAAGAFIABgBIABAAIAAABgAhKAAIAAAAIABAAIAAAAgABIgEIAAgBIABAAIAAABgAA6gJIAAgEIANAAIAAABIABAAIAAACIgLAAIAAgBIgCABIAAABgAgcgOIAAAAIABgBIAAABgAA4gSIgBgBIABAAIABABgABKgYIAAgBIABAAIAAABg");
	this.shape_85.setTransform(7.9,6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#656565").s().p("Ag5AWIABAAIAAABIgBABgAAEAUIACAAIAAgBIADABIAAAAIACAAIAAgBIAAAAIAAABIADAAIAAABIgKAAgAgfAIIAAgBIABAAIAAABgAhFAIIAAgCIABAAIAAACgAgtAAIAAAAIABAAIAAAAgAgLgNIAAgBIABAAIAAABgABFgWIAAgBIABAAIAAABg");
	this.shape_86.setTransform(8.7,5.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#525252").s().p("AhFAXIAAAAIABgBIAAABgAhOASIACAAIAAABIgCAAgAA7AEIABgDIABAAIAAADgABGgOIAAgBIgBAAIAAgCIAKAAIAAABIgCAAIAAABIgEAAIAAAAIgCAAIAAABgAAbgRIAAgBIABAAIAAABgAAigVIAAgBIABAAIAAABg");
	this.shape_87.setTransform(12.3,5.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C9C9C9").s().p("Ag7AZIAAgBIADAAIAAABgAA6gXIAAgBIACAAIgBABgAAUgXIAAgBIABAAIAAABg");
	this.shape_88.setTransform(14.2,6.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D4D4D4").s().p("ABCAVIgBAAIAAgDIAAgCIABAAIAAgHIABAAIAAgCIAAgCIABAAIAAgFIABAAIAAgEIABAAIAAABIABAAIAAAAIgBABIABAFIgCAAIAAAEIgBAAIAAAIIgBAAIABAGgAhGAOIAAgFIABAAIAAgEIABABIAAgFIABAAIAAgBIABAAIAAAAIAAAEIgBAAIAAAFIgBAAIAAACIgBAAIAAADgABGgTIAAgBIABAAIAAABg");
	this.shape_89.setTransform(9.3,5.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C7C7C7").s().p("AgHAYIAAgBIAAgCIABAAIAAgCIABAAIAAgBIgBAAIAAgCIABAAIAAgEIABAAIAAABIAAACIACAAIAAAEIAAABIgCAAIAAABIAAABIgBAAIAAABIgBAAIAAABgAhHgJIAAgBIAAAAIABABgABHgWIAAgBIABAAIgBABg");
	this.shape_90.setTransform(9,6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8D8D8D").s().p("AAXAbIAAgBIABAAIAAABgAgDAWIAAgBIABAAIAAABgAgBATIAAgBIABAAIAAABgABGANIAAgBIAAAAIgBgEIAAgDIgBAAIAAgFIAAAAIgBAAIAAgFIAAgCIgBABIAAgGIAAgBIgCAAIAAgGIAAgCIAAgBIACAAIAAgBIABAAIAAgBIAAgBIABAAIAAgBIABAAIAAABIABAAIAAABIAAAAIACAAIAAABIABAAIAAABIABAAIAAAEIAAABIABAAIAAADIgBAAIABAEIgCAAIAAAGIgBABIAAAFIAAACIgBAAIAAACIAAAHgAg4AEIAAgBIABAAIAAACgAhKgEIAAgBIAAgCIACABIAAACgAgNgWIAAgBIAAAAIAAABgAAMgZIAAgBIACAAIAAACg");
	this.shape_91.setTransform(8.8,6.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#212121").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAABg");
	this.shape_92.setTransform(21.4,8.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9B9B9B").s().p("AgVACIAAgBIABgBIAAACgAAVAAIAAgBIABAAIAAABg");
	this.shape_93.setTransform(18.6,8.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C2C2C2").s().p("ABHAXIAAgBIAEAAIAAABgAhKAXIAAgBIACAAIAAABgAgrgNIAAgBIAFAAIAAABgAg5gVIAAgBIABAAIAAABg");
	this.shape_94.setTransform(13.2,6.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8A8A8A").s().p("ABcAOIgEAAIABgBIgBgDIAGAAIAAABIABAAIABAEIgEAAgAAmANIAAgBIgEAAIAAgCIAAgBIAAACIAMgBIgBACIAAABgAg4gKIAAgBIAAAAIABABgAhfgOIAAAAIABAAIAAAAg");
	this.shape_95.setTransform(11.1,6.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3A3A3A").s().p("ABrAWIAAgCIABAAIAAACIgBABgABjASIAAgBIABAAIAAABgAAFAOIgBAAIAAgBIAEAAIAAABgAAJANIAAgBIACAAIAAABgAAdAFIgBgBIABAAIAAABgAgYAEIABgBIABAAIgBABgAhrABIAAgBIABAAIAAABgAhBgVIAAgBIABAAIAAABg");
	this.shape_96.setTransform(11.1,6.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#919191").s().p("ABiAIIAAgBIABAAIAAABgABQAHIAAgBIABAAIAAABgAAAAFIAAgBIAAAAIAAABgABeADIAAgBIABAAIAAABgAhigGIAAgBIABAAIAAABg");
	this.shape_97.setTransform(11.4,8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6D6D6D").s().p("AA0AXIAAgCIABAAIAAACgAAlgBIAAgDIABAAIAAADgAAWgPIAAgBIACAAIAAABgAg0gVIAAgBIABAAIAAABg");
	this.shape_98.setTransform(15.7,6.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3F3F3F").s().p("AAJAEIAAgBIACAAIAAABgAgtABIAAgBIABAAIABABgAAmgDIAEAAIAAABIABAAIAAgBIADAAIAAACIgIAAg");
	this.shape_99.setTransform(15.8,7.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#626262").s().p("ABCAQIABgCIABAAIAAACgABHAKIABgBIABAAIAAABgABNgDIAAAAIgFgBIAAgBIAIAAIAAABIgCABIAAAAgAhQgOIABgBIABAAIAAABg");
	this.shape_100.setTransform(12.4,7.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3C3C3C").s().p("ABPAbIAAgCIABAAIAAACgABpAMIAAgBIABAAIAAABgAhpAFIAAgBIABgBIAAACgAgBACIAAgCIABAAIAAACgAAngZIABAAIAAABIgBAAg");
	this.shape_101.setTransform(11.5,6.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CCCCCC").s().p("ABiAHIAAgCIgBAAIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIAAgFIABAAIAAADIABAAIAAgEIACAAIAAADIABAAIAAgCIABAAIAAgBIABAAIAAABIABAAIAAACIAAADIAAAAIAAAAIABAAIAAAFIAAACgAAKABIAAgBIABAAIAAABgAhjgEIAAgBIABAAIAAACg");
	this.shape_102.setTransform(11.8,8.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#ABABAB").s().p("AgMAXIAAgBIABAAIAAABgAA8AQIAAgHIAAgDIgBAAIAAgGIABAAIAAAAIABAAIAAAAIAEAAIgBAAIADAAIAAAAIABAAIAAADIAAADIABAAIAAAEIgBAAIAAgBIgBAAIAAABIgBAAIAAACIgBAAIAAgDIgCAAIAAAEIgBAAIAAgDIgBAAIAAAGgAgOAEIABgCIABAAIAAACgAARgDIAAgBIABAAIAAABgAhEgVIAAgBIACAAIgBABg");
	this.shape_103.setTransform(14.7,6.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#828282").s().p("AA6AbIAAgBIABAAIAAABgABcAKIAAgBIACAAIAAABgAAAgBIABAAIAAABIgBAAgAhdgDIAAgBIABAAIAAABgAgigIIAAgBIABAAIAAABgAg6gLIAAgCIABAAIAAACgAA5gXIAAAAIABAAIABAAgAA3gZIAAgBIABAAIAAACg");
	this.shape_104.setTransform(12.6,5.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#505050").s().p("ABSANIAAgCIABAAIABACgAgVAKIABAAIAAACIgBAAgAgxALIAAAAIACAAIAAAAgAA7AJIAAgBIABAAIAAABgAhBAGIAAgBIABAAIAAABgAgagDIAAgBIACAAIAAACgAhTgHIAAgCIABAAIAAACgABNgLIAAgCIABAAIAAACgAhJgMIAAgBIABAAIAAABg");
	this.shape_105.setTransform(12.4,6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#707070").s().p("AAoAJIAAgFIADAAIAAgBIABAAIAAABIAJAAIAAACIgMAAIAAADgAA2AEIAAgDIABAAIAAADgAhWgEIAAgBIACAAIgBABgABWgGIAAgCIABAAIAAACg");
	this.shape_106.setTransform(13,7.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#717171").s().p("AhQATIAAgCIABABIAAABgAhpAGIAAgBIABAAIAAABgAAqAAIAAgDIACAAIAAADgABpgGIAAgCIABAAIAAACgAAagGIAAgDIABAAIAAADgABRgLIAAgBIABAAIAAABgAhFgMIAAgBIABAAIAAABgAg9gRIAAgBIABAAIAAABg");
	this.shape_107.setTransform(11,6.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#484848").s().p("AhjAOIAAgBIACAAIAAABgABiADIAAgDIABAAIAAADgAhjADIAAgCIABAAIAAACgAgDABIAAgBIABAAIAAABgAhigIIABAAIAAABIgBABgAg+gIIAAgCIABAAIAAACgAA/gJIAAgBIACAAIAAABgAgvgKIAAgBIABAAIAAABgAAugMIAAgBIACAAIgBABg");
	this.shape_108.setTransform(11.6,5.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#424242").s().p("AA9AbIAAgBIACAAIAAABgAAyASIAAgBIACAAIAAABgAhKAGIAAgBIABAAIAAABgAhWAGIAAgBIABAAIAAABgAhhgCIAAgBIABAAIAAACgABhgEIAAgCIABAAIAAACgAhagHIAAgBIAAAAIAAABgAAVgYIAAgCIABABIAAABg");
	this.shape_109.setTransform(10.5,6.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#969696").s().p("ABGAKIAAgCIAAAAIgBAAIgBgEIACAAIAAABIADABIAAgCIABAAIAAACIADgBIgBgCIAAgBIABAAIABAIgAgoAHIAAgBIABAAIAAABgAgrAHIAAgBIACAAIAAABgAgCgEIAAgBIABAAIAAABgAhNgIIAAgBIABAAIAAABg");
	this.shape_110.setTransform(12.6,5.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6C6C6C").s().p("AAhAVIAAgBIACAAIAAABgAgJATIAAgBIABAAIAAABgAAzAAIAAgCIABAAIAAACgAgqgCIAAgBIABAAIAAABgAAngNIAAgEIACAAIAAABIABAAIAAgBIACAAIAAAAIADAAIAAgBIACAAIAAADIgIAAIgBACgAgzgTIAAgBIABAAIAAABg");
	this.shape_111.setTransform(15.2,6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E8E8E8").s().p("AgdAGIAAgBIAAgBIgBAAIAAgCIAAgBIAAgBIAAAAIgBAAIAAgDIAAgBIABAAIAAABIALAAIAAgCIABAAIAAACIAAABIAAABIAAABIABAAIAAACIAAAAIAAADIgLAAIABABgAAcAFIAAgBIgDAAIAAABIgBAAIAAgBIAAgCIAAgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAgCIAIAAIAAACIABAAIAAADIAAABIAAACIAAABIgDAAIAAABg");
	this.shape_112.setTransform(17.1,5.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B0B0B0").s().p("AgeAGIAAgBIABAAIAAABgAAegCIAAgDIABAAIAAADg");
	this.shape_113.setTransform(17.1,5.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#767676").s().p("AgjAUIAAgBIAAAAIAAABgAANAPIAAgBIABAAIAAABgAgDAFIAAgCIAAAAIABACgAA4gSIAAgBIABAAIAAABgAg4gTIACAAIAAABIgCAAg");
	this.shape_114.setTransform(14.5,6.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#646464").s().p("ABbAVIAAgBIACAAIAAACgAhAAOIAAgBIACAAIgBABgAhcANIAAgBIABAAIAAABgAhTAJIAAgBIABAAIAAABgAgIACIgBAAIAAgBIAMAAIAAACIgLABgABYgKIABAAIgCAAIAAgBIgBgBIAAACIgEAAIAAgCIgBAAIgBAAIAAgJIABAAIAAADIABAAIAAgDIABAAIAAACIACAAIABgBIABAAIAAABIABAAIAAAEIACAAIgBAFg");
	this.shape_115.setTransform(12.4,6.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#363636").s().p("AgUAaIAAgBIABAAIAAABgAAaARIAAgBIACAAIAAAAIAAABgAg4AJIAAgCIAAAAIABACgAhlAHIABgBIABAAIAAABgABkgVIAAgBIACAAIAAABgAA2gYIAAgBIABAAIAAABg");
	this.shape_116.setTransform(10.3,6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B8B8B8").s().p("AALAaIgBAAIACgBIAAABgAhMAZIAAgBIABAAIAAABgAg2AYIAAgBIACAAIAAABgAAPAWIAEAAIAAABIgEAAgAgxAAIAAgIIABAAIAAABIAAADIABAAIAAABIgBAAIAAADgAg8gDIgBgBIACAAIAAABgABMgYIAAgBIABAAIAAABg");
	this.shape_117.setTransform(13,5.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6B6B6B").s().p("AAAAcIAAgCIABAAIAAACgAA7AWIAAgBIABAAIAAABgAghAWIAAgBIgDAAIgEgBIAAgBIANgBIAAAEgAgsARIAAgBIACAAIAAABgAAMALIAAgDIgBABIAAgDIABAAIAAABIALAAIAAABIABAAIAAgBIAAAAIABAEgAAggLIAAgEIABAAIAAAEgAg7gNIABAAIAAABIgBAAgAA0gZIAAgCIACAAIAAACg");
	this.shape_118.setTransform(15.7,5.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#545454").s().p("ACjAoIAAgBIABAAIAAABgAgNAMIAAgBIABAAIAAABgAAKADIAAgCIABAAIAAACgAgygLIAAgDIABAAIAAADgAijgaIAAgBIABAAIAAABgAhsgbIAAgCIABAAIAAACgAhigeIAAgBIAAAAIAAABgAg1gmIABgBIABAAIAAABg");
	this.shape_119.setTransform(20.6,7.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#888888").s().p("ACNAjIAAgBIACAAIgBABgAgBgIIAAgCIgDAAIABABIgEABIAAAAIgBAAIAAAAIgBAAIAAgEIgBAAIAAgIIABAAIAAACIADAAIAAgCIABABIAAABIADAAIgBAAIABAAIABAEIAAACIABAAIAAAEgAhcgcIAAgCIACAAIAAACgAiNghIgBgBIACAAIAAABg");
	this.shape_120.setTransform(21.7,7.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D6D6D6").s().p("ACYAkIgBgCIABABIAAABgAgKALIABgBIAAAAIAAABgAiWgTIAAgCIgCAAIAAgCIAKAAIAEAAIAAABIAAABIgEAAIAAABIgCAAIAAgBIgEAAIgBACgAgTgeIAAgBIABAAIAAABgAgTgiIAAgBIABAAIAAABg");
	this.shape_121.setTransform(20.8,7.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#2C2C2C").s().p("ACiAdIAAgBIABAAIAAABgAiigaIAAgBIABAAIAAgBIACAAIAAAAIAAACg");
	this.shape_122.setTransform(19.9,8.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#595959").s().p("ACuAlIAAgBIABAAIAAABgAiaACIAAgBIABAAIAAABgAgvgIIAAgBIABAAIAAABgAiugRIAAgBIACAAIAAACgAiigRIAAgBIABAAIAAABgAhqgaIAAgBIABAAIAAABgAARgjIAAgBIABAAIAAABg");
	this.shape_123.setTransform(18.8,7.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#292929").s().p("ACuAeIgBAAIABAAIABAAgAiugcIAAgBIABAAIAAABg");
	this.shape_124.setTransform(18.9,8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A4A4A4").s().p("ACcAkIABAAIAAABIgBAAgAhCADIAAgCIABAAIAAACgAicgGIAAgBIABAAIAAABgAhlgfIAAgBIABAAIAAABgAhNgjIAAgBIACAAIAAABg");
	this.shape_125.setTransform(20.7,7.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#040404").s().p("ACcAcIgCAAIABgBIABAAIAAAAIAAABgAh9ADIAAgBIABAAIAAgBIABAAIAAABIAAABgAiaAAIgBAAIAAAAIABAAIACAAIAAAAgAhugVIAAgBIAAgCIABgBIAAgCIABAAIAAADIAAABIAAACg");
	this.shape_126.setTransform(20.9,8.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#343434").s().p("ACQAkIAAgBIAAAAIAAABgAAAAAIAAAAIAAAAIAAAAgAhagDIAAgCIABgBIAAADgAiPgiIAAgBIABAAIAAABg");
	this.shape_127.setTransform(22,7.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#4B4B4B").s().p("ACZAeIAAgBIABAAIAAABgAiZADIABgCIABAAIAAACgAiFAAIgBAAIAAAAIgBAAIgBAAIgGAAIAAgCIAMAAIAAACIgDAAgAh3gJIABAAIAAABIgBAAgAgMgcIAAgBIABAAIAAABg");
	this.shape_128.setTransform(20.4,7.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D5D5D5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_129.setTransform(35.7,10.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8C8C8C").s().p("ACvAZIAAgCIABAAIAAACgAiVgMIABAAIAAABIgBABgAiugRIgBAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIABAAIAAgBIACAAIABAAIAAgBIACAAIABAAIAAgCIACAAIgBACIABAAIAAADIAAACIABAAIAAABIgLAAgAh8gWIABAAIAAABIgBAAg");
	this.shape_130.setTransform(18,8.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#353535").s().p("AC2AfIAAgBIABAAIAAABgAhSASIAAgBIABAAIAAACgACqAEIAAgBIABAAIAAABgAASACIAAgCIABAAIAAACgAi1gCIgBgBIACAAIgBABgAhEgTIgBAAIAAgBIAFAAIAAABIACgBIAAABIgGABgAhvgXIAAgBIABAAIAAABgAgEgdIAAgBIABAAIAAABg");
	this.shape_131.setTransform(18.6,6.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#414141").s().p("AhfAXIAAgBIABAAIAAABgAg1ATIAAgBIADAAIAAABgAigAPIAAgBIABAAIAAABgAgCAPIAAgBIAAgCIABAAIAAADgAh6AKIAAgBIABAAIAAABgACVAGIAAgBIAMAAIAAABgAgqgGIABgBIABAAIAAABgAiBgPIAAgBIACAAIAAABgAgdgUIAAgCIACAAIAAACg");
	this.shape_132.setTransform(20.9,6.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3B3B3B").s().p("ACXAhIgBgCIABAAIAAACgAiWALIAAgBIABAAIAAABgAgHgHIAAgBIACAAIAAABgAiOgRIAAgBIABAAIAAABgAATgeIAAgCIABABIAAABg");
	this.shape_133.setTransform(18.9,6.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#2F2F2F").s().p("ACGAbIAAgCIABABIAAABgAiGgXIAAgBIACAAIAAABgAhhgYIAAgCIABAAIAAACg");
	this.shape_134.setTransform(20.4,6.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#050505").s().p("ACnAbIAAAAIgBgBIABAAIABAAIAAABgAingFIAAgBIAAAAIABABgAgtgIIAAgCIAAgBIAAgBIAAgBIACAAIgBACIAAABIAAACgAiIgOIgBAAIgCAAIAAAAIAAgBIACAAIABAAIABAAIAAABgAibgRIAAgBIABAAIAAABgAhLgSIAAgBIgDAAIgBAAIgBAAIgDAAIgEAAIABgBIADAAIAFAAIACAAIABgBIAAAAIAAgDIAAgBIABAAIAAgBIABAAIAAABIAAACIgBgBIAAACIAAABIAAACIAAABgAh8gXIgBAAIAAgBIABAAIABAAIAAABg");
	this.shape_135.setTransform(17.2,6.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#5A5A5A").s().p("ACvAhIAAgBIABAAIAAABgAhKAFIAAgCIABAAIAAACgAhmAFIAAgEIABgBIAAAFgAh3ACIgBgBIACAAIAAABgAiugFIAAgBIABAAIAAABgAivgJIAAgBIABAAIAAABgAhLgfIAAgBIABAAIAAABg");
	this.shape_136.setTransform(17.8,7.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#AAAAAA").s().p("ABeALIAAgBIABAAIAAABgAhegIIAAgCIABAAIAAACg");
	this.shape_137.setTransform(25.4,9.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#DDDDDD").s().p("ABxAfIAAgBIABAAIAAABgAgUANIgBAAIAAgCIAAAAIABAAIAAAAIABAAIAAACgAhxgcIAAgCIABAAIAAACg");
	this.shape_138.setTransform(23.6,7.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#BABABA").s().p("ACfAgIAAgCIABAAIAAACgAiggBIAAgBIACAAIAAABgAiIgFIAAgCIABAAIAAACgAhegMIAAgCIABAAIAAACgAgLgUIABAAIAAABIgBAAgAhEgdIAAAAIAAABIgBAAgAhfgeIAAgBIABAAIAAABg");
	this.shape_139.setTransform(19.2,7.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#474747").s().p("AChAgIAAAAIABAAIAAAAgAAGAOIAAgBIABAAIAAABgAihAJIAAgBIABAAIAAABgAhlAIIAAgBIABgBIAAgBIgBAAIAAACIgBgBIAAgCIABAAIAAgBIAMAAIAAACIACAAIAAABIgDAAIAAgBIgBAAIAAABIgCAAIAAAAIgCgBIAAACIgCAAIAAABgAgpAFIAAgBIgDABIAAAAIgBAAIAAAAIgBAAIAAgDIAEAAIAAABIABAAIAAgBIAHAAIAAACIACAAIAAABIgDAAIAAgBIgDAAIAAACgAADgHIAAgBIAAAAIAAABgAiGgLIAAgBIABAAIAAABgAhbgPIgBgCIABAAIAAACgAgMgYIAAgBIAAgBIABAAIAAACgAhYgeIAAgBIABAAIAAABg");
	this.shape_140.setTransform(19.1,7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#303030").s().p("ACmAiIAAgBIABAAIAAABgAAfAUIgBAAIABAAIAAAAgAimgNIAAgCIABAAIAAACgAADggIAAgBIABAAIAAABg");
	this.shape_141.setTransform(18,6.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#7F7F7F").s().p("ACeAbIAAgBIACAAIAAABgAAIAQIAAgBIACAAIAAABgAifgIIAAgBIABAAIAAABgAhggJIAAgCIABAAIAAACgAgrgXIAAgCIADAAIAFAAIAAgBIAFAAIAAABIAAACg");
	this.shape_142.setTransform(18.2,7.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#CDCDCD").s().p("AB2AhIAAgBIABAAIAAABgAhxAXIACAAIAAABIgCAAgAh2gaIAAgBIABAAIAAABgAgTgcIAAAAIAAAAIAAABgAgpgeIAAgBIABgBIAAACg");
	this.shape_143.setTransform(22.4,6.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#737373").s().p("AChAdIAAgBIACAAIgBABgACdAaIACAAIAAABIgCAAgAgwAOIAAgBIABAAIAAABgAhoAMIAAgBIABAAIAAABgAhvAIIABAAIAAAAIgBABgAiYAEIAAgBIABAAIAAABgAgBgDIgBgCIACAAIAAACgAhogSIAAgCIAAAAIABACgAihgTIAAgBIABAAIAAABgAAcgaIgBgCIABAAIAAABIAAABg");
	this.shape_144.setTransform(18.6,7.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4D4D4D").s().p("ACcAZIAAAAIACgBIAAABgAhHAPIAAgBIABAAIAAABgAhsAKIAAgBIABABIAAAAgAidgLIAAgBIABAAIAAABgAiDgTIABAAIAAABIgBAAgAhygXIAAgBIACAAIAAABg");
	this.shape_145.setTransform(18.4,7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#848484").s().p("AA0AVIBqgCIAAACIhpABgAh2ALIAAgEIAAgDIgBABIAAgCIgBgDIAAAAIgBAAIAAgBIABAAIABgHIAAAAIAAgDIABAAIABgDIABAAIgBgEIACAAIABAAIAAADIAAABIABgBIAAADIAAAAIgBAFIgBgBIAAAHIgBAAIAAABIAAADIgBAAIAAABIAAAHgAiEAIIAAgBIABAAIAAABgAidAEIAAgBIABAAIAAABgAgOgMIAAgBIABAAIAAABgAAZgNIAAAAIACgBIAAABgAiCgNIgBAAIAAgBIABAAIAAABgAhvgQIAAAAIAFgBIAAABgAhfgUIAAgBIABAAIAAABg");
	this.shape_146.setTransform(16.7,6.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#676767").s().p("AAwAWIBqgCIAAgBIhqACIAAgFIBsgCIAAADIAAAAIAAADIAAAAIAAABIhsACgAgeAAIAAAAIACAAIAAAAgAicgJIAAgBIABAAIAAABgAiAgVIAAAAIACAAIAAAAg");
	this.shape_147.setTransform(17.2,6.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#494949").s().p("ACaAWIAAgDIhsACIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIBtgCIAAABIABAAIAAAGgAgNAWIAAgBIABAAIAAABgAhXAWIAAgBIACAAIAAABgAg4ANIgBAAIAAgBIABAAIAAgBIAMgBIAAACIABAAIAAACIgNABgAiaALIAAgBIABAAIAAABgAgdAHIALgBIAAgBIAAgCIABABIAAAFIgBAAIAAgBIAAAAIAAABIgMAAgAhwAJIAAAAIAMAAIAAAAgAgCAJIAAgCIALAAIAAABIgKAAIAAABgAh/AHIABAAIAAABIgBAAgAiQADIAAgCIABAAIAAACgAhkAAIAAAAIABAAIAAAAgAAGgEIAAgBIABAAIAAABgAAAgVIADgBIAAACIgDABg");
	this.shape_148.setTransform(17.3,6.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#5F5F5F").s().p("AAiAPIgCAAIAAABIAAAAIgBgDIgBAAIAAgEIABAAIAAABIADAAIAAgBIBqgDIABAAIAAAGIgBAAIAAABIAAABIhqACgAhjAKIgBgBIACAAIAAABgAiMgNIAAAAIABAAIAAAAgAhqgOIgBgBIACAAIAAABg");
	this.shape_149.setTransform(18.7,5.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#555555").s().p("ACkAaIABgBIABAAIAAABgAhDARIAAgBIACAAIgBABgAilgEIAAgBIABAAIAAABgAifgGIAAgBIABAAIAAABgAiQgIIAAgDIACAAIAAADgAh4gTIAAgCIABABIAAABgAg/gXIAAgCIACAAIgBACg");
	this.shape_150.setTransform(17.2,6.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#878787").s().p("ACjAZIAAgBIgCAAIAAgBIgBAAIAAAAIgBgBIABAAIAAgBIgBAAIAAABIgBAAIAAgBIgBAAIgBAAIAAgCIgBAAIAAgBIgBAAIgBAAIAAgBIgBAAIAAgBIgCAAIgBAAIAAgBIgBAAIAAAAIgBAAIgBAAIAAgCIgBAAIAAgBIgBAAIgBAAIAAgBIgBAAIAAgBIgBAAIgCAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBABIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgBAAIAAgCIADABIAAABIACAAIAAgBIABAAIAAABIABAAIAAABIADgBIAAACIAEAAIAAAAIACAAIAAABIAEAAIAAABIADAAIAAACIAEgBIAAABIADAAIAAACIADAAIAAANgAgLADIAAgBIABAAIAAABgAijgKIAAgBIABAAIAAABgAgJgVIAAgDIABAAIAAADg");
	this.shape_151.setTransform(20.4,8.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3D3D3D").s().p("AChAVIABgBIAAACIgBAAgAhBASIAAgCIABAAIAAACgAh/AFIAAgBIACAAIAAABgAhVAEIAAgEIAMAAIAAAAIAAAAIABAAIAAADIgMAAIAAABgAihAAIAAAAIADAAIAAAAgAghgDIAAAAIABgBIAAACgAgsgCIgBgDIACAAIAAADgAgIgTIABgCIABAAIAAACg");
	this.shape_152.setTransform(17.3,7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#0E0E0E").s().p("AClAUIgBAAIAAgBIgBAAIAAgBIABAAIABAAIAAABIABAAIABABgAiVAEIgBAAIAAgBIAAgCIAAgBIgBAAIgBAAIAAAAIAAAAIgCAAIgBAAIgCAAIAAgBIgBAAIgBAAIgBAAIAAgBIgBAAIgBAAIAAgBIgBAAIgCAAIAAgBIgBAAIAAgBIADAAIAAABIACAAIAAABIABAAIACAAIAAABIACAAIABAAIADAAIgBgDIgBAAIAAgBIAAgBIAAgDIgBAAIAAgDIAAgBIgBAAIgBAAIgBAAIAAABIgCAAIgBAAIAAgBIABAAIABAAIgBgBIACAAIABAAIABAAIAAgCIAAgCIABAAIAAADIAAABIABAAIAAADIAAABIABAAIAAACIAAACIAAABIABgBIAAABIAAACIAAABIACAAIAAACIgBABIACAAIAAAAIAAABIAAACIABAAIAAABIABAAIAAAAIgBAAIgBABg");
	this.shape_153.setTransform(17.1,7.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#444444").s().p("ACWAXIAAgBIACAAIAAABgAgSAUIAAAAIABAAIAAAAgAiXAIIAAgCIABAAIAAACgAAAgEIAAAAIAAACIAAAAgAAWgEIAAgDIACABIAAADgAgrgJIAAgBIAAAAIABABgAgrgKIAAgBIABAAIAAABgAAJgMIAAgCIABAAIABAAIAAABIgBAAIAAABgAAfgUIAAgCIABAAIAAACg");
	this.shape_154.setTransform(18.2,6.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#565656").s().p("ACXATIAAgBIACAAIAAABgAAkASIAAgBIABAAIAAABgAASAGIAAgCIAAAAIABACgAhcgDIAAgCIACAAIgBABIAAABgAgLgEIAAgDIACAAIgBADgAiXgRIAAgBIABAAIAAABg");
	this.shape_155.setTransform(17.8,7.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#1A1A1A").s().p("AB7AVIAAgBIAAgBIABAAIAAABIAAACgABgAEIAAgCIAAgBIAAAAIAAABIAAACgAh3gEIgBgEIgBABIAAgEIAAgBIAAgCIgCAAIAAgDIABgCIgCAAIAAgBIACgBIABAAIAAADIAAABIAAABIABAAIAAACIANAAIAAABIgMAAIAAABIgBAAIAAABIABAAIAAACIAAABIAEABIAAABIAAABIgBAAIAAgBIgDAAIAAABIABABg");
	this.shape_156.setTransform(23.6,8.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#666666").s().p("AC0AkIAAgNIgCAAIAAgBIgDAAIAAgBIgFAAIAAgBIgCAAIAAgBIgEAAIAAgBIgDAAIAAgBIgDAAIAAgCIgDABIAAgBIgBAAIAAgBIgBAAIgBABIgCAAIAAgBIgCgBIAAAAIgBAAIAAgBIgCAAIAAABIgBAAIgBAAIAAgCIgCAAIABgBIABgBIgBgFIADAAIAAABIABAAIAAABIAEAAIAAABIADAAIAAABIAFAAIAAABIACAAIAAABIAEAAIAAABIADAAIAAABIADAAIAAABIADAAIAAABIAEAAIAAABIABAAIAAACIABgBIAAgBIABAAIAAAFIAAABIACAAIAAAPgAi1gFIABgBIABAAIAAABgAgFgUIABgCIAAAAIABACgAg/gZIAAgCIABAAIAAACgAgWgjIABAAIAAABIgCAAg");
	this.shape_157.setTransform(18.8,7.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#454545").s().p("ACHAbIAAgBIACAAIAAABgACTANIgBAAIAAgBIgFAAIAAgBIgCAAIAAgBIgEAAIAAgBIgDAAIAAgBIgDAAIAAgBIgCAAIAAgBIgFAAIAAgBIgDAAIAAgBIgFAAIAAgBIgBAAIAAgBIgCAAIABAFIgBABIgBgIIABAAIAAgDIACAAIAAABIAEAAIAAABIAEAAIAAABIADAAIAAAAIACAAIAAAAIAEAAIAAACIADgBIAAABIAEABIAAABIADAAIAAAAIACAAIAAACIADAAIAAABIAEAAIAAAGIgBAAIAAABIgBABgAhMAAIAAAAIABAAIAAAAgACGgGIAAgDIABAAIAAADgAhNgIIAAgBIACAAIAAABgAiTgUIAAgBIABAAIAAABgAhdgWIAAgCIABAAIAAgCIABABIAAACIgBAAIAAABg");
	this.shape_158.setTransform(21.9,7.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#404040").s().p("ACQAbIgBgBIABAAIAAABgAg1ATIABAAIAAABIgBAAgACsAPIAAgBIgDAAIAAgBIgDAAIAAgBIgCAAIAAgCIgDABIAAgBIgFAAIAAgCIgCAAIAAAAIgFAAIABgCIgEAAIAAAAIgCAAIAAgCIgDAAIAAgBIgDAAIAAgBIgCAAIAAgCIgBAAIAAgEIABAAIAAAEIADAAIgBAAIAFAAIAAABIACAAIAAABIADAAIAAABIADAAIAAABIAEAAIAAABIADAAIAAABIADAAIAAABIAAAAIAAgBIACAAIgBABIAFAAIAAABIgBAAIAAABIAEAAIABACIADAAIAAAEgAioANIAAgBIABAAIAAABgAhOAGIAAgCIAMAAIAAgCIAAgCIABAAIAAAGgAABAAIAAAAIACAAIgBAAgAirgNIABgBIABAAIAAABgAitgPIAAAAIABgBIAAACgAhVgPIAAgCIABAAIAAACgAgpgWIAAgCIABgBIAAADgAgBgZIAAgBIADAAIAAABg");
	this.shape_159.setTransform(19.4,6.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#5C5C5C").s().p("AiMAPIABAAIAAABIgBAAgACLAJIgBgBIgEAAIAAgBIABAAIAAgBIgFAAIABgBIgCAAIAAABIAAAAIAAgBIgDAAIAAgCIgDAAIAAgBIgEAAIAAgBIgDAAIAAgBIgDAAIAAAAIgCAAIAAAAIgFAAIABgBIgDAAIAAgFIgBAAIAAgJIABAAIAAAHIABAAIAAACIAFgBIAAABIADAAIAAACIADAAIAAAAIAEAAIAAACIACAAIAAABIADAAIAAABIACAAIAAgIIABAAIAAAIIgBAAIAAACIABAAIABABIANAAIAAAGgAiKACIABgBIAMAAIAAABgAiNgGIABAAIAAAAIgBABg");
	this.shape_160.setTransform(22.6,6.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#929292").s().p("ABXAgIAAgBIABAAIAAABgAhpAUIAAgCIABAAIAAACgAgyASIAAgCIABAAIAAACgABnAEIAAgBIgDAAIAAgBIgCAAIAAgBIgDAAIAAgBIgEAAIAAAAIgDAAIAAAAIgFAAIAAgBIgBAAIAAgIIgBAAIgBgWIABAAIABAHIAAAHIABABIAAgCIABAAIAAADIAEgBIAAABIACABIAAABIADAAIAAABIAFAAIAAABIACAAIAAABIADAAIAAABIABAAIAAgBIACAAIgBgFIABAAIAAANIgBAAIABAGgAhQAEIAAgBIAAAAIABABgAgsgWIAAgBIAAAAIABABg");
	this.shape_161.setTransform(24.8,6.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C0C0C0").s().p("AhFAbIAAgBIACAAIAAABgAiYAXIAAgBIABAAIAAABgACWgGIAAgBIgCAAIAAgBIgDAAIAAgBIgEAAIAAgBIgDAAIAAgBIgDAAIAAgBIgDAAIAAgCIgBAAIAAABIgBAAIAAgIIABAAIAAACIABAAIAAABIABAAIAAAAIAGABIAAABIADAAIAAAAIABAAIAAACIAGAAIAAABIADAAIAAACIABAEIgCAAIAAABgAg/gPIABAAIAAABIgBAAgAgMgXIAAAAIABAAIAAAAgAgQgZIAAgBIABAAIAAABg");
	this.shape_162.setTransform(20,5.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EDEDED").s().p("Ah4AUIAAgBIgBAAIgBAAIAAgBIgBAAIAAgCIABAAIAAgBIgBAAIAAgEIABAAIAAgDIABAAIAAgEIABAAIAAgFIAAAAIAAgBIACAAIAAABIAAABIgBAAIAAAAIABACIABAAIAAACIAAABIAAABIAAACIABAAIAAABIgBAAIAAAEIgBAAIAAACIABAAIAAABIgBAAIAAACIgBAAIAAACgAhyAAIAAgBIgCAAIAAgBIAAgBIgBgBIAAAAIAAgCIgBgCIAAgCIACAAIAAABIAFAAIAAgBIABAAIAAABIAGAAIAAABIAAABIAAABIAAACIAAACIABAAIAAABIgKAAIAAgBIgBAAIABACgAAQgFIgCAAIAAABIAAAAIAAgBIAAgCIAAgCIAAgCIgBAAIAAgDIgBgCIAAgBIBwgCIAAANIhsACg");
	this.shape_163.setTransform(20.2,6.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#CECECE").s().p("ACaAcIAAgBIABAAIAAABgAgoAFIAAgBIABAAIAAACgAh4AAIAAgBIABAAIAAABgAiZgBIgBAAIAAgBIABAAIAAgDIgBAAIAAgBIABAAIAAgBIABAAIAAgEIABAAIABAAIAAACIAAABIAAABIAAABIABAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABgAAIgXIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAABIBtgCIAAABIhtABIAAACg");
	this.shape_164.setTransform(20.9,8.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#747474").s().p("AgLAQIAAgCIACABIAAABgACcAPIAAgBIAAgBIACAAIAAABIABAAIAAAAIgBABgAgmAOIAAgBIABgBIAAACgAiegGIAAgCIACABIAAABgACXgIIgBgGIABAAIAAAGgAhogPIACAAIAAACIgCABg");
	this.shape_165.setTransform(17.7,7.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#DCDCDC").s().p("AACACIAAgCIBwgCIAAADIhwACgAhxgBIAAgBIABAAIAAABg");
	this.shape_166.setTransform(21.2,4.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#9A9A9A").s().p("AiGAZIAAgBIABAAIAAABgAAZAYIAAgBIABAAIAAABgAgvAKIAAgBIgCAAIAAgDIAAgBIACAAIAKAAIAAgBIACAAIgBAFIAAABgAgzAKIAAgBIABAAIAAABgAAHgIIAAgCIgBAAIAAACIgEAAIgBgCIABgCIAIAAIAAADIgBAAIABABgAhDgOIAAgBIABAAIAAABgAAZgUIgDAAIAAgDIAGAAIAAABIBrgCIAAACIgBAAIAAACIhpABIAAgBIgEAAIABABIgBABg");
	this.shape_167.setTransform(19.1,5.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#838383").s().p("AiKAaIAAgBIABAAIABABgAg3ATIgCAAIAAgEIAAgCIgBAAIAAgEIAAgDIgCAAIABgBIAAgCIABAAIAAgBIABAAIAAgEIABAAIAAgGIABAAIAAgFIABAAIAAgCIABABIAAABIABAAIAAAEIAAABIABAAIAAACIgCAAIABAGIgCAAIABAJIAAABIgBAAIgBACIABAHgAglgNIAAAAIABAAIAAAAgAg9gSIAAgBIABAAIAAABgACKgVIAAgCIhsACIAAgCIBsgCIABAAIAAAGIgBAAg");
	this.shape_168.setTransform(18.8,5.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#BDBDBD").s().p("AgtAfIAAgBIADAAIAAABgAirANIAAgCIACAAIAAACgAAQgNIAAgBIABAAIAAABgACqgdIAAgBIABAAIAAABg");
	this.shape_169.setTransform(17.2,5.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#090909").s().p("ACkArIgBAAIAAgBIgBAAIAAgBIABAAIABAAIAAABIABAAIAAABgAADAdIAAgBIgBAAIAAgCIABAAIACAAIAAgBIABAAIAAgBIAAAAIABABIAAABIgBAAIAAABIgCAAIAAACgAAVAYIgBAAIAAgBIABAAIACAAIAAABgAiSgBIAAgBIAAgBIACAAIAAAAIgBABIAAABgAiigDIAAgDIAAgBIgBAAIAAgBIAAgBIgBAAIAAgBIABAAIABAAIAAABIAAABIABAAIAAABIABAAIABAAIABAAIAAABIgCAAIgBAAIAAADgAhZgUIAAgBIAAgBIABAAIAAgCIACABIAAABIgBAAIAAABIgBAAIAAABgAgigXIAAgCIAAgBIABAAIgBgBIACAAIAAgBIABAAIAAABIABAAIAAABIgBAAIgBAAIAAABIgBAAIAAACgACZgpIAAAAIAAgBIAAgBIABAAIAAACg");
	this.shape_170.setTransform(18.9,6.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#020202").s().p("AAiAjIAAgBIABAAIAAABgAiFAVIABgBIAAgCIAAgBIAAAAIABAAIAAACIAAACgAhSABIAAgBIAAAAIAAAAIAAgBIAAgBIABAAIAAACIABABgAikAAIAAgBIABAAIAAABgAiKgCIAAgBIABAAIAAABgACkghIAAgBIABAAIAAABg");
	this.shape_171.setTransform(18,5.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#909090").s().p("AhCAjIAAgBIgBAAIgBAAIAAgBIgBAAIAAgBIgCAAIABgBIgCAAIAAgEIAAAAIAAgDIgBAAIAAgDIAAgCIgBAAIAAgFIAAgCIgBAAIAAgCIAAgDIgBgBIAAAAIAAgDIgBgBIAAgCIgBAAIAAgBIAAgBIAAgDIgBABIAAgBIABgBIAAAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAABIABAAIABAAIAAABIABAAIAAABIAAABIABAAIAAADIAAADIAAAAIABAAIAAACIAAACIAAABIABAAIAAADIABADIABAAIAAADIAAABIAAACIABAAIAAAEIAAACIAAABIABAAIAAADIAAAEIAAABIgBAAIAAABIgBAAIAAABIAAABgAiFAaIAAgBIABAAIAAABgAg/AMIAAgCIABAAIAAABIAAABgAiDAKIAAgBIABAAIAAABgAimAGIgBgBIABAAIABABgAhogKIAAgBIABAAIAAABgAAdgQIAAAAIABAAIgBABgACmghIAAgBIACAAIAAABg");
	this.shape_172.setTransform(17.7,5.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#BBBBBB").s().p("AhZAZIAAgBIABAAIAAABgAg2ATIgBAAIAAgBIADAAIAAACIgCAAgAg/AQIAAgCIABABIAAABgABZgWIAAgCIABAAIAAACg");
	this.shape_173.setTransform(25.7,4.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#070707").s().p("ACXAqIgBAAIAAgBIABAAIABAAIAAABgAiXAGIAAgBIAAgCIAAgBIACAAIAAABIAAACIAAABgAh8AAIAAgCIAAgBIAAgBIABAAIAAABIAAABIAAABIAAABgAhVgDIAAgDIAAgBIAAgCIgBAAIAAgDIAAgBIAAgBIABAAIAAABIAAABIAAABIABAAIACAAIAFAAIAAAAIAAABIgHAAIAAAFIAAABIAAABgAh9gFIAAgBIAAgBIgEAAIAAgBIACAAIACAAIAAgBIAAgBIAAgCIAAAAIAAACIABADIAAABIAAABgACWgoIgBAAIAAgBIABAAIACAAIAAABg");
	this.shape_174.setTransform(19.5,5.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#797979").s().p("ACcAyIAAgBIABAAIAAABgAhEARIAAAAIABAAIAAAAgAh3AOIAAgBIAFAAIAAABgAh/ADIAAAAIABgBIAAABgAicgHIAAgBIABAAIAAABgAiPgLIABgBIABAAIAAABgACHgwIAAgBIABAAIAAABg");
	this.shape_175.setTransform(21.2,6.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#A3A3A3").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_176.setTransform(33.7,2.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C6C6C6").s().p("AhJAcIAAgBIABAAIAAABgABJgaIAAgBIACAAIgCABg");
	this.shape_177.setTransform(25.9,5.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#818181").s().p("AhxAaIAAgBIAAAAIABABgAibAYIAAgBIACAAIAAABgAiKAXIAAgCIABAAIAAACgAh0AVIAAgBIABAAIAAABgAgGgMIAAgBIAEAAIAAACgACagYIAAgBIACAAIAAABg");
	this.shape_178.setTransform(17.5,5.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#868686").s().p("AAmAhIAAgCIABAAIAAACgAhnANIAAgBIgBAAIAAgEIAAgBIgBAAIAAgDIABAAIAAgEIABAAIAAgGIABAAIAAgDIABAAIAAgBIgBAAIAAgBIACAAIAAgCIABAAIAAACIAAABIABAAIAAADIgBAAIAAAHIgBAAIAAAAIAAAGIgBAAIAAACIAAAGIgBAAIgBABgAhAAJIAAgCIAMAAIAAgBIABAAIAAACIAAABgAiWAHIAAAAIABAAIAAABgAiIACIAAgBIABAAIAAABgAiDgMIABgBIAAACIgBABgAhRgQIAAgBIAAAAIABABgACWgeIAAgCIABAAIAAACg");
	this.shape_179.setTransform(17.9,5.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#434343").s().p("ACYAiIAAgCIACAAIgBACgAgFAWIAAgCIABABIAAABgAhQASIAAgBIABAAIAAABgAiZgFIAAgBIAAgBIABAAIAAABIABAAIAAABgAgzgWIAAgBIABAAIAAABgACTggIAAAAIABAAIAAAAg");
	this.shape_180.setTransform(18.4,6.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D3D3D3").s().p("AheANIAAgBIgCAAIAAgBIAAgBIADgBIAAABIALAAIAAABIgBAAIAAACgAgyADIAAgBIACAAIAAACgAg0AAIAAAAIABAAIAAAAgABggLIAAgBIABAAIAAABg");
	this.shape_181.setTransform(23.5,3.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#9F9F9F").s().p("AhRAfIAAgBIABAAIAAABgABSgcIgBgCIABAAIAAACg");
	this.shape_182.setTransform(25.1,5.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#C4C4C4").s().p("Ah+AeIAAgBIABAAIAAABgAhRgOIAAgBIABAAIAAABgAgTgQIAAgCIACAAIAAACgAB+gcIAAgBIABgBIAAACg");
	this.shape_183.setTransform(20.7,5.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#4C4C4C").s().p("AhVAiIAAAAIAAAAIABAAgAgUAgIAAgCIADAAIAAACgAADAfIAAgBIAFAAIAAABgAiTAcIAAgBIABAAIAAABgAiLAHIAAgBIAAAAIAAABgAgoAEIAAgBIABgBIAAACgAgrgDIAAgBIAAgCIABAAIAAADgACQgeIAAAAIABgBIAAABgACTghIAAgBIABAAIAAABg");
	this.shape_184.setTransform(19.5,5.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#0C0C0C").s().p("Ag4AfIAAgBIAAgBIABAAIAAgBIABAAIAAABIAAABIgBAAIAAABgAikAHIgCAAIAAgBIACAAIAAgBIABAAIABgBIABABIAAABIgBAAIgBAAIAAABgACkgcIgBAAIAAgBIABAAIAAgBIACAAIABAAIAAABIgBAAIAAABg");
	this.shape_185.setTransform(17,5.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#0D0D0D").s().p("AhSAiIgBAAIAAgBIgBAAIAAgCIABAAIACABIAAgBIABAAIAAABIAAABIgBAAIAAABgAiQAbIgBAAIAAgCIAAgBIABAAIAAABIACAAIgBACgAgMABIAAgCIAAgBIAAgBIgBgBIAAAAIgBgCIAAgCIAAgDIgBAAIAAgBIgNABIAAAFIAAACIABAAIAAAAIABADIAAABIAAAAIgBABIgBAAIAAgBIAAAAIAAgBIAAgDIgBAAIAAgCIAAgDIAAgBIgBAAIAAgEIgBAAIAAgBIgBAAIAAgBIgCAAIAAgCIACAAIABAAIAAACIABAAIAAABIABAAIAAABIAAABIAAABIABgBIADAAIAFABIAEgBIAAgBIABABIABAAIAAABIACAAIAAACIgBADIAAABIAAABIACAAIAAAEIAAABIAAABgAiPgHIgBAAIAAgCIgBABIAAgBIABAAIABAAIAAAAIABAAIAAACgACKgaIgBAAIAAgCIABAAIAAgBIABAAIABAAIAAABIgBAAIAAACgACRggIgBAAIAAAAIABgBIABAAIAAABg");
	this.shape_186.setTransform(19.4,5.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#515151").s().p("AgXAgIAAgCIABAAIAAACgAgMAdIAAgCIABAAIAAACgAgZAXIAAgDIAAAAIAAABIABACgAiSAXIAAgCIABAAIAAACgAiZATIAAgBIABAAIAAABgAh/AIIAAgBIABAAIABABgAAcgRIAAgDIABAAIAAADgACVgbIAAgBIABAAIAAABgACZgdIAAgCIABABIAAABg");
	this.shape_187.setTransform(18.4,5.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#282828").s().p("AB5AnIAAgCIABAAIAAACgAh4ADIgBAAIAAgBIABAAIAAgBIABAAIAAACgAh5gOIAAgBIABAAIgBABgAB2giIgBgCIACAAIAAACgAB5glIAAgBIABAAIAAABg");
	this.shape_188.setTransform(22,5.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#ADADAD").s().p("AAAAfIAAgCIABAAIAAACgAhpAbIADAAIAAABIgEABgAAXAQIgBAAIAAgDIAAgBIAAgDIgBAAIgBgDIABAAIAAABIACAAIAAgBIBsgCIAAgBIAAgLIAAgEIhwACIAAADIgBAAIAAgIIACAAIAAACIABgBIAAgBIADAAIAAABIBqgBIAAgCIABAAIAAADIABgBIAAAWIgBAAIABAHIhrACgAh9AQIAAgCIgGAAIAAABIgCAAIAAAAIgBAAIAAABIgBAAIAAgBIAAgCIAAgBIgBAAIAAgCIACAAIgBgBIACAAIAAABIACAAIAAgBIABAAIAAABIAGAAIAAgCIABAAIAAADIAAACIAAADgAATAAIABAAIAAABIgBAAgAiNgDIAAgBIABAAIAAABgACNgdIAAgBIABAAIAAABg");
	this.shape_189.setTransform(19.5,5.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#A8A8A8").s().p("AgSAjIAAgBIABAAIAAABgAh9AKIAJAAIABABIgKAAgAgygOIABABIAAAAIgBABgAgXgPIABgBIAAACIgBAAgAg+gOIAAgCIABAAIAAACgAB9giIAAAAIACAAIAAABg");
	this.shape_190.setTransform(21.5,5.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#7D7D7D").s().p("ACsAzIgBgBIABAAIABABgAirAOIgBgCIABAAIAAACgAhrANIAAgCIABAAIAAACgAgMgCIAAgCIABAAIAAACgAgNgKIAAgBIABAAIAAABgAh0gSIAAgBIABAAIAAABgAiTgSIAAgCIABABIAAABgACdgxIAAgBIABABIAAAAg");
	this.shape_191.setTransform(19.3,6.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#7A7A7A").s().p("AgZAlIAAgBIABAAIAAABgAgsAlIAAgBIABAAIAAABgAiAAeIABAAIABAAIAAAAgAikAXIAAgCIAAAAIgBAAIAAgDIAAgBIABAAIAAgDIACAAIgBgBIgBAAIAAAAIABgBIAAAAIABAAIAAACIABAEIgCAAIAAAFgAguAFIABAAIAAABIgBAAgAgEgJIAAgCIABAAIAAACgACXgbIAAgBIAAAAIABABgAClgiIAAgCIABABIAAABg");
	this.shape_192.setTransform(18.5,5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#CACACA").s().p("AhfAnIAAgBIACAAIAAABgABHgUIAAgCIAAABIAAABgABfgmIABAAIAAABIgBABg");
	this.shape_193.setTransform(25.7,5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373737").s().p("AB7AtIAAgBIAAAAIABABgAgeAMIAAAAIABAAIAAAAgAgigNIAAgBIABAAIAAABgAh/gPIABAAIAAABIgBAAgAgngVIABAAIAAAAIgBABgAB3glIAAgBIABAAIAAACgAB/grIAAgBIABABIAAAAg");
	this.shape_194.setTransform(22.6,5.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#4A4A4A").s().p("AiNAjIAAgBIACAAIAAABgAgJAhIAAgBIACAAIAAABgAgPAfIAFAAIAAABIgFABgAhRAdIABAAIABADIgCABgAgKAeIAAgCIAAAAIAAACgAATAVIAAgDIACgBIgBAEgAhEAJIAAgCIACAAIAAACgAATAGIAAgBIABAAIAAACgAiHAAIAAAAIAEAAIABAAgAiXgBIABgCIABAAIAAACgACWggIAAgBIABgBIAAACg");
	this.shape_195.setTransform(19.6,4.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D8D8D8").s().p("ACZAmIABAAIAAAAIgBABgAimACIAAgBIABAAIAAABgACmglIAAgBIABAAIAAABg");
	this.shape_196.setTransform(17.9,5.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#141414").s().p("AiTAWIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIgBAAIAAgCIgBAAIAAgBIABAAIABAAIAAABIAAABIABAAIAAABIABAAIAEAAIAFAAIgBgBIACAAIAAABIAAABIgKAAIgBABIAAABIABAAIAAADIAAABIAAABIAAABIgBAAgACRgSIAAAAIgBgBIABAAIAAgBIABAAIAAgBIACAAIABAAIAAgBIABAAIABAAIAAABIgBAAIAAABIgBAAIgBAAIAAABIgCAAIAAABg");
	this.shape_197.setTransform(20.2,3.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CBCBCB").s().p("ACxAzIAAgBIABAAIAAABgACWAgIAAgBIAAAAIABACgAhLAYIAAgBIABAAIAAABgAAVAWIABAAIAAABIgBAAgAimANIAAgBIABAAIAAABgAixAHIAAAAIABAAIAAAAgAiFgHIAAgBIACAAIAAABgAg2gYIABgBIAAAAIAAABgACfgyIAAAAIABAAIAAAAg");
	this.shape_198.setTransform(18.9,6.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#959595").s().p("Ag4AiIAAgBIABAAIAAABgAigAfIAAgBIACAAIAAABgACgggIABgBIAAABg");
	this.shape_199.setTransform(18.7,4.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#9D9D9D").s().p("ACKAXIABgBIABAAIAAABgAirAAIAAAAIgCgBIAAgBIAAAAIABgCIgCAAIAAgBIAAgCIgBAAIAAgDIABAAIAAgCIABAAIAAgBIgBAAIAAgBIABAAIAAgDIACAAIgBgBIACAAIAAABIABABIABAAIAAABIABAAIAAABIABAAIAAABIAAABIABAAIAAACIAAABIABAAIAAACIgBAAIAAgBIgBAAIAAACIgBAAIAAAFIgBgBIAAgCIgBAAIAAAAIgBABIAAAAIABAAIABABIgCAAIAAACgAipgFIABAAIAAgBIgBAAgAiTAAIAAgBIABAAIAAABgACigWIAAAAIANAAIAAAAg");
	this.shape_200.setTransform(19.2,6.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#BFBFBF").s().p("AhvAUIAAgCIABAAIAAACgAiKAPIAAgBIABAAIAAABgAhmAAIAAgBIgBAAIAAgBIgBAAIAAgBIAAgBIABAAIAAACIABAAIgBgDIABAAIAAABIAKAAIAAABIAAACIgJAAIAAABgAhqAAIgBgBIACAAIAAABgAixgNIAAgBIABAAIAAABgAgXgPIAAgBIAAgCIAAAAIALgBIABABIAAAAIABADgAClgSIAAAAIAOgBIAAABg");
	this.shape_201.setTransform(19.1,6.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#BEBEBE").s().p("AAOAYIABAAIAAABIgBAAgAiFAOIAAAAIAEgBIAAABgACaAEIgBgVIACAAIAAAVgAhDAAIAAgHIABAAIAAgIIACAAIABAEIgBACIABAAIABABIgDAAIAAAFIgBAAIAAADgAg6gBIAAgBIALAAIAAABgAiagUIAAgBIABgBIAAACgAgjgXIAAgBIADAAIAAABg");
	this.shape_202.setTransform(20.1,6.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#858585").s().p("AAWASIABAAIAAABIgBAAgAg5AQIAAgBIABAAIAAABgAikANIgBgBIABAAIAAABgAh2AMIAAgBIAEAAIAAABgAiQADIABAAIAAABIgBAAgAhlACIAAgBIgCAAIAAgBIAAAAIACAAIABAAIAKAAIgBgBIACAAIAAACIAAABgAgGgFIAAgBIABAAIAAABgAACgIIAAgBIABAAIAAABgAClgSIAAAAIABAAIAAAAg");
	this.shape_203.setTransform(19,6.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EAEAEA").s().p("AiRAXIAAgBIgBAAIAAABIgDAAIAAgBIgBAAIAAABIgCAAIAAgBIAAgBIAAgBIgBAAIAAgCIAAgBIAAgBIAAgBIgCAAIABgCIACAAIAAACIABAAIAAgCIAEAAIAAABIADAAIAAgBIADAAIgBABIABABIABAAIAAACIAAABIAAACIAAABIAAACgACOAGIAAgCIgEAAIAAgBIgFAAIAAgCIgCAAIAAgBIgDAAIAAAAIgFAAIAAAAIgCAAIAAgBIgBAAIAAgBIgBAAIgBgHIACAAIAAgBIABAAIAAAAIABAAIABAAIAAgCIABAAIAAgBIABAAIABAAIAAgBIABAAIAAgBIABAAIABAAIAAgCIACAAIgBgBIACAAIABAAIgBgBIACAAIAAgBIABAAIABAAIAAgBIABAAIAAgBIABAAIABAAIAAABIABAAIAAABIACAAIAAABIAEAAIAAABIADAAIAAABIAFAAIgBABIADAAIAAAVIgNAAIAAABg");
	this.shape_204.setTransform(21.1,3.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#757575").s().p("AgZASIAAgCIABAAIAAACgAiuALIAAgBIAAAAIAAABgACvAIIgBgBIAAgUIAAgDIABAAIAAAYgACXgQIAAgBIABAAIAAABg");
	this.shape_205.setTransform(19.2,3.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#686868").s().p("AAdAjIAAgCIABAAIAAACgAiXAPIAAgCIACAAIAAACgAiuAOIgBgBIABAAIAAABgAhrAIIAAgBIABAAIAAABgAgNAFIAAgDIABAAIAAADgAieABIAAgBIABAAIAAABgAiJAAIAAAAIABAAIAAAAgACvghIAAgBIABAAIAAABg");
	this.shape_206.setTransform(17.9,4.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("ACpAxIgBAAIAAgBIABAAIAAABIABAAIABABIgCAAgACmAwIAAgCIACAAIAAACgAClAuIAAgBIABAAIAAABgACiAtIAAgBIACAAIAAABgACbAoIAAgBIACAAIAAABgACUAkIAAgCIACAAIAAACgACRAiIABgBIAAAAIAAABgACMAfIAAgBIACAAIAAABgACLAeIAAgCIABAAIAAACgAAUAaIAAgBIABAAIAAABgAgfAaIAAgBIgBAAIAAgBIABAAIAAABIABAAIAAABgAg6AYIAAgBIABAAIAAABgAhXAYIAAgBIABAAIAAABgAiNAVIACAAIABAAIAAAAIgBAAIgBABgAiiASIAAgBIABAAIAAABgAinASIgBAAIgBgBIACAAIABAAIAAABgAipgJIgBAAIAAgBIABAAIACAAIAAABgAiVgLIAAgCIABAAIAAACgAiSgOIAAgBIAAAAIAAABgAhUgRIAAgCIABAAIAAACgAhDgSIAAgBIACAAIAAABgAh0gSIAAgBIABAAIAAABgAhdgSIAAgBIABAAIAAABgAhVgTIAAAAIABAAIAAAAgAg7gUIAAgBIABAAIAAABgAhZgUIAAgBIABAAIAAABgAgKgYIABAAIAAABIgBABgAghgYIAAgBIABAAIAAABgACRglIgBgBIACAAIAAABgACUgnIAAgBIACAAIgBABgAChgwIAAAAIABgBIAAABg");
	this.shape_207.setTransform(19.2,6.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#808080").s().p("AB+AzIAAgBIABAAIAAABgAhBAZIAAgBIACAAIAAABgAhfABIAAgBIABAAIAAABgAh+gPIABAAIAAABIgBABgAh7gOIABgBIAEAAIAAABgAg3gWIAAgCIABAAIAAACgAB1gyIABAAIAAABIAAABg");
	this.shape_208.setTransform(23.6,6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#393939").s().p("AB8AsIAAgBIABAAIAAABgAiFAZIAAgBIABAAIAAABgACFgqIAAgBIABAAIAAABg");
	this.shape_209.setTransform(22.1,5.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#0B0B0B").s().p("AguAoIAAgBIgBAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIABAAIAAABIABAAIAAABIABAAIACAAIAAgBIABAAIAAABIAAABIgBAAIAAABgAhMAlIgBAAIAAAAIgCAAIAAgBIACAAIABAAIAAABIABAAIAAAAgAicAfIgCAAIgBAAIAAgBIABAAIACAAIABAAIABAAIAAACIgBgBIAAACIgCAAgAiaATIAAgBIAAAAIAAgBIAAgBIAAABIABABIAAABgAAIAMIAAgBIAAgCIAAgBIAAgBIAAgBIABAAIAAACIAAABIAAACIAAABgAirAEIgBgCIACAAIABAAIAAABIgBAAIAAABgAg8AAIgBgBIAAgCIgCABIAAgBIABAAIABgBIAAAAIABAAIAAABIAAACIABABgAhxgEIAAgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIABAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABgAgggIIAAgBIABAAIAAgBIABAAIAAABIAAABIgBAAIAAABIgBAAgACqglIgBAAIAAgBIACgBIAAAAIABAAIABgBIAAABIgBAAIAAACg");
	this.shape_210.setTransform(18.5,4.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D7D7D7").s().p("AhcAPIABgBIAAABIgBABgABagEIABgBIgGAAIAAgBIgCAAIAAgBIgEAAIAAgBIgCAAIAAgCIgBAAIAAgBIgBAAIAAgBIABAAIABAAIAAAAIABAAIAAgCIABAAIABAAIAAgBIABAAIACAAIAAABIABAAIAAACIACgBIAAAAIABgBIAAABIACAAIAAABIADAAIAAAFIABADg");
	this.shape_211.setTransform(27.4,2.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#C5C5C5").s().p("AgHAkIABgFIAAgDIgCAAIAAgEIAAgBIAAgBIgCAAIABgFIAAgCIAAgBIgBAAIAAgDIAAgBIgBgDIAAAAIgBgEIAAgBIAAgBIgBAAIABgBIAAAAIAAAAIABAAIAAgBIgBABIAAgDIABAAIAAAAIgBAAIAAgCIAAgBIABAAIABAAIAAAAIAAgCIAAgBIABAAIAAAAIACAAIABAAIAAACIABAAIAAABIABAAIAAACIABAAIAAABIAAABIAAACIABAAIAAADIAAABIAAABIABAAIAAACIgBAAIAAAFIgBAAIAAAFIgBAAIAAAHIAAAAIAAAHIgBAAIAAAFgAgFAAIABAAIAAgBIgBAAgAgJgCIACABIAAgCIgCAAgAgFgDIABAAIAAgBIgBAAgAikAgIgBAAIAAgCIABAAIAAgCIABAAIAAABIAAABIABAAIAAABIgBAAIAAABgAiJAPIAAgBIABAAIAAABgAifAHIAAgCIABABIAAABgAglgLIAAgBIABAAIAAABgAClgeIAAgCIABAAIAAACgACggjIACAAIAAAAIgCABg");
	this.shape_212.setTransform(19.4,4.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#696969").s().p("ACcAwIAAgBIABAAIAAABgAADAYIgBgGIACAAIAAACIABAAIAAgCIADAAIAAACIABgBIAAgBIABAAIAAACIAAABIgGAAIABADgAiiAPIABAAIAAAAIgBABgAiVAFIABAAIAAABIgBABgAhigDIAAgCIABAAIAAACgAgcgHIAAgFIAMgBIAAABIAAACIgLAAIAAADIAAAAgAhGgOIAAAAIACAAIAAAAgACigvIABAAIAAAAIgBABg");
	this.shape_213.setTransform(19.5,5.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#B5B5B5").s().p("AghAoIAAgBIABAAIAAABgAiZAdIAAgBIABAAIAAABgAigAcIAAgBIABAAIAAABgAiLAZIAAgBIABgBIAAACgAihAHIAAgBIABAAIAAACgAhxACIAGAAIADAAIAAgBIAAAAIAAABIABAAIAAgBIAEAAIAAABIAAABIgOAAgAh8gDIAAgCIABAAIAAACgACigmIgBgBIACAAIAAABg");
	this.shape_214.setTransform(19.6,4.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#1C1C1C").s().p("AiXAnIAAgBIABAAIAAgBIAAAAIAAgBIACAAIAAgBIAAgCIABAAIAAgBIAAgCIAAgBIAAgBIgCAAIAAgBIAAgCIAAgBIgBAAIAAgCIAAgDIAAAAIgBAAIAAgCIAAgCIAAgBIAAgBIABAAIAAABIAAABIAAABIAAABIACAAIAAACIAAABIAAACIABAAIAAABIAAACIABAAIAAABIAAABIAMAAIAAgBIAAgGIAAgCIgBAAIAAgDIAAgBIgBgCIgBAAIABgBIAAAAIABAAIAAADIAAACIABABIABAAIAAABIAAACIAAABIABAAIAAAFIAAABIABAAIAAABIAAAFIABAAIABADIABAAIAAACIABAAIAAABIgBAAIgBAAIAAgBIgCAAIAAgCIAAAAIAAgBIgBgBIAAgBIgDAAIgEABIgGAAIgBAAIAAABIgBAAIAAABIAAABIgBAAIAAABIgCAAIAAABgAiIAfIAAACIADgBIAAgCIgMAAIAAABIAGAAIABACIAAAAIAAgCgACWgjIAAgBIAAAAIABAAIAAgCIABAAIAAABIAAABIAAAAIAAABg");
	this.shape_215.setTransform(20.7,4.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#585858").s().p("ACaA2IAAgBIABAAIAAABgAhMAcIAAgBIAAAAIABABgAicgBIAAgCIABABIAAABgAg6gEIAAgBIACAAIAAABgAhUgPIAAgBIABAAIAAACgAgzgVIABAAIAAACIgBAAgACcglIAAgFIAAgHIAAgEIABAAIAAAQg");
	this.shape_216.setTransform(21,5.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#606060").s().p("AgdApIAAgBIACAAIAAABgAg9AmIAAgBIABAAIAAABgAikAgIAAgBIACAAIAAABgAhqAdIABAAIAAABIgBABgAgbAaIAAgDIABAAIAAADgACkgoIAAAAIAAAAIAAAAg");
	this.shape_217.setTransform(19.6,4.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#383838").s().p("AhnAnIAAgBIABAAIAAABgABaAbIAAgBIACAAIAAABgAh5AZIAAgBIABAAIAAABgAgoAQIAAgBIABAAIAAABgAh9AIIAAgBIABAAIAAACgAhMgJIACAAIAAABIgCAAgAB8glIAAgBIACAAIAAABg");
	this.shape_218.setTransform(23.6,4.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#010101").s().p("AANAoIAAgBIAAgBIACAAIAAABIgBABgAhgAnIAAgBIABgBIAAACgAiWAgIAAgBIABAAIAAABgAiyAVIAAgCIABABIAAABgAhiAPIAAgBIAAgCIAAgBIABAAIAAABIAAACIAAABgAiMAIIAAgCIAAgBIgCAAIAAAAIABAAIABAAIABgBIAAABIABACIgBABgAiiADIAAgBIABAAIABgBIAAABIgBABgAikADIAAgBIABAAIAAABgACygmIAAgBIABAAIAAABg");
	this.shape_219.setTransform(18.2,4.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#7B7B7B").s().p("ACPArIABAAIAAABIgBAAgAilAIIAAgBIABAAIAAABgAh+gCIAAgBIABAAIAAABgAgPgKIAAgBIABgBIAAACgACKgZIAAgBIABAAIAAABgACSgdIAAgBIABAAIAAABgAClgqIAAgBIABAAIAAABg");
	this.shape_220.setTransform(19.4,5.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#B1B1B1").s().p("AB7AvIAAgBIABAAIAAABgAiPAEIAAgBIABAAIAAABgACNgmIAAgBIgCAAIAAgBIgBAAIAAgBIgCAAIAAABIACAAIAAABIgDAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgCIABAAIACAAIAAgBIAAAAIABAAIAAgBIACAAIACAAIAAABIACAAIAAAHg");
	this.shape_221.setTransform(22.2,5.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#0A0A0A").s().p("ACYAxIgBAAIAAgCIABAAIABAAIAAACIABAAIAAAAIgBAAIgBABgACSAtIgBAAIAAgBIgBAAIAAgBIABAAIABAAIAAABIACAAIAAABgAilAYIAAgCIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIAAgBIABAAIAAABIAAABIAAABIABAAIAAACIAAABIACAAIABAAIAAAAIADAAIAAABIgBAAIgCAAIgBAAIgCAAIAAACgAhVAJIAAgDIgBAAIAAgDIAAgBIAAgCIABAAIAAACIAAABIAAACIAAAAIABAAIAAADIAAACIABACIgCAAgACjgvIAAAAIACgBIAAAAIAAgBIABAAIABABIgBAAIAAABIgBABg");
	this.shape_222.setTransform(19.7,5.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#8E8E8E").s().p("AgQAmIgIAAIAAgCIAMAAIAAACIABAAIAAAAgAimAgIAAgBIABAAIAAABgAiMATIAAgBIABAAIAAABgAh+ASIAAgBIABAAIAAABgAioALIAAgBIAAAAIABABgAh3ACIAAgBIABAAIAAABgACnghIAAgBIgCAAIAAgBIABAAIAAgCIABAAIABAAIAAgBIABAAIAAAFg");
	this.shape_223.setTransform(19.7,4.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#3E3E3E").s().p("AhZAmIAAgBIAEAAIAAABgAiLAfIAAgCIABAAIAAACgAirAbIAAgBIACAAIgBgBIABgBIABAEgAixASIAAgBIABAAIAAABgAghAQIAAgBIABAAIABABgAAFAEIgBgBIABAAIABACgAgzAEIABgBIABAAIAAACgAgtACIAAgBIAEAAIABABgAgxABIABgBIACAAIAAABgAAagIIAAgBIBxgCIAAABIhrACgACxgkIAAgBIABAAIAAABg");
	this.shape_224.setTransform(18.7,4.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#4E4E4E").s().p("ACvA0IAAgBIABAAIAAABgAhnAdIAAgBIABAAIAAABgAgHAUIAAgBIgBAAIAAABIgDAAIAAgDIACAAIAAABIADAAIAAgBIABAAIAAABIACAAIgBgBIABAAIAAABIADAAIAAACgAijAQIABAAIAAAAIgBABgAiZAOIAAgBIABAAIAAABgAizAIIAAgBIABAAIAAABgAipAEIABgBIABAAIAAABgAgRACIAAgBIABAAIAAABgAgDgDIAAgBIABAAIAAABgAhkgFIAAgBIABAAIAFAAIAAACgAgdgFIAAgBIABAAIAAABgAgzgOIAAgBIABAAIAAABgAgcgUIAAgBIACAAIAAABgACzgyIAAgBIABAAIAAABg");
	this.shape_225.setTransform(18.3,5.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#AFAFAF").s().p("AhrAoIAAgBIABAAIAAABgAhrAYIAAgCIABAAIAAACgAizAPIABAAIAAABIgBABgAhWgDIAAgCIACAAIAAACgACZgSIAAgCIABAAIAAACgACwglIABAAIAAAAIgCABgACygmIABgCIAAAAIAAACg");
	this.shape_226.setTransform(18.6,4.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#464646").s().p("AhTApIABgBIABAAIAAABgAioAkIAAgBIABAAIAAABgAAEAgIgDAAIAAABIgBAAIAAgBIAAAAIAAgCIAGAAIAAACIgBAAIAAABIgBAAgAgpAcIAAgCIABAAIAAACgAASAXIAAgBIABAAIAAABgAhYAOIAAgDIABAAIAAADgAAGAEIAAgCIgBAAIgBgDIACAAIAAgCIACAAIAAgBIAEAAIAAAEIABAAIAAADIgBAAIAAgBIgBAAIgBABIgCAAIAAgBIgBAAIAAACgAhfgDIAAgBIABAAIAAABgACngoIACAAIAAAAIgCABg");
	this.shape_227.setTransform(19.9,4.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#171717").s().p("ABXA5IAAgBIgBAAIgBgBIgBAAIAAgCIABABIACAAIAAABIABAAIABAAIAAgQIAAgBIgBAAIgBgEIAAgHIgDAAIAAgBIgDAAIAAgBIgCAAIAAgBIgEAAIAAgBIgDAAIAAgBIgDAAIAAgBIgEAAIAAgBIgCAAIAAgBIgDAAIAAgBIgEAAIAAgBIgEAAIAAgBIgCAAIAAADIgBAAIAAAJIAAACIABAAIAAABIgBAAIhtACIAAgBIgBAAIgBAAIAAgBIgBAAIAAgBIABAAIABAAIAAABIABAAIAAgCIgBAAIAAgGIAAgBIAAgBIAAgCIgBAAIAAgDIgBgEIABgDIgCAAIAAgCIAAgEIABgDIgCAAIAAgBIAAgFIgBgBIAAgEIAAgDIgBAAIAAgGIgFAAIAAABIgCAAIAAACIgBAAIAAAFIAAAJIABAAIAAAFIAAAEIACAAIAAAHIAAADIABAAIAAAGIAAACIABAAIAAACIABAAIAAABIgBAAIgBAAIAAgBIgBAAIgDAAIgGAAIgBAAIAAgBIAAgCIAAgBIAAgDIAAgCIgBAAIAAgCIAAgCIAAgDIAAgBIgBAAIAAgCIAAgBIAAgCIgBgBIABAAIABADIAAABIAAABIABAAIAAACIAAADIAIgBIAAgCIABAAIAAgCIgBAAIgBgHIAAgBIAAgCIgBAAIAAgDIAAgCIAAgCIAAgBIgBAAIAAgDIAAgCIAAgBIgKAAIAAABIAAAEIAAABIABABIAAAEIAAABIAAABIgBAAIAAgBIAAgCIAAgBIAAgBIgBAAIAAgDIAAgEIAAgBIgBAAIAAgCIAAgBIABAAIAAABIABAAIAAABIAEAAIAAgBIAFAAIABAAIABAAIAAgBIABgBIABAAIAAAAIABAAIAAgCIACAAIgBgBIABAAIAAgBIABAAIABAAIAAgBIACAAIAAgBIBygCIABAAIAAgBIABAAIABAAIAAABIgBAAIAAABIgBAAIAAAWIABAHIgBAGIACAAIAAACIACAAIAAABIACAAIAAABIADAAIABACIABAAIAAAAIAEAAIAAACIAFAAIAAAAIACAAIgBACIAFAAIAAABIAEgBIAAACIABAAIAAABIAEAAIAAABIACAAIAAABIACAAIAAgEIAAgGIgNAAIAAgBIAAgCIgBgKIAAgLIAOAAIAAAAIAAgbIAAgPIgBAAIgBAAIgCAAIAAgBIACAAIAAgBIABAAIABgBIAAAAIABAAIABAtIgNABIgCAAIAAABIABAUIABAAIAAABIABAAIAMAAIABAtIgBAAIgBAAgAg8AYIABAAIAAABIAAAFIABABIAAABIBpgCIAAgBIABAAIAAgCIAAgHIgBAAIAAgBIhrACIAAABIABAAIAAABIgBAAgAhRAQIAAAGIACAAIgBACIAAABIAFAAIADgBIAAgEIAAgCIgBAAIAAgCIAAgCIgIAAgAhBgZIAAABIgBAAIAAADIABAAIAAAIIAAACIAAACIABAAIAAAEIAAACIAAACIAAABIABAAIAAAAIAAAAIABADIAAADIAAABIABAAIAAADIAAAFIABAAIAAADIAAABIABAAIAAgBIABAAIBogCIAAgBIACAAIAAgBIgBgGIAAgHIAAgWIAAgFIgBAAIAAgBgABMAwIAAgBIABAAIAAABIAAABIgBABg");
	this.shape_228.setTransform(28,5.8);

	this.addChild(this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.1,11.6);


(lib.FlatheadScrew01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272727").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape.setTransform(8,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#393939").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(8.3,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#989898").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(2.2,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2A2A2").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(5.1,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#222222").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(2.6,4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2C2C").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAABg");
	this.shape_5.setTransform(3.5,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202020").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIABAAIAAABg");
	this.shape_6.setTransform(3.9,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0E0E0").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_7.setTransform(4,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E1E1E").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIABAAIgBAAIAAABg");
	this.shape_8.setTransform(3.9,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A0A0A0").s().p("AAgAGIAAgBIABAAIAAABgAgggEIAAgBIABAAIAAABg");
	this.shape_9.setTransform(5,6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D8D8D8").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_10.setTransform(0.9,4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0E0E0E").s().p("AAHALIgCAAIABgBIAAgBIAAgBIgBgBIgBgBIAAABIAAgBIgCAAIgBAAIgBAAIAAgBIAAAAIgBAAIgBgBIAAgBIgBAAIgBAAIAAgBIgBAAIgCAAIABgCIgBAAIAAAAIACAAIAAAAIACABIAAABIABAAIACAAIAAABIAAAAIABAAIADAAIAAgDIgBAAIAAAAIAAAAIAAgCIgBAAIAAgEIAAgBIgBAAIgBAAIAAAAIAAABIgBAAIgBAAIAAgCIABAAIABABIgBgBIABAAIAAAAIABAAIAAgCIAAgBIABAAIAAACIAAABIABAAIAAADIAAABIABAAIAAADIAAABIAAAAIABAAIAAAAIAAABIgBABIACAAIAAADIgBABIACAAIAAACIAAABIAAABIABAAIAAABIAAAAIAAABIAAAAIgBAAg");
	this.shape_11.setTransform(0.9,5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EBEBEB").s().p("AABAJIAAgBIgBAAIAAAAIAAgBIgBAAIgCAAIABgBIgBAAIAAgBIAAgBIABAAIAAgEIABAAIAAAAIABAAIAAgEIAAAAIAAgFIABAAIAAABIAAACIAAABIABAAIABABIAAACIgBAAIABABIABAAIgBABIAAAAIAAABIAAABIABAAIAAABIgBAAIAAACIgBAAIAAACIABAAIAAACIgBAAIAAABg");
	this.shape_12.setTransform(2.2,5.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0F0F0F").s().p("AAAAEIAAgBIAAgBIAAgCIAAAAIAAAAIAAgCIAAgBIAAABIAAABIAAABIAAAAIAAAAIAAACIAAABIAAABg");
	this.shape_13.setTransform(2.5,4.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C8C8C8").s().p("AAGAIIAAgBIACAAIgBABgAgFgBIgBAAIgBgDIAAgBIABAAIAAAAIACAAIAAgCIABAAIAAACIgBAAIAAABIABAAIAAACIgBAAIgBACIAAAAg");
	this.shape_14.setTransform(2,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#292929").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(1.3,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9D9D9D").s().p("AANAJIAAgBIABAAIAAABgAgJAJIAAgBIgCgBIAAgBIAAgBIABgBIgCAAIAAgCIAAgCIgBAAIABAAIAAgBIABgCIABAAIAAgBIgBAAIAAgBIABAAIAAgDIACABIgBgBIABAAIAAABIABAAIACAAIgBABIABAAIAAABIABAAIAAABIAAABIABAAIAAADIAAAAIACAAIgBABIgBAAIAAgBIgBAAIAAACIgBAAIAAAFIgBgBIAAgDIgBAAIAAABIgCABIABAAIAAAAIABABIgBAAIAAADgAgHACIABAAIAAgBIgBAAg");
	this.shape_16.setTransform(2.7,4.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#535353").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_17.setTransform(9.8,5.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B7B7B7").s().p("AAcAMIAAgCIABAAIAAACgAgcgKIABgBIABAAIAAABg");
	this.shape_18.setTransform(5.2,4.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5C5C5C").s().p("AgGAKIABAAIAAABIgBAAgAgDAAIAAgBIAKABIAAAAgAgGgKIABAAIAAAAIgBABg");
	this.shape_19.setTransform(8.8,6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#313131").s().p("AATACIABAAIABgBIAAABIgBAAIgBABgAgTAAIgBAAIAAAAIABAAIAAgCIACAAIAAACg");
	this.shape_20.setTransform(6,4.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262626").s().p("AAgAGIAAgBIgCAAIAAgBIACAAIAAAAIAAACgAgfgEIAAgBIABAAIAAABg");
	this.shape_21.setTransform(4.8,3.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5D5D5D").s().p("AABASIAAgBIABAAIAAABgAgmACIAAgBIgCAAIgCAAIABgBIgCAAIgCAAIAAAAIgCAAIAAAAIAMAAIAAAAIAAABIgCAAIAAABgAAtABIAAgBIACAAIAAABgAAvgBIAAgCIABAAIAAACgAgMgMIACAAIAAABIgCAAgAgjgRIABgBIABAAIAAABg");
	this.shape_22.setTransform(4.9,5.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#040404").s().p("AAEAPIAAgBIABAAIABgBIABAAIAAABIAAABgAgVAKIgCAAIAAgCIACAAIABABIAAABgAAWgJIAAgBIAAgCIABgBIAAgBIABAAIAAACIAAACIgBABg");
	this.shape_23.setTransform(7.2,5.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#020202").s().p("AgLANIABgBIAAgCIAAgBIAAAAIABAAIAAACIAAACgAAogCIAAgBIAAgBIAAgBIAAgCIAAgBIABAAIAAADIAAADgAgogJIAAgCIABAAIAAACgAgOgLIAAgBIACAAIAAABg");
	this.shape_24.setTransform(5.4,4.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B2B2B").s().p("AAAADIAAAAIAAgBIAAAAIAAAAIABABgAAAgBIAAgCIAAAAIAAACg");
	this.shape_25.setTransform(9.5,4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EDEDED").s().p("AgGAPIAAgBIgBAAIgBAAIAAgCIgBAAIAAgBIABAAIAAgBIgBAAIAAgEIACAAIAAgEIAAAAIABgCIABAAIAAgGIABABIAAgBIABAAIAAABIAAAAIAAABIAAABIAAACIABAAIABABIgBABIAAAAIAAACIABAAIAAABIgBAAIAAAEIgBAAIAAACIAAAAIABABIgBAAIAAACIgCAAIAAACgAAAgFIAAgBIgBAAIAAAAIABgCIgBgBIAAAAIAAgCIgBgCIAAgBIACAAIAAAAIADABIAAgBIABAAIAAABIAGAAIAAABIAAABIAAABIAAACIgBACIABAAIAAABIgKgBIAAgBIAAAAIAAACg");
	this.shape_26.setTransform(8.4,5.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DEDEDE").s().p("AgCANIgBgDIABgFIABgBIAAgEIABAAIAAgBIAAgHIAAAAIAAgBIABAAIAAgDIACABIgBABIAAABIAAAAIAAABIACAAIgBACIgBAAIAAABIgBgBIAAAGIgBAAIAAADIAAAAIAAAEIgBAAIgBADIABAAIABABIgCAAIABACg");
	this.shape_27.setTransform(7.6,5.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EFEFEF").s().p("AAKAOIgCAAIAAgBIgBAAIgBAAIAAgBIAAgBIABAAIAAgEIACAAIAAgBIgCAAIAAgCIACAAIAAgEIACAAIgBgCIACABIAAgBIABAAIAAABIAAABIAAAAIABAAIgBACIAAACIAAABIAAAAIgBAEIgBAAIAAABIgBgBIgBACIACAAIAAADgAAAAIIAAgBIAAAAIgBAAIgBAAIgBAAIgDAAIAAgBIgBAAIgBgBIgBAAIAAgCIAAAAIAAgCIgBAAIAAgBIAAAAIAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIgBAAIAAgDIABAAIAAgCIgBAAIAAgBIAAgCIACAAIABAAIACAAIABAAIAAgBIACAAIACAAIACAAIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIACAAIgBACIAAABIAAABIAAABIACAAIgBABIAAABIAAACg");
	this.shape_28.setTransform(3.9,5.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8C8C8C").s().p("AAAAFIAAAAIAAABIAAABgAgYAAIAAAAIgBAAIAAAAIABAAIAAgCIAAAAIABgBIABAAIABAAIAAgBIACAAIABAAIAAgBIACAAIABAAIAAgBIABAAIAAABIABAAIAAAEIAAABIABAAIAAAAgAAZgCIABAAIAAABIgBABg");
	this.shape_29.setTransform(2.6,4.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2E2E2").s().p("AgCALIAAgBIAAgHIABAAIAAgBIABgEIAAAAIAAgBIAAAAIAAgFIACgBIAAgBIABABIAAABIAAABIgBACIABgBIAAADIgBAAIAAABIgBgBIAAADIgBAAIAAADIAAAAIAAACIAAAAIAAABIAAAAIAAAEIgBAAIAAABg");
	this.shape_30.setTransform(4.8,5.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BCBCBC").s().p("AgHAMIABAAIAAABIgBABgAgMAIIAAgBIABgBIAAACgAAJAAIAAgEIABABIAAgGIABAAIAAABIAAACIAAABIABABIAAABIgBgBIAAABIgBABIAAACgAAAAAIAAAAIABAAIAAAAgAgNgKIAAgBIABABIAAABgAAMgLIAAgBIACAAIAAABg");
	this.shape_31.setTransform(3.9,4.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#141414").s().p("AgDAFIAAgBIAAgCIAAgBIgBgBIAAAAIAAgBIAAAAIgBAAIAAgDIgBAAIAAgBIABAAIABAAIAAABIAAACIABAAIAAABIACAAIACAAIAFAAIgBgBIABAAIAAABIABABIgIgBIgCABIAAAAIABAAIAAADIAAABIAAABIAAABIgBAAg");
	this.shape_32.setTransform(5.6,3.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B1B1B1").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_33.setTransform(7.6,4.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1C1C1C").s().p("AALAOIgBAAIAAgBIgCAAIAAgCIAAAAIAAgCIgBAAIAAgBIgDgBIgEABIgEgBIgBAAIAAABIgBAAIAAABIAAACIgCAAIAAABIgBAAIAAABIgCAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIAAgBIACAAIAAgCIAAgBIAAgBIAAgBIgCAAIAAgCIAAAAIAAgBIgBAAIABgBIAAgDIAAAAIgBAAIAAgCIAAgDIAAAAIAAgBIABAAIAAABIAAAAIAAACIAAABIACAAIAAACIAAABIAAACIABAAIgBABIAAABIABAAIAAAAIAAAAIAKACIAAgCIAAgDIAAgCIAAgBIAAgDIAAgBIAAgBIgBAAIAAgBIABAAIAAAAIAAACIAAACIAAABIACAAIgBACIAAACIAAABIACAAIgBACIAAACIABAAIAAABIAAAFIABAAIABADIABAAIAAACIABAAIAAABgAADAFIAAACIADAAIAAgCIgKgBIAAABIAFAAIAAACIAAAAIABgCg");
	this.shape_34.setTransform(6.3,5.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EAEAEA").s().p("AABAFIAAgCIgBAAIAAACIAAgBIAAgBIgCAAIABABIgCAAIgBgBIAAgBIABgBIgCAAIAAgBIAAAAIAAAAIAAgBIgBAAIAAgDIADAAIAAACIABAAIAAgCIACABIAAABIACAAIAAgBIAEAAIgBABIABABIABAAIAAABIAAAAIAAABIAAABIAAADg");
	this.shape_35.setTransform(6,4.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8F8F8F").s().p("AguAIIAAgCIABAAIAAACgAAWABIAAgBIACAAIAAABgAAtgEIgBgBIACAAIAAgCIABAAIAAACIgBAAIAAABg");
	this.shape_36.setTransform(4.5,4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C2C2C2").s().p("AgRAWIAAgBIABAAIAAABgAAOgMIAAgBIAEAAIABABgAAAgUIAAgBIABAAIAAABg");
	this.shape_37.setTransform(7.1,4.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B3B3B3").s().p("AAOAVIAAgBIABAAIAAABgAgMAAIABAAIgBgBIABgCIgCAAIAAgDIAAgBIABAAIAAgBIgCgBIAAgBIABgCIAAgBIgBAAIAAgDIABAAIAAgCIABAAIAAgBIAAgBIABABIAAgBIABAAIACAAIAAABIABAAIAAAAIABAAIAAACIABAAIAAABIgCAAIAAABIABAAIAAABIgBAAIgBADIgBABIABAFIgCAAIgBAFg");
	this.shape_38.setTransform(8.3,5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#282828").s().p("AAAAKIAAgBIAAAAIAAAAIAAgBIABAAIAAACgAAAgIIAAgBIABABIgBABg");
	this.shape_39.setTransform(9.6,4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DCDCDC").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_40.setTransform(9.6,2.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AFAFAF").s().p("AAXAWIAAgBIAAAAIABABgAAXAGIAAgCIABAAIAAACgAgugFIABAAIAAABIgBAAgAAugUIAAgBIABAAIAAABg");
	this.shape_41.setTransform(5.1,4.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DBDBDB").s().p("AglASIAAgCIABAAIAAACgAgfgKIAAgCIABAAIAAACgAAlgNIAAgBIABAAIAAABgAAMgPIAAgBIABAAIAAABg");
	this.shape_42.setTransform(5.5,4.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#151515").s().p("AAAAHIABgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIgBAAIAAgBIABAAIABgBIAAABIAAAAIAAACIAAAAIAAAAIABABIAAACIADAAIgBAAIgBAAIAAAAIAAACIAAADIAAACg");
	this.shape_43.setTransform(7.8,3.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5F5F5F").s().p("AATANIgBgBIACAAIAAABgAANgLIAAgCIABAAIAAACgAgTgLIAAgBIABAAIAAABg");
	this.shape_44.setTransform(6.3,4.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CACACA").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_45.setTransform(15.6,8.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B5B5B5").s().p("AA+AaIAAgBIABAAIAAABgAg3AIIAAgCIABAAIAAACgAg+AGIAAgBIABAAIAAABgAgoAFIAAgCIABAAIAAACgAg+gNIAAgBIABAAIAAACgAgNgOIAAgBIAGAAIACAAIAAgBIABAAIAAABIABAAIAAgBIADAAIAAABIAAABgAgZgXIABgCIABAAIgBACg");
	this.shape_46.setTransform(9.4,5.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CECECE").s().p("AA3ALIAAgBIACABIAAABgAgWAAIAAAAIABAAIAAAAgAg2gBIgBgBIAAAAIABAAIgBgDIgBAAIABgCIAAABIABgCIABAAIAAgDIABAAIABAAIAAABIAAABIAAABIAAACIABAAIAAACIgBAAIAAABIgBAAIgBABIgBAAIABABg");
	this.shape_47.setTransform(10.6,7.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#575757").s().p("ABKARIAAAAIABABIgBABgAgSgLIAAgDIABABIAAACgAhKgPIAAgCIABAAIAAACg");
	this.shape_48.setTransform(8.7,6.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9B9B9B").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(15.9,7.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9F9F9F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_50.setTransform(16.4,8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#727272").s().p("ABNATIAAgDIABABIAAACgAgdADIAAgBIgBAAIAAgCIABAAIABAAIABAAIAAAAIACAAIAAAAIAGAAIAAABIABAAIABgBIABAAIgBAEgAhNACIAAgBIABAAIAAABgAgGgBIABgBIABgBIAAACgAhIgRIAAgBIACAAIgBABg");
	this.shape_51.setTransform(8.6,5.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#AAAAAA").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_52.setTransform(15.5,7.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#949494").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_53.setTransform(16.4,6.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D1D1D1").s().p("AA6AXIgBgBIABAAIAAABgAg5gVIAAgBIABAAIAAABg");
	this.shape_54.setTransform(10.8,5.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#515151").s().p("AA5APIABgBIABgBIgBACgABFANIAAgCIABAAIAAACgAA4AFIAAgCIABAAIAAABIAAABgAg+AAIAAgBIABAAIgBABgAhFgDIAAgBIABAAIAAABgAgqgNIAAgBIABAAIAAABg");
	this.shape_55.setTransform(9.7,6.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#010101").s().p("ABeAYIAAgBIAAgBIACAAIAAABIgBABgAgOAQIAAgBIAAAAIAAABgAhEAGIAAgBIABABIAAAAgAhfgEIAAgCIABAAIAAACgAgPgGIAAgBIABgCIAAgBIAAAAIAAABIAAACIAAABgAg5gQIAAgBIAAgBIgCAAIAAgBIABAAIABAAIABAAIAAABIABABIgBABgAhOgWIAAAAIABAAIABgBIAAABIgBABgAhQgWIAAgBIABAAIAAABg");
	this.shape_56.setTransform(9.6,5.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#9C9C9C").s().p("AgMAAIAAAAIABAAIAAAAgAAMAAIABAAIABAAIgBAAg");
	this.shape_57.setTransform(16.9,8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C6C6C6").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_58.setTransform(18,7.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#8E8E8E").s().p("ABIAVIgIAAIAAgDIAMABIAAABIABAAIAAABgAhLAHIAAgCIACABIAAABgAgwgDIAAgCIABABIAAABgAgigEIAAgBIABAAIgBABgAhMgNIAAgBIAAAAIABABgAgagTIAAgCIABABIAAABg");
	this.shape_59.setTransform(10.3,5.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#707070").s().p("AA2AMIABgGIADAAIAAgBIABAAIAAABIAJAAIAAADIgMgBIAAAEgABFAGIAAgCIABABIAAACgAhGgJIAAgCIACAAIAAACg");
	this.shape_60.setTransform(11.1,6.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#ADADAD").s().p("ABGAWIAAgBIABAAIAAABgAgkAOIABgCIADAAIgBACgAg2AAIAAAAIgHAAIAAAAIgBAAIAAAAIgBAAIgBAAIgBAAIABAAIAAgBIAAgBIgBAAIAAgCIACgBIgBAAIACgBIAAABIACABIAAgBIABAAIAAABIAGAAIAAgCIAAAAIAAADIAAACIAAABgAhGgUIAAgBIABAAIAAABg");
	this.shape_61.setTransform(12.2,5.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#919191").s().p("ABYAMIAAgBIABAAIAAACgAAJAGIAAgBIABAAIAAABgAhYgKIAAgBIABAAIAAABg");
	this.shape_62.setTransform(10.1,6.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0C0C0C").s().p("AA1AQIAAgBIAAgBIABAAIAAgBIABAAIAAABIAAABIgBAAIAAABgAg0gMIgCAAIAAgBIACAAIAAgBIABAAIABgBIABABIAAABIgBAAIgBAAIAAABg");
	this.shape_63.setTransform(5.6,5.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4D4D4D").s().p("AApAVIAAgBIACAAIAAABgAAEAPIAAgCIABABIAAABgAgqgKIAAgBIACAAIAAABgAgPgQIABAAIAAAAIgBABgAABgTIAAgBIABAAIAAABg");
	this.shape_64.setTransform(6.6,5.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2E2E2E").s().p("AAQAQIACAAIAAABIgCABgAgQgPIgBAAIAAgBIABAAIABgBIABAAIgBACg");
	this.shape_65.setTransform(8.4,5.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CCCCCC").s().p("AA2AHIAAgBIABAAIAAABgAg2gFIAAgBIABABIAAABg");
	this.shape_66.setTransform(7,6.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#959595").s().p("AAzAEIAAgBIABAAIAAABgAgzgCIAAgBIACAAIAAABg");
	this.shape_67.setTransform(7.4,6.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#747474").s().p("ABHATIAAgCIABABIAAABgAAsAPIAAgBIABgBIAAACgAhIgMIAAgCIACABIAAABgAgSgPIAAgCIACAAIgBACg");
	this.shape_68.setTransform(8.8,6.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#797979").s().p("AAqARIAAAAIABAAIAAAAgAgHALIABgBIAEAAIAAABgAgOAAIAAAAIABAAIABAAgAgqgMIAAgBIABAAIAAABgAgdgPIABgBIABAAIAAABg");
	this.shape_69.setTransform(9.6,5.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#999999").s().p("AATASIABAAIAAAAIgBABgAgTgRIAAgBIAAAAIABABg");
	this.shape_70.setTransform(11.4,5.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#ACACAC").s().p("AA0ARIAAgBIABAAIAAABgAg0gKIAAgBIABAAIAAABgAgogPIAAgBIABAAIAAABg");
	this.shape_71.setTransform(7.9,5.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#606060").s().p("ABBAJIAAgCIABAAIAAACgAAhADIAAgBIABABIAAABgAgKgFIABgBIAAAAIAAABgABDgFIAAgCIABAAIAAACgAhDgHIAAAAIABAAIAAAAg");
	this.shape_72.setTransform(9.6,7.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B8B8B8").s().p("AAnATIAAgBIACAAIgBACgAAsAPIAEAAIAAABIgEAAgAgYAOIAAgBIABAAIAAABgAgvANIAAgBIABAAIAAABgAgTgLIABgIIABAAIgBABIAAADIACABIAAABIgCgBIAAADgAgdgOIgBgCIABAAIAAACg");
	this.shape_73.setTransform(9.7,5.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#8A8A8A").s().p("ABZAUIABgBIgBgEIADAAIAAAFgAApAPIAAgBIgGAAIAAgCIABAAIAAABIALAAIgBACIAAABgAg1gNIAAgBIABAAIAAACgAhbgTIAAAAIABAAIAAAAg");
	this.shape_74.setTransform(10.5,5.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3A3A3A").s().p("AAsAVIgBAAIAAgBIADAAIAAABgAAvAUIAAgBIACAAIABABgABEAMIgBgBIABAAIAAABgAANAIIABgBIABAAIgBABgAhDABIAAgBIABAAIAAABgAgZgTIAAgBIABABIAAABg");
	this.shape_75.setTransform(6.8,4.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6A6A6A").s().p("ABGAWIAAgBIABAAIAAABgAAxANIABgFIABAAIAAAAIABAAIAAAAIACgBIAAABIAEABIAAgBIADAAIAAABIACAAIAAACIgLAAIAAgCIgBABIAAACIAFAAIAAABgAhGAFIAAgCIAAAAIABACgAAuAAIAAgBIABAAIAAABgAgVgUIAAgBIACAAIAAABg");
	this.shape_76.setTransform(8.9,5.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#676767").s().p("AA+AOIAAgBIABAAIAAABgAg+gCIAAgBIABAAIAAABgAgigMIAAgBIACAAIAAABg");
	this.shape_77.setTransform(7.6,4.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FDFDFD").s().p("AAAAFIAAgBIAAAAIAAABgAAAABIAAgBIABAAIgBABgAABgBIAAgBIgBgCIABAAIAAADg");
	this.shape_78.setTransform(13,6.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#595959").s().p("AgrAOIAAgCIABAAIAAACgAA/AIIAAgBIABAAIAAABgAgygGIAAgBIABAAIgBABgAg+gGIAAgBIABAAIAAABgAAEgMIAAgBIABAAIAAACg");
	this.shape_79.setTransform(7.4,4.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#979797").s().p("Ag7ADIAAgBIABABIAAABgAA7gCIAAgBIABAAIAAABg");
	this.shape_80.setTransform(7.5,5.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FEFEFE").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAABg");
	this.shape_81.setTransform(13.4,5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E3E3E3").s().p("AAAAPIAAAAIAAgBIAAAAIgBAAIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIgBAAIAAgEIABgBIABABIAAgBIgBgFIAAgBIACAAIAAgBIAAgBIABAAIAAgGIAAAAIAAgEIACAAIAAACIgBABIgBACIACAAIABAAIAAAEIAAABIAAABIAAABIABAAIgBACIABAAIAAADIAAABIABAAIgBACIAAABIAAABIAAADIAAABIgBAAIAAABIgBAAIAAABIAAABgAgCAGIACABIAAgDIgBAAgAAAACIAAABIAAAAIAAgDIAAAAg");
	this.shape_82.setTransform(13.2,6.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#7F7F7F").s().p("ABSAXIAAgCIACABIAAABgAgUgIIAAgCIABAAIAAACgAhTgLIAAgBIABAAIAAABgAAggUIAAgBIADAAIAFAAIAAgBIAFAAIAAABIAAACg");
	this.shape_83.setTransform(10.2,5.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4C4C4C").s().p("ABKAVIAAgCIADAAIAAACgAAxATIAAgBIACAAIAAABgAgPATIABgBIABAAIAAABgAhLAJIgBgBIABAAIAAABgAAegHIAAgCIABAAIAAACgAhDgJIAAgBIABAAIAAABgAAcgRIAAgBIAAgBIABAAIAAACg");
	this.shape_84.setTransform(12,5.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C1C1C1").s().p("AA7AYIAAgBIAAgCIABAAIAAACIAAABgAg7ABIAAgBIACAAIAAABgAAqgXIADAAIAAABIgDAAg");
	this.shape_85.setTransform(10.1,5.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#343434").s().p("AAZARIAAgCIABgBIAAADgAgZgOIAAgCIABAAIAAACg");
	this.shape_86.setTransform(10,4.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#080808").s().p("AArAMIgCAAIAAgBIAAgBIAAgBIgBAAIgEAAIAAAAIgFgBIAAgBIADAAIAGABIAAgEIAAgCIgBAAIAAgBIAAgBIAAgEIgBAAIAAgCIAAgBIAAgBIAAgBIABAAIAAACIAAACIACAAIgBAFIAAAAIACAAIAAADIgCACIACAAIAAAEIABABIAAABIAAAAIABABgAgrgGIABgCIAAgBIAAgCIABABIAAACIAAADg");
	this.shape_87.setTransform(8.5,6.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#898989").s().p("AAQARIgBgBIACAAIAAABgAApAAIAAAAIABAAIAAAAgAgngKIAAgBIABAAIAAABgAgogOIgBgCIACAAIAAACg");
	this.shape_88.setTransform(8.1,5.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#232323").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIABAAIgBAAIAAABg");
	this.shape_89.setTransform(12.4,5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4A4A4A").s().p("ABEAWIAAgBIACABIAAABgAA+AUIAGAAIAAABIgGABgABDATIAAgCIABAAIAAACgAgBAOIABAAIAAADIgBABgAg+AQIABgBIABABIAAABgAALgDIAAgCIACAAIAAACgAg2gRIAAgBIAFABIABABgAhFgUIABgCIABABIAAABg");
	this.shape_90.setTransform(11.2,5.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3F3F3F").s().p("AAKAEIAAgBIABAAIAAABgAAnAAIAAgCIAEAAIAAABIABAAIAAgBIABAAIAAACgAgrgBIAAgCIABAAIAAACg");
	this.shape_91.setTransform(15.4,6.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#646464").s().p("AgSAEIAAgBIABAAIAAABgAgvABIAAgBIABAAIAAABgAgmAAIAAgBIACAAIAAABgAAkgBIAAgCIgBAAIAAgBIANABIAAADg");
	this.shape_92.setTransform(7.5,6.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#868686").s().p("AgBAPIAAgCIgBAAIABgEIAAgBIgCAAIAAgCIABAAIABgGIABAAIgBgEIABgBIAAgCIAAAAIAAgCIAAAAIAAgBIABAAIAAgBIACAAIgBABIAAABIACABIAAACIgBAAIgBAGIgCAAIAAABIAAAHIAAAAIAAABIAAAGIAAABIgBAAgAAjAMIABgCIAMABIAAgBIABAAIAAACIAAABgAgwAGIABAAIABAAIAAABgAgiACIAAgBIABAAIAAABgAgcgMIABgBIAAACIgBABgAAVgOIAAgBIAAAAIABABg");
	this.shape_93.setTransform(7.4,4.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1A1A1A").s().p("AgEAIIAAgEIgBABIAAgEIAAgBIAAAAIgBAAIAAgEIABgCIgBAAIAAgBIABAAIABAAIgBACIAAABIAAACIABAAIAAACIAMAAIAAAAIgLAAIAAAAIgBAAIAAABIABAAIAAACIAAACIADAAIAAABIAAABIAAAAIAAgBIgDAAIAAABIAAABg");
	this.shape_94.setTransform(11.6,6.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4F4F4F").s().p("AAoALIgBgCIABAAIABACgAgoAIIAAgBIABAAIAAABgAgZgGIAAgBIABAAIAAABgAAegJIAAgBIABAAIAAABg");
	this.shape_95.setTransform(6.7,4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#AEAEAE").s().p("ABBARIABgBIACAAIgBABgABIAEIAAgCIABAAIAAACgAhIADIAAgBIABAAIAAABgAgIgPIAAgBIABAAIAAABg");
	this.shape_96.setTransform(11.8,6.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0A0A0A").s().p("AgnAJIAAgBIAAgBIAAgBIAAgCIgBAAIAAAAIAAgCIAAgBIAAgBIABAAIAAABIAAACIAAABIABgBIAAACIAAACIABAAIABAAIABAAIADAAIAAABIgBAAIgCgBIgCABIgBAAIgBABgAAoAAIgBgCIgBAAIABgDIAAgBIAAgCIABAAIAAACIAAABIAAACIAAAAIABAAIgBADIAAAAIABACIgBAAg");
	this.shape_97.setTransform(6.8,5.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#616161").s().p("AgYARIAAgBIABAAIAAACgAgBACIAAgBIABAAIAAABgAAyABIAAgBIgBAAIABAAIAAAAIABABgAAigIIABgBIABAAIAAABgAgygPIAAgCIABAAIAAACg");
	this.shape_98.setTransform(7.2,5.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2D2D2D").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_99.setTransform(10.5,3.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D0D0D0").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_100.setTransform(10.7,3.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B4B4B4").s().p("AAvAYIAAgBIABAAIAAABgAAoAQIgBgBIABAAIABABgAgsgFIAAgBIAAgBIAAgBIgBAAIABgDIAAgBIAAAAIgBAAIAAgDIAAgBIAAgBIgCAAIAAgBIABgBIABAAIAAgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIABAAIAAABIABAAIAAABIABAAIAAADIgBAAIAAADIgBAAIAAAEIgBAAIgBAGgAAigHIAAgBIABAAIAAABgAgFgIIAAgBIABAAIAAABg");
	this.shape_101.setTransform(8.7,5.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7C7C7C").s().p("AArAOIAAgBIAEAAIAAABgAgugGIAAgBIABAAIAAABgAATgMIAAgBIABAAIAAABg");
	this.shape_102.setTransform(10.2,5.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#050505").s().p("AA8AKIAAgCIAAgBIAAgCIAAgBIACAAIgBADIAAABIAAACgAg9AGIAAgBIABAAIAAABgAgdAAIgBAAIgBAAIgBAAIAAgBIACAAIABAAIACAAIAAABgAAfgBIAAgBIgDAAIgBAAIgBAAIgDAAIgEAAIAAgBIAEAAIAFAAIACAAIABAAIAAgBIAAgCIAAgBIABAAIABgBIABAAIgBABIAAABIgBAAIAAABIAAABIAAACIAAABgAgvgEIAAgBIABAAIAAABgAgQgIIgBAAIAAgBIABAAIABAAIAAABg");
	this.shape_103.setTransform(6.2,3.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#454545").s().p("AAhANIAAgBIABAAIAAACgAAhAEIABgCIABABIAAABgAASgKIAAgCIABABIAAgCIABABIAAACIgBAAIAAABgAgigLIAAgBIABAAIAAABg");
	this.shape_104.setTransform(10.3,5.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D2D2D2").s().p("AAjAEIACAAIABAAIAAAAIgDABgAA/gCIABgBIABAAIgBABgAhAgEIABABIAAAAIgBABg");
	this.shape_105.setTransform(8.3,3.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#070707").s().p("AgkAIIAAgBIAAgBIAAgBIABAAIAAABIAAABIAAABgAgJADIAAgCIAAgBIAAAAIABAAIAAAAIAAABIAAABIAAABgAAcACIAAgCIABAAIAAgDIgBAAIgBgCIAAgBIAAgCIABAAIABACIAAABIgBABIACAAIACAAIAEAAIABAAIAAABIgHAAIAAADIgBABIAAABgAgKgBIAAgBIAAgBIgDAAIAAgBIACAAIABAAIAAgBIAAgBIAAgCIABAAIAAACIAAADIAAABIAAABg");
	this.shape_106.setTransform(7.7,4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#030303").s().p("Ag9AJIAAgCIAAgCIABAAIAAACIAAABIAAABgAA8ACIAAgBIAAgBIABAAIAAAAIAAAAIABAAIgBABIAAACgAgsgGIAAgCIABABIAAABg");
	this.shape_107.setTransform(6.1,3.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2A2A2A").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIABAAIgBABg");
	this.shape_108.setTransform(12.2,3.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#A5A5A5").s().p("AAoAVIAAgBIABAAIAAACgAgMgKIAAgBIABAAIAAABgAgogPIAAgGIAHABIABAAIAFgBIAAACIAAABIAAABIgCAAIAAgBIgEAAIABABIgBAAIAAgBIgCgBIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAgBIgBAAIAAADg");
	this.shape_109.setTransform(14.9,5.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#5B5B5B").s().p("Ag6APIAAAAIACgBIAAACgAA5gDIABgCIAAAAIAAABIAAABgAglgGIABgBIABAAIAAABgAgNgIIAAgBIADAAIAAABgAAsgJIAAgCIACABIAAABgAgKgOIAAgBIABAAIAAABg");
	this.shape_110.setTransform(7.7,4.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DDDDDD").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_111.setTransform(12,3.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#888888").s().p("AAXADIAAgBIACAAIAAACgAgXgCIgBgBIACAAIAAABg");
	this.shape_112.setTransform(9.8,3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1D1D1D").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_113.setTransform(12.2,3.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#8B8B8B").s().p("AATAWIAAgBIAAAAIABABgAgTgVIABAAIAAABIgBAAg");
	this.shape_114.setTransform(14.5,5.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#838383").s().p("AgyAVIAAgCIABAAIAAACgAAfASIgBAAIAAgDIAAgDIgCABIABgFIAAgCIgCAAIABgCIAAgBIABAAIAAgCIABAAIAAgEIABAAIABgGIABAAIAAgFIABAAIAAgCIABABIAAACIABAAIAAADIAAABIABABIAAACIgCAAIAAAGIgCAAIAAAIIAAABIgBAAIgBACIAAABIABAGgAAygMIAAgBIABAAIAAABgAAcgSIgBgBIACAAIAAABg");
	this.shape_115.setTransform(9.6,4.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#424242").s().p("ABOAbIAAgBIABABIAAABgABDASIAAgBIACAAIAAABgAg4AAIABAAIABAAIgBAAgAhEAAIAAgBIACABIgBAAgAhOgKIAAgBIABAAIAAABgAhHgPIAAgBIAAAAIAAABgAApgaIAAgBIABAAIAAABg");
	this.shape_116.setTransform(8.4,5.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#5A5A5A").s().p("AAwATIAAgCIABAAIAAACgAAVASIAAgFIABAAIgBAFgAAEANIgBgBIABAAIAAABgAgxABIAAgBIABAAIAAABgAgygBIAAAAIABAAIAAAAgAAygRIAAgBIABAAIAAABg");
	this.shape_117.setTransform(5,4.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#555555").s().p("AAsAVIAAgBIACAAIgBABgAgzgFIAAgBIABAAIAAABgAgtgHIAAgBIABAAIAAABgAgdgJIAAgCIABAAIAAADgAgFgSIAAgBIABAAIAAABgAAygSIAAgCIACAAIgBACg");
	this.shape_118.setTransform(5.5,5.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#777777").s().p("AA4AXIAAgBIACAAIAAABgAg5ACIABAAIAAABIgBABgAgFgWIAAgBIABABIAAABg");
	this.shape_119.setTransform(11.1,5.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2F2F2F").s().p("AARAAIABAAIAAAAIAAAAgAgRAAIAAAAIABAAIAAAAg");
	this.shape_120.setTransform(8.6,3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#909090").s().p("AAvAYIAAgBIgBAAIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgEIAAAAIAAgDIgBAAIAAgDIAAgCIgBAAIABgFIAAgCIgBAAIAAgBIAAgCIAAgBIgBAAIAAgDIAAgBIAAgCIgBgBIAAgDIAAgBIAAgCIgBAAIAAgBIABAAIAAgBIAAgBIABAAIABgBIABAAIAAgBIAAAAIAAgBIACAAIAAABIABAAIAAABIABAAIACAAIgBABIABAAIAAABIAAABIABABIAAADIAAACIAAABIABAAIAAADIAAADIAAABIABAAIgBADIABAAIABAAIAAAEIAAABIgBACIABAAIAAADIAAACIAAABIABAAIAAAEIAAADIAAABIgBAAIAAABIgBAAIAAABIAAACgAgTAMIAAgBIACAAIAAABgAAyABIAAgBIABAAIAAAAIAAACgAgPgDIAAgBIABABIAAABgAgygJIAAgBIABAAIAAACgAALgXIAAgBIACABIgBABg");
	this.shape_121.setTransform(5.8,5.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#161616").s().p("AAAABIAAAAIAAAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIABABg");
	this.shape_122.setTransform(10.3,2.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CBCBCB").s().p("AAlAYIABgBIABAAIAAABgAgzAIIAAgBIABAAIAAABgAg+ACIAAgBIABAAIAAABgAgQgJIAAgBIABAAIAAABgAA+gWIAAgBIABAAIAAABg");
	this.shape_123.setTransform(7,5.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("ABXAaIAAgCIABABIAAABgAA1AYIAAgBIABAAIAAABgAhXgFIABAAIAAABIgBAAgAAcgYIAAgBIACABIgBABg");
	this.shape_124.setTransform(10.2,5.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B2B2B2").s().p("Ag2ARIAAgBIABAAIAAABgAAxAFIAAgBIAAgDIAAgBIgBABIAAgBIAAgCIABgBIgCAAIAAgCIAAgCIAAgCIAAgCIAAgBIABABIABgCIABAAIgBgBIABgBIABAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAAFIgBAAIgBAGIgBAAIAAAFIgBAAIAAABg");
	this.shape_125.setTransform(7.5,4.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#DADADA").s().p("AA3AXIAAAAIAAAAIAAAAgAg8AGIAAgBIAAAAIAAABgAA9gVIAAgBIABAAIAAABg");
	this.shape_126.setTransform(6.6,4.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#A4A4A4").s().p("AAsAUIAAgBIABAAIAAABgAgsAEIAAgBIABAAIAAABgAALgQIAAgBIABAAIAAABgAAjgSIAAgBIABAAIAAABg");
	this.shape_127.setTransform(9.2,4.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#434343").s().p("ABIAYIAAgCIABABIAAABgAAAAPIAAgBIAAABIAAAAgAhIgMIAAgBIAAgBIABAAIAAABIABAAIAAABgAAdgWIAAgBIABAAIAAABg");
	this.shape_128.setTransform(10,5.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6F6F6F").s().p("AgQAXIABAAIAAAAIgCABgAAQAAIABAAIABAAIAAAAgAALgWIAAgBIABAAIAAABg");
	this.shape_129.setTransform(11.8,5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#626262").s().p("ABBAUIAAgBIABAAIAAABgABHAPIABgBIABAAIAAABgABNAAIAAAAIgEAAIAAgBIAGAAIAAABIgBAAIAAAAgAhOgSIAAgBIABAAIAAABg");
	this.shape_130.setTransform(12,6.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#636363").s().p("AgHAUIAAgBIABgBIAAACgAg/ALIAAgBIACAAIAAABgABVAIIACAAIAAABIgCAAgAgmgCIAAgCIABAAIABACgAhOgKIgBgBIACAAIAAABgAhWgQIAAgBIABAAIAAABgAhBgRIAAgBIABAAIAAABgAAXgSIAAgBIACAAIAAABg");
	this.shape_131.setTransform(10.6,5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#878787").s().p("ABIAOIAAgBIABAAIAAABgAhMgHIAAgCIABAAIAAACgABMgKIAAgDIABAAIAAADg");
	this.shape_132.setTransform(11.4,7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#969696").s().p("ABGAOIABgBIAAgBIgCAAIAAgEIABAAIAAABIADABIAAgCIABAAIAAACIACAAIAAAEgAgnAFIAAgBIABAAIAAABgAgqAFIAAgBIABAAIAAABgAAAgFIAAgBIAAAAIAAABgAhLgMIAAgBIABAAIAAABg");
	this.shape_133.setTransform(12.3,4.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#A6A6A6").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_134.setTransform(19.2,5.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0B0B0B").s().p("AAhAbIAAgCIgBABIgBAAIgBgBIgBAAIAAgBIgBAAIAAgDIABABIACAAIAAACIABAAIAAABIABAAIABgBIAAAAIABgBIAAABIAAACIgBgBIAAACgAACAWIgBgBIAAgBIgBAAIAAAAIABgBIABABIAAABIACAAIgBABgAhMAMIABgBIgCAAIgBAAIAAgBIABAAIACAAIABAAIABAAIAAACIgBgBIAAABgABZABIAAgBIAAAAIAAgBIAAgCIAAgBIABAAIAAADIAAABIAAAAIAAABgAhJAAIABAAIAAAAIAAgBIAAgBIAAABIABABIgBAAgAAUgPIAAgBIAAgBIgCAAIAAgBIABAAIABAAIAAgBIABAAIAAACIAAABIABABgAhZgPIgBgCIACABIABAAIAAAAIgBAAIAAABgAAxgVIAAgBIABAAIAAgCIABAAIAAACIAAABIgBAAIAAAAIAAABgAgegWIAAgBIAAgBIABAAIAAgBIABABIABgBIAAAAIABAAIAAABIgBAAIAAABIgBAAIAAABIgBgBIAAABg");
	this.shape_135.setTransform(10,5.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgCAMIAAgBIABAAIAAABgAgBALIAAgBIABAAIAAABgAgBALgAgCAKIAAgBIACAAIgBABgAAAADIAAgBIAAAAIAAABgAAAgHIAAgBIABAAIAAABgAABgJIABgCIABAAIAAACg");
	this.shape_136.setTransform(18.7,6.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#737373").s().p("AAfAVIAAgBIABAAIAAABgAgXAQIAAgCIABAAIAAACgAgdALIABAAIAAAAIgBABgAhHAFIAAgCIACAAIgBACgABOAEIAAgCIACAAIgBACgAgWgPIAAgCIABABIABACgAhPgTIAAgBIABAAIAAABg");
	this.shape_137.setTransform(10.1,5.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#3B3B3B").s().p("AhHAPIAAgBIABAAIAAABgABHADIAAgBIABAAIAAABgAg9gNIAAgBIABAAIAAABg");
	this.shape_138.setTransform(10.7,4.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#444444").s().p("AAxARIAAgBIABAAIAAABgAhRgCIAAgBIACAAIgBACgABEgGIABAAIAAABIAAABgABQgOIAAgCIABAAIABAAIAAABIgBAAIAAABgAAagOIAAgBIABAAIAAABgAAbgPIAAAAIABgBIAAABg");
	this.shape_139.setTransform(10.9,6.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#858585").s().p("AAXALIAAgBIABAAIgBABgAgkAEIAAgBIADABIAAABgAhTADIgBgBIACAAIAAABgAgTgDIAAgBIgCAAIABgBIAAgBIABAAIABAAIAKAAIgBgBIACAAIgBAEIAAABgAg/gDIAAgBIACAAIAAABgABKgGIAAgBIACAAIgBABgABUgJIAAgCIABAAIAAACg");
	this.shape_140.setTransform(10.5,6.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E5E5E5").s().p("AAkAVIAAgBIgBAAIAAgBIgBgBIABgBIgCAAIAAABIAAgBIAAAAIAAgBIACAAIAAgBIgCAAIABgBIgBAAIAAABIAAAAIAAABIAAAAIAAABIgBAAIAAgBIAAgBIAAgBIAAgGIABAAIAAgHIABAAIAAgEIABAAIABgGIABAAIAAgEIABAAIAAABIAAACIAAABIAAABIABAAIAAACIgBAAIgBACIACAAIAAABIAAACIAAABIABgBIAAABIAAABIAAADIAAACIABAAIAAACIAAACIAAADIABAAIAAACIgBAAIAAABIgBABIgBgBIAAABIAAACIgBAAIAAABIAAABgAAiAIIABAAIAAgBIgBAAgAAkgCIABAAIAAgBIgBAAgAAhAPgAglgHIAAgBIgBgBIAAABIgBAAIAAgBIgBAAIABgCIAAgBIAAgBIAAgBIgBAAIAAgCIAAgCIAAgBIAAAAIABgBIABABIAAAAIABAAIAAAAIACAAIAAABIABAAIAAgBIABAAIAAABIADAAIACgBIAAACIAAACIAAACIAAABIABAAIAAACIAAABIAAABIgBgBIAAACg");
	this.shape_141.setTransform(15.1,6.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#717171").s().p("AhFASIAAgBIABABIAAABgAA2AEIABgCIABAAIgBACgAhdAEIAAgCIABAAIAAACgAAmgBIABgDIAAAAIAAADgABdgDIAAgBIABAAIAAABgAg4gNIAAgBIABAAIAAABgAgwgQIAAgBIABAAIAAABg");
	this.shape_142.setTransform(9.5,4.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4B4B4B").s().p("AhGAMIAAgBIABAAIAAABgAgyAKIAAgCIgBAAIgBACIAAAAIAAgCIgHAAIAAgCIAMABIAAADgAgjAAIABAAIgBABIgBABgABGgKIAAgBIACAAIAAABg");
	this.shape_143.setTransform(11.8,5.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D7D7D7").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_144.setTransform(17.9,3.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7A7A7A").s().p("AA4AXIAAgBIABABIAAABgAAmAWIAAgBIABAAIAAABgAgsALIABgBIABAAIAAABgAhPACIAAgCIAAAAIgBAAIAAgBIAAgBIABAAIAAgDIACAAIgBgBIgBAAIAAAAIABgBIAAgBIABAAIAAADIAAAEIgBAAIAAADgAAmgIIABAAIAAABIgBABgABQgVIAAgCIABAAIAAACg");
	this.shape_145.setTransform(9.7,5.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D9D9D9").s().p("AA1AZIAAgBIABAAIAAACgAgWAOIAAgBIABAAIAAABgAgsgQIAAgCIgBAAIAAACIgGgBIAAgBIgBAAIAAACIgBAAIAAgEIAOAAIgBABIAAABIABAAIAAACgAArgWIAAgBIAAgCIABAAIABAAIAAABIgBAAIAAACg");
	this.shape_146.setTransform(13.4,5.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D6D6D6").s().p("ABEAYIABgCIABAAIgBACgAg9gPIAAgBIgFAAIAAABIgBAAIAAgBIgCAAIABgDIAJABIADAAIAAABIAAABIgDAAIAAABgAA+gSIAAgBIABAAIAAABgAA+gWIAAgBIABAAIAAABg");
	this.shape_147.setTransform(12.3,5.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#767676").s().p("AgmAVIAAgBIABAAIAAABgAALASIAAgBIABABIAAABgAgFAIIAAgDIABAAIAAADgAA4gMIAAgCIABAAIAAACgAg4gSIAAgCIADAAIAAACg");
	this.shape_148.setTransform(14.3,5.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B0B0B0").s().p("AgeAEIAAgBIABAAIAAABgAAegBIABgCIAAAAIAAACg");
	this.shape_149.setTransform(16.8,4.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#505050").s().p("AA8APIAAgBIACAAIAAABgAgUAMIABAAIAAACIAAAAgAgvAMIAAgBIABAAIAAABgAg+AGIAAgCIABAAIAAACgAgXgBIAAgBIABAAIAAACgABQgEIAAgBIABAAIAAABgAhQgJIABgCIABAAIgBACgAhGgNIAAgBIACAAIAAABg");
	this.shape_150.setTransform(11.9,4.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E8E8E8").s().p("AAbAHIAAgBIgCAAIAAABIgCAAIABgBIAAgDIAAAAIgBgBIAAgCIAAAAIAAgBIAAgBIABgCIAHABIAAACIABAAIgBAHIAAAAIgDAAIAAABgAgdAEIAAgBIAAgBIgBAAIAAgCIAAAAIAAAAIAAgBIgBAAIAAgEIABgBIABAAIAAABIAKABIABgCIABABIgBABIAAABIABABIAAACIABAAIAAABIAAABIgBACIgLgBIABACg");
	this.shape_151.setTransform(16.8,4.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#848484").s().p("Ag1AQIABgEIAAgDIgBABIAAgCIAAgDIgBAAIAAgCIAAgBIABAAIABgFIAAAAIAAgDIABAAIAAgDIABAAIAAgEIACAAIABAAIAAADIgBABIACgBIAAADIgBAAIgBAFIgBgBIAAAFIgBAAIAAABIgBAFIAAAAIAAABIgBAHgAhDAMIAAgBIABAAIAAABgAhcAHIAAgBIACAAIAAABgABbAAIAAAAIACgBIAAABgAAzgBIgBgBIACAAIAAABgAg/gJIgCAAIAAgBIACAAIAAABgAgrgKIAAgBIADAAIAAABgAgcgOIAAgBIABAAIAAABg");
	this.shape_152.setTransform(9.8,4.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#5E5E5E").s().p("AgMAMIAAgCIACAAIgBACgABEABIAAgBIACAAIgBABgAhFgGIAAgCIACAAIAAACgAgcgLIABAAIAAABIgBAAg");
	this.shape_153.setTransform(12.1,4.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#3E3E3E").s().p("AgEARIAAgBIAEABIAAABgAg1AIIAAgCIABgBIAAADgAhVACIAAgBIABAAIAAgBIABAAIAAACgAA0AAIAAAAIAAAAIABAAgAhbgGIAAgBIABAAIAAABgABbgJIAAgBIABAAIAAABgAAigMIABgBIABAAIAAABgAAogOIAAgBIAEAAIABABgAAkgQIABgBIACAAIAAACg");
	this.shape_154.setTransform(9.8,5.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#9A9A9A").s().p("AhIATIAAgCIABAAIAAACgAANAJIAAgBIgBgBIAAgDIAAgBIABABIALAAIAAgBIABAAIAAAFIAAACgAAKAIIAAgBIABAAIAAABgABHgGIAAgCIgBAAIAAACIgFgBIgBgCIABgCIAIABIAAACIgBAAIABACgAgDgRIAAgBIACAAIgBABg");
	this.shape_155.setTransform(12.5,4.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#C3C3C3").s().p("AAFATIAAgEIACAAIAAgJIACAAIgBAEIAAABIAAACIAAABIABAAIAAACIgBAAIAAACIgBgBIAAABIgBABgAgqAMIAAgBIAAAAIABABgAAjgRIAEABIAAgCIABAAIAAACIADAAIgBgCIABAAIAAACIABACIgIgBIAAACIgCAAg");
	this.shape_156.setTransform(15.6,5.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#404040").s().p("AAdAVIABAAIgBABIgBABgAhUAJIAAgBIABAAIAAABgAAFAHIAAgCIAMABIAAgDIAAgBIABAAIAAAGgABWAGIAAgBIABAAIAAABgAAAgOIAAgDIAAAAIAAADgAhVgRIABgBIABAAIgBABgAhXgTIAAAAIABgBIAAACgAArgTIABgCIAAgBIAAADgABTgUIAAgBIAFABIAAABg");
	this.shape_157.setTransform(10.6,5.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6C6C6C").s().p("AAgAXIAAgBIABABIAAABgAgKASIAAgBIABABIAAABgAgpgEIAAgBIABAAIAAABgAAogLIAAgEIABAAIAAABIABAAIAAgBIADABIAAAAIADAAIAAgBIACAAIAAADIgJgBIAAACgAgxgWIAAgBIABAAIAAACg");
	this.shape_158.setTransform(14.9,5.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#6B6B6B").s().p("AAKAXIABgCIABAAIAAACgAgVAPIgBgBIgCAAIgEgBIAAgBIANAAIAAADgAgfAKIAAgBIABAAIAAABgAAXAHIABgCIgBAAIAAgDIABABIAAABIALAAIgBABIACAAIAAgBIAAAAIAAADgAAtgOIAAgEIABAAIAAAEgAgugWIABABIAAAAIgBABg");
	this.shape_159.setTransform(14.2,5.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#545454").s().p("ABIAbIAAgBIABAAIAAABgAAlAAIAAgBIABAAIAAABgAgSgSIAAgCIABAAIAAACgAhIgUIAAgBIAAAAIAAABgAgIgVIAAgBIABABIAAABgAAkgZIABgBIAAAAIAAABg");
	this.shape_160.setTransform(11.4,5.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A1A1A1").s().p("AAAAKIAAgBIAAAAIAAABgAAwAEIAAgBIgLgBIAAgBIgBAAIAAgCIAMABIAAgCIABAAIAAACIAAADIAAABgAgwgIIAAgBIABAAIAAABg");
	this.shape_161.setTransform(12.8,5.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#BBBBBB").s().p("AgRAEIAAgBIABAAIAAABgAAQACIAAgCIgBAAIAAAAIADAAIAAACgAAIgCIAAgBIABAAIAAABg");
	this.shape_162.setTransform(18.1,5.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#929292").s().p("AAWAVIAAgDIABAAIAAADgAgfAUIAAgDIABAAIAAADgAgFAFIAAgBIAAAAIABABgAAegTIAAgBIABAAIAAABg");
	this.shape_163.setTransform(16.9,5.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#565656").s().p("ABUASIAAgCIABgBIAAADgAA3ADIgBgCIACAAIgBACgAgYAAIAAAAIABAAIAAAAIAAAAgAhTgQIgBgBIACAAIAAABg");
	this.shape_164.setTransform(10.8,5.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#464646").s().p("AAAAXIAAgBIAAAAIAAABgABTAUIAAgBIgCAAIABgDIAEAAIAAADIgCAAIAAABgAhVANIAAgBIABAAIAAABgAAoANIAAgDIABAAIAAADgAgEgDIAAgCIABAAIAAACgAgKgVIAAgBIABAAIAAABg");
	this.shape_165.setTransform(11.2,4.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#ABABAB").s().p("AAJAZIAAgBIABAAIAAABgAAIAFIABgCIABAAIAAACgAApAAIABgBIABAAIgBABgAgqgXIAAgBIACAAIgBABg");
	this.shape_166.setTransform(11.9,5.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#6E6E6E").s().p("AA6AVIAAgBIABAAIAAABgAg5ALIAAAAIABAAIAAAAgAA6AEIAAgCIABAAIAAACgAAGAAIAAAAIALAAIgBAAgAAfgFIAAgCIABAAIAAACgAg1gOIAAAAIACAAIAAAAgAgzgPIAAgCIAAAAIABACgAgJgRIABgCIABAAIAAACgAgagTIAAgBIABAAIAAABg");
	this.shape_167.setTransform(13.3,6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#A7A7A7").s().p("AAyAEIAAgBIABAAIAAABgAg7ABIAAgBIABAAIAAABgAA6gDIAAgBIABAAIAAABg");
	this.shape_168.setTransform(10.5,5.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#181818").s().p("AALAQIgCAAIAAgBIAAAAIgBAAIgBAAIABgBIgBAAIAAgBIgBgBIAAgCIgBAAIgFABIAAgBIAAgBIAAACIgBgBIAAgBIgCAAIgDAAIgBAAIAAABIABACIgCAAIAAABIAAABIgBAAIAAABIgCAAIAAgCIABgBIABABIAAgBIAAgCIABAAIAAgCIAAgBIAAgCIAAgBIgBAAIABgEIgBAAIABgBIgCAAIABgDIAAgCIgBgBIABgCIgCAAIAAgDIABgBIAAgCIAAgBIABAAIAAADIAAABIAAACIABAAIAAADIAAAEIABgBIgBACIABACIABAAIgBgBIALAAIAAAAIAAgEIAAgCIgBAAIAAgEIAAgCIAAgCIACAAIAAAEIgBABIAAACIABAAIAAAEIAAACIAAABIABAAIAAABIAAADIABABIgBAEIAAABIAAABIACABIAAACIABAAIAAABIABgBIgBABIABAAIAAABIACAAIAAABgAgGADIgBAFIABAAIAGAAIAAACIAFgBIAAgBIAAgBIAAgBIgBAAIABgDIAAgDIgFABIAAgBIAAAAIAAABIAAgBIAAAAIgBAAIAAAAIgDAAIAAAAIgCAAg");
	this.shape_169.setTransform(17.4,6.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#ECECEC").s().p("AAAAQIAAgCIAAABIAAgBIgBAAIgBAAIAAgBIgBAAIAAgBIAAgBIAAgCIACAAIAAgGIABAAIAAgGIAAAAIAAgEIABAAIAAgHIABgBIAAABIAAABIAAABIgBABIABAAIAAAEIABACIAAABIAAABIABAAIgBADIAAABIAAABIAAAJIgBAAIgBADIAAAAIAAACg");
	this.shape_170.setTransform(15.9,6.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#686868").s().p("Ag4AHIAAgCIABABIAAACgABPAFIABgDIABAAIgBADgAhQAFIAAgBIABAAIAAABgAgLADIAAgBIABAAIgBABgAgpgFIAAgBIACAAIAAABgAg/gFIAAgBIABAAIAAABg");
	this.shape_171.setTransform(8.1,3.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#757575").s().p("ABJAIIAAgCIABgBIAAADgAhJgGIAAgBIAAAAIAAABg");
	this.shape_172.setTransform(8.9,3.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#B9B9B9").s().p("AgeAPIAAgBIABAAIAAABgAhIADIAAgBIABAAIAAABgABPAAIABAAIAAAAIgBAAgABSgCIAAgBIAAgBIACAAIAAABIABAAIAAACgAhUgGIgBgBIACAAIAAABgAA0gOIABAAIAAABIgBAAg");
	this.shape_173.setTransform(11.1,5.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#3D3D3D").s().p("AARATIAAgCIABAAIAAACgAAAACIAAABIAAAAIgBgDIALABIAAgBIAAAAIABAAIAAADgAgqACIAAgBIABAAIAAABgAAygBIAAgBIABAAIAAABgAAngBIgBgCIACAAIAAACgAhMgDIAAgBIACAAIAAABgABMgQIAAgCIABAAIAAACg");
	this.shape_174.setTransform(8.5,5.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#B6B6B6").s().p("AAqAVIAAgBIABAAIAAABgAgVAPIAAgBIABAAIAAABgABBgDIAAgBIAAgGIABAAIAAgEIABAAIABADIgBACIABAAIAAACIgBAAIAAgBIgBAAIAAAHIgBAAIAAADIgBAAgAhEgGIAAgBIABABIAAABgAhCgKIAAgBIABAAIAAACgAAOgTIAAgBIADAAIAAABg");
	this.shape_175.setTransform(9.3,5.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#666666").s().p("AhXAKIAAgBIABAAIAAABgABXAFIAAgCIABAAIAAACgAAegCIAAgBIABAAIAAABgABGgJIABAAIAAABIgBAAg");
	this.shape_176.setTransform(9.1,4.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E4E4E4").s().p("AgEAFIAAgCIAAgBIgBAAIAAgCIAAAAIAAgCIAAAAIgBAAIAAgDIAMABIAAABIAAABIAAACIABgBIAAACIAAABIgBACIAAACg");
	this.shape_177.setTransform(17,4.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#BABABA").s().p("AhJANIAAgCIABAAIAAACgAgxAKIAAgCIABAAIAAACgAgHAFIAAgCIABAAIAAACgABJACIABAAIAAABIgBAAgAARgIIABAAIAAAAIgBABgAgIgLIABgBIABAAIAAABg");
	this.shape_178.setTransform(10.2,4.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#7D7D7D").s().p("AgOASIAAgCIABAAIAAACgAhPAPIAAgBIABAAIAAABgABPAHIAAgCIABAAIAAACgABOAAIAAAAIABAAIAAAAgAgWgOIAAAAIABAAIAAAAgAg1gPIAAgCIABABIAAABg");
	this.shape_179.setTransform(9.7,4.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#6D6D6D").s().p("AArAMIAAgDIACABIgBACgAAeAAIAAgBIABAAIAAABgAgsgLIAAAAIABAAIAAAAg");
	this.shape_180.setTransform(14.7,4.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#484848").s().p("AhSAMIAAgBIACAAIAAABgAANADIAAAAIABgBIAAABgAhRAAIAAAAIABAAIAAAAgABRgCIAAgBIACAAIAAABgABAgHIAAgBIABAAIAAABgAgrgJIAAgCIABAAIAAACgAgdgKIAAgBIABAAIAAABgAhPgLIABAAIAAABIgBAAg");
	this.shape_181.setTransform(9.5,4.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#BFBFBF").s().p("AgRAUIAAgCIABAAIAAACgAgsANIAAgBIABAAIAAABgAgHAAIAAgBIgBAAIgBgBIgBAAIAAgBIAAgBIACAAIAAABIABAAIgBgCIABAAIAAABIAIABIAAAAIAAADIgHgBIAAABgAgMAAIAAgBIABAAIAAABgABGgLIAAgBIAAgBIAAAAIAMAAIAAABIABAAIAAACgAhSgSIABgBIABAAIgBACg");
	this.shape_182.setTransform(9.3,5.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#818181").s().p("AgjARIAAgBIABAAIAAABgAhMANIAAgBIABAAIAAABgAg8AMIAAgBIACAAIAAACgAglAMIAAgBIABAAIAAABgABJgPIAAgBIAEABIAAABg");
	this.shape_183.setTransform(9.3,4.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#BEBEBE").s().p("AgpATIAAAAIAFgBIAAABgAAZAJIAAgJIABAAIAAgFIADAAIAAACIgBADIABAAIABAAIgDAAIAAADIgBAAIAAAGgAAiAGIAAgCIAKABIAAABgAA6gNIAAgBIADAAIAAABgAg7gQIgBgBIACgBIAAACg");
	this.shape_184.setTransform(10.5,4.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#939393").s().p("AgFAUIAAgBIABABIAAABgAAFgQIAAgBIgKAAIAAgDIAKABIAAABIABAAIAAACg");
	this.shape_185.setTransform(17,5.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#696969").s().p("ABQAWIAAgGIACAAIAAABIABAAIAAgBIACAAIgBADIgDAAIABADgAhUADIACAAIgBABIgBAAgAhGgCIAAgCIABABIAAABgAAxgLIAAgFIANAAIAAABIAAACIgMgBIAAACIAAABgAgSgLIAAgCIABAAIgBACgAAJgUIAAgBIABAAIAAABg");
	this.shape_186.setTransform(11.3,5.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#474747").s().p("ABTAaIAAgBIABAAIAAABgAAjAOIAAgBIgDABIAAAAIgBAAIAAAAIgBAAIAAgDIAEAAIAAABIABAAIAAgBIAHABIAAACIABAAIAAABIgCAAIAAgBIgCAAIAAABgAgXANIAAgBIABAAIAAgBIAAAAIgBABIgBAAIAAgDIACAAIgBgBIAMABIAAADIACAAIgBABIgCAAIAAgBIgBAAIAAABIgCgBIAAAAIgCgBIgBACIgCAAIAAABgAhTALIAAgBIABAAIAAABgABRADIAAgBIAAAAIABABgAg3gHIAAgBIABAAIAAABgAgMgJIAAgCIABAAIAAACgABCgNIAAgBIAAgCIABAAIAAADgAgIgYIAAgBIABAAIAAABg");
	this.shape_187.setTransform(10.9,5.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#494949").s().p("AA5AVIAAgBIABABIAAABgAgOASIAAgCIACAAIAAACgAAPAMIAAgCIgBAAIAAgBIABAAIAAgBIAMAAIAAACIABAAIAAACgABFAJIgBgCIAOAAIAAABIgNAAIABABgAA1AIIAAgBIgBAAIAAABIgLAAIABgDIALAAIAAgBIAAgBIACAAIgBAFgAgnADIAAgBIAMABIAAABgAhQADIgBgCIABABIABABgAg2ABIAAgBIABAAIAAABgABQgDIAAgBIABAAIAAABgAhGgDIAAgBIABAAIAAABgAgagEIgBgBIACAAIAAABgABJgVIAFAAIAAABIgFABg");
	this.shape_188.setTransform(9.6,5.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#414141").s().p("AgBAVIAAgBIABAAIAAABgAAmATIABgBIADAAIAAABgAhCAKIAAgBIABAAIAAABgAgcAHIAAgBIABAAIAAABgAAzgFIABgBIABAAIAAABgABBgSIAAgCIACAAIgBACgAghgTIAAgBIACAAIAAABg");
	this.shape_189.setTransform(11.1,5.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#7B7B7B").s().p("AhLAGIABgBIABAAIgBABgAgigCIAAgBIABAAIAAABgABKgEIAAgBIABAAIAAABg");
	this.shape_190.setTransform(10.1,3.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D4D4D4").s().p("ABAAVIgBgBIAAgDIAAgBIACABIAAgIIABAAIAAgBIAAgDIACAAIAAgFIABAAIAAgEIABAAIAAAAIABAAIAAABIgBABIAAAFIgBAAIAAAFIgBAAIgBAHIgBAAIAAAGgAhHAGIAAgFIABAAIAAgCIABABIAAgFIACAAIAAgCIABAAIgBABIABAEIgBAAIgBADIgBAAIAAACIgBAAIAAADgABHgTIAAgBIABAAIAAABg");
	this.shape_191.setTransform(9,5.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#C9C9C9").s().p("Ag8AXIAAgBIACAAIAAABgAA8gTIAAgBIABAAIAAABgAAVgVIAAgBIABAAIAAABg");
	this.shape_192.setTransform(13.9,5.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C7C7C7").s().p("AgJAWIAAgBIAAgCIACAAIAAgCIABAAIgBgBIAAAAIAAgCIABAAIAAgEIABAAIAAABIAAACIABAAIgBAEIAAABIgBAAIAAABIAAABIAAAAIAAABIgCAAIABABgAhHgPIAAgBIABAAIABABgABHgUIAAgBIABAAIAAABg");
	this.shape_193.setTransform(8.8,5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#3C3C3C").s().p("ABbAbIAAgBIABABIAAABgAAMAAIgBgCIABAAIABACgAhbgDIAAgBIABAAIAAABgAA2gbIABAAIAAABIgBABg");
	this.shape_194.setTransform(9.7,5.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#8D8D8D").s().p("AAVAbIAAgBIABAAIAAABgAgEAVIgBgBIACAAIAAABgAgDASIAAgCIABAAIAAACgABEAQIAAgCIAAAAIAAgEIAAgCIgBAAIAAgFIAAgDIgBAAIAAgCIAAgCIgBAAIABgGIAAgBIgBAAIAAgFIAAgDIAAAAIABAAIAAgBIABgBIAAgBIAAgBIABAAIAAAAIABAAIAAAAIABAAIAAACIABgBIACABIAAABIABAAIAAABIABAAIgBAEIAAABIABAAIAAADIgBAAIAAAEIgBAAIAAAGIgBABIgBAFIAAACIgBAAIAAACIAAAHgAg4AAIgBAAIABAAIAAAAgAhKgKIAAgBIAAgBIABAAIAAACgAgMgYIAAgBIAAAAIAAABgAANgZIAAgBIABAAIAAABg");
	this.shape_195.setTransform(8.5,5.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#A9A9A9").s().p("AAXAYIABgBIABAAIAAABgAgVAMIAAgBIABAAIAAABgAAiAEIgBgBIAAgCIABAAIAAgBIACABIAAABIAIAAIAAgCIACABIAAABIAAABIABAAIAAABIgBAAIAAABgAAGADIAAgCIABAAIAAACgABIgDIAAgBIABAAIAAABgAhLgFIABgBIABAAIAAABgAA+gKIgBgBIgCABIAAABIgBAAIAAgEIANABIAAABIACAAIgBACgAA5gSIgBgBIABAAIABABgAgcgTIAAAAIACgBIAAABgABLgWIgBgBIABAAIABABg");
	this.shape_196.setTransform(7.6,5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#4E4E4E").s().p("AgNAXIAAgBIABAAIAAABgABQAUIAAgBIgBAAIAAABIgDAAIAAgDIACAAIAAABIAEAAIAAgBIABAAIAAABIACABIgBgBIABAAIAAABIAEgBIAAACgAhJAHIABAAIAAABIgBAAgAg/AGIAAgBIABAAIAAABgABHABIAAgBIACAAIAAABgAhZAAIAAgBIACAAIAAABgABWgDIAAgBIABAAIAAABgAhNgEIAAgBIABAAIAAABgAA8gGIAAgBIABAAIAAABgAgIgKIAAgBIABAAIAFAAIAAACgAAngRIAAgBIABAAIAAABgAA+gVIAAgBIACAAIAAABg");
	this.shape_197.setTransform(9,4.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#090909").s().p("ABRAdIAAAAIgBAAIAAgCIABAAIACAAIAAgBIABABIAAgBIAAAAIABABIAAABIgBgBIAAACIgCgBIAAABgAhCgIIABgCIAAgBIABAAIAAABIAAABIgBABgAhSgMIAAgDIABgBIgCAAIAAgBIAAAAIgBAAIABgBIABAAIABAAIgBABIABAAIABAAIAAABIABABIABAAIABAAIAAABIgCAAIgBgBIAAADgAAtgZIAAAAIAAgBIABAAIAAgBIABAAIABgBIABAAIgBABIABAAIAAABIgBAAIgBAAIAAABIgBAAIAAAAgAgHgZIAAAAIAAgBIABAAIAAgCIACABIAAABIgBAAIAAABIgBAAIAAAAg");
	this.shape_198.setTransform(10.6,5.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#525252").s().p("AhGAUIAAgBIABAAIAAABgAhOAPIAAAAIABAAIAAAAgAA6AIIABgCIABAAIAAACgABKgKIAAAAIgCAAIAAAAIgBAAIAAAAIgCAAIABgCIAKABIAAABIgDAAIAAAAgAAdgPIgBgBIABABIABABgAAjgSIAAgBIABAAIAAABg");
	this.shape_199.setTransform(12,4.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#0D0D0D").s().p("AgDAZIgCAAIAAgBIgBAAIAAgBIACAAIACAAIAAgBIABAAIAAABIgBABIAAAAIAAABgAhBAOIgBAAIAAgBIAAgBIABAAIAAABIABAAIAAABgABCgCIAAgDIAAgCIAAgBIAAgBIgBAAIAAgCIAAgCIAAgDIgCAAIAAgBIgNAAIAAAFIAAABIABAAIAAABIAAADIAAABIAAACIAAABIgBAAIAAgBIAAgBIAAgCIAAgDIAAAAIgBgCIAAgDIABgBIgCAAIABgEIgBAAIAAgBIgBAAIAAgBIgCgBIAAgBIACAAIABAAIAAACIABAAIAAABIABAAIAAABIAAABIAAABIABgBIADAAIAFABIAEAAIAAgCIABABIABAAIAAACIABAAIAAACIAAADIAAABIAAABIABAAIAAAFIAAACIAAABgAg/gUIgBAAIAAgBIgBABIAAgBIABAAIABAAIAAAAIACAAIAAABg");
	this.shape_200.setTransform(11.1,5.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#585858").s().p("AAYAYIABgCIAAAAIAAADgAAtgHIAAgBIABAAIAAABgAgzgKIgBgCIABABIAAABgAATgTIABgBIABAAIgBACgAA0gXIABAAIAAAAIgBABg");
	this.shape_201.setTransform(10.3,5.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#656565").s().p("AACAVIAAgBIACAAIABgCIACABIAAAAIACABIAAgBIABAAIAAABIACAAIAAABgAg6ASIABAAIAAABIgBABgAgfAFIAAgBIABAAIAAABgAhGACIAAgBIACAAIgBABgAgtgCIAAgCIABAAIAAACgAgLgOIAAgBIABAAIAAABgABFgTIABgBIABAAIgBABg");
	this.shape_202.setTransform(8.5,4.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#383838").s().p("AgVAYIABgBIABAAIAAABgAgmAIIAAgBIABAAIAAABgAApADIAAgBIABABIAAABgAgpgHIAAgBIACAAIAAACgAAHgWIAAgBIABABg");
	this.shape_203.setTransform(15,5.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#A8A8A8").s().p("AAzAbIAAgBIABAAIAAABgAg0gBIAAgCIAKABIABABgAAygYIABAAIAAABIgBABgAAXgYIABABIAAAAIgBABgAALgZIAAgBIABAAIAAABg");
	this.shape_204.setTransform(13.8,5.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#363636").s().p("AgVAYIAAgBIACAAIgBABgAAZASIABgCIABAAIAAAAIgBACgAg4AFIAAgCIABAAIAAACgAhkAAIAAAAIABAAIAAAAgABlgRIAAgBIAAABgAA3gVIAAgCIABABIAAABg");
	this.shape_205.setTransform(10,4.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#171717").s().p("AAAAXIAAAAIAAgBIAAgBIAAgCIAAgCIAAgDIgBABIAAgDIAAgCIAAgCIAAgBIgBgBIAAgCIAAgBIAAgCIAAgBIABAAIAAAEIAAABIAAABIABAAIAAACIAAACIAEAAIAAABIgEAAIAAACIAAAHIAAAAIAAABIAAABIACAAIAAABgAgEgGIAAgBIABgCIAAgBIAAgBIgCAAIAAgDIAAgEIAAgBIgBAAIAAgCIAAgBIABAAIAAABIACAAIAAABIADAAIAAgBIAEAAIABAAIABAAIAAgBIABAAIgCAOIAAgCIAAgBIAAgCIgBAAIAAgCIABgDIAAgBIgIAAIgBABIAAAEIABABIABABIgBAEIAAABIAAABg");
	this.shape_206.setTransform(19.5,5.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#9E9E9E").s().p("AgcAWIgBgBIABAAIAAABgAAdgUIAAgBIABAAIAAABg");
	this.shape_207.setTransform(15.8,5.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#C4C4C4").s().p("Ag2AVIAAgBIABABIAAABgAA2gTIAAgBIABAAIAAABgAgGgUIAAgBIABAAIAAABg");
	this.shape_208.setTransform(13.1,4.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#BDBDBD").s().p("AAdAVIAAgBIADAAIAAABgAhegDIAAgBIACAAIAAACgABegTIAAgBIABAAIAAABg");
	this.shape_209.setTransform(9.2,5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373737").s().p("AAuARIABgBIABAAIgBABgAArgIIAAgCIABAAIAAACgAgvgPIAAgCIACABIAAABgAAngPIAAgCIABABIAAABg");
	this.shape_210.setTransform(14.4,4.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#111111").s().p("AAZAZIAAAAIAAgCIABAAIAAgBIAAgBIABABIAAgDIAAgBIAAgBIgBAAIABgCIAAgCIgBgCIAAgBIgBAAIABgDIAAgBIAAgBIAAgCIgBABIAAgEIAAAAIAAAAIAAgBIABAAIAAABIAAAAIAAABIAAABIABAAIAAAEIAAABIgBABIACABIgBACIALABIAAgBIAAAAIABABIABAAIAAgFIgBgBIAAgFIABgBIgBAAIAAAAIAAgDIAAgCIAAgBIAAgBIgCAAIABgBIAAgBIAAgCIAAgCIgBgBIAAgBIgGAAIgEAAIAAABIgDAAIAAABIAAADIgBACIACAAIAAAEIAAABIAAABIAAABIgBAAIAAgCIgBgBIAAgDIAAAAIAAgDIAAgCIAAgBIgBAAIAAgEIgCAAIABgBIgBgBIAAgBIABAAIABAAIAAABIABABIAAABIAAABIABgBIgBABIADABIAAgCIAGABIAEAAIABAAIAAgBIABgBIABAAIgBACIABAAIAAAGIAAABIABAAIgBAGIAAABIABAAIAAADIAAACIABAAIAAAFIAAADIABAAIABAEIgBACIABAAIAAAEIAAACIAAABIAAABIgBAAIAAgCIAAgBIgDAAIgEgBIgFABIgCAAIAAABIgBAAIAAAAIAAACIgBAAIAAAAgAAcAPIAAAFIAHAAIAFABIACAAIAAgBIgCAAIABgCIAAgCIAAgBIgBAAIAAgCIgHAAIAAABIgBAAIAAgBIgEAAgAgiAWIABgBIgBAAIAAgBIABAAIABAAIAAABIAAAAIAAABIgBABgAgLAVIAAgBIAAgBIAAgCIgBABIgBAAIAAgBIgEgBIgEAAIgDAAIgBABIAAABIgBAAIAAABIAAAAIAAABIgCAAIAAgBIAAgBIABAAIAAgBIABAAIAAgBIgBAAIABgEIAAgCIAAgBIgBAAIAAgBIAAgCIgBgBIABgBIgBAAIgBgCIAAgCIAAAAIAAAAIACAAIAAAAIAAAAIAAADIABAAIgBACIABABIgBABIABAAIABADIABAAIAAgBIALABIAAgFIgBAAIABgEIAAgBIABAAIAAABIAAACIABAAIgBAFIABACIAAAAIABADIgBACIAAABIACAAIAAAEIAAABgAgaANIACABIgBABIADAAIAKAAIAAgBIABgBIgCAAIAAgCIgLgBIAAABIgBAAgAhDANIAAgBIgBAAIAAgBIgBAAIgCAAIgBAAIgEAAIABgCIABABIACAAIABAAIABAAIACAAIACAAIAAgBIAAgBIABAAIgBAEIAAABgABLgRIAAgCIgBAAIAAgBIgBAAIAAgBIAAAAIgBgBIABAAIABAAIAAABIABAAIAAABIABAAIAAABIAAACgAAMgTIAAgBIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAABIgBAAIgBAAIAAgBIgBAAIAAABIgCAAIAAABIgBAAIAAABg");
	this.shape_211.setTransform(11.1,5.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#C5C5C5").s().p("ABKAZIABgFIAAgDIgCAAIAAgEIAAgBIABgCIgCAAIABgEIAAgCIAAgBIgBAAIAAgDIAAAAIAAgCIgBAAIAAgEIAAgBIAAgBIgBAAIAAgDIABAAIAAABIABgBIAAgBIgBABIABgDIAAAAIAAgBIAAAAIgBgBIAAgBIACAAIABAAIAAgBIAAgBIAAgBIABAAIAAABIABAAIABAAIAAABIABAAIAAABIABAAIAAACIABAAIAAABIAAACIAAADIABAAIAAADIAAABIAAABIABAAIAAACIgBABIAAACIgBAAIgBAFIgBAAIAAAHIgBAAIAAAHIgBAAIgBAFgABOgKIABAAIAAgBIgBAAgABKgNIABABIABgCIgBAAgABOgOIABAAIAAgBIgBAAgAhQAMIgBAAIAAgCIABAAIAAgCIABAAIAAABIAAABIABAAIAAABIgBAAIAAABgAg0gBIAAgBIABAAIAAABgAhLgLIAAgBIABAAIAAABgAAvgXIAAgBIABAAIAAABg");
	this.shape_212.setTransform(10.7,4.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#D3D3D3").s().p("AgVAFIABgBIgCAAIAAAAIAAgBIACgBIABABIAKABIAAABIgBgBIAAACgAAWAAIAAgBIABAAIAAABgAAUgEIAAgBIABABIAAAAg");
	this.shape_213.setTransform(16,3.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#CFCFCF").s().p("AAOAaIABAAIAAABIgBAAgAAjAYIAAgBIABAAIABABgAgGARIAAgBIADAAIAAABgAgcgOIAAgBIgBAAIAAABIgBAAIAAgBIgCgBIAAABIgCAAIAAgBIgBAAIgBABIAAAAIAAgDIABAAIAAABIABAAIAAgBIABAAIAAABIACAAIAAgBIABAAIAAABIABAAIAAgBIADAAIAAACIACAAIAAABIgCAAIAAABgAAegaIABAAIABABIgBAAg");
	this.shape_214.setTransform(14.6,5.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#121212").s().p("AgHAZIgCAAIAAgBIgBABIAAgCIABAAIACAAIAAABIABAAIAAABgAAJgVIAAgCIABAAIABgBIgBAAIABAAIAAAAIAAABIAAAAIAAACg");
	this.shape_215.setTransform(16.7,5.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#CDCDCD").s().p("AguAZIACAAIAAABIgCAAgAAwgVIABAAIAAAAIgBABgAAagYIAAgBIACAAIAAABgAgwgYIAAgBIABAAIAAABg");
	this.shape_216.setTransform(15.2,5.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#787878").s().p("AgUAYIAAAAIABAAIgBABgAAHAVIAAgBIABAAIAAABgAgyAVIgBgBIABAAIAAABgAAggBIAAgCIACAAIAAACgAgTgGIACAAIAAABIgBABgAghgGIAAgBIABABIAAAAgAAzgXIAAgBIABAAIAAACg");
	this.shape_217.setTransform(12.9,5.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#323232").s().p("AhDAJIgBAAIgBAAIACAAIAAgBIABAAIAAABIAAABgAgPAAIAAgBIABAAIAAABgABEgIIAAAAIACgBIAAABg");
	this.shape_218.setTransform(11,4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#808080").s().p("AAWAZIAAgBIACAAIAAABgAgEAAIAAAAIABAAIAAAAgAgfgRIAAgCIAEABIAAABgAgigSIABgBIAAACIgCAAgAAjgWIAAgCIABAAIAAACg");
	this.shape_219.setTransform(14.2,5.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#353535").s().p("AAIAWIAAgBIABAAIAAACgAhYgEIgBgBIACAAIgBABgAAZgNIAAgBIgBAAIAAgBIAEAAIAAABIACgBIAAABIgFABgAgRgUIAAgCIABAAIAAACgABYgVIAAAAIACAAIAAAAg");
	this.shape_220.setTransform(9,5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AA3AaIAAgBIgBgBIAAgBIABABIAAABIABAAIAAABgAAdAWIAAgBIAAAAIAAABgAAAAVIAAgCIABAAIAAACgAg0AOIABAAIABAAIAAABIgBAAIgBAAgAhIALIAAgBIABAAIAAABgAhPALIAAAAIgBgCIACAAIABAAIAAACgAhOgRIgBAAIAAgCIABAAIABAAIAAACgAg6gTIAAgBIABAAIAAABgAAWgUIABgBIABABIAAAAgAAFgUIAAgCIAAAAIgBgBIABAAIAAABIABABIAAABgAg3gVIAAgBIABABIAAABgABPgXIACAAIAAABIgCABgAgBgWIgBgBIACAAIAAACgAAegWIAAgBIACAAIAAABgAgZgWIAAgCIABAAIAAACgAA4gYIAAgBIABAAIAAABgAABgYIAAgBIABAAIAAABg");
	this.shape_221.setTransform(9.9,5.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#C0C0C0").s().p("AAMAZIAAgBIABAAIAAABgAhGARIABgBIAAAAIAAABgAAUgQIAAAAIABAAIgBABgABGgUIAAgBIABAAIAAABgABDgXIAAgBIABAAIAAABg");
	this.shape_222.setTransform(11.4,5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#060606").s().p("AAwAdIAAgBIgBgBIAAgBIABAAIABAAIAAgBIABAAIAAABIAAABIgBAAIAAACgAhGgWIAAgBIACAAIgBACgAgsgWIAAgBIACAAIAAABgABEgZIAAAAIAAgCIABABIAAgCIABAAIgBACIACAAIAAABIgBAAIgBAAIAAAAg");
	this.shape_223.setTransform(11.2,5.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#303030").s().p("AhVAFIAAgCIABAAIAAACgABUgCIAAgBIACAAIgBABg");
	this.shape_224.setTransform(9.7,3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#828282").s().p("ABKAaIAAgBIABABIAAABgAARgFIABAAIAAABIgBAAgAhMgMIAAgBIACAAIAAABgAgQgOIAAgBIABAAIAAABgAgogSIAAgCIABAAIAAACgABLgXIAAAAIABAAIABAAgABKgYIAAgBIABAAIgBABg");
	this.shape_225.setTransform(10.6,5.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C0C0C0").s().p("AgHAAIAAAAIADAAIAAAAIACAAIAAgBIADAAIAAgBIADAAIAAgBIACAAIAAgBIABAAIAAABIABAAIAAAIIgGAAQgLAAACgFg");
	this.shape_226.setTransform(35.8,6.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#929292").s().p("AgHALIAAgCIAAgMIAAAAIAAgBIAEAAIAAgBIADAAIAAgBIABAAIAAgCIACAAIAAgBIADABIAAgBIACgBIAAAPIgBAAIAAgBIgBAAIAAABIgCAAIAAABIgDAAIAAABIgDAAIAAABIgCAAIAAABIgDAAIAAACg");
	this.shape_227.setTransform(35.8,5.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#5C5C5C").s().p("AgHAGIAAgGIABAAIAAAAIACAAIAAgBIAEAAIAAgBIABABIAAgCIADAAIAAgBIAEAAIAAgBIAAAAIAAAFIgCAAIAAABIgDgBIAAABIgCAAIAAACIgBAAIAAABIgDAAIAAABIgEAAIAAABg");
	this.shape_228.setTransform(35.8,4.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#171717").s().p("AgHAFIAAgFIABAAIAAAAIAEAAIAAAAIACAAIAAgBIABAAIAAgBIAEAAIAAgBIADAAIAAgBIAAAEIgDAAIABABIgCAAIAAAAIgEAAIAAACIgDAAIAAAAIgBAAIgBACg");
	this.shape_229.setTransform(35.8,3.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#404040").s().p("AgHAEIAAgEIACAAIABAAIABAAIAAAAIADAAIAAgBIAEAAIAAgBIACAAIgBgBIADAAIAAADIAAAAIAAAAIgEAAIAAAAIgDAAIAAACIgBgBIAAABIgEAAIAAACIgCAAIAAAAg");
	this.shape_230.setTransform(35.8,4.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#666666").s().p("AgEABIAAgBIAJAAIAAAAIgFAAIAAAAIgBAAIgBABg");
	this.shape_231.setTransform(35.5,2.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#454545").s().p("AgHAFIAAgGIACAAIABgBIADAAIAAgBIADAAIAAgBIAGAAIAAAEIAAAAIgDAAIAAABIgEAAIAAABIgBAAIAAAAIgCAAIAAACIgEAAIAAABg");
	this.shape_232.setTransform(35.8,3.2);

	// Layer 1
	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#636363").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_233.setTransform(19.6,5.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#C3C3C3").s().p("AAAABIAAgBIgBAAIAAAAIAAAAIAAAAIADAAIAAAAIAAABIgBAAIAAgBIgBAAIAAABg");
	this.shape_234.setTransform(19.9,6.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#B9B9B9").s().p("AAAABIAAgBIAAAAIABAAIAAAAIgBAAIAAABg");
	this.shape_235.setTransform(19.8,5.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#525252").s().p("AgBAAIgBAAIAAAAIABAAIAAAAIACAAIAAAAIACAAIAAAAg");
	this.shape_236.setTransform(19.9,7.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#C9C9C9").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_237.setTransform(20.1,7.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#212121").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_238.setTransform(21.4,2.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#9B9B9B").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_239.setTransform(20.8,3.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#C2C2C2").s().p("AAAAAIAAAAIABAAIAAAAg");
	this.shape_240.setTransform(20.5,3.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#8A8A8A").s().p("AgDACIABgCIgBAAIADAAIAAgBIADAAIAAACIgBAAIAAABg");
	this.shape_241.setTransform(20.3,3.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#3A3A3A").s().p("AgDACIAAgBIABAAIAAABgAADAAIAAAAIAAgBIABAAIAAABg");
	this.shape_242.setTransform(21.5,2.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#919191").s().p("AgBACIAAgBIABAAIAAABgAAAAAIAAgBIACAAIAAABg");
	this.shape_243.setTransform(21.1,3.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#6D6D6D").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_244.setTransform(21,3.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#3F3F3F").s().p("AABAAIAAAAIgBAAIAAAAIgDABIAAgBIAGAAIAAABg");
	this.shape_245.setTransform(20.1,4.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#626262").s().p("AgDABIAAgBIADAAIAAAAIABAAIAAAAIACAAIAAABg");
	this.shape_246.setTransform(20.1,4.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#3C3C3C").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_247.setTransform(22,4.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#CCCCCC").s().p("AAAAHIAAgBIAAAAIAAgCIAAAAIAAADIgBAAIAAgEIgBAAIAAADIgBAAIAAgGIAAAAIABAAIAAgBIABAAIAAgBIABAAIAAAAIAAABIAAAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIACAAIAAgCIABAAIAAACIAAAEIgBAAIAAAAIAAABIAAADIAAACIgCAAIAAABg");
	this.shape_248.setTransform(21.4,3.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#ABABAB").s().p("AAAAIIAAgBIgBAAIAAgBIgBAAIAAABIgCAAIAAgHIACAAIAAgBIAAgGIABAAIAAAFIABAAIAAgCIAAAAIAAADIAAAAIAAgCIABAAIAAABIABAAIAAABIABAAIAAgBIACABIgBACIgBAAIAAADIAAACIgBAAIAAACg");
	this.shape_249.setTransform(21.2,4.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#828282").s().p("AAAAAIAAAAIABAAIAAAAg");
	this.shape_250.setTransform(22,4.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#505050").s().p("AgCAOIAAgCIABAAIAAACgAABgJIAAgDIACAAIgBADg");
	this.shape_251.setTransform(20.5,5.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#707070").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_252.setTransform(21.7,5.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#717171").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_253.setTransform(21.6,6.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#484848").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_254.setTransform(21.5,5.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#424242").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_255.setTransform(20.4,6.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#969696").s().p("AADADIAAgBIAAgCIgCAAIAAABIgBAAIAAgBIgCAAIAAABIAAAAIAAAAIgBgBIAAAAIAAAAIAAAAIAAAAIACAAIAAgBIgBgBIAGAAIAAAFg");
	this.shape_256.setTransform(20,5.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#6C6C6C").s().p("AAAAIIAAgBIgCAAIAAABIgBAAIAAAAIAAgBIABAAIAAgBIAAAAIAEAAIAAACgAADgFIAAgDIABAAIAAADg");
	this.shape_257.setTransform(20,6.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#E8E8E8").s().p("AgCAFIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIABAAIAAABIABAAIAAgBIAAAAIAAABIADAAIAAABIAAADIAAAAIAAADIgBAAIAAACg");
	this.shape_258.setTransform(19.9,6.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#B0B0B0").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_259.setTransform(20.3,6.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#767676").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_260.setTransform(20.2,6.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#646464").s().p("AgDAWIAAgDIgBAAIAAADIgBAAIAAgJIABAAIABAAIAAgCIADAAIAAACIAAgBIAAgBIACAAIgBAAIABAAIABAFIgCAAIAAAEIgBAAIAAABIAAAAIAAgBIgCAAIAAACgAAEgTIAAgBIACgBIAAACg");
	this.shape_261.setTransform(21.1,5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#363636").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_262.setTransform(20.4,8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#B8B8B8").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_263.setTransform(20.7,8.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#6B6B6B").s().p("AgCAZIAAgCIABAAIAAACgAACgXIAAgBIABAAIAAABg");
	this.shape_264.setTransform(21.4,6.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#545454").s().p("AhMATIAAgCIABAAIAAACgABLgRIAAgBIACAAIAAABg");
	this.shape_265.setTransform(29.4,2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#888888").s().p("AhHAaIgEAAIAAACIgBAAIAAgIIABAAIAAgEIACAAIAAAAIABAAIAAAAIADABIgBABIADAAIAAgCIABAAIAAAEIgBAAIAAACIgBAEIgBAAIABAAIgCAAIAAABIgBABgABLgaIAAgBIABAAIABABg");
	this.shape_266.setTransform(28.3,3.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#D6D6D6").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_267.setTransform(36,0.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#2C2C2C").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_268.setTransform(36.2,0.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#595959").s().p("AhNAlIAAgBIABAAIAAABgABNgjIAAgBIABAAIAAABg");
	this.shape_269.setTransform(28.4,4.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#292929").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_270.setTransform(36.4,0.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#A4A4A4").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_271.setTransform(36.5,0.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#040404").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_272.setTransform(36.4,0.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#343434").s().p("AhIASIAAgBIABAAIAAABgABIgQIAAgBIABAAIAAABg");
	this.shape_273.setTransform(29.2,2.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#4B4B4B").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_274.setTransform(35.8,0.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#D5D5D5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_275.setTransform(35.7,0.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#8C8C8C").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_276.setTransform(35.6,0.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#353535").s().p("AhRAPIAAgCIABAAIAAACgABGAMIAAgBIABAAIAAABgABRgNIAAgBIABAAIAAABg");
	this.shape_277.setTransform(28.7,3.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#414141").s().p("ABQAQIAAgCIgBAAIAAgBIgBgBIgIgUIAAgBIAMAAIgBAVIAAABIAAAGgAhRgPIAAgBIAAgBIABAAIAAACg");
	this.shape_278.setTransform(28.8,5.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#3B3B3B").s().p("AhAAfIABAAIAAABIgBAAgABAgeIABgCIAAAAIAAACg");
	this.shape_279.setTransform(27.5,5.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#2F2F2F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_280.setTransform(33.9,2.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#050505").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_281.setTransform(34,2.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#5A5A5A").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_282.setTransform(35.5,1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#AAAAAA").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_283.setTransform(34.9,1.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#DDDDDD").s().p("AhDAKIAAgBIAAgCIABAAIABAAIAAACIgBAAIAAABgABDgIIAAgBIABAAIAAABg");
	this.shape_284.setTransform(28.2,2.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#BABABA").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_285.setTransform(35.2,1.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#474747").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_286.setTransform(35.3,1.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#303030").s().p("AhDAHIABgBIAAAAIAAABgABDgFIAAgBIABAAIAAABg");
	this.shape_287.setTransform(27.9,2.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#7F7F7F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_288.setTransform(34.1,1.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#CDCDCD").s().p("AhFAfIAAgBIABAAIAAABgABFgdIAAgBIABAAIAAABg");
	this.shape_289.setTransform(27.3,4.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#737373").s().p("AhCAdIAAgCIABAAIAAABIAAABgAA+gZIAAgBIACAAIAAABgABCgbIAAgBIABAAIAAABg");
	this.shape_290.setTransform(28.1,4.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#4D4D4D").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_291.setTransform(34.1,2.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#848484").s().p("Ag0AAIABAAIBnAAIAAABg");
	this.shape_292.setTransform(27.3,2.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#676767").s().p("Ag1ACIAAgDIBoABIAAAAIhngCIAAgBIBpACIAAABIABAAIAAAAIgBAAIAAAEg");
	this.shape_293.setTransform(27.4,3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#494949").s().p("Ag1ABIAAgBIABABIAAgBIgBAAIAAAAIABAAIAAgBIBpABIAAgCIABAAIAAAEIgBAAIAAABg");
	this.shape_294.setTransform(27.4,3.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#5F5F5F").s().p("AA2AFIhogDIAAgBIgDAAIAAABIgBAAIAAgCIABAAIAAgEIABAAIAAACIACAAIAAgCIBnADIAAABIAAAAIACAAIgBAFg");
	this.shape_295.setTransform(27.3,4.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#555555").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_296.setTransform(33.7,2.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#878787").s().p("AgPAJIABAAIABAAIAAgBIABAAIAAAAIABgBIAAgBIABAAIACABIAAgBIAAAAIAAgCIABAAIAAgBIACAAIABAAIAAgBIABAAIAAgBIACAAIAAAAIABgBIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAgBIABAAIACAAIAAgBIABAAIAAgBIABAAIABAAIAAgCIABAAIAAgBIABAAIABAAIAAgBIABAAIAAABIACAAIAAgBIgCAAIABgBIABAAIABAAIAAgBIABAAIAAgBIABAAIAAALIgCAAIAAABIgEAAIAAACIgEgBIAAACIgCAAIAAABIgEAAIAAABIgBAAIAAABIgEAAIAAABIgDgBIAAABIAAAAIAAABIgBAAIgBgBIgCAAIAAABIgDABg");
	this.shape_297.setTransform(35.2,1.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#3D3D3D").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_298.setTransform(33.5,2.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#0E0E0E").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_299.setTransform(33.6,2.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#444444").s().p("Ag2AXIAAgCIABAAIgBACgAg/AFIABgBIAAADIgBABgAA/gVIAAgBIABAAIAAABg");
	this.shape_300.setTransform(27,4.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#565656").s().p("Ag5ABIAAgBIABAAIAAABgAA4AAIAAAAIACAAIAAAAg");
	this.shape_301.setTransform(27.3,2.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#1A1A1A").s().p("AgNAKIAAgBIAAgCIABAAIAAACIAAABgAANgGIAAgBIgBgBIACgBIAAACIAAABg");
	this.shape_302.setTransform(34.7,1.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#666666").s().p("AgSAQIABgGIgBAAIgBgCIACAAIAAgBIABAAIABAAIAAABIACAAIAAgBIABAAIAAgBIACAAIAAgBIACAAIABABIABAAIAAgBIABAAIAAgBIADAAIAAgBIACAAIAAgBIACAAIAAgBIAEAAIAAgBIACAAIAAAAIAFAAIAAAAIADAAIAAgCIACAAIAAgNIACAAIAAAPIgCAAIAAAAIAAAEIgBAAIAAgBIgBAAIAAABIgBAAIAAABIgEAAIAAABIgDAAIAAABIgDAAIAAABIgDABIAAAAIgCAAIAAABIgCABIAAABIgFgBIAAACIgDAAIAAABIgEgBIAAACIgBAAIAAABg");
	this.shape_303.setTransform(35,1.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#454545").s().p("AAEASIAAgCIABAAIAAACgAgRAMIAAgDIgBAAIABgJIABAAIgBAGIADAAIAAgBIABAAIAAgCIAEABIAAgBIADAAIAAgCIAFABIAAgBIABgBIAAAAIACAAIAAAAIAEAAIAAgBIADAAIAAgBIACAAIAAgBIAFAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAAFIgEAAIAAABIgDAAIAAABIgCAAIAAABIgDAAIAAABIgDAAIgBABIgDAAIAAABIgBAAIAAABIgDAAIAAABIgDAAIAAABIgDAAIAAABIgEAAIAAABgAAGgQIAAgBIABAAIAAABg");
	this.shape_304.setTransform(34.9,2.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#404040").s().p("AAvAQIAAgGIABAAIAAgCIACAAIAAgBIACAAIAAgBIAEAAIAAgCIACAAIAAAAIADAAIAAgCIAFAAIAAAAIACAAIAAgCIAEAAIAAAAIAEAAIAAAAIACAAIAAgBIADAAIAAgBIADAAIAAgBIACAAIAAADIgDAAIgBABIgEAAIAAABIABAAIAAABIgFAAIABABIgCAAIAAgBIgBAAIAAABIgCAAIAAABIgDAAIAAABIgEAAIAAABIgDAAIAAABIgDAAIAAABIgDAAIAAABIgEAAIAAABIgCAAIAAAFgAhUALIAAgBIAAAAIABABgAA3gOIABgBIAAAAIAAABg");
	this.shape_305.setTransform(28.2,3.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#5C5C5C").s().p("AgSAMIAAgJIABAAIAAgDIADAAIgBgBIAFAAIAAgBIACAAIAAgBIAEAAIAAgBIADAAIAAgBIABAAIAAgBIAEAAIAAgBIACAAIAAgBIAAAAIAAABIACAAIgBgBIAGAAIAAgBIgBAAIgBgBIAFAAIAAgCIADAAIAAAGIgNAAIAAABIgBAAIAAACIABAAIgBAIIgBAAIABgFIgDAAIAAAAIgCAAIAAAAIgBAAIAAABIgDAAIAAABIgEAAIAAABIgDAAIAAABIgFgBIAAACIgBAAIAAAHg");
	this.shape_306.setTransform(34.9,5.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#929292").s().p("AAyAgIABgWIABAAIAAgIIABAAIAAgBIAFAAIAAgBIADAAIAAAAIADAAIAAAAIAEAAIAAgBIACAAIAAgBIADAAIAAgBIACAAIAAAGIABAAIAAANIgBAAIAAgFIgBAAIAAgBIgBAAIAAABIgDAAIAAABIgDAAIAAABIgEAAIAAABIgDAAIAAABIgDABIABABIgEgBIAAADIgBAAIAAgCIgBABIAAAHIgBAHgAhKAYIgBgBIACAAIgBABgAA4geIAAgBIABAAIAAABg");
	this.shape_307.setTransform(27.8,5.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#C0C0C0").s().p("AgKAHIAAgHIABAAIAAAAIABAAIAAAAIAEAAIgBAAIADgBIAAgBIACAAIAAgBIADAAIAAgBIADAAIAAgBIADAAIAAgBIABAAIAAABIABAAIAAAFIAAAAIgEAAIAAAAIgFAAIAAACIgCAAIAAAAIgBAAIAAACIgFAAIAAABIgCAAIAAABIgBAAIAAABg");
	this.shape_308.setTransform(34.2,7.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#EDEDED").s().p("Ag3AFIAAgBIABgCIAAgCIABAAIAAgCIAAgBIAAgCIAAgBIABAAIAAABIABAAIAAgBIBrACIAAALg");
	this.shape_309.setTransform(27.1,6.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#CECECE").s().p("AhGAaIAAABIgCAAIAAgBIgBAAIAAgBIABAAIAAgBIACAAIAAACIBqABIAAABgABIgaIAAgBIACAAIAAABg");
	this.shape_310.setTransform(29,3.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#747474").s().p("AgDAPIABgGIAAAAIAAAGgAABgMIAAgBIAAgBIACAAIABABIAAAAIgBAAIAAABg");
	this.shape_311.setTransform(33.1,4.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#DCDCDC").s().p("Ag3ABIAAgBIAAgCIBvACIgBADg");
	this.shape_312.setTransform(27.1,7.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#9A9A9A").s().p("AgpAXIAAABIgGAAIAAgEIADAAIAAgBIABAAIAAABIADABIAAgCIBoACIAAACIABAAIAAACgAhAANIAAgBIABAAIAAgBIAAgBIAAgBIgBAAIABAAIAAABIACAAIAAgBIACAAIAAABIABAAIAAADgAgrgXIAAgBIABAAIAAABg");
	this.shape_313.setTransform(26.2,6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#838383").s().p("AA1ADIhqgDIAAAAIBqABIAAgBIAAgBIABAAIAAAEg");
	this.shape_314.setTransform(27.3,8.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#BDBDBD").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_315.setTransform(34.4,9.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#090909").s().p("AA8ArIgBAAIAAgBIABAAIABAAIAAABgAhGgWIgBAAIAAgBIABAAIABAAIAAABgABGgoIgBAAIAAgBIABAAIAAgBIABAAIABAAIAAABIgBAAIAAABg");
	this.shape_316.setTransform(28.3,5.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#020202").s().p("AA/AjIAAgBIACAAIAAABgAhAghIAAgBIABAAIAAABg");
	this.shape_317.setTransform(28,6.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#909090").s().p("ABEAIIAAAAIABAAIAAABgAhEgHIAAgBIACAAIgCABg");
	this.shape_318.setTransform(27.6,9.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#BBBBBB").s().p("ABIAXIAAgCIABAAIAAACgAhIgTIAAgBIABAAIAAgCIACABIAAACg");
	this.shape_319.setTransform(27.4,7.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#070707").s().p("AAAAqIAAAAIAAgBIAAAAIABAAIAAABgAAAgoIAAAAIAAgBIAAAAIABAAIAAABg");
	this.shape_320.setTransform(34.6,5.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#797979").s().p("AgKAyIAAgBIABAAIAAABgAAJgwIAAgBIACAAIAAABg");
	this.shape_321.setTransform(35.9,5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#A3A3A3").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_322.setTransform(33.7,9.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#C6C6C6").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_323.setTransform(33.3,8.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#818181").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_324.setTransform(33,8.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#868686").s().p("AA3AhIAAgCIABAAIAAACgAg3geIAAgCIABAAIAAACg");
	this.shape_325.setTransform(27.5,5.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#434343").s().p("AgCAiIAAgBIABAAIAAABgAACgfIAAgCIAAAAIABACg");
	this.shape_326.setTransform(33.5,5.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#D3D3D3").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_327.setTransform(33.2,9.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#9F9F9F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_328.setTransform(33.4,9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#C4C4C4").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_329.setTransform(33.5,9.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#4C4C4C").s().p("ABHAhIAAgBIABAAIAAABgABEAeIAAgBIABAAIAAACgAhHgfIAAgBIAFAAIAAABg");
	this.shape_330.setTransform(27.1,6.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#0C0C0C").s().p("AAAABIAAAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAABg");
	this.shape_331.setTransform(33.6,9.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#0D0D0D").s().p("AADADIgBgBIAAAAIABAAIABAAIAAABgAgBAAIgBAAIAAAAIgBAAIAAgCIABAAIABAAIAAACIABAAIAAAAg");
	this.shape_332.setTransform(33.6,9.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#515151").s().p("AA9AFIABAAIAAABIgBAAgAA6AEIAAgBIABAAIAAABgAg+gCIAAgDIABAAIAAADg");
	this.shape_333.setTransform(27.6,8.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#282828").s().p("AABAnIgBgBIACAAIAAABgAgBAlIAAgCIABAAIAAACgAABgkIAAgCIABAAIAAACg");
	this.shape_334.setTransform(34.1,5.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#ADADAD").s().p("AA9AXIAAAAIABAAIAAAAgAAxAKIAAgBIhngCIAAACIgEgBIABgBIgBAAIAAABIgDAAIAAgHIABAAIAAADIBuACIABgFIAAgLIAAgBIhrgBIAAgCIgBAAIAAABIgBAAIAAgDIABAAIAAgCIAAgBIAAgDIABAAIADAAIBoACIAAAGIABAAIgBAWIgBAAIAAACgAg7gFIAAgDIABABIAAACg");
	this.shape_335.setTransform(27.6,7.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#A8A8A8").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_336.setTransform(34.1,9.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#7D7D7D").s().p("AgHAyIACAAIAAAAIgCABgAAGgxIAAgBIABAAIAAABg");
	this.shape_337.setTransform(35.9,5.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#7A7A7A").s().p("AAGADIABAAIAAABIgBAAgAgGgCIAAgBIABAAIgBABg");
	this.shape_338.setTransform(34.4,9.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#CACACA").s().p("AALAJIAAgCIABABIAAABgAgLgHIABAAIAAABIgBAAg");
	this.shape_339.setTransform(34,9.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#373737").s().p("AADAsIABAAIAAAAIgBABgAgDAnIAAgCIABAAIAAACgAAAgrIAAgBIAAAAIAAABg");
	this.shape_340.setTransform(35,6.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#4A4A4A").s().p("ABAAbIAAgBIACAAIgBACgAhBgLIAAgBIABgBIAAACgAhBgYIAAgDIABAAIABAEg");
	this.shape_341.setTransform(28.1,7.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#D8D8D8").s().p("AAFAnIAAgBIABAAIAAABgAgFglIAAgBIAAABIAAAAg");
	this.shape_342.setTransform(33.9,6.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#141414").s().p("AACACIgBgBIAAAAIgBAAIAAgBIAAAAIgBAAIAAAAIgBAAIAAgBIABAAIABAAIAAABIAAAAIAAAAIABAAIABAAIAAABIABAAIAAABg");
	this.shape_343.setTransform(35.1,10.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#CBCBCB").s().p("AA7AzIAAgBIABAAIAAABgAhNgWIABAAIAAABIgBAAgAAygeIAAgBIABgBIgBACgABNgxIAAgBIABAAIAAABg");
	this.shape_344.setTransform(28.9,5.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#959595").s().p("AAAAAIAAAAIAAAAg");
	this.shape_345.setTransform(34.8,10.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#9D9D9D").s().p("AAEAXIAAAAIAOAAIAAAAIAAAAgAgQgVIgBgBIACAAIAAABg");
	this.shape_346.setTransform(34.9,4.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#BFBFBF").s().p("AAGAAIAAAAIAAAAIAAAAgAgFAAIAAAAIAIAAIABAAg");
	this.shape_347.setTransform(36.3,7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#BEBEBE").s().p("ABEAVIABgVIABAAIAAAVgAhFgTIAAgBIABAAIAAABg");
	this.shape_348.setTransform(28.6,4.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#858585").s().p("ABGATIAAAAIACAAIAAAAgAhHgRIAAgBIACAAIAAABg");
	this.shape_349.setTransform(28.4,5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#EAEAEA").s().p("AAAAOIAAAAIAAgBIAAAAIAAgBIgBAAIgBAAIAAgBIgBAAIAAgBIgBAAIgBAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAgBIgBAAIAAgBIgBAAIgCAAIAAgBIgBAAIAAgBIAAAAIgBgBIgBAAIgBAAIAAgBIgBAAIAAgFIABAAIAAgBIACAAIAAgBIABAAIAAgBIAFAAIAAgBIADAAIAAgBIACAAIAAgBIADAAIAAgBIAEAAIAAgCIABAAIAAABIANAAIAAAUIgCAAIAAABIgFAAIAAABIgDAAIAAABIgDAAIAAABIgCAAIAAABIgBAAIAAABg");
	this.shape_350.setTransform(34.8,8.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#757575").s().p("AgLANIAAgBIACAAIAAABgAAKAMIABgDIAAgUIAAgBIAAAAIABAAIAAABIAAAXg");
	this.shape_351.setTransform(35.6,8.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#686868").s().p("ABIAjIAAgBIABAAIAAABgAhIggIAAgCIABAAIAAACg");
	this.shape_352.setTransform(28.1,6.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("ABCAxIAAAAIAAAAIAAABgAA0AoIABAAIABABIgCAAgAAxAnIAAgBIABAAIAAABgAhKgYIAAgBIABAAIAAABgAArgcIAAgBIABAAIAAABgAAtgdIAAgBIABAAIAAABgAAyggIgBgBIABAAIAAABgAA0ghIAAgCIACAAIAAACgAA7gmIAAgBIACAAIAAABgABDgrIAAgBIABAAIAAABgABFgsIAAgCIABAAIAAACgABGguIAAgBIACAAIAAABgABGgugABJgvIAAgBIABAAIAAABgABKgwIAAgBIABAAIAAABg");
	this.shape_353.setTransform(28.8,5.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#808080").s().p("AgDAzIAAgCIABABIAAABgAADgxIAAgBIABAAIABABg");
	this.shape_354.setTransform(35.9,5.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#393939").s().p("AAEAsIAAgBIAAAAIAAABgAgDgqIAAgBIAAAAIAAABg");
	this.shape_355.setTransform(35.1,6.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#0B0B0B").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAABg");
	this.shape_356.setTransform(35.6,10.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#D7D7D7").s().p("AgBAFIgBAAIAAgBIgBAAIgBAAIAAgBIgBAAIAAgBIgBAAIgBAAIAAgBIABAAIAAgBIABAAIAAAAIACAAIAAgBIADAAIAAgBIACAAIAAgBIAFAAIgBgBIADAAIgBADIAAADIgDAAIAAABIgCAAIAAABIgBgBIAAAAIgCAAIAAABIAAAAIAAABg");
	this.shape_357.setTransform(35.8,10);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#C5C5C5").s().p("AgBACIAAgBIABAAIAAABgAABAAIAAgBIACAAIAAABg");
	this.shape_358.setTransform(35.8,10.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#696969").s().p("ABPAwIAAgBIABABIAAAAgAhIgRIAAgBIgCgBIAAACIgCAAIAAgCIgBAAIAAACIgCAAIAAgDIABAAIAAgBIAAgBIAAgCIABAAIAAAEIAGAAIAAABIAAACgABJguIAAgBIAAAAIABABg");
	this.shape_359.setTransform(27.8,6.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#B5B5B5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_360.setTransform(35.8,11);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#1C1C1C").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAABg");
	this.shape_361.setTransform(35.9,10.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#585858").s().p("AAAA2IAAgEIAAgHIAAgFIABAAIgBAQgAAAg0IAAgBIAAAAIAAABg");
	this.shape_362.setTransform(36.7,5.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#606060").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_363.setTransform(36.1,11.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#383838").s().p("AAQAgIABAAIAAABIgBAAgAgQgfIAAgBIABAAIAAABg");
	this.shape_364.setTransform(34.5,7.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#010101").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_365.setTransform(36.1,11);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#7B7B7B").s().p("AAMAsIAAgBIABAAIAAABgAgFAfIAAgBIACAAIgBABgAgNAbIAAgBIABAAIAAABgAgIgqIABgBIABAAIgBABg");
	this.shape_366.setTransform(34.7,6.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#B1B1B1").s().p("AAGAvIgCAAIAAgBIgBAAIAAAAIAAgBIgCAAIgBAAIAAgCIAAAAIAAgBIAAAAIAAgBIABAAIAAgBIADAAIAAABIgCAAIAAABIACAAIAAgBIABAAIAAgBIACAAIAAgBIADAAIAAAHIgCAAIAAABgAgJgtIAAgBIABAAIAAABg");
	this.shape_367.setTransform(35.6,6.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#0A0A0A").s().p("AAJAyIAAgBIAAAAIgCgBIAAAAIACgBIABABIAAABIABAAIgBABgAgJgqIgBAAIAAgBIABAAIAAgBIABAAIACAAIAAABIgCAAIAAABgAgCguIgBAAIAAgCIABAAIAAgBIABABIABAAIAAAAIgBAAIAAACg");
	this.shape_368.setTransform(35.3,6.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#8E8E8E").s().p("AAAACIAAgBIAAAAIAAAAIAAgBIgBAAIAAAAIABAAIAAgBIACAAIgBADg");
	this.shape_369.setTransform(36.5,11.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#3E3E3E").s().p("ABKAOIABgBIAAAAIAAABgAhLgMIAAgBIAGAAIBqACIAAABg");
	this.shape_370.setTransform(29,9.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#4E4E4E").s().p("AABAzIABAAIAAABIgBAAgAgBgyIAAgBIABAAIAAABg");
	this.shape_371.setTransform(36.1,6.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#AFAFAF").s().p("AAMAKIgBgBIABAAIAAABgAAJAIIgBgBIACAAIAAABgAgMgIIAAgBIABAAIAAABg");
	this.shape_372.setTransform(35.3,10.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#464646").s().p("ABTAlIAAgBIACABIAAAAgAhKABIAAgBIgCAAIAAAAIgCAAIABgFIABAAIAAgCIABAAIAAACIABAAIAAgBIACAAIAAABIACAAIAAgBIABAAIAAADIgBAAIAAAEgAhBgZIAAgBIABAAIAAABgAhTghIgBgCIACAAIAAgBIABAAIAAABIACAAIAAgBIACAAIAAABIABAAIAAACg");
	this.shape_373.setTransform(28.3,7.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#171717").s().p("ABVA5IAAAAIgCgBIgBAAIAAgBIgCAAIAAgBIACAAIABAAIABAAIABgPIAAgZIAAADIABgFIAAAAIgBAtgAAvAeIgCAAIAAgBIgBAAIhygCIAAgBIgCAAIAAgBIgBAAIgBAAIAAgBIgBAAIABgBIgBAAIAAgCIgBAAIAAAAIgCAAIgBgBIABgBIgCAAIgCgBIgDABIAAgCIAFAAIAAgBIAAgCIAAgDIABAAIAAgBIAAgCIABgBIAAgBIAAgDIABAAIAAgCIAAgBIAAgHIABAAIAAgCIgBAAIAAgCIgIgBIAAADIAAACIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIAAAAIAAgBIAAACIAIAAIAAgCIAAgCIABAAIAAgCIAAgEIgDgBIgFAAIAAABIABACIgCAAIAAgBIAAgBIABgBIAAgBIAFAAIADAAIABAAIAAgBIABAAIABAAIAAABIgBAAIAAACIgBAAIAAACIAAAGIgBAAIAAADIAAAHIgBAAIAAAEIAAAFIgBAAIAAAJIgBAFIACAAIAAACIABAAIAAABIAFAAIAAgGIABAAIAAgDIAAgEIACgBIgBgFIABgCIABAAIAAgCIAAgEIAAgCIABAAIAAgDIAAgEIAAgDIABAAIAAgCIAAgBIAAgBIAAgGIABAAIAAgCIgBAAIAAABIgBAAIgBAAIAAgBIABAAIAAgBIABAAIABAAIAAgBIBtACIACAAIAAABIgCAAIABACIgBAJIABAAIAAADIACAAIAAgBIAEAAIAAgBIAEAAIAAgBIADAAIAAgBIACAAIAAgBIAEAAIAAgBIADAAIAAgBIAEAAIAAgBIADAAIAAgBIACAAIAAgBIADAAIAAgBIAEAAIAAgHIAAgEIABAAIAAgBIAAgQIgBAAIgBAAIAAABIgBAAIgBABIAAgCIABAAIAAgBIABAAIAAgBIABAAIABAAIABAAIgBAtIgLAAIgBAAIAAABIgCAAIgBAUIAAABIACAAIALABIAAAAIgOAAIAAgMIABgJIAAgCIAAgBIAOAAIAAgGIAAgEIgCAAIAAABIgDAAIAAABIgDAAIAAABIgCAAIAAACIgEgBIAAABIgEAAIAAACIgCAAIAAAAIgFAAIAAACIgDAAIAAAAIgCAAIAAACIgEAAIAAABIgCAAIAAABIgCAAIAAACIgBAAIAAAGIAAAHIgBAWIABAAIAAABIACAAIAAABgAhFAZIABAAIAAABIBvACIAAgBIABAAIAAgFIAAgWIAAgHIABgGIAAgBIgCAAIAAgBIhngCIgCAAIAAgBIgBAAIAAABIAAADIgBAAIAAAFIAAADIgBAAIAAABIAAADIAAACIAAAAIAAABIgBAAIAAABIAAACIAAACIAAAEIgBAAIAAACIgBACIAAAIIgBAAgAg/gUIBrACIAAgBIABAAIAAgHIAAgCIgBAAIAAgBIhpgCIAAABIgBABIAAAFIAAABIgBAAIAAABIABAAIAAABIgBAAgAhWgEIAAAAIAAgBIAAACgAhUgPIAAgBIAAgBIAAgBIAAAAIAAADgABJguIAAgBIAAgCIABABIAAABIAAABg");
	this.shape_374.setTransform(28.3,5.8);

	this.addChild(this.shape_374,this.shape_373,this.shape_372,this.shape_371,this.shape_370,this.shape_369,this.shape_368,this.shape_367,this.shape_366,this.shape_365,this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.shape_347,this.shape_346,this.shape_345,this.shape_344,this.shape_343,this.shape_342,this.shape_341,this.shape_340,this.shape_339,this.shape_338,this.shape_337,this.shape_336,this.shape_335,this.shape_334,this.shape_333,this.shape_332,this.shape_331,this.shape_330,this.shape_329,this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320,this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,0,37.4,11.6);


(lib.Arrowhead = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhehUIC9AZIhXAwIgYBfg");
	this.shape.setTransform(0.6,1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-6.6,19.2,17);


(lib.flukemainscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366FF").s().p("AmBCuIAAlbIMDAAIAAFbg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 1
	this.instance = new lib.recGlow();
	this.instance.setTransform(0,0,1,1,0,0,0,38,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-17.5,76,35);


(lib.fluketerminalpost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.comGlow();
	this.instance.setTransform(0.1,12.3,1,1,0,0,0,8.2,20.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,161,227,0.2)").s().p("AhHB+Qgfg1AAhJQAAhJAfg1QAeg3ApACQAqgCAfA3QAeA1AABJQAABJgeA1QgfA1gqABQgpgBgeg1g");
	this.shape.setTransform(-3.5,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-8.1,16.3,40.8);


(lib.flukehold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366FF").s().p("AhMAzIAAhlICZAAIAABlg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 2
	this.instance = new lib.recGlow();
	this.instance.setTransform(0,0,0.237,0.343,0,0,0,38,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-6,18,12);


(lib.flukedialposition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rndGlow();
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,4.8,4.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366FF").s().p("AggAhQgOgOAAgTQAAgSAOgOQAOgOASAAQATAAAOAOQAOAOAAASQAAATgOAOQgOAOgTAAQgSAAgOgOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-4.7,9.5,9.5);


(lib.ArrowCurved = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Arrowhead("synched",0);
	this.instance.setTransform(9.2,72,0.747,0.747,90.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAUihIAnAZQh5BZA7DRQh5iSCQixg");
	this.shape.setTransform(4.9,87.8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,65.3,15.3,38.8);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_135 = function() {
		/* 
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(135).call(this.frame_135).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7L4/MA2XAAAQAMABALAEQALAFAIAIQAIAIAFALQAEALABAMMAAAAwHQgBAMgEALQgFALgIAIQgIAIgLAFQgLAEgMABMg2XAAAQgZgBgRgRQgRgRgBgZMAAAgwHQABgMAEgLQAFgLAIgIQAIgIALgFQALgEAMgBg");
	mask.setTransform(180,160);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3CFBD").s().p("AuDnzIcHPlI78ACg");
	this.shape.setTransform(90,270);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(136));

	// text
	this.text = new cjs.Text("right, up, ID_s1_txt01", "11px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 29;
	this.text.setTransform(-12.2,-81.5,2.182,2.182);

	this.text.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(45).to({scaleX:2.54,scaleY:2.54,x:61.5,y:-28.5,text:"left, down, ID_s1_txt02"},0).to({_off:true},90).wait(1));

	// arrow
	this.instance = new lib.ArrowCurved();
	this.instance.setTransform(72.8,26.6,1.621,1.618,-56.9,0,0,7.5,73.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({regX:7.4,regY:73.4,rotation:0,skewX:123.1,skewY:-56.9,x:-35.7,y:100.5},0).wait(90).to({x:51,y:71.8},0).wait(1));

	// screwdriver
	this.instance_1 = new lib.Screwdriver01();
	this.instance_1.setTransform(134.6,-40.1,1.459,1.457,-56.9);

	this.instance_2 = new lib.Screwdriver02();
	this.instance_2.setTransform(78.7,-7.9,1.621,1.618,-56.9,0,0,70,6);
	this.instance_2._off = true;

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(2).to({_off:false,x:75.3,y:-14.3},0).to({_off:true},2).wait(2).to({_off:false,x:64.2,y:-14.5},0).to({_off:true},2).wait(2).to({_off:false,x:48.8,y:-14.4},0).wait(33).to({x:-16.9,y:44.8},0).to({_off:true},2).wait(2).to({_off:false,x:64.2,y:-14.5},0).to({_off:true},2).wait(2).to({_off:false,x:75.3,y:-14.3},0).to({_off:true},2).wait(2).to({_off:false,x:87.1},0).wait(78).to({x:90.7,y:-16.3},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false,regX:71.2,regY:6.1,x:67.4,y:-9.1},0).to({_off:true},2).wait(2).to({_off:false,regX:71.1,regY:6,x:54.2,y:-9.2},0).to({_off:true},2).wait(35).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false,regX:71.2,regY:6.1,x:67.4,y:-9.1},0).to({_off:true},2).wait(2).to({_off:false,regX:70,regY:6,x:78.7,y:-7.9},0).to({_off:true},2).wait(79));

	// screw
	this.instance_3 = new lib.FlatheadScrew01();
	this.instance_3.setTransform(54.4,84.8,1.621,1.618,-58.2,0,0,18.6,5.8);

	this.instance_4 = new lib.FlatheadScrew02();
	this.instance_4.setTransform(2.2,110.6,1.621,1.618,-56.9,0,0,18.6,5.9);
	this.instance_4._off = true;

	this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},2).wait(2).to({_off:false,regY:5.9,x:-4.7,y:111},0).to({_off:true},2).wait(2).to({_off:false,rotation:-56.9,x:-16.6,y:110.5},0).to({_off:true},2).wait(2).to({_off:false,regX:18.5,x:-32.1,y:110.7},0).wait(33).to({x:-97.8,y:169.9},0).to({_off:true},2).wait(2).to({_off:false,regX:18.6,x:-16.6,y:110.5},0).to({_off:true},2).wait(2).to({_off:false,rotation:-58.2,x:-4.7,y:111},0).to({_off:true},2).wait(2).to({_off:false,regY:5.8,x:6.9,y:110.7},0).wait(78).to({x:10.5,y:108.7},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false,x:-10.3,y:110.4},0).to({_off:true},2).wait(2).to({_off:false,regY:5.8,x:-23.3,y:110.1},0).to({_off:true},2).wait(35).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false,regY:5.9,x:-10.3,y:110.4},0).to({_off:true},2).wait(2).to({_off:false,x:2.2,y:110.6},0).to({_off:true},2).wait(79));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#D5D5D5"],[0,1],-39.2,8.2,-179.6,181.3).s().p("A8HZAMAAAgx/MA4PAAAMAAAAx/g");
	this.shape_1.setTransform(180,160);

	this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,320);


(lib.slide_1 = function() {
	this.initialize();

	// Layer 1
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(410,341.6,1,1,0,0,0,250,256.6);
	this.anim01.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(143.7,-54.4,385,467);


(lib.slide_7_activity = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{firstPos:1});

	// timeline functions:
	this.frame_0 = function() {
		/* import flash.display.MovieClip;
		import flash.display.SimpleButton;
		import flash.events.MouseEvent;
		import classes.media.MediaElement;
		import classes.media.TextBox.TextBox;
		import flash.display.SimpleButton;
		
		var tBox:TextBox;
		var hotspot01:SimpleButton;
		var hotspot02:SimpleButton;
		var hotspot03:SimpleButton;
		var hotspot04:SimpleButton;
		var hotspot05:SimpleButton;
		var hotspot06:SimpleButton;
		var hotspot07:SimpleButton;
		var hotspot08:SimpleButton;
		
		
		hotspot01.addEventListener(MouseEvent.MOUSE_DOWN, onClick01);
		hotspot02.addEventListener(MouseEvent.MOUSE_DOWN,onClick02);
		hotspot03.addEventListener(MouseEvent.MOUSE_DOWN,onClick03);
		hotspot04.addEventListener(MouseEvent.MOUSE_DOWN,onClick04);
		hotspot05.addEventListener(MouseEvent.MOUSE_DOWN,onClick05);
		hotspot06.addEventListener(MouseEvent.MOUSE_DOWN,onClick06);
		hotspot07.addEventListener(MouseEvent.MOUSE_DOWN,onClick07);
		hotspot08.addEventListener(MouseEvent.MOUSE_DOWN,onClick08);//dial
		
		
		trace(currentFrame);
		trace(totalFrames);
		function onClick01(e){
			tBox.titleTextId = "ID_s5_titleTxt01"
			tBox.bodyTextId = "ID_s5_bodyTxt01"
		};
		
		function onClick02(e){
			tBox.titleTextId = "ID_s5_titleTxt02"
			tBox.bodyTextId = "ID_s5_bodyTxt02"
		};
		function onClick03(e){
			tBox.titleTextId = "ID_s5_titleTxt03"
			tBox.bodyTextId = "ID_s5_bodyTxt03"
		};
		function onClick04(e){
			tBox.titleTextId = "ID_s5_titleTxt04"
			tBox.bodyTextId = "ID_s5_bodyTxt04"
		};
		function onClick05(e){
			tBox.titleTextId = "ID_s5_titleTxt05"
			tBox.bodyTextId = "ID_s5_bodyTxt05"
		};
		function onClick06(e){
			tBox.titleTextId = "ID_s5_titleTxt06"
			tBox.bodyTextId = "ID_s5_bodyTxt06"
		};
		function onClick07(e){
			tBox.titleTextId = "ID_s5_titleTxt07"
			tBox.bodyTextId = "ID_s5_bodyTxt07"
		};
		function onClick08(e){
			//the dial
			if(currentFrame < totalFrames){
				nextFrame();
			}
			else{
				gotoAndStop("firstPos");
			}
		};*/
		/* stop ();
		*/
	}
	this.frame_1 = function() {
		/* tBox.titleTextId = "ID_s5_titleTxt08";
		tBox.bodyTextId = "ID_s5_bodyTxt08";
		stop ();*/
	}
	this.frame_2 = function() {
		/* tBox.titleTextId = "ID_s5_titleTxt09";
		tBox.bodyTextId = "ID_s5_bodyTxt09";
		stop ();*/
	}
	this.frame_3 = function() {
		/* tBox.titleTextId = "ID_s5_titleTxt10";
		tBox.bodyTextId = "ID_s5_bodyTxt10";
		stop ();*/
	}
	this.frame_4 = function() {
		/* tBox.titleTextId = "ID_s5_titleTxt11";
		tBox.bodyTextId = "ID_s5_bodyTxt11";
		stop ();*/
	}
	this.frame_5 = function() {
		/* tBox.titleTextId = "ID_s5_titleTxt12";
		tBox.bodyTextId = "ID_s5_bodyTxt12";
		stop ();*/
	}
	this.frame_6 = function() {
		/* tBox.titleTextId = "ID_s5_titleTxt13";
		tBox.bodyTextId = "ID_s5_bodyTxt13";
		stop ();*/
	}
	this.frame_7 = function() {
		/* tBox.titleTextId = "ID_s5_titleTxt14";
		tBox.bodyTextId = "ID_s5_bodyTxt14";
		stop ();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// dial Button
	this.hotspot08 = new lib.flukedialposition();
	this.hotspot08.setTransform(84.2,186.4,6.312,6.312);
	new cjs.ButtonHelper(this.hotspot08, 0, 1, 2, false, new lib.flukedialposition(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hotspot08).wait(8));

	// buttons
	this.hotspot05 = new lib.flukehold();
	this.hotspot05.setTransform(113.9,134.6,0.99,0.99);
	new cjs.ButtonHelper(this.hotspot05, 0, 1, 2, false, new lib.flukehold(), 3);

	this.hotspot04 = new lib.flukehold();
	this.hotspot04.setTransform(94,134.6,0.99,0.99);
	new cjs.ButtonHelper(this.hotspot04, 0, 1, 2, false, new lib.flukehold(), 3);

	this.hotspot03 = new lib.flukehold();
	this.hotspot03.setTransform(73.8,134.6,0.99,0.99);
	new cjs.ButtonHelper(this.hotspot03, 0, 1, 2, false, new lib.flukehold(), 3);

	this.hotspot07 = new lib.fluketerminalpost();
	this.hotspot07.setTransform(112.4,238.1,0.99,0.99,-3.5);
	new cjs.ButtonHelper(this.hotspot07, 0, 1, 2, false, new lib.fluketerminalpost(), 3);

	this.hotspot06 = new lib.fluketerminalpost();
	this.hotspot06.setTransform(83.6,238.3,1,1,12.2);
	new cjs.ButtonHelper(this.hotspot06, 0, 1, 2, false, new lib.fluketerminalpost(), 3);

	this.hotspot02 = new lib.flukehold();
	this.hotspot02.setTransform(54,134.6,0.99,0.99);
	new cjs.ButtonHelper(this.hotspot02, 0, 1, 2, false, new lib.flukehold(), 3);

	this.hotspot01 = new lib.flukemainscreen();
	this.hotspot01.setTransform(83.8,102.6);
	new cjs.ButtonHelper(this.hotspot01, 0, 1, 2, false, new lib.flukemainscreen(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hotspot01},{t:this.hotspot02},{t:this.hotspot06},{t:this.hotspot07},{t:this.hotspot03},{t:this.hotspot04},{t:this.hotspot05}]}).wait(8));

	// screen
	this.instance = new lib.screen_2();
	this.instance.setTransform(55.8,90.9,0.188,0.188);

	this.instance_1 = new lib.screen_3();
	this.instance_1.setTransform(53.5,91.7,0.188,0.188);

	this.instance_2 = new lib.screen_4();
	this.instance_2.setTransform(50.4,91.5,0.188,0.188);

	this.instance_3 = new lib.screen_5();
	this.instance_3.setTransform(55.8,91.9,0.188,0.188);

	this.instance_4 = new lib.screen_6();
	this.instance_4.setTransform(50.2,91.7,0.188,0.188);

	this.instance_5 = new lib.screen_7();
	this.instance_5.setTransform(65.6,86.4,0.188,0.188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// knob cover
	this.instance_6 = new lib.knob_cover();
	this.instance_6.setTransform(40.9,147.5,0.188,0.188);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8));

	// knobs
	this.instance_7 = new lib.KnobPNG();
	this.instance_7.setTransform(83.9,186.4,0.99,0.99,0.6);

	this.instance_8 = new lib.knob3();
	this.instance_8.setTransform(53.6,155.2,0.188,0.188);

	this.instance_9 = new lib.knob4();
	this.instance_9.setTransform(53.1,155.5,0.188,0.188);

	this.instance_10 = new lib.knob5();
	this.instance_10.setTransform(53.6,155.7,0.188,0.188);

	this.instance_11 = new lib.knob6();
	this.instance_11.setTransform(53.5,155.8,0.188,0.188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{scaleX:0.99,scaleY:0.99,rotation:0.6,x:83.9}}]}).to({state:[{t:this.instance_7,p:{scaleX:0.989,scaleY:0.989,rotation:22.5,x:84.4}}]},2).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

	// multimeter.png
	this.instance_12 = new lib.multimeter();
	this.instance_12.setTransform(16.1,1.3,0.627,0.627);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8));

	// background
	this.instance_13 = new lib.s7_bg();
	this.instance_13.setTransform(85.6,151.9,1.075,1.099,0,0,0,76.8,138.2);
	this.instance_13.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-4,220.4,315);


(lib.slide_5 = function() {
	this.initialize();

	// Layer 1
	this.anim02 = new lib.slide_7_activity();
	this.anim02.setTransform(133.7,85);

	this.addChild(this.anim02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(132.7,81,177,315);


(lib.Main = function() {
	this.initialize();

	// slide 5
	this.slide05 = new lib.slide_5();
	this.slide05.setTransform(310,8.5,1,1,0,0,0,310,8.5);

	// slide 1
	this.slide01 = new lib.slide_1();
	this.slide01.setTransform(310,8.5,1,1,0,0,0,310,8.5);

	this.addChild(this.slide01,this.slide05);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(132.7,-54.4,396.1,467);


// stage content:
(lib.media_2243 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();
	this.instance.setTransform(340,121.1,1,1,0,0,0,340,121.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(472.7,190.6,396.1,467);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
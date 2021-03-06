
/* global Ext, Khusamov */

/**
 * Уравнение окружности.
 * (x - xc)^2 + (y - yc)^2 = r^2
 * где [xc, yc] — координаты центра окружности.
 */

Ext.define("Khusamov.svg.geometry.equation.Circular", {
	
	extend: "Khusamov.svg.geometry.Primitive",
	
	requires: [
		"Ext.draw.Matrix", 
		"Khusamov.svg.geometry.Point",  
		"Khusamov.svg.geometry.Triangle"
	],
	
	uses: ["Khusamov.svg.geometry.Line"],
	
	statics: {
		
		/**
		 * Поиск центра окружности, если известны радиус и две точки, через которые она проходит.
		 * Функция вернет два центра: первый центр слева, второй справа, 
		 * если смотреть от первой точки на вторую.
		 * Khusamov.svg.geometry.equation.Circular.findCenter(x1, y1, x2, y2, radius);
		 * Khusamov.svg.geometry.equation.Circular.findCenter(Number[x1, y1], Number[x2, y2], radius);
		 * Khusamov.svg.geometry.equation.Circular.findCenter(Khusamov.svg.geometry.Point, Khusamov.svg.geometry.Point, radius);
		 * @return {Khusamov.svg.geometry.Point[]}
		 */
		findCenter: function() {
			var point1, point2, radius;
			if (arguments.length == 5) {
				point1 = [arguments[0], arguments[1]];
				point2 = [arguments[2], arguments[3]];
				radius = arguments[4];
			}
			if (arguments.length == 3) {
				point1 = arguments[0];
				point2 = arguments[1];
				radius = arguments[2];
			}
			point1 = Ext.isArray(point1) ? point1 : point1.toArray();
			point2 = Ext.isArray(point2) ? point2 : point2.toArray();
			
			var chordLine = Ext.create("Khusamov.svg.geometry.Line", point1, point2);
			var chord = chordLine.getLength();
			var chordLinear = chordLine.toLinear();
			
			var matrix = Ext.create("Ext.draw.Matrix");
			matrix.translate(-point1[0], -point1[1]);
			matrix.rotate(-chordLinear.getAngle(), point1[0], point1[1]);
			
			var x = chord / 2;
			
			var Triangle = Khusamov.svg.geometry.Triangle;
			var triangle = Triangle.createByPerimeter(radius, chord, radius);
			
			var y = triangle.height();
			
			var result = [[x, y], [x, -y]];
			return result.map(function(point) {
				point = matrix.inverse().transformPoint(point);
				return Ext.create("Khusamov.svg.geometry.Point", point);
			});
		}
		
	},
	
	isCircular: true,
	
	type: "circular",
	
	config: {
		
		center: [0, 0],
		
		radius: 0
		
	},
	
	/**
	 * Ext.create("Khusamov.svg.geometry.equation.Circular", cx, cy, radius);
	 * Ext.create("Khusamov.svg.geometry.equation.Circular", Number[cx, cy], radius);
	 * Ext.create("Khusamov.svg.geometry.equation.Circular", Khusamov.svg.geometry.Point, radius);
	 */
	constructor: function(config) {
		var me = this;
		
		if (arguments.length > 1) {
			config = (arguments.length == 3) ? {
				center: [arguments[0], arguments[1]],
				radius: arguments[2]
			} : {
				center: arguments[0],
				radius: arguments[1]
			};
		}
		
		me.callParent([config]);
	},
	
	applyCenter: function(center) {
		if (!(center instanceof Khusamov.svg.geometry.Point)) {
			center = Ext.create("Khusamov.svg.geometry.Point", center);
		}
		return center;
	},
	
	/*a: function() {
		return this.getA();
	},
	
	b: function() {
		return this.getB();
	},
	
	c: function() {
		return this.getC();
	},
	
	x: function(y) {
		return -(this.b() * y + this.c()) / this.a();
	},
	
	y: function(x) {
		return -(this.a() * x + this.c()) / this.b();
	},*/
	
	
	
	
	/**
	 * Найти точки пересечения окружности с прямой или с другой окружностью.
	 * @param {Khusamov.svg.geometry.equation.Linear | Khusamov.svg.geometry.equation.Circular} primitive 
	 * @return {Khusamov.svg.geometry.Point[] || null}
	 */
	intersection: function(primitive) {
		var result = [];
		var x, y;
		
		var radius = this.getRadius();
		var cx = this.getCenter().x();
		var cy = this.getCenter().y();
		
		var matrix = Ext.create("Ext.draw.Matrix");
		matrix.translate(-cx, -cy);
		
		var Triangle = Khusamov.svg.geometry.Triangle;
		
		// Точки пересечения окружности с другой окружностью
		if (primitive.isCircular) {
			var circular = primitive;
			
			var r1 = radius;
			var r2 = circular.getRadius();
			
			var bridgeLine = Ext.create("Khusamov.svg.geometry.Line", this.getCenter(), circular.getCenter());
			var bridge = bridgeLine.getLength();
			
			var bridgeLinear = bridgeLine.toLinear();
			matrix.rotate(-bridgeLinear.getAngle(), cx, cy);
			
			if (r1 + r2 < bridge) return null; // Окружности не соприкосаются.
			if (Math.abs(r1 - r2) > bridge) return null; // Окружность внутри другой.
			
			y = Triangle.createByPerimeter(r2, bridge, r1).height();
			x = Triangle.createByPerimeter(r1, 2 * y, r1).height();
			x *= r2 > r1 && Triangle.createByPerimeter(r2, 2 * y, r2).height() > bridge ? -1 : 1;
			
			result.push([x, y]);
			if (r1 + r2 > bridge) result.push([x, -y]);
		}
		
		// Точки пересечения окружности с прямой линией
		if (primitive.isLinear) {
			var linear = primitive;
			matrix.rotate(Math.PI / 2 - linear.getAngle(), cx, cy);
			linear = linear.getTransformLinear(matrix);
			x = -linear.c() / linear.a();
			if (radius < Math.abs(x)) return null; // Пересечения нет.
			y = Math.sqrt(Math.pow(radius, 2) - Math.pow(x, 2));
			result.push([x, y]);
			if (radius > Math.abs(x)) result.push([x, -y]);
		}
		
		return result.map(function(point) {
			point = matrix.inverse().transformPoint(point);
			return Ext.create("Khusamov.svg.geometry.Point", point);
		});

	},
	
	
	
	
	
	
	
	
	toString: function(fixed) {
		var f = function(v) { return fixed !== undefined ? v.toFixed(fixed) : v; };
		return Ext.String.format(
			"Circular { (x - {0})^2 + (y - {1})^2 = {2}^2 }",
			f(this.getCenter().x()),
			f(this.getCenter().y()),
			f(this.getRadius())
		);
	},
	
	toArray: function() {
		//return [this.a(), this.b(), this.c()];
	},
	
	/**
	 * Получить уравнение.
	 * @return Object
	 */
	toObject: function() {
		return Ext.Object.merge(this.callParent(), { 
			center: this.getCenter().toArray(), 
			radius: this.getRadius() 
		});
	}
	
});



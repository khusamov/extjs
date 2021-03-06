
/* global Ext */

// при рефакторинге сегмент надо переименовать в ребро, так как сегмент это площадь, а не линия
// а тут мы описываем именно линию как часть пути-многоугольника

Ext.define("Khusamov.svg.geometry.path.segment.Segment", {
	
	requires: ["Khusamov.svg.geometry.path.Point"],
	
	config: {
		
		path: null,
		
		point: [0, 0]
		
	},
	
	constructor: function(config) {
		this.initConfig(config);
	},
	
	applyPoint: function(point) {
		return point ? (Ext.isArray(point) ? Ext.create("Khusamov.svg.geometry.path.Point", point) : point) : null;
	},
	
	updatePoint: function(point, oldPoint) {
		if (oldPoint) oldPoint.un("update", "onParamUpdate", this);
		if (point) {
			point.on("update", "onParamUpdate", this);
			point.setSegment(this);
		}
	},
	
	onParamUpdate: function() {
		var path = this.getPath();
		if (path) path.fireEvent("update");
	},
	
	getPrimitive: Ext.emptyFn,
	
	getIndex: function() {
		var path = this.getPath();
		return path ? path.indexOf(this) : null;
	},
	
	isFirst: function() {
		return this.getIndex() == 0;
	},
	
	isLast: function() {
		return this.getIndex() == this.getPath().getCount() - 1;
	},
	
	getNextSegment: function() {
		return this.getPath().getNextSegment(this.getIndex());
	},
	
	getPrevSegment: function() {
		return this.getPath().getPrevSegment(this.getIndex());
	},
	
	getNextEdge: function() {
		return this.getPath().getNextEdge(this.getIndex());
	},
	
	getPrevEdge: function() {
		return this.getPath().getPrevEdge(this.getIndex());
	},
	
	getPoint: function(absolute) {
		return absolute ? this.callParent().toAbsolute() : this.callParent();
	},
	
	getFirstPoint: function(absolute) {
		return absolute ? this.getPoint().toAbsolute() : this.getPoint();
	},
	
	hasPath: function() {
		return !!this.getPath();
	},
	
	getLastPoint: function(absolute) {
		var path = this.getPath();
		return path ? (this.isLast() && !path.closed ? (absolute ? path.lastPoint.toAbsolute() : path.lastPoint) : this.getNextSegment().getFirstPoint(absolute)) : null;
	},
	
	getLength: function() {
		return 0;
	},
	
	toString: function(body) {
		var me = this;
		var result = [];
		if (me.hasPath()) {
			var point = me.getFirstPoint();
			if (point) {
				if (me.isFirst()) {
					result.push("M " + me.getFirstPoint().toString());
				}
				result.push(body);
				if (me.isLast() && me.getPath().closed) {
					result.push("Z");
				}
			}
		}
		return result.join(" ");
	},
	
	/**
	 * Получить сегмент в виде объекта.
	 * Объект оформляется в виде конфига (по нему можно делать клона), все узлы имеют примитивные типы.
	 * @return {Object}
	 */
	toObject: function() {
		return {
			point: this.getPoint().toObject()
		};
	},
	
	destroy: function() {
		this.getPoint().un("update", "onParamUpdate", this);
	},
	
	/**
	 * Клонировать (сделать копию) сегмент.
	 * @return {Khusamov.svg.geometry.path.segment.Segment}
	 */
	clone: function() {
		return new this.self(this.toObject());
	},
	
	split: function(distance) {
		var result = [];
		result.push(this.clone());
		result.push(this.clone());
		result[1].setPoint(this.getPrimitive().getInnerPoint(distance).toArray());
		return result;
	}
	
});
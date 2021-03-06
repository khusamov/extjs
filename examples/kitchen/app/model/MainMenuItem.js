
/* global Ext */

Ext.define("Kitchen.model.MainMenuItem", {
	
	extend: "Ext.data.TreeModel",
	
	proxy: {
		type: "memory",
		reader: {
			type: "json",
			rootProperty: "children"
		}
	},
	
	fields: [{
		name: "path",
		type: "string"
	}, {
		name: "file",
		type: "string"
	}, {
		name: "attachmentTitle",
		type: "string"
	}, {
		name: "attachments",
		type: "auto"
	}],
	
	getFilePath: function() {
		var root = this.getPath("path");
		return (root == "/" ? "" : root) + "/" + this.getFileName();
	},
	
	getFileName: function() {
		return this.get("file") || "index.js";
	},
	
	getFileType: function() {
		return this.getFileName().split(".")[1];
	},
	
	hasAttachments: function() {
		return this.get("attachments") || ["js"].indexOf(this.getFileType()) != -1;
	},
	
	equal: function(menuItem) {
		return this.getFilePath() == menuItem.getFilePath();
	},
	
	getAttachmentList: function() {
		var result = [];
		if (this.hasAttachments()) {
			result.push(this.getFilePath());
		}
		return result;
	},
	
    /**
     * 
     * @override http://javascript.ru/forum/extjs/59758-ext-data-treemodel-ext-data-nodeinterface.html
     * 
     * Gets the hierarchical path from the root of the current node.
     * Изменения по сравнению с официальным Ext.data.NodeInterface.getPath:
     * 1. Пропускаем пустые элементы пути.
     * 2. Добавлена опция withoutFirstSeparator.
     * @param {String} [field] Имя поля, на основании значений которого строится путь. 
     * По умолчанию равен значению поля, название которого хранится в Model.idProperty.
     * @param {String} [separator='/'] Использовать разделитель.
     * @param {String} [withoutFirstSeparator=false] Пропустить первый разделитель.
     * @return {String} The node path
     */
    getPath: function(field, separator, withoutFirstSeparator) {
        field = field || this.idProperty;
        separator = separator || '/';

        var path = [this.get(field)],
            parent = this.parentNode;

        while (parent) {
        	var cur = Ext.String.trim(parent.get(field));
        	// Пустые элементы пропускаем.
        	if (cur) path.unshift(cur);
            parent = parent.parentNode;
        }
        return (withoutFirstSeparator ? "" : separator) + path.join(separator);
    }
	
});
Ext.data.JsonP.Khusamov_svg_desktop_Desktop({"tagname":"class","name":"Khusamov.svg.desktop.Desktop","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Desktop.js","href":"Desktop.html#Khusamov-svg-desktop-Desktop"}],"aliases":{"widget":["khusamov-svg-desktop"]},"alternateClassNames":["Khusamov.svg.Desktop"],"extends":"Khusamov.svg.Svg","mixins":[],"requires":["Khusamov.svg.desktop.Board"],"uses":[],"members":[{"name":"autoEl","tagname":"property","owner":"Khusamov.svg.Svg","id":"property-autoEl","meta":{"private":true}},{"name":"baseCls","tagname":"property","owner":"Khusamov.svg.desktop.Desktop","id":"property-baseCls","meta":{"private":true}},{"name":"isSvg","tagname":"property","owner":"Khusamov.svg.Svg","id":"property-isSvg","meta":{"private":true}},{"name":"rulers","tagname":"property","owner":"Khusamov.svg.desktop.Desktop","id":"property-rulers","meta":{"private":true}},{"name":"type","tagname":"property","owner":"Khusamov.svg.Svg","id":"property-type","meta":{"private":true}},{"name":"board","tagname":"method","owner":"Khusamov.svg.desktop.Desktop","id":"method-board","meta":{}},{"name":"createSvg","tagname":"method","owner":"Khusamov.svg.Svg","id":"method-createSvg","meta":{}},{"name":"getBoard","tagname":"method","owner":"Khusamov.svg.desktop.Desktop","id":"method-getBoard","meta":{"private":true}},{"name":"getSvg","tagname":"method","owner":"Khusamov.svg.Svg","id":"method-getSvg","meta":{}},{"name":"initComponent","tagname":"method","owner":"Khusamov.svg.desktop.Desktop","id":"method-initComponent","meta":{"private":true}},{"name":"svg","tagname":"method","owner":"Khusamov.svg.Svg","id":"method-svg","meta":{"private":true}}],"code_type":"ext_define","id":"class-Khusamov.svg.desktop.Desktop","short_doc":"Рабочий стол. ...","component":false,"superclasses":["Khusamov.svg.element.Element","Khusamov.svg.Svg"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Khusamov.svg.Desktop</div><h4>Hierarchy</h4><div class='subclass first-child'>Khusamov.svg.element.Element<div class='subclass '><a href='#!/api/Khusamov.svg.Svg' rel='Khusamov.svg.Svg' class='docClass'>Khusamov.svg.Svg</a><div class='subclass '><strong>Khusamov.svg.desktop.Desktop</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Khusamov.svg.desktop.Board' rel='Khusamov.svg.desktop.Board' class='docClass'>Khusamov.svg.desktop.Board</a></div><h4>Files</h4><div class='dependency'><a href='source/Desktop.html#Khusamov-svg-desktop-Desktop' target='_blank'>Desktop.js</a></div></pre><div class='doc-contents'><p>Рабочий стол.\nСодержит в себе кульман и линейки.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-autoEl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Khusamov.svg.Svg' rel='Khusamov.svg.Svg' class='defined-in docClass'>Khusamov.svg.Svg</a><br/><a href='source/Svg2.html#Khusamov-svg-Svg-property-autoEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Khusamov.svg.Svg-property-autoEl' class='name expandable'>autoEl</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{tag: &quot;svg&quot;, version: &quot;1.1&quot;, xmlns: &quot;http://www.w3.org/2000/svg&quot;, &quot;xmlns:xlink&quot;: &quot;http://www.w3.org/1999/xlink&quot;}</code></p></div></div></div><div id='property-baseCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Khusamov.svg.desktop.Desktop'>Khusamov.svg.desktop.Desktop</span><br/><a href='source/Desktop.html#Khusamov-svg-desktop-Desktop-property-baseCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Khusamov.svg.desktop.Desktop-property-baseCls' class='name expandable'>baseCls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Ext.baseCSSPrefix + &quot;khusamov-svg-desktop&quot;</code></p><p>Overrides: <a href=\"#!/api/Khusamov.svg.Svg-property-baseCls\" rel=\"Khusamov.svg.Svg-property-baseCls\" class=\"docClass\">Khusamov.svg.Svg.baseCls</a></p></div></div></div><div id='property-isSvg' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Khusamov.svg.Svg' rel='Khusamov.svg.Svg' class='defined-in docClass'>Khusamov.svg.Svg</a><br/><a href='source/Svg2.html#Khusamov-svg-Svg-property-isSvg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Khusamov.svg.Svg-property-isSvg' class='name expandable'>isSvg</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-rulers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Khusamov.svg.desktop.Desktop'>Khusamov.svg.desktop.Desktop</span><br/><a href='source/Desktop.html#Khusamov-svg-desktop-Desktop-property-rulers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Khusamov.svg.desktop.Desktop-property-rulers' class='name expandable'>rulers</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-type' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Khusamov.svg.Svg' rel='Khusamov.svg.Svg' class='defined-in docClass'>Khusamov.svg.Svg</a><br/><a href='source/Svg2.html#Khusamov-svg-Svg-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Khusamov.svg.Svg-property-type' class='name expandable'>type</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;svg&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-board' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Khusamov.svg.desktop.Desktop'>Khusamov.svg.desktop.Desktop</span><br/><a href='source/Desktop.html#Khusamov-svg-desktop-Desktop-method-board' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Khusamov.svg.desktop.Desktop-method-board' class='name expandable'>board</a>( <span class='pre'>Khusamov</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Khusamov</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createSvg' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Khusamov.svg.Svg' rel='Khusamov.svg.Svg' class='defined-in docClass'>Khusamov.svg.Svg</a><br/><a href='source/Svg2.html#Khusamov-svg-Svg-method-createSvg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Khusamov.svg.Svg-method-createSvg' class='name expandable'>createSvg</a>( <span class='pre'></span> ) : <a href=\"#!/api/Khusamov.svg.Svg\" rel=\"Khusamov.svg.Svg\" class=\"docClass\">Khusamov.svg.Svg</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Создать элемент SVG-холст. ...</div><div class='long'><p>Создать элемент SVG-холст.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Khusamov.svg.Svg\" rel=\"Khusamov.svg.Svg\" class=\"docClass\">Khusamov.svg.Svg</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBoard' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Khusamov.svg.desktop.Desktop'>Khusamov.svg.desktop.Desktop</span><br/><a href='source/Desktop.html#Khusamov-svg-desktop-Desktop-method-getBoard' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Khusamov.svg.desktop.Desktop-method-getBoard' class='name expandable'>getBoard</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>getSurface: function() {\n        return this.board.getSurface();\n    }, ...</div><div class='long'><p>getSurface: function() {\n        return this.board.getSurface();\n    },</p>\n</div></div></div><div id='method-getSvg' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Khusamov.svg.Svg' rel='Khusamov.svg.Svg' class='defined-in docClass'>Khusamov.svg.Svg</a><br/><a href='source/Svg2.html#Khusamov-svg-Svg-method-getSvg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Khusamov.svg.Svg-method-getSvg' class='name expandable'>getSvg</a>( <span class='pre'></span> ) : <a href=\"#!/api/Khusamov.svg.Svg\" rel=\"Khusamov.svg.Svg\" class=\"docClass\">Khusamov.svg.Svg</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Получить корневой элемент SVG-холст. ...</div><div class='long'><p>Получить корневой элемент SVG-холст.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Khusamov.svg.Svg\" rel=\"Khusamov.svg.Svg\" class=\"docClass\">Khusamov.svg.Svg</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Khusamov.svg.desktop.Desktop'>Khusamov.svg.desktop.Desktop</span><br/><a href='source/Desktop.html#Khusamov-svg-desktop-Desktop-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Khusamov.svg.desktop.Desktop-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>config: {\n        scalable: false,\n        translatable: false\n    }, ...</div><div class='long'><p>config: {\n        scalable: false,\n        translatable: false\n    },</p>\n</div></div></div><div id='method-svg' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Khusamov.svg.Svg' rel='Khusamov.svg.Svg' class='defined-in docClass'>Khusamov.svg.Svg</a><br/><a href='source/Svg2.html#Khusamov-svg-Svg-method-svg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Khusamov.svg.Svg-method-svg' class='name expandable'>svg</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Корневой контейнер элемента. ...</div><div class='long'><p>Корневой контейнер элемента.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'></span> : <a href=\"#!/api/Khusamov.svg.Svg\" rel=\"Khusamov.svg.Svg\" class=\"docClass\">Khusamov.svg.Svg</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});
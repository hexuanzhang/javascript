/**
 * 
 * @content 观察者模式
 * @date    2016-06-12
 */
function Publish() {
	this.topicList = []; //主题列表
	this.subscribeList = {}; //订阅者列表
	//this.subUid = -1;
}
Publish.prototype = {
	constructor: Publish,
	hasTopic: function(topic) { //检查是否存在当前主题
		var tempList = this.topicList,
			result = false;
		if (tempList.indexOf) {
			result = tempList.indexOf(topic) === -1 ? false : true;
		} else {
			for (var i = 0; i < tempList.length; i++) {
				if (tempList[i] === topic) {
					result = true;
				}
			}
		}

		return result;
	},
	addTopic: function(topic) { //增加主题
		this.topicList.push(topic);
		this.subscribeList[topic] = [];
	},
	countObserver: function(topic) { //统计当前主题订阅数
		return this.hasTopic(topic) ? this.subscribeList[topic].length : 0;
	},
	subscribe: function(topic, fn) { //订阅主题
		if (!this.hasTopic(topic)) {
			this.addTopic(topic);
		}

		this.subscribeList[topic].push(fn);
	},
	unSubscribe: function(topic, fn) { //取消订阅
		if (!this.hasTopic(topic)) {
			return;
		}

		for (var i = 0; i < this.countObserver(topic); i++) {
			if (this.subscribeList[topic][i] === fn) {
				this.subscribeList[topic].splice(i, 1);
				return;
			}
		}
	},
	publish: function(topic, data) { //发布主题内容
		if (!this.hasTopic(topic)) {
			return;
		}

		for (var i = 0; i < this.countObserver(topic); i++) {
			this.subscribeList[topic][i].call(this, data);
		}
	}
}

//将对象o拥有发布者功能
function extend(extension, obj) {
	for (var key in extension) {
		obj[key] = extension[key];
	}
	obj.topicList = [];
	obj.subscribeList = [];
}


var publish = new Publish();

function a() {
	console.log("a:" + arguments[0]);
}

function b() {
	console.log("b:" + arguments[0]);
}

publish.subscribe("number", a);
publish.publish("number", 1);

publish.subscribe("date", a);
publish.subscribe("date", b);
publish.publish("date", new Date());

var show = {};
extend(publish, show);

show.subscribe("date", a);
show.subscribe("date", b);
show.publish("date", new Date());
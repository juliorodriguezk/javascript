/*
Pruebas iniciales javascript
*/
$MC = window.$MC ||	{};
(	function(moduleContext){
	var proto, log;
	/**
	 * [RequestMonitor description]
	 */
	moduleContext.RequestMonitor = function(appId, userId){
		this.startMonitoringDate = new Date().getTime();		
		this.appId = appId || null;
		this.userId = userId || null;
		this.performedRequests = 0;
		this.successRequests = 0;
		this.errorRequests = 0;		
		this.timedOutRequests = 0;	
		this.currentRequests = 0;
		this.requestsData = {};
	};
	/**
	 * [proto description]
	 * @type {[type]}
	 */
	proto = moduleContext.RequestMonitor.prototype;
	/**
	 * [SAVE_INTERVAL description]
	 * @type {Number}
	 */
	proto.SAVE_INTERVAL = 0;
	/**
	 * [clean description]
	 * @return {[type]} [description]
	 */
	proto.clean = function(){
		var key, subKey;
        for(key in this.requestsData){
            for (subKey in key){
            	delete this.requestsData.key.subKey;
            }
            delete key;
        }
        this.requestsData = {};	
	};
	/**
	 * [startProcess description]
	 * @param  {[type]} requestMethod [description]
	 * @param  {[type]} url           [description]
	 * @return {[type]}               [description]
	 */
	proto.startProcess = function (requestMethod, url){
		this.requestsData.id = {};
		this.requestsData.id.startTime = new Date().getTime(); 
		this.requestsData.id.url = url;
		this.requestsData.id.requestMethod = requestMethod;
		this.requestsData.id.timedOut = false;
		this.requestsData.id.errorReceived = false;
		this.requestsData.id.resultCode = null;		
	};
	/**
	 * [endProcess description]
	 * @param  {[type]} id   [description]
	 * @param  {[type]} code [description]
	 * @return {[type]}      [description]
	 */
	proto.endProcess = function (id, code){
		this.requestsData.id.endTime = new Date().getTime();
		this.requestsData.id.resultCode = code;	 
		this.currentRequests-=1;

	};
	/**
	 * [updatePerformed description]
	 * @param  {[type]} requestMethod [description]
	 * @param  {[type]} url           [description]
	 * @return {[type]}               [description]
	 */
	proto.updatePerformed = function(requestMethod, url){
		var id = this.performedRequests;
		this.performedRequests+=1;
		this.currentRequests+=1;
		return id;
	};
	/**
	 * [updateSuccess description]
	 * @param  {[type]} id   [description]
	 * @param  {[type]} code [description]
	 * @return {[type]}      [description]
	 */
	proto.updateSuccess = function(id, code){
		this.successRequests+=1;
		this.endProcess(id, code);
		return id;
	};
	/**
	 * [updateError description]
	 * @param  {[type]} id   [description]
	 * @param  {[type]} code [description]
	 * @return {[type]}      [description]
	 */
	proto.updateError = function(id, code){
		this.errorRequests+=1;
		this.requestsData.id.errorReceived = true;		
		this.endProcess(id, code);
		return id;
	};
	/**
	 * [updateTimedOut description]
	 * @param  {[type]} id   [description]
	 * @param  {[type]} code [description]
	 * @return {[type]}      [description]
	 */
	proto.updateTimedOut = function(id, code){
		this.timedOutRequests+=1;
		this.requestsData.id.timedOut = true;
		this.endProcess(id, code);
		return id;
	};
	}
)($MC)
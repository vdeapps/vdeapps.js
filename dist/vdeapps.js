var vdeapps = {
	name : "vdeApps parent objects",
	obj : {}, // Objects loaded

	/**
	 * Initialisation des objets fonction init obligatoire Voir ready.js pour
	 * l'execution de la fonction
	 */
	init : function() {
		for (obj in this.obj) {
			if (this.obj[obj].init !== undefined)
				this.obj[obj].init()
		}
	},
	
	load: function(objectname, obj){
		this.obj[objectname] = obj;
	},
	
	get: function(objectname){
		if (undefined == this.obj[objectname]){
			throw new Error(objectname + ' does not exists')
		}
		else
			return this.obj[objectname]
	},

	/**
	 * Execute function by dynamic name
	 * executeFunctionByName("My.Namespace.functionName", window, arguments);
	 * executeFunctionByName("Namespace.functionName", My, arguments);
	 * 
	 * @param functionName
	 * @param context
	 * @param args
	 * @returns result function
	 */
	executeFunctionByName : function(functionName, context /* , args */) {
		if (typeof context == 'undefined') {
			context = window
		}
		var args = Array.prototype.slice.call(arguments).splice(2, 2)
		var namespaces = functionName.split(".")

		$.each(namespaces, function(key, value) {
			context = context[value]
		})
		if (typeof context == 'function') {
			return context.apply(this, args)
		}
		return false
	}

}

var http = {
	/**
	 * Statut de retour http
	 */
	STATUS_GET_OK : 200,
	STATUS_GET_NOTFOUND : 404,
	STATUS_DELETE_OK : 200,
	STATUS_DELETE_NOTFOUND : 404,
	STATUS_POST_OK : 201,
	STATUS_POST_NOTFOUND : 404,
	STATUS_POST_CONFLICT : 409,
	STATUS_PUT_OK : 200,
	STATUS_PUT_NOCONTENT : 204,
	STATUS_PUT_NOTFOUND : 404,
	STATUS_PATCH_OK : 200,
	STATUS_PATCH_NOCONTENT : 204,
	STATUS_PATCH_NOTFOUND : 404
}
